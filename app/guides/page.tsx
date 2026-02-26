import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Star, Award } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Moving Company Software Guides | Expert Buying Advice",
  description:
    "In-depth guides to help moving company owners choose the right software. Rankings, buyer tips, and decision frameworks updated for 2026.",
  openGraph: {
    title: "Moving Company Software Guides | MovingSoftware.io",
    description:
      "Expert guides and rankings to help movers find the best software for their business.",
  },
  alternates: { canonical: "https://movingsoftware.io/guides" },
};

const guides = [
  {
    title: "Best Moving Company Software 2026: Top 5 Picks",
    description:
      "Our definitive ranking of the 5 best moving company software platforms for 2026. Supermove, SmartMoving, Elromco, Vonigo, and MoveitPro compared on features, pricing, and value for every company size.",
    href: "/guides/best-moving-company-software-2026",
    badge: "Featured",
    badgeColor: "bg-accent-100 text-accent-700",
    icon: Award,
    updated: "February 2026",
  },
];

export default function GuidesIndexPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://movingsoftware.io" },
          { name: "Guides", url: "https://movingsoftware.io/guides" },
        ]}
      />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 via-white to-white pt-16 pb-12">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-700 mb-6">
              <BookOpen className="h-4 w-4" />
              Expert Buying Guides
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Moving Software<br />
              <span className="text-brand-700">Guides & Rankings</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              In-depth guides to help you evaluate, compare, and choose the right moving company software. Written by industry researchers, updated monthly.
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">All Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => {
                const IconComponent = guide.icon;
                return (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all overflow-hidden flex flex-col"
                  >
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${guide.badgeColor}`}>
                          <IconComponent className="h-3 w-3" />
                          {guide.badge}
                        </span>
                      </div>
                      <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors mb-2 text-lg">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 flex-1">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                        <span>Updated {guide.updated}</span>
                        <span className="inline-flex items-center gap-1 text-brand-700 font-medium group-hover:underline">
                          Read guide <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* More Resources */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">More Resources</h2>
            <p className="text-slate-600 mb-8">Explore our other tools for evaluating moving company software.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/vs/supermove-vs-smartmoving" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-slate-900 mb-1">Head-to-Head Comparisons</h3>
                <p className="text-sm text-slate-600">Side-by-side feature and pricing comparisons of top platforms.</p>
              </Link>
              <Link href="/software/supermove" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-slate-900 mb-1">Software Reviews</h3>
                <p className="text-sm text-slate-600">Detailed reviews of individual moving software platforms.</p>
              </Link>
              <Link href="/faq" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-slate-900 mb-1">FAQ</h3>
                <p className="text-sm text-slate-600">Answers to common questions about moving company software.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Star className="mx-auto h-8 w-8 text-brand-700 mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Find Your Software?
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Compare the top moving company software platforms with pricing, features, and clear recommendations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/guides/best-moving-company-software-2026"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-6 py-3 text-base font-semibold text-white shadow-brand hover:bg-brand-800 transition-all hover:-translate-y-0.5"
              >
                See Top 5 Picks <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/vs/supermove-vs-smartmoving"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:border-brand-300 transition-colors"
              >
                Compare Software
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
