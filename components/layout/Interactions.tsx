"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HEADER_OFFSET = 72;

export default function Interactions() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }, { ScrollToPlugin }] =
        await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("gsap/ScrollToPlugin"),
        ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
      gsap.config({ force3D: true });

      const listeners: Array<{
        el: EventTarget;
        evt: string;
        fn: EventListener;
        opts?: AddEventListenerOptions;
      }> = [];

      const listen = (
        el: EventTarget,
        evt: string,
        fn: EventListener,
        opts?: AddEventListenerOptions,
      ) => {
        el.addEventListener(evt, fn, opts);
        listeners.push({ el, evt, fn, opts });
      };

      const ctx = gsap.context(() => {
        /* ═══════════════════════════════════════════════════════════
         * 1. SMART NAVBAR — hide on scroll-down, show on scroll-up
         * ═══════════════════════════════════════════════════════════ */
        const header = document.querySelector<HTMLElement>("header");
        if (header) {
          let lastScroll = 0;
          let headerHidden = false;

          // Ensure transitions are set
          header.style.transition =
            "transform 0.3s cubic-bezier(0.22, 0.68, 0, 1), box-shadow 0.3s ease";

          const updateHeader = () => {
            const scrollY = window.scrollY;
            const delta = scrollY - lastScroll;

            // Shadow when scrolled
            header.style.boxShadow =
              scrollY > 8
                ? "0 10px 30px -18px rgba(20,24,26,0.45)"
                : "none";

            // Hide/show with a threshold to prevent flicker
            if (delta > 5 && scrollY > 120 && !headerHidden) {
              header.style.transform = "translateY(-100%)";
              headerHidden = true;
            } else if (delta < -3 && headerHidden) {
              header.style.transform = "translateY(0)";
              headerHidden = false;
            }

            lastScroll = scrollY;
          };

          let ticking = false;
          const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
              updateHeader();
              ticking = false;
            });
          };

          listen(window, "scroll", onScroll, { passive: true });
          updateHeader();
        }

        /* ═══════════════════════════════════════════════════════════
         * 2. SMOOTH ANCHOR SCROLLING
         * ═══════════════════════════════════════════════════════════ */
        const onClick = (e: Event) => {
          const mouseEvt = e as MouseEvent;
          const a = (mouseEvt.target as HTMLElement)?.closest?.(
            "a[href]",
          ) as HTMLAnchorElement | null;
          if (!a) return;
          const href = a.getAttribute("href") || "";
          const hashIndex = href.indexOf("#");
          if (hashIndex < 0) return;

          const path = href.slice(0, hashIndex);
          const samePage =
            path === "" ||
            path === window.location.pathname ||
            (path === "/" && window.location.pathname === "/");
          if (!samePage) return;

          const id = href.slice(hashIndex + 1);
          const target = id && document.getElementById(id);
          if (!target) return;

          mouseEvt.preventDefault();
          gsap.to(window, {
            duration: 1.2,
            ease: "power3.inOut",
            scrollTo: { y: target, offsetY: HEADER_OFFSET, autoKill: true },
          });
          history.replaceState(null, "", `#${id}`);
        };
        listen(document, "click", onClick);

        /* ═══════════════════════════════════════════════════════════
         * 3. STAT COUNT-UP
         * ═══════════════════════════════════════════════════════════ */
        gsap.utils
          .toArray<HTMLElement>(".stat-num")
          .forEach((el) => {
            const node = el.firstChild;
            if (!node || node.nodeType !== Node.TEXT_NODE) return;
            const raw = (node.textContent || "").trim();
            const end = parseInt(raw, 10);
            if (!Number.isFinite(end)) return;

            const counter = { v: 0 };
            ScrollTrigger.create({
              trigger: el,
              start: "top 85%",
              once: true,
              onEnter: () => {
                gsap.to(counter, {
                  v: end,
                  duration: 1.6,
                  ease: "power2.out",
                  snap: { v: 1 },
                  onUpdate: () => {
                    node.textContent = String(Math.round(counter.v));
                  },
                });
              },
            });
          });

        /* ═══════════════════════════════════════════════════════════
         * 4. MAGNETIC CTA BUTTONS
         * ═══════════════════════════════════════════════════════════ */
        const magneticBtns = document.querySelectorAll<HTMLElement>(
          ".btn-primary, .btn-ghost",
        );
        magneticBtns.forEach((btn) => {
          const xTo = gsap.quickTo(btn, "x", {
            duration: 0.5,
            ease: "power3",
          });
          const yTo = gsap.quickTo(btn, "y", {
            duration: 0.5,
            ease: "power3",
          });

          const onMove = (e: Event) => {
            const mouseEvt = e as MouseEvent;
            const rect = btn.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = mouseEvt.clientX - cx;
            const dy = mouseEvt.clientY - cy;
            xTo(dx * 0.25);
            yTo(dy * 0.25);
          };

          const onLeave = () => {
            xTo(0);
            yTo(0);
          };

          listen(btn, "mousemove", onMove);
          listen(btn, "mouseleave", onLeave);
        });

        /* ═══════════════════════════════════════════════════════════
         * 5. PORTFOLIO CARD 3D TILT
         * ═══════════════════════════════════════════════════════════ */
        const cards = document.querySelectorAll<HTMLElement>(".svc-card");
        cards.forEach((card) => {
          card.style.transformStyle = "preserve-3d";
          card.style.perspective = "800px";

          const onMove = (e: Event) => {
            const mouseEvt = e as MouseEvent;
            const rect = card.getBoundingClientRect();
            const x = (mouseEvt.clientX - rect.left) / rect.width - 0.5;
            const y = (mouseEvt.clientY - rect.top) / rect.height - 0.5;

            gsap.to(card, {
              rotateY: x * 6,
              rotateX: -y * 6,
              duration: 0.4,
              ease: "power2.out",
            });
          };

          const onLeave = () => {
            gsap.to(card, {
              rotateY: 0,
              rotateX: 0,
              duration: 0.6,
              ease: "elastic.out(1, 0.4)",
            });
          };

          listen(card, "mousemove", onMove);
          listen(card, "mouseleave", onLeave);
        });

        /* ═══════════════════════════════════════════════════════════
         * 6. MARQUEE (Scroll-velocity boost removed to prevent jitter)
         * ═══════════════════════════════════════════════════════════ */
        // We removed the scroll listener that dynamically changed the
        // animation-duration on scroll, as CSS animations jump when
        // duration is updated mid-flight.

        ScrollTrigger.refresh();
      });

      cleanup = () => {
        listeners.forEach(({ el, evt, fn, opts }) =>
          el.removeEventListener(evt, fn, opts),
        );
        ctx.revert();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
