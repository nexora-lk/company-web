# 🎯 COMPLETE FULL-WEBSITE TESTING PLAN

**Comprehensive Testing Strategy for company-web - All Components, Pages, Utilities, Hooks, and E2E Flows**

---

## 📊 Testing Coverage Roadmap

### **Total Test Files: 100+ tests across 50+ files**

```
Unit Tests (50%)               Component Tests (30%)          Integration (15%)         E2E (5%)
├─ 20+ utility tests          ├─ 15+ layout tests           ├─ 5+ workflows          ├─ 8+ journeys
├─ 15+ hook tests             ├─ 20+ form tests             └─ API mocking tests     └─ Multi-page flows
└─ 10+ calculation tests      └─ 25+ section tests
```

---

## 📁 COMPLETE FILE STRUCTURE

### **1. UTILITY TESTS (lib/)**

```
lib/__tests__/
├── validators.test.ts              [Email, phone, amounts, dates]
├── calculations.test.ts            [ROI, compound interest, returns]
├── formatters.test.ts              [Currency, dates, percentages]
├── helpers.test.ts                 [String, array, object utilities]
├── constants.test.ts               [Constants validation]
└── api-helpers.test.ts             [API utilities, request builders]
```

**Tests per file: 15-20 tests each**

### **2. HOOK TESTS (hooks/)**

```
hooks/__tests__/
├── useContactForm.test.ts          [Form state, validation, submission]
├── useInvestmentForm.test.ts       [Investment logic, calculations]
├── useScrollAnimation.test.ts      [Scroll effects, triggers]
├── useGalleryModal.test.ts         [Modal state, image navigation]
└── useNavigation.test.ts           [Route navigation, active state]
```

**Tests per file: 12-18 tests each**

### **3. LAYOUT COMPONENT TESTS**

```
components/layout/__tests__/
├── Navbar.test.tsx                 [Navigation, mobile menu, links]
├── Footer.test.tsx                 [Links, contact info, social]
├── MobileMenu.test.tsx             [Toggle, animation, a11y]
├── PageTransition.test.tsx         [Animation triggers]
├── SmoothScroll.test.tsx           [Scroll behavior]
└── Layout.test.tsx                 [Overall layout structure]
```

**Tests per file: 10-15 tests each**

### **4. FORM COMPONENT TESTS**

```
components/forms/__tests__/
├── homeContactForm.test.tsx        [Rendering, validation, submission]
├── InvestmentContactForm.test.tsx  [All fields, dynamic validation]
└── FormValidation.test.tsx         [Shared validation logic]
```

**Tests per file: 20-25 tests each (CRITICAL PATH - 90% coverage)**

### **5. SECTION COMPONENT TESTS**

#### Home Page Sections

```
components/sections/home/__tests__/
├── Hero.test.tsx                   [Title, CTA, animations]
├── Services.test.tsx               [Service cards, filtering]
├── Gallery.test.tsx                [Image rendering, modal]
├── About.test.tsx                  [Statistics, company info]
├── Contact.test.tsx                [Form integration]
├── Impact.test.tsx                 [Stats display]
├── Invest.test.tsx                 [Investment CTA section]
└── Vision.test.tsx                 [Vision statement]
```

#### About Page Sections

```
components/sections/about/__tests__/
├── Overview.test.tsx               [Company overview]
├── Who_we_are.test.tsx             [Mission, values]
├── Directors.test.tsx              [Team members]
├── Branch.test.tsx                 [Branch info]
├── Careers.test.tsx                [Job listings]
└── Team.test.tsx                   [Full team display]
```

#### Services Sections (Plantation, Gems, etc.)

```
components/sections/services/[service]/__tests__/
├── Hero.test.tsx                   [Service hero banner]
├── Overview.test.tsx               [Service description]
├── Gallery.test.tsx                [Service images]
├── Products.test.tsx               [Product listing]
└── Services.test.tsx               [Service offerings]
```

#### Events Sections

```
components/sections/events/__tests__/
├── Hero.test.tsx                   [Event hero]
├── Banner.test.tsx                 [Event banner]
├── Featured.test.tsx               [Featured events]
├── All_programmes.test.tsx         [Event list]
└── Bank_account_details.test.tsx   [Payment info]
```

#### Investment Sections

```
components/sections/investment/__tests__/
├── Hero.test.tsx                   [Investment hero]
├── Contact.test.tsx                [Contact form]
├── Why.test.tsx                    [Why invest]
├── Work.test.tsx                   [How it works]
└── Models.test.tsx                 [Investment models]
```

#### Gallery Sections

```
components/sections/gallery/__tests__/
├── Hero.test.tsx                   [Gallery hero]
├── Album1-4.test.tsx               [Individual albums]
└── Banner.test.tsx                 [Gallery banner]
```

**Tests per file: 10-18 tests each**

### **6. UI COMPONENT TESTS**

