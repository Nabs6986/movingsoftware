import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { getAllPosts } from "./_data/posts";

export const metadata: Metadata = {
  title: "Moving Company Software Blog | Guides, Tips & Comparisons",
  description:
    "Expert guides, industry trends, and practical tips for choosing and using moving company software. Updated for 2026.",
  openGraph: {
    title: "Moving Company Software Blog | MovingSoftware.io",
    description:
      "Expert guides, industry trends, and practical tips for choosing and using moving company software.",
  },
  alternates: { canonical: "https://movingsoftware.io/blog" },
};

const categoryLabels: Record<string, string> = {
  guide: "Guide",
  comparison: "Comparison",
  news: "Industry News",
  tips: "Tips & Strategies",
};

const categoryColors: Record<string, string> = {
  guide: "bg-brand-100 text-brand-700",
  comparison: "bg-purple-100 text-purple-700",
  news: "bg-amber-100 text-amber-700",
  tips: "bg-green-100 text-green-700",
};

export default function BlogIndexPage() {
  const allPosts = getAllPosts().sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const featuredPost = allPosts[0];
  const remainingPosts = allPosts.slice(1);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://movingsoftware.io" },
          { name: "Blog", url: "https://movingsoftware.io/blog" },
        ]}
      />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 via-white to-white pt-16 pb-12">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-700 mb-6">
              <BookOpen className="h-4 w-4" />
              Moving Software Insights
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Moving Company Software<br />
              <span className="text-brand-700">Blog & Guides</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Expert guides, industry trends, and practical tips for choosing, implementing, and getting the most from your moving company software.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12">
            <div className="mx-auto max-w-6xl px-6">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-300 transition-all overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${categoryColors[featuredPost.category] || "bg-slate-100 text-slate-600"}`}>
                      <Tag className="h-3 w-3" />
                      {categoryLabels[featuredPost.category] || featuredPost.category}
                    </span>
                    <span className="text-xs text-slate-500">Featured</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 text-lg mb-6 max-w-3xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>{featuredPost.author.name}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.readingTime} min read
                    </span>
                    <span>
                      {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1 text-brand-700 font-medium group-hover:underline">
                      Read article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all overflow-hidden flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[post.category] || "bg-slate-100 text-slate-600"}`}>
                        {categoryLabels[post.category] || post.category}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime} min
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors mb-2 text-lg">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1 text-brand-700 font-medium group-hover:underline">
                        Read <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Find Your Software?
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Head-to-head comparisons with pricing, features, and clear recommendations for every type of moving company.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/vs/supermove-vs-smartmoving"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-6 py-3 text-base font-semibold text-white shadow-brand hover:bg-brand-800 transition-all hover:-translate-y-0.5"
              >
                Compare Software <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/software/supermove"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:border-brand-300 transition-colors"
              >
                View Reviews
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
