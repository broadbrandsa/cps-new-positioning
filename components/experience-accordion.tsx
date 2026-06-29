"use client";

import { useState, useRef, useEffect, type ReactElement } from "react";
import { Reveal } from "@/components/reveal";
import {
  Calendar,
  Workflow,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  ArrowRightLong,
} from "@/components/icons";

type Item = { title: string; desc: string; icon: ReactElement };

const orgItems: Item[] = [
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

/**
 * Single accordion row. Uses a ref + scrollHeight to drive a smooth
 * max-height transition on open/close - gives proper height-aware animation
 * without the snap of native <details>/<summary>.
 */
function AccordionRow({
  index,
  item,
  isOpen,
  onToggle,
}: {
  index: number;
  item: Item;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const measure = () => setMaxH(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [item.desc]);

  const stepNo = String(index + 1).padStart(2, "0");

  return (
    <div className={`accordion-item ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="accordion-trigger"
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${index}`}
        onClick={onToggle}
      >
        <span className="accordion-icon" aria-hidden>{item.icon}</span>
        <span className="accordion-step">Step {stepNo}</span>
        <span className="accordion-title">{item.title}</span>
        <span className="accordion-chevron" aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9, 12 15, 18 9" />
          </svg>
        </span>
      </button>
      <div
        id={`accordion-panel-${index}`}
        className="accordion-panel"
        role="region"
        aria-hidden={!isOpen}
        style={{ maxHeight: isOpen ? maxH : 0 }}
      >
        <div className="accordion-panel-inner" ref={panelRef}>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Organisations-side "What your staff can expect" accordion. Mirrors the
 * heading/layout of ExperienceSection (lede + display headline + arrow on the
 * left, content on the right) but renders the six step cards as an expandable
 * accordion list.
 */
export function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="experience-section experience-accordion-section section-dark">
      <div className="container">
        <div className="experience-layout">
          <Reveal as="div" className="experience-intro">
            <p className="lede">
              CPS programmes are designed to support working professionals through structured,
              workplace-relevant learning. Your staff are guided through the journey, supported through
              key milestones and encouraged to apply learning back into their roles.
            </p>
            <h2 className="experience-display">
              Your team&apos;s experience
              <br />
              <em>from start to finish.</em>
            </h2>
            <span className="big-arrow" aria-hidden="true">
              <ArrowRightLong />
            </span>
          </Reveal>

          <div className="accordion-list">
            {orgItems.map((item, i) => (
              <AccordionRow
                key={item.title}
                index={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
