# Company-Web Testing Patterns

**Real-world testing examples for company-web components and services**

---

## 🌾 Pattern 1: Service Card Component

```typescript
// components/sections/home/services.tsx
export interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  icon?: React.ReactNode
}

export const ServiceCard = ({
  title,
  description,
  image,
  href,
  icon
}: ServiceCardProps) => (
  <article className="service-card">
    {icon && <div className="icon">{icon}</div>}
    <img src={image} alt={`${title} service`} />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={href}>Learn More</a>
  </article>
)
```

**Test File:**

```typescript
// components/sections/__tests__/ServiceCard.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ServiceCard } from '../ServiceCard'

describe('ServiceCard', () => {
  const mockProps = {
    title: 'Plantation Services',
    description: 'Premium highland crop cultivation',
    image: '/plantation.jpg',
    href: '/services/plantation',
  }

  describe('Rendering', () => {
    it('renders service card with all content', () => {
      render(<ServiceCard {...mockProps} />)

      expect(screen.getByText('Plantation Services')).toBeInTheDocument()
      expect(screen.getByText('Premium highland crop cultivation')).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
    })

    it('displays image with descriptive alt text', () => {
      render(<ServiceCard {...mockProps} />)

      const image = screen.getByAltText('Plantation Services service')
      expect(image).toHaveAttribute('src', '/plantation.jpg')
    })

    it('renders icon when provided', () => {
      const testIcon = <span data-testid="service-icon">🌾</span>
      render(<ServiceCard {...mockProps} icon={testIcon} />)

      expect(screen.getByTestId('service-icon')).toBeInTheDocument()
    })
  })

  describe('Navigation', () => {
    it('links to correct service page', () => {
      render(<ServiceCard {...mockProps} />)

      const link = screen.getByRole('link', { name: /learn more/i })
      expect(link).toHaveAttribute('href', '/services/plantation')
    })

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup()
      render(<ServiceCard {...mockProps} />)

      const link = screen.getByRole('link')
      link.focus()
      expect(link).toHaveFocus()
    })
  })

  describe('Accessibility', () => {
    it('has proper semantic structure', () => {
      render(<ServiceCard {...mockProps} />)

      expect(screen.getByRole('article')).toBeInTheDocument()
      expect(screen.getByRole('heading')).toBeInTheDocument()
      expect(screen.getByRole('img')).toBeInTheDocument()
      expect(screen.getByRole('link')).toBeInTheDocument()
    })
  })
})
```

---

## 📧 Pattern 2: Investment Contact Form

```typescript
// components/forms/InvestmentContactForm.tsx
export interface InvestmentFormData {
  name: string
  email: string
  phone: string
  investmentAmount: number
  sector: string
  message?: string
}

export const InvestmentContactForm = ({
  onSuccess
}: {
  onSuccess?: () => void
}) => {
  const [formData, setFormData] = React.useState<InvestmentFormData>({
    name: '',
    email: '',
    phone: '',
    investmentAmount: 0,
    sector: '',
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (formData.investmentAmount < 10000) {
      newErrors.investmentAmount = 'Minimum solutions is LKR 10,000'
    }
    if (!formData.sector) newErrors.sector = 'Please select a sector'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/investment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Submission failed')

      setSubmitted(true)
      onSuccess?.()
    } catch (error) {
      setErrors({ submit: 'Failed to submit. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {submitted && <div role="status" className="success">Thank you! We will review your proposal.</div>}

      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
      />
      {errors.name && <span role="alert">{errors.name}</span>}

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
      />
      {errors.email && <span role="alert">{errors.email}</span>}

      <input
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
      />
      {errors.phone && <span role="alert">{errors.phone}</span>}

      <input
        type="number"
        placeholder="Investment Amount (LKR)"
        value={formData.investmentAmount}
        onChange={(e) => setFormData(prev => ({ ...prev, investmentAmount: parseFloat(e.target.value) }))}
      />
      {errors.investmentAmount && <span role="alert">{errors.investmentAmount}</span>}

      <select
        value={formData.sector}
        onChange={(e) => setFormData(prev => ({ ...prev, sector: e.target.value }))}
      >
        <option value="">Select Sector</option>
        <option value="plantation">Plantation</option>
        <option value="gems">Gems & Jewellery</option>
        <option value="real-estate">Real Estate</option>
        <option value="microfinance">Microfinance</option>
      </select>
      {errors.sector && <span role="alert">{errors.sector}</span>}

      <textarea
        placeholder="Additional Details"
        value={formData.message || ''}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
      />

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit Investment Proposal'}
      </button>

      {errors.submit && <span role="alert">{errors.submit}</span>}
    </form>
  )
}
```

**Test File:**

