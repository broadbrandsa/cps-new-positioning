import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  Building,
  Calendar,
  Check,
  Clock,
  Compass,
  Rocket,
  ShieldCheck,
  Target,
  Trophy,
  Users,
} from "@/components/icons";
import { ClientLogos } from "@/components/client-logos";
import { CredentialsBand } from "@/components/credentials-band";
import { HeroVideo } from "@/components/hero-video";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";

export const metadata: Metadata = {
  title: "Career Paths",
  description:
    "A plain-English guide for anyone curious about a career in financial services. What each CPS qualification unlocks, the jobs you can apply for, and how a career in banking and insurance actually progresses. Plus an honest CPS vs university comparison.",
};

// ---- DATA ----------------------------------------------------------------

type TimelineStep = { stage: string; role: string; what: string };

type ProgrammePath = {
  slug: string;
  pill: string;
  accent: "blue" | "purple" | "yellow";
  Icon: typeof Building;
  programme: string;
  shortTitle: string;
  oneLiner: string;
  whoFor: string;
  starterJobs: string[];
  weekLooksLike: string;
  timeline: TimelineStep[];
};

const PATHS: ProgrammePath[] = [
  {
    slug: "higher-certificate-banking",
    pill: "Banking",
    accent: "blue",
    Icon: Building,
    programme: "Higher Certificate in Banking",
    shortTitle: "HCIB",
    oneLiner:
      "The starting point. If you want to work inside a bank, with customers, and grow into someone who looks after their money, this is the door in.",
    whoFor:
      "Recent matriculants, career changers, or branch staff (tellers, customer service) ready to step up into a banker role.",
    starterJobs: [
      "Personal Banker",
      "Banking Operations Officer",
      "Branch Sales Consultant",
      "Customer Banking Advisor",
      "Junior Relationship Officer",
    ],
    weekLooksLike:
      "You're inside a bank branch or contact-centre environment. Mornings start with reviewing customer accounts, helping people with home loans or credit applications, explaining banking products, and resolving day-to-day money questions. You become the face customers see when they need to make a financial decision.",
    timeline: [
      {
        stage: "Year 1",
        role: "Personal Banker",
        what: "You finish the qualification while working. Most students are placed in a personal banking or branch role early in the programme.",
      },
      {
        stage: "Year 3",
        role: "Senior Personal Banker",
        what: "You're trusted with bigger client portfolios, advising on more complex products like home loans, vehicle finance and investments.",
      },
      {
        stage: "Year 5+",
        role: "Private Banker / Relationship Manager",
        what: "You handle higher-value clients, often with their own dedicated portfolio. This is where banking careers become genuinely lucrative.",
      },
      {
        stage: "Year 10+",
        role: "Branch Manager or Specialist",
        what: "Either running an entire branch and team, or specialising into wealth management, lending or product. From here, executive routes open.",
      },
    ],
  },
  {
    slug: "higher-certificate-banking-business-banking",
    pill: "Business Banking",
    accent: "purple",
    Icon: Briefcase,
    programme: "Higher Certificate in Banking, Business Banking",
    shortTitle: "HCIBB",
    oneLiner:
      "Same starting point, different focus. Instead of personal customers, you work with businesses, helping companies fund growth, manage cashflow and finance trade.",
    whoFor:
      "People drawn to the commercial side. You're interested in how businesses work, you can hold a conversation with a business owner, and you want a career that mixes finance with relationship work.",
    starterJobs: [
      "Junior Business Banker",
      "Business Banking Analyst",
      "Relationship Officer (SME)",
      "Business Banking Operations",
      "Commercial Credit Analyst",
    ],
    weekLooksLike:
      "You're meeting business owners, reading their financial statements, understanding what their cashflow looks like, and figuring out what banking they need. Some weeks are office-based reviewing applications. Others are on-site at the customer's business. You learn how SMEs and mid-sized firms actually work, and how banks support them.",
    timeline: [
      {
        stage: "Year 1",
        role: "Junior Business Banker",
        what: "You finish the qualification while supporting a business banking team, learning how commercial credit, trade finance and cashflow lending work.",
      },
      {
        stage: "Year 3",
        role: "Business Banker",
        what: "You own a portfolio of small and mid-sized business clients. You build the relationship, structure the deals, and grow the book.",
      },
      {
        stage: "Year 5+",
        role: "Senior Business Banker",
        what: "Bigger portfolios, more complex deals, working across industries (agriculture, manufacturing, professional services, franchise).",
      },
      {
        stage: "Year 10+",
        role: "Business Banking Manager or Sector Specialist",
        what: "Either leading a team of business bankers, or going deep into one industry as the bank's specialist. Senior commercial banking is one of the most respected paths in the sector.",
      },
    ],
  },
  {
    slug: "advanced-certificate-leadership",
    pill: "Leadership",
    accent: "yellow",
    Icon: Trophy,
    programme: "Advanced Certificate in Leadership",
    shortTitle: "ACL",
    oneLiner:
      "This one's different. It's the credential for people already working in financial services who are ready to lead a team, manage an area, or move from doing the work to running the work.",
    whoFor:
      "Current bankers, insurance professionals, claims specialists, advisors or operations staff who've been doing the work for a few years and want the credential and skills to step up into management.",
    starterJobs: [
      "Team Leader",
      "Branch Supervisor",
      "Operations Manager (Junior)",
      "Project Lead",
      "Sales Team Lead",
    ],
    weekLooksLike:
      "You're balancing two jobs. Half your time is still doing the work you've always done. The other half is coaching the team, running meetings, managing performance, handling escalations, and connecting what your team does to the bigger goals of the business. Leadership is a skill, and ACL teaches the parts that don't come naturally.",
    timeline: [
      {
        stage: "Year 1",
        role: "Team Leader / Supervisor",
        what: "You step into your first formal leadership role, often inside a function you already know well (banking, claims, advisory, ops).",
      },
      {
        stage: "Year 3",
        role: "Branch Manager / Area Manager",
        what: "You're running a whole branch or a region. The work is now mostly about people, performance and process, not the technical job you trained on.",
      },
      {
        stage: "Year 5+",
        role: "Regional Manager / Head of Function",
        what: "Bigger remit. You influence strategy, budget and hiring. You start being known beyond your immediate team.",
      },
      {
        stage: "Year 10+",
        role: "Senior Leader or Executive",
        what: "Head of business unit, executive sponsor for major initiatives, or a route into general management and the C-suite of a financial services group.",
      },
    ],
  },
];

