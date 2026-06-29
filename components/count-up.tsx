"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  /** Duration in ms */
  duration?: number;
  /** Decimal places (e.g. 1 → "87.3") */
  decimals?: number;
  /** Locale for thousand separators; pass "" for none */
  locale?: string | false;
  prefix?: string;
  suffix?: string;
  /** Custom formatter - overrides decimals/locale */
  format?: (value: number) => string;
  /** className for the wrapping span */
  className?: string;
};

export function CountUp({
  to,
  duration = 1400,
  decimals = 0,
  locale = "en-ZA",
  prefix = "",
  suffix = "",
  format,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setValue(to);
      return;
    }

    let raf = 0;
    let start = 0;
    let started = false;

    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(to);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          raf = requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [to, duration]);

  const formatted = format
    ? format(value)
    : decimals > 0
      ? value.toFixed(decimals)
      : locale
        ? Math.round(value).toLocaleString(locale)
        : String(Math.round(value));

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
