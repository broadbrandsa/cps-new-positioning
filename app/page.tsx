import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Mail,
  Phone,
} from "@/components/icons";
import { CredentialsBand } from "@/components/credentials-band";
import { ClientLogos } from "@/components/client-logos";
import { ExperienceSection } from "@/components/experience-section";
import { HeroVideo } from "@/components/hero-video";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { Spotlight } from "@/components/spotlight";
import { getStudentProgrammes, valueStreamLabel } from "@/lib/programmes";

export default function StudentsHome() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-fallback" />
        <HeroVideo
          src="/7147176-hd_1280_720_25fps.mp4"
          poster="/hero-bg.jpg"
          playbackRate={0.75}
          className="hero-photo"
        />
        <div className="hero-bg" />

        <div className="container">
          <div className="hero-grid">
            <span className="eyebrow hero-fade-in" style={{ animationDelay: "0ms" }}>
              <span className="dot" /> #ShapeYourFuture &nbsp;//&nbsp; Accredited Qualifications
            </span>
            <h1 className="hero-headline">
              <span className="hero-line">Get the qualification</span>
              <span className="hero-line"><span className="accent-word">that moves your career</span></span>
              <span className="hero-line">forward.</span>
            </h1>
            <p className="hero-sub hero-fade-in">
              Study accredited banking, insurance, financial services and leadership programmes designed for South African
              professionals who want recognised credentials, practical knowledge and a clearer path forward.
            </p>

            <div className="hero-cta-row hero-fade-in">
              <Link href="/programmes" className="btn btn-yellow btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                Browse student programmes <ArrowRight />
              </Link>
              <Link href="/contact#admissions" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Talk to admissions
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* CLIENT LOGOS */}
      <ClientLogos label="CPS has worked with students, teams or programmes connected to leading South African and international financial services organisations." />

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
              Choosing a qualification is a serious decision. You need to know the programme is recognised,
              the learning journey is structured, and there is support to help you complete.
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
              CPS brings those pieces together through accredited programmes, guided learning pathways and
              more than 25 years of experience in financial services education.
            </p>
          </Reveal>
        </div>
      </section>

      <CredentialsBand />

      {/* WHAT TO EXPECT AS A CPS STUDENT */}
      <ExperienceSection variant="students" surface="tinted" />

      {/* CAREER VALUE - image-backed section, blocks pinned to bottom */}
      <section className="career-value">
        <div className="career-value-photo" aria-hidden />
        <div className="career-value-overlay" aria-hidden />
        <div className="container">
          <div className="career-grid">
            <Reveal as="div" className="phase" delay={0}>
              <div className="phase-num">VALUE 01</div>
              <h3>Build credibility</h3>
              <p>Gain a qualification aligned to recognised education and occupational frameworks.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={100}>
              <div className="phase-num">VALUE 02</div>
              <h3>Build confidence</h3>
              <p>Understand the concepts, language and expectations of financial services roles.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={200}>
              <div className="phase-num">VALUE 03</div>
              <h3>Build direction</h3>
              <p>Choose a programme linked to a specific career pathway, not a generic study option.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={300}>
              <div className="phase-num">VALUE 04</div>
              <h3>Build momentum</h3>
              <p>Follow a structured learning journey designed to help you stay on track and complete.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED STUDENT PROGRAMMES - 3 primary cards (HCIB, HCIBB, ACL) */}
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Featured student programmes</span>
              <h2>Three primary pathways. Pick the one that fits your next step.</h2>
              <p>
                Three 12-month higher-education qualifications designed for working South African
                professionals. Two banking pathways - a general foundation and a business-banking
                specialisation - plus a leadership credential. All three are CHE-accredited.
              </p>
            </div>
            <Link href="/programmes" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center", gap: 8 }}>
              See all programmes <ArrowRight />
            </Link>
          </Reveal>

          {/* 3-card equal-height grid - same component pattern as /programmes */}
          <div className="prog-grid student-prog-grid">
            {getStudentProgrammes().map((p) => {
              const nqf     = p.meta.find((m) => /nqf/i.test(m.lbl))?.val;
              const credits = p.meta.find((m) => /credit/i.test(m.lbl))?.val;
              const monthly = p.meta.find((m) => /monthly/i.test(m.lbl))?.val;
              const duration = p.meta.find((m) => /duration/i.test(m.lbl))?.val;
              const cardClass = p.accent === "purple" ? "companion-card" : "hero-card";
              return (
                <Spotlight as="div" key={p.slug}>
                  <Link href={`/programmes/${p.slug}`} className={`prog-card ${cardClass}`} style={{ display: "flex" }}>
                    <div className="prog-card-top">
                      <div className="pill-row">
                        <span className="pill pill-yellow">Primary Focus</span>
                        <span className={`pill ${p.valueStream === "universal" ? "pill-purple" : "pill-blue"}`}>
                          {valueStreamLabel(p.valueStream)}
                        </span>
                        {nqf && <span className="pill">NQF {nqf}</span>}
                      </div>
                    </div>
                    <h3 className="prog-title">{p.title}</h3>
                    <p className="prog-desc">{p.lede}</p>
                    <div className="prog-meta">
                      {monthly && <div><strong>{monthly}</strong><span>per month</span></div>}
                      {duration && <div><strong>{duration}</strong><span>blended / online</span></div>}
                      {nqf && <div><strong>NQF {nqf}</strong><span>{credits ? `${credits} credits` : "CHE accredited"}</span></div>}
                    </div>
                    <span className="prog-cta">View {p.shortTitle ?? p.title} <ArrowRight /></span>
                  </Link>
                </Spotlight>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHY COMPLETION MATTERS */}
      <section>
        <div className="container">
          <Reveal style={{ maxWidth: 720 }}>
            <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> Why completion matters</span>
            <h2 style={{ marginTop: 16 }}>Starting is important. Finishing is what changes your future.</h2>
            <p style={{ marginTop: 16, fontSize: 17 }}>
              A qualification only creates value when students complete it and can apply what they have
              learned. CPS places strong emphasis on structured journeys, support and progress tracking
              because these are the things that help students stay committed through the full programme.
            </p>
          </Reveal>
          <div className="stats-grid">
            <Reveal as="div" className="stat-card" delay={0}>
              <span className="mono">Professionals trained</span>
              <div>
                <div className="big"><CountUp to={29860} /><sup>+</sup></div>
                <div className="desc">Across more than two decades, CPS programmes have supported tens of thousands of South African professionals in building recognised capability.</div>
              </div>
            </Reveal>
            <Reveal as="div" className="stat-card" delay={120}>
              <span className="mono">Programme completion</span>
              <div>
                <div className="big"><CountUp to={85} /><sup>%+</sup></div>
                <div className="desc">CPS programmes achieve completion rates above the industry average through structured journeys, active support and progress monitoring.</div>
              </div>
            </Reveal>
            <Reveal as="div" className="stat-card" delay={240}>
              <span className="mono">In market</span>
              <div>
                <div className="big"><CountUp to={25} /><sup>y</sup></div>
                <div className="desc">More than 25 years of focused experience in financial services education, with deep relationships across the sector.</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CPSLEARN PREVIEW - DARK */}
      <section className="section-dark">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> CPSLearn preview</span>
              <h2>One place for your learning journey.</h2>
              <p>
                CPSLearn is the platform where your programme is delivered and managed. It brings together
                learning materials, assessments, feedback, progress visibility and support in one structured
                environment.
              </p>
            </div>
            <Link href="/cpslearn" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Explore CPSLearn for students <ArrowRight />
            </Link>
          </Reveal>

          <div className="platform-grid cols-3">
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={0}>
              <div><div className="icon"><ClipboardCheck /></div></div>
              <div><h4>Clear programme structure</h4><p>Modules, milestones and expectations laid out clearly.</p></div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={80}>
              <div><div className="icon" style={{ background: "rgba(144,19,254,0.22)", color: "#C5A0FF" }}><Check /></div></div>
              <div><h4>Assessment &amp; feedback</h4><p>Submit assessments and receive feedback within the platform.</p></div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={160}>
              <div><div className="icon" style={{ background: "rgba(255,255,0,0.18)", color: "var(--cps-yellow)" }}><Check /></div></div>
              <div><h4>Progress visibility</h4><p>See where you are in the journey and what still needs attention.</p></div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={240}>
              <div><div className="icon"><ClipboardCheck /></div></div>
              <div><h4>Support tracking</h4><p>Visibility helps CPS identify where students may need extra support.</p></div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={320}>
              <div><div className="icon" style={{ background: "rgba(144,19,254,0.22)", color: "#C5A0FF" }}><Check /></div></div>
              <div><h4>Mobile-friendly access</h4><p>CPSLearn works around your schedule and device.</p></div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={400}>
              <div><div className="icon" style={{ background: "rgba(255,255,0,0.18)", color: "var(--cps-yellow)" }}><Check /></div></div>
              <div><h4>Exam functionality</h4><p>Exam workflows for higher education programmes, where applicable.</p></div>
            </Reveal></Spotlight>
          </div>
        </div>
      </section>

      {/* BEFORE YOU APPLY - reassurance + checklist (white surface) */}
      <section>
        <div className="container">
          <div className="diff-grid">
            <Reveal as="div">
              <span className="eyebrow"><span className="dot" /> Before you apply</span>
              <h2 style={{ marginTop: 16 }}>We&apos;ll help you understand the next step before you commit.</h2>
              <p style={{ marginTop: 24, fontSize: 17, color: "var(--muted)", lineHeight: 1.6 }}>
                You do not need to have everything figured out before speaking to CPS. If you are unsure
                which programme fits your background, goals or current career stage, the admissions team
                can help you make sense of the options.
              </p>
            </Reveal>
            <Reveal as="div" delay={120}>
              <div style={{ background: "var(--card)", borderRadius: 20, padding: 32, border: "1px solid var(--line)" }}>
                <span className="mono">Things admissions can help you with</span>
                <ul style={{ marginTop: 20, listStyle: "none", display: "flex", flexDirection: "column", gap: 12, padding: 0 }}>
                  {[
                    "Which programme fits your career goal",
                    "What the entry requirements are",
                    "What documents you may need",
                    "What the payment structure looks like",
                    "What happens after your enquiry or application",
                    "Who to contact if you need help",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, lineHeight: 1.45, color: "var(--ink)" }}>
                      <span style={{ display: "grid", placeItems: "center", flexShrink: 0, width: 22, height: 22, borderRadius: 999, background: "rgba(16,185,129,0.18)", color: "#0A6E4B", marginTop: 1 }}>
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
      </section>

      {/* FINAL CTA */}
      <div className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-grid">
            <Reveal as="div">
              <span className="mono" style={{ color: "#0B6E94" }}>#ShapeYourFuture</span>
              <h2 style={{ marginTop: 16 }}>Ready to take the next step?</h2>
              <p>
                Tell us what you want to study, and the admissions team will help you understand the right
                programme, requirements and next step.
              </p>
              <div className="cta-band-actions">
                <Link href="/programmes" className="btn btn-yellow btn-lg">Browse student programmes</Link>
              </div>
            </Reveal>
            <Reveal as="div" delay={140}>
              <div className="mono" style={{ marginBottom: 12 }}>Talk to admissions</div>
              <a href="mailto:applications@cps.co.za" className="contact-link primary" style={{ marginBottom: 8 }}>
                <Mail /> applications@cps.co.za
              </a>
              <a href="tel:+27117891957" className="contact-link">
                <Phone /> +27 11 789 1957
              </a>
            </Reveal>
          </div>
        </div>
      </div>
      <div style={{ height: 96 }} />
    </main>
  );
}
