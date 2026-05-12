'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollAnimatorProps {
  children: ReactNode;
  className?: string;
  variant?: 'fade-up' | 'fade-in';
}

export default function ScrollAnimator({
  children,
  className = '',
  variant = 'fade-up',
}: ScrollAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const fadeChildren = entry.target.querySelectorAll('.fade-child');
            fadeChildren.forEach((child, i) => {
              (child as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
              child.classList.add('visible');
            });
            // Unobserve after first intersection — no need to re-trigger
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${variant} ${className}`.trim()}>
      {children}
    </div>
  );
}
