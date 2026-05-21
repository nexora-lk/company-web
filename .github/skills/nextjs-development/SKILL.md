---
name: nextjs-development
description: 'Senior Next.js development workflow for company-web. Use when: building/refactoring components, optimizing SEO and performance, reviewing code quality, setting up pages or layouts, integrating analytics or third-party services, ensuring accessibility and best practices.'
argument-hint: 'Specify task: component build, page setup, SEO optimization, performance audit, code review, or general development guidance'
---

# Next.js Development Workflow

A comprehensive checklist and best practices guide for senior-level Next.js development on the company-web project, covering component architecture, SEO optimization, performance, and code quality.

## When to Use

- **Building components**: Create well-structured, reusable React components
- **Setting up pages**: Configure new pages with proper layouts, routing, and SEO
- **SEO optimization**: Implement meta tags, structured data, sitemaps, robots.txt
- **Performance tuning**: Optimize bundle size, images, API calls, rendering strategies
- **Code review**: Validate component patterns, TypeScript usage, accessibility
- **Analytics integration**: Add tracking with Vercel Analytics or custom solutions
- **Third-party services**: Integrate external APIs, services, or libraries safely

---

## Component Development Checklist

### Structure

- [ ] Use TypeScript with proper type definitions (no `any` types)
- [ ] Place component in appropriate folder: `components/layout/`, `components/sections/`, `components/ui/`, or `components/forms/`
- [ ] Create descriptive, PascalCase filenames (e.g., `ContactForm.tsx`, not `form.tsx`)
- [ ] Export named exports alongside default export for flexibility

### Props & Interfaces

- [ ] Define component props with explicit TypeScript interfaces
- [ ] Use `interface ComponentProps { ... }` pattern
- [ ] Document required vs optional props with clear defaults
- [ ] Avoid prop spreading (`{...props}`) unless intentional; list props explicitly

### Rendering & State

- [ ] Use functional components with hooks exclusively
- [ ] Prefer `useState` and `useCallback` for simple state; `useContext` for cross-cutting concerns
- [ ] Keep components focused on single responsibility
- [ ] Extract complex logic into custom hooks in `/hooks/`

### Styling & Theming

- [ ] Use Tailwind CSS classes consistently
- [ ] Avoid inline styles unless absolutely necessary
- [ ] Group related classes for readability: layout → spacing → colors → effects
- [ ] Define responsive breakpoints using Tailwind's `sm:`, `md:`, `lg:`, `xl:` prefixes

### Accessibility (a11y)

- [ ] Include semantic HTML (`<button>`, `<nav>`, `<article>`, etc.)
- [ ] Add `alt` text to all images
- [ ] Ensure proper heading hierarchy (`h1` → `h2` → `h3`)
- [ ] Include `aria-label` for interactive elements without visible text
- [ ] Test keyboard navigation (Tab, Enter, Escape)
- [ ] Validate color contrast ratios (WCAG AA minimum: 4.5:1)

---

## Page & Layout Setup Checklist

### Page Creation (`app/(marketing)/[section]/page.tsx`)

- [ ] Create TypeScript page component with explicit return type
- [ ] Define metadata using `Metadata` export (Next.js 13+)
- [ ] Implement proper OpenGraph tags for social sharing
- [ ] Add canonical URLs to prevent duplicate content issues
- [ ] Include JSON-LD structured data for rich snippets

