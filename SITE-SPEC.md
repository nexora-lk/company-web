# Prestige Glamour Group — Full Site Specification

This document is the complete blueprint of the website. Every page, every section, every piece of content is recorded here so the site can be regenerated from scratch.

---

## 1. Site-wide

### Stack
- **Framework:** Next.js 16.2.6 (App Router, Turbopack)
- **React:** 19.2.4
- **TypeScript:** strict mode, `@/*` alias = project root
- **Styling:** single global CSS file `app/globals.css` (custom CSS, no Tailwind)
- **Fonts:** Inter (body) + Playfair Display (display) via `next/font/google`

### Brand
- **Company:** Prestige Glamour Group (PGG)
- **Tagline:** Sri Lanka's Leading Agri-Investment Conglomerate
- **Founded:** 2013
- **Reg. No.:** PV 118342
- **HQ:** Maggona, Nawaloka Medical Centre Area, Kalutara, Sri Lanka
- **Email:** info@prestigeglamourgroup.com
- **Phones:** 034 2233669 · 075 2038613 · 075 1693138
- **WhatsApp:** +94 75 169 3138
- **Office hours:** Mon–Fri 8:30–17:30 · Sat 8:30–13:00
- **Color tokens** (used in CSS): `--prestige-gold`, `--forest-green`, `--dark-text`, `--medium-text`, navy, warm

### Bank accounts (used on Home + Events)
| Bank | Type | Holder | Number | Branch / Notes |
|---|---|---|---|---|
| Seylan Bank PLC | Current | PRESTIGE GLAMOUR COMPANY (PVT) LTD | 1420-13889829-001 | Wadduwa · Code 1420 · SWIFT SEYBLKLX |
| Seylan Bank PLC | Savings | PRESTIGE GLAMOUR COMPANY (PVT) LTD | 1420-13889829-120 | Wadduwa · Code 1420 |
| DFCC Bank | Current | Next Investments (Pvt) Ltd | 101001236707 | Kalutara |
| DFCC Bank | Savings | Next Investments (Pvt) Ltd | 102005862393 | Kalutara |

### Root layout (`app/layout.tsx`)
- Loads Inter + Playfair fonts and exposes them as CSS variables.
- Wraps every page with `<Navbar />` (top) and `<Footer />` (bottom).
- Default metadata title template: `"%s — Prestige Glamour Group"`.

---

## 2. Navigation (`Navbar` — `components/layout/Navbar.tsx`)

Client component. Sticky. Highlights active link via `usePathname`.

**Links** (in order):
1. About Us → `/`
2. Events → `/events`
3. Gallery → `/gallery`
4. Cultivation Plans → `/cultivation-plans`
5. Our Plantation → `/our-plantation`
6. Microfinance → `/microfinance`
7. Corporate Information → `/corporate-information`
8. Investment Plans → `/investment-plans`

**Behavior**
- Mobile: hamburger toggle (state via `useState`)
- Scroll-aware: collapses/changes style on scroll (uses `useEffect` listener)
- Active-route styling on the matching link

---

## 3. Footer (`components/layout/Footer.tsx`)

Three-column footer with:
- **Brand column** — logo + short company description
- **Quick links** — same navigation items
- **Contact column** — pulls from `CONTACT_INFO` (address, email, phones, office hours)
- Bottom strip: copyright + reg. no.

---

## 4. Pages

### 4.1 Home — `/` (`app/page.tsx`)

**Metadata**
- Title: `Prestige Glamour Group — Sri Lanka's Leading Agri-Investment Conglomerate`
- Description: PGG delivers innovative agriculture, inclusive finance, luxury gems, sustainable tourism and high-quality FMCG anchored in Sri Lankan roots.

**Sections (in order)**

