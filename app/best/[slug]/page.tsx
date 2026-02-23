import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, Trophy, HelpCircle, Award, Star } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { getBestOf, getAllBestOfSlugs } from "../_data/bestof";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBestOfSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getBestOf(slug);
  if (!page) return { title: "Not Found" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: { title: page.metaTitle, description: page.metaDescription },
    alternates: { canonical: `https://movingsoftware.io/best/${slug}` },
  };
}

const rankColors = ["bg-yellow-400", "bg-slate-300", "bg-orange-400", "bg-brand-400", "bg-slate-400"];
const rankLabels = ["Best Overall", "Runner-Up", "Strong Pick", "Also Great", "Worth Considering"];

export default async function BestOfPage({ params }: Props) {
  const { slug } = await params;
  const page = getBestOf(slug);
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": page.heroHeadline,
    "description": page.description,
    "itemListElement": page.recommendations.map((rec, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": rec.name,
      "description": rec.reasoning,
      "url": rec.affiliateUrl,
    })),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": page.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-brand-700">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">Best Of</span>
              <span className="mx-2">/</span>
              <span className="text-slate-700">{page.title}</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{page.heroHeadline}</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">{page.heroSubtext}</p>
          </div>
        </section>

        {/* Description */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-slate-700 leading-relaxed">{page.description}</p>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Summary</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Rank</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Software</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Best For</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {page.recommendations.map((rec) => (
                    <tr key={rec.name}>
                      <td className="py-3 px-4 text-sm font-medium text-slate-900">#{rec.rank}</td>
                      <td className="py-3 px-4 text-sm font-semibold text-brand-700">{rec.name}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">{rec.bestFor}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">{rec.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Recommendations */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Detailed Reviews</h2>
            <div className="space-y-6">
              {page.recommendations.map((rec, index) => (
                <div key={rec.name} id={rec.name.toLowerCase().replace(/\s+/g, "-")} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${rankColors[index] || "bg-slate-400"} shrink-0`}>
                      <Trophy className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-slate-500">#{rec.rank}</span>
                            <h3 className="text-xl font-bold text-slate-900">{rec.name}</h3>
                          </div>
                          <p className="text-brand-700 font-medium text-sm">{rec.tagline}</p>
                          {index < rankLabels.length && (
                            <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                              <Award className="h-3 w-3" />
                              {rankLabels[index]}
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-slate-900">{rec.price}</span>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-slate-600">{rec.reasoning}</p>
                      <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-slate-700 mb-2">Pros</p>
                          <ul className="space-y-1">
                            {rec.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                <Check className="h-3 w-3 text-green-500 mt-0.5 shrink-0" />{pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-700 mb-2">Cons</p>
                          <ul className="space-y-1">
                            {rec.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                <span className="text-orange-400 shrink-0">&#8226;</span>{con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-3">
                        <a href={rec.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-800 transition-colors">
                          Get {rec.name} <ArrowRight className="h-3 w-3" />
                        </a>
                        <span className="text-xs text-slate-500">Best for: {rec.bestFor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {page.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-brand-700 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-brand-50">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Star className="mx-auto h-8 w-8 text-brand-700 mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Not sure which software is right for you?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Compare all the top moving software platforms side-by-side with detailed feature breakdowns, pricing, and honest reviews.
            </p>
            <Link href="/software" className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-sm font-medium text-white hover:bg-brand-800 transition-colors">
              Compare All Software <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Related Best-Of Pages */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Browse Other Best-Of Guides</h2>
            <div className="flex flex-wrap gap-3">
              {getAllBestOfSlugs().filter(s => s !== slug).map(s => {
                const other = getBestOf(s);
                return (
                  <Link key={s} href={`/best/${s}`} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-brand-300 hover:text-brand-700 transition-colors">
                    {other?.title || s.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
