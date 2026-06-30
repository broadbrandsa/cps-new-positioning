"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Burger, Close } from "./icons";

type LinkSpec = { href: string; label: string; route: string };

const studentLinks: LinkSpec[] = [
  { href: "/programmes", label: "Programmes", route: "programmes" },
  { href: "/career-paths", label: "Career Paths", route: "career-paths" },
  { href: "/cpslearn", label: "CPSLearn", route: "platform" },
];

const orgLinks: LinkSpec[] = [
  { href: "/organisations/programmes", label: "Workforce Programmes", route: "org-programmes" },
  { href: "/organisations/cpslearn", label: "CPSLearn", route: "org-platform" },
];

const routeForPath = (p: string): string => {
  if (p === "/") return "home";
  if (p === "/organisations" || p === "/organisations/") return "organisations";
  if (p.startsWith("/organisations/programmes")) return "org-programmes";
  if (p.startsWith("/organisations/cpslearn")) return "org-platform";
  if (p.startsWith("/programmes")) return "programmes";
  if (p.startsWith("/career-paths")) return "career-paths";
  if (p.startsWith("/cpslearn")) return "platform";
  if (p.startsWith("/about")) return "about";
  if (p.startsWith("/contact")) return "contact";
  if (p.startsWith("/blog")) return "blog";
  return "other";
};

type Audience = "students" | "organisations";
const audienceForPath = (p: string): Audience =>
  p.startsWith("/organisations") ? "organisations" : "students";

export function Nav() {
  const pathname = usePathname();
  const active = routeForPath(pathname);
  const audience = audienceForPath(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Hide the marketing nav entirely on standalone routes like /login.
  // Comes AFTER all hook calls per Rules of Hooks.
  if (pathname.startsWith("/login")) return null;

  const visibleLinks = audience === "organisations" ? orgLinks : studentLinks;

  // Audience-aware nav CTAs
  const primaryCtaHref = audience === "organisations" ? "/organisations/programmes" : "/programmes";
  const primaryCtaLabel = audience === "organisations" ? "Workforce Programmes" : "Browse programmes";
  const secondaryCtaHref = audience === "organisations" ? "/contact#partnerships" : "/contact#admissions";
  const secondaryCtaLabel = audience === "organisations" ? "Request a conversation" : "Talk to admissions";

  return (
    <div className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      {/* Audience tab strip - also hosts shared meta links (About / Contact) */}
      <div className="audience-tabs">
        <div className="container audience-tabs-inner" role="tablist" aria-label="Audience">
          <Link
            href="/"
            role="tab"
            aria-selected={audience === "students"}
            className={`audience-tab ${audience === "students" ? "active" : ""}`}
          >
            For Students
          </Link>
          <Link
            href="/organisations"
            role="tab"
            aria-selected={audience === "organisations"}
            className={`audience-tab ${audience === "organisations" ? "active" : ""}`}
          >
            For Organisations
          </Link>
          <span className="audience-tabs-divider" aria-hidden />
          <Link
            href="/about"
            className={`audience-tab audience-tab-meta ${active === "about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`audience-tab audience-tab-meta ${active === "blog" ? "active" : ""}`}
          >
            Journal
          </Link>
          <Link
            href="/contact"
            className={`audience-tab audience-tab-meta ${active === "contact" ? "active" : ""}`}
          >
            Contact
          </Link>
          {/* Login - pushed to the far right of the strip. Routes to /login. */}
          <Link
            href="/login"
            className="audience-tab-login"
            aria-label="Log in to CPSLearn"
          >
            Log in
          </Link>
        </div>
      </div>

      {/* Main nav row */}
      <div className="container nav">
        <Link href="/" className="logo" aria-label="Cornerstone Performance Solutions home">
          <Image src="/logo.avif" alt="Cornerstone Performance Solutions" width={120} height={32} priority />
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {visibleLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.route ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className={`nav-cta ${open ? "open" : ""}`}>
          <Link href={primaryCtaHref} className="liquid-glass">{primaryCtaLabel}</Link>
          <Link href={secondaryCtaHref} className="btn btn-yellow">{secondaryCtaLabel}</Link>
        </div>

        <button
          type="button"
          className="nav-burger"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close /> : <Burger />}
        </button>
      </div>
    </div>
  );
}