1. **Hero (`.home-hero`)** — split layout
   - Left: badge "SRI LANKA'S LEADING AGRI-INVESTMENT GROUP", H1 "Empowering / Communities / *with Prestige.*", description, CTAs `Invest With Us →` (`/investment-plans`, gold) + `Explore Services` (`#services`, outline-white)
   - Hero stats (CountUpNumber): 15+ Years Experience · 50,000+ Community Members · 25+ Branch Locations
   - Right: floating opportunity card "Ginger Cultivation Plan 2026 · Expected ROI 18–24% · 6-month short-term project — land + capital model" with link to `/cultivation-plans`
   - Floating badge "🌿 Sustainable · 🤝 Trusted · 🌍 Global"
   - Scroll indicator at bottom

2. **Stats Banner** — `<StatsBanner />` (4-stat strip; values defined inside the component)

3. **Who We Are (`#about`, `bg-warm`)**
   - Left: chairman placeholder + chairman card (avatar "YT", "Mr. Y.M.D.T Yatawara", "Chairman & Founder", 5 stars)
   - Right: SectionHeader "WHO WE ARE / A Sri Lankan Company Driving Global Agricultural Excellence", two paragraphs about the company and NGO/agriculture focus
   - Highlights grid (4 boxes): 🌿 Sustainable Agriculture · 🌍 Global Market Access · ❤️ Community Upliftment · 🛡️ Ethical Business Practices
   - CTA link "Read Our Full Story →" → `/corporate-information`

4. **Vision & Mission + Values (`#vision`, `bg-navy`)**
   - Two cards side-by-side:
     - 👁️ **Our Vision** — "To establish the Prestige Glamour Group as the most trustworthy company in the plantation sector globally through a sustainable environment."
     - 🎯 **Our Mission** — "As a Sri Lankan company, strive to advance beyond traditional cultivation methods. By conquering the international market with new technology, we aim to fulfill consumer expectations within a decade."
   - SectionHeader "CORE VALUES / What Drives Everything We Do" (white)
   - 6 value cards (numbered 01–06): Innovation 💡 · Sustainability 🌱 · Quality ⭐ · Customer Satisfaction 😊 · Integrity 🛡️ · Global Excellence 🌍 (full descriptions in `data/home.ts`)

5. **Services (`#services`, `bg-white`)** — SectionHeader "OUR SERVICES / A Diverse Portfolio Delivering Impact at Scale", 6 service cards from `SERVICES`:
   | Cat | Tag | Icon | Title | Metric | Link |
   |---|---|---|---|---|---|
   | plantation | Agriculture | 🌿 | Plantation & Cultivation | 137+ Active Acres | `/our-plantation` |
   | finance | Finance | 💰 | Micro Finance — Next Investment | 5,000+ SMEs | `/microfinance` |
   | gems | Luxury Export | 💎 | Gem & Jewelry Export | 20+ Export Destinations | `/events` |
   | fmcg | Consumer Goods | 📦 | FMCG — PGG Fresh Foods | 50+ Product SKUs | `/events` |
   | ngo | Social Impact | 🤝 | NGO & Social Projects | 25+ Active Projects | `/corporate-information` |
   | realestate | Property | 🏗️ | Agri Real Estate | 200+ Acres Developed | `/investment-plans` |

6. **CTA Banner** — badge "GROW WITH US", H2 "Ready to Grow with Prestige Glamour?", description, two buttons (`Invest With Us →` + `Download Investment Brochure`), trust badges row: 🔒 100% Transparent · 📜 Legally Registered · 📈 Proven Returns · 🤝 Dedicated Support

7. **Leadership (`#leadership`, `bg-warm`)** — SectionHeader "OUR LEADERSHIP / The Directors Board" + `<DirectorsGrid />` (default variant) + outline button "View All Team Members →" → `/corporate-information`

8. **Contact (`#contact`, `bg-white`)** — SectionHeader "GET IN TOUCH / Connect with Our Investment Team Today"
   - Left: `<ContactForm>` titled "Send an Investment Inquiry" with fields: Full Name*, Phone*, Email*, Service Interest (select: Plantation/Microfinance/Gem & Jewelry/FMCG/Real Estate/NGO/Investment Plans), Message (textarea). Submit: "Submit Inquiry →".
   - Right: contact details panel — address, email link, all three phones, "Office Hours" box, "Payment Details" box listing each bank account.

