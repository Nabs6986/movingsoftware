import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, ArrowRight, Star, HelpCircle } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { ComparisonSchema } from "@/components/schema/ComparisonSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { getComparison, getAllComparisonSlugs } from "../_data/comparisons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return { title: "Comparison Not Found" };
  return {
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    openGraph: { title: comparison.metaTitle, description: comparison.metaDescription },
    alternates: { canonical: `https://movingsoftware.io/vs/${slug}` },
  };
}

function FeatureIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-5 w-5 text-green-500" />;
  if (value === false) return <X className="h-5 w-5 text-red-400" />;
  return <span className="text-sm text-slate-600">{value}</span>;
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  const { platformA, platformB } = comparison;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": comparison.faqs.map((faq) => ({
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
          { name: "Comparisons", url: "https://movingsoftware.io/vs" },
          { name: `${platformA.name} vs ${platformB.name}`, url: `https://movingsoftware.io/vs/${slug}` },
        ]}
      />
      <ComparisonSchema
        products={[
          { name: platformA.name, description: platformA.bestFor },
          { name: platformB.name, description: platformB.bestFor },
        ]}
        url={`https://movingsoftware.io/vs/${slug}`}
      />
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-brand-700">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/vs/supermove-vs-smartmoving" className="hover:text-brand-700">Comparisons</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">{platformA.name} vs {platformB.name}</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {platformA.name} vs {platformB.name}
            </h1>
            <p className="mt-4 text-lg text-slate-600">Which moving company software is right for your business?</p>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="py-8 bg-brand-50/50">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-100">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 shrink-0">
                  <Star className="h-4 w-4 text-brand-700" />
                </div>
                <div>
                  <h2 className="font-semibold text-slate-900 mb-2">Quick Answer</h2>
                  <p className="text-slate-600" dangerouslySetInnerHTML={{ __html: comparison.quickAnswer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* At a Glance */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">At a Glance</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-500"></th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-brand-700">{platformA.name}</th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">{platformB.name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-slate-700">Price Range</td>
                    <td className="py-4 px-4 text-sm text-slate-900 font-semibold">{platformA.price}</td>
                    <td className="py-4 px-4 text-sm text-slate-600">{platformB.price}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-slate-700">Best For</td>
                    <td className="py-4 px-4 text-sm text-slate-900">{platformA.bestFor}</td>
                    <td className="py-4 px-4 text-sm text-slate-600">{platformB.bestFor}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Feature Comparison</h2>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Feature</th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-brand-700">{platformA.name}</th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-slate-600">{platformB.name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparison.features.map((feature) => (
                    <tr key={feature.name}>
                      <td className="py-4 px-4 text-sm text-slate-700">{feature.name}</td>
                      <td className="py-4 px-4 text-center"><span className="inline-flex justify-center"><FeatureIcon value={feature.platformA} /></span></td>
                      <td className="py-4 px-4 text-center"><span className="inline-flex justify-center"><FeatureIcon value={feature.platformB} /></span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Pricing Comparison</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">{platformA.name} Pricing</h3>
                <div className="space-y-4">
                  {comparison.pricingDetails.platformA.map((tier) => (
                    <div key={tier.tier} className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-900">{tier.tier}</span>
                        <span className="text-sm font-semibold text-brand-700">{tier.price}</span>
                      </div>
                      <ul className="space-y-1">
                        {tier.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">{platformB.name} Pricing</h3>
                <div className="space-y-4">
                  {comparison.pricingDetails.platformB.map((tier) => (
                    <div key={tier.tier} className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-900">{tier.tier}</span>
                        <span className="text-sm font-semibold text-slate-600">{tier.price}</span>
                      </div>
                      <ul className="space-y-1">
                        {tier.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to Choose */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Who Should Choose What?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">✅ Choose {platformA.name} if...</h3>
                <ul className="space-y-3">
                  {comparison.whenChooseA.map((reason, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-brand-700 mt-0.5 shrink-0" />{reason}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-100 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">✅ Choose {platformB.name} if...</h3>
                <ul className="space-y-3">
                  {comparison.whenChooseB.map((reason, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-slate-500 mt-0.5 shrink-0" />{reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {comparison.faqs.map((faq, i) => (
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

        {/* Verdict */}
        <section className="py-12 bg-slate-900">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-white mb-4">The Verdict</h2>
            <p className="text-lg text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: comparison.verdict.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={platformA.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-base font-medium text-white hover:bg-brand-800 transition-colors">
                Try {platformA.name} <ArrowRight className="h-4 w-4" />
              </a>
              <a href={platformB.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/20 transition-colors">
                Try {platformB.name} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Other Comparisons */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">More Moving Software Comparisons</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {getAllComparisonSlugs().filter(s => s !== slug).slice(0, 6).map(s => {
                const comp = getComparison(s);
                if (!comp) return null;
                return (
                  <Link key={s} href={`/vs/${s}`} className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all">
                    <span className="font-medium text-slate-900 text-sm">{comp.platformA.name} vs {comp.platformB.name}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 shrink-0" />
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
