import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, LinkedIn, YouTube } from "./icons";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="Cornerstone Performance Solutions home">
              <Image src="/logo.avif" alt="Cornerstone Performance Solutions" width={120} height={32} />
            </Link>
            <p>
              South Africa&apos;s accredited education partner for banking, insurance, investment and leadership.
              Twenty-five years of structured learning, completion and capability development.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="pill">B-BBEE Level 1</span>
              <span className="pill">CHE accredited</span>
              <span className="pill">QCTO accredited</span>
            </div>

            <ul className="footer-social" aria-label="CPS on social media">
              <li>
                <a
                  href="https://facebook.com/cornerstoneperformancesolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CPS on Facebook"
                >
                  <Facebook width={16} height={16} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/cpslearning"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CPS on X (formerly Twitter)"
                >
                  <Twitter width={16} height={16} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/cornerstone-performance-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CPS on LinkedIn"
                >
                  <LinkedIn width={16} height={16} />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/channel/UCCXudZLfGPao_dR77w2n6LQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CPS on YouTube"
                >
                  <YouTube width={16} height={16} />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Students</h5>
            <Link href="/">Students Home</Link>
            <Link href="/programmes">Programmes</Link>
            <Link href="/cpslearn">CPSLearn</Link>
            <Link href="/contact#admissions">Admissions Contact</Link>
          </div>

          <div className="footer-col">
            <h5>Organisations</h5>
            <Link href="/organisations">Organisations Home</Link>
            <Link href="/organisations/programmes">Workforce Programmes</Link>
            <Link href="/organisations/cpslearn">CPSLearn Platform</Link>
            <Link href="/organisations#partnership-model">Partnership Model</Link>
            <Link href="/contact#partnerships">Contact Partnerships</Link>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <Link href="/about">About CPS</Link>
            <Link href="/blog">Journal</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>

          <div className="footer-col">
            <h5>Get in touch</h5>
            <a href="tel:+27117891957">+27 11 789 1957</a>
            <a href="mailto:applications@cps.co.za">
              <span className="footer-email-label">Students</span>
              applications@cps.co.za
            </a>
            <a href="mailto:succeed@cps.co.za">
              <span className="footer-email-label">Organisations</span>
              succeed@cps.co.za
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Cornerstone Performance Solutions (Pty) Ltd. All rights reserved.</div>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="badge">#ShapeYourFuture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
