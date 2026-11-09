import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.psoriasisgh.org"),
  title: "Psoriasis Association of Ghana | Fighting Psoriasis, Restoring Dignity",
  description:
    "Ghana's first registered non-profit organization dedicated to empowering psoriasis patients through education, medical outreaches, NHIS advocacy, and landmark GWAS genetic research.",
  keywords: [
    "Psoriasis Association of Ghana",
    "PAG Ghana",
    "Ruth Adjowa Abekah",
    "Psoriasis Ghana",
    "Psoriatic Arthritis Ghana",
    "Dermatology Ghana",
    "NHIS Psoriasis",
    "GWAS Psoriasis Africa",
    "Tema health NGO",
  ],
  openGraph: {
    title: "Psoriasis Association of Ghana (PAG)",
    description: "Fighting Psoriasis, Restoring Dignity across Ghana. Founded June 2019.",
    url: "https://www.psoriasisgh.org",
    siteName: "Psoriasis Association of Ghana",
    images: [
      {
        url: "/images/hero-outreach.jpg",
        width: 1200,
        height: 630,
        alt: "Psoriasis Association of Ghana Awareness March in Tema",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body
        className="min-h-screen flex flex-col bg-brand-linen text-brand-charcoal antialiased selection:bg-brand-emerald selection:text-white pb-14 lg:pb-0"
        suppressHydrationWarning
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
