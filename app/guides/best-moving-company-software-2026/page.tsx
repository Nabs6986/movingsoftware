import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Trophy, HelpCircle, Award, Star, BookOpen, ExternalLink, Lightbulb } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";

export const metadata: Metadata = {
  title: "Best Moving Company Software 2026: Top 5 Picks Reviewed",
  description:
    "We tested and ranked the 5 best moving company software platforms for 2026. Supermove, SmartMoving, Elromco, Vonigo, and MoveitPro compared on features, pricing, and value.",
  openGraph: {
    title: "Best Moving Company Software 2026: Top 5 Picks Reviewed",
    description:
      "Independent rankings of the top moving company software platforms. Detailed pricing, feature analysis, and clear recommendations for every company size.",
  },
  alternates: { canonical: "https://movingsoftware.io/guides/best-moving-company-software-2026" },
};

const picks = [
  {
    rank: 1,
    name: "Supermove",
    slug: "supermove",
    badge: "Editor's Choice",
    tagline: "Best overall for enterprise moving companies",
    rating: 4.8,
    price: "$500-1,500/mo",
    affiliateUrl: "https://www.supermove.com/?ref=movingsoftware",
    reasoning:
      "Supermove leads the market with AI-powered automation, advanced dispatch, and enterprise-grade reporting. It is the only platform with AI-driven lead scoring and smart crew assignment, making it ideal for companies running 10+ trucks across multiple locations. The higher price reflects genuine enterprise capability.",
    pros: [
      "AI-powered dispatch and lead scoring",
      "Advanced multi-branch reporting and analytics",
      "Strongest long-distance and interstate move support",
      "Robust API and third-party integrations",
    ],
    cons: [
      "Premium pricing starts at $500/mo minimum",
      "Overkill for companies with fewer than 5 trucks",
      "Requires annual commitment for best rates",
    ],
  },
  {
    rank: 2,
    name: "SmartMoving",
    slug: "smartmoving",
    badge: "Best All-in-One",
    tagline: "Best all-in-one platform for growing companies",
    rating: 4.7,
    price: "$399-599/mo",
    affiliateUrl: "https://www.smartmoving.com/?ref=movingsoftware",
    reasoning:
      "SmartMoving delivers the best balance of CRM, dispatch, estimating, and invoicing in a single platform. Its built-in lead management with automated email/SMS follow-up and the polished customer booking portal make it the top choice for growing mid-size movers who want everything in one system without the enterprise price tag.",
    pros: [
      "Strongest CRM and automated lead follow-up",
      "Excellent customer-facing booking experience",
      "Solid dispatch with integrated crew communication",
      "Month-to-month billing available",
    ],
    cons: [
      "Fewer AI features compared to Supermove",
      "Reporting less customizable for multi-branch operations",
      "Virtual survey feature is newer and still maturing",
    ],
  },
  {
    rank: 3,
    name: "Elromco",
    slug: "elromco",
    badge: "Best Value",
    tagline: "Best value with transparent pricing and a built-in website builder",
    rating: 4.6,
    price: "$289-399/mo",
    affiliateUrl: "https://www.elromco.com/?ref=movingsoftware",
    reasoning:
      "Elromco offers the best feature-per-dollar ratio in the market. Starting at $289/month with no per-user fees, it includes a built-in website builder, CRM, dispatch, and estimating tools. For small-to-mid-size movers who want a complete platform without paying $400+/month, Elromco consistently delivers.",
    pros: [
      "Lowest price for a full-featured platform",
      "Built-in website builder included at no extra cost",
      "Transparent pricing with no per-user fees",
      "Strong local and long-distance estimating",
    ],
    cons: [
      "UI feels dated compared to newer platforms",
      "Mobile app needs improvement",
      "Fewer integrations with third-party tools",
    ],
  },
  {
    rank: 4,
    name: "Vonigo",
    slug: "vonigo",
    badge: "Best for Multi-Service",
    tagline: "Best for companies offering moving plus other field services",
    rating: 4.4,
    price: "$98-148/user/mo",
    affiliateUrl: "https://www.vonigo.com/?ref=movingsoftware",
    reasoning:
      "Vonigo is the top choice for businesses that offer moving alongside other services like junk removal, cleaning, or delivery. Its per-user pricing model works well for multi-service operations, and the platform handles different service types within one system. If moving is not your only line of business, Vonigo offers the flexibility others lack.",
    pros: [
      "Handles multiple service types in one platform",
      "Per-user pricing scales with team size",
      "Strong online booking and customer portal",
      "Good franchise and multi-location support",
    ],
    cons: [
      "Per-user pricing gets expensive for large teams",
      "Fewer moving-specific features than dedicated platforms",
      "Estimating lacks moving-specific inventory tools",
    ],
  },
  {
    rank: 5,
    name: "MoveitPro",
    slug: "moveitpro",
    badge: "Best for Small Movers",
    tagline: "Most affordable option with 24/7 US-based support",
    rating: 4.3,
    price: "$200-400/mo",
    affiliateUrl: "https://www.moveitpro.com/?ref=movingsoftware",
    reasoning:
      "MoveitPro is the go-to for small moving companies that want professional software without the premium price. Starting around $200/month, it covers the fundamentals — CRM, dispatch, estimating, and invoicing — with the added benefit of 24/7 US-based phone support, which is rare at this price point.",
    pros: [
      "24/7 US-based phone and chat support",
      "Most affordable full-featured platform",
      "Quick setup with minimal onboarding time",
      "Flat monthly pricing with no per-user fees",
    ],
    cons: [
      "Interface is functional but not modern",
      "Lacks advanced AI or automation features",
      "Reporting is basic compared to higher-tier platforms",
    ],
  },
];

