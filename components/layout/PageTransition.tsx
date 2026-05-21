"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Page transition wrapper. Fades the page out on route change, then fades the
 * new page in. Uses GSAP for GPU-composited `opacity` + slight `y` shift.
 *
 * Because Next.js App Router streams the new route into the same layout tree
 * we detect the change via `usePathname` and run a quick fade-in on each mount.
 */

export default function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const initial = useRef(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;

      if (initial.current) {
        // First paint: fade in from nothing.
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 12 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: 0.05,
            clearProps: "willChange",
          },
        );
        initial.current = false;
      } else {
        // Subsequent navigations: quick fade-in.
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 8 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "willChange",
          },
        );
      }

      cleanup = () => {
        gsap.killTweensOf(el);
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [pathname]);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
