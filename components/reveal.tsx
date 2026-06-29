"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type Props<T extends ElementType = "div"> = {
  children: ReactNode;
  /** Stagger delay in ms, useful when several Reveals are in a row */
  delay?: number;
  /** Threshold (0–1) of element visibility before it animates in */
  threshold?: number;
  as?: T;
  className?: string;
  style?: CSSProperties;
};

export function Reveal<T extends ElementType = "div">({
  children,
  delay = 0,
  threshold = 0.15,
  as,
  className = "",
  style,
}: Props<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const composedStyle: CSSProperties = {
    ...style,
    // Cast: extending CSS properties with custom var
    ...({ "--reveal-delay": `${delay}ms` } as CSSProperties),
  };

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "reveal--in" : ""} ${className}`.trim()}
      style={composedStyle}
    >
      {children}
    </Tag>
  );
}
