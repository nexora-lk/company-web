---
name: gsap-animation
description: 'GSAP animation engine for advanced web animations. Use when: creating timeline animations, scroll-triggered effects, complex motion sequences, morphing effects, parallax scrolling, interactive animations, performance-optimized animations, and scroll-sync animations.'
argument-hint: 'Specify animation type: scroll trigger, timeline, morph, parallax, interactive, or performance optimization'
---

# GSAP Animation Engine

Professional-grade animation framework for company-web, leveraging GreenSock Animation Platform for high-performance, smooth animations with advanced timing controls.

## When to Use

- **Scroll-triggered animations**: Reveal elements on scroll, parallax effects, progress bars
- **Timeline animations**: Complex, coordinated multi-element sequences
- **Morphing effects**: SVG morphing, shape transformations
- **Parallax scrolling**: Depth and motion effects based on scroll position
- **Interactive animations**: Hover effects, click-triggered sequences, user feedback
- **Performance optimization**: GPU-accelerated animations, efficient re-renders
- **Staggered animations**: Cascading animations with timing offsets

---

## GSAP Core Concepts

### Installation & Setup

```bash
npm install gsap
```

### Key Libraries

- **`gsap`**: Core animation engine with tweens and timelines
- **`ScrollTrigger`**: Scroll-position-based animations
- **`Draggable`**: Interactive drag animations
- **`Flip`**: Position-based animation transitions

### Registration

```typescript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

---

## Animation Patterns

### Basic Tween (Simple Animation)

```typescript
// Animate a single property
gsap.to('.element', {
    duration: 1,
    opacity: 1,
    x: 100, // translate X
    ease: 'power2.inOut',
});

// From a starting state
gsap.from('.element', {
    duration: 0.8,
    opacity: 0,
    y: 50,
});

// Animate from current to target and back
gsap.fromTo('.element', { opacity: 0 }, { duration: 1, opacity: 1 });
```

### Staggered Animations (Multiple Elements)

```typescript
// Animate list items with delay between each
gsap.to('.list-item', {
    duration: 0.6,
    opacity: 1,
    y: 0,
    stagger: 0.1, // 100ms delay between items
    ease: 'back.out',
});

// Or: gsap.to('.list-item', {..., stagger: { amount: 0.5 }})
// Or: gsap.to('.list-item', {..., stagger: { grid: [4, 3], from: 'center' }})
```

### Timeline (Coordinated Sequence)

```typescript
const tl = gsap.timeline();

tl.to('.hero-title', { duration: 0.6, opacity: 1, y: -20 }, 0) // Start at time 0
    .to('.hero-subtitle', { duration: 0.6, opacity: 1, y: -10 }, 0.2) // Start at 0.2s
    .to('.cta-button', { duration: 0.4, opacity: 1, scale: 1 }, 0.4)
    .to('.background', { duration: 1, filter: 'blur(0px)' }, 0); // Parallel with others
```

### ScrollTrigger (Scroll-Based Animations)

```typescript
gsap.to('.box', {
    scrollTrigger: {
        trigger: '.box', // Element that triggers animation
        start: 'top center', // When animation starts
        end: 'bottom center', // When animation ends
        scrub: 1, // Linked to scrollbar (1 = 1 second smoothing)
        markers: false, // Debug markers
        onEnter: () => console.log('Entered'),
        onLeave: () => console.log('Left'),
    },
    rotation: 360,
    opacity: 1,
    duration: 1,
});
```

### Parallax Scrolling

```typescript
// Different elements move at different speeds
gsap.to('.layer-1', {
    scrollTrigger: {
        trigger: '.parallax-container',
        scrub: true,
    },
    y: -100,
    duration: 1,
});

gsap.to('.layer-2', {
    scrollTrigger: {
        trigger: '.parallax-container',
        scrub: true,
    },
    y: -50, // Slower movement = closer to viewer
    duration: 1,
});
```

### SVG Morphing

```typescript
gsap.to('#morph-target', {
    duration: 1,
    attr: {
        d: newPathData, // Morphs to new SVG path
    },
    ease: 'power1.inOut',
});
```

### Interactive Animation (Hover/Click)

```typescript
const element = document.querySelector('.interactive-element');

element.addEventListener('mouseenter', () => {
    gsap.to(element, {
        duration: 0.3,
        scale: 1.05,
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    });
});

