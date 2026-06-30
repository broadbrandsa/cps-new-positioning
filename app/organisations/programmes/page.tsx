import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import { ExperienceSection } from "@/components/experience-section";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import {
  PROGRAMMES,
  SHORT_PROGRAMMES,
  valueStreamLabel,
  type Programme,
  type ShortProgramme,
} from "@/lib/programmes";

export const metadata: Metadata = {
  title: "Workforce Programmes",
  description:
    "CPS workforce programmes for financial services, specialists in banking and insurance. Occupational learnerships, CHE-accredited higher education qualifications, credit-bearing skills programmes and strategic skills programmes, built by the partner the sector has counted on for 25 years.",
};

const heProgrammes: Programme[] = Object.values(PROGRAMMES).filter((p) => p.qualType === "HE");
const oqProgrammes: Programme[] = Object.values(PROGRAMMES).filter((p) => p.qualType === "OQ");
const ospProgrammes: ShortProgramme[] = SHORT_PROGRAMMES.filter((p) => p.kind === "OSP");
const sspProgrammes: ShortProgramme[] = SHORT_PROGRAMMES.filter((p) => p.kind === "SSP");

const enquireHref = (title: string) =>
  `mailto:organisations@cps.co.za?subject=${encodeURIComponent(`Workforce programme enquiry: ${title}`)}`;

/** Card for a Programme that has its own detail page (HE + existing OQ). */
function ProgrammeCard({ p }: { p: Programme }) {
  const nqf = p.meta.find((m) => /nqf/i.test(m.lbl))?.val;
  const duration = p.meta.find((m) => /duration/i.test(m.lbl))?.val;
  const hasPage = true; // every Programme in PROGRAMMES has a [slug] page
  return (
    <Spotlight as="div">
      <Link href={`/programmes/${p.slug}`} className="prog-card secondary workforce-card" style={{ display: hasPage ? "flex" : undefined }}>
        <div className="prog-card-top">
          <div className="pill-row">
            <span className={`pill ${p.valueStream === "universal" ? "pill-purple" : "pill-blue"}`}>
              {valueStreamLabel(p.valueStream)}
            </span>
            {nqf && <span className="pill">NQF {nqf}</span>}
            {p.saqaId && <span className="pill">SAQA {p.saqaId}</span>}
          </div>
        </div>
        <h3 className="prog-title">{p.title}</h3>
        <p className="prog-desc">{p.lede}</p>
        <div className="prog-meta">
          {nqf && <div><strong>NQF {nqf}</strong><span>level</span></div>}
          {duration && <div><strong>{duration}</strong><span>cohort</span></div>}
          {p.saqaId && <div><strong>{p.saqaId}</strong><span>SAQA ID</span></div>}
        </div>
        <span className="prog-cta">View programme <ArrowRight width={14} height={14} /></span>
      </Link>
    </Spotlight>
  );
}

/** Card for a Programme without a detail page (Insurance Claims Administrator). */
function ProgrammeListCard({ p }: { p: Programme }) {
  const nqf = p.meta.find((m) => /nqf/i.test(m.lbl))?.val;
  const duration = p.meta.find((m) => /duration/i.test(m.lbl))?.val;
  return (
    <Spotlight as="div">
      <a href={enquireHref(p.title)} className="prog-card secondary workforce-card" style={{ display: "flex" }}>
        <div className="prog-card-top">
          <div className="pill-row">
            <span className={`pill ${p.valueStream === "universal" ? "pill-purple" : "pill-blue"}`}>
              {valueStreamLabel(p.valueStream)}
            </span>
            {nqf && <span className="pill">NQF {nqf}</span>}
            {p.saqaId && <span className="pill">SAQA {p.saqaId}</span>}
          </div>
        </div>
        <h3 className="prog-title">{p.title}</h3>
        <p className="prog-desc">{p.lede}</p>
        <div className="prog-meta">
          {nqf && <div><strong>NQF {nqf}</strong><span>level</span></div>}
          {duration && <div><strong>{duration}</strong><span>cohort</span></div>}
          {p.saqaId && <div><strong>{p.saqaId}</strong><span>SAQA ID</span></div>}
        </div>
        <span className="prog-cta">Discuss programme <ArrowRight width={14} height={14} /></span>
      </a>
    </Spotlight>
  );
}

/** Card for a Short Programme (OSP / SSP) - no detail page, mailto enquire. */
function ShortProgrammeCard({ p }: { p: ShortProgramme }) {
  return (
    <a href={enquireHref(p.title)} className="prog-card secondary workforce-card workforce-card-short" style={{ display: "flex" }}>
      <div className="prog-card-top">
        <div className="pill-row">
          <span className={`pill ${p.valueStream === "universal" ? "pill-purple" : "pill-blue"}`}>
            {valueStreamLabel(p.valueStream)}
          </span>
          {p.nqfLevel && <span className="pill">NQF {p.nqfLevel}</span>}
          {p.kind === "OSP" && <span className="pill pill-yellow">Credit-bearing</span>}
        </div>
      </div>
      <h3 className="prog-title" style={{ fontSize: 16 }}>{p.title}</h3>
      <p className="prog-desc" style={{ fontSize: 13.5 }}>{p.desc}</p>
      <span className="prog-cta">Discuss programme <ArrowRight width={12} height={12} /></span>
    </a>
  );
}

