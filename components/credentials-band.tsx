import Image from "next/image";

/**
 * Credentials strip used on home + organisations.
 * Two rows: South African accreditations (CHE / QCTO / SAQA) and international
 * recognition (Brandon Hall Group HCM Gold + L&D Silver).
 */
export function CredentialsBand() {
  return (
    <section className="accred-band" aria-labelledby="credentials-heading">
      <h2 id="credentials-heading" className="sr-only">Accreditations and awards</h2>
      <div className="container">
        <div className="accred-strip">
          <div className="accred-label">Registered &amp; accredited with</div>
          <ul className="accred-badges" role="list">
            <li>
              <Image
                src="/badge-che.png"
                alt="Council on Higher Education"
                width={180}
                height={64}
              />
            </li>
            <li>
              <Image
                src="/badge-qcto.png"
                alt="Quality Council for Trades and Occupations"
                width={180}
                height={64}
              />
            </li>
            <li>
              <Image
                src="/badge-saqa.png"
                alt="South African Qualifications Authority"
                width={180}
                height={64}
              />
            </li>
          </ul>
        </div>

        <div className="accred-strip accred-strip-awards">
          <div className="accred-label">Internationally recognised by</div>
          <ul className="accred-badges" role="list">
            <li>
              <figure className="award-badge">
                <Image
                  src="/award-brandon-hall-hcm-gold.png"
                  alt="Brandon Hall Group HCM Excellence Award - Gold"
                  width={120}
                  height={120}
                />
                <figcaption>
                  <strong>Brandon Hall HCM</strong>
                  <span>Excellence Award · Gold</span>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className="award-badge">
                <Image
                  src="/award-brandon-hall-ld-silver.png"
                  alt="Brandon Hall Group Learning &amp; Development Excellence Award - Silver"
                  width={120}
                  height={120}
                />
                <figcaption>
                  <strong>Brandon Hall L&amp;D</strong>
                  <span>Excellence Award · Silver</span>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
