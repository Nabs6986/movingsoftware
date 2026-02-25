import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowRight, ArrowLeft, Tag, Calendar, User } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { getPost, getAllPostSlugs, getAllPosts } from "../_data/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
    },
    alternates: { canonical: `https://movingsoftware.io/blog/${slug}` },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Horizontal rule
    if (line.trim() === "---") {
      elements.push(<hr key={i} className="my-8 border-slate-200" />);
      i++;
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4">
          {renderInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          {renderInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // Table
    if (line.includes("|") && line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      elements.push(renderTable(tableLines, elements.length));
      continue;
    }

    // Unordered list
    if (line.match(/^- /)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^- /)) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-4 space-y-2 pl-6 list-disc text-slate-700">
          {listItems.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (line.match(/^\d+\. /)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        listItems.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${elements.length}`} className="my-4 space-y-2 pl-6 list-decimal text-slate-700">
          {listItems.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Checklist
    if (line.match(/^- \[[ x]\] /)) {
      const checkItems: { checked: boolean; text: string }[] = [];
      while (i < lines.length && lines[i].match(/^- \[[ x]\] /)) {
        checkItems.push({
          checked: lines[i].includes("[x]"),
          text: lines[i].replace(/^- \[[ x]\] /, ""),
        });
        i++;
      }
      elements.push(
        <ul key={`cl-${elements.length}`} className="my-4 space-y-2 pl-2 text-slate-700">
          {checkItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className={`mt-1 h-4 w-4 rounded border flex-shrink-0 flex items-center justify-center text-xs ${item.checked ? "bg-brand-700 border-brand-700 text-white" : "border-slate-300"}`}>
                {item.checked && "✓"}
              </span>
              <span>{renderInline(item.text)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Paragraph
    elements.push(
      <p key={i} className="my-4 text-slate-700 leading-relaxed">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return elements;
}

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  // Process bold, links, and inline code
  const regex = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))|(`(.+?)`)|(--(.*?)--)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      // Bold
      parts.push(<strong key={match.index} className="font-semibold text-slate-900">{match[2]}</strong>);
    } else if (match[3]) {
      // Link
      const href = match[5];
      const isInternal = href.startsWith("/");
      if (isInternal) {
        parts.push(
          <Link key={match.index} href={href} className="text-brand-700 font-medium hover:underline">
            {match[4]}
          </Link>
        );
      } else {
        parts.push(
          <a key={match.index} href={href} className="text-brand-700 font-medium hover:underline" target="_blank" rel="noopener noreferrer">
            {match[4]}
          </a>
        );
      }
    } else if (match[6]) {
      // Inline code
      parts.push(
        <code key={match.index} className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-800">
          {match[7]}
        </code>
      );
    } else if (match[8]) {
      // Em dash
      parts.push(<span key={match.index}>&mdash;{match[9]}</span>);
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : parts;
}

function renderTable(lines: string[], keyBase: number) {
  if (lines.length < 2) return null;

  const parseRow = (line: string) =>
    line.split("|").filter((cell) => cell.trim() !== "").map((cell) => cell.trim());

  const headers = parseRow(lines[0]);
  // Skip separator line (index 1)
  const rows = lines.slice(2).map(parseRow);

  return (
    <div key={`table-${keyBase}`} className="my-6 overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50">
            {headers.map((header, idx) => (
              <th key={idx} className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 text-slate-700 border-b border-slate-100">
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .filter((p) => p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  const categoryLabels: Record<string, string> = {
    guide: "Guide",
    comparison: "Comparison",
    news: "Industry News",
    tips: "Tips & Strategies",
  };

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        author={post.author.name}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        url={`https://movingsoftware.io/blog/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://movingsoftware.io" },
          { name: "Blog", url: "https://movingsoftware.io/blog" },
          { name: post.title, url: `https://movingsoftware.io/blog/${slug}` },
        ]}
      />
      {post.faqs && post.faqs.length > 0 && <FAQSchema faqs={post.faqs} />}
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
          <div className="mx-auto max-w-3xl px-6">
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-brand-700">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-brand-700">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">{post.title}</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
                <Tag className="h-3 w-3" />
                {categoryLabels[post.category] || post.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-slate-600 mb-6">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author.name}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingTime} min read
              </span>
              {post.updatedAt && (
                <span className="text-xs text-slate-400">
                  Updated {new Date(post.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12">
          <div className="mx-auto max-w-3xl px-6">
            <div className="prose-slate max-w-none">
              {renderMarkdown(post.content)}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="py-12 bg-slate-50">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {post.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-3">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h2>
              <div className="grid gap-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-brand-300 hover:shadow-md transition-all"
                  >
                    <div>
                      <span className="text-xs font-medium text-brand-700 mb-1 block">
                        {categoryLabels[related.category] || related.category}
                      </span>
                      <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">{related.readingTime} min read</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-brand-700 transition-colors shrink-0 ml-4" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 bg-brand-50">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Compare Moving Software?</h2>
            <p className="text-slate-600 mb-6">
              See head-to-head comparisons with pricing, features, and clear recommendations for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/vs/supermove-vs-smartmoving"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-6 py-3 text-base font-semibold text-white shadow-brand hover:bg-brand-800 transition-all hover:-translate-y-0.5"
              >
                Compare Software <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:border-brand-300 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" /> Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
