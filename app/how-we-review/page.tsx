import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "How We Review Moving Company Software",
  description:
    "Our 5-step review process for moving company software. Learn how we evaluate dispatch, estimating, CRM, compliance, crew management, and support for moving businesses of all sizes.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "How We Review Moving Company Software",
  description:
    "Our 5-step review process for evaluating moving company software for local, long-distance, and commercial moving businesses.",
  url: "https://movingsoftware.io/how-we-review",
  publisher: {
    "@type": "Organization",
    name: "MovingSoftware.io",
    url: "https://movingsoftware.io",
  },
};

const steps = [
  {
    number: "01",
    title: "Vendor Demo & Research",
    desc: "We request a full demo from each vendor, review their marketing materials and public pricing, and speak with their sales team. We note which features are highlighted in the pitch versus what is available in the actual product, and identify any gaps between claims and capabilities.",
  },
  {
    number: "02",
    title: "Hands-On Testing",
    desc: "We sign up for a trial or paid account and test the platform with realistic moving scenarios. This includes creating estimates for local and long-distance moves, dispatching crews, generating bills of lading, processing payments, and testing the customer-facing booking experience on both desktop and mobile.",
  },
  {
    number: "03",
    title: "User Interviews & Community Research",
    desc: "We interview moving company owners and dispatchers who use each platform daily. We also review feedback across Reddit, industry forums, G2, Capterra, and moving-industry Facebook groups to identify recurring themes — both positive complaints and praise — that go beyond any single reviewer's perspective.",
  },
  {
    number: "04",
    title: "Pricing Verification",
    desc: "We verify all pricing directly with vendors and document the full cost: base monthly fees, per-truck or per-user charges, setup and onboarding fees, payment processing rates, and SMS/communication fees. If pricing is not publicly available or requires a sales call to learn, we note that as a transparency concern.",
  },
  {
    number: "05",
    title: "Scoring & Publication",
    desc: "We score each platform across six weighted criteria (detailed below), calculate a final weighted score, and write up our findings with specific strengths and weaknesses. Every review includes a clear recommendation — which type of moving company the software is best for and who should look elsewhere.",
  },
];

const criteria = [
  {
    name: "Ease of Use",
    weight: "20%",
    desc: "How quickly can a dispatcher or office manager get productive? We evaluate the onboarding experience, interface design, navigation flow, and how many steps common tasks require. Moving companies do not have IT departments — the software needs to be learnable in days, not weeks.",
  },
  {
    name: "Dispatch & Scheduling",
    weight: "20%",
    desc: "Can it handle the reality of a moving company's daily operations? We test the dispatch board, crew assignment, truck availability tracking, schedule conflict detection, and multi-day job management. This is the operational heart of moving software and we evaluate it thoroughly with realistic multi-crew scenarios.",
  },
  {
    name: "Estimating & Sales",
    weight: "20%",
    desc: "Does it produce accurate, professional estimates that close deals? We evaluate the estimating engine for local moves (hourly and flat-rate), long-distance moves (weight-based and cube-sheet), virtual surveys, inventory itemization, binding vs. non-binding estimates, and the customer-facing booking experience.",
  },
  {
    name: "Operations & Compliance",
    weight: "15%",
    desc: "Does it support the regulatory and operational requirements of running a moving company? We test bill of lading generation, valuation forms, DOT/FMCSA compliance documents, inventory tracking, storage management, and claims processing. Interstate movers have strict documentation requirements — the software must handle them correctly.",
  },
  {
    name: "Support & Reliability",
    weight: "15%",
    desc: "What happens when the system goes down on a Saturday morning during peak season? We submit real support tickets and evaluate response time, resolution quality, and availability. We also assess uptime history, mobile app reliability, and the quality of training materials and documentation.",
  },
  {
    name: "Value for Money",
    weight: "10%",
    desc: "Does the total cost — including all trucks, users, add-ons, and potential price increases — make sense for what you get? We compare feature-per-dollar across competing platforms at the same company size. A $500/month platform that replaces three separate tools and saves 10 hours per week can still represent excellent value.",
  },
];

export default function HowWeReviewPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-700">
            Home
          </Link>{" "}
          / <span className="text-slate-900">How We Review</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          How We Review Moving Company Software
        </h1>
        <p className="text-slate-600 mb-10 text-lg">
          Every platform we evaluate goes through the same rigorous process.
          Here is exactly how we test, score, and publish our reviews — so you
          know what our ratings actually mean.
        </p>

        {/* Testing Process */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 mb-10 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Our 5-Step Evaluation Process
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-brand-50 text-brand-700 text-sm font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scoring Criteria */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 mb-10 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Scoring Criteria
          </h2>
          <p className="text-slate-700 mb-6">
            Each platform is scored 1 to 5 across six dimensions, weighted to
            reflect what matters most to moving companies. The final score is a
            weighted average, not a simple mean.
          </p>
          <div className="space-y-5">
            {criteria.map((item) => (
              <div
                key={item.name}
                className="bg-slate-50 border border-slate-100 rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-brand-50 text-brand-700 text-xs font-bold px-2.5 py-1 rounded-full">
                    {item.weight}
                  </span>
                  <h3 className="font-semibold text-slate-900">{item.name}</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Update Cadence */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 mb-10 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Update Cadence
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Moving software changes frequently — new features ship, pricing
            changes, and companies get acquired. We revisit every review on a
            quarterly basis and update scores, pricing, and feature descriptions
            when platforms release significant changes. Each review displays a
            &quot;last updated&quot; date so you know how current our information
            is.
          </p>
          <p className="text-slate-700 leading-relaxed">
            When a vendor launches a major new feature, changes pricing, or gets
            acquired, we aim to update the affected review within two weeks. If
            you notice something that has changed before we do, let us know.
          </p>
        </div>

        {/* Editorial Independence */}
        <div className="bg-brand-50 border border-brand-100 rounded-xl p-8 mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Editorial Independence
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            MovingSoftware.io participates in affiliate and referral programs
            with some of the software providers we review. When you click a link
            and subscribe, we may earn a commission at no extra cost to you.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Our review scores, rankings, and recommendations are determined
            entirely by our evaluation process. We do not accept payment to
            alter scores, suppress negative findings, or give preferential
            ranking to higher-commission partners. Affiliate relationships never
            influence our editorial conclusions.
          </p>
        </div>

        {/* Corrections */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 mb-10 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Corrections & Feedback
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you have found an error in one of our reviews — an incorrect
            price, a feature we missed, or a capability we described
            inaccurately — we want to hear from you. Accuracy matters more to us
            than being right the first time.
          </p>
          <p className="text-slate-700">
            Reach us at:{" "}
            <span className="font-semibold text-slate-900">
              editorial@movingsoftware.io
            </span>
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="bg-brand-50 border border-brand-100 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            See Our Reviews in Action
          </h2>
          <p className="text-slate-700 mb-6">
            Now that you know how we evaluate software, explore our latest
            reviews and comparisons.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/software/supermove"
              className="inline-block rounded-xl bg-brand-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-800 transition-all hover:-translate-y-0.5"
            >
              Browse Software Reviews
            </Link>
            <Link
              href="/vs/supermove-vs-smartmoving"
              className="inline-block rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:border-brand-300 transition-colors"
            >
              Compare Platforms
            </Link>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand-700">
            Home
          </Link>
          <Link href="/software/supermove" className="hover:text-brand-700">
            Reviews
          </Link>
          <Link href="/vs/supermove-vs-smartmoving" className="hover:text-brand-700">
            Comparisons
          </Link>
          <Link href="/faq" className="hover:text-brand-700">
            FAQ
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
