"use client";

import {
  type CSSProperties,
  type ElementType,
  type PointerEvent,
  type ReactNode,
  useRef,
} from "react";

type Props<T extends ElementType = "div"> = {
  children: ReactNode;
  as?: T;
  className?: string;
  style?: CSSProperties;
};

/**
 * Wraps content in a container that paints a soft radial spotlight
 * following the cursor (via CSS variables --spot-x and --spot-y).
 * The visual is defined in globals.css under .spotlight::after.
 */
export function Spotlight<T extends ElementType = "div">({
  children,
  as,
  className = "",
  style,
}: Props<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  const onPointerMove = (e: PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref as never}
      className={`spotlight ${className}`.trim()}
      style={style}
      onPointerMove={onPointerMove}
    >
      {children}
    </Tag>
  );
}
