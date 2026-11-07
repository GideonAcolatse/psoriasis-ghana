# Psoriasis Association of Ghana (PAG) Web Platform Architecture Plan

## Goal
Architect an accessible, high-performance, mobile-first web platform for the Psoriasis Association of Ghana (PAG) to drive national patient education, policy advocacy (NHIS inclusion), GWAS research dissemination, and seamless local/international donation intake without writing implementation code at this planning phase.

---

## System Architecture Overview

```
+-----------------------------------------------------------------------------------+
|                           Public Client Layer (Browser)                           |
|  - Next.js 15 (App Router) / React 19 / TypeScript / Tailwind CSS                 |
|  - Edge-Rendered Public Pages (SSG + ISR) for high-speed Ghanaian 3G/4G access    |
|  - Floating WhatsApp / Hotline Quick Triage + Paystack Donation Flow              |
+------------------------------------------+----------------------------------------+
                                           |
                                           | HTTPS
                                           v
+-----------------------------------------------------------------------------------+
|                        Unified Backend & API Layer (Next.js)                      |
|  - Route Handlers & Server Actions (Node.js/Edge Runtime)                         |
|  - Auth Middleware (Route protection for `/admin/*`)                              |
|  - Paystack Webhook Handlers + Resend Email Dispatcher                            |
+--------------------+---------------------+--------------------+-------------------+
                     |                     |                    |
                     v                     v                    v
+---------------------------+  +--------------------+  +----------------------------+
|  Custom Admin CMS Panel   |  |   Database & Auth  |  |    Media & Cloud Storage   |
|  - Route: `/admin`        |  |  - Supabase / PG   |  |  - Supabase Storage or     |
|  - WYSIWYG Editor (Tiptap)|  |  - Drizzle / Prisma|  |    Cloudinary / S3         |
|  - Drag & Drop Uploader   |  |  - Session Auth &  |  |  - Auto-compression to     |
|  - Metric & Stat Editor   |  |    Role RBAC       |  |    WebP/AVIF format        |
|  - Donation Audit Logs    |  |    (Admin/Editor)  |  |  - PDF Whitepapers & Docs  |
+---------------------------+  +--------------------+  +----------------------------+
```

---

## Tasks

- [x] Task 1: Finalize Brand System & Color Tokens â†’ Verify: Color tokens match PAG branding (Primary Deep Emerald `#114232`, Accent Warm Terracotta `#E06D28`, Secondary Leaf Green `#2E7D32`, Background Clean Linen `#F8FAF9`, Card Surface `#FFFFFF`, High-contrast dark typography `#17211E`) defined in `ui_ux_specification.md`.
- [x] Task 2: Define Complete Information Architecture & Sitemap â†’ Verify: 7 primary routes documented (`/`, `/about`, `/programs`, `/gwas-research`, `/advocacy`, `/get-involved`, `/contact`) with metadata and user flows in `concepts_brief.md`.
- [ ] Task 3: Architect Localized Payment & Donation Flow â†’ Verify: Paystack integration architecture verified for Mobile Money (MTN, Telecel, AT) and Card checkout with webhook verification specs and zero client-side secret exposure in `system_architecture.md`.
- [x] Task 4: Design Custom Admin CMS Panel Architecture (`/admin`) â†’ Verify: Database schema, role-based auth (Admin vs. Editor), Tiptap rich-text editor integration, and cloud media upload pipelines defined for Articles, Outreach Galleries, Impact Metrics, and PDF Whitepapers in `system_architecture.md`.
- [x] Task 5: Design Mobile-First UI/UX Wireframe Guidelines â†’ Verify: Layouts follow Apple HIG (fluid spring feedback, minimum 48px touch targets, sticky thumb-friendly CTA bar on mobile viewport) documented in `ui_ux_specification.md`.
- [ ] Task 6: Define Low-Bandwidth Performance & Edge Caching Strategy â†’ Verify: Bundle budget <120KB initial JS, automatic AVIF/WebP image compression, offline-tolerant service worker configuration outlined.
- [ ] Task 7: Establish Accessibility & Medical Ethics Guardrails â†’ Verify: WCAG 2.1 AA checklist, anonymous inquiry pathway, and consent-gated patient photography policy documented.

---

## Done When
- [ ] Complete system architecture, technical specifications, and UI/UX design plans are validated and documented without writing project source code.
- [ ] Concepts brief (`concepts_brief.md`), Research Prompt, and Task Roadmap are aligned with PAG's organizational mission and local Ghanaian context.

---

## Notes
- Client domain: `psoriasisgh.org`.
- Core advocacy goal: Inclusion of psoriasis treatment under Ghana's National Health Insurance Scheme (NHIS) to eliminate GHS 1,500–2,500 monthly drug cost.
- Target audience is heavily mobile (Android, 3G/4G). Pages must be exceptionally light and load in under 1.5 seconds.