element.addEventListener('mouseleave', () => {
    gsap.to(element, {
        duration: 0.3,
        scale: 1,
        boxShadow: '0 0 0 rgba(0,0,0,0)',
    });
});
```

---

## React Integration

### useEffect Hook Pattern

```typescript
'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSection() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.animated-box', {
        duration: 1,
        opacity: 1,
        y: -20,
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return <div className="animated-box">Content</div>;
}
```

### Custom Hook for Reusability

```typescript
// hooks/useGsapAnimation.ts
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useGsapAnimation(selector: string, animationConfig: gsap.TweenConfig) {
    const contextRef = useRef<gsap.Context | null>(null);

    useEffect(() => {
        contextRef.current = gsap.context(() => {
            gsap.to(selector, animationConfig);
        });

        return () => contextRef.current?.revert();
    }, [selector, animationConfig]);
}
```

### Reveal Component Integration

```typescript
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function RevealOnScroll({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay,
    });
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
```

---

## Easing Functions

### Common Easing Curves

| Ease                           | Use Case                          |
| ------------------------------ | --------------------------------- |
| `'none'`                       | Linear motion, no acceleration    |
| `'power1.in'` / `'power1.out'` | Subtle easing                     |
| `'power2.inOut'`               | General UI animations             |
| `'power3.out'`                 | Entrance animations (bounce-like) |
| `'power4.inOut'`               | Heavy, impactful transitions      |
| `'back.out'`                   | Overshoot effect (spring-like)    |
| `'elastic.out'`                | Bouncy, playful animations        |
| `'bounce.out'`                 | Ball bounce effect                |

```typescript
// Example with multiple eases
gsap.to('.element', {
    duration: 1,
    x: 100,
    ease: 'power2.inOut', // Use for consistent feel
});
```

---

## Performance Optimization Checklist

### Memory Management

- [ ] Use `gsap.context()` to group and cleanup animations
- [ ] Call `.kill()` on animations before unmounting components
- [ ] Avoid creating new timelines on every render
- [ ] Use `useRef` to persist animation objects across re-renders

### GPU Acceleration

- [ ] Animate transforms (x, y, rotation, scale) instead of position properties
- [ ] Use `will-change: transform` in CSS for animated elements
- [ ] Avoid animating `width`, `height`, or `position` (causes reflow)
- [ ] Batch animations into timelines to reduce JavaScript overhead

### ScrollTrigger Optimization

- [ ] Set `scrub: true` (direct link to scroll) sparingly—use for critical animations
- [ ] Use `scrub: 1` (smoothed scroll) for performance-sensitive animations
- [ ] Limit ScrollTrigger instances; consolidate multiple triggers if possible
- [ ] Use `once: true` to disable animation refresh after first trigger

### Example: Optimized ScrollTrigger

```typescript
gsap.to('.parallax-layer', {
    scrollTrigger: {
        trigger: '.section',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1, // Smooth, not direct link
        once: false, // Animates each time in view
    },
    y: -100,
    duration: 1,
});
```

---

## Debugging & Testing

### Debug Mode

```typescript
gsap.to('.element', {
    duration: 1,
    opacity: 1,
    onComplete: () => console.log('Animation complete'),
    onUpdate: () => console.log('Animation progress:', this.progress()),
});
```

### ScrollTrigger Debug Markers

```typescript
gsap.to('.element', {
    scrollTrigger: {
        trigger: '.element',
        markers: true, // Show start/end markers
        start: 'top center',
        end: 'bottom center',
    },
    rotation: 360,
});
```

### Browser DevTools

- **Slow Motion**: Chrome DevTools → Animations → Slow down playback (0.1x)
- **Paint Flashing**: Toggle paint flashing to detect layout thrashing
- **Performance Monitor**: Check FPS during animations

---

## Animation Patterns for Company-Web

### Hero Section Timeline

```typescript
const heroTl = gsap.timeline();

heroTl
    .from('.hero-title', { opacity: 0, y: 30, duration: 0.8 })
    .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from('.cta-button', { opacity: 0, scale: 0.9, duration: 0.5 }, '-=0.3');
```

### Staggered Card Grid

```typescript
gsap.to('.card', {
    duration: 0.6,
    opacity: 1,
    y: 0,
    stagger: {
        grid: [3, 3], // 3 columns, 3 rows
        from: 'start', // or 'center', 'edges', 'random'
        amount: 0.5, // Total stagger time
    },
});
```

### Marquee/Scrolling Text

```typescript
gsap.to('.marquee-content', {
    duration: 20,
    x: -500,
    repeat: -1, // Loop infinitely
    ease: 'none',
});
```

### Page Transition

```typescript
const pageTransition = gsap.timeline();

pageTransition
    .to('.page-wrapper', { opacity: 0, duration: 0.3 })
    .to('.page-wrapper', { opacity: 1, duration: 0.3 }, 0.3);
```

---

## Best Practices

### Organization

- [ ] Group related animations into timelines
- [ ] Use descriptive variable names: `heroTimeline`, `scrollReveal`
- [ ] Store animation configurations in constants or helper functions
- [ ] Separate animation logic from component logic

### Accessibility

- [ ] Respect `prefers-reduced-motion` media query

```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    gsap.to('.element', { duration: 1, opacity: 1 });
}
```

- [ ] Provide fallback animations for users with accessibility needs
- [ ] Avoid animations that flash or cause seizures

### Browser Compatibility

- [ ] GSAP supports all modern browsers (IE11+ with polyfills)
- [ ] Test animations on low-end devices
- [ ] Use `will-change` with caution (can hurt performance if overused)

### Code Quality

- [ ] Validate easing functions and duration values
- [ ] Test animation timing on various devices
- [ ] Keep animation duration between 0.3s–2s for optimal UX
- [ ] Avoid simultaneous animations on same element (kill previous first)

---

## Useful Resources

- [GSAP Official Docs](https://gsap.com/docs/)
- [ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [GSAP Codepen Examples](https://codepen.io/search/pens?q=gsap)
- [Web.dev Animation Performance](https://web.dev/animations-guide/)

---

## Quick Decision Guide

| Scenario                    | Solution                                            |
| --------------------------- | --------------------------------------------------- |
| Simple fade-in on load      | `gsap.to()` with opacity                            |
| Reveal on scroll            | `ScrollTrigger` with `gsap.from()`                  |
| Complex 5+ step sequence    | Timeline with `.to()` and `.from()`                 |
| Parallax background         | Multiple `ScrollTrigger` with different `y` values  |
| Hover effect                | Event listeners with `gsap.to()`                    |
| Multiple elements cascading | Stagger with grid or array                          |
| SVG path animation          | Morphing with `attr` property                       |
| Performance critical        | Animate transforms, use `scrub: 1`, not direct link |
