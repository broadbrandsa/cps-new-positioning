import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Clock } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { posts, formatPostDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "The CPS Journal - perspectives on completion, banking education, qualification frameworks and the realities of learning while you work.",
};

export default function BlogIndex() {
  // Most recent first
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;

  return (
    <main>
      {/* HERO - photo-backed, dark */}
      <section className="page-hero has-photo">
        <div
          className="page-hero-photo"
          aria-hidden
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="page-hero-overlay" aria-hidden />
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span style={{ color: "var(--cps-blue)" }}>Journal</span>
          </div>
          <div style={{ marginTop: 24, maxWidth: 920 }}>
            <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> Journal</span>
            <h1>Perspectives on learning that actually finishes.</h1>
            <p style={{ marginTop: 24, fontSize: 18 }}>
              Notes from inside CPS - on completion, banking education, qualification frameworks
              and the realities of learning while you work.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED POST - large card */}
      <section style={{ paddingTop: 96 }}>
        <div className="container">
          <Reveal>
            <Spotlight as="div">
              <Link href={`/blog/${featured.slug}`} className={`featured-post accent-${featured.accent}`}>
                <div className="featured-post-image">
                  <Image
                    src={featured.hero}
                    alt=""
                    width={1600}
                    height={1000}
                    sizes="(max-width: 880px) 100vw, 60vw"
                    priority
                  />
                </div>
                <div className="featured-post-body">
                  <div className="post-meta-row">
                    <span className={`post-pill post-pill-${featured.accent}`}>{featured.category}</span>
                    <span className="post-meta-sep" aria-hidden>·</span>
                    <time dateTime={featured.date}>{formatPostDate(featured.date)}</time>
                    <span className="post-meta-sep" aria-hidden>·</span>
                    <span className="post-read-time"><Clock width={14} height={14} /> {featured.readTime} min read</span>
                  </div>
                  <h2 className="featured-post-title">{featured.title}</h2>
                  <p className="featured-post-excerpt">{featured.excerpt}</p>
                  <div className="post-author-row">
                    <div className="post-author-initial" aria-hidden>{featured.author.charAt(0)}</div>
                    <div>
                      <div className="post-author-name">{featured.author}</div>
                      <div className="post-author-role">{featured.authorRole}</div>
                    </div>
                  </div>
                  <span className="post-cta">Read the piece <ArrowRight /></span>
                </div>
              </Link>
            </Spotlight>
          </Reveal>
        </div>
      </section>

      {/* LATEST - 3-up grid */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-purple)" }} /> Latest</span>
              <h2>More from the journal.</h2>
              <p>
                Practical, considered perspectives - for students choosing a programme, for organisations
                building workforce capability, and for anyone curious about how recognised qualifications
                actually work.
              </p>
            </div>
          </Reveal>

          <div className="post-grid">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Spotlight as="div">
                  <Link href={`/blog/${p.slug}`} className={`post-card accent-${p.accent}`}>
                    <div className="post-card-image">
                      <Image
                        src={p.hero}
                        alt=""
                        width={800}
                        height={520}
                        sizes="(max-width: 880px) 100vw, 33vw"
                      />
                    </div>
                    <div className="post-card-body">
                      <div className="post-meta-row">
                        <span className={`post-pill post-pill-${p.accent}`}>{p.category}</span>
                        <span className="post-meta-sep" aria-hidden>·</span>
                        <span className="post-read-time"><Clock width={12} height={12} /> {p.readTime} min</span>
                      </div>
                      <h3 className="post-card-title">{p.title}</h3>
                      <p className="post-card-excerpt">{p.excerpt}</p>
                      <div className="post-card-foot">
                        <time dateTime={p.date}>{formatPostDate(p.date)}</time>
                        <span className="post-cta-small">Read <ArrowRight width={14} height={14} /></span>
                      </div>
                    </div>
                  </Link>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