---

### 4.2 Corporate Information — `/corporate-information`

**Metadata**
- Title: `Corporate Information`
- Description: Discover PGG's corporate governance, legal framework, board of directors, and social responsibility initiatives.

**Sections**

1. **PageHero** — badge "EST. 2013 · SRI LANKA", title "Corporate Information", subtitle "Transparency, governance, and accountability — the foundation of our business.", pills: PV 118342 · Registered Entity · ISO Compliant.

2. **Company Overview (`bg-white`)** — SectionHeader "COMPANY OVERVIEW / Legal & Registration Details" + `info-table` with rows:
   | Field | Value |
   |---|---|
   | Company Name | Prestige Glamour Company (Pvt) Ltd |
   | Registration No. | PV 118342 |
   | Date of Incorporation | 2013 |
   | Registered Office | Maggona, Nawaloka Medical Centre Area, Kalutara |
   | Nature of Business | Plantation, Cultivation, Microfinance, Gem Export, FMCG, NGO |
   | Chairman | Mr. Y.M.D.T Yatawara |
   | Managing Director | Mr. Nilanga Amunugama |
   | Auditors | M/s. Chartered Accounting Firm |
   | Bankers | Seylan Bank PLC · DFCC Bank |

3. **Compliance (`bg-warm`)** — SectionHeader "COMPLIANCE / Regulatory Compliance & Certifications", 6 cards:
   - 📜 Company Registration — Companies Act No. 07 of 2007. Status ✓ Active
   - 💰 Tax Compliance — IRD, TIN, VAT current. Status ✓ Compliant
   - 🛡️ Labor Compliance — EPF/ETF. Status ✓ Certified
   - 📋 BOI Registered — Board of Investment of Sri Lanka. Status ✓ Active
   - 🌍 Export License — National Gem & Jewellery Authority. Status ✓ Licensed
   - 🏦 Microfinance License — Next Investments (Pvt) Ltd licensed entity. Status ✓ Licensed

4. **Board of Directors (`bg-white`)** — SectionHeader "BOARD OF DIRECTORS / Our Leadership Board" + `<DirectorsGrid variant="full" />`. Directors:
   - **YT — Mr. Y.M.D.T Yatawara** · Chairman · Gem Business · Local & Foreign Affairs · BSc (Sp. Marketing Management); MBA Univ. of Mainz, Johannes Gutenberg; SP in Int'l Business Mgmt & Entrepreneurship
   - **NA — Mr. Nilanga Amunugama** · Managing Director · HR & Finance · BCOM (Sp.) Univ. of Jayewardenepura; Chartered Accountant; NILS Labor Productivity; Diploma in IT
   - **SS — Mr. Samantha Suwarnasighe** · Director · Executive Head of Marketing · BSc in Mgmt; Digital Marketing Postgrad CIM, UK
   - **KR — Mr. B.K. Kamal Rodrigo** · Director · Head of Legal & Developments · P.D.S. Sessions 1, 2, 3 Limra USA; Diploma in Law (External); Pharmacist; Justice of the Peace (A.I)

5. **Management Team (`bg-warm`)** — SectionHeader "MANAGEMENT TEAM / Regional & Provincial Heads", 4-column grid (`grid grid-4 gap-md`) of 12 team members from `data/team.ts`:
   - LA L. Manisha Amaratunga — HR & Finance Head
   - CF M. Clement F Fernando — General Manager
   - TS T. Sivakumaran — Head Provincial NE
   - HL H.M.D. Leelarathna — Provincial Head NW/NC
   - AT Anusha Thudugala — Provincial Head Western
   - RK Ranjith Kumara — Provincial Head Sabaragamuwa
   - KK K.P.S. Kumara — Regional Mgr Kalutara
   - DP D.P. Rangana Perera — Regional Mgr Peliyagoda
   - KS K. Sadeskumar — Regional Mgr Kandy
   - DS D. Shahan Solomon — Regional Mgr Ampara
   - MS M.S. Samsudeen — Provincial Head
   - KM K. Madikumar — Provincial Head

