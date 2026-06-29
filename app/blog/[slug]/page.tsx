import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { posts, getPost, getRelatedPosts, formatPostDate, type Block } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.kind) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "quote":
      return (
        <blockquote>
          <p>{block.text}</p>
          {block.attribution && <cite>- {block.attribution}</cite>}
        </blockquote>
      );
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside className="post-callout">
          <span className="post-callout-label">{block.label}</span>
          <p>{block.text}</p>
        </aside>
      );
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <main>
      {/* HERO - photo-backed, dark */}
      <section className="page-hero has-photo post-hero">
        <div
          className="page-hero-photo"
          aria-hidden
          style={{ backgroundImage: `url('${post.hero}')` }}
        />
        <div className="page-hero-overlay" aria-hidden />
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/blog">Journal</Link>
            <span className="sep">/</span>
            <span style={{ color: "var(--cps-blue)" }}>{post.category}</span>
          </div>
          <div className="post-hero-content">
            <span className={`post-pill post-pill-${post.accent}`}>{post.category}</span>
            <h1>{post.title}</h1>
            <div className="post-hero-meta">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span className="post-meta-sep" aria-hidden>·</span>
              <span className="post-read-time"><Clock width={14} height={14} /> {post.readTime} min read</span>
              <span className="post-meta-sep" aria-hidden>·</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY - centred prose */}
      <article className="post-article">
        <div className="container">
          <Reveal>
            <div className="post-prose">
              {post.body.map((block, i) => (
                <BlockRenderer key={i} block={block} />
              ))}
            </div>
          </Reveal>

          {/* AUTHOR BIO */}
          <Reveal delay={120}>
            <div className="post-author-card">
              <div className="post-author-initial-lg" aria-hidden>{post.author.charAt(0)}</div>
              <div>
                <div className="post-author-name">{post.author}</div>
                <div className="post-author-role">{post.authorRole}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* RELATED POSTS */}
      {related.length > 0 && (
        <section className="section-tinted" style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div className="container">
            <Reveal as="div" className="section-head">
              <div className="left">
                <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> Keep reading</span>
                <h2>More from the journal.</h2>
              </div>
              <Link href="/blog" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                All posts <ArrowRight />
              </Link>
            </Reveal>

            <div className="post-grid">
              {related.map((p, i) => (
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
      )}
    </main>
  );
}