```
components/ui/__tests__/
├── Photo.test.tsx                  [Image rendering, alt text]
├── Button.test.tsx                 [Variants, states, interactions]
├── Card.test.tsx                   [Card layouts, props]
├── Modal.test.tsx                  [Open/close, a11y]
├── Marquee.test.tsx                [Animation behavior]
└── SectionEyebrow.test.tsx         [Section header rendering]
```

**Tests per file: 8-12 tests each**

### **7. PAGE TESTS (app/(marketing)/)**

```
app/(marketing)/__tests__/
├── home/page.test.tsx              [Hero, sections, all content]
├── about/page.test.tsx             [Company info, team]
├── corporate/page.test.tsx         [Corporate details]
├── cultivation/page.test.tsx       [Cultivation methods]
├── events/page.test.tsx            [Events list, registration]
├── gallery/page.test.tsx           [Gallery display]
├── investment/page.test.tsx        [Investment form, details]
│
├── services/
│   ├── gems/page.test.tsx          [Gems page]
│   ├── plantation/page.test.tsx    [Plantation page]
│   ├── microfinance/page.test.tsx  [Microfinance page]
│   ├── ngo/page.test.tsx           [NGO page]
│   ├── fmcg/page.test.tsx          [FMCG page]
│   └── real-estate/page.test.tsx   [Real Estate page]
│
└── layout.test.tsx                 [Layout structure]
```

**Tests per file: 12-20 tests each**

### **8. INTEGRATION TESTS**

```
__tests__/integration/
├── ContactFormFlow.test.tsx        [Contact → Email]
├── InvestmentFlow.test.tsx         [Multi-step investment]
├── ServiceBrowsingFlow.test.tsx    [Browse → View → Inquire]
├── GalleryInteractionFlow.test.tsx [View → Click → Modal]
├── NavigationFlow.test.tsx         [Nav → Pages → Back]
├── HomepageFlow.test.tsx           [Full homepage interaction]
└── MobileExperience.test.tsx       [Mobile responsive flow]
```

**Tests per file: 8-15 tests each**

### **9. E2E TESTS (Playwright)**

```
e2e/
├── homepage.spec.ts                [Hero, scroll, sections]
├── contact.spec.ts                 [Form fill, submit, validation]
├── investment.spec.ts              [Multi-step investment flow]
├── services.spec.ts                [All 6 service pages]
├── gallery.spec.ts                 [Gallery interactions]
├── navigation.spec.ts              [All pages, routing]
├── mobile.spec.ts                  [Mobile responsiveness]
├── performance.spec.ts             [Load times, animations]
└── accessibility.spec.ts           [WCAG compliance]
```

**Tests per file: 6-12 tests each**

---

## 📈 COMPLETE TEST MATRIX

| Category               | Files   | Tests         | Target Coverage  | Priority |
| ---------------------- | ------- | ------------- | ---------------- | -------- |
| **Utilities**          | 6       | 90-120        | 85%+             | High     |
| **Hooks**              | 5       | 60-90         | 85%+             | High     |
| **Layout Components**  | 6       | 60-90         | 75%+             | High     |
| **Form Components**    | 3       | 60-75         | 90%+             | Critical |
| **Section Components** | 25+     | 250-350       | 75%+             | High     |
| **UI Components**      | 6       | 48-72         | 75%+             | Medium   |
| **Page Tests**         | 13      | 156-260       | 70%+             | Medium   |
| **Integration**        | 7       | 56-105        | 80%+             | High     |
| **E2E**                | 9       | 54-108        | Real flows       | Medium   |
| **TOTAL**              | **80+** | **700-1,200** | **80%+ Overall** |          |

---

## 🚀 IMPLEMENTATION PHASES

### **Phase 1: Foundation (Week 1)**

- ✅ Install Jest, Playwright, testing libraries
- ✅ Setup configuration files
- ✅ Create test utilities and fixtures
- ✅ Setup MSW for API mocking
- ✅ Setup Playwright

### **Phase 2: Core Logic (Week 2)**

- [ ] Create all utility tests (lib/)
- [ ] Create all hook tests (hooks/)
- [ ] Achieve 85%+ coverage on utilities

### **Phase 3: Components (Week 3-4)**

- [ ] Create layout component tests
- [ ] Create form component tests (90% coverage)
- [ ] Create section component tests
- [ ] Create UI component tests

### **Phase 4: Pages (Week 5)**

- [ ] Create tests for all 13 pages
- [ ] Verify page rendering
- [ ] Test metadata generation

### **Phase 5: Integration & E2E (Week 6)**

- [ ] Create integration test workflows
- [ ] Create E2E tests with Playwright
- [ ] Test multi-page flows
- [ ] Test mobile responsiveness

### **Phase 6: Polish & Analysis (Week 7)**

- [ ] Achieve 80%+ overall coverage
- [ ] Fix coverage gaps
- [ ] Optimize test speed
- [ ] Document patterns

---

## 📋 QUICK START COMMANDS

