---
name: ui-ux-engineer
description: 'UI/UX engineering for company-web. Use when: designing component layouts, improving user experience, creating interactive patterns, responsive design, microinteractions, visual hierarchy, user testing, design systems, accessibility audits, and conversion optimization.'
argument-hint: 'Specify focus: layout design, microinteraction, responsive design, accessibility, design system, or UX optimization'
---

# UI/UX Engineering

Professional UI/UX design and implementation workflow for company-web, emphasizing user-centered design, accessibility, performance, and conversion optimization.

## When to Use

- **Component layout design**: Structure, spacing, visual hierarchy
- **Microinteractions**: Hover states, loading indicators, feedback animations
- **Responsive design**: Mobile-first approach, breakpoint strategy
- **Accessibility audits**: WCAG compliance, color contrast, keyboard navigation
- **Design system development**: Component consistency, token management
- **User experience optimization**: Conversion funnels, interaction patterns
- **Visual refinement**: Typography, color harmony, spacing consistency
- **User research**: Testing patterns, feedback loops, iteration

---

## Core Design Principles

### 1. User-Centered Design (UCD)

- **Research first**: Understand user needs before designing
- **Empathy mapping**: Document user pain points and goals
- **User personas**: Create representative user archetypes
- **User stories**: Define features from user perspective ("As a user, I want...")
- **Validate assumptions**: Test designs with real users early and often

### 2. Visual Hierarchy

Goal: Guide users' attention to most important elements

- [ ] **Size**: Larger elements attract attention first
- [ ] **Color**: Bright/contrasting colors stand out
- [ ] **Contrast**: High contrast = important; low contrast = secondary
- [ ] **Whitespace**: Breathing room emphasizes grouped elements
- [ ] **Typography**: Larger fonts, bold weights for headings
- [ ] **Position**: Top-left and center are naturally first (reading pattern)

### 3. Consistency & Recognition

- [ ] All buttons follow same styling pattern
- [ ] Icons are consistent in style and size
- [ ] Color usage is predictable (same color = same action type)
- [ ] Spacing follows a consistent grid system
- [ ] Typography hierarchy is uniform across pages

### 4. Feedback & Response

- [ ] Every interaction provides immediate visual feedback
- [ ] Loading states show progress or skeleton screens
- [ ] Errors are clear and suggest solutions
- [ ] Success states confirm completed actions
- [ ] Hover/focus states clearly indicate interactivity

---

## Design System & Component Architecture

### Component Anatomy

Every reusable component should have:

```
Component Name
├── Visual Appearance (default, hover, active, disabled)
├── Props/Options (variants, sizes)
├── Accessibility Features (ARIA, keyboard)
├── Responsive Behavior (mobile → tablet → desktop)
└── Interaction States (loading, error, success)
```

### Tailwind CSS Design Tokens

Establish consistent spacing, colors, and typography:

```typescript
// tailwind.config.ts
export default {
    theme: {
        extend: {
            spacing: {
                '4': '1rem', // 16px
                '6': '1.5rem', // 24px
                '8': '2rem', // 32px
            },
            colors: {
                primary: '#0066FF',
                secondary: '#6B7280',
                success: '#10B981',
                error: '#EF4444',
            },
            typography: {
                'heading-1': '32px bold',
                'heading-2': '24px bold',
                body: '16px regular',
            },
        },
    },
};
```

### Component Naming Convention

```
Button.tsx          # Primary button component
Button.variants.tsx # Variant definitions (primary, secondary, etc.)
Button.test.tsx     # Tests
```

---

## Layout & Spacing

### Grid System (8px Base)

Use multiples of 8px for consistency:

- **4px** (minor adjustments)
- **8px** (minimum padding)
- **16px** (standard padding)
- **24px** (section spacing)
- **32px** (major section breaks)
- **48px+** (hero sections)

### Container & Breakpoints

```typescript
// Responsive breakpoints (mobile-first)
sm: 640px   // Tablets
md: 768px   // Small laptops
lg: 1024px  // Desktops
xl: 1280px  // Large screens

// Example: responsive container width
className="w-full md:max-w-2xl lg:max-w-4xl"
```

### Whitespace Strategy

- **Micro spacing** (4-8px): Between inline elements, icon + text
- **Small spacing** (16px): Between grouped elements
- **Medium spacing** (24-32px): Between sections
- **Large spacing** (48px+): Between major page sections

### Visual Hierarchy Example

```
Hero Section
  Title: 48px, weight 700, top margin 0
  Subtitle: 24px, weight 400, margin-top 16px
  CTA Button: 16px, padding 12px 24px, margin-top 32px

Content Section
  Heading: 32px, weight 600, margin-bottom 24px
  Paragraph: 16px, weight 400, line-height 1.6, margin-bottom 16px
  Subtext: 14px, weight 400, color secondary
```

---

## Color & Contrast

### Color Palette Strategy

**Primary**: Main brand action color (CTAs, highlights)
**Secondary**: Supporting color (borders, backgrounds)
**Neutral**: Grays for text, backgrounds, borders
**Semantic**: Success (green), Error (red), Warning (yellow), Info (blue)

