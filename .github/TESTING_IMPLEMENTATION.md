# Full Project Testing Implementation Guide

**Complete Step-by-Step Instructions for Setting Up All Types of Testing**

---

## 🎯 Quick Start (5 Minutes)

### 1. Install Dependencies

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

### 2. Verify Configuration Files Exist

The following files should already be created:

- ✅ `jest.config.js` - Jest configuration
- ✅ `jest.setup.js` - Test environment setup
- ✅ `.github/workflows/test.yml` - CI/CD pipeline
- ✅ `__tests__/setup/` - Test utilities and mocks
- ✅ `.github/TESTING_STRATEGY.md` - This documentation

### 3. Update package.json Scripts

Replace your `package.json` scripts section with:

```json
{
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "eslint",
        "test": "jest --watch",
        "test:unit": "jest --testPathPattern=unit --coverage",
        "test:component": "jest --testPathPattern=components --coverage",
        "test:integration": "jest --testPathPattern=integration --coverage",
        "test:all": "jest --coverage",
        "test:coverage": "jest --coverage --collectCoverageFrom='app/**/*.{ts,tsx},components/**/*.{ts,tsx},hooks/**/*.{ts,tsx},lib/**/*.{ts,tsx}' --coverageReporters=lcov --coverageReporters=text",
        "test:ci": "jest --ci --coverage --maxWorkers=2",
        "test:watch": "jest --watch --onlyChanged"
    }
}
```

### 4. Run Tests

```bash
# Start watching tests (development)
npm test

# Run all tests once
npm run test:all

# Run tests by category
npm run test:unit
npm run test:component
npm run test:integration

# Generate coverage report
npm run test:coverage

# Run tests in CI mode (GitHub Actions)
npm run test:ci
```

---

## 📚 Testing by Category

### **Category 1: Unit Tests (50%)**

**Location:** `__tests__/unit/` or `lib/__tests__/`

**Test:** Pure functions, utilities, business logic

**Example files to create:**

```
__tests__/unit/
├── validators.test.ts          # Email, form validation
├── calculations.test.ts        # Investment calculations
├── formatters.test.ts          # Date, number formatting
├── helpers.test.ts             # Utility functions
└── constants.test.ts           # Constants validation
```

**How to write a unit test:**

```typescript
// Example: __tests__/unit/validators.test.ts
describe('Email Validator', () => {
    it('accepts valid email addresses', () => {
        const isValid = validateEmail('test@example.com');
        expect(isValid).toBe(true);
    });

    it('rejects invalid email addresses', () => {
        const isValid = validateEmail('invalid-email');
        expect(isValid).toBe(false);
    });
});
```

**Run unit tests:**

```bash
npm run test:unit
```

---

### **Category 2: Component Tests (30%)**

**Location:** `components/__tests__/` or colocate with component

**Test:** React components rendering, props, interactions, state

**Example files to create:**

```
components/__tests__/
├── layout/
│   ├── Navbar.test.tsx
│   ├── Footer.test.tsx
│   └── MobileMenu.test.tsx
├── forms/
│   ├── ContactForm.test.tsx
│   └── InvestmentForm.test.tsx
├── sections/
│   ├── Hero.test.tsx
│   ├── Services.test.tsx
│   └── Gallery.test.tsx
└── ui/
    ├── Button.test.tsx
    └── Card.test.tsx
```

**How to write a component test:**

```typescript
// Example: components/__tests__/sections/Hero.test.tsx
import { render, screen } from '@testing-library/react'
import Hero from '@/components/sections/Hero'

describe('Hero Component', () => {
  it('renders hero section with title', () => {
    render(
      <Hero title="Welcome to Prestige Glamour" />
    )

    expect(screen.getByText('Welcome to Prestige Glamour')).toBeInTheDocument()
  })

  it('displays call-to-action button', () => {
    render(<Hero title="Test" ctaText="Learn More" />)

    expect(screen.getByRole('button', { name: /learn more/i }))
      .toBeInTheDocument()
  })
})
```

