import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import {
  Sparkle,
  Lightbulb,
  Globe,
  Briefcase,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Since 1999, Cornerstone Performance Solutions has been the learning partner financial services counts on - specialists in banking and insurance. 25 years inside the sector, building the people who run it.",
};

export default function AboutPage() {
  return (
    <main>
      {/* HERO - quiet, tinted, no photo */}
      <section className="page-hero about-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link><span className="sep">/</span><span style={{ color: "var(--cps-blue)" }}>About</span>
          </div>
          <div className="about-hero-grid">
            <Reveal as="div" className="about-hero-eyebrow-col">
              <span className="eyebrow"><span className="dot" /> Since 1999</span>
            </Reveal>
            <Reveal as="div" delay={120} className="about-hero-text">
              <h1 className="about-display">25 years inside the sector.</h1>
              <p className="about-lede">
                Since 1999, we&apos;ve built the people financial services counts on - specialists in
                banking and insurance. First one cohort, then thousands, then a generation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ORIGIN - narrative editorial */}
      <section className="about-narrative">
        <div className="container">
          <div className="narrative-grid">
            <Reveal as="div" className="narrative-side">
              <span className="eyebrow"><span className="dot" /> Origin</span>
              <h2>Built for the sector. From day one.</h2>
              <span className="narrative-marker">01</span>
            </Reveal>
            <Reveal as="div" className="narrative-body" delay={140}>
              <p className="lead">
                In 1999, Cornerstone Performance Solutions was founded with a specific job to do: design
                learning that builds real people for real roles across <em>South Africa&apos;s financial
                services sector</em> - with deep specialism in banking and insurance.
              </p>
              <p>
                That focus has never moved. 25 years on, we&apos;re still doing the same job - building
                qualifications, cohorts and platforms that the sector knows by name, and that the people
                who finish them carry into careers in the banks, insurers and broker networks that
                trained their predecessors.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DR INDIRA BHAGALOO - profile card */}
      <section className="section-tinted">
        <div className="container">
          <div className="ceo-grid">
            <Reveal as="div" className="ceo-portrait">
              <div className="ceo-photo">
                <Image
                  src="/team/indira.jpg"
                  alt="Dr Indira Bhagaloo, CEO of Cornerstone Performance Solutions"
                  width={1200}
                  height={1200}
                  priority
                  sizes="(max-width: 880px) 280px, 320px"
                />
              </div>
              <div className="ceo-mark">
                <span className="mono">CEO</span>
                <span className="ceo-meta">26 years · Financial Services</span>
              </div>
            </Reveal>

            <Reveal as="div" className="ceo-body" delay={140}>
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> Leadership</span>
              <h2>Dr Indira Bhagaloo</h2>
              <p className="ceo-role">Chief Executive Officer, Cornerstone Performance Solutions</p>

              <p>
                Indira leads CPS - setting the academic and vocational strategy, building the
                partnerships, expanding the programme reach and the delivery capability that sits behind
                it. She runs the team that runs the cohorts.
              </p>
              <p>
                Before CPS, Indira spent 26 years inside financial services - including executive
                positions as Head of Private Banking and Head of Business Banking Channel at one of
                South Africa&apos;s major banks. She holds a Ph.D. and an MBA.
              </p>
              <p>
                That sector experience is the reason CPS programmes work the way they do. Indira knows
                what banks need staff to be able to do because she ran those teams. Every CPS
                qualification is built with that lens.
              </p>

              <div className="ceo-creds">
                <div><strong>Ph.D.</strong><span>Doctorate</span></div>
                <div><strong>MBA</strong><span>Master of Business</span></div>
                <div><strong>26y</strong><span>Financial Services</span></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM - all staff banner + 13-portrait grid */}
      <section className="team-section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> The team</span>
              <h2>The people the sector knows by name.</h2>
              <p>
                Educators, learning designers, programme managers and delivery specialists - many with
                careers inside banking, insurance and financial services before they joined CPS. The
                people you call when a programme matters and the cohort is real.
              </p>
            </div>
          </Reveal>

          <Reveal as="div" className="team-banner">
            <Image
              src="/team/all-staff.jpg"
              alt="The Cornerstone Performance Solutions team"
              width={2400}
              height={1500}
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </Reveal>

          <div className="team-grid">
            {[
              { slug: "indira",    name: "Dr Indira Bhagaloo", role: "Chief Executive Officer" },
              { slug: "cliff",     name: "Dr Cliff Brunette",  role: "Executive: Learning & Teaching - People & Culture" },
              { slug: "karen-b",   name: "Karen Blore",        role: "Executive: Strategy & Technology" },
              { slug: "karen-v",   name: "Karen Vester",       role: "Registrar & Educational Compliance Lead" },
              { slug: "susan",     name: "Susan Nel",          role: "Learning Operations Lead" },
              { slug: "pontsho",   name: "Pontsho Talana",     role: "Student Support Team Leader" },
              { slug: "wanda",     name: "Wanda Qinisile",     role: "Business Development Segment Lead" },
              { slug: "jade",      name: "Jade Lovedale",      role: "Faculty Manager" },
              { slug: "lizzie",    name: "Lizzie Jacobs",      role: "Project Manager" },
              { slug: "dylan",     name: "Dylan Alho",         role: "Sales Manager" },
              { slug: "pauline",   name: "Pauline Williams",   role: "Implementation Manager" },
              { slug: "thando",    name: "Thando Motlhabane",  role: "Implementation Manager" },
              { slug: "simangele", name: "Simangele Gumede",   role: "Training and Workplace Operations Officer" },
            ].map((m, i) => (
              <Reveal key={m.slug} as="div" className="team-card" delay={i * 50}>
                <div className="team-photo">
                  <Image
                    src={`/team/${m.slug}.jpg`}
                    alt={`Portrait of ${m.name}`}
                    width={600}
                    height={750}
                    sizes="(max-width: 720px) 50vw, (max-width: 1100px) 33vw, 220px"
                  />
                </div>
                <div className="team-meta">
                  <h3>{m.name}</h3>
                  <span className="team-role">{m.role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY - massive quote display */}
      <section className="section-dark philosophy-section">
        <div className="container">
          <Reveal as="div" className="philosophy-block">
            <span className="eyebrow"><span className="dot" /> Our Philosophy</span>
            <blockquote className="philosophy-quote">
              <span className="quote-mark" aria-hidden>&ldquo;</span>
              <p>
                The sector doesn&apos;t hire qualifications. It hires <em>people who can do the work</em>.
              </p>
              <span className="quote-mark closing" aria-hidden>&rdquo;</span>
            </blockquote>
            <div className="philosophy-body">
              <p>
                25 years of building cohorts for banks, insurers and broker networks taught us one
                thing - the credential matters, but capability is what gets people hired, promoted and
                kept. So that&apos;s what we build for.
              </p>
              <p>
                Every CPS programme is reverse-engineered from a real role in financial services. Every
                module, every assessment, every workplace exercise exists to close the distance between
                what a student knows on day one and what the sector needs them to do on day 365.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE STAND FOR - three value cards with brand accents */}
      <section className="section-tinted">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Values</span>
              <h2>How we work.</h2>
              <p>
                Three principles shape every programme we design, every cohort we run and every
                partnership we sign.
              </p>
            </div>
          </Reveal>

          <div className="values-grid">
            <Reveal as="div" className="value-card value-yellow value-flip" delay={0}>
              <div className="value-flip-inner">
                <div className="value-face value-face-front">
                  <span className="value-mark" aria-hidden><Sparkle /></span>
                  <span className="value-num">VALUE 01</span>
                  <h3>Sector first, always</h3>
                  <p>
                    Every CPS programme is built around the work people actually do in financial
                    services - specifically in banking and insurance. We design backwards from the role,
                    not forwards from a textbook.
                  </p>
                  <span className="value-flip-hint" aria-hidden>Hover to reveal</span>
                </div>
                <div className="value-face value-face-back value-back-green" aria-hidden>
                  <div className="value-badge" style={{ backgroundImage: "url('/badges/stewardship.png')" }} />
                </div>
              </div>
            </Reveal>

            <Reveal as="div" className="value-card value-blue value-flip" delay={120}>
              <div className="value-flip-inner">
                <div className="value-face value-face-front">
                  <span className="value-mark" aria-hidden><Lightbulb /></span>
                  <span className="value-num">VALUE 02</span>
                  <h3>Built to be finished</h3>
                  <p>
                    A qualification only counts when you complete it. Structured journeys, faster
                    feedback and visible progress aren&apos;t nice-to-haves - they&apos;re what
                    separates a credential from a certificate of attendance.
                  </p>
                  <span className="value-flip-hint" aria-hidden>Hover to reveal</span>
                </div>
                <div className="value-face value-face-back value-back-blue" aria-hidden>
                  <div className="value-badge" style={{ backgroundImage: "url('/badges/innovation.png')" }} />
                </div>
              </div>
            </Reveal>

            <Reveal as="div" className="value-card value-purple value-flip" delay={240}>
              <div className="value-flip-inner">
                <div className="value-face value-face-front">
                  <span className="value-mark" aria-hidden><Briefcase /></span>
                  <span className="value-num">VALUE 03</span>
                  <h3>Ready, not just qualified</h3>
                  <p>
                    We measure ourselves against where students land after the programme - the role
                    they step into, the promotion they earn, the work they can now do. Capability is
                    the outcome. Everything else is a means.
                  </p>
                  <span className="value-flip-hint" aria-hidden>Hover to reveal</span>
                </div>
                <div className="value-face value-face-back value-back-purple" aria-hidden>
                  <div className="value-badge" style={{ backgroundImage: "url('/badges/authenticity.png')" }} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR VISION - three big numbered visions stacked */}
      <section className="section-dark vision-section">
        <div className="container">
          <Reveal as="div" className="vision-head">
            <span className="eyebrow"><span className="dot" /> Our Vision</span>
            <h2 className="vision-title">
              Three futures
              <br />
              <em>we&apos;re working toward.</em>
            </h2>
          </Reveal>

          <div className="vision-list">
            <Reveal as="div" className="vision-row vision-blue" delay={0}>
              <span className="vision-num">01</span>
              <div className="vision-content">
                <p className="vision-statement">
                  We envision <em>a more equal South Africa</em>,
                </p>
                <p className="vision-elaboration">
                  where access to quality learning is not determined by circumstance.
                </p>
              </div>
              <span className="vision-icon" aria-hidden><MapPinIcon /></span>
            </Reveal>

            <Reveal as="div" className="vision-row vision-yellow" delay={140}>
              <span className="vision-num">02</span>
              <div className="vision-content">
                <p className="vision-statement">
                  We envision <em>a prosperous Africa</em>,
                </p>
                <p className="vision-elaboration">
                  where the continent&apos;s talent is fully developed and unleashed.
                </p>
              </div>
              <span className="vision-icon" aria-hidden><Globe /></span>
            </Reveal>

            <Reveal as="div" className="vision-row vision-purple" delay={280}>
              <span className="vision-num">03</span>
              <div className="vision-content">
                <p className="vision-statement">
                  We envision <em>a kinder world</em>,
                </p>
                <p className="vision-elaboration">
                  where education bridges divides and builds understanding across communities and cultures.
                </p>
              </div>
              <span className="vision-icon" aria-hidden><HeartIcon /></span>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Local inline icons used only on About */
function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
