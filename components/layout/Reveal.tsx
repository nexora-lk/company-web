"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Premium scroll-reveal driver — GSAP + ScrollTrigger.
 *
 * ┌──────────────────────────────────────────────────────────────────┐
 * │  WHAT IT DOES                                                   │
 * ├──────────────────────────────────────────────────────────────────┤
 * │  1. Fade-up reveal   — every heading, paragraph, card, image    │
 * │  2. Clip-path wipe   — gallery photos wipe-up into view         │
 * │  3. Hero choreography — hero h1 lines stagger in with blur      │
 * │  4. Parallax images   — hero + portfolio images float on scroll  │
 * │  5. Value card cascade — 6 values stagger in row by row          │
 * │  6. Stats entrance    — numbers scale-up from zero               │
 * │  7. CTA section pop   — investment CTA slides from bottom        │
 * └──────────────────────────────────────────────────────────────────┘
 *
 * Everything is scoped in `gsap.context` and reverted on route change.
 * Honours `prefers-reduced-motion`.
 */

/* ── Selectors ─────────────────────────────────────────────────────── */

// General fade-up candidates
const FADE_UP_SELECTOR = [
  "section h1",
  "section h2",
  "section h3",
  "section > div > div > p",
  "section .text-mute",
  ".svc-card",
  ".team-card",
  ".dir-card",
  ".model-card",
  ".bank-card",
  ".info-card",
  ".portrait",
  ".btn",
  ".pill",
  ".eyebrow",
  ".num",
  ".branch",
  "section form",
  "section label",
  "footer > div > div > div",
].join(", ");

// Gallery / photo tiles — clip-path wipe
const CLIP_SELECTOR = ".gal, .ph";

