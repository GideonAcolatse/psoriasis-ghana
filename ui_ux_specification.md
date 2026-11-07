# UI/UX Specification & Wireframe Blueprint: Psoriasis Association of Ghana (PAG)

**Document Version:** 1.0.0  
**Design Standard:** Apple Human Interface Guidelines (HIG) + 21st UI Modern Web Guidelines  
**Primary Device Target:** Mobile-First (Android 360px–412px viewport in Ghana) & Desktop (1280px–1920px)  
**Palette Identity:** Medical Authority & Ghanaian Warmth  

---

## 1. Design Tokens & Visual Foundations

### 1.1 Color Palette
The color hierarchy is derived directly from the official PAG logo and brochure materials:

| Token Name | Hex Code | Purpose & Application |
| :--- | :--- | :--- |
| `--color-forest-emerald` | `#114232` | **Primary Brand Color.** Headers, primary hero backgrounds, navigation bars, and medical authority stamps. |
| `--color-vibrant-green` | `#2E7D32` | **Secondary Brand Color.** Mission statement banners, impact badge accents, positive medical states. |
| `--color-warm-terracotta` | `#E06D28` | **Action & Accent.** "Donate Now" CTA buttons, high-priority alert pills, emergency hotlines, and warm human highlights. |
| `--color-surface-linen` | `#F8FAF9` | **Base Background.** Soft, warm off-white that reduces eye fatigue compared to harsh `#FFFFFF`. |
| `--color-surface-white` | `#FFFFFF` | **Card Surfaces.** Elevated cards, modals, and content containers. |
| `--color-text-charcoal` | `#17211E` | **Primary Typography.** High contrast (WCAG AAA compliant) deep forest charcoal for crystal clear readability. |
| `--color-text-muted` | `#586561` | **Secondary Typography.** Subtitles, metadata, dates, and caption text. |
| `--color-border-subtle` | `rgba(17, 66, 50, 0.08)` | **Dividers & Card Outlines.** Subtle, crisp structural framing without heavy contrast borders. |

---

### 1.2 Typography Hierarchy
- **Display & Section Titles:** `Plus Jakarta Sans` or `Geist Sans`
  - High weight (`font-bold`, 700), tight optical leading (`leading-tight`), optical negative letter-spacing (`tracking-tight`, -0.02em) on display sizes.
- **Body & Medical Articles:** `Inter` or `Geist Sans`
  - Regular (`font-normal`, 400) and Medium (`font-medium`, 500), comfortable leading (`leading-relaxed`, 1.65), neutral tracking for effortless reading by patients of all ages.

---

### 1.3 Motion & Interaction Physics (Apple HIG Inspired)
- **Instant Touch-Down Feedback:** Buttons, cards, and interactive elements respond immediately on `pointerdown` / `touchstart` with an instant micro-scale transform (`scale(0.97)` and `opacity: 0.92`), never waiting for `click` or touch release.
- **Spring Curves:** Animations use critically damped spring physics (`damping: 1.0`, `stiffness: 320`) for sheets and dialogs; smooth momentum flicks (`damping: 0.82`) for carousels.
- **Translucent Materials:** Navigation headers and mobile floating action bars use translucent glassmorphism (`backdrop-filter: blur(16px)` with `background: rgba(255, 255, 255, 0.85)` in light mode, or `rgba(17, 66, 50, 0.92)` on dark sections).
- **Reduced-Motion Fallbacks:** If the user has `prefers-reduced-motion` enabled, all spring translations automatically switch to gentle opacity cross-fades.

---

## 2. Public Portal: Page-by-Page Wireframes

### 2.1 Global Header & Navigation
```
+----------------------------------------------------------------------------------------------------+
|  [Logo: PAG] Psoriasis Association of Ghana     About  |  Education  |  Outreaches  |  Gallery  |  GWAS  |  NHIS  |  [+233 24 517 9569]  [Donate Now (MoMo/Card)]  |
+----------------------------------------------------------------------------------------------------+
```
- **Mobile Viewport:** Clean header with PAG Logo, phone call icon, and a hamburger trigger that slides out an interruptible drawer from the right.
- **Floating Patient Care Pill (Always Accessible):** A subtle persistent top bar: *"Living with Psoriasis? You are not alone. 24/7 Helpline: +233 024 517 9569"*.

---

### 2.2 Homepage (`/`) Wireframe Layout

