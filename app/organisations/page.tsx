import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Clock,
  TrendingUp,
} from "@/components/icons";
import { CredentialsBand } from "@/components/credentials-band";
import { ClientLogos } from "@/components/client-logos";
import { ExperienceAccordion } from "@/components/experience-accordion";
import { BenefitsSlider } from "@/components/benefits-slider";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { Spotlight } from "@/components/spotlight";

export const metadata: Metadata = {
  title: "For Organisations",
  description:
    "For 25 years, CPS has been the learning partner financial services counts on - specialists in banking and insurance. Accredited workforce education for banks, insurers, broker networks and regulated FS organisations.",
};

export default function OrganisationsHome() {
  return (
    <main>
      {/* HERO - Microsoft 365 image */}
      <section className="hero">
        <div className="hero-fallback" />
        <div className="hero-photo hero-photo-org" />
        <div className="hero-bg" />

        <div className="container">
          <div className="hero-grid">
            <span className="eyebrow hero-fade-in" style={{ animationDelay: "0ms" }}>
              <span className="dot" /> For Organisations &nbsp;//&nbsp; Workforce Education
            </span>
            <h1 className="hero-headline">
              <span className="hero-line">Build the people</span>
              <span className="hero-line"><span className="accent-word">financial services</span></span>
              <span className="hero-line">counts on.</span>
            </h1>
            <p className="hero-sub hero-fade-in">
              For 25 years we&apos;ve done one thing: build people for financial services - specialists in
              banking and insurance. The banks, insurers and broker networks that hire from our programmes
              are the same ones we&apos;ve worked alongside for two decades to design them. CPS delivers
              accredited workforce education the sector already recognises by name - programmes that build
              capability, support compliance and produce measurable progress.
            </p>

            <div className="hero-cta-row hero-fade-in">
              <Link href="/contact#partnerships" className="btn btn-yellow btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                Request a conversation <ArrowRight />
              </Link>
              <Link href="/organisations/cpslearn" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Explore CPSLearn for organisations
              </Link>
            </div>

            <div className="hero-stats hero-fade-in">
              <div className="item">
                <div className="num"><CountUp to={30000} /><sup>+</sup></div>
                <div className="lbl">Professionals trained</div>
              </div>
              <div className="item">
                <div className="num"><CountUp to={85} suffix="%+" /></div>
                <div className="lbl">Programme completion</div>
              </div>
              <div className="item">
                <div className="num">L1</div>
                <div className="lbl">B-BBEE contributor</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* CLIENT LOGOS */}
      <ClientLogos label="Banks, insurers and financial services groups we&rsquo;ve built people for." />

      {/* SUPPORTING PARAGRAPH BAND - centered, breathing room above + below */}
      <section style={{ padding: "120px 0 120px" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <Reveal>
            <p style={{
              fontSize: "clamp(20px, 1.6vw, 26px)",
              color: "var(--ink)",
              lineHeight: 1.55,
              fontWeight: 400,
              textAlign: "center",
              letterSpacing: "-0.005em",
            }}>
              Most organisations don&apos;t need another training vendor.
            </p>
            <p style={{
              fontSize: "clamp(20px, 1.6vw, 26px)",
              color: "var(--ink)",
              lineHeight: 1.55,
              fontWeight: 400,
              textAlign: "center",
              letterSpacing: "-0.005em",
              marginTop: 24,
            }}>
              We&apos;re not a generalist training company with a finance module. Financial services is the
              only thing we do, with deep specialism in banking and insurance. That focus has built decades-long
              working relationships with the banks, insurers and broker networks that hire from our programmes -
              the same relationships that shape what we teach, so the qualifications we award are the ones your
              sector already recognises.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CREDENTIALS */}
      <CredentialsBand />

      {/* WHAT CPS DOES DIFFERENTLY */}
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> What 25 years gets you</span>
              <h2>A learning partner who knows the sector. Not a once-off training provider.</h2>
              <p>
                Accredited programmes, structured learning journeys, facilitator support, student tracking
                and workplace relevance - all built by a team that&apos;s spent its career inside financial
                services, with deep specialism in banking and insurance. The result is a more accountable
                approach to workforce education.
              </p>
            </div>
          </Reveal>

          <div className="platform-grid cols-3">
            <Reveal as="div" className="feat-card" delay={0}>
              <div><div className="icon"><ClipboardCheck /></div></div>
              <div>
                <h4>Starts with the business problem</h4>
                <p>CPS does not begin with a catalogue. We start by understanding the capability gap, the student audience, the business context and the success measures that matter.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="feat-card" delay={80}>
              <div><div className="icon" style={{ background: "rgba(144,19,254,0.18)", color: "#7B2EFF" }}><Check /></div></div>
              <div>
                <h4>Builds formal learning pathways</h4>
                <p>Programmes are aligned to occupational and higher education frameworks, helping organisations invest in recognised and structured development.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="feat-card" delay={160}>
              <div><div className="icon" style={{ background: "rgba(255,255,0,0.18)", color: "#6B6B00" }}><TrendingUp /></div></div>
              <div>
                <h4>Manages student progress</h4>
                <p>Student progress is tracked throughout the journey. This creates visibility and allows support to be directed where it is needed.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="feat-card" delay={240}>
              <div><div className="icon"><Check /></div></div>
              <div>
                <h4>Supports workplace application</h4>
                <p>The value of learning is not only what people know after a programme. It is what changes in how they think, act and perform at work.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="feat-card" delay={320}>
              <div><div className="icon" style={{ background: "rgba(144,19,254,0.18)", color: "#7B2EFF" }}><TrendingUp /></div></div>
              <div>
                <h4>Measures development</h4>
                <p>CPS tracks progress across selected knowledge and behavioural competency areas, helping organisations move closer to evidence-based learning investment.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="feat-card" delay={400}>
              <div><div className="icon" style={{ background: "rgba(255,255,0,0.18)", color: "#6B6B00" }}><Check /></div></div>
              <div>
                <h4>Supports transformation &amp; SDL</h4>
                <p>CPS programmes can support workforce transformation, skills development planning and capability building in regulated sectors.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MANAGED DELIVERY - image-backed, blocks pinned to the bottom */}
      <section className="managed-delivery">
        <div className="managed-delivery-photo" aria-hidden />
        <div className="managed-delivery-overlay" aria-hidden />
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Managed delivery</span>
              <h2>What CPS helps manage for your organisation</h2>
              <p>
                For organisations, the value of CPS is not only the programme content. It is the structure
                around the programme: how students are onboarded, supported, tracked and guided through
                completion.
              </p>
            </div>
          </Reveal>

          <div className="managed-grid">
            {[
              { title: "Programme alignment", desc: "Programmes are aligned to defined capability needs and workforce goals before launch." },
              { title: "Cohort onboarding", desc: "Students are introduced to the programme, platform and expectations together." },
              { title: "Progress tracking", desc: "Visibility into where students are in the journey, throughout delivery." },
              { title: "Facilitator support", desc: "Where applicable, facilitator and programme team support is coordinated across cohorts." },
              { title: "Assessment & moderation", desc: "Structured workflows that meet academic and regulatory requirements." },
              { title: "Completion visibility", desc: "Stakeholders see who is on track, who needs support and who has completed." },
              { title: "Outcome reporting", desc: "Reporting connects learning activity to development and outcomes." },
              { title: "SDL & capability support", desc: "Programmes support skills development planning and workforce capability." },
            ].map((item, i) => (
              <Reveal key={item.title} as="div" className="phase" delay={i * 80}>
                <div className="phase-num">{`MANAGE ${String(i + 1).padStart(2, "0")}`}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOUR STAFF CAN EXPECT - accordion */}
      <ExperienceAccordion />

      {/* WHO CPS WORKS WITH */}
      <section className="section-tinted">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-purple)" }} /> Who CPS works with</span>
              <h2>Built for the sector. Trusted by the people who run it.</h2>
            </div>
          </Reveal>

          <BenefitsSlider>
            <div className="audience-card">
              <div className="head-row"><h3>Banks &amp; financial services</h3><span className="tag pill pill-blue">Tier-1</span></div>
              <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 20 }}>
                For L&amp;D and skills development teams responsible for professional development, qualification pathways, compliance-aligned learning and workforce capability across large teams.
              </p>
              <ul>
                <li>Banking qualifications</li>
                <li>Leadership development</li>
                <li>Business banking capability</li>
                <li>Client-facing team development</li>
                <li>Skills development planning</li>
              </ul>
            </div>
            <div className="audience-card">
              <div className="head-row"><h3>Insurance &amp; broker networks</h3><span className="tag pill pill-yellow">Regulated</span></div>
              <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 20 }}>
                For regulated advisory environments that need structured qualification pathways, scalable cohort delivery and stronger advisor capability.
              </p>
              <ul>
                <li>Long-term insurance qualification pathways</li>
                <li>Advisor onboarding</li>
                <li>Broker network development</li>
                <li>Compliance-aligned learning</li>
              </ul>
            </div>
            <div className="audience-card">
              <div className="head-row"><h3>HR &amp; talent leaders</h3><span className="tag pill pill-purple">People</span></div>
              <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 20 }}>
                For people teams building progression pathways, retention strategies and future-fit capability.
              </p>
              <ul>
                <li>Emerging leader development</li>
                <li>Career pathway planning</li>
                <li>Workplace readiness</li>
                <li>Talent progression</li>
              </ul>
            </div>
            <div className="audience-card">
              <div className="head-row"><h3>Risk &amp; compliance</h3><span className="tag pill pill-purple">Regulated</span></div>
              <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 20 }}>
                For risk, compliance and assurance teams in regulated financial services environments
                that need capability development tied to recognised qualifications and demonstrable competency.
              </p>
              <ul>
                <li>Organisational risk practitioner pathways</li>
                <li>Compliance-aligned learning journeys</li>
                <li>Competency tracking and reporting</li>
                <li>Workforce capability evidence for regulators</li>
              </ul>
            </div>
          </BenefitsSlider>
        </div>
      </section>

      {/* PRIMARY ORGANISATIONAL PROGRAMMES - 6 cards focused on workforce capability.
          HCIB and ACL6 are intentionally NOT featured here. */}
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Primary workforce programmes</span>
              <h2>The programmes the sector actually pays for.</h2>
              <p>
                We build financial services capability - in banking, insurance and the firms that connect
                them - through three categories: occupational qualifications delivered as workplace-integrated
                learnerships, CHE-accredited higher education qualifications, and focused skills programmes
                that close specific capability gaps.
              </p>
            </div>
            <Link href="/organisations/programmes" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center", gap: 8 }}>
              See all workforce programmes <ArrowRight />
            </Link>
          </Reveal>

          <div className="prog-grid cols-3 prog-category-grid">
            <Spotlight as="div">
              <Link href="/organisations/programmes#occupational" className="prog-card featured prog-category-card" style={{ display: "flex" }}>
                <div className="prog-card-top">
                  <div className="pill-row">
                    <span className="pill pill-blue">QCTO</span>
                    <span className="pill">Workplace-integrated</span>
                  </div>
                </div>
                <h3 className="prog-title">Occupational Qualifications (Learnerships)</h3>
                <p className="prog-desc">
                  QCTO-aligned occupational qualifications delivered as workplace-integrated
                  learnerships. Built around real workforce capability in banking, insurance,
                  investment and risk.
                </p>
                <div className="prog-meta">
                  <div><strong>6</strong><span>programmes</span></div>
                  <div><strong>NQF 5-6</strong><span>QCTO</span></div>
                  <div><strong>12-18 mo</strong><span>workplace</span></div>
                </div>
                <span className="prog-cta">Explore occupational pathways <ArrowRight width={14} height={14} /></span>
              </Link>
            </Spotlight>

            <Spotlight as="div">
              <Link href="/organisations/programmes#higher-education" className="prog-card featured prog-category-card" style={{ display: "flex" }}>
                <div className="prog-card-top">
                  <div className="pill-row">
                    <span className="pill pill-blue">Higher Education</span>
                    <span className="pill">CHE accredited</span>
                  </div>
                </div>
                <h3 className="prog-title">Higher Education Qualifications</h3>
                <p className="prog-desc">
                  CHE-accredited higher-education credentials available for cohort delivery via
                  employer sponsorship. Suited to entry-level banking talent and emerging-leader
                  pipelines.
                </p>
                <div className="prog-meta">
                  <div><strong>2</strong><span>programmes</span></div>
                  <div><strong>NQF 5-6</strong><span>CHE accredited</span></div>
                  <div><strong>12 months</strong><span>blended / online</span></div>
                </div>
                <span className="prog-cta">Explore HE qualifications <ArrowRight width={14} height={14} /></span>
              </Link>
            </Spotlight>

            <Spotlight as="div">
              <Link href="/organisations/programmes#skills" className="prog-card featured prog-category-card" style={{ display: "flex" }}>
                <div className="prog-card-top">
                  <div className="pill-row">
                    <span className="pill pill-purple">Skills</span>
                    <span className="pill">3-6 months</span>
                  </div>
                </div>
                <h3 className="prog-title">Skills Programmes</h3>
                <p className="prog-desc">
                  Short, focused programmes that target specific capability shifts in sales,
                  leadership, client experience and digital change. Designed and deployed in
                  weeks rather than quarters.
                </p>
                <div className="prog-meta">
                  <div><strong>8</strong><span>programmes</span></div>
                  <div><strong>3-6 mo</strong><span>duration</span></div>
                  <div><strong>Cohort</strong><span>delivery</span></div>
                </div>
                <span className="prog-cta">Explore skills programmes <ArrowRight width={14} height={14} /></span>
              </Link>
            </Spotlight>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODEL - anchor target */}
      <section id="partnership-model" className="section-dark">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Partnership model</span>
              <h2>A four-phase partnership, not a transaction.</h2>
              <p>
                We&apos;ve been refining how we work with the sector for 25 years. Programmes are aligned
                before launch, managed during delivery and connected back to outcomes after implementation -
                because that&apos;s what produces capability that lasts.
              </p>
            </div>
          </Reveal>

          <div className="phase-track">
            <Reveal as="div" className="phase-track-step" delay={0}>
              <div className="num">01</div>
              <div className="label">Phase 01</div>
              <h3>Strategic alignment</h3>
              <p>Understand the organisational challenge, student audience, workforce goals and success metrics. The programme is built around the business problem, not selected from a list.</p>
            </Reveal>
            <Reveal as="div" className="phase-track-step" delay={140}>
              <div className="num">02</div>
              <div className="label">Phase 02</div>
              <h3>Design &amp; implementation</h3>
              <p>Map the right qualification or skills pathway, set up cohorts, prepare platform access, confirm support structures and align stakeholders before launch.</p>
            </Reveal>
            <Reveal as="div" className="phase-track-step" delay={280}>
              <div className="num">03</div>
              <div className="label">Phase 03</div>
              <h3>Active management</h3>
              <p>Track student progress, monitor engagement, identify risk and intervene where needed. Completion is treated as a managed outcome, not a hopeful result.</p>
            </Reveal>
            <Reveal as="div" className="phase-track-step" delay={420}>
              <div className="num">04</div>
              <div className="label">Phase 04</div>
              <h3>Performance integration</h3>
              <p>Connect learning outcomes back to workplace behaviour, team capability and business performance indicators where possible.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMMERCIAL IMPACT - why this matters commercially */}
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-purple)" }} /> Commercial impact</span>
              <h2>Why this matters commercially.</h2>
              <p>
                When learning doesn&apos;t translate into capability, the cost isn&apos;t just training budget.
                It&apos;s lost time, lost momentum, lost manager confidence, and a workforce that can&apos;t
                move the way the business needs it to.
              </p>
              <p style={{ marginTop: 12 }}>
                For banks, insurers and regulated FS groups, capability gaps show up faster - in client
                experience, in compliance, in sales performance and in progression planning.
              </p>
              <p style={{ marginTop: 12 }}>
                CPS reduces that risk by managing the full learning journey - from programme alignment to
                completion - with a team that has spent 25 years inside the sector and knows what
                actually moves the needle.
              </p>
            </div>
          </Reveal>
          <div className="phases-grid cols-4">
            <Reveal as="div" className="phase" delay={0}>
              <div className="phase-num">IMPACT 01</div>
              <h3>Reduce wasted learning spend</h3>
              <p>Programmes are aligned to defined capability needs instead of disconnected training activity.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={100}>
              <div className="phase-num">IMPACT 02</div>
              <h3>Improve student follow-through</h3>
              <p>Structured journeys and progress visibility help reduce the risk of incomplete learning.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={200}>
              <div className="phase-num">IMPACT 03</div>
              <h3>Support manager confidence</h3>
              <p>Clearer visibility gives stakeholders a better understanding of where students are in the journey.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={300}>
              <div className="phase-num">IMPACT 04</div>
              <h3>Connect learning to performance</h3>
              <p>Programmes are designed to support workplace application, not attendance alone.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CPSLEARN PREVIEW */}
      <section className="section-tinted">
        <div className="container">
          <div className="diff-grid">
            <Reveal as="div">
              <span className="eyebrow"><span className="dot" /> CPSLearn preview</span>
              <h2 style={{ marginTop: 16 }}>The infrastructure behind the learning journey.</h2>
              <p style={{ marginTop: 24, fontSize: 17, color: "var(--muted)", lineHeight: 1.55 }}>
                CPSLearn gives organisations visibility into learning progress, assessment activity,
                moderation workflows and competency development. It helps L&amp;D and HR teams move from
                &ldquo;training delivered&rdquo; to &ldquo;capability tracked&rdquo;.
              </p>
              <div style={{ marginTop: 32 }}>
                <Link href="/organisations/cpslearn" className="btn btn-yellow btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Explore CPSLearn for organisations <ArrowRight />
                </Link>
              </div>
            </Reveal>
            <Reveal as="div" delay={140}>
              <div className="feature-list">
                <div className="feature-item"><div className="check"><Check /></div><div><h4>Cohort learning journeys</h4><p>Manage learning at scale rather than disconnected individual activity.</p></div></div>
                <div className="feature-item"><div className="check"><Check /></div><div><h4>Progress visibility</h4><p>Track completion risk and support needs across cohorts.</p></div></div>
                <div className="feature-item"><div className="check"><Check /></div><div><h4>Moderation &amp; quality processes</h4><p>Structured workflows that meet academic and regulatory requirements.</p></div></div>
                <div className="feature-item"><div className="check"><Clock /></div><div><h4>Competency development</h4><p>Pre and post measurement across selected knowledge and behavioural areas.</p></div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <Spotlight as="div" className="cta-band dark" style={{ background: "linear-gradient(135deg, #9013FE 0%, #5C0AA8 100%)" }}>
        <div className="cta-band-inner">
          <div className="cta-band-grid">
            <div>
              <span className="mono" style={{ color: "var(--cps-yellow)" }}>Let&apos;s talk</span>
              <h2 style={{ marginTop: 16, color: "white" }}>Bring us the capability gap. We&apos;ve seen it before.</h2>
              <p style={{ color: "rgba(255,255,255,0.85)" }}>
                Whether it&apos;s a leadership pipeline, an advisor network, business banking capability or
                a scaled learning programme - we&apos;ve built something close to it for someone in the
                sector. Tell us where you&apos;re trying to get to, and we&apos;ll help you map the path.
              </p>
              <div className="cta-band-actions" style={{ marginTop: 32 }}>
                <Link href="/contact#partnerships" className="btn btn-yellow btn-lg">Request a conversation</Link>
                <Link href="/organisations/programmes" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center" }}>See workforce programmes</Link>
              </div>
            </div>
            <div>
              <div className="mono" style={{ color: "rgba(255,255,255,0.6)", marginBottom: 12 }}>Direct contact</div>
              <a className="contact-link" href="mailto:organisations@cps.co.za" style={{ marginBottom: 8 }}>organisations@cps.co.za</a>
              <a className="contact-link" href="tel:+27117891957">+27 11 789 1957</a>
            </div>
          </div>
        </div>
      </Spotlight>
      <div style={{ height: 96 }} />
    </main>
  );
}