6. **CSR (`bg-white`)** — SectionHeader "CSR & SOCIAL IMPACT / Corporate Social Responsibility", layout: image placeholder (left) + 4 pillar cards (right):
   - 📚 Education & Development
   - 🌿 Environmental Stewardship
   - 💡 Entrepreneurship Support
   - 🏥 Community Health & Welfare

7. **FullCta** — title "Want to Partner with PGG?", subtitle, button "Contact Our Team →" → `/investment-plans`, variant: navy.

---

### 4.3 Cultivation Plans — `/cultivation-plans`

**Metadata**
- Title: `Cultivation Plans`
- Description: Explore PGG's structured cultivation plans — ginger, banana, mango, and more — with professional agri-management and profit-sharing.

**Sections**

1. **PageHero** — badge "SUSTAINABLE AGRICULTURE", title "Cultivation Plans", subtitle, pills: 6–18 Month Plans · 15+ Crop Varieties · 137+ Active Acres.

2. **Plans Grid (`bg-white`)** — SectionHeader "OUR PLANS / Choose Your Cultivation Plan", 3 plan cards:
   - **Short-Term Plan** (header green, 🌱, 6 Months) — Ginger, Watermelon, Sweet Melon, Corn & Sweet Corn · Full crop mgmt · ROI 18–24% · Monthly progress reports · `Select This Plan →` (green, → `#inquiry`)
   - **Annual Plan** (header gold, 🌿, 12 Months, ★ Most Popular) — Banana (Ambul, Kolikuttu), Pineapple, Passion Fruits, Pomegranate · Dedicated land · ROI 25–35% · Insurance · Priority support · `Select This Plan →` (gold)
   - **Long-Term Plan** (header navy, 🌳, 18 Months) — TJC & Karthakolomban Mango, Cassava, King Coconut, Jackfruit · Premium parcels · ROI 30–45% · Full cycle mgmt · Export-grade processing · `Select This Plan →` (green)

3. **Crop Portfolio (`bg-warm`)** — SectionHeader "CROP PORTFOLIO / Crops We Cultivate", grid of 15 crops from `data/plantation.ts`: Watermelon 🍉 · Sweet Melon 🍈 · Corn 🌽 · Sweet Corn 🌽 · Sugar Muskmelon 🍈 · Aloe Vera 🌿 · Ginger 🫚 · Cassava 🥔 · Pineapple 🍍 · Banana 🍌 · Tom & EJC Mango 🥭 · Karthakolomban 🥭 · Pomegranate 🍈 · Jackfruit 🍊 · King Coconut 🥥.

4. **Process (`bg-navy`)** — SectionHeader "HOW IT WORKS / Cultivation Process" (white) + `<StepsFlow>` 4 steps:
   - 01 📋 Plan Selection
   - 02 🌍 Land Allocation
   - 03 🌱 Cultivation & Growth
   - 04 💰 Harvest & Returns

5. **Inquiry (`#inquiry`, `bg-white`)** — SectionHeader "GET STARTED / Interested in a Cultivation Plan?" + `<InquiryLayout>`:
   - CTA panel: 🌿 "Start Your Cultivation Journey Today" + investor reassurance text + contact items (📞 034 2233669 · 📧 info@prestigeglamourgroup.com · 📍 Maggona, Kalutara)
   - Form: Full Name*, Phone*, Email, Preferred Plan (select: Short-Term/Annual/Long-Term), Message

---

### 4.4 Events — `/events`

**Metadata**
- Title: `Events`
- Description: Stay updated with PGG's latest events, branch openings, plantation launches, and community programs.

**Sections**

1. **PageHero** — badge "EVENTS & NEWS", title "Events", subtitle, no pills.