```bash
# Install all dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom ts-jest @types/jest msw @testing-library/jest-axe @playwright/test --legacy-peer-deps

# Run Jest tests
npm test                    # Watch mode
npm run test:unit          # Unit tests only
npm run test:component     # Component tests only
npm run test:integration   # Integration tests only
npm run test:all           # All Jest tests
npm run test:coverage      # Coverage report

# Run Playwright E2E
npm run test:e2e           # All E2E tests
npm run test:e2e:ui        # Interactive mode
npm run test:e2e:debug     # Debug mode
npm run test:e2e:report    # View report

# Run everything
npm run test:all && npm run test:e2e
```

---

## ✨ COMPLETE TEST CHECKLIST

### **Unit Tests (Utilities & Hooks)**

- [ ] validators.test.ts - Email, phone, amounts
- [ ] calculations.test.ts - ROI, interest, returns
- [ ] formatters.test.ts - Currency, dates, numbers
- [ ] helpers.test.ts - String, array, object utilities
- [ ] useContactForm.test.ts - Form state management
- [ ] useInvestmentForm.test.ts - Investment logic
- [ ] useScrollAnimation.test.ts - Scroll effects

### **Component Tests (Layout)**

- [ ] Navbar.test.tsx - Navigation, mobile menu
- [ ] Footer.test.tsx - Links, contact info
- [ ] MobileMenu.test.tsx - Toggle, a11y
- [ ] PageTransition.test.tsx - Animations

### **Component Tests (Forms - CRITICAL)**

- [ ] homeContactForm.test.tsx - 25+ tests, 90% coverage
- [ ] InvestmentContactForm.test.tsx - 25+ tests, 90% coverage

### **Component Tests (Sections)**

- [ ] Home page sections (7 components)
- [ ] About page sections (6 components)
- [ ] Service sections (5 × 6 services = 30 components)
- [ ] Events sections (5 components)
- [ ] Investment sections (4 components)
- [ ] Gallery sections (6 components)

### **Page Tests**

- [ ] home/page.test.tsx
- [ ] about/page.test.tsx
- [ ] All service pages (6)
- [ ] investment/page.test.tsx
- [ ] events/page.test.tsx
- [ ] gallery/page.test.tsx
- [ ] corporate/page.test.tsx
- [ ] cultivation/page.test.tsx

### **Integration Tests**

- [ ] ContactFormFlow.test.tsx
- [ ] InvestmentFlow.test.tsx
- [ ] ServiceBrowsingFlow.test.tsx
- [ ] NavigationFlow.test.tsx
- [ ] MobileExperience.test.tsx

### **E2E Tests**

- [ ] homepage.spec.ts
- [ ] contact.spec.ts
- [ ] investment.spec.ts
- [ ] services.spec.ts
- [ ] mobile.spec.ts
- [ ] accessibility.spec.ts

---

## 🎯 COVERAGE TARGETS

```
Unit Tests:           85%+ (utilities, helpers, calculations)
Component Tests:      75%+ (layout, sections, UI)
Form Tests:           90%+ (critical path - validation, submission)
Page Tests:           70%+ (rendering, structure)
Integration Tests:    80%+ (full workflows)
E2E Tests:            Key user journeys (5% of pyramid)
Overall:              80%+ statement coverage
```

---

## 📊 EXPECTED TEST RESULTS

After completing all phases:

```
Test Suites:  85+ passed, 85 total
Tests:        900+ passed, 900 total
Time:         45-60 seconds
Coverage:     80-85% statements
              75-80% branches
              80-85% functions
              80-85% lines

Critical Path Coverage: 90%+
Form Components:        90%+
All Utilities:          85%+
All Components:         75%+
All Pages:             70%+
```

---

## 🚦 NEXT STEPS

1. **Install dependencies** (30 min)

    ```bash
    npm install --save-dev ... --legacy-peer-deps
    ```

2. **Start Phase 1** (1 hour)
    - Verify configuration
    - Run example tests
    - Setup Playwright

3. **Execute Phase 2** (3 hours)
    - Create utility tests
    - Create hook tests
    - Monitor coverage

4. **Continue with remaining phases** (3+ weeks)
    - Follow weekly breakdown
    - Achieve coverage targets
    - Document patterns

---

## 📞 SUPPORT

Use Jest QA Testing Specialist agent:

```
@jest-qa-testing - Write unit tests for [utility name]
@jest-qa-testing - Write component tests for [component name]
@jest-qa-testing - Write E2E test for [user flow]
@jest-qa-testing - Analyze coverage gaps
@jest-qa-testing - Debug failing test [test name]
```

---

## ✅ COMPLETE TESTING INFRASTRUCTURE READY

**Total Files to Create: 80+**
**Total Tests: 900+**
**Total Coverage Lines: 2,000+**
**Timeline: 6-7 weeks for full coverage**

This is a **comprehensive, enterprise-grade testing suite** for company-web covering:

- ✅ Unit tests for all utilities and hooks
- ✅ Component tests for all 70+ components
- ✅ Page tests for all 13 pages
- ✅ Integration tests for workflows
- ✅ E2E tests for user journeys
- ✅ Accessibility testing
- ✅ Performance monitoring
- ✅ 80%+ overall coverage

**Status: Ready to implement** 🚀