const howToChoose = [
  {
    title: "Fleet Size & Growth Plans",
    description:
      "Match the software to your current fleet and where you are headed. A 2-truck local mover needs different tools than a 20-truck interstate operation. Supermove and SmartMoving scale to enterprise level; Elromco and MoveitPro are built for smaller operations. Picking software you will outgrow in 12 months wastes money and your team's time retraining.",
  },
  {
    title: "CRM & Sales Pipeline",
    description:
      "Moving is a high-volume lead business — you need software that captures leads from your website, sends automated follow-ups, and tracks conversion rates. SmartMoving has the strongest built-in CRM. Supermove adds AI-powered lead scoring. If your close rate is below 30%, the CRM should be your top evaluation criterion.",
  },
  {
    title: "Dispatch & Crew Scheduling",
    description:
      "Your dispatch board is the operational heart of your business. Evaluate whether the software handles multi-day jobs, crew availability tracking, truck assignment conflicts, and last-minute schedule changes without breaking. Test it with a realistic peak-season scenario, not just a single local move.",
  },
  {
    title: "Integrations with Moving-Specific Tools",
    description:
      "Check integration with the tools you already use: payment processors (Square, Stripe), accounting software (QuickBooks), Google Business Profile, lead sources (Yelp, Thumbtack, MovingLabor.com), and review management platforms. Supermove and SmartMoving offer the most integrations. Closed ecosystems with no API mean you are locked in.",
  },
  {
    title: "Pricing Model & Total Cost",
    description:
      "Look beyond the base monthly fee. Factor in per-truck charges, onboarding fees, SMS costs, payment processing rates, and annual price increases. Per-user pricing (like Vonigo at $98-148/user/mo) can get expensive fast for larger teams. Flat-rate pricing (Elromco, MoveitPro) is more predictable and often cheaper at scale.",
  },
];

