export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: "Advocacy" | "Health & Care" | "Outreach" | "Research" | "Community";
  author: string;
  coverImage: string;
  publishedAt: string;
  status: "published" | "draft";
  readTime: string;
}

export interface OutreachEvent {
  id: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  peopleScreened: number;
  summary: string;
  category: "World Psoriasis Day" | "Community Screening" | "Educational Forum" | "Advocacy Walk";
  coverImage: string;
  galleryImages: {
    url: string;
    caption: string;
  }[];
}

export interface DocumentResource {
  id: string;
  title: string;
  category: "GWAS Research" | "NHIS Policy Brief" | "Annual Report" | "Patient Guide";
  fileUrl: string;
  fileSize: string;
  summary: string;
  downloads: number;
  publishedDate: string;
}

export interface LiveMetric {
  key: string;
  label: string;
  value: string;
  subtext: string;
}

export interface DonationRecord {
  id: string;
  donorName: string;
  donorEmail: string;
  amount: number;
  currency: string;
  channel: "MTN Mobile Money" | "Telecel Cash" | "AT Money" | "Card";
  reference: string;
  date: string;
  status: "success" | "pending" | "failed";
}

export interface InquiryMessage {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  type: "Patient Support" | "Volunteer" | "Corporate Partnership" | "Research";
  message: string;
  createdAt: string;
  status: "unread" | "reviewed";
}
