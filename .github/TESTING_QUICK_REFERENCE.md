# Jest Testing Quick Reference Guide

**Fast lookup for common testing scenarios**

---

## 🚀 Quick Commands

```bash
# Run all tests
npm test

# Run specific test file
npm test -- ContactForm.test.tsx

# Run tests in coverage mode
npm run test:coverage

# Run tests by category
npm run test:unit              # Unit tests only
npm run test:component         # Component tests only
npm run test:integration       # Integration tests only

# Watch mode (re-runs on file change)
npm test -- --watch

# Update snapshots
npm test -- --updateSnapshot

# Run specific describe block
npm test -- --testNamePattern="Form Validation"

# Run with debug output
npm test -- --verbose

# Run in CI mode
npm run test:ci
```

---

## 📝 Test Template - Component

```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MyComponent } from '@/components/MyComponent'

describe('MyComponent', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<MyComponent />)
      expect(screen.getByText(/title/i)).toBeInTheDocument()
    })
  })

  describe('Props', () => {
    it('applies props correctly', () => {
      render(<MyComponent title="Test" />)
      expect(screen.getByText('Test')).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('handles user click', async () => {
      const user = userEvent.setup()
      const handleClick = jest.fn()
      render(<MyComponent onClick={handleClick} />)

      await user.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('has proper ARIA labels', () => {
      render(<MyComponent />)
      expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
    })
  })
})
```

---

## 📝 Test Template - Hook

```typescript
import { renderHook, act } from '@testing-library/react';
import { useMyHook } from '@/hooks/useMyHook';

describe('useMyHook', () => {
    it('initializes with correct default values', () => {
        const { result } = renderHook(() => useMyHook());
        expect(result.current.value).toBe('default');
    });

    it('updates value on action', () => {
        const { result } = renderHook(() => useMyHook());

        act(() => {
            result.current.setValue('new value');
        });

        expect(result.current.value).toBe('new value');
    });
});
```

---

## 📝 Test Template - Form

```typescript
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MyForm } from '@/components/forms/MyForm'

describe('MyForm', () => {
  it('validates required fields', async () => {
    const user = userEvent.setup()
    render(<MyForm />)

    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText(/required/i)).toBeInTheDocument()
  })

  it('submits valid form', async () => {
    const user = userEvent.setup()
    const handleSubmit = jest.fn()
    render(<MyForm onSubmit={handleSubmit} />)

    await user.type(screen.getByLabelText(/field/i), 'value')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled()
    })
  })
})
```

---

## 📝 Test Template - API Integration

```typescript
import { render, screen, waitFor } from '@testing-library/react'
import { server } from '__tests__/setup/mswServer'
import { http, HttpResponse } from 'msw'

describe('API Integration', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('fetches data successfully', async () => {
    render(<MyComponent />)

    await waitFor(() => {
      expect(screen.getByText('Success')).toBeInTheDocument()
    })
  })

  it('handles API errors', async () => {
    server.use(
      http.get('/api/endpoint', () =>
        HttpResponse.error()
      )
    )

    render(<MyComponent />)

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument()
    })
  })
})
```

---

## 🎯 Common Assertions

```typescript
// Existence
expect(element).toBeInTheDocument();
expect(element).toBeVisible();
expect(element).toBeEmptyDOMElement();

// Text Content
expect(screen.getByText(/pattern/i)).toBeInTheDocument();
expect(element).toHaveTextContent('text');
expect(element).toContainHTML('<div></div>');

// Attributes
expect(element).toHaveAttribute('href', '/path');
expect(element).toHaveClass('active');
expect(element).toHaveStyle({ color: 'red' });

// Input/Form
expect(input).toHaveValue('value');
expect(input).toHaveDisplayValue('Display Value');
expect(checkbox).toBeChecked();
expect(input).toHaveFormValues({ name: 'value' });

// Disabled/Enabled
expect(button).toBeDisabled();
expect(button).toBeEnabled();
expect(button).not.toHaveAttribute('disabled');

// Functions
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledWith('arg');
expect(mockFn).toHaveBeenCalledTimes(1);
expect(mockFn).toHaveReturnedWith(value);

// Numbers
expect(value).toBe(5);
expect(value).toBeCloseTo(5.1);
expect(value).toBeGreaterThan(4);

// Types
expect(value).toBeDefined();
expect(value).not.toBeNull();
expect(value).toEqual(expected);

// Arrays
expect(array).toContain(item);
expect(array).toHaveLength(3);
expect(array).toEqual([item1, item2]);

// Focus
expect(element).toHaveFocus();
```