2. **Events Grid (`bg-white .event-section`)** — heading "Upcoming & Recent Events", 6 event cards from `data/events.ts`:
   | Date | Title | Location | Tags | Category |
   |---|---|---|---|---|
   | Mar 12, 2026 | Ginger Cultivation Launch — Hambantota | Hambantota, Southern Province | Plantation, Launch | plantation |
   | Feb 28, 2026 | Microfinance Branch Opening — Kaduwela | Kaduwela, Western Province | Finance, Opening | microfinance |
   | Feb 15, 2026 | Annual Gem Fair Participation — Dubai | Dubai World Trade Centre | Gems, Exhibition | gems |
   | Jan 20, 2026 | FMCG Product Launch — PGG Fresh Foods | Colombo, Sri Lanka | FMCG, Launch | fmcg |
   | Dec 5, 2025 | Community Development Workshop | Puttalam, North Western | NGO, Community | plantation |
   | Nov 10, 2025 | Real Estate Investor Meetup | Kandy, Central | Real Estate, Investor | realestate |
   Each card: image area + date badge, title, location, description, tags, "View Details →" → `/investment-plans`.

3. **Ceylon Charity (`bg-white`)** — `charity-box`: heading "Ceylon Charity Foundation" + paragraph about education/healthcare/livelihood support + "Donate Now →" button → `/investment-plans`.

4. **Bank Details (`bg-navy`)** — SectionHeader "PAYMENT INFO / Bank Account Details" (white), grid of all 4 bank cards (Seylan x2 + DFCC x2) showing bank name, type pill, holder, number, branch.

---

### 4.5 Gallery — `/gallery`

**Metadata**
- Title: `Gallery — Prestige Glamour Group`
- Description: Explore our journey through photos of events, branches, and plantation sites.

**Sections**

1. **PageHero** — badge "PHOTO GALLERY", title "Gallery", subtitle.

2. **Gallery (`bg-white`)** — SectionHeader "OUR GALLERY / Capturing Our Journey" + `<LightboxProvider items={allItems}>` wrapping `<GalleryClient />`.

**Gallery categories** (from `data/gallery.ts`):
- **Head Office New Building Shift** (subtitle: Corporate Milestone, 5 items, first item featured) — Head Office · Office Interior · Team Photo · Opening Ceremony · Staff Meeting
- **Baduraliya Branch Opening** (4 items) — Baduraliya Branch · Ribbon Cutting · Ceremony · Guests
- **Avissawella Branch Opening** (4 items) — Avissawella · Branch Front · Team · Interior
- **Ehaliyagoda Branch Opening** (4 items) — Ehaliyagoda 1–4
- **Kaduwela Branch Opening** (4 items) — Kaduwela 1–4

**GalleryClient behavior**
- Renders each category with header (title + photo count) and a 4-column grid.
- Each thumbnail opens the Lightbox at the correct global index.
- "Load More" UI with a 40%-filled progress bar at the bottom (currently a static demo button).

**Lightbox** (`features/gallery/Lightbox.tsx`)
- Provides `<LightboxProvider items={...}>` and a `useLightbox()` hook.
- Keyboard: Esc to close, ←/→ to navigate. Click backdrop to close.

---

### 4.6 Investment Plans — `/investment-plans`

**Metadata**
- Title: `Investment Plans`
- Description: Explore PGG's structured investment models — from agri-partnerships to capital contributions — with transparent returns.

**Sections**

1. **PageHero** — badge "INVESTMENT OPPORTUNITY", title "Investment Plans", subtitle, pills: Capital Contributions · Land Partnerships · Gem Export.

2. **Investment Models (`bg-white`)** — SectionHeader "INVESTMENT MODELS / Choose Your Investment Path", 4 model cards from `data/investments.ts`:
   | Icon | Title | Duration | Min Investment | ROI | Payout | Featured |
   |---|---|---|---|---|---|---|
   | 🌿 | Agri-Land Partnership | 12–18 Months | LKR 500,000 | 18–30% | At harvest | – |
   | 💰 | Capital Contribution Model | 6–12 Months | LKR 200,000 | 15–24% | Monthly / End of term | ★ |
   | 🏗️ | Agri-Real Estate | 24–36 Months | LKR 1,000,000 | 25–45% | Bi-annual | – |
   | 💎 | Gem Export Investment | 6 Months | LKR 300,000 | 20–35% | Per transaction | – |
   Each card: icon, title, duration pill, description, key-terms `<dl>`, "Select This Model →" (→ `#contact`).

