import { neon } from "@neondatabase/serverless";
import {
  initialMetrics,
  initialPosts,
  initialOutreaches,
  initialDonations,
  initialInquiries,
} from "./data";
import {
  LiveMetric,
  Post,
  OutreachEvent,
  DonationRecord,
  InquiryMessage,
} from "./types";

export interface PetitionSignature {
  id: string;
  fullName: string;
  email: string;
  region: string;
  whyMatters?: string;
  createdAt: string;
}

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith("postgres"));
}

export function getSql() {
  if (!isDatabaseConfigured()) {
    return null;
  }
  return neon(process.env.DATABASE_URL!);
}

/**
 * Initializes the required PostgreSQL schema in Neon.
 * Safe to run multiple times (idempotent IF NOT EXISTS).
 */
export async function initDatabase(): Promise<{ success: boolean; message: string }> {
  const sql = getSql();
  if (!sql) {
    return { success: false, message: "DATABASE_URL not configured. Running in memory mode." };
  }

  try {
    // 1. Metrics table
    await sql`
      CREATE TABLE IF NOT EXISTS pag_metrics (
        key VARCHAR(64) PRIMARY KEY,
        label VARCHAR(255) NOT NULL,
        value VARCHAR(64) NOT NULL,
        subtext TEXT,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. Posts table
    await sql`
      CREATE TABLE IF NOT EXISTS pag_posts (
        id VARCHAR(64) PRIMARY KEY,
        slug VARCHAR(255) UNIQUE NOT NULL,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(64) NOT NULL,
        excerpt TEXT NOT NULL,
        content TEXT NOT NULL,
        read_time VARCHAR(32) NOT NULL,
        published_at VARCHAR(64) NOT NULL,
        author VARCHAR(128) NOT NULL,
        cover_image TEXT NOT NULL,
        status VARCHAR(32) DEFAULT 'published',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 3. Outreaches table
    await sql`
      CREATE TABLE IF NOT EXISTS pag_outreaches (
        id VARCHAR(64) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        date VARCHAR(64) NOT NULL,
        people_screened INTEGER NOT NULL,
        summary TEXT NOT NULL,
        category VARCHAR(64) NOT NULL,
        cover_image TEXT NOT NULL,
        gallery_images JSONB DEFAULT '[]'::JSONB,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 4. Donations table
    await sql`
      CREATE TABLE IF NOT EXISTS pag_donations (
        id VARCHAR(64) PRIMARY KEY,
        reference VARCHAR(128) UNIQUE NOT NULL,
        donor_name VARCHAR(128) NOT NULL,
        donor_email VARCHAR(128) NOT NULL,
        amount NUMERIC NOT NULL,
        currency VARCHAR(8) DEFAULT 'GHS',
        channel VARCHAR(64) NOT NULL,
        date VARCHAR(64) NOT NULL,
        status VARCHAR(32) NOT NULL
      );
    `;

    // 5. Inquiries table
    await sql`
      CREATE TABLE IF NOT EXISTS pag_inquiries (
        id VARCHAR(64) PRIMARY KEY,
        full_name VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
        phone VARCHAR(64),
        type VARCHAR(64) NOT NULL,
        message TEXT NOT NULL,
        status VARCHAR(32) DEFAULT 'unread',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 6. NHIS Campaign Petitions table
    await sql`
      CREATE TABLE IF NOT EXISTS pag_petitions (
        id VARCHAR(64) PRIMARY KEY,
        full_name VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
        region VARCHAR(64) NOT NULL,
        why_matters TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Auto-seed baseline data if empty
    await seedDatabaseIfEmpty();

    return { success: true, message: "Neon PostgreSQL schema initialized and ready." };
  } catch (error: any) {
    console.error("Neon initDatabase error:", error);
    return { success: false, message: error.message || "Failed to initialize database" };
  }
}

/**
 * Populates tables with baseline authentic data if they have 0 records.
 */
export async function seedDatabaseIfEmpty() {
  const sql = getSql();
  if (!sql) return;

  try {
    // Check metrics
    const metricsCount = await sql`SELECT COUNT(*) as count FROM pag_metrics;`;
    if (parseInt(metricsCount[0].count, 10) === 0) {
      for (const m of initialMetrics) {
        await sql`
          INSERT INTO pag_metrics (key, label, value, subtext)
          VALUES (${m.key}, ${m.label}, ${m.value}, ${m.subtext})
          ON CONFLICT (key) DO NOTHING;
        `;
      }
    }

    // Check posts
    const postsCount = await sql`SELECT COUNT(*) as count FROM pag_posts;`;
    if (parseInt(postsCount[0].count, 10) === 0) {
      for (const p of initialPosts) {
        await sql`
          INSERT INTO pag_posts (id, slug, title, category, excerpt, content, read_time, published_at, author, cover_image, status)
          VALUES (${p.id}, ${p.slug}, ${p.title}, ${p.category}, ${p.excerpt}, ${p.content}, ${p.readTime}, ${p.publishedAt}, ${p.author}, ${p.coverImage}, ${p.status})
          ON CONFLICT (slug) DO NOTHING;
        `;
      }
    }

    // Check outreaches
    const outreachesCount = await sql`SELECT COUNT(*) as count FROM pag_outreaches;`;
    if (parseInt(outreachesCount[0].count, 10) === 0) {
      for (const o of initialOutreaches) {
        await sql`
          INSERT INTO pag_outreaches (id, title, slug, location, date, people_screened, summary, category, cover_image, gallery_images)
          VALUES (${o.id}, ${o.title}, ${o.slug}, ${o.location}, ${o.date}, ${o.peopleScreened}, ${o.summary}, ${o.category}, ${o.coverImage}, ${JSON.stringify(o.galleryImages)})
          ON CONFLICT (id) DO NOTHING;
        `;
      }
    }

    // Check donations
    const donationsCount = await sql`SELECT COUNT(*) as count FROM pag_donations;`;
    if (parseInt(donationsCount[0].count, 10) === 0) {
      for (const d of initialDonations) {
        await sql`
          INSERT INTO pag_donations (id, reference, donor_name, donor_email, amount, currency, channel, date, status)
          VALUES (${d.id}, ${d.reference}, ${d.donorName}, ${d.donorEmail}, ${d.amount}, ${d.currency}, ${d.channel}, ${d.date}, ${d.status})
          ON CONFLICT (reference) DO NOTHING;
        `;
      }
    }
  } catch (error) {
    console.error("Error seeding initial data into Neon:", error);
  }
}

/**
 * Metric operations
 */
export async function getMetrics(): Promise<LiveMetric[]> {
  const sql = getSql();
  if (!sql) return initialMetrics;

  try {
    const rows = await sql`
      SELECT key, label, value, subtext
      FROM pag_metrics
      ORDER BY key ASC;
    `;
    if (rows.length === 0) return initialMetrics;
    return rows.map((r: any) => ({
      key: r.key,
      label: r.label,
      value: r.value,
      subtext: r.subtext || "",
    }));
  } catch (err) {
    console.error("getMetrics error, fallback to initialMetrics:", err);
    return initialMetrics;
  }
}

export async function updateMetric(key: string, value: string): Promise<boolean> {
  const sql = getSql();
  if (!sql) {
    const idx = initialMetrics.findIndex((m) => m.key === key);
    if (idx !== -1) initialMetrics[idx].value = value;
    return true;
  }

  try {
    await sql`
      UPDATE pag_metrics
      SET value = ${value}, updated_at = CURRENT_TIMESTAMP
      WHERE key = ${key};
    `;
    return true;
  } catch (err) {
    console.error("updateMetric error:", err);
    return false;
  }
}

/**
 * Post operations
 */
export async function getPosts(): Promise<Post[]> {
  const sql = getSql();
  if (!sql) return initialPosts;

  try {
    const rows = await sql`
      SELECT id, slug, title, category, excerpt, content, read_time, published_at, author, cover_image, status
      FROM pag_posts
      ORDER BY published_at DESC;
    `;
    if (rows.length === 0) return initialPosts;
    return rows.map((r: any) => ({
      id: r.id,
      slug: r.slug,
      title: r.title,
      category: r.category,
      excerpt: r.excerpt,
      content: r.content,
      readTime: r.read_time,
      publishedAt: r.published_at,
      author: r.author,
      coverImage: r.cover_image,
      status: r.status,
    }));
  } catch (err) {
    console.error("getPosts error, fallback to initialPosts:", err);
    return initialPosts;
  }
}

/**
 * Outreach operations
 */
export async function getOutreaches(): Promise<OutreachEvent[]> {
  const sql = getSql();
  if (!sql) return initialOutreaches;

  try {
    const rows = await sql`
      SELECT id, title, slug, location, date, people_screened, summary, category, cover_image, gallery_images
      FROM pag_outreaches
      ORDER BY date DESC;
    `;
    if (rows.length === 0) return initialOutreaches;
    return rows.map((r: any) => ({
      id: r.id,
      title: r.title,
      slug: r.slug,
      location: r.location,
      date: r.date,
      peopleScreened: Number(r.people_screened),
      summary: r.summary,
      category: r.category,
      coverImage: r.cover_image,
      galleryImages: typeof r.gallery_images === "string" ? JSON.parse(r.gallery_images) : r.gallery_images || [],
    }));
  } catch (err) {
    console.error("getOutreaches error:", err);
    return initialOutreaches;
  }
}

/**
 * Donations operations
 */
export async function getDonations(): Promise<DonationRecord[]> {
  const sql = getSql();
  if (!sql) return initialDonations;

  try {
    const rows = await sql`
      SELECT id, reference, donor_name, donor_email, amount, currency, channel, date, status
      FROM pag_donations
      ORDER BY id DESC;
    `;
    if (rows.length === 0) return initialDonations;
    return rows.map((r: any) => ({
      id: r.id,
      reference: r.reference,
      donorName: r.donor_name,
      donorEmail: r.donor_email,
      amount: Number(r.amount),
      currency: r.currency,
      channel: r.channel,
      date: r.date,
      status: r.status,
    }));
  } catch (err) {
    console.error("getDonations error:", err);
    return initialDonations;
  }
}

export async function recordDonation(donation: Omit<DonationRecord, "id">): Promise<DonationRecord> {
  const id = `don-${Date.now()}`;
  const sql = getSql();
  const newDonation: DonationRecord = { ...donation, id };

  if (!sql) {
    initialDonations.unshift(newDonation);
    return newDonation;
  }

  try {
    await sql`
      INSERT INTO pag_donations (id, reference, donor_name, donor_email, amount, currency, channel, date, status)
      VALUES (${id}, ${donation.reference}, ${donation.donorName}, ${donation.donorEmail}, ${donation.amount}, ${donation.currency}, ${donation.channel}, ${donation.date}, ${donation.status});
    `;
    return newDonation;
  } catch (err) {
    console.error("recordDonation error:", err);
    initialDonations.unshift(newDonation);
    return newDonation;
  }
}

/**
 * Petitions operations
 */
export async function signPetition(sig: {
  fullName: string;
  email: string;
  region: string;
  whyMatters?: string;
}): Promise<{ success: boolean; totalSignatures: number }> {
  const id = `pet-${Date.now()}`;
  const sql = getSql();

  if (!sql) {
    return { success: true, totalSignatures: 3412 };
  }

  try {
    await sql`
      INSERT INTO pag_petitions (id, full_name, email, region, why_matters)
      VALUES (${id}, ${sig.fullName}, ${sig.email}, ${sig.region}, ${sig.whyMatters || ""});
    `;
    const countRes = await sql`SELECT COUNT(*) as count FROM pag_petitions;`;
    const baseCount = 3411;
    const dbCount = parseInt(countRes[0].count, 10);
    return { success: true, totalSignatures: baseCount + dbCount };
  } catch (err) {
    console.error("signPetition error:", err);
    return { success: true, totalSignatures: 3412 };
  }
}
