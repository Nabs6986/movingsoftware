import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, Star, HelpCircle, Trophy } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";
import { getAudience, getAllAudienceSlugs } from "../_data/audiences";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAudienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) return { title: "Not Found" };
  return {
    title: audience.metaTitle,
    description: audience.metaDescription,
    openGraph: { title: audience.metaTitle, description: audience.metaDescription },
    alternates: { canonical: `https://movingsoftware.io/for/${slug}` },
  };
}

const rankColors = ["bg-yellow-400", "bg-slate-300", "bg-orange-400"];

export default async function AudiencePage({ params }: Props) {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": audience.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://movingsoftware.io" },
          { name: "By Mover Type", url: "https://movingsoftware.io/for" },
          { name: audience.title, url: `https://movingsoftware.io/for/${slug}` },
        ]}
      />
      <ItemListSchema
        name={audience.heroHeadline}
        url={`https://movingsoftware.io/for/${slug}`}
        items={audience.topRecommendations.map((rec) => ({
          name: rec.name,
          url: rec.affiliateUrl,
          description: rec.reasoning,
        }))}
      />
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-brand-700">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">By Mover Type</span>
              <span className="mx-2">/</span>
              <span className="text-slate-700">{audience.title}</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{audience.heroHeadline}</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">{audience.heroSubtext}</p>
          </div>
        </section>

        {/* Description */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-slate-700 leading-relaxed">{audience.audienceDescription}</p>
          </div>
        </section>

        {/* Top Picks */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Top Software Picks</h2>
            <div className="space-y-6">
              {audience.topRecommendations.map((rec, index) => (
                <div key={rec.name} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${rankColors[index]} shrink-0`}>
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
                                <span className="text-orange-400 shrink-0">•</span>{con}
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

        {/* Key Features */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Key Features to Look For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {audience.keyFeatures.map((feature, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Pricing Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Software</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Starter</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Mid-Tier</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Enterprise</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Free Trial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {audience.pricingTable.map((row) => (
                    <tr key={row.software}>
                      <td className="py-3 px-4 text-sm font-medium text-slate-900">{row.software}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">{row.starter}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">{row.mid}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">{row.enterprise}</td>
                      <td className="py-3 px-4 text-sm">{row.freeTrial ? "✅" : "❌"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {audience.faqs.map((faq, i) => (
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

        {/* Related Links */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Browse Other Mover Types</h2>
            <div className="flex flex-wrap gap-3">
              {getAllAudienceSlugs().filter(s => s !== slug).map(s => (
                <Link key={s} href={`/for/${s}`} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-brand-300 hover:text-brand-700 transition-colors">
                  {s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