**Run component tests:**

```bash
npm run test:component
```

---

### **Category 3: Form Tests (Critical)**

**Location:** `components/forms/__tests__/`

**Test:** Form validation, submission, error handling

**Example structure:**

```typescript
// components/forms/__tests__/ContactForm.test.tsx
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '@/components/forms/ContactForm'

describe('ContactForm', () => {
  describe('Validation', () => {
    it('shows error for empty email', async () => {
      render(<ContactForm />)

      const submitBtn = screen.getByRole('button', { name: /submit/i })
      await userEvent.click(submitBtn)

      expect(screen.getByText(/email required/i)).toBeInTheDocument()
    })
  })

  describe('Submission', () => {
    it('submits form with valid data', async () => {
      const handleSubmit = jest.fn()
      render(<ContactForm onSubmit={handleSubmit} />)

      await userEvent.type(
        screen.getByLabelText(/email/i),
        'test@example.com'
      )
      await userEvent.click(screen.getByRole('button', { name: /submit/i }))

      await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalled()
      })
    })
  })
})
```

---

### **Category 4: Hook Tests**

**Location:** `hooks/__tests__/`

**Test:** Custom React hooks behavior

**Example structure:**

```typescript
// hooks/__tests__/useContactForm.test.ts
import { renderHook, act } from '@testing-library/react';
import { useContactForm } from '@/hooks/useContactForm';

describe('useContactForm', () => {
    it('initializes with empty form', () => {
        const { result } = renderHook(() => useContactForm());

        expect(result.current.values).toEqual({
            email: '',
            message: '',
        });
    });

    it('updates field values', () => {
        const { result } = renderHook(() => useContactForm());

        act(() => {
            result.current.setFieldValue('email', 'test@example.com');
        });

        expect(result.current.values.email).toBe('test@example.com');
    });
});
```

---

### **Category 5: Integration Tests (15%)**

**Location:** `__tests__/integration/`

**Test:** Multi-component workflows, API integration, full features

**Example structure:**

```typescript
// __tests__/integration/InvestmentFlow.test.tsx
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InvestmentPage from '@/app/(marketing)/investment/page'
import { server } from '__tests__/setup/mswServer'

describe('Investment Flow', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('completes full investment inquiry', async () => {
    render(<InvestmentPage />)

    // User fills form
    await userEvent.type(
      screen.getByLabelText(/name/i),
      'John Investor'
    )
    await userEvent.type(
      screen.getByLabelText(/email/i),
      'john@example.com'
    )
    await userEvent.type(
      screen.getByLabelText(/amount/i),
      '100000'
    )

    // Submit form
    await userEvent.click(
      screen.getByRole('button', { name: /submit/i })
    )

    // Verify success
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    })
  })
})
```

---

### **Category 6: Page Tests**

**Location:** `app/__tests__/` (alongside pages)

**Test:** Complete page rendering, metadata, routing

**Example structure:**

```typescript
// app/(marketing)/services/gems/__tests__/page.test.tsx
import { render, screen } from '@testing-library/react'
import GemsPage from '../page'

describe('Gems Service Page', () => {
  it('renders page with hero section', () => {
    render(<GemsPage />)

    expect(screen.getByText(/gems & jewellery/i)).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('displays product gallery', () => {
    render(<GemsPage />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
  })
})
```

---

### **Category 7: Accessibility Tests**

**Can be added to any test file**

**Test:** WCAG compliance, keyboard navigation, screen readers

**Example additions:**

```typescript
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('Component Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<MyComponent />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('supports keyboard navigation', async () => {
    render(<MyComponent />)

    const button = screen.getByRole('button')
    button.focus()
    expect(button).toHaveFocus()
  })
})
```

---

## 🗂️ Complete File Structure After Setup

