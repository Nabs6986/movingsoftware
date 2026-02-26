import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About This Site — How MovingSoftware.io Reviews Software",
  description:
    "Learn how MovingSoftware.io evaluates and scores moving company software. Our 6-dimension rating methodology, editorial independence policy, and contact information.",
  openGraph: {
    title: "About This Site — MovingSoftware.io",
    description:
      "Our methodology for reviewing and scoring moving company software platforms. Independent, transparent, and updated regularly.",
  },
  alternates: { canonical: "https://movingsoftware.io/about-this-site" },
};

const ratingDimensions = [
  {
    name: "CRM & Sales Pipeline",
    weight: "20%",
    description:
      "How well does the platform capture leads, manage follow-ups, and track conversion rates? We evaluate website lead forms, automated email/SMS sequences, pipeline visualization, and reporting. Moving is a high-volume lead business — a weak CRM means lost revenue.",
  },
  {
    name: "Dispatch & Operations",
    weight: "20%",
    description:
      "Can the dispatch board handle the reality of daily moving operations? We test crew assignment, truck availability tracking, multi-day job management, schedule conflict detection, and last-minute changes. This is the operational core of any moving company and we evaluate it with realistic peak-season scenarios.",
  },
  {
    name: "Estimating & Quoting",
    weight: "20%",
    description:
      "Does the platform produce accurate, professional estimates that close deals? We evaluate local hourly and flat-rate estimating, long-distance weight-based and cube-sheet pricing, virtual surveys, inventory itemization, binding vs. non-binding estimates, and the customer-facing booking experience.",
  },
  {
    name: "Billing & Payments",
    weight: "15%",
    description:
      "How smoothly does the platform handle invoicing, payment collection, and financial reporting? We test payment processing integration, invoice generation, deposit handling, tip collection, and QuickBooks/accounting software sync. We also note payment processing fees and whether they are competitive.",
  },
  {
    name: "Support & Reliability",
    weight: "15%",
    description:
      "What happens when the system goes down during peak season? We submit real support tickets and measure response times, resolution quality, and availability. We assess uptime history, mobile app reliability, onboarding support, and the quality of training documentation. MoveitPro sets the bar here with 24/7 US-based support.",
  },
  {
    name: "Value for Money",
    weight: "10%",
    description:
      "Does the total cost — base fee, per-truck charges, onboarding fees, SMS costs, and payment processing — make sense for what you get? We compare feature-per-dollar across competing platforms at the same company size. A $500/month platform that replaces three separate tools and saves 10 hours per week can represent excellent value.",
  },
];

export default function AboutThisSitePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://movingsoftware.io" },
          { name: "About This Site", url: "https://movingsoftware.io/about-this-site" },
        ]}
      />
      <Navbar />
      <main className="pt-16">
        <div className="mx-auto max-w-4xl px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-700">Home</Link>
            {" > "}
            <span className="text-slate-900">About This Site</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            About This Site
          </h1>
          <p className="text-lg text-slate-600 mb-10">
            How MovingSoftware.io evaluates, scores, and ranks moving company software — and why you can trust our recommendations.
          </p>

          {/* Mission */}
          <div className="rounded-xl bg-brand-50 border border-brand-100 p-6 mb-10">
            <p className="text-brand-800 font-medium">
              MovingSoftware.io exists to give moving company owners honest, specific software recommendations — not a listicle that calls every platform &quot;great for all businesses.&quot; We test every platform we review and publish clear verdicts with real pricing.
            </p>
          </div>

          {/* What We Cover */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-10 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Cover</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We focus exclusively on software built for or commonly used by moving companies. This includes dedicated moving company platforms (Supermove, SmartMoving, Elromco, MoveitPro), field service platforms used by movers (Vonigo, Oncue), and specialized tools for estimating, dispatch, CRM, and compliance.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We do not cover general-purpose project management tools, generic CRMs, or accounting software unless they have specific relevance to moving operations. Our readers are moving company owners and operations managers — everything we write is for them.
            </p>
          </div>

          {/* Rating Methodology */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-10 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Rating Methodology</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Every platform is scored 1 to 5 across six weighted dimensions. The final score is a weighted average that reflects what matters most to moving companies. Here is how each dimension is weighted and what we evaluate.
            </p>
            <div className="space-y-5">
              {ratingDimensions.map((dim) => (
                <div key={dim.name} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-brand-50 text-brand-700 text-xs font-bold px-2.5 py-1 rounded-full">
                      {dim.weight}
                    </span>
                    <h3 className="font-semibold text-slate-900">{dim.name}</h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{dim.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Independence */}
          <div className="bg-brand-50 border border-brand-100 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Editorial Independence</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              MovingSoftware.io participates in affiliate and referral programs with some of the software providers we review. When you click a link and subscribe, we may earn a commission at no extra cost to you.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our review scores, rankings, and recommendations are determined entirely by our evaluation process. We do not accept payment to alter scores, suppress negative findings, or give preferential ranking to higher-commission partners. If a platform we earn from scores lower than one we do not, we publish that score.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Affiliate revenue funds our research, hosting, and content production. It does not influence our editorial conclusions.
            </p>
          </div>

          {/* Update Cadence */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-10 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Update Cadence</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Moving software changes frequently. We revisit every review on a quarterly basis and update scores, pricing, and feature descriptions when platforms release significant changes. Rankings are updated quarterly. Each review displays a &quot;last updated&quot; date so you know how current our information is.
            </p>
            <p className="text-slate-700 leading-relaxed">
              When a vendor launches a major new feature, changes pricing, or gets acquired, we aim to update the affected content within two weeks.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-10 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We welcome corrections, user experience reports, and vendor inquiries. If you have found an error in one of our reviews or want to share your experience with a platform, we want to hear from you.
            </p>
            <p className="text-slate-700">
              Reach us at:{" "}
              <a href="mailto:hello@movingsoftware.io" className="font-semibold text-brand-700 underline">
                hello@movingsoftware.io
              </a>
            </p>
          </div>

          {/* CTA */}
          <div className="bg-brand-50 border border-brand-100 rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              See Our Reviews in Action
            </h2>
            <p className="text-slate-700 mb-6">
              Now that you know how we evaluate software, explore our latest rankings and comparisons.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/guides/best-moving-company-software-2026"
                className="inline-block rounded-xl bg-brand-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-800 transition-all hover:-translate-y-0.5"
              >
                Top 5 Software Picks
              </Link>
              <Link
                href="/how-we-review"
                className="inline-block rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:border-brand-300 transition-colors"
              >
                Detailed Review Process
              </Link>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-700">Home</Link>
            <Link href="/guides" className="hover:text-brand-700">Guides</Link>
            <Link href="/how-we-review" className="hover:text-brand-700">How We Review</Link>
            <Link href="/faq" className="hover:text-brand-700">FAQ</Link>
            <Link href="/contact" className="hover:text-brand-700">Contact</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