3. **Why Invest (`bg-warm`)** — SectionHeader "WHY INVEST WITH US / Why Choose PGG?", 4 reason cards:
   - 📈 Proven Track Record — over a decade of consistent returns
   - 🔒 Full Transparency — regular reports, legal agreements, audited financials
   - 🌿 Sustainable Impact — supports sustainable agriculture & community
   - 🤝 Dedicated Support — personal investment manager per investor

4. **How It Works (`bg-navy`)** — SectionHeader "HOW IT WORKS / Your Investment Journey" (white) + `<StepsFlow>`:
   - 01 📋 Choose Model
   - 02 📄 Agreement
   - 03 💳 Fund Transfer
   - 04 📈 Earn Returns

5. **Contact Form (`#contact`, `bg-white`)** — SectionHeader "INVEST NOW / Submit Your Investment Inquiry" + `<ContactForm>`:
   - Fields: Full Name*, Phone*, Email, Investment Model (select: Agri-Land Partnership / Capital Contribution / Agri-Real Estate / Gem Export Investment), Investment Amount (LKR), Additional Notes (textarea)
   - Submit: "Submit Investment Inquiry →"

6. **FullCta** — "Ready to Start Investing?", button "Contact Our Team →" → `#contact` (default variant).

---

### 4.7 Microfinance — `/microfinance`

**Metadata**
- Title: `Microfinance — Next Investments`
- Description: Next Investments provides inclusive micro-finance products for SMEs, farmers, and entrepreneurs across Sri Lanka.

**Sections**

1. **PageHero** — badge "MICRO FINANCE", title "Microfinance Solutions", subtitle "Empowering rural entrepreneurs with accessible, ethical financial products since 2013.", pills: Est. 2013 · 5,000+ SMEs · 25+ Branches.

2. **Stats Banner** — 3 stats: 💰 5,000+ SMEs Supported · 🏦 25+ Branches · 👥 10,000+ Active Borrowers.

3. **Products (`bg-white`)** — SectionHeader "OUR PRODUCTS / Micro Finance Products / Designed for Sri Lanka's rural and semi-urban economy.", 3 product cards from `data/microfinance.ts`:
   - 🌾 **Agri Micro Loan** — Tailored financing for small-scale farmers · Up to LKR 500,000 · Flexible repayment · No collateral < 100K · Agri insurance
   - 💼 **SME Business Loan** ★ — Working capital for SMEs · Up to LKR 2,000,000 · Competitive rates · 48h approval · Mentorship
   - 🏠 **Housing Micro Loan** — Affordable housing loans for rural families · Up to LKR 1,000,000 · Up to 36 months · Low interest · Insurance
   Each card: header (icon + title), description, feature list, "Apply Now →" → `#inquiry`.

4. **How It Works (`bg-navy`)** — SectionHeader "HOW IT WORKS / Simple Application Process" (white), 3-step flow:
   - 01 📋 Apply (submit at any branch, minimal docs)
   - 02 ✅ Get Approved (within 48h)
   - 03 💰 Receive Funds (to bank account)

5. **Inquiry (`#inquiry`, `bg-white`)** — SectionHeader "APPLY NOW / Interested in Micro Finance?" + `<InquiryLayout>`:
   - CTA: 💰 "Financial Empowerment Made Simple"
   - Contact items: 📞 034 2233669 · 📧 info@prestigeglamourgroup.com · 📍 25+ Branches
   - Form fields: Full Name*, Phone*, Product (select: Agri Micro Loan / SME Business Loan / Housing Micro Loan), Message

6. **FullCta** — "Grow Your Business with Next Investments", button "Apply Now →" → `#inquiry`.

---

### 4.8 Our Plantation — `/our-plantation`

**Metadata**
- Title: `Our Plantation`
- Description: Discover PGG's active plantation sites across Sri Lanka — 137+ acres of managed agricultural land.

**Sections**