### Contrast Compliance (WCAG)

| Element               | AA Standard | AAA Standard |
| --------------------- | ----------- | ------------ |
| Normal text           | 4.5:1       | 7:1          |
| Large text (18px+)    | 3:1         | 4.5:1        |
| UI components/borders | 3:1         | -            |

**Tool**: Use WebAIM Contrast Checker or Chrome DevTools

```css
/* Example: Compliant color pairs */
.text-primary {
    color: #000000; /* Black text */
    background: #ffffff; /* White background */
    /* Contrast ratio: 21:1 ✓ */
}

.text-secondary {
    color: #4b5563; /* Dark gray text */
    background: #ffffff; /* White background */
    /* Contrast ratio: 6.5:1 ✓ */
}
```

### Dark Mode Considerations

- [ ] Invert color logic for dark backgrounds
- [ ] Increase contrast for readability
- [ ] Use `@media (prefers-color-scheme: dark)` in CSS
- [ ] Test both light and dark modes

---

## Typography

### Font Hierarchy

```
H1: 32-48px, weight 700 (bold), line-height 1.2
H2: 24-32px, weight 600 (semibold), line-height 1.3
H3: 18-24px, weight 600, line-height 1.4
Body: 16px, weight 400, line-height 1.6
Small: 12-14px, weight 400, line-height 1.5
```

### Best Practices

