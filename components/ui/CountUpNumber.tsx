'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface CountUpNumberProps {
  target: string;
  className?: string;
}

export default function CountUpNumber({ target, className = '' }: CountUpNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState('0');
  const counted = useRef(false);
  const rafId = useRef<number>(0);

  const animateCount = useCallback(() => {
    const numStr = target.replace(/[^0-9.]/g, '');
    const num = parseFloat(numStr);

    if (isNaN(num)) {
      setDisplay(target);
      return;
    }

    const duration = 2000;
    const start = performance.now();
    const prefix = target.match(/^[^0-9]*/)?.[0] || '';
    const suffix = target.match(/[^0-9]*$/)?.[0] || '';

    function update(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      const current = Math.floor(num * eased);

      let d = prefix;
      d += current >= 1000 ? current.toLocaleString() : String(current);
      d += suffix;
      setDisplay(d);

      if (progress < 1) {
        rafId.current = requestAnimationFrame(update);
      } else {
        setDisplay(target);
      }
    }

    rafId.current = requestAnimationFrame(update);
  }, [target]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted.current) {
            counted.current = true;
            observer.unobserve(entry.target); // free resources after triggering
            animateCount();
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      // Cancel any pending animation frame on unmount
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [animateCount]);

  return (
    <div ref={ref} className={className} data-count={target}>
      {display}
    </div>
  );
}
