/**
 * Blog post data. Static for now - when there's a CMS, swap this for a
 * fetcher. Each post is a small structured doc rather than a markdown string
 * so the typography stays under our control.
 */

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "quote"; text: string; attribution?: string }
  | { kind: "list"; items: string[] }
  | { kind: "callout"; label: string; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Students" | "Organisations" | "Industry" | "Inside CPS";
  author: string;
  authorRole: string;
  date: string;       // ISO yyyy-mm-dd
  readTime: number;   // minutes
  hero: string;       // /public path
  accent: "blue" | "purple" | "green";
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "why-completion-rates-matter-more-than-enrollment",
    title: "Why completion rates matter more than enrolment.",
    excerpt:
      "Starting a qualification is easy. Finishing it is where the change happens. Here is why CPS is built around completion, not just access.",
    category: "Students",
    author: "Dr Indira Bhagaloo",
    authorRole: "CEO, Cornerstone Performance Solutions",
    date: "2025-09-14",
    readTime: 6,
    hero: "/brooke-cagle-JBwcenOuRCg-unsplash.jpg",
    accent: "blue",
    body: [
      {
        kind: "p",
        text: "Every year, thousands of working professionals enrol in qualifications they will never finish. It is one of the quieter problems in education - easier to measure how many people started than how many actually completed and applied what they learned. But this gap is where careers stall, where employer trust frays, and where promising learning investments quietly disappear.",
      },
      {
        kind: "p",
        text: "At CPS, we have spent more than two decades watching this play out across banking, insurance, investment and leadership programmes. What we have learned is that completion is rarely about talent. It is about structure, support, and momentum - three things that are easy to underestimate when you are designing a programme on paper.",
      },
      { kind: "h2", text: "Enrolment is a moment. Completion is a process." },
      {
        kind: "p",
        text: "When someone signs up for a qualification, they are making a decision in a single afternoon. When they finish that qualification, they have made hundreds of smaller decisions across many months - to log in tonight, to submit an assessment by Friday, to ask for help when something does not click, to keep going after a setback.",
      },
      {
        kind: "p",
        text: "Most learning platforms are designed to handle the first decision well. The form is friendly, the welcome email is warm, the first module loads quickly. After that, the learner is on their own.",
      },
      {
        kind: "callout",
        label: "The honest pattern",
        text: "Drop-off rarely happens in week one. It happens in week six, when life crowds in and the programme feels less urgent than everything else.",
      },
      { kind: "h2", text: "What changes when you design for completion" },
      {
        kind: "p",
        text: "Designing for completion is not the same as making the content easier or removing assessments. It is about making the path visible and the next step obvious - so when a learner has fifteen minutes between meetings, they know exactly what to do with them.",
      },
      {
        kind: "list",
        items: [
          "Modules are sequenced so each one builds on the last - no orphaned content.",
          "Milestones are visible upfront, so learners can plan around their real lives.",
          "Feedback returns within minutes, while the work is still in mind.",
          "Progress is shown honestly - what is done, what is outstanding, what needs attention next.",
          "Support is offered before learners ask for it, not only after they fall behind.",
        ],
      },
      { kind: "h2", text: "Why this matters for organisations too" },
      {
        kind: "p",
        text: "For organisations sponsoring workforce education, completion is the difference between paying for training and paying for capability. A 60% completion rate means 40% of your investment produced no recognised credential, no developed competency, and no measurable change in workplace behaviour.",
      },
      {
        kind: "p",
        text: "Completion is also a leading indicator. Cohorts that finish strongly tend to apply what they learned. Cohorts that drift through tend to forget it. The shape of the journey predicts the shape of the outcome.",
      },
      { kind: "h2", text: "Where to start" },
      {
        kind: "p",
        text: "If you are considering a qualification - for yourself or for a team - the most important question is not what content is included. It is what happens after the first month. Who is tracking progress? What is the response time on feedback? When something starts to slip, what changes?",
      },
      {
        kind: "p",
        text: "The honest answer to those questions tells you whether a programme is designed for enrolment or designed for completion. Those are not the same thing.",
      },
    ],
  },
  {
    slug: "choosing-between-hcib-and-acl",
    title: "Choosing between HCIB and ACL: which path fits your career?",
    excerpt:
      "Both are 12-month higher-education qualifications. Both are recognised. But they serve different people at different career stages - here is how to tell them apart.",
    category: "Students",
    author: "CPS Admissions",
    authorRole: "Student admissions team",
    date: "2025-09-02",
    readTime: 5,
    hero: "/microsoft-365-kTFmwxkF5bQ-unsplash.jpg",
    accent: "purple",
    body: [
      {
        kind: "p",
        text: "The Higher Certificate in Banking (HCIB) and the Advanced Certificate in Leadership (ACL) are the two flagship qualifications most individual students start with at CPS. They are similar in shape - 12 months, blended or online delivery, recognised credentials - but they are designed for very different career moves.",
      },
      {
        kind: "p",
        text: "If you are unsure which one fits, this guide should help you decide where to start. If you are still unsure after reading, the admissions team is the best next step.",
      },
      { kind: "h2", text: "HCIB - for entering or growing in banking" },
      {
        kind: "p",
        text: "HCIB is an NQF Level 5 qualification (120 credits) built around the foundations of South African banking. It covers banking knowledge, financial services context, client understanding, ethics, compliance, and practical problem-solving.",
      },
      {
        kind: "p",
        text: "It is the right starting point if you are entering banking, formalising knowledge you have picked up on the job, or building a recognised pathway into the sector. Many of our HCIB students are early-career banking professionals, career changers, or graduates who realise they want a banking-specific credential alongside their degree.",
      },
      { kind: "h3", text: "Best for" },
      {
        kind: "list",
        items: [
          "Banking career starters",
          "Junior banking professionals",
          "Career changers entering financial services",
          "Students who want an NQF Level 5 banking qualification on their CV",
        ],
      },
      { kind: "h2", text: "ACL - for moving from experience into leadership" },
      {
        kind: "p",
        text: "ACL is an NQF Level 6 qualification (CHE-accredited) focused on leadership capability. It covers decision-making, leading teams, building accountability, and developing the judgement that more senior roles demand.",
      },
      {
        kind: "p",
        text: "It is the right next step if you have workplace experience and you are ready to move into more responsibility. Many of our ACL students are team leaders, emerging managers, or experienced individual contributors preparing for a step up.",
      },
      { kind: "h3", text: "Best for" },
      {
        kind: "list",
        items: [
          "Emerging leaders",
          "Team leaders",
          "Professionals preparing for management growth",
          "Students who want an NQF Level 6 leadership qualification on their CV",
        ],
      },
      { kind: "h2", text: "What they have in common" },
      {
        kind: "list",
        items: [
          "12 months, designed for working South African professionals",
          "Delivered and managed through CPSLearn",
          "Structured learning journey with progress visibility and feedback",
          "Recognised within South Africa's regulated qualification frameworks",
        ],
      },
      {
        kind: "callout",
        label: "A note on individual applications",
        text: "Individual students may apply for HCIB and ACL only. Our other qualifications (Business Banking Practitioner, Investment Advisor, Long-Term Insurance Advisor, and skills programmes) are delivered through organisations. If you are interested in those, speak to your employer or our admissions team about cohort routes.",
      },
      { kind: "h2", text: "Still not sure?" },
      {
        kind: "p",
        text: "The simplest rule of thumb: if you are joining or growing in banking specifically, look at HCIB. If you are growing into leadership across any business context, look at ACL. If you want to do both eventually, most people start with the one that fits their immediate next step.",
      },
      {
        kind: "p",
        text: "Speak to admissions if you need help making the call - applications@cps.co.za, or +27 11 789 1957.",
      },
    ],
  },
  {
    slug: "what-makes-a-banking-qualification-recognised",
    title: "What makes a banking qualification recognised in South Africa.",
    excerpt:
      "CHE, QCTO, SAQA, NQF levels - the acronyms matter because they tell employers your credential is real. Here is a plain-English guide to the framework.",
    category: "Industry",
    author: "CPS Academic Team",
    authorRole: "Academic & accreditation",
    date: "2025-08-18",
    readTime: 7,
    hero: "/linkedin-sales-solutions-EI50ZDA-l8Y-unsplash.jpg",
    accent: "blue",
    body: [
      {
        kind: "p",
        text: "If you have ever looked at a qualification and wondered whether it actually carries weight in the South African market, you have probably encountered an alphabet soup of regulators - CHE, QCTO, SAQA, NQF - without much explanation of what they do. This piece is a plain-English map of how the system works, and why CPS programmes sit inside it.",
      },
      { kind: "h2", text: "SAQA and the NQF - the spine of the system" },
      {
        kind: "p",
        text: "The South African Qualifications Authority (SAQA) maintains the National Qualifications Framework (NQF) - a 10-level ladder that classifies every recognised qualification in the country. Level 1 is general schooling. Level 10 is a doctorate. Everything else sits somewhere in between.",
      },
      {
        kind: "p",
        text: "When you see a qualification described as 'NQF Level 5' or 'NQF Level 6', that is a SAQA classification. It tells employers and other institutions, in a single number, roughly how demanding the programme is and what kind of knowledge it expects you to walk away with.",
      },
      { kind: "h2", text: "CHE - for higher education programmes" },
      {
        kind: "p",
        text: "The Council on Higher Education (CHE) is responsible for the quality assurance of higher education in South Africa. If a qualification is described as 'CHE-accredited', it means CHE has assessed it against academic standards and found it acceptable to register on the NQF.",
      },
      {
        kind: "p",
        text: "CPS's Higher Certificate in Banking and Advanced Certificate in Leadership both fall under CHE oversight as higher education programmes.",
      },
      { kind: "h2", text: "QCTO - for occupational qualifications" },
      {
        kind: "p",
        text: "The Quality Council for Trades and Occupations (QCTO) sits alongside CHE but governs occupational qualifications - credentials designed around the specific tasks, knowledge and behaviours an occupation requires, rather than academic study.",
      },
      {
        kind: "p",
        text: "Many of CPS's organisational workforce programmes - Business Banking Practitioner, Long-Term Insurance Advisor, Investment Advisor - sit under QCTO. They are workplace-integrated by design, meaning learners build capability while doing the actual work.",
      },
      { kind: "h2", text: "Credits, hours and what they mean" },
      {
        kind: "p",
        text: "Each qualification also has a credit value. One SAQA credit represents around 10 notional hours of learning - reading, assessments, workplace application, the whole journey. A 202-credit qualification means roughly 2,020 hours of structured learning across the programme.",
      },
      {
        kind: "p",
        text: "This is why qualifications are not interchangeable with short courses. A skills programme might give you a useful afternoon of training. A full qualification gives you a credential that maps to a measurable amount of work, assessed against a national standard.",
      },
      {
        kind: "callout",
        label: "Why the framework matters",
        text: "When a qualification sits inside this system, your credential is recognised across employers, sectors, and institutions - not just at the place you studied.",
      },
      { kind: "h2", text: "What to look for in a qualification" },
      {
        kind: "list",
        items: [
          "A clear NQF level - not a vague 'certificate' label",
          "Named accreditation - CHE or QCTO (or both, where relevant)",
          "A SAQA ID number you can look up on the SAQA website",
          "Credit value disclosed transparently",
          "A registered provider with quality assurance processes",
        ],
      },
      {
        kind: "p",
        text: "If any of those are missing or unclear, that is your sign to ask harder questions before enrolling.",
      },
    ],
  },
  {
    slug: "inside-cpslearn-what-to-expect-on-day-one",
    title: "Inside CPSLearn: what to expect on day one.",
    excerpt:
      "A short walk-through of how the first week of a CPS programme actually feels - from welcome email to your first module to your first piece of feedback.",
    category: "Inside CPS",
    author: "CPS Learning Team",
    authorRole: "Programme delivery & support",
    date: "2025-08-01",
    readTime: 4,
    hero: "/md-duran-1VqHRwxcCCw-unsplash.jpg",
    accent: "green",
    body: [
      {
        kind: "p",
        text: "The first week of any qualification sets the tone. If it feels organised, you trust the rest. If it feels chaotic, you spend the next twelve months wary. Here is what the first week on a CPS programme actually looks like.",
      },
      { kind: "h2", text: "Before the start date" },
      {
        kind: "p",
        text: "Once you are enrolled, you receive a welcome from the admissions team confirming your programme, start date, and what to expect in the first session. We do not bury anything in fine print - if there is something you need to prepare or bring, it is in this message.",
      },
      { kind: "h2", text: "Day one - getting into CPSLearn" },
      {
        kind: "p",
        text: "Your access to CPSLearn arrives ahead of the start date. The first time you log in, you see your programme laid out as a sequence of modules, milestones and assessments. Nothing is hidden behind locked content. You can scroll through and see what the next twelve months actually looks like.",
      },
      {
        kind: "p",
        text: "This matters because the most common moment of doubt - am I going to get through this? - happens when learners cannot see the shape of what is ahead. With the path visible, the programme stops feeling like an unknown commitment and starts feeling like a navigable journey.",
      },
      { kind: "h2", text: "Your first module" },
      {
        kind: "p",
        text: "The first module is intentionally not the hardest. It is designed to get you comfortable with the platform, the rhythm of working through content, and the way assessments fit into the flow.",
      },
      {
        kind: "callout",
        label: "Pace yourself",
        text: "Most of our students fit study around work, family and life. The programme is built for that. You do not need to clear your evenings - you need to log in consistently, even briefly.",
      },
      { kind: "h2", text: "Your first piece of feedback" },
      {
        kind: "p",
        text: "Within the first week or two, you will submit something that gets feedback returned to you - usually within minutes, while you are still thinking about the work. This is deliberate. The longer the gap between effort and feedback, the more the learning evaporates.",
      },
      {
        kind: "p",
        text: "Quick feedback also gives you an early signal: am I on track? do I understand the material? where do I need to focus harder? Catching that in week two is much easier than catching it in week ten.",
      },
      { kind: "h2", text: "If something starts to slip" },
      {
        kind: "p",
        text: "We track progress through the journey. If a learner falls behind, support is offered before things get serious - not after. That is the difference between a managed programme and a self-serve LMS.",
      },
      {
        kind: "p",
        text: "If you have a question, you ask the support team. If you need a bit of flexibility because life happened, you tell us. We would rather help you keep moving than watch you disappear quietly.",
      },
      { kind: "h2", text: "By the end of week one" },
      {
        kind: "p",
        text: "You should know how to log in, what your first month looks like, where to ask for help, and how feedback works. If any of those are unclear by Friday, that is a signal - and one we want you to flag to us.",
      },
      {
        kind: "p",
        text: "The honest goal of week one is not to teach you the most. It is to make sure you trust the platform, the team and the path. The rest of the programme is built on that foundation.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPost(slug);
  if (!current) return [];
  // Prefer same category, then fill with most recent others.
  const sameCat = posts.filter((p) => p.slug !== slug && p.category === current.category);
  const otherCat = posts.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCat, ...otherCat].slice(0, limit);
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" });
}
