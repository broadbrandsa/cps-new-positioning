import Link from "next/link";
import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Whether you want to study, apply, request programme information or discuss a workforce development need, the CPS team will help direct your enquiry.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link><span className="sep">/</span><span>Contact</span>
          </div>
          <div style={{ marginTop: 24, maxWidth: 880 }}>
            <span className="eyebrow"><span className="dot" /> Contact</span>
            <h1>Let&apos;s help you find the right next step.</h1>
            <p style={{ marginTop: 24, fontSize: 18, maxWidth: 720 }}>
              Whether you want to study, apply, request programme information or discuss a workforce
              development need, the CPS team will help direct your enquiry.
            </p>
          </div>
        </div>
      </section>

      {/* STUDENT ENQUIRIES */}
      <section id="admissions">
        <div className="container">
          <div className="diff-grid">
            <Reveal as="div">
              <span className="eyebrow"><span className="dot" /> For students</span>
              <h2 style={{ marginTop: 16 }}>Talk to admissions.</h2>
              <p style={{ marginTop: 24, fontSize: 17, color: "var(--muted)", lineHeight: 1.55 }}>
                Speak to admissions if you need help choosing a programme, understanding requirements,
                preparing documents or starting your application.
              </p>

              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 8, maxWidth: 480 }}>
                <a href="tel:+27117891957" className="contact-link primary">
                  <Phone /> +27 11 789 1957
                </a>
                <a href="mailto:applications@cps.co.za" className="contact-link">
                  <Mail /> applications@cps.co.za
                </a>
                <div className="contact-link" style={{ alignItems: "flex-start", cursor: "default" }}>
                  <MapPin />
                  <span>
                    39 Grove Street, Randburg,<br />
                    Johannesburg, Gauteng,<br />
                    South Africa
                  </span>
                </div>
              </div>

              <div className="admissions-notice" role="note" aria-label="Important application information">
                <span className="admissions-notice-label">Important</span>
                <ul>
                  <li>
                    <strong>A R300 application fee</strong> is payable upon completing your application
                    - not after acceptance.
                  </li>
                  <li>
                    Individual students may apply for <strong>HCIB</strong> and <strong>ACL</strong> only.
                    Other programmes are delivered through organisations.
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal as="div" delay={120}>
              <div style={{ background: "var(--card)", borderRadius: 24, padding: 32, border: "1px solid var(--line)" }}>
                <span className="mono">What to include in a student enquiry</span>
                <ul style={{ marginTop: 16, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  <li style={{ color: "var(--muted)", fontSize: 14, paddingLeft: 18, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 8, width: 6, height: 6, borderRadius: "50%", background: "var(--cps-blue)" }} />
                    Your name and contact details
                  </li>
                  <li style={{ color: "var(--muted)", fontSize: 14, paddingLeft: 18, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 8, width: 6, height: 6, borderRadius: "50%", background: "var(--cps-blue)" }} />
                    The programme you are considering (or that you would like advice on)
                  </li>
                  <li style={{ color: "var(--muted)", fontSize: 14, paddingLeft: 18, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 8, width: 6, height: 6, borderRadius: "50%", background: "var(--cps-blue)" }} />
                    Your current career stage or employment context
                  </li>
                  <li style={{ color: "var(--muted)", fontSize: 14, paddingLeft: 18, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 8, width: 6, height: 6, borderRadius: "50%", background: "var(--cps-blue)" }} />
                    Any prior qualifications you would like considered
                  </li>
                  <li style={{ color: "var(--muted)", fontSize: 14, paddingLeft: 18, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 8, width: 6, height: 6, borderRadius: "50%", background: "var(--cps-blue)" }} />
                    Whether you would like a call back or to apply
                  </li>
                </ul>
                <div style={{ marginTop: 24 }}>
                  <Link href="/programmes" className="btn btn-yellow" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>Browse student programmes</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ORGANISATION ENQUIRIES - partner form */}
      <Spotlight as="div" className="cta-band dark" style={{ background: "linear-gradient(135deg, #9013FE 0%, #5C0AA8 100%)" }}>
        <div id="partnerships" className="cta-band-inner">
          <div className="cta-band-grid">
            <div>
              <span className="mono" style={{ color: "var(--cps-yellow)" }}>For organisations</span>
              <h2 style={{ marginTop: 16, color: "white" }}>Bring us the capability gap.</h2>
              <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: 480 }}>
                25 years of building people for banking and financial services. Talk to us about
                workforce programmes, cohort delivery, occupational qualifications, leadership pipelines,
                advisor capability or platform-supported learning.
              </p>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginTop: 32 }}>
                <div>
                  <div className="mono" style={{ color: "rgba(255,255,255,0.6)" }}>Phone</div>
                  <a style={{ color: "white", fontWeight: 500 }} href="tel:+27117891957">+27 11 789 1957</a>
                </div>
                <div>
                  <div className="mono" style={{ color: "rgba(255,255,255,0.6)" }}>Email</div>
                  <a style={{ color: "white", fontWeight: 500 }} href="mailto:succeed@cps.co.za">succeed@cps.co.za</a>
                </div>
                <div>
                  <div className="mono" style={{ color: "rgba(255,255,255,0.6)" }}>Address</div>
                  <div style={{ color: "white", fontWeight: 500, lineHeight: 1.5 }}>
                    39 Grove Street, Randburg,<br />
                    Johannesburg, Gauteng,<br />
                    South Africa
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="form-dark" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <label className="sr-only" htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" placeholder="Name" required autoComplete="name" />

                <label className="sr-only" htmlFor="contact-email">Work email</label>
                <input id="contact-email" name="email" placeholder="Work email" type="email" required autoComplete="email" />

                <label className="sr-only" htmlFor="contact-phone">Phone number</label>
                <input id="contact-phone" name="phone" placeholder="Phone number" type="tel" autoComplete="tel" />

                <label className="sr-only" htmlFor="contact-org">Organisation</label>
                <input id="contact-org" name="organisation" placeholder="Organisation" autoComplete="organization" />

                <label className="sr-only" htmlFor="contact-role">Role</label>
                <input id="contact-role" name="role" placeholder="Role" autoComplete="organization-title" />

                <label className="sr-only" htmlFor="contact-industry">Industry</label>
                <select id="contact-industry" name="industry" defaultValue="Banking">
                  <option>Banking</option>
                  <option>Insurance</option>
                  <option>Brokers</option>
                  <option>Investment / wealth</option>
                  <option>Risk &amp; compliance</option>
                  <option>Other</option>
                </select>

                <label className="sr-only" htmlFor="contact-enquiry">I am enquiring about</label>
                <select id="contact-enquiry" name="enquiry" defaultValue="Workforce programme">
                  <option>Student programme</option>
                  <option>Workforce programme</option>
                  <option>Partnership</option>
                  <option>CPSLearn</option>
                  <option>Other</option>
                </select>

                <label className="sr-only" htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" placeholder="Brief description of what you need" rows={4} />

                <label className="sr-only" htmlFor="contact-prefer">Preferred contact method</label>
                <select id="contact-prefer" name="preferred" defaultValue="Email">
                  <option>Email</option>
                  <option>Phone</option>
                </select>

                <button type="submit" className="btn btn-yellow btn-lg" style={{ marginTop: 6 }}>Send enquiry</button>
              </form>
            </div>
          </div>
        </div>
      </Spotlight>

      {/* REASSURANCE */}
      <section className="section-tinted">
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <Reveal>
            <p style={{ fontSize: 18, color: "var(--ink)", lineHeight: 1.55 }}>
              If you are not sure who to speak to, send a general enquiry and the CPS team will route it
              to the right person.
            </p>
          </Reveal>
        </div>
      </section>

      <div style={{ height: 96 }} />
    </main>
  );
}