```
====================================================================================================
SECTION 1: HERO & MISSION HOOK
----------------------------------------------------------------------------------------------------
[ Tag: Ghana's First Registered Psoriasis NGO ]
# Fighting Psoriasis, Restoring Dignity.
Overcoming stigma, funding genetic breakthroughs, and bringing life-changing care 
to patients and families across Ghana.

[ 📞 Speak with Support ]     [ 🧡 Donate via Mobile Money / Card ]
(Instant WhatsApp / Call)      (Direct GHS / USD Giving)

[ Hero Visual: High-Impact Carousel of World Psoriasis Day 2024 Advocates in Tema ]
====================================================================================================
SECTION 2: LIVE IMPACT METRICS BAR (Connected to CMS Metrics)
----------------------------------------------------------------------------------------------------
  +------------------+  +------------------+  +------------------+  +------------------+
  |      500+        |  |     3,000+       |  |       1st        |  |    June 2019     |
  | People Screened  |  | GWAS Study       |  | Psoriasis NGO    |  | Year Founded     |
  | Per Outreach     |  | Participants     |  | in Ghana         |  | in Tema, Accra   |
  +------------------+  +------------------+  +------------------+  +------------------+
====================================================================================================
SECTION 3: WHAT WE DO (The 5 Strategic Pillars)
----------------------------------------------------------------------------------------------------
  [Card 1: Medical Outreaches]      [Card 2: Public Education]      [Card 3: Policy Advocacy]
  Free community clinics connecting  Combating myths & stigma via   Fighting for NHIS inclusion
  patients to dermatologists.        media & school campaigns.      to stop GHS 1,500-2,500 costs.

  [Card 4: Genetic GWAS Research]   [Card 5: Patient Support Circles]
  Africa's 1st Genome Study with     Emotional, economic, and peer
  the University of Milan.           support groups across Ghana.
====================================================================================================
SECTION 4: THE NHIS ADVOCACY SPOTLIGHT
----------------------------------------------------------------------------------------------------
  [ Interactive Cost Comparison Graphic ]
  Current Out-of-Pocket Burden:  GHS 1,500 – GHS 2,500 per month (Catastrophic for families)
  Proposed NHIS Coverage:        GHS 0 – GHS 150 (Affordable, life-saving access)
  [ Read the Policy Brief (PDF) ]    [ Add Your Name to the Petition ]
====================================================================================================
SECTION 5: LATEST OUTREACHES & PATIENT STORIES
----------------------------------------------------------------------------------------------------
  [Photo Card 1]                     [Photo Card 2]                 [Photo Card 3]
  Tema World Psoriasis Day 2024      Kumasi Outreach Recap          Overcoming Stigma: Kofi's Story
  520 people screened · Oct 2024     310 people screened · Aug 2024 Educational Feature
====================================================================================================
SECTION 6: INSTITUTIONAL COALITION & PARTNERS
----------------------------------------------------------------------------------------------------
  [IFPA]   [GlobalSkin]   [PsorAfrica]   [Ghana Health Service]   [Univ of Milan]   [mySkin Clinic]
====================================================================================================
```

---

### 2.3 Mobile Sticky Bottom Quick-Action Bar
For users browsing on mobile devices in Ghana, standard navigation menus are often slow or cumbersome. A persistent bottom bar provides one-tap access to primary needs:

```
+--------------------------------------------------------------------------------------+
|   [ 📞 Call Helpline ]      [ 💬 WhatsApp Support ]      [ 🧡 Donate (MoMo) ]        |
+--------------------------------------------------------------------------------------+
```
- **Call Helpline:** Initiates direct tel link `tel:+233245179569`.
- **WhatsApp Support:** Deep-links into WhatsApp with pre-filled greeting: *"Hello PAG, I would like guidance regarding psoriasis..."*
- **Donate:** Pops open a fluid bottom sheet with quick Mobile Money options.

---

### 2.4 Research Portal (`/gwas-research`)
Dedicated to the scientific breakthrough with the University of Milan:
- **Header:** *"Africa's First Genome-Wide Association Study (GWAS) on Psoriasis"*
- **Research Summary Card:** Clear, non-academic summary explaining why genetic research on African skin biology is essential to developing effective therapies.
- **Data Counter:** `3,000+` DNA samples and patient profiles collected across Ghana.
- **Academic Download Center:** Downloadable PDF study methodology, ethics committee approvals, and international symposium presentations.
- **Scientific Inquiries Form:** Direct form for dermatologists, geneticists, and institutions seeking collaboration.

---