```
company-web/
├── jest.config.js
├── jest.setup.js
├── package.json (updated scripts)
│
├── __tests__/
│   ├── setup/
│   │   ├── test-utils.tsx       ✅ Created
│   │   ├── mswServer.ts         ✅ Created
│   │   └── fixtures.ts          ✅ Created
│   │
│   ├── unit/
│   │   ├── utilities.test.ts    ✅ Created (example)
│   │   ├── validators.test.ts   (TODO)
│   │   ├── calculations.test.ts (TODO)
│   │   └── formatters.test.ts   (TODO)
│   │
│   ├── components/
│   │   ├── ContactForm.test.tsx ✅ Created (example)
│   │   ├── layout/
│   │   │   ├── Navbar.test.tsx  (TODO)
│   │   │   └── Footer.test.tsx  (TODO)
│   │   └── sections/
│   │       ├── Hero.test.tsx    (TODO)
│   │       └── Gallery.test.tsx (TODO)
│   │
│   ├── hooks/
│   │   ├── useContactForm.test.ts ✅ Created (example)
│   │   ├── useInvestmentForm.test.ts (TODO)
│   │   └── useScrollAnimation.test.ts (TODO)
│   │
│   └── integration/
│       ├── ContactFormFeature.test.tsx ✅ Created (example)
│       ├── InvestmentFlow.test.tsx (TODO)
│       └── HomePageFlow.test.tsx (TODO)
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── forms/
│   └── ui/
│
├── hooks/
├── lib/
├── app/
│
├── .github/
│   ├── workflows/
│   │   └── test.yml             ✅ Created
│   ├── agents/
│   ├── TESTING_STRATEGY.md      ✅ Created
│   └── TESTING_IMPLEMENTATION.md ✅ This file
│
└── coverage/                    (generated by npm run test:coverage)
    ├── lcov.info
    ├── lcov-report/
    └── coverage-summary.json
```

---

## 🚀 Implementation Phases

### **Phase 1: Foundation (Done ✅)**

- ✅ Jest configuration
- ✅ Test setup and utilities
- ✅ MSW mock server
- ✅ Example tests (unit, component, hook, integration)
- ✅ CI/CD pipeline
- ✅ Documentation

### **Phase 2: Core Components (Week 1-2)**

**Priority Tests to Create:**

1. **Layout Components** (Essential)

    ```
    - Navbar (navigation, mobile menu)
    - Footer (links, contact)
    - MobileMenu (open/close, accessibility)
    ```

2. **Form Components** (High Priority - 90%+ coverage)

    ```
    - homeContactForm (validation, submission)
    - InvestmentContactForm (field validation, errors)
    ```

3. **Utility Functions** (High Priority - 85%+ coverage)
    ```
    - Email validation
    - Investment calculations
    - Data formatting
    ```

### **Phase 3: Section Components (Week 3-4)**

```
- Hero sections (all pages)
- Service cards and galleries
- About/Overview sections
- Gallery components
```

### **Phase 4: Pages & Integration (Week 5-6)**

```
- Homepage rendering
- Service pages
- About/Corporate pages
- Full workflow tests
```

### **Phase 5: E2E & Performance (Week 7+)**

```
- Playwright setup (optional)
- Performance benchmarks
- Visual regression tests
```

---

## 📊 Coverage Targets by File

| File Type               | Target | Test Category    |
| ----------------------- | ------ | ---------------- |
| `lib/*.ts`              | 85%+   | Unit             |
| `hooks/*.ts`            | 85%+   | Unit/Hook        |
| `components/forms/*`    | 90%+   | Component        |
| `components/layout/*`   | 75%+   | Component        |
| `components/sections/*` | 75%+   | Component        |
| `app/(marketing)/*`     | 70%+   | Page/Integration |

---

## 🔍 Writing Your First Test

### Step 1: Identify What to Test

Choose a component:

```typescript
// components/ui/Button.tsx
export const Button = ({ onClick, children, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    {children}
  </button>
)
```

### Step 2: Create Test File

