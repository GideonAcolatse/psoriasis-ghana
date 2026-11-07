# Concept Brief: Psoriasis Association of Ghana (PAG) Web Platform

**Document Version:** 1.0.0  
**Status:** Approved for Architectural Review (EGM Stage 1)  
**Client:** Psoriasis Association of Ghana (PAG)  
**Tagline:** *Fighting Psoriasis, Restoring Dignity*  
**Founder & Executive Director:** Miss Ruth Adjoa Abeka  
**Headquarters:** Michel Camp Road, Tema, Greater Accra, Ghana  
**Domain Target:** `www.psoriasisgh.org`  

---

## 1. Executive Summary & Mission Context
The Psoriasis Association of Ghana (PAG) was founded in June 2019 as Ghana's first registered non-profit organization dedicated to empowering individuals living with psoriasis and psoriatic arthritis. The organization operates at both grassroots and international levels, combining community-level medical outreaches across Ghana with global clinical trials and genetic research. 

### Core Pillars & Strategic Imperatives
1. **Stigma Eradication & Public Education:** Psoriasis in Sub-Saharan Africa carries profound social stigma and misunderstanding (often incorrectly viewed as contagious, spiritual, or infectious). PAG counters myths through community education, media campaigns, and school/family outreach.
2. **Policy Advocacy (NHIS Inclusion):** A major financial burden for patients is chronic medication, which currently costs between GHS 1,500 and GHS 2,500 monthly. PAG spearheads advocacy to have psoriasis treatments covered under Ghana's National Health Insurance Scheme (NHIS).
3. **Landmark Genetic Research:** PAG is a co-leader in Africa's FIRST Genome-Wide Association Study (GWAS) for psoriasis in partnership with the University of Milan (reaching 3,000+ GWAS study participants).
4. **Direct Patient & Caregiver Support:** Running medical outreaches reaching 500+ individuals per outreach, connecting patients to dermatologists, offering peer support networks, and distributing essential skin therapies.
5. **Global & Institutional Coalition:** Member of IFPA (International Federation of Psoriasis Associations), GlobalSkin affiliate, PsorAfrica regional participant, partner to GAAPP, Ghana Health Service (GHS), GhNCDA, and mySkin & Laser Clinic.

---

## 2. Target Audience & User Personas

| Persona | Core Motivations & Pain Points | Primary User Journey on Website |
| :--- | :--- | :--- |
| **Newly Diagnosed Patient / Family Member** | Scared, confused, experiencing social isolation or severe physical distress; seeking reputable medical facts, reassurance, and local doctor directories. | Reaches mobile-optimized Educational Hub; reads simplified condition guides in plain English; finds local support group / helpline (+233 24 517 9569). |
| **Local / International Donor & Sponsor** | Wants proof of financial accountability, tangible community impact, and frictionless donation via MoMo (MTN/Telecel/AT) or international cards (Visa/Mastercard). | Reviews "Our Impact" dashboard (500+ per outreach, 3,000+ GWAS participants); clicks "Donate Now"; completes 2-step Paystack checkout; receives instant receipt. |
| **Clinical & Academic Researcher (e.g., IFPA, Univ of Milan)** | Requires whitepapers, GWAS study methodology, clinical trial ethics data, patient registry statistics, and institutional partnership points of contact. | Visits "GWAS Research" portal; reviews publication abstracts, conference papers, and downloads formal academic collaboration forms. |
| **Policy Makers & Health Officials (MOH / GHS / NHIS)** | Needs economic case studies, cost analyses (GHS 1,500–2,500/mo drug burden), policy briefs, and petitions for NHIS formulary inclusion. | Accesses Policy Advocacy page; downloads whitepapers; reviews petition progress; schedules official consultation. |
| **Volunteers & Corporate Partners** | Corporates, pharmaceutical distributors, logistics firms, or volunteers looking to sponsor outreaches or donate supplies. | Visits "Partner With Us"; fills targeted 5-field inquiry form for financial, supply, skills, or research partnership. |

---

## 3. Product Goals & Conversion Architecture

1. **Brand Authority & Legitimacy:** Instantly establish PAG as Ghana's premier, globally recognized dermatology NGO through institutional partner badges (IFPA, GlobalSkin, GHS, Univ of Milan).
2. **Fundraising Velocity:** Enable continuous micro-donations and corporate sponsorships via Ghana-native payment gateways (Mobile Money & Card integration).
3. **Patient Intake & Support Routing:** Provide an immediate, safe contact channel (WhatsApp Floating Action Button, click-to-call, and confidential contact form).
4. **Digital Asset & Newsroom Hub:** Publish outreach event recaps, high-resolution photo galleries from World Psoriasis Day, press releases, and research updates via a bespoke custom admin dashboard.

---

## 4. Key Functional Requirements

1. **Multi-Currency Donation Engine:** Single and recurring donation tiers supporting GHS (Ghana Cedis), USD, EUR, and GBP with localized payment options (MTN MoMo, Telecel Cash, AT Money, Visa, Mastercard) via Paystack.
2. **Resource & Education Portal:** Categorized symptom guides, FAQ addressing myths vs. facts, skincare tips for tropical African climates, and family support resources.
3. **Outreach & Event Tracker & Gallery:** Dedicated photo gallery and interactive timeline of upcoming and past medical outreaches with interactive map tags, participant metrics, and categorized photo albums.
4. **Research & Policy Repository:** Secure document library offering downloadable PDFs (GWAS research findings, NHIS policy whitepapers, annual reports).
5. **Membership & Volunteer Registration:** Clean intake form allowing medical professionals, students, and advocates to register as PAG volunteers.
6. **Custom Built-In Admin CMS Panel (`/admin`):** Fully tailored, password-protected admin portal built directly into the web application. Designed specifically for PAG staff with zero unnecessary third-party abstractions. Includes:
   - Role-Based Authentication (Super Admin vs. Editor).
   - Rich Text Article & Blog Publishing (WYSIWYG editor).
   - Media & Photo Gallery Uploader with automated WebP compression and cloud storage.
   - Live Metric Editor (easily change "500+ per outreach", "3,000+ GWAS participants").
   - Document Uploader for PDF policy briefs and research papers.
   - Transaction & Donation Log Viewer (Paystack webhooks).

---

## 5. Non-Functional & Regional Requirements

- **Network-Aware Performance:** The site must load under 1.5s on 3G/4G connections in Ghana (Lighthouse Performance score > 95). Static generation (SSG) with aggressive edge caching.
- **Accessibility & Inclusion:** WCAG 2.1 AA compliant. High contrast ratios for visual impairments, legible typography for diverse reading levels, and responsive screen-reader markup.
- **Data Privacy & Medical Ethics:** No patient photos or stories published without explicit written consent. Anonymous submission mode for stigma-sensitive patient questions.
- **Mobile-First UX:** >80% of traffic in Ghana originates from Android smartphones. Layouts and touch targets must be optimized for one-hand thumb reach.
