import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { getStudentProgrammes, valueStreamLabel, type Programme } from "@/lib/programmes";

export const metadata: Metadata = {
  title: "Programmes for Students",
  description:
    "Three CPS Higher Education qualifications for South African students: Higher Certificate in Banking, Higher Certificate in Banking - Business Banking, and Advanced Certificate in Leadership.",
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
            <h1>Three pathways. Pick the one that fits your next step.</h1>
            <p style={{ marginTop: 24, fontSize: 18 }}>
              Three 12-month higher-education qualifications designed for working South African
              professionals. Two banking pathways - a general foundation and a business-banking
              specialisation - plus a leadership credential. All three are CHE-accredited and end in
              a credential employers know.
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
              <h2>Three flagship pathways for ambitious South African professionals.</h2>
              <p>
                All three programmes are 12 months, CHE-accredited and designed for working
                students. Choose the banking foundation, the business-banking specialisation, or
                the leadership credential.
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
                A clear process reduces uncertainty. CPS helps students understand the programme,
                requirements and next step before they commit.
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