// Parallax images
const PARALLAX_SELECTOR =
  "section:first-child figure img, .svc-card > img, .split-img figure img";

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      // Show everything immediately — no animation at all.
      document
        .querySelectorAll<HTMLElement>(FADE_UP_SELECTOR)
        .forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      document
        .querySelectorAll<HTMLElement>(CLIP_SELECTOR)
        .forEach((el) => {
          el.style.clipPath = "none";
        });
      return;
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      gsap.config({ force3D: true });

      const ctx = gsap.context(() => {
        /* ─────────────────────────────────────────────────────────
         * 1. HERO CHOREOGRAPHY
         * ───────────────────────────────────────────────────────── */
        const heroH1 = document.querySelector<HTMLElement>("section:first-child h1");
        if (heroH1) {
          // Wrap each line in a span for individual animation
          const lines = heroH1.innerHTML.split(/<br\s*\/?>/gi);
          heroH1.innerHTML = lines
            .map(
              (line) =>
                `<span class="hero-line" style="display:block;overflow:hidden"><span class="hero-line-inner" style="display:block">${line}</span></span>`,
            )
            .join("");

          const inners = heroH1.querySelectorAll(".hero-line-inner");
          gsap.set(inners, {
            y: "110%",
            opacity: 0,
            willChange: "transform, opacity",
          });

          gsap.to(inners, {
            y: "0%",
            opacity: 1,
            duration: 1.1,
            ease: "power4.out",
            stagger: 0.1,
            delay: 0.3,
            onComplete: () => gsap.set(inners, { clearProps: "willChange" }),
          });
        }

        // Hero sub-paragraph fade
        const heroSub = document.querySelector<HTMLElement>(
          "section:first-child .text-mute",
        );
        if (heroSub) {
          gsap.fromTo(
            heroSub,
            { autoAlpha: 0, y: 20 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              delay: 0.7,
              clearProps: "willChange",
            },
          );
        }

        // Hero buttons fade
        const heroButtons = document.querySelector<HTMLElement>(
          "section:first-child .flex.flex-wrap.items-center.gap-3",
        );
        if (heroButtons) {
          gsap.fromTo(
            heroButtons,
            { autoAlpha: 0, y: 16 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: 0.9,
              clearProps: "willChange",
            },
          );
        }

        // Hero images float in
        const heroFigures = document.querySelectorAll<HTMLElement>(
          "section:first-child figure",
        );
        if (heroFigures.length) {
          gsap.fromTo(
            heroFigures,
            { autoAlpha: 0, y: 40, scale: 0.96 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              stagger: 0.15,
              delay: 0.4,
              clearProps: "willChange",
            },
          );
        }

        // Hero field report card
        const fieldReport = document.querySelector<HTMLElement>(
          "section:first-child .backdrop-blur",
        );
        if (fieldReport) {
          gsap.fromTo(
            fieldReport,
            { autoAlpha: 0, y: 20, scale: 0.95 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
              delay: 1.1,
              clearProps: "willChange",
            },
          );
        }

        // Hero eyebrow
        const heroEyebrow = document.querySelector<HTMLElement>(
          "section:first-child .eyebrow",
        );
        if (heroEyebrow?.parentElement) {
          gsap.fromTo(
            heroEyebrow.parentElement,
            { autoAlpha: 0, x: -20 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.7,
              ease: "power3.out",
              delay: 0.15,
              clearProps: "willChange",
            },
          );
        }

        /* ─────────────────────────────────────────────────────────
         * 2. GENERAL FADE-UP REVEALS (sections below hero)
         * ───────────────────────────────────────────────────────── */
        const fadeEls = Array.from(
          document.querySelectorAll<HTMLElement>(FADE_UP_SELECTOR),
        ).filter((el) => {
          // Skip hero elements (handled above)
          const section = el.closest("section");
          if (!section) return false;
          const isFirstSection =
            section === document.querySelector("section:first-child");
          if (isFirstSection) return false;
          // Skip footer elements for separate treatment
          if (el.closest("footer")) return false;
          return true;
        });

        if (fadeEls.length) {
          gsap.set(fadeEls, {
            autoAlpha: 0,
            y: 24,
            willChange: "transform, opacity",
          });

          ScrollTrigger.batch(fadeEls, {
            start: "top 90%",
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.95,
                ease: "power3.out",
                stagger: 0.06,
                overwrite: true,
                onComplete: () =>
                  gsap.set(batch, { clearProps: "willChange" }),
              });
            },
          });
        }

        /* ─────────────────────────────────────────────────────────
         * 3. GALLERY CLIP-PATH WIPE REVEALS
         * ───────────────────────────────────────────────────────── */
        const clipEls = Array.from(
          document.querySelectorAll<HTMLElement>(CLIP_SELECTOR),
        );

        if (clipEls.length) {
          gsap.set(clipEls, {
            clipPath: "inset(100% 0% 0% 0%)",
            willChange: "clip-path",
          });

          ScrollTrigger.batch(clipEls, {
            start: "top 88%",
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.1,
                ease: "power4.inOut",
                stagger: 0.12,
                overwrite: true,
                onComplete: () =>
                  gsap.set(batch, { clearProps: "willChange,clipPath" }),
              });
            },
          });
        }

        /* ─────────────────────────────────────────────────────────
         * 4. PARALLAX IMAGES
         * ───────────────────────────────────────────────────────── */
        document
          .querySelectorAll<HTMLElement>(PARALLAX_SELECTOR)
          .forEach((img) => {
            gsap.fromTo(
              img,
              { y: -30 },
              {
                y: 30,
                ease: "none",
                scrollTrigger: {
                  trigger: img.closest("figure") || img.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.6,
                },
              },
            );
          });

        /* ─────────────────────────────────────────────────────────
         * 5. VALUE CARDS — CASCADING STAGGER
         * ───────────────────────────────────────────────────────── */
        const valueCards = document.querySelectorAll<HTMLElement>(
          "#values article",
        );
        if (valueCards.length) {
          gsap.set(valueCards, {
            autoAlpha: 0,
            y: 30,
            willChange: "transform, opacity",
          });

          ScrollTrigger.create({
            trigger: "#values",
            start: "top 75%",
            once: true,
            onEnter: () => {
              gsap.to(valueCards, {
                autoAlpha: 1,
                y: 0,
                duration: 0.85,
                ease: "power3.out",
                stagger: {
                  each: 0.1,
                  grid: [2, 3],
                  from: "start",
                },
                onComplete: () =>
                  gsap.set(valueCards, { clearProps: "willChange" }),
              });
            },
          });
        }

        /* ─────────────────────────────────────────────────────────
         * 6. STATS ENTRANCE — Scale pop
         * ───────────────────────────────────────────────────────── */
        const statNums = document.querySelectorAll<HTMLElement>(".stat-num");
        if (statNums.length) {
          gsap.set(statNums, {
            autoAlpha: 0,
            scale: 0.85,
            willChange: "transform, opacity",
          });

          ScrollTrigger.batch(statNums, {
            start: "top 85%",
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                scale: 1,
                duration: 0.9,
                ease: "back.out(1.4)",
                stagger: 0.12,
                overwrite: true,
                onComplete: () =>
                  gsap.set(batch, { clearProps: "willChange" }),
              });
            },
          });
        }

        /* ─────────────────────────────────────────────────────────
         * 7. INVESTMENT CTA SECTION — Slide up
         * ───────────────────────────────────────────────────────── */
        const ctaCards = document.querySelectorAll<HTMLElement>(
          ".rounded-\\[24px\\]",
        );
        ctaCards.forEach((card) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 50, scale: 0.97 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
              clearProps: "willChange",
            },
          );
        });

        /* ─────────────────────────────────────────────────────────
         * 8. FOOTER REVEAL
         * ───────────────────────────────────────────────────────── */
        const footerChildren = document.querySelectorAll<HTMLElement>(
          "footer > div > div > div",
        );
        if (footerChildren.length) {
          gsap.set(footerChildren, {
            autoAlpha: 0,
            y: 30,
            willChange: "transform, opacity",
          });

          ScrollTrigger.create({
            trigger: "footer",
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(footerChildren, {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.08,
                onComplete: () =>
                  gsap.set(footerChildren, { clearProps: "willChange" }),
              });
            },
          });
        }

        /* ─────────────────────────────────────────────────────────
         * 9. HAIRLINE DIVIDERS — Draw from left
         * ───────────────────────────────────────────────────────── */
        const hairlines = document.querySelectorAll<HTMLElement>(
          ".hairline, .hairline-strong",
        );
        hairlines.forEach((line) => {
          // Skip hairlines inside header or that are very small
          if (line.closest("header") || line.closest("nav")) return;

          gsap.fromTo(
            line,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 1.2,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: line,
                start: "top 92%",
                once: true,
              },
            },
          );
        });

        // Final refresh to settle all triggers
        ScrollTrigger.refresh();
      });

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