export default function OrganisationsProgrammes() {
  return (
    <main>
      <section className="page-hero has-photo">
        <div
          className="page-hero-photo"
          aria-hidden
          style={{ backgroundImage: "url('/linkedin-sales-solutions-EI50ZDA-l8Y-unsplash.jpg')" }}
        />
        <div className="page-hero-overlay" aria-hidden />
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/organisations">Organisations</Link><span className="sep">/</span><span style={{ color: "var(--cps-purple)" }}>Workforce Programmes</span>
          </div>
          <div style={{ marginTop: 24, maxWidth: 880 }}>
            <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-purple)" }} /> Workforce Programmes</span>
            <h1>The workforce programmes financial services relies on.</h1>
            <p style={{ marginTop: 24, fontSize: 18 }}>
              Occupational qualifications delivered as workplace-integrated learnerships, CHE-accredited
              higher-education credentials, and focused skills programmes, all built around the
              capability the sector actually pays for. 25 years of doing nothing else.
            </p>
            <p style={{ marginTop: 16, fontSize: 16, maxWidth: 720 }}>
              Pick a category below, or talk to us about combining programmes into a workforce pathway
              tailored to your team.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOUR STAFF CAN EXPECT */}
      <ExperienceSection variant="organisations" surface="tinted" />

      {/* SECTION 1: HIGHER EDUCATION QUALIFICATIONS */}
      <section id="higher-education">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> Higher Education qualifications</span>
              <h2>CHE-accredited credentials. Cohort-deliverable.</h2>
              <p>
                CHE-accredited higher-education qualifications for cohort delivery via employer
                sponsorship, typically used to build entry-level banking talent and emerging-leader
                pipelines. The credentials the sector recognises by name.
              </p>
            </div>
          </Reveal>
          <div className="prog-grid">
            {heProgrammes.map((p) => (
              <Reveal key={p.slug}>
                <ProgrammeCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: OCCUPATIONAL QUALIFICATIONS */}
      <section id="occupational" className="section-tinted">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-purple)" }} /> Occupational qualifications (Learnerships)</span>
              <h2>Workplace-integrated qualifications. Built for the sector&apos;s actual roles.</h2>
              <p>
                QCTO-aligned occupational qualifications delivered as workplace-integrated learnerships,
                business banking, insurance, investment, claims and risk. The capability banks, insurers
                and broker networks ask us to build, year after year.
              </p>
            </div>
          </Reveal>
          <div className="prog-grid">
            {oqProgrammes.map((p) =>
              p.slug === "insurance-claims-administrator" ? (
                <Reveal key={p.slug}><ProgrammeListCard p={p} /></Reveal>
              ) : (
                <Reveal key={p.slug}><ProgrammeCard p={p} /></Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: OSP - CREDIT-BEARING SKILLS PROGRAMMES */}
      <section id="osp">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> Credit-bearing skills programmes</span>
              <h2>Short programmes that carry NQF credits.</h2>
              <p>
                Occupational Skills Programmes (OSP), registered short programmes carrying NQF credits
                at Level 6 or 7. Used by financial services organisations to build specific digital and
                innovation capability that ladders into wider qualification pathways.
              </p>
            </div>
          </Reveal>
          <div className="prog-grid cols-2">
            {ospProgrammes.map((p) => (
              <Reveal key={p.id}>
                <ShortProgrammeCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SSP - STRATEGIC SKILLS PROGRAMMES */}
      <section id="ssp" className="section-tinted">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-purple)" }} /> Skills programmes</span>
              <h2>Focused 3-6 month programmes for sector-specific capability shifts.</h2>
              <p>
                Strategic Skills Programmes (SSP), non-credit, focused programmes for the capability
                shifts banks, insurers and financial services groups need fast: sales performance, leadership,
                client experience, relationship management and digital change.
              </p>
            </div>
          </Reveal>
          <div className="prog-grid cols-3">
            {sspProgrammes.map((p) => (
              <Reveal key={p.id}>
                <ShortProgrammeCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Need a programme for a team or cohort?</span>
              <h2>Tell us the capability gap. We&apos;ll design the pathway.</h2>
              <p>
                We&apos;ve been combining qualifications, learnerships and skills programmes into bespoke
                workforce pathways for banks and insurers for 25 years. If you&apos;re unsure which
                combination fits your team, talk to us, chances are we&apos;ve already built something
                close to it.
              </p>
            </div>
            <Link href="/contact#partnerships" className="btn btn-yellow btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              Request a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
