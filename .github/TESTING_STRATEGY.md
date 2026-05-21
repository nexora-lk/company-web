# Comprehensive Testing Strategy - company-web

**Author:** Jest QA Testing Specialist (20+ years)
**Date:** May 21, 2026
**Scope:** Full project testing - Unit, Integration, Component, E2E, Accessibility, Performance

---

## 🎯 Testing Overview

This document outlines a complete testing strategy for company-web, covering all testing types and implementation roadmap.

### Testing Pyramid (company-web)

```
        🔴 E2E Tests (5%)
           Playwright/Cypress

          🟡 Integration (15%)
        Feature workflows, APIs

         🟢 Component (30%)
      React components, forms

        🔵 Unit Tests (50%)
     Functions, utilities, hooks
```

### Testing Coverage Targets

| Category              | Target | Priority |
| --------------------- | ------ | -------- |
| **Overall**           | 80%    | High     |
| **Components**        | 75%    | High     |
| **Pages**             | 70%    | High     |
| **Utilities/Hooks**   | 85%    | High     |
| **Critical Features** | 90%    | Critical |
| **Forms**             | 90%    | Critical |
| **API Integration**   | 85%    | High     |

---

## 📋 Testing Types & Implementation

### 1. **Unit Tests** (50% of suite)

**Purpose:** Test individual functions, utilities, and business logic in isolation

**What to Test:**

- Utility functions in `/lib`
- Custom hooks in `/hooks`
- Data transformation functions
- Constants validation
- Helper functions

**Example Coverage:**

```
- formatDate(date: Date): string
- calculateInvestmentReturn(amount: number, rate: number): number
- validateEmail(email: string): boolean
- parseQueryParams(query: string): object
```

**File Structure:**

```
lib/
├── helpers.ts
├── helpers.test.ts          ← Unit test
├── validators.ts
└── validators.test.ts       ← Unit test
```

---

### 2. **Component Tests** (30% of suite)

**Purpose:** Test React components rendering, props, state, and user interactions

**What to Test:**

- Layout components (`Navbar`, `Footer`, `Layout`)
- Section components (homepage sections, service pages)
- Form components (`ContactForm`, `InvestmentForm`)
- UI components (`Photo`, `Button`, `Card`)
- State management and props
- Event handlers and callbacks

**Component Categories:**

#### A. **Layout Components**

```
components/layout/
├── Navbar.test.tsx       (Mobile menu, navigation links, interactions)
├── Footer.test.tsx       (Links, CTA buttons, contact info)
├── MobileMenu.test.tsx   (Open/close, accessibility)
└── PageTransition.test.tsx (Animation triggers)
```

#### B. **Section Components**

```
components/sections/home/
├── hero.test.tsx         (Content rendering, CTAs)
├── services.test.tsx     (Service cards, links)
├── gallery.test.tsx      (Image rendering, alt text)
├── about.test.tsx        (Statistics display)
└── contact.test.tsx      (Form handling)

components/sections/services/[service]/
├── hero.test.tsx         (Dynamic content)
├── overview.test.tsx     (Product/service info)
└── gallery.test.tsx      (Image galleries)
```

#### C. **Form Components**

```
components/forms/
├── homeContactForm.test.tsx      (Email validation, submission)
└── InvestmentContactForm.test.tsx (Field validation, error handling)
```

---

### 3. **Integration Tests** (15% of suite)

**Purpose:** Test multiple components working together, API interactions, and workflows

**What to Test:**

- Complete user workflows (contact form → email sent)
- Multi-component interactions (Navbar → Mobile Menu)
- Page rendering with all sections
- API calls with mocked responses
- State flow between components

**Example Workflows:**

```
1. Homepage load flow:
   - Layout renders → Navbar loads → Hero section → Sections render

2. Service page flow:
   - Navigate to /services/gems → Hero displays → Gallery loads → CTA works

3. Contact form flow:
   - Fill form → Validate fields → Submit → Success message

4. API integration:
   - Fetch services → Display in UI → Handle errors
```

---

### 4. **Page Tests** (Covered in Integration)

**Purpose:** Test complete pages as integrated units

**What to Test:**

- `app/(marketing)/home/page.tsx`
- `app/(marketing)/about/page.tsx`
- `app/(marketing)/services/[service]/page.tsx`
- Metadata generation
- Layouts and routing
- Server-side rendering

---

### 5. **Accessibility Tests** (Cross-cutting)

**Purpose:** Ensure WCAG AA/AAA compliance, keyboard navigation, screen reader support

**What to Test:**

- Color contrast ratios (WCAG AA minimum)
- Keyboard navigation (Tab, Enter, Escape)
- ARIA labels and roles
- Semantic HTML
- Screen reader announcements
- Focus management

**Tools:**

- `@testing-library/jest-axe` for automated accessibility checks
- `jest-axe` for React Testing Library integration

---

### 6. **Performance Tests** (Optional but recommended)

**Purpose:** Catch performance regressions before production