// CPS vs University comparison - each row now has an icon
const COMPARISON = [
  {
    dimension: "Duration",
    Icon: Clock,
    uni: "3 to 4 years to first qualification",
    cps: "12 months to first qualification",
  },
  {
    dimension: "Tuition shape",
    Icon: Award,
    uni: "Annual lump sums plus textbooks and registration",
    cps: "Monthly tuition you pay alongside a salary",
  },
  {
    dimension: "What you study",
    Icon: Compass,
    uni: "Broad commerce or business. You choose a specialism later.",
    cps: "Banking, business banking or leadership, end to end, from day one.",
  },
  {
    dimension: "Recognition by the sector",
    Icon: ShieldCheck,
    uni: "Depends on the institution. HR teams may need to look it up.",
    cps: "The banks, insurers and broker networks that hire from us already know our credentials by name.",
  },
  {
    dimension: "Time to first sector role",
    Icon: Rocket,
    uni: "Typically after graduation, then job hunting.",
    cps: "Many students are working in a sector role during the programme.",
  },
  {
    dimension: "Best for",
    Icon: Target,
    uni: "Someone exploring options across business, accounting and finance.",
    cps: "Someone who knows they want into financial services and wants the shortest direct route.",
  },
];

// ---- COMPONENTS ----------------------------------------------------------

