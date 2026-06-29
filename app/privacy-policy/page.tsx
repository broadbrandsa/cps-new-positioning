import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Cornerstone Performance Solutions collects, uses, stores and protects your personal information under POPIA.",
};

type Section = { id: string; n: string; title: string };

const sections: Section[] = [
  { id: "introduction", n: "1", title: "Introduction" },
  { id: "information-we-collect", n: "2", title: "Information we collect" },
  { id: "how-we-use", n: "3", title: "How we use your information" },
  { id: "legal-basis", n: "4", title: "Legal basis for processing" },
  { id: "data-security", n: "5", title: "Data security" },
  { id: "third-party-sharing", n: "6", title: "Third-party sharing" },
  { id: "data-retention", n: "7", title: "Data retention" },
  { id: "your-rights", n: "8", title: "Your rights under POPIA" },
  { id: "cookies", n: "9", title: "Cookies and tracking" },
  { id: "changes", n: "10", title: "Changes to this policy" },
  { id: "contact", n: "11", title: "Contact us" },
  { id: "regulator", n: "12", title: "Information Regulator" },
];

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      {/* HERO */}
      <section className="page-hero legal-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span style={{ color: "var(--cps-blue)" }}>Privacy Policy</span>
          </div>
          <div className="legal-hero-content">
            <span className="eyebrow"><span className="dot" /> POPIA Compliance</span>
            <h1>Privacy Policy.</h1>
            <p className="legal-hero-lede">
              How Cornerstone Performance Solutions collects, uses, stores and protects your personal
              information under the Protection of Personal Information Act, 2013 (POPIA).
            </p>
            <div className="legal-hero-meta">
              <span><strong>Last updated:</strong> {new Date().getFullYear()}</span>
              <span aria-hidden>·</span>
              <span><strong>Applies to:</strong> cps.co.za and all CPS services</span>
            </div>
          </div>
        </div>
      </section>

      <div className="legal-body container">
        {/* Table of contents (sticky on desktop) */}
        <aside className="legal-toc" aria-label="Sections">
          <div className="legal-toc-sticky">
            <span className="legal-toc-label">Contents</span>
            <ol>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    <span className="legal-toc-n">{s.n}</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        {/* Long-form body */}
        <article className="legal-prose">
          <Reveal as="div">
            <section id="introduction">
              <h2><span className="legal-h-n">1.</span> Introduction</h2>
              <p>
                Cornerstone Performance Solutions (Pty) Ltd (&ldquo;CPS&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your personal
                information in accordance with the Protection of Personal Information Act, 2013 (POPIA)
                and other applicable data protection legislation. This Privacy Policy explains how we
                collect, use, store, and protect your personal information when you interact with our
                website, programmes, and services.
              </p>
            </section>

            <section id="information-we-collect">
              <h2><span className="legal-h-n">2.</span> Information we collect</h2>
              <p>We may collect the following categories of personal information:</p>
              <ul>
                <li><strong>Identity information:</strong> Full name, ID number, date of birth, gender, and nationality.</li>
                <li><strong>Contact information:</strong> Email address, phone number, physical address, and postal address.</li>
                <li><strong>Educational information:</strong> Qualifications, academic history, assessment results, and programme enrolment data.</li>
                <li><strong>Employment information:</strong> Employer name, job title, and work-related details relevant to your programme.</li>
                <li><strong>Financial information:</strong> Payment details and billing information for programme fees.</li>
                <li><strong>Technical information:</strong> IP address, browser type, device information, and website usage data collected through cookies and similar technologies.</li>
              </ul>
            </section>

            <section id="how-we-use">
              <h2><span className="legal-h-n">3.</span> How we use your information</h2>
              <p>We process your personal information for the following purposes:</p>
              <ul>
                <li>To process applications, enrolments, and registrations for our educational programmes.</li>
                <li>To deliver and administer learning programmes, assessments, and certifications.</li>
                <li>To communicate with you about your programme, including updates, schedules, and results.</li>
                <li>To process payments and manage financial transactions.</li>
                <li>To comply with regulatory and accreditation body requirements, including reporting to SETAs and QCTO.</li>
                <li>To improve our services, website, and user experience.</li>
                <li>To send marketing communications where you have provided consent.</li>
              </ul>
            </section>

            <section id="legal-basis">
              <h2><span className="legal-h-n">4.</span> Legal basis for processing</h2>
              <p>
                We process your personal information on one or more of the following lawful grounds:
                your consent; the performance of a contract to which you are a party; compliance with a
                legal obligation; protection of your legitimate interests; or the pursuit of our
                legitimate interests in providing quality education services, provided that your rights
                are not overridden.
              </p>
            </section>

            <section id="data-security">
              <h2><span className="legal-h-n">5.</span> Data security</h2>
              <p>
                We take the security of your personal information seriously and implement appropriate
                technical and organisational measures to protect it against unauthorised access,
                alteration, disclosure, or destruction. These measures include encrypted data
                transmission, secure server infrastructure, access controls, and regular security
                reviews.
              </p>
              <p>
                While we strive to protect your personal information, no method of electronic
                transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section id="third-party-sharing">
              <h2><span className="legal-h-n">6.</span> Third-party sharing</h2>
              <p>We may share your personal information with the following third parties where necessary:</p>
              <ul>
                <li><strong>Regulatory and accreditation bodies:</strong> SETAs, QCTO, SAQA, and other bodies as required for programme registration and compliance.</li>
                <li><strong>Employer sponsors:</strong> Where your employer has sponsored your enrolment, we may share programme progress and results.</li>
                <li><strong>Service providers:</strong> Trusted third-party service providers who assist us with IT infrastructure, payment processing, and communication services, subject to appropriate data processing agreements.</li>
                <li><strong>Legal requirements:</strong> Where required by law, regulation, or legal process.</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </section>

            <section id="data-retention">
              <h2><span className="legal-h-n">7.</span> Data retention</h2>
              <p>
                We retain your personal information only for as long as is necessary to fulfil the
                purposes for which it was collected, or as required by applicable laws and regulations.
                Educational records may be retained for extended periods to comply with accreditation
                and regulatory requirements.
              </p>
            </section>

            <section id="your-rights">
              <h2><span className="legal-h-n">8.</span> Your rights under POPIA</h2>
              <p>Under POPIA, you have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Right of access:</strong> You may request confirmation of whether we hold your personal information and request access to it.</li>
                <li><strong>Right to correction:</strong> You may request that inaccurate or incomplete personal information be corrected or updated.</li>
                <li><strong>Right to deletion:</strong> You may request that your personal information be deleted where it is no longer necessary for the purpose for which it was collected, subject to legal retention requirements.</li>
                <li><strong>Right to object:</strong> You may object to the processing of your personal information for direct marketing purposes.</li>
                <li><strong>Right to withdraw consent:</strong> Where processing is based on consent, you may withdraw your consent at any time.</li>
                <li><strong>Right to lodge a complaint:</strong> You have the right to lodge a complaint with the Information Regulator if you believe your personal information has been mishandled.</li>
              </ul>
            </section>

            <section id="cookies">
              <h2><span className="legal-h-n">9.</span> Cookies and tracking technologies</h2>
              <p>
                Our website uses cookies and similar tracking technologies to enhance your browsing
                experience, analyse website traffic, and understand user preferences. You can manage
                your cookie preferences through your browser settings. Please note that disabling
                cookies may affect the functionality of certain parts of our website.
              </p>
            </section>

            <section id="changes">
              <h2><span className="legal-h-n">10.</span> Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, legal requirements, or services. Any changes will be posted on this page
                with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section id="contact" className="legal-callout">
              <h2><span className="legal-h-n">11.</span> Contact us</h2>
              <p>
                If you have any questions about this Privacy Policy, wish to exercise any of your
                rights, or have concerns about how your personal information is being processed,
                please contact our Information Officer:
              </p>
              <dl className="legal-contact">
                <div><dt>Email</dt><dd><a href="mailto:support@cps.co.za">support@cps.co.za</a></dd></div>
                <div><dt>Phone</dt><dd><a href="tel:+27117891957">+27 11 789 1957</a></dd></div>
                <div><dt>Address</dt><dd>39 Grove Street, Randburg, Johannesburg, Gauteng, South Africa</dd></div>
              </dl>
            </section>

            <section id="regulator">
              <h2><span className="legal-h-n">12.</span> Information Regulator</h2>
              <p>
                If you are not satisfied with our response to your request or complaint, you may
                contact the Information Regulator of South Africa:
              </p>
              <dl className="legal-contact">
                <div><dt>Website</dt><dd><a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer">inforegulator.org.za</a></dd></div>
                <div><dt>Email</dt><dd><a href="mailto:enquiries@inforegulator.org.za">enquiries@inforegulator.org.za</a></dd></div>
              </dl>
            </section>
          </Reveal>
        </article>
      </div>

      <div style={{ height: 96 }} />
    </main>
  );
}
