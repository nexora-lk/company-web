"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* ── Selectors ─────────────────────────────────────────────────────── */

// General fade-up candidates
const FADE_UP_SELECTOR = [
  "section h1",
  "section h2",
  "section h3",
  "section > div > div > p",
  "section .text-mute",
  ".reveal",
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
            duration: 1.0,
            ease: "power4.out",
            stagger: 0.08,
            delay: 0.25,
            onComplete: () => gsap.set(inners, { clearProps: "willChange" }),
          });
        }

        // Hero content reveals (descriptions, stats, buttons, etc.)
        const heroContent = Array.from(
          document.querySelectorAll<HTMLElement>(
            "section:first-child .text-mute, section:first-child p, section:first-child .btn, section:first-child .reveal:not(h1)",
          ),
        ).filter((el) => {
          // Avoid animating H1 children if they have .reveal
          return !el.closest("h1");
        });

        if (heroContent.length) {
          gsap.fromTo(
            heroContent,
            { autoAlpha: 0, y: 16 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
              delay: 0.6,
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
            { autoAlpha: 0, y: 30, scale: 0.98 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 1.1,
              ease: "power3.out",
              stagger: 0.1,
              delay: 0.35,
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
            { autoAlpha: 0, y: 16, scale: 0.96 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              delay: 1.0,
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
            { autoAlpha: 0, x: -16 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.6,
              ease: "power3.out",
              delay: 0.1,
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
            y: 20,
            willChange: "transform, opacity",
          });

          ScrollTrigger.batch(fadeEls, {
            start: "top 92%",
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.05,
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
            start: "top 90%",
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.9,
                ease: "power4.inOut",
                stagger: 0.08,
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
        const footerRows = document.querySelectorAll<HTMLElement>(
          "footer > div > div",
        );
        if (footerRows.length) {
          gsap.set(footerRows, {
            autoAlpha: 0,
            y: 20,
            willChange: "transform, opacity",
          });

          ScrollTrigger.create({
            trigger: "footer",
            start: "top 94%",
            once: true,
            onEnter: () => {
              gsap.to(footerRows, {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.06,
                onComplete: () =>
                  gsap.set(footerRows, { clearProps: "all" }),
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