### 2.5 Donation Flow (`/donate`)
Optimized for high trust and zero friction:
- **Preset Amount Buttons:** `GHS 50` | `GHS 100` | `GHS 250` | `GHS 500` | `Custom Amount`
- **Currency Switcher:** `GHS (Ghana Cedis)` | `USD ($)` | `EUR (€)` | `GBP (£)`
- **Frequency Selector:** `One-time Gift` | `Monthly Sustainer`
- **Payment Method Badges:** Displays official logos of **MTN MoMo**, **Telecel Cash**, **AT Money**, **Visa**, and **Mastercard**.
- **Financial Transparency Callout:** *"100% of community donations fund patient medical supplies, free clinical screenings, and local advocacy."*

---

### 2.6 Dedicated Community & Outreach Gallery (`/gallery`)
An immersive visual storytelling hub showcasing PAG's real impact across Ghana:

```
====================================================================================================
HEADER:
# Our Work in Action: Community & Outreach Gallery
Explore our clinical screenings, World Psoriasis Day walks, educational forums, and patient circles.

FILTER TABS:
[ All Photos ]  [ World Psoriasis Day ]  [ Community Screenings ]  [ Patient Forums ]  [ Advocacy ]
====================================================================================================
EVENT ALBUM 1: World Psoriasis Day 2024 — Tema Awareness Walk & Clinic
Date: October 2024 · Location: Michel Camp / Tema · 520 People Screened
+----------------------+  +----------------------+  +----------------------+  +----------------------+
| [Photo 1: Banner]    |  | [Photo 2: Screening] |  | [Photo 3: Team]      |  | [Photo 4: Forum]     |
| "Psoriasis & Family" |  | Nurse consultation   |  | Volunteers in shirts |  | Miss Ruth Abeka      |
+----------------------+  +----------------------+  +----------------------+  +----------------------+

EVENT ALBUM 2: Greater Accra Community Screening & Free Consultation
Date: July 2024 · Location: Greater Accra · 340 People Screened
+----------------------+  +----------------------+  +----------------------+  +----------------------+
| [Photo 5: Triage]    |  | [Photo 6: Medicine]  |  | [Photo 7: Handout]   |  | [Photo 8: Group]     |
+----------------------+  +----------------------+  +----------------------+  +----------------------+
====================================================================================================
```
- **Apple-Grade Lightbox Viewer:**
  - Tapping any image expands it into an interruptible, full-screen lightbox with a dark blurred backdrop (`backdrop-filter: blur(20px)`).
  - Supports 1:1 mobile touch drag-to-dismiss and left/right swipe navigation.
  - Displays high-contrast caption, date, location, and a *"Share this photo"* button.

---

## 3. Custom Admin CMS (`/admin`): Wireframe Layouts

### 3.1 Admin Navigation & Shell Structure
```
+---------------------------------------------------------------------------------------------------+
| [PAG Admin]   Dashboard | Articles | Outreaches | Metrics | Documents | Donations | [Ruth Abeka ▾]|
+---------------------------------------------------------------------------------------------------+
```
- **Left Sidebar / Top Navigation:**
  - `📊 Overview` (System health, recent activities, quick links)
  - `📝 Articles & Stories` (Create, edit, publish blog posts)
  - `📸 Outreaches & Galleries` (Manage events and photo uploads)
  - `🔢 Live Impact Stats` (Directly edit counters on the homepage)
  - `📄 Policy Documents` (PDF whitepapers and reports)
  - `💳 Donation Logs` (Paystack transaction history & donor list)
  - `👥 Staff Accounts` (Manage team logins & permissions)

---

### 3.2 Screen 1: Admin Dashboard (`/admin`)
```
+---------------------------------------------------------------------------------------------------+
| Dashboard Overview                                                [ + New Post ]  [ + New Event ]  |
+---------------------------------------------------------------------------------------------------+
|  +---------------------+  +---------------------+  +---------------------+  +-------------------+  |
|  | Published Articles  |  | Outreaches Logged   |  | Total Donations     |  | Unread Inquiries  |  |
|  |        14           |  |         8           |  |   GHS 34,250.00     |  |         5         |  |
|  +---------------------+  +---------------------+  +---------------------+  +-------------------+  |
|                                                                                                   |
|  LIVE IMPACT NUMBERS ON HOMEPAGE                       [ Edit Numbers ]                           |
|  • People Screened per Outreach: 500+                                                             |
|  • GWAS Study Participants:      3,000+                                                           |
|  • Year Founded:                 June 2019                                                        |
|                                                                                                   |
|  RECENT DONATION LOG (Paystack Real-Time)                                                         |
|  -----------------------------------------------------------------------------------------------  |
|  Donor Name           Channel             Amount           Date             Status                |
|  Kwame Mensah         MTN MoMo            GHS 150.00       Today, 14:20     [ Success (Green) ]   |
|  Dr. Elena Rossi      Mastercard (USD)    $100.00          Yesterday        [ Success (Green) ]   |
|  Anonymous            Telecel Cash        GHS 50.00        Nov 05           [ Success (Green) ]   |
+---------------------------------------------------------------------------------------------------+
```