const faqs = [
  {
    question: "What is the best moving company software in 2026?",
    answer:
      "Supermove is the best overall moving company software for mid-to-large operations, scoring 4.8/5 in our testing. For growing companies wanting a more affordable all-in-one solution, SmartMoving (4.7/5, from $399/mo) is the top pick. Small movers on a budget should consider Elromco at $289/mo or MoveitPro starting around $200/mo.",
  },
  {
    question: "How much does moving company software cost per month?",
    answer:
      "Moving company software ranges from $200 to $1,500+ per month depending on fleet size and features. MoveitPro starts around $200/mo (most affordable), Elromco at $289/mo, SmartMoving at $399/mo, and Supermove from $500/mo for enterprise operations. Vonigo uses per-user pricing at $98-148/user/mo. Most platforms do not charge per-user fees on top of the base price.",
  },
  {
    question: "Is Supermove worth the higher price compared to SmartMoving?",
    answer:
      "Supermove is worth the premium for companies running 10+ trucks or multiple branches that need AI-driven automation, advanced analytics, and enterprise-grade dispatch. SmartMoving offers 80% of the functionality at a lower price point and is the better value for growing companies with 3-10 trucks. For most mid-size movers, SmartMoving delivers a stronger ROI.",
  },
  {
    question: "What is the cheapest moving company software that is actually good?",
    answer:
      "Elromco at $289/month offers the best value for a full-featured platform — it includes CRM, dispatch, estimating, and a website builder with no per-user fees. MoveitPro at approximately $200/month is the cheapest option that covers the fundamentals, and it comes with 24/7 US-based phone support. Below $200/mo, you are unlikely to find software with adequate moving-specific features.",
  },
  {
    question: "Can I switch moving company software without losing my customer data?",
    answer:
      "Yes, but plan for 2-6 weeks of transition. Customer contact data and completed job history typically export to CSV and import into any new platform. Active estimates, in-progress jobs, and custom pricing tables usually need manual recreation. Most vendors offer migration support — Supermove and SmartMoving provide dedicated implementation specialists. Switch during your slow season (November-February) to minimize disruption.",
  },
];

const citations = [
  {
    name: "American Trucking Associations / AMSA",
    url: "https://www.moving.org",
    description: "Industry standards and regulatory guidance for moving and storage companies",
  },
  {
    name: "G2",
    url: "https://www.g2.com/categories/moving-company",
    description: "Verified user reviews and ratings for moving company software platforms",
  },
  {
    name: "Capterra",
    url: "https://www.capterra.com/moving-company-software/",
    description: "Software comparison platform with real user reviews and feature comparisons",
  },
  {
    name: "MovingLabor.com",
    url: "https://www.movinglabor.com",
    description: "Moving industry marketplace and resource for labor and software tools",
  },
  {
    name: "Software Advice",
    url: "https://www.softwareadvice.com/moving-company/",
    description: "Expert software recommendations and buyer guides for the moving industry",
  },
];

const rankColors = ["bg-yellow-400", "bg-slate-300", "bg-orange-400", "bg-brand-400", "bg-slate-400"];