```typescript
// components/forms/__tests__/InvestmentContactForm.test.tsx
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InvestmentContactForm } from '../InvestmentContactForm'

describe('InvestmentContactForm', () => {
  describe('Form Fields', () => {
    it('renders all solutions form fields', () => {
      render(<InvestmentContactForm />)

      expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Investment Amount (LKR)')).toBeInTheDocument()
      expect(screen.getByDisplayValue('Select Sector')).toBeInTheDocument()
    })
  })

  describe('Validation', () => {
    it('validates required fields', async () => {
      const user = userEvent.setup()
      render(<InvestmentContactForm />)

      await user.click(screen.getByRole('button', { name: /submit/i }))

      expect(screen.getByText('Name is required')).toBeInTheDocument()
      expect(screen.getByText('Valid email required')).toBeInTheDocument()
      expect(screen.getByText('Phone is required')).toBeInTheDocument()
      expect(screen.getByText(/minimum investment/i)).toBeInTheDocument()
    })

    it('enforces minimum solutions amount', async () => {
      const user = userEvent.setup()
      render(<InvestmentContactForm />)

      const amountInput = screen.getByPlaceholderText('Investment Amount (LKR)')
      await user.type(amountInput, '5000')
      await user.click(screen.getByRole('button', { name: /submit/i }))

      expect(screen.getByText(/minimum investment/i)).toBeInTheDocument()
    })

    it('validates email format', async () => {
      const user = userEvent.setup()
      render(<InvestmentContactForm />)

      await user.type(screen.getByPlaceholderText('Email'), 'invalid-email')
      await user.click(screen.getByRole('button', { name: /submit/i }))

      expect(screen.getByText('Valid email required')).toBeInTheDocument()
    })
  })

  describe('Submission', () => {
    it('submits valid solutions proposal', async () => {
      const user = userEvent.setup()
      const handleSuccess = jest.fn()

      // Mock fetch
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      })

      render(<InvestmentContactForm onSuccess={handleSuccess} />)

      await user.type(screen.getByPlaceholderText('Full Name'), 'John Investor')
      await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
      await user.type(screen.getByPlaceholderText('Phone'), '+94701234567')
      await user.type(screen.getByPlaceholderText('Investment Amount (LKR)'), '100000')

      const sectorSelect = screen.getByDisplayValue('Select Sector')
      await user.selectOptions(sectorSelect, 'plantation')

      await user.click(screen.getByRole('button', { name: /submit/i }))

      await waitFor(() => {
        expect(handleSuccess).toHaveBeenCalled()
        expect(screen.getByText(/thank you/i)).toBeInTheDocument()
      })
    })

    it('handles submission errors', async () => {
      const user = userEvent.setup()

      global.fetch = jest.fn().mockRejectedValueOnce(new Error('Network error'))

      render(<InvestmentContactForm />)

      await user.type(screen.getByPlaceholderText('Full Name'), 'John')
      await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
      await user.type(screen.getByPlaceholderText('Phone'), '+94701234567')
      await user.type(screen.getByPlaceholderText('Investment Amount (LKR)'), '100000')
      await user.selectOptions(screen.getByDisplayValue('Select Sector'), 'plantation')

      await user.click(screen.getByRole('button', { name: /submit/i }))

      await waitFor(() => {
        expect(screen.getByText(/failed to submit/i)).toBeInTheDocument()
      })
    })
  })

  describe('Loading State', () => {
    it('shows loading indicator during submission', async () => {
      const user = userEvent.setup()

      global.fetch = jest.fn(() => new Promise(resolve => setTimeout(resolve, 100)))

      render(<InvestmentContactForm />)

      await user.type(screen.getByPlaceholderText('Full Name'), 'John')
      await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
      await user.type(screen.getByPlaceholderText('Phone'), '+94701234567')
      await user.type(screen.getByPlaceholderText('Investment Amount (LKR)'), '100000')
      await user.selectOptions(screen.getByDisplayValue('Select Sector'), 'plantation')

      const submitButton = screen.getByRole('button', { name: /submit/i })
      await user.click(submitButton)

      expect(screen.getByRole('button', { name: /submitting/i })).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('provides proper error announcements', async () => {
      const user = userEvent.setup()
      render(<InvestmentContactForm />)

      await user.click(screen.getByRole('button', { name: /submit/i }))

      const alerts = screen.getAllByRole('alert')
      expect(alerts.length).toBeGreaterThan(0)
    })
  })
})
```

---

## 🎨 Pattern 3: Gallery Component

```typescript
// components/sections/gallery/Gallery.tsx
export interface GalleryImage {
  id: string
  src: string
  alt: string
  title?: string
}

export const Gallery = ({ images }: { images: GalleryImage[] }) => {
  const [selectedId, setSelectedId] = React.useState<string | null>(null)

  return (
    <section aria-label="Image gallery">
      <div className="gallery-grid">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedId(image.id)}
            aria-label={`View ${image.title || image.alt}`}
            className={selectedId === image.id ? 'selected' : ''}
          >
            <img src={image.src} alt={image.alt} />
            {image.title && <h3>{image.title}</h3>}
          </button>
        ))}
      </div>

      {selectedId && (
        <div className="modal" role="dialog" aria-labelledby="modal-title">
          <div className="modal-content">
            {images.find(img => img.id === selectedId) && (
              <>
                <h2 id="modal-title">{images.find(img => img.id === selectedId)?.title}</h2>
                <img
                  src={images.find(img => img.id === selectedId)?.src}
                  alt={images.find(img => img.id === selectedId)?.alt}
                />
              </>
            )}
            <button onClick={() => setSelectedId(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}
```

