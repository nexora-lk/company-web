"use client";

import { primaryNav } from "@/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export default function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<any>(null);

  // Build or update the GSAP timeline on state change.
  useEffect(() => {
    if (typeof window === "undefined") return;

    let cancelled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;

      const panel = panelRef.current;
      const backdrop = backdropRef.current;
      if (!panel || !backdrop) return;

      const links = panel.querySelectorAll<HTMLElement>(".mobile-link");
      const bottomBar = panel.querySelector<HTMLElement>(".mobile-bottom");

      // Kill previous timeline
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }

      if (open) {
        // Lock body scroll
        document.body.style.overflow = "hidden";

        // Make elements visible for animation
        panel.style.visibility = "visible";
        panel.style.pointerEvents = "auto";
        backdrop.style.visibility = "visible";
        backdrop.style.pointerEvents = "auto";

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        tl.fromTo(
          backdrop,
          { opacity: 0 },
          { opacity: 1, duration: 0.35 },
        )
          .fromTo(
            panel,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, ease: "power4.out" },
            "<0.05",
          )
          .fromTo(
            links,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.05,
              ease: "power3.out",
            },
            "<0.15",
          );

        if (bottomBar) {
          tl.fromTo(
            bottomBar,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4 },
            "<0.1",
          );
        }

        tlRef.current = tl;
      } else {
        // Close animation
        const tl = gsap.timeline({
          defaults: { ease: "power2.in" },
          onComplete: () => {
            panel.style.visibility = "hidden";
            panel.style.pointerEvents = "none";
            backdrop.style.visibility = "hidden";
            backdrop.style.pointerEvents = "none";
            document.body.style.overflow = "";
          },
        });

        tl.to(panel, { y: -12, opacity: 0, duration: 0.3 }).to(
          backdrop,
          { opacity: 0, duration: 0.25 },
          "<",
        );

        tlRef.current = tl;
      }

      cleanup = () => {
        if (tlRef.current) {
          tlRef.current.kill();
          tlRef.current = null;
        }
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [open]);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="grid place-items-center w-10 h-10 rounded-full border border-line text-ink"
      >
        <span className="relative block w-[18px] h-[14px]">
          <span
            className={`absolute left-0 right-0 h-px bg-ink transition-all duration-300 ${
              open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-ink transition-all duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 right-0 h-px bg-ink transition-all duration-300 ${
              open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
            }`}
          />
        </span>
      </button>

      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={close}
        aria-hidden="true"
        className="fixed inset-0 top-16 z-40 bg-ink/70 backdrop-blur-[2px]"
        style={{ visibility: "hidden", pointerEvents: "none", opacity: 0 }}
      />

      {/* Panel */}
      <nav
        id="mobile-nav"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed inset-x-0 top-16 z-40 origin-top border-b border-line bg-bg nav-blur"
        style={{ visibility: "hidden", pointerEvents: "none", opacity: 0 }}
      >
        <div className="max-w-content mx-auto px-6 py-6 overflow-y-auto max-h-[calc(100vh-120px)]">
          <ul className="flex flex-col">
            {primaryNav.map((link) => {
              const isActive = pathname === link.href || (link.href === "/" && pathname === "/");
              return (
                <li
                  key={link.label}
                  className="mobile-link border-b border-line last:border-0"
                >
                  <div className="flex flex-col">
                    <Link
                      href={link.href}
                      onClick={close}
                      className={`flex items-center justify-between py-3.5 font-display text-[22px] tracking-tightish transition-colors duration-200 ${
                        isActive ? "text-accent font-medium" : "text-ink hover:text-accent"
                      }`}
                    >
                      {link.label}
                      <span className={`arrow ${isActive ? "text-accent" : "text-mute"}`}>→</span>
                    </Link>
                    {link.children && (
                      <ul className="pl-4 pb-4 space-y-2">
                        {link.children.map(child => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={close}
                              className="text-[15px] text-mute hover:text-ink transition-colors block py-1.5"
                            >
                              — {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mobile-bottom mt-6 flex items-center justify-between">
            <Link
              href="/#contact"
              onClick={close}
              className="btn btn-primary text-sm py-2! px-4!"
            >
              Get in touch <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
