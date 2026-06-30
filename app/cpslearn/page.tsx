import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Clock,
  Compass,
  ClipboardCheck,
  BarChart3,
  Trophy,
  Layers,
  Lightbulb,
  Calendar,
  Briefcase,
  Workflow,
  ShieldCheck,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { CountUp } from "@/components/count-up";

export const metadata: Metadata = {
  title: "CPSLearn for Students",
  description:
    "CPSLearn is the platform behind how working professionals in financial services, especially banking and insurance, actually finish their qualification. Built and refined over 25 years inside the sector.",
};

export default function StudentsCPSLearn() {
  return (
    <main>
      {/* HERO - photo-backed dark */}
      <section className="page-hero has-photo">
        <div
          className="page-hero-photo"
          aria-hidden
          style={{ backgroundImage: "url('/md-duran-1VqHRwxcCCw-unsplash.jpg')" }}
        />
        <div className="page-hero-overlay" aria-hidden />
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Students</Link><span className="sep">/</span><span style={{ color: "var(--cps-blue)" }}>CPSLearn</span>
          </div>
          <div style={{ marginTop: 24, maxWidth: 920 }}>
            <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> CPSLearn</span>
            <h1>The platform built to get financial services professionals across the finish line.</h1>
            <p style={{ marginTop: 24, fontSize: 18 }}>
              CPSLearn is where your programme happens, content, structure, assessments, feedback and
              progress, in one place. Built and refined over 25 years for the way people in the sector
              actually study (especially in banking and insurance): alongside a job, on their own time,
              with real stakes.
            </p>
            <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/programmes" className="btn btn-yellow btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                Browse student programmes <ArrowRight />
              </Link>
              <Link href="/contact#admissions" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center", gap: 8, color: "#fff" }}>
                Talk to admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT BAND - centered, the core claim */}
      <section style={{ padding: "120px 0 120px" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <Reveal>
            <p style={{
              fontSize: "clamp(20px, 1.6vw, 26px)",
              color: "var(--muted)",
              lineHeight: 1.55,
              fontWeight: 400,
              textAlign: "center",
              letterSpacing: "-0.005em",
            }}>
              Most platforms give you access to learning.
            </p>
            <p style={{
              fontSize: "clamp(24px, 2vw, 34px)",
              color: "var(--ink)",
              lineHeight: 1.4,
              fontWeight: 500,
              textAlign: "center",
              letterSpacing: "-0.015em",
              marginTop: 16,
            }}>
              CPSLearn is built to guide you <em style={{ color: "var(--cps-blue)", fontStyle: "normal" }}>through</em> it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 1 - "You won't be left guessing what to do next" */}
      <section className="section-dark">
        <div className="container">
          <div className="experience-layout">
            <Reveal as="div" className="experience-intro">
              <p className="lede">
                One of the biggest frustrations in studying is not knowing where you stand. What should
                you be doing right now? What&apos;s coming next? Are you behind?
              </p>
              <h2 className="experience-display">
                Clarity, from the moment
                <br />
                <em>you start.</em>
              </h2>
              <span className="big-arrow" aria-hidden="true">
                <ArrowRight width={48} height={48} />
              </span>
            </Reveal>

            <div className="experience-cards-grid">
              <Reveal as="div" className="exp-step-card" delay={0}>
                <span className="brand-mark" aria-hidden><Layers /></span>
                <span className="step-label">Modules</span>
                <h3>Organised in a way that makes sense</h3>
                <p>Your programme is broken into modules so the path is visible from day one, not a folder of files to figure out alone.</p>
              </Reveal>
              <Reveal as="div" className="exp-step-card" delay={80}>
                <span className="brand-mark" aria-hidden><Compass /></span>
                <span className="step-label">Milestones</span>
                <h3>You always know what&apos;s next</h3>
                <p>Milestones mark the beats of your journey, so you can see what&apos;s ahead before you get to it.</p>
              </Reveal>
              <Reveal as="div" className="exp-step-card" delay={160}>
                <span className="brand-mark" aria-hidden><ClipboardCheck /></span>
                <span className="step-label">Assessments</span>
                <h3>Mapped to the journey</h3>
                <p>Assessments are placed where they support learning, not stacked at the end as an afterthought.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - "Feedback while it still matters" - split + comparison */}
      <section>
        <div className="container">
          <div className="diff-grid">
            <Reveal as="div">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> Faster feedback</span>
              <h2 style={{ marginTop: 16 }}>Feedback while it still matters.</h2>
              <p style={{ marginTop: 24, fontSize: 17, color: "var(--muted)", lineHeight: 1.6 }}>
                Think about the last time you waited for feedback. By the time it came back, you had
                already moved on. You barely remembered what you wrote.
              </p>
              <p style={{ marginTop: 16, fontSize: 17, color: "var(--muted)", lineHeight: 1.6 }}>
                That gap slows learning down. CPSLearn closes it. You&apos;re still in the context of
                the work, you can see what went wrong, adjust, and carry on.
              </p>
              <p style={{ marginTop: 16, fontSize: 17, color: "var(--ink)", lineHeight: 1.6, fontWeight: 500 }}>
                The learning loop stays tight, and that makes a real difference over time.
              </p>
            </Reveal>

            <Reveal as="div" delay={140}>
              <div className="feedback-compare">
                <div className="feedback-row before">
                  <span className="mono">Before</span>
                  <div className="time">
                    <Clock />
                    <span><strong>45-60 min</strong> or longer</span>
                  </div>
                  <p>By the time feedback comes back, you&apos;ve already moved on.</p>
                </div>

                <div className="feedback-arrow" aria-hidden>
                  <ArrowRight width={24} height={24} />
                </div>

                <div className="feedback-row after">
                  <span className="mono">With CPSLearn</span>
                  <div className="time">
                    <Clock />
                    <span><strong>Within minutes</strong></span>
                  </div>
                  <p>You&apos;re still in the work. You see what went wrong and adjust immediately.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 - "See your progress" - image-backed, blocks pinned to bottom */}
      <section className="career-value">
        <div className="career-value-photo" aria-hidden style={{ backgroundImage: "url('/good-faces-DavJROC1lBM-unsplash.jpg')" }} />
        <div className="career-value-overlay" aria-hidden />
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Progress, not hope</span>
              <h2>You can see your progress, not just hope for it.</h2>
              <p style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                There&apos;s a big difference between feeling busy and actually moving forward. CPSLearn
                shows you exactly where you are, and removes the guesswork. When progress is visible,
                it becomes easier to stay accountable to yourself.
              </p>
            </div>
          </Reveal>

          <div className="career-grid">
            <Reveal as="div" className="phase" delay={0}>
              <div className="phase-num">VIEW 01</div>
              <h3>What you&apos;ve completed</h3>
              <p>A clear record of what&apos;s already done, the wins you&apos;ve banked.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={100}>
              <div className="phase-num">VIEW 02</div>
              <h3>What&apos;s outstanding</h3>
              <p>An honest view of what&apos;s still to go, no surprises, no hidden runway.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={200}>
              <div className="phase-num">VIEW 03</div>
              <h3>What needs attention next</h3>
              <p>The next deliberate step, so your time goes where it counts.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={300}>
              <div className="phase-num">VIEW 04</div>
              <h3>Where you stand overall</h3>
              <p>The shape of your journey at a glance, momentum made visible.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 - "Doesn't assume everyone learns the same way" - single editorial block */}
      <section className="section-tinted">
        <div className="container">
          <div className="editorial-grid">
            <Reveal as="div" className="editorial-eyebrow">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> Built for real students</span>
            </Reveal>
            <Reveal as="div" className="editorial-headline" delay={120}>
              <h2>It doesn&apos;t assume everyone learns the same way.</h2>
            </Reveal>
            <Reveal as="div" className="editorial-body" delay={200}>
              <p>
                Not every student starts at the same level. Some parts will feel straightforward.
                Others won&apos;t. CPSLearn is built to support that reality, it helps identify where
                you need more focus, so your time is spent where it actually matters.
              </p>
              <p style={{ marginTop: 20, color: "var(--ink)", fontWeight: 500 }}>
                You&apos;re not just moving through content. You&apos;re building capability where you
                need it most.
              </p>
            </Reveal>
            <Reveal as="div" className="editorial-aside" delay={280}>
              <div className="editorial-pull">
                <span className="mono">In other words</span>
                <p>The platform meets you where you are, not where it assumes you should be.</p>
                <span className="brand-mark" aria-hidden><Lightbulb /></span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 6 - "Built for real qualifications" - outcome-pills + context */}
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> Built for real qualifications</span>
              <h2>Not casual learning. Real qualifications.</h2>
              <p>
                CPSLearn isn&apos;t designed for casual or once-off learning. It supports the way formal
                qualifications actually work, not a simplified version of it.
              </p>
            </div>
          </Reveal>

          <div className="outcomes-grid">
            <Reveal as="div" className="outcome-pill" delay={0}>
              <div className="check"><ShieldCheck /></div>
              <h3>Full accredited programmes</h3>
            </Reveal>
            <Reveal as="div" className="outcome-pill" delay={80}>
              <div className="check"><ClipboardCheck /></div>
              <h3>Structured assessments</h3>
            </Reveal>
            <Reveal as="div" className="outcome-pill" delay={160}>
              <div className="check"><Check /></div>
              <h3>Moderation processes</h3>
            </Reveal>
            <Reveal as="div" className="outcome-pill" delay={240}>
              <div className="check"><Trophy /></div>
              <h3>Higher education exam requirements</h3>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 7 - "Works with your life" - dark phases-grid */}
      <section className="section-dark">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Designed for working professionals</span>
              <h2>It works with your life, not against it.</h2>
              <p>
                Most students are not studying full-time. They&apos;re working, managing responsibilities,
                and trying to build something better at the same time. CPSLearn is designed for that
                reality.
              </p>
            </div>
          </Reveal>

          <div className="phases-grid cols-4">
            <Reveal as="div" className="phase" delay={0}>
              <div className="phase-num">WAY 01</div>
              <h3>Log in when you need to</h3>
              <p>You don&apos;t need to be at a desk at a fixed time. Learning is on your schedule.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={100}>
              <div className="phase-num">WAY 02</div>
              <h3>Pick up where you left off</h3>
              <p>Come back days later and the path is still clear, no scrambling to remember where you were.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={200}>
              <div className="phase-num">WAY 03</div>
              <h3>No reorientation tax</h3>
              <p>The structure does the heavy lifting, so you don&apos;t spend energy figuring out the system every session.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={300}>
              <div className="phase-num">WAY 04</div>
              <h3>Focus on the learning</h3>
              <p>When the system supports you, more of your time goes to what actually moves you forward.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 8 - "Not just another platform" - split: text + stat */}
      <section>
        <div className="container">
          <div className="cpslearn-heritage">
            <Reveal as="div" className="heritage-text">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> Heritage</span>
              <h2 style={{ marginTop: 16 }}>Not just another learning platform.</h2>
              <p style={{ marginTop: 24, fontSize: 17, color: "var(--muted)", lineHeight: 1.6 }}>
                CPSLearn isn&apos;t a repackaged third-party LMS. It&apos;s our own platform, built and
                refined over 25 years against one specific question: how do working people in financial
                services, especially in banking and insurance, actually finish what they start?
              </p>
              <p style={{ marginTop: 16, fontSize: 17, color: "var(--ink)", lineHeight: 1.6, fontWeight: 500 }}>
                The answer turned out to be specific, and the platform is shaped by it, not by guesses.
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

      {/* SECTION 9 - "What this means for you" - closing CTA with checklist */}
      <div className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-grid">
            <Reveal as="div">
              <span className="mono" style={{ color: "var(--cps-blue)" }}>What this means for you</span>
              <h2 style={{ marginTop: 16 }}>Start your programme. Stay on track. Finish it.</h2>
              <p style={{ marginTop: 16 }}>
                If you strip it back, the goal is simple. CPSLearn supports that by giving you the
                things that actually help students complete.
              </p>
              <div className="cta-band-actions" style={{ marginTop: 24 }}>
                <Link href="/programmes" className="btn btn-yellow btn-lg">Browse student programmes</Link>
                <Link href="/contact#admissions" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center" }}>
                  Talk to admissions <ArrowRight />
                </Link>
              </div>
            </Reveal>

            <Reveal as="div" delay={140}>
              <div style={{ background: "var(--card)", borderRadius: 20, padding: 32, border: "1px solid var(--line)" }}>
                <span className="mono">It&apos;s not there to impress you</span>
                <p style={{ marginTop: 8, fontSize: 16, color: "var(--ink)", fontWeight: 500, marginBottom: 20 }}>
                  It&apos;s there to help you finish.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, padding: 0 }}>
                  {[
                    "Clarity on what to do",
                    "Faster feedback",
                    "Visible progress",
                    "A structured path to completion",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, lineHeight: 1.45, color: "var(--ink)" }}>
                      <span style={{ display: "grid", placeItems: "center", flexShrink: 0, width: 22, height: 22, borderRadius: 999, background: "rgba(19,162,217,0.18)", color: "var(--cps-blue)", marginTop: 1 }}>
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