**Test File:**

```typescript
// components/sections/__tests__/Gallery.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery, GalleryImage } from '../Gallery'

describe('Gallery Component', () => {
  const mockImages: GalleryImage[] = [
    {
      id: '1',
      src: '/gems-1.jpg',
      alt: 'Ruby gemstone closeup',
      title: 'Premium Ruby',
    },
    {
      id: '2',
      src: '/gems-2.jpg',
      alt: 'Sapphire gemstone closeup',
      title: 'Premium Sapphire',
    },
  ]

  it('displays all gallery images', () => {
    render(<Gallery images={mockImages} />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
  })

  it('opens modal when image is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery images={mockImages} />)

    const firstImage = screen.getByAltText('Ruby gemstone closeup')
    await user.click(firstImage.closest('button')!)

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Premium Ruby')).toBeInTheDocument()
  })

  it('closes modal on close button click', async () => {
    const user = userEvent.setup()
    render(<Gallery images={mockImages} />)

    const firstImage = screen.getByAltText('Ruby gemstone closeup')
    await user.click(firstImage.closest('button')!)

    const closeButton = screen.getByRole('button', { name: /close/i })
    await user.click(closeButton)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup()
    render(<Gallery images={mockImages} />)

    const buttons = screen.getAllByRole('button').slice(0, 2)
    buttons[0].focus()
    expect(buttons[0]).toHaveFocus()

    await user.tab()
    expect(buttons[1]).toHaveFocus()
  })
})
```

---

## 💰 Pattern 4: Investment Calculator Hook

```typescript
// hooks/useInvestmentCalculator.ts
export const useInvestmentCalculator = () => {
    const [principal, setPrincipal] = React.useState(0);
    const [rate, setRate] = React.useState(0.08);
    const [years, setYears] = React.useState(5);

    const calculate = React.useMemo(() => {
        return {
            totalReturn: principal * Math.pow(1 + rate, years),
            gain: principal * (Math.pow(1 + rate, years) - 1),
            annualReturn: principal * rate,
        };
    }, [principal, rate, years]);

    return {
        principal,
        setPrincipal,
        rate,
        setRate,
        years,
        setYears,
        ...calculate,
    };
};
```

**Test File:**

```typescript
// hooks/__tests__/useInvestmentCalculator.test.ts
import { renderHook, act } from '@testing-library/react';
import { useInvestmentCalculator } from '../useInvestmentCalculator';

describe('useInvestmentCalculator', () => {
    it('calculates solutions returns correctly', () => {
        const { result } = renderHook(() => useInvestmentCalculator());

        act(() => {
            result.current.setPrincipal(100000);
            result.current.setRate(0.08);
            result.current.setYears(5);
        });

        expect(result.current.totalReturn).toBeCloseTo(146933, -1);
        expect(result.current.gain).toBeCloseTo(46933, -1);
    });

    it('updates when inputs change', () => {
        const { result } = renderHook(() => useInvestmentCalculator());

        act(() => {
            result.current.setPrincipal(50000);
        });

        expect(result.current.principal).toBe(50000);

        act(() => {
            result.current.setYears(10);
        });

        expect(result.current.years).toBe(10);
    });
});
```

---

## 📊 Pattern 5: Page with Server Components

```typescript
// app/(marketing)/services/gems/page.tsx
export const metadata: Metadata = {
  title: 'Gems & Jewellery Services | Prestige Glamour',
  description: 'Premium gems and jewellery trading services',
}

export default async function GemsPage() {
  const gems = await getGems()

  return (
    <main>
      <GemHero />
      <GemOverview />
      <GemGallery items={gems} />
      <GemsProducts />
      <GemServices />
      <GemsContactForm />
    </main>
  )
}
```

**Test File:**

```typescript
// app/(marketing)/services/gems/__tests__/page.test.tsx
import { render, screen } from '@testing-library/react';
import GemsPage from '../page';

// Mock the data fetching
jest.mock('../../../lib/api', () => ({
    getGems: jest.fn().mockResolvedValue([{ id: '1', name: 'Ruby', price: 50000 }]),
}));

describe('Gems Service Page', () => {
    it('renders page layout', async () => {
        const { container } = render(await GemsPage());

        expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('displays all sections', async () => {
        render(await GemsPage());

        // Check for expected content in sections
        expect(screen.getByText(/gems/i)).toBeInTheDocument();
    });
});
```

---

## 🔑 Key Testing Principles for company-web

1. **Test User Workflows** - Not implementation details
2. **Use Semantic Queries** - getByRole > getByLabelText > getByText
3. **Mock External APIs** - Use MSW for API calls
4. **Accessibility First** - All tests should be a11y-compliant
5. **Real Data** - Use fixtures that mirror production data
6. **No Component Internals** - Test behavior, not state/methods

---

**These patterns are ready to use - just adapt the component names and data!**
