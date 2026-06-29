export type ProgrammeCategory =
  | "banking"
  | "insurance"
  | "investment"
  | "leadership"
  | "risk"
  | "sales"
  | "skills";

export type ProgrammeKind = "qualification" | "skills-programme";

export type ProgrammePill = { label: string; cls?: string };

export type ProgrammeMeta = {
  lbl: string;
  val: string;
  big?: boolean;
  yellow?: boolean;
  suffix?: string;
};

export type ProgrammeFAQ = { q: string; a: string };

/** Value stream classification used across the workforce-programmes listing. */
export type ValueStream = "banking" | "fpi" | "universal";

export type SalesChannel = "b2b" | "b2bc";

/** Qualification type - drives the section grouping on /organisations/programmes. */
export type QualType = "HE" | "OQ";

export type Programme = {
  slug: string;
  cat: ProgrammeCategory;
  kind: ProgrammeKind;
  title: string;
  shortTitle?: string;
  pills: ProgrammePill[];
  lede: string;
  meta: ProgrammeMeta[];
  about: string;
  benefits?: string[];
  modules?: string[];
  modulesNote?: string;
  pathways?: string[];
  audience?: string[];
  outcomes?: string[];
  /** Marks flagship programmes that render with the richer detail template. */
  flagship?: boolean;
  /** Hero background image path (used by the flagship template).
   *  Also acts as the poster image while .heroVideo is loading. */
  heroImage?: string;
  /** Optional hero background video. When set, replaces the photo on the
   *  flagship hero. Use a muted, loopable MP4. */
  heroVideo?: string;
  /** Playback rate for heroVideo (1 = native speed). */
  heroVideoSpeed?: number;
  /** Brand accent for the flagship template - blue, purple, or green. */
  accent?: "blue" | "purple" | "green";
  /** FAQ data for the flagship template. */
  faqs?: ProgrammeFAQ[];
  /** Small explanatory note rendered as a footnote beneath the About paragraph. */
  aboutFootnote?: string;
  /** Qualification type - HE (Higher Education) or OQ (Occupational). */
  qualType: QualType;
  /** Value stream classification. */
  valueStream: ValueStream;
  /** Sales channel - b2b only or b2b+b2c (B2B&C). B2B&C programmes appear on
   *  both student and org sides; B2B-only programmes appear only on org side. */
  salesChannel: SalesChannel;
  /** SAQA ID (string to allow leading zeros / LP-prefixed compound IDs). */
  saqaId?: string;
};

/** Short programmes (OSP credit-bearing + SSP no-credit) - list-only on
 *  /organisations/programmes, no individual detail pages. */
export type ShortProgrammeKind = "OSP" | "SSP";
export type ShortProgramme = {
  id: string;
  kind: ShortProgrammeKind;
  title: string;
  desc: string;
  nqfLevel?: string;
  valueStream: ValueStream;
  industry: string;
};

/**
 * Authoritative programme data. Only programmes from the client's June 2026
 * data feed are listed - teach-out qualifications (Core Banking and Financial
 * Services, Agile Banking Professional, Leadership Agility in Financial
 * Services) are intentionally omitted.
 *
 * B2B&C programmes appear on both /programmes (students) and
 * /organisations/programmes. B2B-only programmes appear on org side only.
 */
