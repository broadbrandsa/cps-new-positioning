import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { getStudentProgrammes, valueStreamLabel, type Programme } from "@/lib/programmes";

export const metadata: Metadata = {
  title: "Programmes for Students",
  description:
    "Three CHE-accredited pathways into banking and financial services - the Higher Certificate in Banking, the Business Banking specialisation, and the Advanced Certificate in Leadership. Built by the people the sector has counted on for 25 years.",
};

const students = getStudentProgrammes();

function StudentProgrammeCard({ p }: { p: Programme }) {
  const nqf = p.meta.find((m) => /nqf/i.test(m.lbl))?.val;
  const credits = p.meta.find((m) => /credit/i.test(m.lbl))?.val;
  const monthly = p.meta.find((m) => /monthly/i.test(m.lbl))?.val;
  const duration = p.meta.find((m) => /duration/i.test(m.lbl))?.val;
  const cardClass = p.accent === "purple" ? "companion-card" : "hero-card";
  return (
    <Spotlight as="div">
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
          {credits && <div><strong>NQF {nqf}</strong><span>{credits} credits</span></div>}
        </div>
        <span className="prog-cta">View {p.shortTitle ?? p.title} <ArrowRight /></span>
      </Link>
    </Spotlight>
  );
}

export default function StudentsProgrammes() {
  return (
    <main>
      <section className="page-hero has-photo">
        <div
          className="page-hero-photo"
          aria-hidden
          style={{ backgroundImage: "url('/brooke-cagle-JBwcenOuRCg-unsplash.jpg')" }}
        />
        <div className="page-hero-overlay" aria-hidden />
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Students</Link><span className="sep">/</span><span style={{ color: "var(--cps-blue)" }}>Programmes</span>
          </div>
          <div style={{ marginTop: 24, maxWidth: 880 }}>
            <span className="eyebrow"><span className="dot" /> Student Programmes</span>
            <h1>Three pathways into banking and financial services.</h1>
            <p style={{ marginTop: 24, fontSize: 18 }}>
              Three 12-month, CHE-accredited qualifications - all built by the people the sector has
              counted on for 25 years. A banking foundation, a business banking specialisation, and a
              leadership credential. Pick the one that fits where you want to land.
            </p>
          </div>
        </div>
      </section>

      {/* PRIMARY STUDENT PROGRAMMES - 3-card grid */}
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Primary Student Programmes</span>
              <h2>Three pathways. All CHE-accredited. All built for the sector.</h2>
              <p>
                12 months each, designed for working professionals, recognised by the banks and
                insurers that employ them. Choose the banking foundation, the business banking
                specialisation, or the leadership credential.
              </p>
            </div>
          </Reveal>

          <div className="prog-grid student-prog-grid">
            {students.map((p) => (
              <Reveal key={p.slug}>
                <StudentProgrammeCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR STUDENT JOURNEY - horizontal timeline (dark surface, mirrors CPSLearn preview) */}
      <section className="section-dark">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Your student journey</span>
              <h2>From enquiry to enrolment, know what happens next.</h2>
              <p>
                You shouldn&apos;t need to figure out the process. 25 years of running cohorts taught us
                that the clearest path is also the most respectful one - here it is, six steps, no
                surprises.
              </p>
            </div>
          </Reveal>

          <div className="timeline">
            <Reveal as="div" className="timeline-step" delay={0}>
              <div className="marker">01</div>
              <h3>Choose your programme</h3>
              <p>Find the qualification that fits your current position and your career goal.</p>
            </Reveal>
            <Reveal as="div" className="timeline-step" delay={120}>
              <div className="marker">02</div>
              <h3>Check the requirements</h3>
              <p>Understand what documents, prior qualifications or workplace context may be needed.</p>
            </Reveal>
            <Reveal as="div" className="timeline-step" delay={240}>
              <div className="marker">03</div>
              <h3>Apply or enquire</h3>
              <p>Apply directly or request information first - move forward with clarity, not pressure.</p>
            </Reveal>
            <Reveal as="div" className="timeline-step" delay={360}>
              <div className="marker">04</div>
              <h3>Start the journey</h3>
              <p>Once enrolled, your programme is delivered and managed through CPSLearn.</p>
            </Reveal>
            <Reveal as="div" className="timeline-step" delay={480}>
              <div className="marker">05</div>
              <h3>Stay supported</h3>
              <p>Progress is visible throughout, helping CPS identify where support may be needed.</p>
            </Reveal>
            <Reveal as="div" className="timeline-step" delay={600}>
              <div className="marker">06</div>
              <h3>Complete with confidence</h3>
              <p>Build competence and move forward with a recognised qualification.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Need help choosing?</span>
              <h2>Not sure which programme is right for you?</h2>
              <p>
                If you are unsure which qualification fits your background, career stage or goals, speak to
                admissions. They can help you understand requirements, programme differences and the most
                relevant next step.
              </p>
            </div>
            <Link href="/contact#admissions" className="btn btn-yellow btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              Talk to admissions
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