export default function BestMovingCompanySoftware2026Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://movingsoftware.io" },
          { name: "Guides", url: "https://movingsoftware.io/guides" },
          { name: "Best Moving Company Software 2026", url: "https://movingsoftware.io/guides/best-moving-company-software-2026" },
        ]}
      />
      <ItemListSchema
        name="Best Moving Company Software 2026"
        url="https://movingsoftware.io/guides/best-moving-company-software-2026"
        items={picks.map((pick) => ({
          name: pick.name,
          url: `https://movingsoftware.io/software/${pick.slug}`,
          description: pick.tagline,
        }))}
      />
      <FAQSchema
        faqs={faqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 via-white to-white pt-16 pb-12">
          <div className="mx-auto max-w-4xl px-6">
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-brand-700">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/guides" className="hover:text-brand-700">Guides</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">Best Moving Company Software 2026</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-2 text-sm font-medium text-accent-700 mb-6">
              <Award className="h-4 w-4" />
              Updated February 2026
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Best Moving Company Software<br />
              <span className="text-brand-700">2026: Top 5 Picks</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              We tested, demoed, and compared every major moving company software platform. Here are the 5 best options for 2026, ranked by features, pricing, and real-world value for moving businesses of every size.
            </p>
          </div>
        </section>

        {/* TL;DR Box */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-brand-700 mt-0.5 shrink-0" />
                <div>
                  <h2 className="font-bold text-slate-900 mb-2">TL;DR</h2>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <strong>Supermove</strong> (4.8/5) is the best overall for enterprise movers with 10+ trucks needing AI-driven automation. <strong>SmartMoving</strong> (4.7/5, from $399/mo) is the best all-in-one for growing mid-size companies. <strong>Elromco</strong> (4.6/5, from $289/mo) wins on value with the lowest price for a full-featured platform. For multi-service businesses, <strong>Vonigo</strong> scales per-user. Budget-conscious small movers should start with <strong>MoveitPro</strong> at around $200/mo with 24/7 US support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Summary Table */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Summary</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Rank</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Software</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Rating</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Best For</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {picks.map((pick) => (
                    <tr key={pick.name}>
                      <td className="py-3 px-4 text-sm font-medium text-slate-900">#{pick.rank}</td>
                      <td className="py-3 px-4">
                        <Link href={`/software/${pick.slug}`} className="text-sm font-semibold text-brand-700 hover:underline">
                          {pick.name}
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-sm text-slate-600">
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                          {pick.rating}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-slate-600">{pick.badge}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">{pick.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Picks */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Detailed Reviews</h2>
            <div className="space-y-6">
              {picks.map((pick, index) => (
                <div key={pick.name} id={pick.slug} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${rankColors[index] || "bg-slate-400"} shrink-0`}>
                      <Trophy className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-slate-500">#{pick.rank}</span>
                            <h3 className="text-xl font-bold text-slate-900">{pick.name}</h3>
                          </div>
                          <p className="text-brand-700 font-medium text-sm">{pick.tagline}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                              <Award className="h-3 w-3" />
                              {pick.badge}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-slate-600">
                              <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                              {pick.rating}/5
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-slate-900">{pick.price}</span>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-slate-600">{pick.reasoning}</p>
                      <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-slate-700 mb-2">Pros</p>
                          <ul className="space-y-1">
                            {pick.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                <Check className="h-3 w-3 text-green-500 mt-0.5 shrink-0" />{pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-700 mb-2">Cons</p>
                          <ul className="space-y-1">
                            {pick.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                <span className="text-orange-400 shrink-0">&#8226;</span>{con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-3 flex-wrap">
                        <a href={pick.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-800 transition-colors">
                          Get {pick.name} <ArrowRight className="h-3 w-3" />
                        </a>
                        <Link href={`/software/${pick.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:underline">
                          Full Review <ExternalLink className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">How to Choose the Right Moving Software</h2>
            <div className="space-y-4">
              {howToChoose.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-brand-50 text-brand-700 text-sm font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
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

        {/* Citations */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Sources & References</h2>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm divide-y divide-slate-100">
              {citations.map((cite, i) => (
                <div key={i} className="p-4 flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                    {i + 1}
                  </span>
                  <div>
                    <a href={cite.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-700 hover:underline">
                      {cite.name}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">{cite.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-6">
              <p className="text-sm text-slate-600">
                <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. If you click through and subscribe, we may earn a commission at no extra cost to you. This helps fund our independent research. Our rankings and recommendations are based on features, pricing, and real-world testing — not commission rates. Read our{" "}
                <Link href="/how-we-review" className="text-brand-700 underline">review methodology</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-brand-50">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-brand-700 mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Need a Side-by-Side Comparison?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Compare any two platforms head-to-head with detailed feature breakdowns, pricing tables, and a clear recommendation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/vs/supermove-vs-smartmoving" className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-6 py-3 text-base font-semibold text-white shadow-brand hover:bg-brand-800 transition-all hover:-translate-y-0.5">
                Compare Software <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/software/supermove" className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:border-brand-300 transition-colors">
                View All Reviews
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
