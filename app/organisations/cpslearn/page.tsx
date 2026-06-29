import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Clock,
  Layers,
  ShieldCheck,
  TrendingUp,
  Lightbulb,
  Calendar,
  Briefcase,
  Workflow,
  BarChart3,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { CountUp } from "@/components/count-up";

export const metadata: Metadata = {
  title: "CPSLearn Platform",
  description:
    "The CPSLearn Platform - the proprietary platform behind 25 years of CPS programme delivery in banking and financial services. Structured learning journeys, assessment workflows, moderation, progress tracking and reporting visibility for cohort delivery.",
};

export default function OrganisationsCPSLearn() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/organisations">Organisations</Link><span className="sep">/</span><span>CPSLearn Platform</span>
          </div>
          <div style={{ marginTop: 24, maxWidth: 880 }}>
            <span className="eyebrow"><span className="dot" /> CPSLearn Platform</span>
            <h1>The platform behind 25 years of cohort delivery in the sector.</h1>
            <p style={{ marginTop: 24, fontSize: 18, maxWidth: 720 }}>
              CPSLearn is the proprietary platform behind every CPS programme - built and refined for
              the structure, scrutiny and traceability that banking and financial services education
              demands. Structured learning journeys, assessment workflows, moderation, progress tracking
              and reporting visibility, in one place.
            </p>
            <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 16, maxWidth: 720 }}>
              For your L&amp;D and HR teams, the value isn&apos;t just that staff have somewhere to
              study. It&apos;s that you can see, cohort by cohort, who&apos;s on track, who needs
              support, and what capability is actually being built.
            </p>
          </div>

          <div className="hero-stats" style={{ marginTop: 48, maxWidth: 920 }}>
            <div className="item"><div className="num" style={{ fontSize: 28 }}>2,000–2,700</div><div className="lbl">Active students</div></div>
            <div className="item"><div className="num" style={{ fontSize: 28 }}>Proprietary</div><div className="lbl">CPS platform</div></div>
            <div className="item"><div className="num" style={{ fontSize: 28 }}>25 years</div><div className="lbl">of refinement</div></div>
            <div className="item"><div className="num" style={{ fontSize: 28 }}>Regulated</div><div className="lbl">learning environments</div></div>
          </div>
        </div>
      </section>

      {/* HERITAGE - split: text + dark stat card. Sits directly under the hero */}
      <section>
        <div className="container">
          <div className="cpslearn-heritage">
            <Reveal as="div" className="heritage-text">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-purple)" }} /> Heritage</span>
              <h2 style={{ marginTop: 16 }}>Built by the sector, for the sector.</h2>
              <p style={{ marginTop: 24, fontSize: 17, color: "var(--muted)", lineHeight: 1.6 }}>
                CPSLearn isn&apos;t a third-party LMS with our logo on it. It&apos;s our own platform,
                refined over 25 years against the specific demands of banking, insurance, investment and
                leadership education in South Africa.
              </p>
              <p style={{ marginTop: 16, fontSize: 17, color: "var(--ink)", lineHeight: 1.6, fontWeight: 500 }}>
                The result: a delivery environment shaped by how the sector actually develops people,
                not by what a generic LMS happens to support.
              </p>
            </Reveal>

            <Reveal as="div" className="heritage-stat" delay={140}>
              <Spotlight as="div">
                <div className="heritage-card">
                  <span className="mono">In market</span>
                  <div className="big-stat">
                    <CountUp to={25} /><sup>y</sup>
                  </div>
                  <p>Of focused experience in financial services education.</p>
                  <ul>
                    <li><Calendar width={14} height={14} /> Designed across cohorts</li>
                    <li><Briefcase width={14} height={14} /> Built around banking + insurance reality</li>
                    <li><Workflow width={14} height={14} /> Refined through real delivery</li>
                    <li><BarChart3 width={14} height={14} /> Shaped by completion data</li>
                  </ul>
                </div>
              </Spotlight>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BUILT FOR REAL STUDENTS - editorial-grid, mirrors students-side CPSLearn */}
      <section>
        <div className="container">
          <div className="editorial-grid">
            <Reveal as="div" className="editorial-eyebrow">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-purple)" }} /> Built for real students</span>
            </Reveal>
            <Reveal as="div" className="editorial-headline" delay={120}>
              <h2>It doesn&apos;t assume everyone learns the same way.</h2>
            </Reveal>
            <Reveal as="div" className="editorial-body" delay={200}>
              <p>
                Not every student starts at the same level. Some parts feel straightforward. Others don&apos;t.
                CPSLearn is built to support that reality - helping identify where each student needs more
                focus, so cohort time is spent where it actually matters.
              </p>
              <p style={{ marginTop: 20, color: "var(--ink)", fontWeight: 500 }}>
                Students aren&apos;t just moving through content. They&apos;re building capability where
                they need it most.
              </p>
            </Reveal>
            <Reveal as="div" className="editorial-aside" delay={280}>
              <div className="editorial-pull">
                <span className="mono">In other words</span>
                <p>The platform meets each student where they are - not where it assumes they should be.</p>
                <span className="brand-mark" aria-hidden><Lightbulb /></span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> What CPSLearn supports</span>
              <h2>The infrastructure your L&amp;D and HR teams need.</h2>
            </div>
          </Reveal>

          <div className="platform-grid cols-3">
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={0}>
              <div><div className="icon"><Layers /></div></div>
              <div>
                <h4>Cohort learning journeys</h4>
                <p>Programmes can be structured across cohorts, helping organisations manage learning at scale rather than relying on disconnected individual activity.</p>
              </div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={80}>
              <div><div className="icon" style={{ background: "rgba(144,19,254,0.22)", color: "#C5A0FF" }}><ClipboardCheck /></div></div>
              <div>
                <h4>Assessment workflows</h4>
                <p>Assessment submission, marking, feedback and moderation processes are supported within the platform environment.</p>
              </div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={160}>
              <div><div className="icon" style={{ background: "rgba(255,255,0,0.18)", color: "var(--cps-yellow)" }}><TrendingUp /></div></div>
              <div>
                <h4>Progress visibility</h4>
                <p>Student progress can be tracked through the journey, helping CPS and organisational stakeholders understand completion risk and support needs.</p>
              </div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={240}>
              <div><div className="icon" style={{ background: "rgba(16,185,129,0.20)", color: "#34D399" }}><ShieldCheck /></div></div>
              <div>
                <h4>Moderation &amp; quality processes</h4>
                <p>CPSLearn supports academic and regulatory quality requirements through structured moderation and review workflows.</p>
              </div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={320}>
              <div><div className="icon" style={{ background: "rgba(144,19,254,0.22)", color: "#C5A0FF" }}><Check /></div></div>
              <div>
                <h4>Competency development</h4>
                <p>Programmes can include pre and post measurement across selected knowledge and behavioural competency areas.</p>
              </div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={400}>
              <div><div className="icon" style={{ background: "rgba(255,255,0,0.18)", color: "var(--cps-yellow)" }}><Clock /></div></div>
              <div>
                <h4>Exam functionality</h4>
                <p>Where applicable, CPSLearn supports exam functionality for higher education programmes.</p>
              </div>
            </Reveal></Spotlight>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="diff-grid">
            <Reveal as="div">
              <span className="eyebrow"><span className="dot" /> Why this matters for organisations</span>
              <h2 style={{ marginTop: 16 }}>From training delivered to capability earned.</h2>
              <p style={{ marginTop: 24, fontSize: 17, color: "var(--muted)", lineHeight: 1.55 }}>
                Most organisations can report that training happened. Fewer can show whether the cohort
                progressed, completed or actually built the capability the programme was meant to build.
                CPSLearn closes that gap - so what you report is what your people can actually do.
              </p>
            </Reveal>
            <Reveal as="div" delay={120}>
              <span className="eyebrow"><span className="dot" /> Built for regulated learning</span>
              <h2 style={{ marginTop: 16 }}>Designed for environments where quality and compliance matter.</h2>
              <p style={{ marginTop: 24, fontSize: 17, color: "var(--muted)", lineHeight: 1.55 }}>
                Financial services education requires structure, quality assurance and traceability.
                CPSLearn supports the delivery environment needed for accredited and occupational
                education programmes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* A PLATFORM CONNECTED TO SUPPORT - closing band, mirrors students "What this means for you" */}
      <div className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-grid">
            <Reveal as="div">
              <span className="mono" style={{ color: "var(--cps-purple)" }}>A platform connected to support</span>
              <h2 style={{ marginTop: 16 }}>Technology alone does not create outcomes.</h2>
              <p style={{ marginTop: 16 }}>
                CPSLearn works because it&apos;s part of a broader delivery model. The platform supports
                the journey, while CPS teams, facilitators and support structures help students move
                through it.
              </p>
              <div className="cta-band-actions" style={{ marginTop: 24 }}>
                <Link href="/contact#partnerships" className="btn btn-yellow btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Discuss your team&apos;s learning journey <ArrowRight />
                </Link>
                <Link href="/organisations/programmes" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center" }}>
                  See workforce programmes
                </Link>
              </div>
            </Reveal>

            <Reveal as="div" delay={140}>
              <div style={{ background: "var(--card)", borderRadius: 20, padding: 32, border: "1px solid var(--line)" }}>
                <span className="mono">What sits around the platform</span>
                <p style={{ marginTop: 8, fontSize: 16, color: "var(--ink)", fontWeight: 500, marginBottom: 20 }}>
                  CPSLearn is delivered, not just deployed.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, padding: 0 }}>
                  {[
                    "Programme delivery infrastructure",
                    "Cohort progress visibility",
                    "Quality + moderation workflows",
                    "CPS team support around the platform",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, lineHeight: 1.45, color: "var(--ink)" }}>
                      <span style={{ display: "grid", placeItems: "center", flexShrink: 0, width: 22, height: 22, borderRadius: 999, background: "rgba(144,19,254,0.18)", color: "var(--cps-purple)", marginTop: 1 }}>
                        <Check />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div style={{ height: 96 }} />
    </main>
  );
}
