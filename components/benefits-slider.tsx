"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Horizontal scroll-snap slider with prev/next nav buttons.
 * Cards are children - each becomes a flex item with snap alignment.
 * Buttons disable themselves at the start / end of the scroll range so the
 * affordance feels honest. Falls back to a plain horizontal scroll on
 * touch devices and reduced-motion users.
 */
export function BenefitsSlider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByAmount = (direction: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const firstCard = el.querySelector(":scope > *") as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth ?? 320;
    const styles = window.getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "16");
    el.scrollBy({ left: direction * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="benefits-slider-wrap">
      <div
        className="benefits-slider"
        ref={ref}
        role="region"
        aria-label="Why students choose CPS - scrollable cards"
        tabIndex={0}
      >
        {children}
      </div>
      <div className="slider-nav-row">
        <button
          type="button"
          className="slider-nav"
          onClick={() => scrollByAmount(-1)}
          disabled={!canPrev}
          aria-label="Previous benefit"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19, 5 12, 12 5" />
          </svg>
        </button>
        <button
          type="button"
          className="slider-nav"
          onClick={() => scrollByAmount(1)}
          disabled={!canNext}
          aria-label="Next benefit"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5, 19 12, 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}
