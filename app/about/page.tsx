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
    "Founded in 1999, Cornerstone Performance Solutions builds learning that emancipates. A small band of doers driven by belief, building a bridge between potential and opportunity.",
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
              <h1 className="about-display">Our story.</h1>
              <p className="about-lede">
                Founded by a small band of doers, driven by belief - building a bridge between
                potential and opportunity.
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
              <h2>Born From A Belief</h2>
              <span className="narrative-marker">01</span>
            </Reveal>
            <Reveal as="div" className="narrative-body" delay={140}>
              <p className="lead">
                In 1999, Cornerstone Performance Solutions was founded by a small band of doers who
                believed in a simple but powerful idea: that <em>inequality and poverty reflect a poverty
                of opportunity, not of talent</em>.
              </p>
              <p>
                From the very beginning, Cornerstone set out to create learning experiences that
                emancipate people from the disadvantage of limited opportunity - opening doors that had
                long been closed and proving that, given the right conditions, anyone can thrive.
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
                As CEO of Cornerstone Performance Solutions, Dr Indira Bhagaloo leads a team of top-tier
                learning and development professionals - defining and executing the academic and vocational
                strategy, driving business development and relations, expanding product and reach, and
                building scalable delivery capability.
              </p>
              <p>
                With 26 years of experience in the Financial Services Sector and a Ph.D. and MBA graduate,
                Indira previously held executive positions as Head of Private Banking and Business Banking
                Channel at a major bank in South Africa.
              </p>
              <p>
                Her passion lies in providing impactful learning experiences built on behavioural change,
                not just the sharing of information. With CPS&apos;s learning solutions, she helps
                organisations close gaps in critical future capability areas.
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
              <h2>The people behind CPS.</h2>
              <p>
                A small band of doers - educators, learning designers, programme managers and
                delivery specialists - building learning experiences that move people forward.
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
                Inequality and poverty reflect a <em>poverty of opportunity</em>,
                not of talent.
              </p>
              <span className="quote-mark closing" aria-hidden>&rdquo;</span>
            </blockquote>
            <div className="philosophy-body">
              <p>
                This belief is the cornerstone of everything we do. We see potential where others see
                limitation. We design learning experiences that don&apos;t just transfer knowledge - they
                transform lives.
              </p>
              <p>
                Over more than two decades, Cornerstone has become a home to many people and ideas, all
                united by the pursuit of learning that emancipates.
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
              <h2>What we stand for.</h2>
              <p>
                Three convictions shape everything we build, every programme we design, and every
                student we serve.
              </p>
            </div>
          </Reveal>

          <div className="values-grid">
            <Reveal as="div" className="value-card value-yellow value-flip" delay={0}>
              <div className="value-flip-inner">
                <div className="value-face value-face-front">
                  <span className="value-mark" aria-hidden><Sparkle /></span>
                  <span className="value-num">VALUE 01</span>
                  <h3>Learning That Emancipates</h3>
                  <p>
                    We pursue education that frees people from the disadvantage of limited opportunity,
                    unlocking potential that has always been there.
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
                  <h3>Science as Love&apos;s Greatest Ally</h3>
                  <p>
                    We believe rigorous, evidence-based learning design is the most compassionate thing we
                    can do - because science ensures our care translates into real outcomes.
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
                  <h3>Belief In Potential</h3>
                  <p>
                    Everything we build, every programme we design, and every student we serve is guided by
                    empathy, respect, and a deep belief in human potential.
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
              <em>we&apos;re building toward.</em>
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
