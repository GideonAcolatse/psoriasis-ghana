# Psoriasis Association of Ghana (PAG) - Web Platform & Admin Studio

> Official web portal and content management studio for the **Psoriasis Association of Ghana (PAG)**, a patient-led non-governmental advocacy and health education organization based in Tema, Greater Accra, Ghana.

---

## 🌟 Mission & Scope

Founded in June 2019 by **Miss Ruth Adjoa Abeka**, PAG is dedicated to:
- **Fighting Psoriasis, Restoring Dignity:** Supporting over 250,000 Ghanaians living with psoriasis and psoriatic arthritis.
- **National Health Insurance Scheme (NHIS) Advocacy:** Campaigning to include modern topical, systemic, and phototherapy dermatological therapies under NHIS coverage to alleviate catastrophic out-of-pocket costs (GHS 1,500 - 2,500 monthly).
- **Clinical & Community Outreaches:** Free medical screenings, specialist dermatology consultations, psychological support, and community education across Accra, Tema, Kumasi, Takoradi, and Tamale.
- **Genetic Research Collaboration:** Africa's 1st Psoriasis Genome-Wide Association Study (GWAS) with the **University of Milan (Università degli Studi di Milano)** analyzing genetic predispositions in 3,000+ Ghanaian participants.

---

## 🚀 Key Features

### Public Portal
- **Education Hub:** Medically-vetted facts vs. common myths (contagion, spiritual stigma, skin lightening misconceptions).
- **Advocacy & NHIS Petition:** Downloadable policy briefs, parliamentary memoranda, and direct petition signer.
- **Outreach & Gallery:** Visual showcase of community engagements, World Psoriasis Day marches, and clinical consults with lightbox viewer.
- **GWAS Research Page:** Downloadable research study brief and genetic exploration overview.
- **Donation Gateway:** Paystack integration supporting local Ghanaian payment rails (MTN Mobile Money, Telecel Cash, AT Money, and Cards).
- **Helpline & Contact:** Direct emergency contact, WhatsApp support, and Tema clinic location details.

### PAG Admin Studio (`/admin`)
- **Executive Authentication (`/admin/login`):** Secure staff sign-in with quick credentials fill for demonstrations.
- **Live Impact Metric Editor:** Real-time editable impact metrics (patients supported, outreaches held, NHIS signatures, regions reached).
- **Newsroom & Article Manager:** Create, edit, and publish clinical articles and association press releases.
- **Outreach & Photo Manager:** Log medical outreaches with dates, patient counts, venues, and media uploads.
- **Donation Ledger:** Transaction monitoring for mobile money and card contributions with receipt verification.
- **Document Repository:** Downloadable official PDF documents (Annual Profile, NHIS Policy Brief, Milan Research Overview).
- **Session Controls:** Global sign-out and instant public site navigation.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **UI & Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom Ghanaian brand palette (PAG Emerald `#1B5E20`, Warm Sand Linen `#FAF8F5`, Terracotta `#D35400`)
- **Typography:** Instrument Sans & Playfair Display
- **Icons:** [Lucide React](https://lucide.dev/) (Strict zero-emoji compliance)
- **Design Philosophy:** Apple Human Interface Guidelines (fluid motion, instantaneous touch-down response, translucent materials, accessible contrast)
- **Language:** TypeScript 5+

---

## 📦 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm or pnpm or yarn

### Installation
```bash
git clone https://github.com/GideonAcolatse/psoriasis-ghana.git
cd psoriasis-ghana
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

- **Public Site:** [http://localhost:3000](http://localhost:3000)
- **Admin Studio:** [http://localhost:3000/admin](http://localhost:3000/admin) (Default demo credentials pre-filled)

### Production Build
```bash
npm run build
npm run start
```

---

## 📄 License & Affiliations

Psoriasis Association of Ghana (PAG) is proudly affiliated with:
- **IFPA** (International Federation of Psoriasis Associations)
- **GAAPP** (Global Allergy & Airways Patient Platform)
- **GlobalSkin** (International Alliance of Dermatology Patient Organizations)
- **PsorAfrica** Regional Network
- **Ghana Health Service (GHS)**
- **Ghana Non-Communicable Diseases Alliance (GhNCDA)**
- **University of Milan** (Department of Medical Biotechnology and Translational Medicine)
