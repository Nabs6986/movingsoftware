import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, ArrowRight, Star, HelpCircle, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { getSoftwareReview, getAllSoftwareSlugs } from "../_data/software";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSoftwareSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const review = getSoftwareReview(slug);
  if (!review) return { title: "Not Found" };
  return {
    title: review.metaTitle,
    description: review.metaDescription,
    openGraph: { title: review.metaTitle, description: review.metaDescription },
    alternates: { canonical: `https://movingsoftware.io/software/${slug}` },
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(i => (
        <Star key={i} className={`h-4 w-4 ${i <= Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
      ))}
      <span className="ml-1 text-sm font-semibold text-slate-700">{rating}</span>
    </div>
  );
}

export default async function SoftwarePage({ params }: Props) {
  const { slug } = await params;
  const review = getSoftwareReview(slug);
  if (!review) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": review.name,
    "applicationCategory": "Moving Company Software",
    "operatingSystem": "Web",
    "url": review.website,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": review.rating.toString(),
      "reviewCount": review.ratingCount.toString(),
      "bestRating": "5",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": review.faqs.map((faq) => ({
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
              <Link href="/software/supermove" className="hover:text-brand-700">Reviews</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">{review.name}</span>
            </nav>
            <div className="flex items-start gap-6 flex-wrap">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-white text-xl font-bold" style={{ backgroundColor: review.logoColor }}>
                {review.logoInitials}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">{review.name} Review (2026)</h1>
                <p className="mt-2 text-lg text-slate-600">{review.tagline}</p>
                <div className="mt-3 flex items-center gap-4 flex-wrap">
                  <StarRating rating={review.rating} />
                  <span className="text-sm text-slate-500">({review.ratingCount} reviews)</span>
                  <span className="text-sm text-slate-500">Founded: {review.founded}</span>
                  <a href={review.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-brand-700 hover:underline">
                    Visit Website <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Verdict */}
        <section className="py-8 bg-brand-50/50">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-100">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 shrink-0">
                  <Star className="h-4 w-4 text-brand-700" />
                </div>
                <div>
                  <h2 className="font-semibold text-slate-900 mb-2">Quick Verdict</h2>
                  <p className="text-slate-600">{review.quickVerdict}</p>
                  <div className="mt-4 grid sm:grid-cols-3 gap-4 text-sm">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <div className="text-xs text-slate-500 mb-1">Price Range</div>
                      <div className="font-semibold text-slate-900">{review.priceRange}</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-xs text-slate-500 mb-1">Best For</div>
                      <div className="font-semibold text-slate-900 text-xs">{review.bestFor}</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="text-xs text-slate-500 mb-1">Not Ideal For</div>
                      <div className="font-semibold text-slate-900 text-xs">{review.notIdealFor}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{review.name} Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {review.pricingTiers.map((tier) => (
                <div key={tier.tier} className={`rounded-xl p-6 border ${tier.highlighted ? 'border-brand-300 bg-brand-50 ring-1 ring-brand-200' : 'border-slate-200 bg-white'} shadow-sm`}>
                  {tier.highlighted && <div className="text-xs font-semibold text-brand-700 mb-2">Most Popular</div>}
                  <h3 className="font-bold text-slate-900">{tier.tier}</h3>
                  <div className="text-2xl font-bold text-brand-700 mt-1 mb-2">{tier.price}</div>
                  <p className="text-xs text-slate-500 mb-4">{tier.description}</p>
                  <ul className="space-y-2">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">{review.pricingNote}</p>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Features Breakdown</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {review.features.map((category) => (
                <div key={category.category} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item.name} className="flex items-start justify-between gap-3 text-sm">
                        <span className="text-slate-700">{item.name}</span>
                        <span className="shrink-0">
                          {item.included === true ? <Check className="h-4 w-4 text-green-500" /> :
                           item.included === false ? <X className="h-4 w-4 text-red-400" /> :
                           <span className="text-xs text-amber-600 font-medium">{item.included}</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Pros & Cons</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-semibold text-slate-900 mb-4">✅ Pros</h3>
                <ul className="space-y-3">
                  {review.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />{pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h3 className="font-semibold text-slate-900 mb-4">❌ Cons</h3>
                <ul className="space-y-3">
                  {review.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />{con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Best For / Not Ideal For */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">🎯 {review.name} Is Best For...</h3>
                <ul className="space-y-2">
                  {review.bestForList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-brand-700 mt-0.5 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">⚠️ Not Ideal For...</h3>
                <ul className="space-y-2">
                  {review.notIdealForList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />{item}
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
              {review.faqs.map((faq, i) => (
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
        <section className="py-16 bg-brand-700">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Try {review.name}?</h2>
            <p className="text-brand-200 mb-8">See if {review.name} is the right fit for your moving company.</p>
            <a href={`${review.website}?ref=movingsoftware`} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-brand-700 shadow-sm hover:bg-brand-50 transition-colors">
              Visit {review.name} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Comparisons featuring this software */}
        {review.comparisonSlugs.length > 0 && (
          <section className="py-12">
            <div className="mx-auto max-w-4xl px-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{review.name} Comparisons</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {review.comparisonSlugs.map(compSlug => (
                  <Link key={compSlug} href={`/vs/${compSlug}`} className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all">
                    <span className="font-medium text-slate-900 text-sm">{compSlug.replace(/-vs-/g, ' vs ').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