### Metadata Example

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page Title | Company Name',
    description: 'Concise page description under 160 characters',
    openGraph: {
        title: 'OG Title',
        description: 'OG Description',
        url: 'https://domain.com/page',
        type: 'website',
        images: [{ url: 'https://domain.com/og-image.jpg' }],
    },
    robots: {
        index: true,
        follow: true,
    },
};
```

### Layout Structure

- [ ] Maintain consistent layout wrapping in `/app/layout.tsx` or section-specific layouts
- [ ] Implement `SmoothScroll` and `PageTransition` components for consistency
- [ ] Include `Navbar` and `Footer` on all marketing pages
- [ ] Use `Reveal` component for scroll-triggered animations

---

## SEO Optimization Checklist

### Core Metadata

- [ ] Every page has unique, descriptive `<title>` (50-60 characters)
- [ ] Meta description is present and unique (150-160 characters)
- [ ] Canonical URLs are correctly set to avoid duplicate content
- [ ] `robots.ts` is configured to allow/block crawling appropriately
- [ ] `sitemap.ts` includes all public pages with priority and changefreq

### Structured Data (JSON-LD)

- [ ] Homepage includes `Organization` schema
- [ ] Product/service pages include appropriate schemas (`Product`, `Service`, `LocalBusiness`)
- [ ] Event pages include `Event` schema with date/time/location
- [ ] Articles/blogs include `Article` schema with author and publication date
- [ ] Use [schema.org](https://schema.org) and [Google's validation tool](https://validator.schema.org/)

### Open Graph (Social Sharing)

- [ ] `og:title`, `og:description`, `og:image` on all pages
- [ ] `og:image` dimensions: 1200×630px recommended
- [ ] `og:type` correctly set (website, article, etc.)
- [ ] Test sharing on [Facebook Debugger](https://developers.facebook.com/tools/debug/) and Twitter

### Image Optimization

- [ ] Use Next.js `<Image>` component instead of `<img>` for automatic optimization
- [ ] Set explicit `width` and `height` to prevent layout shift
- [ ] Implement responsive images with `srcSet` or `sizes`
- [ ] Compress images before upload (WebP format preferred)
- [ ] Use descriptive `alt` text for all images

### Internal Linking

- [ ] Link to related pages naturally within content
- [ ] Use descriptive anchor text (not "click here")
- [ ] Maintain consistent URL structure
- [ ] Implement breadcrumb navigation for hierarchy clarity

---

## Performance Optimization Checklist

### Bundle & Code Splitting

- [ ] Use dynamic imports for large components: `const Component = dynamic(() => import('...'))`
- [ ] Audit bundle size with `npm run build` and check `.next/` output
- [ ] Lazy-load below-the-fold components and sections
- [ ] Tree-shake unused code; verify with tree-shake analysis tools

### Images

- [ ] Use Next.js `<Image>` component for automatic optimization
- [ ] Set explicit dimensions to prevent Cumulative Layout Shift (CLS)
- [ ] Use `priority` prop for above-the-fold images
- [ ] Implement responsive images with `sizes` attribute
- [ ] Compress images to <100KB where possible

### API Routes & Data Fetching

- [ ] Use Server Components by default (no `'use client'` unless needed)
- [ ] Implement incremental static regeneration (ISR) for semi-dynamic pages
- [ ] Cache external API responses appropriately
- [ ] Avoid N+1 queries; batch data fetching
- [ ] Use `next/cache` headers for proper browser caching

### JavaScript Execution

- [ ] Minimize `'use client'` usage; prefer Server Components
- [ ] Defer non-critical third-party scripts (analytics, ads)
- [ ] Use `<script strategy="lazyOnload">` for analytics
- [ ] Remove unused dependencies and polyfills

### Core Web Vitals

- [ ] **LCP** (Largest Contentful Paint): < 2.5s target
    - Optimize hero images, preload critical resources
- [ ] **FID/INP** (Interactivity): < 100ms target
    - Reduce long tasks, defer heavy JS parsing
- [ ] **CLS** (Layout Shift): < 0.1 target
    - Set image dimensions, font-display: swap, avoid animations at load

---

## Code Quality & TypeScript Checklist

### Type Safety

- [ ] No `any` types without explicit justification
- [ ] Use `unknown` for dynamic data; then narrow types
- [ ] Define union types for component variants: `type Variant = 'primary' | 'secondary'`
- [ ] Use `Readonly<T>` for immutable objects
- [ ] Validate external API responses with Zod/Yup before use

### Naming Conventions

- [ ] Components: PascalCase (`CardComponent.tsx`)
- [ ] Utilities/helpers: camelCase (`validateEmail.ts`)
- [ ] Constants: UPPER_SNAKE_CASE (`MAX_ITEMS = 10`)
- [ ] Types/Interfaces: PascalCase (`UserProfile`, `FormData`)
- [ ] Avoid abbreviations; be explicit (`userPreferences` not `userPref`)

### Code Organization

- [ ] Import order: React → Next → third-party → local (separated by blank lines)
- [ ] Group related imports together
- [ ] Use absolute imports from `@` alias where possible
- [ ] Keep files under 300 lines; extract large components

### Testing & Validation

- [ ] Add ESLint checking before commits
- [ ] Validate TypeScript: `tsc --noEmit`
- [ ] Test critical user flows (forms, navigation)
- [ ] Use `console` logs sparingly; remove before commit

---

## Form & Input Handling Checklist

### Form Structure (`components/forms/`)

- [ ] Define form data types with TypeScript interfaces
- [ ] Implement proper error handling and validation
- [ ] Display validation errors near relevant fields
- [ ] Provide clear success/error feedback to users
- [ ] Disable submit button during submission to prevent duplicates

### Accessibility for Forms

- [ ] Associate labels with inputs using `htmlFor` attribute
- [ ] Include `required` and `aria-required` on mandatory fields
- [ ] Use `aria-describedby` to link error messages
- [ ] Provide clear `placeholder` text (not as label substitute)
- [ ] Test with screen readers

### Examples in Project

- [ ] `HomeContactForm.tsx` - Reference for contact form patterns
- [ ] `InvestmentContactForm.tsx` - Reference for multi-field forms

---

## Animation & User Experience Checklist

### Component Integration

- [ ] Use `Reveal.tsx` for scroll-triggered fade-in animations
- [ ] Implement `PageTransition.tsx` for smooth page changes
- [ ] Use `SmoothScroll.tsx` for enhanced scrolling
- [ ] Test animations on low-end devices (reduced-motion preference)

### Performance

- [ ] Prefer CSS/GPU animations over JavaScript animations
- [ ] Use `will-change` sparingly for heavy animations
- [ ] Test with `prefers-reduced-motion` media query
- [ ] Avoid animations that cause layout recalculations

---

## Analytics & Tracking Checklist

### Vercel Analytics

- [ ] Vercel Analytics is configured in `app/layout.tsx`
- [ ] Monitor Core Web Vitals dashboard regularly
- [ ] Set meaningful event names for tracking
- [ ] Avoid tracking sensitive user information

### Custom Events

- [ ] Document tracked events in a central location
- [ ] Use consistent event naming: `event_category_action`
- [ ] Pass relevant data in event payloads
- [ ] Test event firing in browser DevTools

---

## Development Workflow Tips

### Before Pushing Code

```bash
# Run type checking
npm run type-check  # or: tsc --noEmit

