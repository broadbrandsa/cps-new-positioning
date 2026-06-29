import Link from "next/link";
import type { Programme } from "@/lib/programmes";
import { ArrowRightSmall } from "./icons";

/** Secondary / related programme card - used on home and programme detail */
export function SecondaryProgrammeCard({ programme }: { programme: Programme }) {
  const lede = programme.lede.split(".")[0] + ".";
  return (
    <Link href={`/programmes/${programme.slug}`} className="prog-card secondary" style={{ cursor: "pointer" }}>
      <div className="prog-card-top">
        <div className="pill-row">
          {programme.pills.slice(0, 2).map((p, i) => (
            <span key={i} className={`pill ${p.cls ?? ""}`.trim()}>{p.label}</span>
          ))}
        </div>
      </div>
      <h3 className="prog-title">{programme.title}</h3>
      <p className="prog-desc">{lede}</p>
      <span className="prog-cta">
        Learn more <ArrowRightSmall />
      </span>
    </Link>
  );
}
