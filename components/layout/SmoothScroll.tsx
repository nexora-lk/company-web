"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

/**
 * Lenis ↔ GSAP smooth-scroll provider.
 *
 * Architecture
 * ────────────
 * 1. Lenis runs with `autoRaf: false` so it never spins its own rAF loop.
 * 2. We attach `lenis.raf()` to `gsap.ticker` — one shared loop, zero jitter.
 * 3. On every Lenis scroll event we call `ScrollTrigger.update()` so triggers
 *    stay perfectly in sync with the virtualised scroll position.
 * 4. `gsap.ticker.lagSmoothing(0)` prevents frame skips when the tab regains
 *    focus after being backgrounded.
 *
 * The instance is exposed via React context so any component can call
 * `useLenis().scrollTo(target)` for programmatic scrolling.
 *
 * `prefers-reduced-motion` → Lenis is not initialised; the browser's native
 * scroll is left untouched.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LenisCtx = createContext<any>(null);

/** Access the Lenis instance from any client component. */
export function useLenis() {
  return useContext(LenisCtx);
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Bail out when the user prefers no motion — leave native scroll.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        autoRaf: false,
        lerp: 0.04,          // Extremely low lerp for maximum gliding smoothness
        smoothWheel: true,
        wheelMultiplier: 0.9, // Slightly heavier scroll feel 
        touchMultiplier: 2,
        syncTouch: true,     // Syncs touch and scroll logic
      });

      lenisRef.current = lenis;

      // ── Single RAF loop ──────────────────────────────────────────
      const onTick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      // ── Sync ScrollTrigger on every virtual scroll ───────────────
      lenis.on("scroll", ScrollTrigger.update);

      // Mark <html> so CSS can adapt.
      document.documentElement.classList.add("lenis", "lenis-smooth");

      // Initial refresh after layout settles.
      requestAnimationFrame(() => ScrollTrigger.refresh());

      cleanup = () => {
        gsap.ticker.remove(onTick);
        lenis.destroy();
        lenisRef.current = null;
        document.documentElement.classList.remove("lenis", "lenis-smooth");
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [pathname]);

  // Scroll to top on route change.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <LenisCtx.Provider value={lenisRef}>{children}</LenisCtx.Provider>;
}