---

### 3.3 Screen 2: Article & Post Editor (`/admin/posts/new` or `/edit`)
Designed specifically for non-technical team members with a clean Notion-like experience:

```
+---------------------------------------------------------------------------------------------------+
| [ ← Back to Articles ]                                                  [ Save Draft ] [ Publish ] |
+---------------------------------------------------------------------------------------------------+
|  ARTICLE TITLE                                                                                    |
|  [ Type post title here, e.g., World Psoriasis Day 2026: Restoring Hope in Ghana...              ] |
|                                                                                                   |
|  POST CATEGORY & AUTHOR                                                                           |
|  Category: [ Advocacy ▾ ]       Author: [ Miss Ruth Adjoa Abeka ▾ ]                               |
|                                                                                                   |
|  COVER IMAGE (Drag & Drop or Click to Browse)                                                     |
|  +---------------------------------------------------------------------------------------------+  |
|  |   [ 🖼️ Drag high-res photo here (Auto-compressed to WebP) ]                                  |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  CONTENT EDITOR (Tiptap WYSIWYG)                                                                  |
|  [ B ] [ I ] [ H2 ] [ H3 ] [ Bullet List ] [ Numbered List ] [ Quote ] [ Insert Photo ] [ Link ]  |
|  -----------------------------------------------------------------------------------------------  |
|  Write the full article content here with formatting...                                           |
|                                                                                                   |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

### 3.4 Screen 3: Outreach & Gallery Manager (`/admin/outreaches`)
```
+---------------------------------------------------------------------------------------------------+
| Outreach Events                                                          [ + Log New Outreach ]   |
+---------------------------------------------------------------------------------------------------+
| Event Title:    [ Tema Community Outreach - World Psoriasis Day                                  ] |
| Date:           [ 2024-10-29 ]             Location: [ Michel Camp / Tema Community Center       ] |
| People Screened:[ 520        ]                                                                    |
|                                                                                                   |
| EVENT PHOTO GALLERY                                                                               |
| +-----------------------------------------------------------------------------------------------+ |
| |  [ + Drag & drop 10–20 event photos here ]                                                    | |
| +-----------------------------------------------------------------------------------------------+ |
| Current Photos in this Event:                                                                     |
| [ Thumbnail 1 ] [ Caption: Community screening hall ]    [ Remove ]                               |
| [ Thumbnail 2 ] [ Caption: Dermatologist consultation ]  [ Remove ]                               |
| [ Thumbnail 3 ] [ Caption: Volunteer registration desk ] [ Remove ]                               |
|                                                                                                   |
| [ Save Outreach & Update Gallery ]                                                                |
+---------------------------------------------------------------------------------------------------+
```

---

### 3.5 Screen 4: Live Impact Numbers Editor Modal
A 1-click modal to update public numbers without touching database tables:
- `People Screened Label`: e.g., `People Reached Per Single Outreach`
- `People Screened Value`: `500+`
- `GWAS Participants Label`: e.g., `GWAS Study Participants`
- `GWAS Participants Value`: `3,000+`
- `Status`: Changes take effect on the live homepage instantly via Next.js ISR on-demand revalidation.

---

## 4. Accessibility & Inclusive Design (WCAG 2.1 AA)

1. **Color Contrast:** All body text meets at least a **4.5:1** contrast ratio against its background. Headers achieve **7:1** against linen/white surfaces.
2. **Accessible Touch Targets:** Every button, tab, and form input on mobile viewports has a minimum hit dimension of **48px x 48px**.
3. **Screen Reader Landmarks:** Full semantic HTML5 structure (`<header>`, `<main>`, `<nav>`, `<article>`, `<footer>`, `<aside>`) with descriptive `aria-label` tags for all interactive icons (e.g. WhatsApp, phone links, and close buttons).
4. **Cultural Sensitivity & Image Privacy:** No clinical before-and-after skin disease photography is shown without clear editorial context and verified patient consent badges.

---

## 5. UI/UX Verification Checklist

- [ ] Mobile viewport tested down to 360px (Samsung Galaxy & Tecno/Infinix devices common in Ghana).
- [ ] Tap targets meet or exceed 48px.
- [ ] Touchdown press response implemented with spring feedback.
- [ ] Notion-style WYSIWYG editor has no complicated technical jargon.
- [ ] Sticky bottom action bar on mobile does not obscure page footer or content.
- [ ] Paystack donation selector accommodates Mobile Money as the primary payment method.