```typescript
// components/ui/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../Button'

describe('Button Component', () => {
  // Test 1: Rendering
  it('renders button with text', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  // Test 2: Interaction
  it('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)

    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // Test 3: State
  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Click</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
```

### Step 3: Run Test

```bash
npm test -- Button.test.tsx
```

### Step 4: See Results

```
 PASS  components/ui/__tests__/Button.test.tsx
  Button Component
    ✓ renders button with text (45ms)
    ✓ calls onClick handler when clicked (32ms)
    ✓ disables button when disabled prop is true (28ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Time:        2.456s
```

---

## 🎯 Common Testing Patterns

### Pattern 1: Testing Props

```typescript
it('accepts and renders props correctly', () => {
  render(
    <ServiceCard
      title="Plantation"
      description="Growing premium crops"
      image="/plantation.jpg"
    />
  )

  expect(screen.getByText('Plantation')).toBeInTheDocument()
  expect(screen.getByText('Growing premium crops')).toBeInTheDocument()
})
```

### Pattern 2: Testing User Events

```typescript
it('handles user interactions', async () => {
  const user = userEvent.setup()
  render(<ContactForm />)

  await user.type(screen.getByLabelText(/email/i), 'test@example.com')
  await user.click(screen.getByRole('button'))

  await waitFor(() => {
    expect(screen.getByText(/success/i)).toBeInTheDocument()
  })
})
```

### Pattern 3: Testing API Calls

```typescript
it('fetches and displays data', async () => {
  render(<ServicesList />)

  await waitFor(() => {
    expect(screen.getByText('Plantation')).toBeInTheDocument()
  })
})
```

### Pattern 4: Testing Hooks

```typescript
it('updates state correctly', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
        result.current.increment();
    });

    expect(result.current.count).toBe(1);
});
```

---

## ✅ Testing Checklist

Before committing code, ensure:

- [ ] All new components have tests
- [ ] All forms have 90%+ coverage
- [ ] All utilities have 85%+ coverage
- [ ] All pages have 70%+ coverage
- [ ] Tests pass locally: `npm test`
- [ ] Coverage meets targets: `npm run test:coverage`
- [ ] No console errors or warnings
- [ ] Accessibility tests pass
- [ ] Tests are not flaky (run multiple times)

---

## 📈 Monitoring Test Health

### Weekly

```bash
npm run test:coverage
# Review coverage trends
# Check for new failures
# Update snapshots if needed
```

### Before Deployment

```bash
npm run test:ci
npm run test:all
# Ensure 100% pass rate
# Verify coverage targets met
```

### Coverage Report

```bash
npm run test:coverage
open coverage/lcov-report/index.html
```

---

## 🆘 Troubleshooting

### Issue: Tests not found

**Solution:** Check file naming

```
❌ Wrong: component.tsx or Component.unit.ts
✅ Right: Component.test.tsx or Component.test.ts
```

### Issue: "Cannot find module"

**Solution:** Update jest.config.js moduleNameMapper

```javascript
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/$1',
}
```

### Issue: Timeout errors

**Solution:** Increase timeout

```typescript
jest.setTimeout(10000); // 10 seconds
```

### Issue: Act warnings

**Solution:** Wrap state updates

```typescript
act(() => {
    result.current.updateValue('new value');
});
```

---

## 📞 Getting Help

For specific testing questions, invoke the Jest QA Testing Specialist:

```
@jest-qa-testing - Help me write tests for [component name]
```

---

## ✨ Next Steps

1. **Install dependencies:** Run npm install
2. **Run existing tests:** `npm test`
3. **Create unit tests:** Start with `__tests__/unit/`
4. **Create component tests:** Add tests for key components
5. **Monitor coverage:** Run `npm run test:coverage` regularly
6. **Integrate with CI/CD:** GitHub Actions pipeline is ready

---

**Last Updated:** May 21, 2026
**Status:** Ready for Implementation
**Questions?** Ask the Jest QA Testing Specialist agent