# Run linting
npm run lint

# Build check
npm run build

# Test locally
npm run dev  # Visit http://localhost:3000
```

### Browser DevTools

- Use **Lighthouse** for SEO and performance audits
- Check **Network** tab for large assets and slow requests
- Validate **Accessibility** tab for a11y issues
- Use **Core Web Vitals** extension for real-time metrics

### Git Workflow

- Keep commits focused and descriptive
- Reference issue/task numbers in commits
- Test locally before pushing
- Request review from team members

---

## Project Structure Reference

```
app/
├── layout.tsx              # Root layout
├── sitemap.ts              # Dynamic sitemap
├── robots.ts               # Robots.txt config
└── (marketing)/            # Grouped marketing routes
    ├── [section]/page.tsx
    └── layout.tsx

components/
├── layout/                 # Navbar, Footer, etc.
├── sections/               # Large page sections
├── forms/                  # Form components
└── ui/                     # Reusable UI elements

hooks/                      # Custom React hooks
lib/                        # Utilities and helpers
types/                      # TypeScript definitions
data/                       # Static data, config
```

---

## Useful Commands

```bash
npm run dev              # Start dev server
npm run build            # Production build
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript check
npm run lint:fix         # Auto-fix linting issues
```

---

## Quick Decision Guide

| Scenario                 | Action                                                |
| ------------------------ | ----------------------------------------------------- |
| Building a new component | Follow Component Development Checklist                |
| Creating a new page      | Follow Page & Layout Setup + SEO Checklist            |
| Optimizing SEO           | Use SEO Optimization Checklist + test with Lighthouse |
| Performance issues       | Run Lighthouse audit, follow Performance Checklist    |
| Code review              | Check Code Quality + Accessibility sections           |
| Adding tracking          | Follow Analytics & Tracking Checklist                 |

---

## References & Resources

- [Next.js Docs](https://nextjs.org/docs)
- [SEO Best Practices](https://developers.google.com/search)
- [Web Vitals](https://web.dev/vitals/)
- [WCAG Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