---

## 🔍 Common Query Methods (in order of preference)

```typescript
// 1. getByRole (RECOMMENDED)
screen.getByRole('button', { name: /submit/i });
screen.getByRole('textbox', { name: /email/i });
screen.getByRole('heading', { level: 1 });

// 2. getByLabelText (for form fields)
screen.getByLabelText(/email/i);
screen.getByLabelText('Email address');

// 3. getByPlaceholderText
screen.getByPlaceholderText(/enter email/i);

// 4. getByText (last resort)
screen.getByText(/welcome/i);

// 5. getByTestId (avoid if possible)
screen.getByTestId('submit-button');
```

---

## ⏱️ Async Patterns

```typescript
// Wait for element to appear
await screen.findByText('Loading complete');

// Wait for condition
await waitFor(
    () => {
        expect(screen.getByText('Success')).toBeInTheDocument();
    },
    { timeout: 3000 }
);

// Wait for element to disappear
await waitFor(() => {
    expect(screen.queryByText('Loading')).not.toBeInTheDocument();
});

// userEvent setup
const user = userEvent.setup();
await user.type(input, 'text');
await user.click(button);
```

---

## 🎭 Mocking Patterns

```typescript
// Mock function
const mockFn = jest.fn();
const mockFn = jest.fn().mockReturnValue('value');
const mockFn = jest.fn().mockResolvedValue(data);
const mockFn = jest.fn().mockRejectedValue(error);

// Mock module
jest.mock('@/lib/utils', () => ({
    helper: jest.fn(() => 'mocked'),
}));

// Mock implementation
mockFn.mockImplementation((arg) => arg.toUpperCase());

// Restore mocks
jest.clearAllMocks();
jest.resetAllMocks();
jest.restoreAllMocks();
```

---

## 📊 Coverage Commands

```bash
# Generate coverage report
npm run test:coverage

# View coverage in HTML
open coverage/lcov-report/index.html

# Check specific file coverage
npm run test:coverage -- lib/helpers.ts

# Coverage thresholds
# Set in jest.config.js:
coverageThreshold: {
  global: {
    statements: 80,
    branches: 75,
    functions: 80,
    lines: 80,
  },
}
```

---

## 🐛 Debugging

```typescript
// Print element
screen.debug(element)
screen.debug() // prints entire DOM

// Get helpful error messages
screen.logTestingPlaygroundURL(element)

// Pause test
debugger

// Inspect rendered output
render(<MyComponent />)
const { container } = render(<MyComponent />)
console.log(container.innerHTML)
```

---

## ✅ Pre-Commit Checklist

```bash
# Run before committing code
npm run test -- --onlyChanged
npm run test:coverage
npm run lint

# Verify no console errors
# Run accessibility check if applicable
# Update snapshots if needed
```

---

## 🔗 File Location Reference

| File Type         | Location                                              |
| ----------------- | ----------------------------------------------------- |
| Unit tests        | `__tests__/unit/`                                     |
| Component tests   | `components/__tests__/` or `components/**/*.test.tsx` |
| Hook tests        | `hooks/__tests__/`                                    |
| Page tests        | `app/__tests__/` or `app/**/*.test.tsx`               |
| Integration tests | `__tests__/integration/`                              |
| Test setup        | `__tests__/setup/`                                    |

---

## 📚 Learn More

- [Testing Library Docs](https://testing-library.com/)
- [Jest Docs](https://jestjs.io/)
- [React Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [MSW Docs](https://mswjs.io/)

---

## 🆘 Common Errors & Fixes

| Error                | Cause                    | Fix                                      |
| -------------------- | ------------------------ | ---------------------------------------- |
| "Cannot find module" | Wrong path               | Check moduleNameMapper in jest.config.js |
| "Act warning"        | State update not wrapped | Use `act(() => { ... })`                 |
| "Timeout"            | Element not found        | Increase timeout or check selector       |
| "ReferenceError"     | Missing import           | Import from `@testing-library/react`     |

---

**Keep this file handy for quick reference while writing tests!**
