import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRightSmall, CheckSmall } from "@/components/icons";
import { Spotlight } from "@/components/spotlight";
import { FlagshipProgrammeDetail } from "@/components/programme-flagship";
import { PROGRAMMES, PROGRAMME_SLUGS } from "@/lib/programmes";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROGRAMME_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PROGRAMMES[slug];
  if (!p) return { title: "Programme not found" };
  return {
    title: p.title,
    description: p.lede,
  };
}

export default async function ProgrammeDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = PROGRAMMES[slug];
  if (!p) notFound();

  // Flagship programmes (HCIB + ACL) render with the richer detail template.
  if (p.flagship) {
    return <FlagshipProgrammeDetail p={p} />;
  }

  const isSkillsProgramme = p.kind === "skills-programme";

  // Primary CTA copy adapts to programme kind
  const primaryCtaLabel = isSkillsProgramme ? "Enquire" : "Apply now";
  const ctaTitle = isSkillsProgramme ? `Enquire about ${p.title}` : `Apply for ${p.title}`;
  const ctaDesc = isSkillsProgramme
    ? "Skills programmes are typically delivered for organisational cohorts. Get in touch and we'll scope a programme around your team's specific capability gap."
    : "No upfront fee. R300 application fee only payable after you've been accepted. We'll respond within 3 business days.";
  const mailSubject = isSkillsProgramme ? `Enquiry: ${p.title}` : `Application: ${p.title}`;

  return (
    <main>
      <section className="prog-detail-hero" data-cat={p.cat}>
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link><span className="sep">/</span>
            <Link href="/programmes">Programmes</Link><span className="sep">/</span>
            <span>{p.title}</span>
          </div>
          <div className="pd-hero-grid" style={{ marginTop: 24 }}>
            <div>
              <div className="pill-row" style={{ marginBottom: 8 }}>
                {p.pills.map((pill, i) => (
                  <span key={i} className={`pill ${pill.cls ?? ""}`.trim()}>{pill.label}</span>
                ))}
              </div>
              <h1>{p.title}</h1>
              <p className="lede">{p.lede}</p>
              <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#pd-cta-bottom" className="btn btn-yellow btn-lg">{primaryCtaLabel}</a>
                {isSkillsProgramme && (
                  <Link href="/programmes" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center" }}>
                    Compare programmes
                  </Link>
                )}
              </div>
            </div>
            <div className="pd-meta-card">
              {p.meta.map((m, i) => (
                <div key={i} className="row">
                  <div className="lbl">{m.lbl}</div>
                  <div className={`val${m.big ? " big" : ""}${m.yellow ? " yellow" : ""}`}>
                    {m.val}
                    {m.suffix && (
                      <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 400 }}>{m.suffix}</span>
                    )}
                  </div>
                </div>
              ))}
              <a href="#pd-cta-bottom" className="pd-cta" style={{ textAlign: "center" }}>
                {isSkillsProgramme ? "Enquire" : `Apply for ${p.shortTitle ?? p.title}`}
              </a>
              <Link href="/programmes" className="pd-cta-secondary" style={{ textAlign: "center" }}>
                Compare all programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="pd-section-grid">
            <div>
              <div className="label">About</div>
              <h2>What this programme is for</h2>
            </div>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.6 }}>{p.about}</p>
              {p.benefits && p.benefits.length > 0 && (
                <div className="pd-bullet-list" style={{ marginTop: 32 }}>
                  {p.benefits.map((b, i) => (
                    <div key={i} className="pd-bullet">
                      <div className="check"><CheckSmall /></div>
                      <div className="t" dangerouslySetInnerHTML={{ __html: b }} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {p.modules && p.modules.length > 0 && (
        <section style={{ borderTop: "1px solid var(--line)" }}>
          <div className="container">
            <div className="pd-section-grid">
              <div>
                <div className="label">Curriculum</div>
                <h2>Modules</h2>
                {p.modulesNote && (
                  <p style={{ marginTop: 12, color: "var(--muted)", fontSize: 14, lineHeight: 1.5 }}>{p.modulesNote}</p>
                )}
              </div>
              <div>
                <div className="pd-modules">
                  {p.modules.map((m, i) => (
                    <div key={i} className="pd-module">
                      <div className="n">{String(i + 1).padStart(2, "0")}</div>
                      <div className="t">{m}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {p.pathways && p.pathways.length > 0 && (
        <section style={{ borderTop: "1px solid var(--line)" }}>
          <div className="container">
            <div className="pd-section-grid">
              <div>
                <div className="label">Specialisations</div>
                <h2>Career pathways</h2>
                <p style={{ marginTop: 12, color: "var(--muted)", fontSize: 14, lineHeight: 1.5 }}>
                  Choose a focus area aligned to where you want your career to go.
                </p>
              </div>
              <div>
                <div className="pd-pathway-row">
                  {p.pathways.map((path, i) => (
                    <div key={i} className="pd-pathway">
                      <div className="num">P0{i + 1}</div>
                      <div className="t">{path}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {p.audience && p.audience.length > 0 && (
        <section style={{ borderTop: "1px solid var(--line)" }}>
          <div className="container">
            <div className="pd-section-grid">
              <div>
                <div className="label">Who it&apos;s for</div>
                <h2>Designed for</h2>
              </div>
              <div>
                <div className="pd-bullet-list">
                  {p.audience.map((a, i) => (
                    <div key={i} className="pd-bullet">
                      <div className="check"><CheckSmall /></div>
                      <div className="t" dangerouslySetInnerHTML={{ __html: a }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {p.outcomes && p.outcomes.length > 0 && (
        <section style={{ borderTop: "1px solid var(--line)" }}>
          <div className="container">
            <div className="pd-section-grid">
              <div>
                <div className="label">Outcomes</div>
                <h2>What you can do next</h2>
              </div>
              <div>
                <div className="pd-bullet-list">
                  {p.outcomes.map((o, i) => (
                    <div key={i} className="pd-bullet">
                      <div className="check" style={{ background: "rgba(255,230,60,0.30)", color: "#6B6B00" }}>
                        <ArrowRightSmall />
                      </div>
                      <div className="t">{o}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {!isSkillsProgramme && (
        <section style={{ borderTop: "1px solid var(--line)" }}>
          <div className="container">
            <div className="pd-section-grid" style={{ marginBottom: 32 }}>
              <div>
                <div className="label">Process</div>
                <h2>How the journey works</h2>
              </div>
              <div />
            </div>
            <div className="pd-step-row">
              <div className="pd-step"><div className="step-num">01</div><h4>Apply</h4><p>Simple application - no upfront fee. R300 application fee only on acceptance.</p></div>
              <div className="pd-step"><div className="step-num" style={{ color: "#7B2EFF" }}>02</div><h4>Learn</h4><p>Personalised pathways on CPSLearn with stewardship support and instant feedback.</p></div>
              <div className="pd-step"><div className="step-num" style={{ color: "#0B6E94" }}>03</div><h4>Graduate</h4><p>Walk away with a recognised qualification, evidence of competency and a community of practice.</p></div>
            </div>
          </div>
        </section>
      )}

      <section style={{ borderTop: "1px solid var(--line)" }} id="pd-cta-bottom">
        <div className="container">
          <Spotlight as="div" className="pd-bottom-cta">
            <div>
              <span className="mono" style={{ color: "var(--cps-yellow)" }}>Ready to start?</span>
              <h2 style={{ marginTop: 14 }}>{ctaTitle}</h2>
              <p>{ctaDesc}</p>
            </div>
            <div className="actions">
              <a className="btn-yellow" href={`mailto:organisations@cps.co.za?subject=${encodeURIComponent(mailSubject)}`}>{primaryCtaLabel}</a>
              <Link href="/programmes" style={{ background: "rgba(255,255,255,0.08)", color: "white", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.18)" }}>Compare all programmes</Link>
            </div>
          </Spotlight>
        </div>
      </section>

      <div style={{ height: 96 }} />
    </main>
  );
}
