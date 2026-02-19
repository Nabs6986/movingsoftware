import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, HelpCircle, AlertCircle } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { getUseCase, getAllUseCaseSlugs } from "../_data/usecases";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllUseCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return { title: "Not Found" };
  return {
    title: useCase.metaTitle,
    description: useCase.metaDescription,
    openGraph: { title: useCase.metaTitle, description: useCase.metaDescription },
    alternates: { canonical: `https://movingsoftware.io/use-case/${slug}` },
  };
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": useCase.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-brand-700">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/use-case/moving-estimates" className="hover:text-brand-700">Use Cases</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">{useCase.headline}</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-700 mb-4">
              Keyword: &ldquo;{useCase.targetKeyword}&rdquo;
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{useCase.headline}</h1>
            <p className="mt-4 text-lg text-slate-600">{useCase.subheadline}</p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-10">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-semibold text-slate-900 mb-2">The Problem</h2>
                  <p className="text-slate-700">{useCase.problemStatement}</p>
                  <ul className="mt-4 space-y-2">
                    {useCase.problemPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-red-400 shrink-0 mt-0.5">✗</span>{point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Solutions */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Top Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {useCase.solutions.map((solution, i) => (
                <div key={solution.name} className={`bg-white rounded-xl p-6 border shadow-sm ${i === 0 ? 'border-brand-300 ring-1 ring-brand-200' : 'border-slate-200'}`}>
                  {i === 0 && <div className="text-xs font-semibold text-brand-700 bg-brand-50 inline-block px-2 py-1 rounded mb-3">⭐ Top Pick</div>}
                  <h3 className="text-lg font-bold text-slate-900">{solution.name}</h3>
                  <p className="text-sm text-brand-700 mt-1">{solution.tagline}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                    <span>💰 {solution.price}</span>
                    <span>⭐ {solution.rating}</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-600">Best for: {solution.bestFor}</p>
                  <a href={solution.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-800 transition-colors">
                    Get {solution.name} <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    {useCase.featureTableHeaders.map((header) => (
                      <th key={header} className="py-3 px-4 text-left text-sm font-medium text-slate-600">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {useCase.featureRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="py-3 px-4 text-sm font-medium text-slate-700">{row.feature}</td>
                      {useCase.featureTableHeaders.slice(1).map((header) => (
                        <td key={header} className="py-3 px-4 text-sm text-slate-600">
                          {row[header] === "✓" ? <Check className="h-4 w-4 text-green-500" /> : row[header] === "✗" ? <span className="text-red-400">✗</span> : row[header]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Pricing Overview</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Software</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Plan</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Price</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {useCase.pricingRows.map((row) => (
                    <tr key={row.software}>
                      <td className="py-3 px-4 text-sm font-medium text-slate-900">{row.software}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">{row.plan}</td>
                      <td className="py-3 px-4 text-sm font-semibold text-brand-700">{row.price}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">{row.notes}</td>
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
              {useCase.faqs.map((faq, i) => (
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

        {/* Other Use Cases */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Other Use Cases</h2>
            <div className="flex flex-wrap gap-3">
              {getAllUseCaseSlugs().filter(s => s !== slug).map(s => (
                <Link key={s} href={`/use-case/${s}`} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-brand-300 hover:text-brand-700 transition-colors">
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
