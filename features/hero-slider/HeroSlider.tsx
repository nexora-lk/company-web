"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Premium GSAP-powered hero image slider.
 *
 * Design cues
 * ───────────
 * - Crossfade + subtle scale (Ken-Burns-lite) between slides
 * - Slide counter with animated progress bar
 * - Dot navigation and prev/next arrows in project style
 * - Auto-advances every 5 seconds, pauses on hover
 * - GPU-composited (transform + opacity only)
 * - Reduced-motion: no animation, instant cut
 */

interface SlideData {
  src: string;
  alt: string;
}

const SLIDES: SlideData[] = [
  { src: "/AdobeStock_354558240.jpeg", alt: "Sri Lankan tea plantations in the highlands" },
  { src: "/AdobeStock_1571388343.jpeg", alt: "Luxury infinity pool resort overlooking mountains" },
  { src: "/AdobeStock_338748057.jpeg", alt: "Hand sorting gemstones in a traditional basket" },
  { src: "/AdobeStock_466188059.jpeg", alt: "Blue sapphire held in precision tweezers" },
  { src: "/AdobeStock_1989389188.jpeg", alt: "Investment growth — seedling on coins" },
  { src: "/AdobeStock_581417783.jpeg", alt: "Micro-finance currency exchange" },
  { src: "/AdobeStock_340980819.jpeg", alt: "Retail and commerce operations" },
];

const INTERVAL = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gsapRef = useRef<any>(null);

  // Load GSAP once
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      gsapRef.current = gsap;
      setIsReady(true);
    })();
    return () => { cancelled = true; };
  }, []);

  // Auto-advance timer
  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
      }
    }, INTERVAL);
  }, []);

  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [startAuto]);

  // GSAP crossfade animation on slide change
  useEffect(() => {
    const gsap = gsapRef.current;
    const container = containerRef.current;
    if (!gsap || !container) return;

    const slides = container.querySelectorAll<HTMLElement>(".hero-slide");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    slides.forEach((slide, i) => {
      if (i === current) {
        // Active slide — fade in with subtle scale
        gsap.killTweensOf(slide);
        gsap.set(slide, { zIndex: 2, visibility: "visible" });
        if (prefersReduced) {
          gsap.set(slide, { opacity: 1, scale: 1 });
        } else {
          gsap.fromTo(
            slide,
            { opacity: 0, scale: 1.08 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
            },
          );
        }
      } else {
        // Inactive slides — fade out
        gsap.killTweensOf(slide);
        if (prefersReduced) {
          gsap.set(slide, { opacity: 0, zIndex: 1, visibility: "hidden" });
        } else {
          gsap.to(slide, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(slide, { zIndex: 1, visibility: "hidden" });
            },
          });
        }
      }
    });
  }, [current, isReady]);

  const goTo = useCallback(
    (idx: number) => {
      setCurrent(idx);
      startAuto(); // Reset timer on manual navigation
    },
    [startAuto],
  );

  const goPrev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  const goNext = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  return (
    <div
      ref={containerRef}
      className="hero-slider group relative w-full h-full rounded-[18px] overflow-hidden"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      {/* ── Slides ─────────────────────────────────────────────── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="hero-slide absolute inset-0"
          style={{
            opacity: i === 0 ? 1 : 0,
            zIndex: i === 0 ? 2 : 1,
            visibility: i === 0 ? "visible" : "hidden",
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* ── Gradient overlay for readability ────────────────────── */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />

      {/* ── Bottom controls ─────────────────────────────────────── */}
      <div className="absolute bottom-0 inset-x-0 z-[4] p-4 flex items-end justify-between">
        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`relative w-2 h-2 rounded-full transition-all duration-500 ${
                i === current
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            >
              {/* Progress bar fill on active dot */}
              {i === current && (
                <span
                  className="absolute inset-0 rounded-full bg-white origin-left hero-progress"
                  style={{ animationDuration: `${INTERVAL}ms` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Slide counter + arrows */}
        <div className="flex items-center gap-2">
          <span className="num text-white/80 text-[11px] tabular-nums mr-1">
            {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="w-8 h-8 rounded-full border border-white/30 backdrop-blur-sm bg-white/10 flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="w-8 h-8 rounded-full border border-white/30 backdrop-blur-sm bg-white/10 flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
