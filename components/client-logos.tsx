import Image from "next/image";

type Logo = { src: string; alt: string; width: number; height: number };

const logos: Logo[] = [
  { src: "/client-logos/absa.svg", alt: "Absa", width: 120, height: 40 },
  { src: "/client-logos/fnb.svg", alt: "First National Bank", width: 120, height: 40 },
  { src: "/client-logos/standard-bank.png", alt: "Standard Bank", width: 140, height: 40 },
  { src: "/client-logos/capitec.png", alt: "Capitec Bank", width: 130, height: 40 },
  { src: "/client-logos/nedbank.gif", alt: "Nedbank", width: 130, height: 40 },
  { src: "/client-logos/firstrand.png", alt: "FirstRand", width: 140, height: 40 },
  { src: "/client-logos/african-bank.png", alt: "African Bank", width: 140, height: 40 },
  { src: "/client-logos/discovery-bank.png", alt: "Discovery Bank", width: 140, height: 40 },
  { src: "/client-logos/old-mutual.png", alt: "Old Mutual", width: 130, height: 40 },
  { src: "/client-logos/sasfin.png", alt: "Sasfin Bank", width: 120, height: 40 },
  { src: "/client-logos/bayport.png", alt: "Bayport", width: 120, height: 40 },
  { src: "/client-logos/bidvest.png", alt: "Bidvest", width: 110, height: 40 },
  { src: "/client-logos/sbv.png", alt: "SBV Services", width: 110, height: 40 },
  { src: "/client-logos/standard-chartered.png", alt: "Standard Chartered", width: 150, height: 40 },
  { src: "/client-logos/first-bank.png", alt: "First Bank", width: 130, height: 40 },
  { src: "/client-logos/bank-of-africa.png", alt: "Bank of Africa", width: 130, height: 40 },
  { src: "/client-logos/mercedes-benz.png", alt: "Mercedes-Benz", width: 130, height: 40 },
];

/**
 * Continuous logo marquee. The track is duplicated so the CSS keyframe can
 * loop seamlessly. Reduced-motion fallback (in globals.css) freezes the
 * track and shows logos statically.
 */
export function ClientLogos({
  label = "Working with leading South African and international financial services organisations",
}: {
  label?: string;
}) {
  const doubled = [...logos, ...logos];
  return (
    <section className="client-logos" aria-label="Client organisations CPS works with">
      <div className="container">
        <p className="client-logos-label">{label}</p>
      </div>
      <div className="client-logos-track-wrap">
        <div className="client-logos-track">
          {doubled.map((logo, i) => (
            <div key={i} className="client-logos-item" aria-hidden={i >= logos.length}>
              <Image
                src={logo.src}
                alt={i < logos.length ? logo.alt : ""}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