function PathSection({ p }: { p: ProgrammePath }) {
  const Icon = p.Icon;
  return (
    <Reveal as="div" className={`career-path-block accent-${p.accent}`}>
      <div className="career-path-accent-bar" aria-hidden />

      <div className="career-path-head">
        <div className="career-path-head-left">
          <div className={`career-path-icon accent-${p.accent}`} aria-hidden>
            <Icon />
          </div>
          <div className="pill-row" style={{ marginBottom: 16 }}>
            <span className={`pill pill-${p.accent === "yellow" ? "yellow" : p.accent}`}>{p.pill}</span>
            <span className="pill">12 months</span>
            <span className="pill">CHE accredited</span>
          </div>
          <h3 className="career-path-title">{p.programme}</h3>
          <p className="career-path-lede">{p.oneLiner}</p>
          <p className="career-path-whofor">
            <strong>Who it&apos;s for:</strong> {p.whoFor}
          </p>
          <Link
            href={`/programmes/${p.slug}`}
            className={`btn ${p.accent === "yellow" ? "btn-yellow" : ""}`}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 8 }}
          >
            View {p.shortTitle} <ArrowRight />
          </Link>
        </div>

        <div className="career-path-side">
          <div className="career-path-jobs">
            <div className="career-path-jobs-head">
              <span className={`career-mini-icon accent-${p.accent}`} aria-hidden>
                <Users />
              </span>
              <span className="mono">Jobs you can apply for</span>
            </div>
            <ul className="career-jobs-list">
              {p.starterJobs.map((j) => (
                <li key={j}>
                  <span className={`career-jobs-check accent-${p.accent}`}>
                    <Check />
                  </span>
                  <span>{j}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="career-path-week">
            <div className="career-path-week-head">
              <span className={`career-mini-icon accent-${p.accent}`} aria-hidden>
                <Calendar />
              </span>
              <span className="mono">A typical week</span>
            </div>
            <p>{p.weekLooksLike}</p>
          </div>
        </div>
      </div>

      <div
        className={`career-timeline accent-${p.accent}`}
        aria-label={`${p.shortTitle} career progression`}
      >
        <div className="career-timeline-line" aria-hidden />
        {p.timeline.map((step, i) => (
          <div key={step.stage} className="career-timeline-step">
            <div className={`career-timeline-marker accent-${p.accent}`}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <span className="mono">{step.stage}</span>
            <h4>{step.role}</h4>
            <p>{step.what}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export default function CareerPathsPage() {
  return (
    <main>
      {/* HERO - video-backed dark */}
      <section className="hero">
        <div className="hero-fallback" />
        <HeroVideo
          src="/7147176-hd_1280_720_25fps.mp4"
          poster="/brooke-cagle-JBwcenOuRCg-unsplash.jpg"
          playbackRate={0.75}
          className="hero-photo"
        />
        <div className="hero-bg" />

        <div className="container">
          <div className="hero-grid">
            <span className="eyebrow hero-fade-in" style={{ animationDelay: "0ms" }}>
              <span className="dot" /> Career Paths &nbsp;//&nbsp; A plain-English guide
            </span>
            <h1 className="hero-headline">
              <span className="hero-line">Don&apos;t know</span>
              <span className="hero-line">
                <span className="accent-word">banking yet?</span>
              </span>
              <span className="hero-line">Start here.</span>
            </h1>
            <p className="hero-sub hero-fade-in">
              A plain-English guide to a career in financial services. What each CPS qualification
              actually unlocks, the jobs you&apos;d apply for first, and how a real career in
              banking or insurance progresses over a decade. Built for people who don&apos;t know
              the sector yet.
            </p>

            <div className="hero-cta-row hero-fade-in">
              <Link
                href="#roadmaps"
                className="btn btn-yellow btn-lg"
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                See the roadmaps <ArrowRight />
              </Link>
              <Link
                href="/contact#admissions"
                className="liquid-glass btn-lg"
                style={{
                  borderRadius: 14,
                  padding: "14px 22px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Talk to admissions
              </Link>
            </div>

            <div className="hero-stats hero-fade-in">
              <div className="item">
                <div className="num">12<sub style={{ fontSize: "0.4em", opacity: 0.7 }}>mo</sub></div>
                <div className="lbl">Time to qualification</div>
              </div>
              <div className="item">
                <div className="num">3</div>
                <div className="lbl">Pathways into the sector</div>
              </div>
              <div className="item">
                <div className="num">25<sup>yrs</sup></div>
                <div className="lbl">Sector relationships behind you</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS - trust strip right after hero */}
      <CredentialsBand />

      {/* PLAIN ENGLISH EXPLAINERS - upgraded to icon-forward feat-cards */}
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Financial services, in plain English</span>
              <h2>Three industries. One skill: helping people manage money.</h2>
              <p>
                If finance feels intimidating, it&apos;s because nobody bothered to explain it in
                normal words. Here&apos;s the short version. Once you know this, the rest of the
                page makes sense.
              </p>
            </div>
          </Reveal>

          <div className="platform-grid cols-3">
            <Reveal as="div" delay={0}>
              <Spotlight as="div" className="sector-card sector-card-banking">
                <div className="sector-icon sector-icon-banking" aria-hidden>
                  <Users />
                </div>
                <span className="mono">Sector 01</span>
                <h3>Banking</h3>
                <p>
                  The business of looking after people&apos;s money. Helping them save it, borrow
                  it, move it, and make sense of it. Both individuals (personal banking) and
                  companies (business banking).
                </p>
              </Spotlight>
            </Reveal>
            <Reveal as="div" delay={120}>
              <Spotlight as="div" className="sector-card sector-card-insurance">
                <div className="sector-icon sector-icon-insurance" aria-hidden>
                  <ShieldCheck />
                </div>
                <span className="mono">Sector 02</span>
                <h3>Insurance</h3>
                <p>
                  The business of protecting people from financial loss. Life insurance, car
                  insurance, business insurance, professional cover. Helping people manage what
                  could go wrong with what they own.
                </p>
              </Spotlight>
            </Reveal>
            <Reveal as="div" delay={240}>
              <Spotlight as="div" className="sector-card sector-card-investment">
                <div className="sector-icon sector-icon-investment" aria-hidden>
                  <BarChart3 />
                </div>
                <span className="mono">Sector 03</span>
                <h3>Investment and advisory</h3>
                <p>
                  The business of growing money over time. Helping people decide where to put
                  savings, how to plan for retirement, and how to make their money work harder.
                  Often sits inside banks or with independent advisors.
                </p>
              </Spotlight>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CPS vs UNIVERSITY - upgraded with icons per row + stronger CPS highlight */}
      <section className="section-tinted">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-purple)" }} /> CPS vs University</span>
              <h2>Two roads into financial services. One is much shorter.</h2>
              <p>
                A university degree is the traditional route, and it has its place. If your goal is
                specifically a career in financial services, here&apos;s how the two compare side
                by side.
              </p>
            </div>
          </Reveal>

          <div className="versus-wrap">
            <div className="versus-vs" aria-hidden>vs</div>

            <div className="versus-grid">
              <Reveal as="div" className="versus-col versus-col-uni">
                <div className="versus-head">
                  <span className="versus-tag">Traditional route</span>
                  <h3>A 3 to 4-year university degree</h3>
                  <p className="versus-head-note">Broad, theoretical, decide-later</p>
                </div>
                {COMPARISON.map((row) => {
                  const Icon = row.Icon;
                  return (
                    <div key={row.dimension} className="versus-row">
                      <div className="versus-row-icon versus-row-icon-uni" aria-hidden>
                        <Icon />
                      </div>
                      <div>
                        <span className="versus-row-label">{row.dimension}</span>
                        <p>{row.uni}</p>
                      </div>
                    </div>
                  );
                })}
              </Reveal>

              <Reveal as="div" className="versus-col versus-col-cps" delay={140}>
                <div className="versus-featured-ribbon" aria-hidden>
                  <Trophy width={14} height={14} />
                  <span>Faster to the sector</span>
                </div>
                <div className="versus-head">
                  <span className="versus-tag versus-tag-cps">CPS route</span>
                  <h3>A 12-month CPS qualification</h3>
                  <p className="versus-head-note">Focused, sector-built, ready to work</p>
                </div>
                {COMPARISON.map((row) => {
                  const Icon = row.Icon;
                  return (
                    <div key={row.dimension} className="versus-row">
                      <div className="versus-row-icon versus-row-icon-cps" aria-hidden>
                        <Icon />
                      </div>
                      <div>
                        <span className="versus-row-label">{row.dimension}</span>
                        <p>{row.cps}</p>
                      </div>
                    </div>
                  );
                })}
              </Reveal>
            </div>
          </div>

          <Reveal>
            <p
              style={{
                marginTop: 32,
                maxWidth: 720,
                color: "var(--muted)",
                fontStyle: "italic",
                fontSize: 15,
              }}
            >
              Honest caveat: a university degree opens doors CPS doesn&apos;t (research,
              post-graduate study, careers outside financial services). If your destination is the
              sector itself, CPS gets you there faster, with less debt, and with employers who
              already recognise the credential.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CAREER ROADMAPS - one section per programme */}
      <section id="roadmaps">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Career roadmaps</span>
              <h2>Three programmes. Three real careers.</h2>
              <p>
                Each CPS qualification opens a different door. Below: the door, the jobs behind it,
                and how a real career in that direction actually unfolds over the next ten years.
              </p>
            </div>
          </Reveal>

          <div className="career-paths-list">
            {PATHS.map((p) => (
              <PathSection key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS - proof band */}
      <ClientLogos label="The banks, insurers and financial services groups whose people started here." />

      {/* HOW TO CHOOSE - decision cards with big icons + coloured accents */}
      <section className="section-dark">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Not sure which one fits?</span>
              <h2>Three questions to find your path.</h2>
              <p>Pick the statement that sounds most like you.</p>
            </div>
          </Reveal>

          <div className="platform-grid cols-3">
            <Reveal as="div" delay={0}>
              <Spotlight as="div" className="choose-card choose-card-blue">
                <div className="choose-card-accent" aria-hidden />
                <div className="choose-icon choose-icon-blue" aria-hidden>
                  <Building />
                </div>
                <span className="mono">Choose 01</span>
                <h3>
                  &ldquo;I want to work in a bank with customers, and grow into a senior banker or
                  branch manager.&rdquo;
                </h3>
                <p className="choose-card-verdict">
                  Your path is the <strong>Higher Certificate in Banking (HCIB)</strong>.
                </p>
                <Link
                  href="/programmes/higher-certificate-banking"
                  className="btn btn-yellow"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: "auto" }}
                >
                  View HCIB <ArrowRight />
                </Link>
              </Spotlight>
            </Reveal>

            <Reveal as="div" delay={120}>
              <Spotlight as="div" className="choose-card choose-card-purple">
                <div className="choose-card-accent" aria-hidden />
                <div className="choose-icon choose-icon-purple" aria-hidden>
                  <Briefcase />
                </div>
                <span className="mono">Choose 02</span>
                <h3>&ldquo;I want to work with businesses, helping companies grow.&rdquo;</h3>
                <p className="choose-card-verdict">
                  Your path is the{" "}
                  <strong>Higher Certificate in Banking, Business Banking (HCIBB)</strong>.
                </p>
                <Link
                  href="/programmes/higher-certificate-banking-business-banking"
                  className="btn btn-yellow"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: "auto" }}
                >
                  View HCIBB <ArrowRight />
                </Link>
              </Spotlight>
            </Reveal>

            <Reveal as="div" delay={240}>
              <Spotlight as="div" className="choose-card choose-card-yellow">
                <div className="choose-card-accent" aria-hidden />
                <div className="choose-icon choose-icon-yellow" aria-hidden>
                  <Trophy />
                </div>
                <span className="mono">Choose 03</span>
                <h3>
                  &ldquo;I&apos;m already working in financial services and ready to lead.&rdquo;
                </h3>
                <p className="choose-card-verdict">
                  Your path is the <strong>Advanced Certificate in Leadership (ACL)</strong>.
                </p>
                <Link
                  href="/programmes/advanced-certificate-leadership"
                  className="btn btn-yellow"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: "auto" }}
                >
                  View ACL <ArrowRight />
                </Link>
              </Spotlight>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-grid">
            <Reveal as="div">
              <span className="mono" style={{ color: "var(--cps-blue)" }}>Still figuring it out?</span>
              <h2 style={{ marginTop: 16 }}>Talk to someone who&apos;s done this before.</h2>
              <p style={{ marginTop: 16 }}>
                Admissions has helped thousands of people work out which CPS programme fits where
                they want to land. No pressure. Just a real conversation about your starting point
                and what a career in the sector could look like.
              </p>
              <div className="cta-band-actions" style={{ marginTop: 24 }}>
                <Link href="/contact#admissions" className="btn btn-yellow btn-lg">
                  Talk to admissions
                </Link>
                <Link
                  href="/programmes"
                  className="liquid-glass btn-lg"
                  style={{
                    borderRadius: 14,
                    padding: "14px 22px",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  See all programmes <ArrowRight />
                </Link>
              </div>
            </Reveal>

            <Reveal as="div" delay={140}>
              <div
                style={{
                  background: "var(--card)",
                  borderRadius: 20,
                  padding: 32,
                  border: "1px solid var(--line)",
                }}
              >
                <span className="mono">Quick recap</span>
                <ul
                  style={{
                    marginTop: 16,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    padding: 0,
                  }}
                >
                  {[
                    "12 months, not 3 to 4 years",
                    "Monthly tuition you can pay alongside a salary",
                    "CHE-accredited credentials the sector knows by name",
                    "Three pathways into banking, business banking and leadership",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        fontSize: 15,
                        lineHeight: 1.45,
                        color: "var(--ink)",
                      }}
                    >
                      <span
                        style={{
                          display: "grid",
                          placeItems: "center",
                          flexShrink: 0,
                          width: 22,
                          height: 22,
                          borderRadius: 999,
                          background: "rgba(19,162,217,0.18)",
                          color: "var(--cps-blue)",
                          marginTop: 1,
                        }}
                      >
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