**What to Test:**

- Component render time
- Memory leaks (useEffect cleanup)
- Bundle size impact
- Animation performance
- Image loading strategies

---

### 7. **E2E Tests** (5% - Future)

**Purpose:** Test full user journeys in real browser environment

**Tools:**

- Playwright or Cypress (future implementation)
- Test real navigation, interactions, visual regressions
- Can add once Jest suite is stable

---

## 🛠️ Setup Instructions

### Step 1: Install Testing Dependencies

```bash
npm install --save-dev \
  jest \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  react-hooks-testing-library \
  jest-environment-jsdom \
  ts-jest \
  @types/jest \
  msw \
  @testing-library/jest-axe
```

### Step 2: Create Jest Configuration

Create `jest.config.js`:

```javascript
const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    roots: ['<rootDir>'],
    testMatch: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/*.{spec,test}.{js,jsx,ts,tsx}'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    collectCoverageFrom: [
        'app/**/*.{js,jsx,ts,tsx}',
        'components/**/*.{js,jsx,ts,tsx}',
        'hooks/**/*.{js,jsx,ts,tsx}',
        'lib/**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/.next/**',
        '!**/coverage/**',
    ],
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 75,
            functions: 80,
            lines: 80,
        },
        './components': {
            statements: 75,
            branches: 70,
            functions: 75,
            lines: 75,
        },
    },
};

module.exports = createJestConfig(customJestConfig);
```

### Step 3: Create Jest Setup File

Create `jest.setup.js`:

```javascript
import '@testing-library/jest-dom';

// Mock environment variables
process.env.NEXT_PUBLIC_SITE_URL = 'https://www.prestigeglamourgroupofcompany.com';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    disconnect() {}
    observe() {}
    takeRecords() {
        return [];
    }
    unobserve() {}
};

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

// Suppress console warnings in tests (optional)
const originalError = console.error;
beforeAll(() => {
    console.error = (...args) => {
        if (
            typeof args[0] === 'string' &&
            (args[0].includes('Warning: ReactDOM.render') || args[0].includes('Not implemented'))
        ) {
            return;
        }
        originalError.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
});
```

### Step 4: Update package.json Scripts

```json
{
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "eslint",
        "test": "jest",
        "test:watch": "jest --watch",
        "test:coverage": "jest --coverage",
        "test:ci": "jest --ci --coverage --maxWorkers=2"
    }
}
```

---

## 📁 Project Testing Structure

### Directory Layout for Tests

```
company-web/
├── app/
│   ├── layout.test.tsx
│   ├── page.test.tsx
│   └── (marketing)/
│       ├── home/
│       │   └── page.test.tsx
│       ├── about/
│       │   └── page.test.tsx
│       └── services/
│           └── [service]/
│               └── page.test.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.test.tsx
│   │   ├── Footer.test.tsx
│   │   ├── MobileMenu.test.tsx
│   │   └── PageTransition.test.tsx
│   │
│   ├── sections/
│   │   ├── home/
│   │   │   ├── hero.test.tsx
│   │   │   ├── services.test.tsx
│   │   │   ├── gallery.test.tsx
│   │   │   ├── about.test.tsx
│   │   │   └── contact.test.tsx
│   │   │
│   │   └── services/
│   │       ├── gems/
│   │       │   ├── hero.test.tsx
│   │       │   └── overview.test.tsx
│   │       └── [other services]/
│   │
│   ├── forms/
│   │   ├── homeContactForm.test.tsx
│   │   └── InvestmentContactForm.test.tsx
│   │
│   └── ui/
│       ├── Photo.test.tsx
│       └── Button.test.tsx
│
├── hooks/
│   ├── __tests__/
│   │   ├── useInvestmentForm.test.ts
│   │   ├── useScrollAnimation.test.ts
│   │   └── useContactForm.test.ts
│
├── lib/
│   ├── __tests__/
│   │   ├── helpers.test.ts
│   │   ├── validators.test.ts
│   │   └── api.test.ts
│
├── jest.config.js
├── jest.setup.js
├── .github/
│   └── workflows/
│       └── test.yml              ← CI/CD pipeline
│
└── package.json
```

---

## 🚀 Implementation Roadmap

### **Phase 1: Foundation (Week 1)**

- [x] Install testing dependencies
- [x] Configure Jest + Setup
- [x] Create MSW mock server
- [x] Write documentation (this file)

### **Phase 2: Utilities & Hooks (Week 2)**

- [ ] Write unit tests for `/lib` functions
- [ ] Write tests for custom hooks in `/hooks`
- [ ] Achieve 85%+ coverage on utilities

### **Phase 3: Components - Layout (Week 3)**

- [ ] Test `Navbar` component (navigation, mobile menu)
- [ ] Test `Footer` component (links, contact)
- [ ] Test `MobileMenu` component (open/close)
- [ ] Test `Layout` wrapper
- [ ] Achieve 75%+ component coverage

