import Link from "next/link";
import { ArrowRight, Truck, Star, Check, Zap } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { getAllComparisonSlugs, getComparison } from "./vs/_data/comparisons";

const featuredSoftware = [
  { name: "Supermove", desc: "AI-powered enterprise platform. Best for 10+ trucks.", price: "Custom / $500+/mo", link: "/software/supermove", badge: "Enterprise", color: "bg-brand-700" },
  { name: "SmartMoving", desc: "Top-rated all-in-one for growing movers.", price: "From $399/mo", link: "/software/smartmoving", badge: "Top Rated", color: "bg-accent-500" },
  { name: "Elromco", desc: "Best value for small movers. Includes website builder.", price: "From $289/mo", link: "/software/elromco", badge: "Best Value", color: "bg-purple-600" },
  { name: "MoveitPro", desc: "Most affordable with 24/7 US support.", price: "From $150/mo", link: "/software/moveitpro", badge: "Best Price", color: "bg-red-600" },
  { name: "Oncue", desc: "Best visual dispatch board for operations teams.", price: "Custom", link: "/software/oncue", badge: "Dispatch", color: "bg-amber-600" },
  { name: "Vonigo", desc: "Multi-service field service platform.", price: "$98+/user/mo", link: "/software/vonigo", badge: "Multi-Service", color: "bg-green-600" },
];

const audienceLinks = [
  { label: "Local Movers", href: "/for/local-movers" },
  { label: "Long-Distance Movers", href: "/for/long-distance-movers" },
  { label: "Commercial Movers", href: "/for/commercial-movers" },
  { label: "Small Companies (1-5 Trucks)", href: "/for/small-moving-companies" },
  { label: "Large Companies (10+ Trucks)", href: "/for/large-moving-companies" },
  { label: "Moving + Storage", href: "/for/storage-companies" },
  { label: "Specialty Movers", href: "/for/specialty-movers" },
  { label: "Junk Removal", href: "/for/junk-removal" },
];

const useCaseLinks = [
  { label: "Moving Estimate Software", href: "/use-case/moving-estimates" },
  { label: "Dispatch Software", href: "/use-case/dispatch-scheduling" },
  { label: "Crew Management", href: "/use-case/crew-management" },
  { label: "Inventory Tracking", href: "/use-case/inventory-tracking" },
  { label: "Moving Company CRM", href: "/use-case/crm" },
  { label: "Lead Management", href: "/use-case/lead-management" },
];

export default function HomePage() {
  const comparisonSlugs = getAllComparisonSlugs().slice(0, 6);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 via-white to-white pt-16 pb-12">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-2 text-sm font-medium text-accent-700 mb-6">
              <Zap className="h-4 w-4" />
              Supermove pays $2,000 per referral — the highest in the industry
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Find the Best<br />
              <span className="text-brand-700">Moving Company Software</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Independent, unbiased comparisons of Supermove, SmartMoving, Elromco, MoveitPro, and more. Find the right software to grow your moving business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/vs/supermove-vs-smartmoving" className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-6 py-3 text-base font-semibold text-white shadow-brand hover:bg-brand-800 transition-all hover:-translate-y-0.5">
                Compare Software <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/software/supermove" className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:border-brand-300 transition-colors">
                View Reviews
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Trusted by 10,000+ moving company owners researching software decisions
            </p>
          </div>
        </section>

        {/* Top Software Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Top Moving Software Platforms</h2>
            <p className="text-slate-600 mb-8">The most-reviewed and highest-rated options for moving companies in 2026.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredSoftware.map((sw) => (
                <Link key={sw.name} href={sw.link} className="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${sw.color} text-white text-sm font-bold`}>
                      {sw.name.slice(0,2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{sw.name}</h3>
                      <span className="text-xs text-slate-500">{sw.badge}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{sw.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand-700">{sw.price}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-brand-700 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Comparisons */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Top Software Comparisons</h2>
            <p className="text-slate-600 mb-8">Head-to-head comparisons with pricing, features, and clear recommendations.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {comparisonSlugs.map(slug => {
                const comp = getComparison(slug);
                if (!comp) return null;
                return (
                  <Link key={slug} href={`/vs/${slug}`} className="flex items-center justify-between bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                    <div>
                      <div className="font-semibold text-slate-900">{comp.platformA.name} vs {comp.platformB.name}</div>
                      <div className="text-sm text-slate-500 mt-1">{comp.platformA.price} vs {comp.platformB.price}</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 shrink-0" />
                  </Link>
                );
              })}
            </div>
            <div className="mt-6 text-center">
              <Link href="/vs/supermove-vs-elromco" className="inline-flex items-center gap-2 text-brand-700 font-medium hover:underline">
                See all 10 comparisons <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* By Audience */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Find Software By Your Type</h2>
            <p className="text-slate-600 mb-8">Curated recommendations for your specific type of moving business.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {audienceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 hover:border-brand-300 hover:text-brand-700 hover:shadow-sm transition-all flex items-center gap-2">
                  <Truck className="h-4 w-4 text-brand-700 shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Software by Use Case</h2>
            <p className="text-slate-600 mb-8">Looking for a specific capability? Find the best tools for each job.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {useCaseLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 hover:border-brand-300 hover:text-brand-700 hover:shadow-sm transition-all flex items-center gap-2">
                  <Star className="h-4 w-4 text-accent-500 shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Trust MovingSoftware.io?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {[
                { icon: "🔍", title: "Independent Research", desc: "We research and compare software based on real features and pricing — not paid placements." },
                { icon: "💰", title: "Transparent Pricing", desc: "We document actual pricing from software vendors so you can budget accurately." },
                { icon: "✅", title: "Clear Recommendations", desc: "Every comparison ends with a specific recommendation — no wishy-washy 'it depends'." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-brand-50 rounded-xl p-6 border border-brand-100">
              <p className="text-sm text-slate-600">
                <strong>Affiliate Disclosure:</strong> Some links on this site may earn us a commission at no extra cost to you. This helps us maintain our independent research. Our reviews are based on features, pricing, and user feedback — not commission rates.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
