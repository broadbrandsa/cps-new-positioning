"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "./icons";
import type { ProgrammeCategory } from "@/lib/programmes";

type Filter = "all" | ProgrammeCategory;

const studentFilters: Array<{ value: Filter; label: string }> = [
  { value: "all", label: "All" },
  { value: "banking", label: "Banking" },
  { value: "insurance", label: "Insurance" },
  { value: "investment", label: "Investment" },
  { value: "leadership", label: "Leadership" },
];

const orgFilters: Array<{ value: Filter; label: string }> = [
  { value: "all", label: "All" },
  { value: "banking", label: "Banking" },
  { value: "insurance", label: "Insurance" },
  { value: "investment", label: "Investment" },
  { value: "leadership", label: "Leadership" },
  { value: "sales", label: "Sales & Client Experience" },
  { value: "skills", label: "Skills Programmes" },
];

export type IndexCard = {
  slug: string;
  cat: ProgrammeCategory;
  pills: Array<{ label: string; cls?: string }>;
  title: string;
  desc: string;
  meta: Array<{ val: string; lbl: string }>;
  cta: string;
  audience?: string;
  featured?: boolean;
};

export function ProgrammeFilter({
  cards,
  audience = "students",
}: {
  cards: IndexCard[];
  audience?: "students" | "organisations";
}) {
  const filters = audience === "organisations" ? orgFilters : studentFilters;
  const [active, setActive] = useState<Filter>("all");
  const visible = active === "all" ? cards : cards.filter((c) => c.cat === active);

  return (
    <>
      <div style={{ marginTop: 40, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            className={`prog-filter ${active === f.value ? "active" : ""}`}
            onClick={() => setActive(f.value)}
            aria-pressed={active === f.value}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div style={{ height: 48 }} />

      <div className="prog-grid">
        {visible.map((c) => (
          <Link
            key={c.slug}
            href={`/programmes/${c.slug}`}
            className={`prog-card${c.featured ? " featured" : ""}`}
          >
            <div className="prog-card-top">
              <div className="pill-row">
                {c.pills.map((p, i) => (
                  <span key={i} className={`pill ${p.cls ?? ""}`.trim()}>{p.label}</span>
                ))}
              </div>
            </div>
            {c.audience && (
              <div className="prog-audience">
                <span className="mono">For: {c.audience}</span>
              </div>
            )}
            <h3 className="prog-title">{c.title}</h3>
            <p className="prog-desc">{c.desc}</p>
            <div className="prog-meta">
              {c.meta.map((m, i) => (
                <div key={i}><strong>{m.val}</strong><span>{m.lbl}</span></div>
              ))}
            </div>
            <span className="prog-cta">{c.cta} <ArrowRight /></span>
          </Link>
        ))}
      </div>
    </>
  );
}