### **Phase 4: Components - Forms (Week 4)**

- [ ] Test `homeContactForm` (validation, submission)
- [ ] Test `InvestmentContactForm` (field validation)
- [ ] Test form error states
- [ ] Achieve 90%+ coverage on forms

### **Phase 5: Components - Sections (Week 5)**

- [ ] Test home page sections (hero, services, gallery)
- [ ] Test service page sections (overview, gallery)
- [ ] Test accessibility compliance
- [ ] Achieve 75%+ coverage on sections

### **Phase 6: Pages & Integration (Week 6)**

- [ ] Test homepage rendering
- [ ] Test service pages
- [ ] Test page-level interactions
- [ ] Achieve 70%+ coverage on pages

### **Phase 7: E2E & Performance (Week 7+)**

- [ ] Setup Playwright/Cypress (optional)
- [ ] Write E2E test scenarios
- [ ] Performance regression testing

---

## 📊 Coverage Analysis Template

```bash
# Run coverage report
npm run test:coverage

# Output should show:
# ✓ Statements: 80%+ (green)
# ✓ Branches: 75%+ (green)
# ✓ Functions: 80%+ (green)
# ✓ Lines: 80%+ (green)

# Check coverage by file type:
# app/        - Pages & layouts
# components/ - React components
# hooks/      - Custom hooks
# lib/        - Utilities
```

---

## 🎓 Test Writing Guidelines

### 1. **File Naming**

- Colocate tests with source files OR use `__tests__` folder
- Test files: `Component.test.tsx`, `function.test.ts`
- Page tests: `page.test.tsx` (in page directory)

### 2. **Test Organization**

```typescript
describe('ComponentName', () => {
    // Setup
    beforeEach(() => {
        // Setup before each test
    });

    describe('rendering', () => {
        it('renders without crashing', () => {});
        it('displays required content', () => {});
    });

    describe('user interactions', () => {
        it('handles click events', () => {});
        it('submits form data', () => {});
    });

    describe('edge cases', () => {
        it('handles empty state', () => {});
        it('handles error state', () => {});
    });

    describe('accessibility', () => {
        it('has accessible label', () => {});
        it('supports keyboard navigation', () => {});
    });
});
```

### 3. **Mock Strategy**

- **Mock:** External APIs, HTTP requests, localStorage
- **Don't Mock:** Internal utilities, child components, DOM APIs

### 4. **Assertion Best Practices**

```typescript
// ✓ Good - Tests observable behavior
expect(screen.getByText('Submit')).toBeInTheDocument();
expect(mockFn).toHaveBeenCalledWith(expectedArg);

// ✗ Bad - Tests implementation details
expect(component.state.isOpen).toBe(true);
expect(component.instance.method()).toBe(value);
```

---

## 🔧 Common Test Patterns

See `.github/agents/jest-qa-testing.agent.md` for:

- Component testing patterns
- Form testing patterns
- API mocking with MSW
- Custom hook testing
- Accessibility testing

---

## 📈 Monitoring & Maintenance

### Weekly Tasks

- Review coverage reports
- Fix flaky tests
- Update snapshots
- Performance baseline

### Monthly Tasks

- Coverage trend analysis
- Test effectiveness review
- Dependency updates
- Optimization passes

### Quarterly Tasks

- Test strategy review
- Add new test categories
- Refactor test utilities
- Documentation updates

---

## 🤝 CI/CD Integration

### GitHub Actions Workflow (`.github/workflows/test.yml`)

```yaml
name: Test

on: [push, pull_request]

jobs:
    test:
        runs-on: ubuntu-latest

        strategy:
            matrix:
                node-version: [18.x, 20.x]

        steps:
            - uses: actions/checkout@v3

            - uses: actions/setup-node@v3
              with:
                  node-version: ${{ matrix.node-version }}
                  cache: 'npm'

            - run: npm ci

            - run: npm run lint

            - run: npm run test:ci

            - uses: codecov/codecov-action@v3
              with:
                  files: ./coverage/lcov.info
```

---

## ✅ Success Metrics

| Metric             | Target | Current        |
| ------------------ | ------ | -------------- |
| Test Coverage      | 80%+   | To be measured |
| Component Coverage | 75%+   | To be measured |
| Test Pass Rate     | 100%   | To be measured |
| Avg Test Duration  | <100ms | To be measured |
| CI/CD Pass Rate    | 99%+   | To be measured |
| Flaky Tests        | 0%     | To be measured |

---

## 📚 Resources & References

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Mock Service Worker](https://mswjs.io/)
- [WCAG Accessibility Testing](https://www.w3.org/WAI/test-evaluate/)
- [Jest Axe](https://github.com/nickcolley/jest-axe)

---

## 📞 Questions & Support

For testing assistance, invoke the Jest QA Testing Specialist agent:

```
@jest-qa-testing - Help me write tests for [component name]
```

---

**Last Updated:** May 21, 2026
**Next Review:** June 21, 2026