1. **PageHero** — badge "PLANTATION NETWORK", title "Our Plantation", subtitle "137+ acres of professionally managed agricultural land across Sri Lanka.", pills: 6 Active Sites · 15+ Crop Types · 137+ Acres.

2. **Stats Banner** — 4 stats: 🌿 137+ Active Acres · 📍 6 Plantation Sites · 🌾 15+ Crop Varieties · 👥 200+ Farmers Employed.

3. **Active Plantations (`bg-white`)** — SectionHeader "ACTIVE PLANTATIONS / Current Plantation Locations", grid of 6 location cards from `data/plantation.ts`:
   | Location | Crop | Acres |
   |---|---|---|
   | Puttalam | Watermelon | 35 |
   | Redebedi Ealla | Cassava | 13 |
   | Hambantota | Ginger | 23 |
   | Mihintale | TJC Mango | 34 |
   | Kandy Haragama | Passion Fruits | 17 |
   | Madrankkuliya | Pomegranate | 15 |
   Plus a final "Total Active 137+ Acres / Across 6 Locations" summary card.

4. **Expansion Pipeline (`bg-navy`)** — SectionHeader "EXPANSION PIPELINE / Upcoming Plantation Projects / Strategic expansion plans for 2026 and beyond." (white), 5 expansion cards from `EXPANSION_PLANS`:
   - Radalegoda Plantation — 32 Acres — Planned 2026
   - **Hambantota Ranna Plantation — 102 Acres — Planned 2026** *(highlighted)*
   - Wathregama Plantation — 18 Acres — Planned 2026
   - Berwala Plantation — 15 Acres — Planned 2026
   - Horana Kethbima Plantation — 23 Acres — Planned 2026

5. **FullCta** — "Invest in Our Plantations", button "View Investment Plans →" → `/investment-plans`.

---

## 5. Reusable components

| Component | File | Purpose | Key props |
|---|---|---|---|
| `Navbar` | `components/layout/Navbar.tsx` | Top sticky nav with active-link highlighting + mobile menu | none |
| `Footer` | `components/layout/Footer.tsx` | 3-column site footer | none |
| `PageHero` | `components/sections/PageHero.tsx` | Standard inner-page hero (badge + title + subtitle + breadcrumb + optional pills) | `badge`, `title`, `subtitle`, `breadcrumbLabel`, `pills?` |
| `SectionHeader` | `components/sections/SectionHeader.tsx` | Section label + title + optional subtitle | `label`, `title`, `subtitle?`, `centered?`, `white?` |
| `StatsBanner` | `components/sections/StatsBanner.tsx` | Home-page 4-stat strip | none |
| `StepsFlow` | `components/sections/StepsFlow.tsx` | Numbered step cards (3 or 4 steps) | `steps[]` (number, icon, title, description) |
| `FullCta` | `components/sections/FullCta.tsx` | Full-width CTA banner | `title`, `subtitle?`, `buttonLabel`, `buttonHref`, `variant?` |
| `ContactForm` | `components/forms/ContactForm.tsx` | Generic form (client component, useState) | `title`, `fields[]`, `submitLabel?` |
| `InquiryLayout` | `components/forms/InquiryLayout.tsx` | Side-by-side CTA panel + ContactForm | `ctaIcon`, `ctaTitle`, `ctaText`, `contactItems[]`, `formTitle`, `formFields[]` |
| `FilterTabs` | `components/ui/FilterTabs.tsx` | Filter tab UI (currently unused on pages but available) | tabs[] |
| `CountUpNumber` | `components/ui/CountUpNumber.tsx` | Animated count-up on scroll-into-view (client) | `target`, `className?` |
| `ScrollAnimator` | `components/ui/ScrollAnimator.tsx` | Wraps children with intersection-observer fade-in | `children`, `className?` |
| `DirectorsGrid` | `features/directors/DirectorsGrid.tsx` | Renders the 4-director grid | `variant?: 'default'|'full'` |
| `Lightbox` + `LightboxProvider` + `useLightbox` | `features/gallery/Lightbox.tsx` | Modal image viewer with keyboard nav | `items` (provider) |
| `GalleryClient` | `features/gallery/GalleryClient.tsx` | Renders gallery categories + opens Lightbox | none |

