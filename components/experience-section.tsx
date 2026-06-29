import type { ReactElement } from "react";
import { Reveal } from "@/components/reveal";
import {
  Compass,
  Layers,
  MessageSquare,
  ClipboardCheck,
  BarChart3,
  Trophy,
  Calendar,
  Workflow,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  ArrowRightLong,
} from "@/components/icons";

type Variant = "students" | "organisations";
type Card = { title: string; desc: string; icon: ReactElement };

const studentCards: Card[] = [
  {
    title: "A clear programme pathway",
    desc:
      "Your programme is broken into modules, milestones and assessments so you can understand what comes next.",
    icon: <Compass />,
  },
  {
    title: "Access through CPSLearn",
    desc:
      "Your learning materials, assessments, feedback and progress are managed through CPSLearn.",
    icon: <Layers />,
  },
  {
    title: "Guided learning support",
    desc:
      "You are not left to study alone without structure. CPS tracks progress and helps identify where support may be needed.",
    icon: <MessageSquare />,
  },
  {
    title: "Assessments and feedback",
    desc:
      "You complete assessments through the programme journey and receive feedback to help you understand your progress.",
    icon: <ClipboardCheck />,
  },
  {
    title: "Progress visibility",
    desc:
      "You can see where you are in the programme and what still needs to be completed.",
    icon: <BarChart3 />,
  },
  {
    title: "Completion focus",
    desc:
      "The journey is designed to help you stay on track and complete with confidence.",
    icon: <Trophy />,
  },
];

const orgCards: Card[] = [
  {
    title: "Structured onboarding",
    desc:
      "Students are introduced to the programme, platform and expectations before they begin.",
    icon: <Calendar />,
  },
  {
    title: "Programme delivery through CPSLearn",
    desc:
      "Learning materials, assessments, feedback and progress tracking are managed in one platform-supported environment.",
    icon: <Workflow />,
  },
  {
    title: "Facilitated learning",
    desc:
      "Where applicable, students are supported by facilitators and programme teams who help connect learning to workplace practice.",
    icon: <Users />,
  },
  {
    title: "Workplace application",
    desc:
      "Programmes are designed to help students apply knowledge and behaviours in real working environments.",
    icon: <Briefcase />,
  },
  {
    title: "Progress monitoring",
    desc:
      "Student progress can be tracked so risks, delays and support needs are identified earlier.",
    icon: <TrendingUp />,
  },
  {
    title: "Completion and reporting",
    desc:
      "CPS focuses on completion and measurable progress, giving organisations better visibility into the development journey.",
    icon: <Award />,
  },
];

type Props = {
  variant: Variant;
  /** Kept for backwards compatibility - the section is always rendered on a dark surface now. */
  surface?: "white" | "tinted";
};

/**
 * Asymmetric "What to expect" section. Inspired by editorial / step-by-step
 * landing pages: large display headline + chevron on the left, dense step-card
 * grid on the right. Each card has a brand-yellow corner mark + step label +
 * title + description. Used on Students Home / Org Home / Students CPSLearn /
 * Org CPSLearn (variant chooses copy + icons).
 */
export function ExperienceSection({ variant }: Props) {
  const isStudents = variant === "students";
  const lede = isStudents
    ? "A CPS programme is structured so you know what to do, when to do it and where to get support. The goal is to make your learning journey clear, manageable and focused on completion."
    : "CPS programmes are designed to support working professionals through structured, workplace-relevant learning. Your staff are guided through the journey, supported through key milestones and encouraged to apply learning back into their roles.";
  const headingLead = isStudents ? "Your learning experience" : "Your team's experience";
  const headingAccent = isStudents ? "step by step" : "from start to finish";
  const cards = isStudents ? studentCards : orgCards;

  return (
    <section className="experience-section section-dark">
      <div className="container">
        <div className="experience-layout">
          <Reveal as="div" className="experience-intro">
            <p className="lede">{lede}</p>
            <h2 className="experience-display">
              {headingLead}
              <br />
              <em>{headingAccent}.</em>
            </h2>
            <span className="big-arrow" aria-hidden="true">
              <ArrowRightLong />
            </span>
          </Reveal>

          <div className="experience-cards-grid">
            {cards.map((c, i) => (
              <Reveal
                key={c.title}
                as="div"
                className="exp-step-card"
                delay={i * 80}
              >
                <span className="brand-mark" aria-hidden>{c.icon}</span>
                <span className="step-label">Step {String(i + 1).padStart(2, "0")}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
