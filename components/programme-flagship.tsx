import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  CheckSmall,
  Compass,
  ClipboardCheck,
  Trophy,
  Lightbulb,
  Briefcase,
  Users,
  Rocket,
  Workflow,
  Calendar,
  TrendingUp,
  Award,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { HeroVideo } from "@/components/hero-video";
import type { Programme } from "@/lib/programmes";

/**
 * Flagship programme detail layout - used by HCIB + ACL.
 *
 * Built around the conversion path: hero key facts → why → curriculum → who →
 * where it takes you → process → FAQ → apply. A sticky brand-coloured apply
 * card sits in the right column on desktop and as a fixed bottom bar on
 * mobile, so the Apply action is always one tap away.
 */
export function FlagshipProgrammeDetail({ p }: { p: Programme }) {
  const accent = p.accent ?? "blue";
  const heroImage = p.heroImage ?? "/hero-bg.jpg";
  const monthly = p.meta.find((m) => /monthly|pricing/i.test(m.lbl))?.val ?? "Enquire";
  const duration = p.meta.find((m) => /duration/i.test(m.lbl))?.val ?? "";
  const nqf = p.meta.find((m) => /nqf/i.test(m.lbl))?.val ?? "";
  const credits = p.meta.find((m) => /credit/i.test(m.lbl))?.val ?? "";
  const saqa = p.meta.find((m) => /saqa/i.test(m.lbl))?.val;
  const awardingBody = p.meta.find((m) => /awarded/i.test(m.lbl))?.val;
  const startDate = p.meta.find((m) => /^start/i.test(m.lbl))?.val;
  const applicationsClose = p.meta.find((m) => /applications close|close/i.test(m.lbl))?.val;

  const mailSubject = `Application: ${p.title}`;
  const applyHref = `mailto:applications@cps.co.za?subject=${encodeURIComponent(mailSubject)}`;
  const shortTitle = p.shortTitle ?? p.title;

  // Persona icons - used in "Who it's for"
  const audienceIcons = [Users, Briefcase, Rocket];
  // Pathway icons - used in "Career pathways" (HCIB)
  const pathwayIcons = [Compass, Briefcase, Workflow, TrendingUp];
  // Benefit icons - used in "Why this programme"
  const benefitIcons = [ClipboardCheck, Calendar, Lightbulb, Award];

  return (
    <main className={`flagship flagship-${accent}`}>
      {/* ===== HERO ===== */}
      <section className="flagship-hero">
        {p.heroVideo ? (
          <HeroVideo
            src={p.heroVideo}
            poster={heroImage}
            playbackRate={p.heroVideoSpeed ?? 1}
            className="flagship-hero-photo flagship-hero-video"
          />
        ) : (
          <div
            className="flagship-hero-photo"
            aria-hidden
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
        )}
        <div className="flagship-hero-overlay" aria-hidden />
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/programmes">Programmes</Link>
            <span className="sep">/</span>
            <span className={`flagship-crumb-current accent-${accent}`}>{shortTitle}</span>
          </div>

          <div className="flagship-hero-content">
            <div className="pill-row" style={{ marginBottom: 12 }}>
              {p.pills.map((pill, i) => (
                <span key={i} className={`pill ${pill.cls ?? ""}`.trim()}>{pill.label}</span>
              ))}
            </div>
            <h1 className="flagship-hero-title">{p.title}</h1>
            <p className="flagship-hero-lede">{p.lede}</p>

            <div className="flagship-hero-actions">
              <a href="#apply" className={`flagship-cta-primary accent-${accent}`}>
                Apply now <ArrowRight />
              </a>
            </div>

            <div className="flagship-hero-trust">
              <Check width={14} height={14} />
              <span>R300 application fee on submission · No upfront tuition · 3-business-day response</span>
            </div>
          </div>
        </div>

        {/* Accreditation badges - bottom-right of the hero. Filtered white to
            sit cleanly on the dark photo. Hidden on small screens to keep the
            headline + CTAs uncluttered. */}
        <div className="flagship-hero-badges" aria-label="Accreditations and certifications">
          <span className="flagship-hero-badges-label">Accredited by</span>
          <div className="flagship-hero-badges-row">
            <Image
              src="/badge-che.png"
              alt="Council on Higher Education - Accredited course"
              width={120}
              height={120}
              className="flagship-hero-badge"
              sizes="(max-width: 880px) 0px, 64px"
            />
            <Image
              src="/badge-qcto.png"
              alt="Quality Council for Trades and Occupations"
              width={120}
              height={120}
              className="flagship-hero-badge"
              sizes="(max-width: 880px) 0px, 64px"
            />
            <Image
              src="/badge-he.jpeg"
              alt="Higher Education accreditation"
              width={120}
              height={120}
              className="flagship-hero-badge"
              sizes="(max-width: 880px) 0px, 64px"
            />
          </div>
        </div>
      </section>

      {/* ===== AT-A-GLANCE STATS STRIP ===== */}
      <section className={`flagship-stats accent-${accent}`}>
        <div className="container">
          <div className="flagship-stats-grid">
            <div className="flagship-stat">
              <span className="flagship-stat-label">Monthly</span>
              <span className="flagship-stat-value">{monthly}</span>
              <span className="flagship-stat-foot">tuition</span>
            </div>
            <div className="flagship-stat">
              <span className="flagship-stat-label">Duration</span>
              <span className="flagship-stat-value">{duration}</span>
              <span className="flagship-stat-foot">blended · online</span>
            </div>
            <div className="flagship-stat">
              <span className="flagship-stat-label">NQF Level</span>
              <span className="flagship-stat-value">{nqf}</span>
              <span className="flagship-stat-foot">{awardingBody ?? "Higher Education"}</span>
            </div>
            <div className="flagship-stat">
              <span className="flagship-stat-label">Credits</span>
              <span className="flagship-stat-value">{credits}</span>
              <span className="flagship-stat-foot">{saqa ? `SAQA ID ${saqa}` : "Higher Education"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEXT INTAKE - start date + applications close ===== */}
      {(startDate || applicationsClose) && (
        <section className={`flagship-intake accent-${accent}`} aria-label="Next intake">
          <div className="container">
            <div className="flagship-intake-card">
              <span className="flagship-intake-label">Next intake</span>
              <div className="flagship-intake-grid">
                {startDate && (
                  <div className="flagship-intake-item">
                    <span className="flagship-intake-item-label">Start date</span>
                    <span className="flagship-intake-item-value">{startDate}</span>
                  </div>
                )}
                {applicationsClose && (
                  <div className="flagship-intake-item urgent">
                    <span className="flagship-intake-item-label">Applications close</span>
                    <span className="flagship-intake-item-value">{applicationsClose}</span>
                  </div>
                )}
                {duration && (
                  <div className="flagship-intake-item">
                    <span className="flagship-intake-item-label">Duration</span>
                    <span className="flagship-intake-item-value">{duration}</span>
                  </div>
                )}
              </div>
              <a href="#apply" className="flagship-intake-cta">
                Apply now <ArrowRight />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ===== TWO-COLUMN BODY (content + sticky sidebar) ===== */}
      <div className="flagship-body container">
        <div className="flagship-main">
          {/* ABOUT */}
          <Reveal as="div" className="flagship-section">
            <span className={`flagship-eyebrow accent-${accent}`}>
              <span className="dot" /> About the programme
            </span>
            <h2 className="flagship-section-title">What this programme is for.</h2>
            <p className="flagship-prose-lead">{p.about}</p>
            {p.aboutFootnote && (
              <aside
                className="flagship-about-footnote"
                role="note"
                dangerouslySetInnerHTML={{ __html: p.aboutFootnote }}
              />
            )}
          </Reveal>

          {/* WHY THIS PROGRAMME (benefits) */}
          {p.benefits && p.benefits.length > 0 && (
            <Reveal as="div" className="flagship-section">
              <span className={`flagship-eyebrow accent-${accent}`}>
                <span className="dot" /> Why this programme
              </span>
              <h2 className="flagship-section-title">Built for completion, not just enrolment.</h2>
              <div className="flagship-benefits">
                {p.benefits.map((b, i) => {
                  const Icon = benefitIcons[i % benefitIcons.length];
                  return (
                    <div key={i} className="flagship-benefit">
                      <span className={`flagship-benefit-icon accent-${accent}`} aria-hidden>
                        <Icon />
                      </span>
                      <p dangerouslySetInnerHTML={{ __html: b }} />
                    </div>
                  );
                })}
              </div>
            </Reveal>
          )}

          {/* CURRICULUM */}
          {p.modules && p.modules.length > 0 && (
            <Reveal as="div" className="flagship-section">
              <span className={`flagship-eyebrow accent-${accent}`}>
                <span className="dot" /> Curriculum
              </span>
              <h2 className="flagship-section-title">What you&apos;ll learn.</h2>
              {p.modulesNote && <p className="flagship-section-intro">{p.modulesNote}</p>}
              <div className="flagship-modules">
                {p.modules.map((m, i) => (
                  <div key={i} className="flagship-module">
                    <span className="flagship-module-num">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flagship-module-body">
                      <h3>{m}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {/* CAREER PATHWAYS (HCIB) */}
          {p.pathways && p.pathways.length > 0 && (
            <Reveal as="div" className="flagship-section">
              <span className={`flagship-eyebrow accent-${accent}`}>
                <span className="dot" /> Specialisations
              </span>
              <h2 className="flagship-section-title">Career pathways.</h2>
              <p className="flagship-section-intro">
                Choose a focus aligned to where you want your career to go.
              </p>
              <div className="flagship-pathways">
                {p.pathways.map((path, i) => {
                  const Icon = pathwayIcons[i % pathwayIcons.length];
                  return (
                    <div key={i} className={`flagship-pathway accent-${accent}`}>
                      <span className="flagship-pathway-icon" aria-hidden>
                        <Icon />
                      </span>
                      <span className="flagship-pathway-num">P{String(i + 1).padStart(2, "0")}</span>
                      <h3>{path}</h3>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          )}

          {/* WHO IT'S FOR */}
          {p.audience && p.audience.length > 0 && (
            <Reveal as="div" className="flagship-section">
              <span className={`flagship-eyebrow accent-${accent}`}>
                <span className="dot" /> Who it&apos;s for
              </span>
              <h2 className="flagship-section-title">Designed for.</h2>
              <div className="flagship-audiences">
                {p.audience.map((a, i) => {
                  const Icon = audienceIcons[i % audienceIcons.length];
                  // Audience copy in data is HTML - split first <strong> as title, rest as description.
                  const strongMatch = a.match(/<strong>([^<]+)<\/strong>(.*)/);
                  const title = strongMatch ? strongMatch[1] : a;
                  const tail = strongMatch ? strongMatch[2].trim() : "";
                  return (
                    <div key={i} className="flagship-audience">
                      <span className={`flagship-audience-icon accent-${accent}`} aria-hidden>
                        <Icon />
                      </span>
                      <h3>{title}</h3>
                      {tail && <p>{tail}</p>}
                    </div>
                  );
                })}
              </div>
            </Reveal>
          )}

          {/* WHERE IT TAKES YOU (outcomes) */}
          {p.outcomes && p.outcomes.length > 0 && (
            <Reveal as="div" className="flagship-section">
              <span className={`flagship-eyebrow accent-${accent}`}>
                <span className="dot" /> Outcomes
              </span>
              <h2 className="flagship-section-title">Where this takes you.</h2>
              <div className="flagship-outcomes">
                {p.outcomes.map((o, i) => (
                  <div key={i} className={`flagship-outcome accent-${accent}`}>
                    <span className="flagship-outcome-icon" aria-hidden>
                      <Trophy />
                    </span>
                    <span className="flagship-outcome-text">{o}</span>
                    <ArrowRight className="flagship-outcome-arrow" />
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {/* HOW THE JOURNEY WORKS */}
          <Reveal as="div" className="flagship-section">
            <span className={`flagship-eyebrow accent-${accent}`}>
              <span className="dot" /> The journey
            </span>
            <h2 className="flagship-section-title">From application to graduation.</h2>
            <div className="flagship-journey">
              <div className="flagship-journey-step">
                <div className="flagship-journey-num">01</div>
                <h3>Apply</h3>
                <p>Simple online application. R300 application fee on submission. Admissions responds within 3 business days.</p>
              </div>
              <div className="flagship-journey-step">
                <div className="flagship-journey-num">02</div>
                <h3>Learn</h3>
                <p>Structured 12-month journey on CPSLearn. Modules, milestones and assessments with feedback returned within minutes.</p>
              </div>
              <div className="flagship-journey-step">
                <div className="flagship-journey-num">03</div>
                <h3>Graduate</h3>
                <p>Walk away with a recognised qualification, evidence of competency, and a credential employers know.</p>
              </div>
            </div>
          </Reveal>

          {/* FAQ */}
          {p.faqs && p.faqs.length > 0 && (
            <Reveal as="div" className="flagship-section">
              <span className={`flagship-eyebrow accent-${accent}`}>
                <span className="dot" /> Common questions
              </span>
              <h2 className="flagship-section-title">FAQ.</h2>
              <div className="flagship-faqs">
                {p.faqs.map((f, i) => (
                  <details key={i} className="flagship-faq" open={i === 0}>
                    <summary>
                      <span>{f.q}</span>
                      <span className="flagship-faq-icon" aria-hidden>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9, 12 15, 18 9" />
                        </svg>
                      </span>
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          )}
        </div>

        {/* ===== STICKY SIDEBAR (DESKTOP) ===== */}
        <aside className="flagship-sidebar">
          <div className={`flagship-sticky accent-${accent}`}>
            <span className="flagship-sticky-label">Apply for {shortTitle}</span>
            <div className="flagship-sticky-price">
              <span className="big">{monthly}</span>
              <span className="suffix">/month</span>
            </div>
            <ul className="flagship-sticky-facts">
              {startDate && (
                <li><CheckSmall /> <strong>Starts {startDate}</strong></li>
              )}
              {applicationsClose && (
                <li className="urgent"><CheckSmall /> Apply by {applicationsClose}</li>
              )}
              <li><CheckSmall /> {duration} · {nqf ? `NQF ${nqf}` : "Higher Education"}</li>
              <li><CheckSmall /> {credits} credits{saqa ? ` · SAQA ${saqa}` : ""}</li>
              <li><CheckSmall /> R300 application fee on submission</li>
              <li><CheckSmall /> No upfront tuition</li>
            </ul>
            <a href={applyHref} className={`flagship-sticky-cta accent-${accent}`}>
              Apply now <ArrowRight />
            </a>
            <p className="flagship-sticky-note">
              Speak to admissions on{" "}
              <a href="tel:+27117891957">+27 11 789 1957</a> or{" "}
              <a href="mailto:applications@cps.co.za">applications@cps.co.za</a>
            </p>
          </div>
        </aside>
      </div>

      {/* ===== APPLY BAND ===== */}
      <section id="apply" className="flagship-apply">
        <div className="container">
          <Spotlight as="div" className={`flagship-apply-card accent-${accent}`}>
            <div>
              <span className="flagship-apply-eyebrow">Ready to start?</span>
              <h2>Apply for {p.title}.</h2>
              <p>
                No upfront tuition. A R300 application fee is payable upon completing your application - not
                after acceptance. The admissions team will respond within 3 business days.
              </p>
            </div>
            <div className="flagship-apply-actions">
              <a href={applyHref} className="flagship-apply-cta-primary">
                Apply now <ArrowRight />
              </a>
            </div>
          </Spotlight>
        </div>
      </section>

      {/* ===== STICKY MOBILE APPLY BAR ===== */}
      <div className={`flagship-mobile-bar accent-${accent}`} aria-hidden>
        <div className="flagship-mobile-bar-inner">
          <div>
            <span className="flagship-mobile-bar-label">{shortTitle}</span>
            <span className="flagship-mobile-bar-price">{monthly}/mo</span>
          </div>
          <a href="#apply" className="flagship-mobile-bar-cta">
            Apply <ArrowRight />
          </a>
        </div>
      </div>
    </main>
  );
}