export const PROGRAMMES: Record<string, Programme> = {
  // ============== HE (HIGHER EDUCATION) QUALIFICATIONS - 3 programmes, B2B&C ==============
  "higher-certificate-banking": {
    slug: "higher-certificate-banking",
    qualType: "HE",
    valueStream: "banking",
    salesChannel: "b2bc",
    saqaId: "111129",
    cat: "banking",
    kind: "qualification",
    title: "Higher Certificate in Banking",
    shortTitle: "HCIB",
    pills: [
      { label: "Most popular", cls: "pill-yellow" },
      { label: "NQF 5" },
      { label: "Higher Education" },
      { label: "120 credits" },
    ],
    lede: "Launch banking careers with comprehensive foundations that last.",
    meta: [
      { lbl: "Monthly", val: "R2,480", big: true, yellow: true },
      { lbl: "Duration", val: "12 months" },
      { lbl: "NQF Level", val: "5" },
      { lbl: "Credits", val: "120" },
      { lbl: "Start date", val: "01 Oct 2026" },
      { lbl: "Applications close", val: "17 Sept 2026" },
      { lbl: "SAQA ID", val: "111129" },
      { lbl: "Awarded by", val: "Higher Education (CHE)" },
    ],
    about:
      "The Higher Certificate in Banking is a 12-month, NQF Level 5 higher education qualification designed to launch banking careers with strong, comprehensive foundations. Practical banking knowledge is taught alongside applied client-solutioning, ethics and compliance - by people who actually work in the sector.",
    benefits: [
      "<strong>Recognised by SA's biggest banks</strong> for entry-level recruitment",
      "<strong>Study while you work</strong> - flexible blended delivery",
      "<strong>Mobile-friendly platform</strong> - CPSLearn adapts to your schedule and device",
      "<strong>Industry practitioner teaching</strong> - not just textbook theory",
    ],
    modules: [
      "Academic Literacy",
      "Economics 1",
      "Foundational Banking Practice",
      "Financial Accounting 1",
      "Ethics and Compliance in Banking",
      "Client Solutioning in Banking",
      "Banking specialisation pathway",
    ],
    modulesNote: "Seven modules build foundational banking competence over 12 months.",
    audience: [
      "<strong>Matric graduates</strong> looking for a clear path into banking",
      "<strong>Career changers</strong> moving into financial services from another sector",
      "<strong>Junior banking staff</strong> needing a formal qualification to progress",
    ],
    outcomes: [
      "Bank consultant roles",
      "Branch and customer-service banking",
      "Junior banking professional positions",
      "Progression into specialist banking functions",
    ],
    flagship: true,
    heroImage: "/brooke-cagle-JBwcenOuRCg-unsplash.jpg",
    heroVideo: "/14324724_1280_720_24fps.mp4",
    heroVideoSpeed: 0.75,
    accent: "blue",
    faqs: [
      {
        q: "Do I need to be working in a bank already to apply?",
        a: "No. HCIB is designed both as a gateway for matric graduates and career-changers, and as a formal credential for junior banking staff already in the sector. Anyone with matric (or equivalent) can apply.",
      },
      {
        q: "Is there an upfront fee?",
        a: "There is no upfront fee. A R300 application fee is payable upon completing your application - not after acceptance. Tuition is billed monthly at R2,480 over the 12-month duration.",
      },
      {
        q: "Will I be able to study while I work?",
        a: "Yes - HCIB is delivered through CPSLearn with flexible, mobile-friendly access. The programme is designed for working professionals, so you can log in around your schedule and pick up where you left off.",
      },
      {
        q: "How is the programme assessed?",
        a: "Assessments are integrated throughout each module - not stacked at the end. Most assessments are returned with feedback within minutes through CPSLearn so the learning loop stays tight.",
      },
      {
        q: "Is HCIB recognised by the major South African banks?",
        a: "Yes. HCIB is an NQF Level 5 higher-education qualification accredited through the CHE and registered on the SAQA framework (SAQA ID 111129). It is recognised by South Africa's major banks for entry-level recruitment.",
      },
      {
        q: "What happens after I apply?",
        a: "Our admissions team will be in touch within 3 business days to confirm your application, walk you through the requirements, and answer any questions before you commit.",
      },
    ],
  },

  "higher-certificate-banking-business-banking": {
    slug: "higher-certificate-banking-business-banking",
    qualType: "HE",
    valueStream: "banking",
    salesChannel: "b2bc",
    saqaId: "111129",
    cat: "banking",
    kind: "qualification",
    title: "Higher Certificate in Banking - Business Banking",
    shortTitle: "HCIBB",
    pills: [
      { label: "Business Banking", cls: "pill-blue" },
      { label: "NQF 5" },
      { label: "Higher Education" },
      { label: "120 credits" },
    ],
    lede: "Get the qualification and skills that South Africa's major banks need to grow business banking professionals.",
    meta: [
      { lbl: "Monthly", val: "R2,480", big: true, yellow: true },
      { lbl: "Duration", val: "12 months" },
      { lbl: "NQF Level", val: "5" },
      { lbl: "Credits", val: "120" },
      { lbl: "Start date", val: "01 Oct 2026" },
      { lbl: "Applications close", val: "17 Sept 2026" },
      { lbl: "SAQA ID", val: "111129" },
      { lbl: "Awarded by", val: "Higher Education (CHE)" },
    ],
    about:
      "The Higher Certificate in Banking - Business Banking is a 12-month, NQF Level 5 higher education qualification that gives students the complete skill set South African banks value most. Whether students are starting fresh or advancing their career, the seven modules transform how they think about business banking, and how banks think about them. Designed for matric graduates, bank staff, and anyone who needs learning that works around work, family and life.",
    benefits: [
      "<strong>Recognised by SA's biggest banks</strong> for entry-level recruitment",
      "<strong>Business banking specialisation</strong> - commercial banking client advisory and business acumen",
      "<strong>Study anywhere, anytime</strong> - flexible online learning on tablet, laptop or computer",
      "<strong>NQF 5 CHE-accredited</strong> with clear progression to NQF 6 qualifications",
    ],
    modules: [
      "Academic Literacy (10 credits)",
      "Economics (15 credits)",
      "Foundational Banking Practice (20 credits)",
      "Financial Accounting (15 credits)",
      "Ethics and Compliance in Banking (20 credits)",
      "Client Solutioning in Banking (20 credits)",
      "Business Banking specialisation (20 credits)",
    ],
    modulesNote: "Six core modules (100 credits) plus the Business Banking specialisation (20 credits).",
    audience: [
      "<strong>Matric graduates</strong> with a strong interest in commercial banking",
      "<strong>Bank staff</strong> wanting to formalise commercial banking knowledge",
      "<strong>Career changers</strong> moving into business banking roles",
    ],
    outcomes: [
      "Business banking client advisor roles",
      "Relationship banking for SME and commercial clients",
      "Commercial banking analyst positions",
      "Progression into NQF 6 business banking qualifications",
    ],
    flagship: true,
    heroImage: "/brooke-cagle-JBwcenOuRCg-unsplash.jpg",
    heroVideo: "/14324724_1280_720_24fps.mp4",
    heroVideoSpeed: 0.75,
    accent: "blue",
    faqs: [
      {
        q: "How is this different from the standard Higher Certificate in Banking?",
        a: "HCIB - Business Banking shares the same six core banking modules and same SAQA registration (111129) as the standard HCIB. The seventh module specialises in business banking - covering commercial banking principles, financial analysis, lending and client advisory for business and SME clients.",
      },
      {
        q: "Do I need business banking experience already?",
        a: "No. The programme is designed both as a gateway for newcomers and as a formal credential for staff already in client-facing or business banking roles. Matric or equivalent is the entry requirement.",
      },
      {
        q: "Is there an upfront fee?",
        a: "There is no upfront fee. A R300 application fee is payable upon completing your application - not after acceptance. Tuition is billed monthly at R2,480 over the 12-month duration.",
      },
      {
        q: "Can my employer sponsor this programme?",
        a: "Yes. Many banks sponsor HCIB - Business Banking for new client-facing hires and graduate-intake cohorts. Speak to admissions if you'd like to bring this to your employer, or if your employer is already enrolling cohorts.",
      },
      {
        q: "Will I be able to study while I work?",
        a: "Yes - the programme is delivered through CPSLearn with flexible, mobile-friendly access designed for working professionals and students balancing work, family and life.",
      },
      {
        q: "What happens after I apply?",
        a: "Our admissions team will be in touch within 3 business days to confirm your application, walk you through the requirements, and answer any questions before you commit.",
      },
    ],
    aboutFootnote:
      "<strong>HCIB and HCIB - Business Banking share SAQA ID 111129.</strong> They differ in the seventh specialisation module - this version focuses specifically on commercial and business banking. Choose this version if you're heading into client-facing business banking roles.",
  },

  "advanced-certificate-leadership": {
    slug: "advanced-certificate-leadership",
    qualType: "HE",
    valueStream: "universal",
    salesChannel: "b2bc",
    saqaId: "120160",
    cat: "leadership",
    kind: "qualification",
    title: "Advanced Certificate in Leadership",
    shortTitle: "ACL6",
    pills: [
      { label: "Leadership", cls: "pill-purple" },
      { label: "NQF 6" },
      { label: "Higher Education" },
      { label: "120 credits" },
    ],
    lede: "Develop leaders who consistently deliver strategic outcomes.",
    meta: [
      { lbl: "Monthly", val: "R2,688", big: true, yellow: true },
      { lbl: "Duration", val: "12 months" },
      { lbl: "NQF Level", val: "6" },
      { lbl: "Credits", val: "120" },
      { lbl: "Start date", val: "01 Oct 2026" },
      { lbl: "Applications close", val: "17 Sept 2026" },
      { lbl: "SAQA ID", val: "120160" },
      { lbl: "Awarded by", val: "Higher Education (CHE)" },
    ],
    about:
      "Leadership Agility in the Financial Markets is the flagship next-step qualification for professionals who have outgrown technical mastery and are now leading teams, projects or change. Built on the methodology that won Brandon Hall recognition, it develops decision-making, paradigm shifts and applied leadership behaviour.",
    aboutFootnote:
      "<strong>What's Brandon Hall?</strong> The Brandon Hall Group HCM Excellence Awards are one of the most respected international recognitions in learning and talent development - awarded to programmes that demonstrate measurable impact on people and performance. <a href=\"https://brandonhall.com/excellence-awards/\" target=\"_blank\" rel=\"noopener noreferrer\">See the awards programme ↗</a>",
    benefits: [
      "<strong>Brandon Hall award-winning methodology</strong> - internationally recognised approach",
      "<strong>Built for working leaders</strong> - fully online, study in evenings and weekends",
      "<strong>Direct application</strong> - every module ends in workplace-applied competency",
      "<strong>NQF 6 credential</strong> recognised across financial services and broader",
    ],
    modules: [
      "Self as Leader",
      "Leading People",
      "Leading Performance",
      "Leading Strategy",
      "Leading Change",
      "Applied Leadership Project",
    ],
    modulesNote: "Six modules across leadership agility, decision making and applied behaviour.",
    audience: [
      "<strong>Mid-career professionals</strong> 3-7 years into financial services",
      "<strong>Newly promoted team leads</strong> stepping into formal management",
      "<strong>High-potential employees</strong> on succession or talent pipelines",
    ],
    outcomes: [
      "Team lead and middle-management roles",
      "Project and programme leadership",
      "Change and transformation positions",
      "Pipeline into senior leadership development",
    ],
    flagship: true,
    heroImage: "/microsoft-365-kTFmwxkF5bQ-unsplash.jpg",
    heroVideo: "/3248065-hd_1280_720_25fps.mp4",
    heroVideoSpeed: 0.75,
    accent: "purple",
    faqs: [
      {
        q: "Do I need prior leadership experience?",
        a: "ACL is designed for professionals 3-7 years into their career - typically newly promoted team leads, mid-career professionals, or high-potential employees on a succession track. Formal leadership experience helps, but the programme is built to formalise emerging leadership capability, not to require it upfront.",
      },
      {
        q: "Is there an upfront fee?",
        a: "There is no upfront fee. A R300 application fee is payable upon completing your application - not after acceptance. Tuition is billed monthly at R2,688 over the 12-month duration.",
      },
      {
        q: "How is ACL delivered?",
        a: "Fully online through CPSLearn. The programme is designed for working leaders - you can study in the evenings and on weekends, log in from any device, and pick up where you left off without re-orienting.",
      },
      {
        q: "What makes ACL different from a generic leadership course?",
        a: "ACL is built on Brandon Hall award-winning methodology and is an NQF Level 6 higher-education qualification (CHE accredited, SAQA ID 120160) - not a short course. Every module ends in workplace-applied competency, so you leave with behaviour change, not just theory.",
      },
      {
        q: "Will ACL help me get promoted?",
        a: "ACL is positioned for professionals stepping into formal team leadership, project leadership, or change roles. The programme develops the decision-making, paradigm-shift and applied leadership behaviour those roles require - and provides a recognised NQF 6 credential to back it up.",
      },
      {
        q: "Can my employer pay for it?",
        a: "Yes - many organisations sponsor ACL for high-potential employees. Speak to admissions if your employer would like to sponsor your enrolment, or if you'd like an info pack to present internally.",
      },
    ],
  },

  // ============== OQ (OCCUPATIONAL QUALIFICATIONS) - 6 programmes, B2B only ==============
  "business-banking-practitioner": {
    slug: "business-banking-practitioner",
    qualType: "OQ",
    valueStream: "banking",
    salesChannel: "b2b",
    saqaId: "120117",
    cat: "banking",
    kind: "qualification",
    title: "Business Banking Practitioner",
    shortTitle: "BBP",
    pills: [
      { label: "Business Banking", cls: "pill-blue" },
      { label: "NQF 6" },
      { label: "QCTO" },
    ],
    lede:
      "Build business banking professionals who win relationships through insight. A 12-month occupational qualification grounded in real business banking practice.",
    meta: [
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Duration", val: "12 months" },
      { lbl: "NQF Level", val: "6" },
      { lbl: "SAQA ID", val: "120117" },
      { lbl: "Awarded by", val: "QCTO" },
    ],
    about:
      "The Business Banking Practitioner qualification is a workplace-integrated NQF Level 6 occupational qualification (QCTO accredited, SAQA ID 120117) for organisations developing SME and commercial banking professionals. It builds the relationship capability, client insight and business-growth conversation skills business banking teams need.",
    benefits: [
      "<strong>Workplace-integrated</strong> learning, designed to apply as it builds",
      "<strong>QCTO accredited</strong> occupational qualification (NQF 6)",
      "<strong>Built for business banking teams</strong> in regulated environments",
      "<strong>12-month cohort delivery</strong> through CPSLearn",
    ],
    audience: [
      "<strong>Business banking teams</strong> developing client capability",
      "<strong>Commercial banking professionals</strong> moving into advisory roles",
      "<strong>SME banking specialists</strong> deepening relationship skills",
    ],
    outcomes: [
      "Business banking practitioner roles",
      "Commercial banking client advisory positions",
      "SME relationship banking",
    ],
  },

  "insurance-underwriter": {
    slug: "insurance-underwriter",
    qualType: "OQ",
    valueStream: "fpi",
    salesChannel: "b2b",
    saqaId: "117329",
    cat: "insurance",
    kind: "qualification",
    title: "Insurance Agent: Insurance Underwriter",
    shortTitle: "Insurance Underwriter",
    pills: [
      { label: "Insurance", cls: "pill-blue" },
      { label: "NQF 5" },
      { label: "QCTO" },
    ],
    lede:
      "A QCTO-aligned occupational qualification for organisations developing underwriting capability in short-term and long-term insurance environments.",
    meta: [
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Duration", val: "12 months" },
      { lbl: "NQF Level", val: "5" },
      { lbl: "SAQA ID", val: "117329" },
      { lbl: "Awarded by", val: "QCTO" },
    ],
    about:
      "An NQF Level 5 occupational qualification (QCTO accredited, SAQA ID 117329) for underwriting teams in regulated insurance environments. Workplace-integrated and designed for delivery via organisational cohorts.",
    benefits: [
      "<strong>Workplace-integrated</strong> learning for active underwriting teams",
      "<strong>QCTO accredited</strong> occupational qualification (NQF 5)",
      "<strong>Regulated industry alignment</strong> across short and long-term insurance",
      "<strong>12-month cohort delivery</strong>",
    ],
    audience: [
      "<strong>Underwriting teams</strong> in short or long-term insurance environments",
      "<strong>Junior insurance professionals</strong> moving into underwriting",
    ],
    outcomes: [
      "Insurance underwriter positions",
      "Underwriting analyst roles",
      "Progression into senior underwriting capability",
    ],
  },

  "long-term-insurance-advisor": {
    slug: "long-term-insurance-advisor",
    qualType: "OQ",
    valueStream: "fpi",
    salesChannel: "b2b",
    saqaId: "105022",
    cat: "insurance",
    kind: "qualification",
    title: "Long-Term Insurance Advisor",
    shortTitle: "LTIA",
    pills: [
      { label: "Insurance", cls: "pill-blue" },
      { label: "NQF 5" },
      { label: "QCTO" },
    ],
    lede:
      "A QCTO-aligned occupational qualification for organisations developing long-term insurance advisor capability.",
    meta: [
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Duration", val: "12 months" },
      { lbl: "NQF Level", val: "5" },
      { lbl: "SAQA ID", val: "105022" },
      { lbl: "Awarded by", val: "QCTO" },
    ],
    about:
      "An NQF Level 5 occupational qualification (QCTO accredited, SAQA ID 105022) for advisors in regulated long-term insurance environments. Workplace-integrated and designed for delivery via organisational cohorts.",
    benefits: [
      "<strong>Regulated long-term insurance</strong> compliance alignment",
      "<strong>QCTO accredited</strong> occupational qualification (NQF 5)",
      "<strong>Workplace-integrated</strong> for active advisor teams",
      "<strong>12-month cohort delivery</strong>",
    ],
    audience: [
      "<strong>Long-term insurance advisors</strong> in regulated environments",
      "<strong>Broker networks</strong> developing advisor capability",
    ],
    outcomes: [
      "Long-term insurance advisor positions",
      "Compliance-aligned advisory roles",
      "Progression into senior advisor capability",
    ],
  },

  "investment-advisor": {
    slug: "investment-advisor",
    qualType: "OQ",
    valueStream: "fpi",
    salesChannel: "b2b",
    saqaId: "105021",
    cat: "investment",
    kind: "qualification",
    title: "Investment Advisor",
    shortTitle: "Investment Advisor",
    pills: [
      { label: "Investment", cls: "pill-blue" },
      { label: "NQF 6" },
      { label: "QCTO" },
    ],
    lede:
      "A QCTO-aligned occupational qualification for organisations developing investment, wealth and client portfolio advisory capability.",
    meta: [
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Duration", val: "12 months" },
      { lbl: "NQF Level", val: "6" },
      { lbl: "SAQA ID", val: "105021" },
      { lbl: "Awarded by", val: "QCTO" },
    ],
    about:
      "An NQF Level 6 occupational qualification (QCTO accredited, SAQA ID 105021) for advisors in investment, wealth and client portfolio environments. Workplace-integrated and designed for delivery via organisational cohorts.",
    benefits: [
      "<strong>Technical and advisory capability</strong> for investment teams",
      "<strong>QCTO accredited</strong> occupational qualification (NQF 6)",
      "<strong>Workplace-integrated</strong> for active advisor teams",
      "<strong>12-month cohort delivery</strong>",
    ],
    audience: [
      "<strong>Investment advisors</strong> and wealth managers",
      "<strong>Client portfolio teams</strong> developing technical capability",
    ],
    outcomes: [
      "Investment advisor positions",
      "Client portfolio management roles",
      "Wealth advisory progression",
    ],
  },

  "organisational-risk-practitioner": {
    slug: "organisational-risk-practitioner",
    qualType: "OQ",
    valueStream: "universal",
    salesChannel: "b2b",
    saqaId: "94222",
    cat: "risk",
    kind: "qualification",
    title: "Organisational Risk Practitioner",
    shortTitle: "Organisational Risk Practitioner",
    pills: [
      { label: "Risk", cls: "pill-purple" },
      { label: "NQF 6" },
      { label: "QCTO" },
    ],
    lede:
      "An NQF 6 occupational qualification for risk practitioners in financial services and regulated industries.",
    meta: [
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Duration", val: "12 months" },
      { lbl: "NQF Level", val: "6" },
      { lbl: "SAQA ID", val: "94222" },
      { lbl: "Awarded by", val: "QCTO" },
    ],
    about:
      "An NQF Level 6 occupational qualification (QCTO accredited, SAQA ID 94222) for risk, compliance and assurance teams in regulated financial services and broader regulated industries. Workplace-integrated.",
    benefits: [
      "<strong>Regulated industry alignment</strong> for risk and compliance teams",
      "<strong>QCTO accredited</strong> occupational qualification (NQF 6)",
      "<strong>Workplace-integrated</strong> for active risk practitioners",
      "<strong>12-month cohort delivery</strong>",
    ],
    audience: [
      "<strong>Risk practitioners</strong> in financial services",
      "<strong>Compliance and assurance teams</strong> in regulated industries",
    ],
    outcomes: [
      "Organisational risk practitioner positions",
      "Risk and compliance specialist roles",
      "Progression into senior risk leadership",
    ],
  },

  "insurance-claims-administrator": {
    slug: "insurance-claims-administrator",
    qualType: "OQ",
    valueStream: "fpi",
    salesChannel: "b2b",
    saqaId: "99668",
    cat: "insurance",
    kind: "qualification",
    title: "Insurance Claims Administrator",
    shortTitle: "Insurance Claims Administrator",
    pills: [
      { label: "Insurance", cls: "pill-blue" },
      { label: "NQF 4" },
      { label: "QCTO" },
    ],
    lede:
      "A QCTO-aligned occupational qualification for organisations developing insurance claims administration and assessment capability.",
    meta: [
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Duration", val: "12 months" },
      { lbl: "NQF Level", val: "4" },
      { lbl: "SAQA ID", val: "99668" },
      { lbl: "Awarded by", val: "QCTO" },
    ],
    about:
      "An NQF Level 4 occupational qualification (QCTO accredited, SAQA ID 99668) for claims administration and assessment teams in regulated insurance environments. Workplace-integrated cohort delivery.",
    benefits: [
      "<strong>Claims administration capability</strong> across insurance lines",
      "<strong>QCTO accredited</strong> occupational qualification (NQF 4)",
      "<strong>Workplace-integrated</strong> for active claims teams",
      "<strong>12-month cohort delivery</strong>",
    ],
    audience: [
      "<strong>Claims administration teams</strong> in short and long-term insurance",
      "<strong>Junior insurance professionals</strong> moving into claims roles",
    ],
    outcomes: [
      "Insurance claims administrator positions",
      "Claims assessor roles",
      "Progression into senior claims capability",
    ],
  },
};