### Form field shape (`FormField`)
```ts
{
  name: string;
  label: string;
  type?: 'text' | 'email' | 'select' | 'textarea';   // default text
  placeholder?: string;
  required?: boolean;
  halfWidth?: boolean;     // pairs with the next halfWidth field on one row
  options?: string[];      // for type='select'
}
```

---

## 6. Data layer (`data/`)

All static content is split by domain. **Never inline data inside page/component files.**

| File | Exports |
|---|---|
| `data/navigation.ts` | `NAV_LINKS` |
| `data/contact.ts` | `CONTACT_INFO`, `BANK_ACCOUNTS`, `BankAccount` |
| `data/team.ts` | `DIRECTORS`, `Director`, `TEAM_MEMBERS`, `TeamMember` |
| `data/home.ts` | `SERVICES`, `Service`, `CORE_VALUES`, `CoreValue`, `HIGHLIGHTS`, `TRUST_BADGES` |
| `data/plantation.ts` | `PLANTATION_LOCATIONS`, `PlantationLocation`, `EXPANSION_PLANS`, `ExpansionPlan`, `CROPS`, `Crop` |
| `data/gallery.ts` | `GALLERY_CATEGORIES`, `GalleryCategory`, `GalleryItem` |
| `data/events.ts` | `EVENTS`, `EventItem` |
| `data/investments.ts` | `INVESTMENT_MODELS`, `InvestmentModel`, `INVESTMENT_REASONS` |
| `data/microfinance.ts` | `MICROFINANCE_PRODUCTS`, `MicrofinanceProduct` |

---

## 7. Routing summary

| URL | File | Type |
|---|---|---|
| `/` | `app/page.tsx` | Static |
| `/corporate-information` | `app/(marketing)/corporate-information/page.tsx` | Static |
| `/cultivation-plans` | `app/(marketing)/cultivation-plans/page.tsx` | Static |
| `/events` | `app/(marketing)/events/page.tsx` | Static |
| `/gallery` | `app/(marketing)/gallery/page.tsx` | Static (uses client `GalleryClient` + `Lightbox`) |
| `/investment-plans` | `app/(marketing)/investment-plans/page.tsx` | Static |
| `/microfinance` | `app/(marketing)/microfinance/page.tsx` | Static |
| `/our-plantation` | `app/(marketing)/our-plantation/page.tsx` | Static |

The `(marketing)` route group does **not** appear in URLs — it exists only to organize routes and to allow a future `(admin)` or `(dashboard)` group with its own layout.

---

## 8. To regenerate the site from scratch

1. `npx create-next-app@latest company-web --typescript --eslint --no-tailwind --app --turbopack`
2. Replace `tsconfig.json` paths with `"@/*": ["./*"]`.
3. Recreate the folder structure described in `AGENTS.md`.
4. Re-create the data files in `data/` from section 6 of this doc.
5. Build the components listed in section 5 (props are documented).
6. Build each page in section 4 — each section listed top to bottom matches the JSX structure.
7. Recreate `app/globals.css` covering the class names referenced throughout (`.section`, `.bg-white`, `.bg-warm`, `.bg-navy`, `.btn`, `.btn-gold`, `.btn-green`, `.btn-outline-green`, `.btn-outline-white`, `.container`, `.grid`, `.gap-md`, `.home-hero`, `.who-we-are`, `.vm-cards`, `.values-grid`, `.services-grid`, `.cta-banner`, `.contact-layout`, `.info-table`, `.compliance-grid`, `.csr-layout`, `.plans-grid`, `.crop-grid`, `.events-grid`, `.charity-box`, `.bank-grid`, `.gallery-grid`, `.gallery-item`, `.model-grid`, `.reasons-grid`, `.product-grid`, `.location-grid`, `.expansion-grid`, `.steps-flow`, `.stats-banner`, etc.).
8. Run `next build` to verify.
