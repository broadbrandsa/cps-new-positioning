"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer";

/**
 * Footer wrapper that hides the marketing footer on standalone routes
 * like /login. Kept as a small client component so Footer itself can stay
 * a server component.
 */
export function FooterGate() {
  const pathname = usePathname();
  if (pathname.startsWith("/login")) return null;
  return <Footer />;
}
