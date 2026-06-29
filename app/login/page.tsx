"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, type FormEvent } from "react";
import { ArrowRight, Mail, ShieldCheck, Check } from "@/components/icons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Set a dedicated body class so chrome can hide / page background can
  // override without needing route detection elsewhere.
  useEffect(() => {
    document.body.classList.add("body-login");
    return () => document.body.classList.remove("body-login");
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    // Auth is not wired up yet. Show a placeholder message and reset.
    window.setTimeout(() => {
      setSubmitting(false);
      setError("CPSLearn sign-in isn't live yet. Once it's available, your credentials will let you straight in.");
    }, 1200);
  };

  return (
    <main className="login">
      {/* === Brand panel (left, hidden on small screens) === */}
      <aside className="login-brand" aria-hidden="true">
        <div className="login-brand-overlay" />
        <div className="login-brand-content">
          <Link href="/" className="login-brand-logo" aria-label="Back to CPS home">
            <Image src="/logo.avif" alt="" width={140} height={36} priority />
          </Link>

          <div className="login-brand-message">
            <span className="login-brand-mono">CPSLearn</span>
            <h1 className="login-brand-heading">
              The structure behind <em>how you finish</em>.
            </h1>
            <p className="login-brand-lede">
              Sign in to your programme. Pick up where you left off, see what&apos;s next, and stay on
              track to completion.
            </p>
          </div>

          <ul className="login-brand-facts">
            <li>
              <span className="login-brand-tick" aria-hidden><Check /></span>
              Built and refined over 25+ years
            </li>
            <li>
              <span className="login-brand-tick" aria-hidden><Check /></span>
              Banking · insurance · investment · leadership
            </li>
            <li>
              <span className="login-brand-tick" aria-hidden><Check /></span>
              Designed for completion, not just enrolment
            </li>
          </ul>

          <div className="login-brand-foot">
            <span className="login-brand-mono">Cornerstone Performance Solutions</span>
            <span className="login-brand-meta">Higher Education · CHE accredited · SAQA registered</span>
          </div>
        </div>
      </aside>

      {/* === Form panel (right) === */}
      <section className="login-form-panel">
        <div className="login-form-wrap">
          <Link href="/" className="login-back" aria-label="Back to main site">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19, 5 12, 12 5" />
            </svg>
            Back to site
          </Link>

          {/* Small inline logo for mobile (brand panel hidden) */}
          <Link href="/" className="login-mobile-logo" aria-label="CPS home">
            <Image src="/logo.avif" alt="CPS" width={120} height={32} />
          </Link>

          <div className="login-heading">
            <span className="login-eyebrow">
              <span className="login-eyebrow-dot" aria-hidden /> CPSLearn
            </span>
            <h2>Welcome back.</h2>
            <p>Sign in to continue your programme.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="login-field">
              <label htmlFor="login-email">Email address</label>
              <div className="login-input-wrap">
                <span className="login-input-icon" aria-hidden><Mail /></span>
                <input
                  id="login-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  spellCheck={false}
                />
              </div>
            </div>

            <div className="login-field">
              <div className="login-label-row">
                <label htmlFor="login-password">Password</label>
                <button
                  type="button"
                  className="login-toggle"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-pressed={showPassword}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="login-input-wrap">
                <span className="login-input-icon" aria-hidden><ShieldCheck /></span>
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  autoComplete="current-password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="login-row">
              <label className="login-remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span className="login-remember-box" aria-hidden />
                <span>Remember me</span>
              </label>
              <Link href="/login" className="login-forgot" onClick={(e) => e.preventDefault()}>
                Forgot password?
              </Link>
            </div>

            {error && (
              <div className="login-error" role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="login-submit"
              disabled={submitting || !email || !password}
            >
              {submitting ? "Signing in…" : "Sign in"}
              {!submitting && <ArrowRight />}
            </button>
          </form>

          <div className="login-divider" aria-hidden>
            <span>Need help?</span>
          </div>

          <div className="login-footer">
            <p>
              Trouble signing in?{" "}
              <a href="mailto:support@cps.co.za">support@cps.co.za</a>{" "}
              <span className="login-footer-sep" aria-hidden>·</span>{" "}
              <a href="tel:+27117891957">+27 11 789 1957</a>
            </p>
            <p className="login-footer-meta">
              Not enrolled yet? <Link href="/programmes">Browse programmes</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
