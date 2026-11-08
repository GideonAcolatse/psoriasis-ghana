import { neon } from "@neondatabase/serverless";

const connectionString = "postgresql://neondb_owner:npg_gecorjIk51dQ@ep-icy-poetry-bc5t6j9k-pooler.c-16.us-east-1.aws.neon.tech/neondb?sslmode=require";
const sql = neon(connectionString);

console.log("Connecting to Neon PostgreSQL...");

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

  // 6. Petitions table
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

  console.log("All tables created successfully!");

  // Seed metrics
  await sql`
    INSERT INTO pag_metrics (key, label, value, subtext)
    VALUES
      ('people_screened', 'People Reached', '500+', 'Per single medical outreach'),
      ('gwas_cohort', 'GWAS Study Participants', '3,000+', 'Pioneering African genetic study'),
      ('pioneer_status', 'National Pioneer', '1st', 'Registered Psoriasis NGO in Ghana'),
      ('year_founded', 'Serving Since', 'June 2019', 'Founded by Miss Ruth Adjoa Abeka')
    ON CONFLICT (key) DO NOTHING;
  `;

  // Seed baseline donation records
  await sql`
    INSERT INTO pag_donations (id, reference, donor_name, donor_email, amount, currency, channel, date, status)
    VALUES
      ('don-1', 'PAY-GH-982341', 'Kwame Mensah', 'kmensah@gmail.com', 250, 'GHS', 'MTN Transfer', 'Today, 15:42', 'success'),
      ('don-2', 'PAY-GH-982119', 'Abena Serwaa', 'abena.s@yahoo.com', 100, 'GHS', 'Telecel Cash', 'Today, 11:15', 'success'),
      ('don-3', 'PAY-INT-554210', 'Dr. Elena Rossi', 'e.rossi@unimi.it', 150, 'USD', 'Card', 'Yesterday', 'success'),
      ('don-4', 'PAY-GH-981884', 'Anonymous Donor', 'supporter@psoriasisgh.org', 500, 'GHS', 'MTN Transfer', 'Nov 05, 2026', 'success')
    ON CONFLICT (reference) DO NOTHING;
  `;

  console.log("Seeding verified!");

  const tables = await sql`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public'
    ORDER BY table_name;
  `;

  console.log("Public tables in Neon:", tables.map(t => t.table_name));
} catch (err) {
  console.error("Error setting up Neon tables:", err);
}