- [ ] **Line length**: 50-75 characters per line for readability
- [ ] **Line height**: 1.5-1.8x font size (1.6 for body text)
- [ ] **Font pairing**: Max 2-3 typefaces (heading + body)
- [ ] **Weight variety**: Use 400 (regular) and 600+ (semibold) only
- [ ] **Avoid**: All caps for body text, pure black (#000) text
- [ ] **Color**: Use `#1F2937` (dark gray) instead of pure black

### Implementation

```tsx
export function Heading({ children, level = 1 }: HeadingProps) {
    const sizes = {
        1: 'text-4xl font-bold leading-tight',
        2: 'text-3xl font-semibold leading-snug',
        3: 'text-2xl font-semibold leading-snug',
    };

    const Tag = `h${level}` as const;
    return <Tag className={sizes[level]}>{children}</Tag>;
}
```

---

## Microinteractions & Feedback

### Button States Checklist

- [ ] **Default**: Normal state, clear CTA text
- [ ] **Hover**: Slight color shift, subtle shadow increase
- [ ] **Active/Pressed**: Darker color, inset shadow, immediate feedback
- [ ] **Focus**: Clear focus ring (2-3px outline) for keyboard users
- [ ] **Disabled**: Gray, reduced opacity (50-60%), no cursor
- [ ] **Loading**: Spinner icon, disabled state, clear feedback

### Example: Button State Transitions

```tsx
<button
    className={`
    px-6 py-3 rounded-lg font-semibold transition-all duration-200
    ${
        isLoading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
    }
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  `}
    disabled={isLoading}
>
    {isLoading ? 'Loading...' : 'Submit'}
</button>
```

### Loading States

- [ ] **Skeleton screen**: Show content structure while loading
- [ ] **Spinner**: Centered loader for small operations
- [ ] **Progress bar**: Show progress for long operations
- [ ] **Placeholder**: Gray background for image placeholders

### Error & Success Feedback

```tsx
<div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
    <AlertIcon className="text-red-600" />
    <div>
        <p className="font-semibold text-red-900">Error</p>
        <p className="text-red-800 text-sm">Please fill in all required fields</p>
    </div>
</div>
```

---

## Responsive Design

### Mobile-First Approach

Design for smallest screen first, then enhance for larger screens

```tsx
// Mobile (default): full width, stacked
// Tablet (md): 2-column grid
// Desktop (lg): 3-column grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((item) => (
        <Card key={item.id} {...item} />
    ))}
</div>
```

### Responsive Images

```tsx
<Image
    src="/image.jpg"
    alt="Description"
    width={1200}
    height={800}
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    className="w-full h-auto"
/>
```

### Viewport Optimization

- [ ] Set viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1" />`
- [ ] Test on actual mobile devices, not just browser emulation
- [ ] Ensure touch targets are minimum 48x48px (tap-friendly)
- [ ] Avoid horizontal scroll on mobile
- [ ] Test landscape orientation

---

## Accessibility (a11y) Audit Checklist

### Visual Accessibility

- [ ] **Color contrast**: Minimum 4.5:1 for text, 3:1 for UI components (WCAG AA)
- [ ] **Icon clarity**: Icons are recognizable, not just decorative
- [ ] **Text alternatives**: `alt` text for all images, transcripts for videos
- [ ] **No color alone**: Don't convey information with color only (use icons/text)

### Keyboard Navigation

- [ ] **Tab order**: Logical tab sequence (left→right, top→bottom)
- [ ] **Focus visible**: Clear focus indicator on all interactive elements
- [ ] **Keyboard shortcuts**: Standard shortcuts (Enter, Escape, Spacebar)
- [ ] **Skip links**: Allow users to skip to main content

```tsx
// Focus ring example
<button className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
    Action
</button>
```

### Screen Reader Compatibility

- [ ] **Semantic HTML**: Use `<button>`, `<nav>`, `<article>` instead of `<div>` + styling
- [ ] **ARIA labels**: Add `aria-label` for icon-only buttons
- [ ] **Form labels**: Associate `<label>` with `<input>` using `htmlFor`
- [ ] **Live regions**: Use `aria-live="polite"` for dynamic content updates
- [ ] **Heading hierarchy**: Only one `<h1>` per page, proper `h1 → h2 → h3` nesting

### Motion & Animation

- [ ] **Respect preference**: Check `prefers-reduced-motion`
- [ ] **Pause option**: Provide pause/play controls for auto-playing content
- [ ] **No flashing**: Avoid flashing content (no >3 flashes per second)

```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const animationClass = prefersReducedMotion ? 'transition-none' : 'transition-all duration-300';
```

---

## Design System Best Practices

### Component Variants Pattern

```typescript
// Card.tsx - Flexible card component
export interface CardProps {
  variant?: 'elevated' | 'outlined' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Card({
  variant = 'elevated',
  size = 'md',
  children
}: CardProps) {
  const variants = {
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-transparent border border-gray-300',
    filled: 'bg-gray-100',
  };

  const sizes = {
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={`rounded-lg ${variants[variant]} ${sizes[size]}`}>
      {children}
    </div>
  );
}
```

### Documentation Template

For each component, document:

1. **Purpose**: What the component does
2. **Props**: Required and optional properties
3. **Variants**: Available variations (size, color, state)
4. **Usage**: Code examples
5. **Accessibility**: ARIA requirements, keyboard support
6. **Don'ts**: Common misuses

---

## User Testing & Validation

### Usability Testing Checklist

- [ ] **Task-based testing**: Users perform realistic tasks
- [ ] **Think aloud protocol**: Record user thoughts during interaction
- [ ] **Measure success**: Task completion rate, time to completion, error rate
- [ ] **Collect feedback**: Post-test interviews, System Usability Scale (SUS)
- [ ] **Sample size**: 5 users minimum; 8-10 for comprehensive testing

### A/B Testing

```typescript
// Example: Test two CTA button variants
const buttonVariant = userId % 2 === 0 ? 'blue' : 'green';

<button className={buttonVariant === 'blue' ? 'bg-blue-600' : 'bg-green-600'}>
  {buttonVariant === 'blue' ? 'Buy Now' : 'Get Started'}
</button>
```

### Analytics for UX

- [ ] **Click heatmaps**: Where users click most
- [ ] **Scroll depth**: How far users scroll
- [ ] **Form abandonment**: Where users drop off
- [ ] **Conversion funnel**: Track user journey to conversion
- [ ] **Time on page**: Engagement metric

---

## Conversion Optimization Checklist

### Landing Page Optimization

- [ ] **Clear value proposition**: Communicate benefit in headline (< 8 words)
- [ ] **Social proof**: Testimonials, reviews, user count
- [ ] **Trust signals**: Certifications, guarantees, security badges
- [ ] **Single CTA**: One primary call-to-action per page
- [ ] **Mobile-optimized**: Fast load, touch-friendly, vertical flow

### Friction Reduction

- [ ] **Form fields**: Minimum required fields only
- [ ] **Auto-fill**: Support browser autofill for common fields
- [ ] **Error prevention**: Real-time validation, helpful error messages
- [ ] **Progress indication**: Show form progress (step 1 of 3)
- [ ] **Exit intent**: Capture abandoning users with offers

### Visual CTA Best Practices

- [ ] **Color contrast**: CTA button stands out from background
- [ ] **Size**: Larger than secondary buttons
- [ ] **Proximity**: Close to relevant content
- [ ] **Whitespace**: Isolated from other elements
- [ ] **Action-oriented text**: "Get Started" not "Submit"

---

## Tools & Resources

### Design & Prototyping

- [Figma](https://figma.com) - Collaborative design tool
- [Adobe XD](https://www.adobe.com/products/xd/) - UX/UI design platform

### Accessibility Testing

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Axe DevTools](https://www.deque.com/axe/devtools/)

### User Research

- [UserTesting](https://www.usertesting.com/) - Remote user testing
- [Maze](https://maze.co/) - Design testing platform
- [Google Forms](https://forms.google.com/) - Quick surveys

### Analytics

- [Google Analytics](https://analytics.google.com)
- [Hotjar](https://www.hotjar.com/) - Heatmaps and recordings
- [Vercel Analytics](https://vercel.com/analytics) - Core Web Vitals

---

## Quick Decision Guide

| Scenario                     | Action                                                   |
| ---------------------------- | -------------------------------------------------------- |
| Component looks inconsistent | Check design system tokens (spacing, color, typography)  |
| Users missing CTAs           | Increase contrast, whitespace, and button prominence     |
| High form abandonment        | Reduce fields, add inline validation, show progress      |
| Slow interaction feedback    | Add loading state, skeleton, or disabled button          |
| Accessibility audit failing  | Test color contrast, keyboard nav, and heading hierarchy |
| Mobile users confused        | Test on actual device, increase touch target size        |
| Design inconsistency         | Create component variants, document in design system     |