export const PROGRAMME_SLUGS = Object.keys(PROGRAMMES);

export function getProgramme(slug: string): Programme | undefined {
  return PROGRAMMES[slug];
}

/** Student-facing programmes - B2B&C only. Used by /programmes (students). */
export function getStudentProgrammes(): Programme[] {
  return Object.values(PROGRAMMES).filter((p) => p.salesChannel === "b2bc");
}

/** All programmes (B2B + B2B&C). Used by /organisations/programmes. */
export function getOrgProgrammes(): Programme[] {
  return Object.values(PROGRAMMES);
}

/** ============== SHORT PROGRAMMES (OSP + SSP) - org-side only, list-only ============== */
export const SHORT_PROGRAMMES: ShortProgramme[] = [
  // -------- OSP (Credit-Bearing Skills Programmes, Registered) --------
  {
    id: "digital-innovation-transformation",
    kind: "OSP",
    title: "Digital Innovation: Transformation",
    desc: "Develop digital innovation capability for transformation leads driving change in banking environments.",
    nqfLevel: "6",
    valueStream: "banking",
    industry: "Banking",
  },
  {
    id: "digital-innovation-accelerator",
    kind: "OSP",
    title: "Digital Innovation: Accelerator",
    desc: "Build accelerator-level digital innovation capability for senior practitioners shaping digital strategy.",
    nqfLevel: "7",
    valueStream: "banking",
    industry: "Banking",
  },

  // -------- SSP (No-credit Strategic Skills Programmes) --------
  {
    id: "foundations-of-value-selling",
    kind: "SSP",
    title: "Foundations of Value Selling",
    desc: "Move client-facing teams from transactional selling to value-led client conversations.",
    valueStream: "universal",
    industry: "Sales",
  },
  {
    id: "rm-affluent-market-banker",
    kind: "SSP",
    title: "RM for Affluent Market Banker",
    desc: "Develop relationship management capability for bankers serving affluent client portfolios.",
    valueStream: "banking",
    industry: "Banking",
  },
  {
    id: "rm-bcc-market-banker",
    kind: "SSP",
    title: "RM for BCC Market Bankers",
    desc: "Develop relationship management capability for business and commercial client (BCC) market bankers.",
    valueStream: "banking",
    industry: "Banking",
  },
  {
    id: "portfolio-management-portfolio-managers",
    kind: "SSP",
    title: "Portfolio Management for Portfolio Managers",
    desc: "Build portfolio management capability for active portfolio managers across client books.",
    valueStream: "banking",
    industry: "Banking",
  },
  {
    id: "relationship-management-sme",
    kind: "SSP",
    title: "Relationship Management for SME",
    desc: "Add relationship management capability for SME-focused banking teams.",
    valueStream: "banking",
    industry: "Banking",
  },
  {
    id: "relationship-management-private-bankers",
    kind: "SSP",
    title: "Relationship Management for Private Bankers",
    desc: "Deepen relationship management capability for teams serving private banking clients.",
    valueStream: "banking",
    industry: "Banking",
  },
  {
    id: "thrive-track-workplace-development",
    kind: "SSP",
    title: "Thrive Track Workplace Development",
    desc: "Workplace readiness, confidence and practical capability for early-career hires across all sectors.",
    valueStream: "universal",
    industry: "Universal",
  },
  {
    id: "principles-of-sustainable-investments",
    kind: "SSP",
    title: "Principles of Sustainable Investments",
    desc: "Build foundational ESG and sustainable investment capability for advisory and investment teams.",
    valueStream: "fpi",
    industry: "Investments",
  },
  {
    id: "branch-manager-development-programme",
    kind: "SSP",
    title: "Branch Manager Development Programme",
    desc: "Strengthen people leadership, performance management and operational delivery for branch leaders.",
    valueStream: "banking",
    industry: "Banking",
  },
  {
    id: "digital-transformation-consultants",
    kind: "SSP",
    title: "Digital Transformation Consultants",
    desc: "Equip consultants to drive digital transformation engagements inside banking environments.",
    valueStream: "banking",
    industry: "Banking",
  },
  {
    id: "digital-transformation-leaders",
    kind: "SSP",
    title: "Digital Transformation Leaders",
    desc: "Equip leaders to drive digital transformation strategy and execution across banking teams.",
    valueStream: "banking",
    industry: "Banking",
  },
  {
    id: "sales-cx-call-centre",
    kind: "SSP",
    title: "Sales and Client Experience: Call Centre",
    desc: "Strengthen sales and client experience capability for call-centre banking teams.",
    valueStream: "banking",
    industry: "Banking",
  },
  {
    id: "sales-cx-branch",
    kind: "SSP",
    title: "Sales and Client Experience: Branch",
    desc: "Strengthen sales and client experience capability for branch banking teams.",
    valueStream: "banking",
    industry: "Banking",
  },
  {
    id: "sales-outbound-call-centre",
    kind: "SSP",
    title: "Sales: Outbound Call Centre",
    desc: "Build outbound call-centre sales capability for banking client acquisition and retention.",
    valueStream: "banking",
    industry: "Banking",
  },
  {
    id: "business-banking-foundation-programme",
    kind: "SSP",
    title: "Business Banking Foundation Programme",
    desc: "Foundational business banking capability for teams new to commercial banking environments.",
    valueStream: "banking",
    industry: "Banking",
  },
];

/** Display label for the value stream tag on programme cards. */
export function valueStreamLabel(vs: ValueStream): string {
  switch (vs) {
    case "banking":   return "Banking";
    case "fpi":       return "FP&I";
    case "universal": return "Universal";
  }
}
