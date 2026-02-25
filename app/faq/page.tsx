import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "FAQ — Moving Company Software Questions Answered",
  description:
    "Frequently asked questions about moving company software. Covers pricing, dispatch, estimating, DOT compliance, CRM, route optimization, and choosing the right platform for your moving business.",
};

const faqCategories = [
  {
    id: "general",
    title: "General",
    questions: [
      {
        q: "What is moving company software?",
        a: "Moving company software is a platform built specifically for moving businesses to manage their day-to-day operations. It typically handles lead capture, estimating, dispatch and scheduling, crew management, invoicing, and customer communication — replacing the spreadsheets, whiteboards, and phone calls most movers rely on. Platforms like Supermove, SmartMoving, Elromco, and MoveitPro are purpose-built for the moving industry.",
      },
      {
        q: "How is moving company software different from general field service software?",
        a: "General field service tools (like Jobber or Housecall Pro) handle scheduling and invoicing for service businesses, but they lack moving-specific features: weight-based and cube-sheet estimating, DOT compliance tracking, binding and non-binding estimate management, long-distance tariff calculations, and inventory itemization. Moving software is built around how movers actually price and execute jobs.",
      },
      {
        q: "Who needs moving company software?",
        a: "Any moving company doing more than a handful of jobs per week benefits. If you are still managing leads in a notebook, dispatching via group text, or writing estimates on paper, dedicated software will reduce errors and speed up your sales cycle. Companies with 2+ trucks see the most immediate ROI, but even single-truck operations benefit from professional estimating and online booking.",
      },
      {
        q: "What are the most popular moving company software platforms?",
        a: "The most widely used platforms are Supermove (enterprise-grade with AI features, best for 10+ truck operations), SmartMoving (top-rated all-in-one for growing companies), Elromco (best value with a built-in website builder), MoveitPro (most affordable with 24/7 US support), Oncue (best visual dispatch board), and Vonigo (multi-service field platform). Each targets a different company size and operational complexity.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Costs",
    questions: [
      {
        q: "How much does moving company software cost?",
        a: "Pricing ranges from about $150/month for entry-level platforms like MoveitPro to $500+/month for enterprise tools like Supermove. SmartMoving runs around $399/month, and Elromco starts at $289/month. Most platforms use flat monthly pricing rather than per-user fees, though some charge extra for additional dispatch seats or truck slots. Enterprise platforms like Supermove use custom pricing based on fleet size.",
      },
      {
        q: "Are there free moving company software options?",
        a: "There are no fully free platforms we would recommend for commercial use. Some offer limited free trials (typically 14 days), and a few have stripped-down starter tiers. However, the dispatch, estimating, and compliance features that actually save you time are always behind a paid plan. For a single-truck operation on a tight budget, MoveitPro at $150/month is the most affordable serious option.",
      },
      {
        q: "What hidden costs should I watch for?",
        a: "Watch for setup and onboarding fees (some vendors charge $500–$2,000 for implementation), per-truck or per-user surcharges beyond the base plan, payment processing fees on collected payments, and charges for SMS/text messaging to customers. Also factor in the cost of your time during the 2–4 week onboarding period when your team is learning the new system.",
      },
      {
        q: "Do most platforms require long-term contracts?",
        a: "It varies. SmartMoving and Elromco offer month-to-month billing. Supermove typically requires annual commitments for enterprise clients. MoveitPro offers flexible terms. We recommend negotiating month-to-month for the first 3 months if possible, then switching to annual billing (which often comes with a discount) once you have confirmed the platform works for your operation.",
      },
    ],
  },
  {
    id: "features",
    title: "Features & Capabilities",
    questions: [
      {
        q: "Does it handle dispatch and route optimization?",
        a: "Yes — dispatch and scheduling is a core feature of all moving software platforms. Most include a visual dispatch board where you can assign crews to jobs, see daily/weekly schedules, and manage truck availability. Oncue has the strongest visual dispatch interface. Supermove includes AI-powered route optimization for multi-stop days. SmartMoving offers solid dispatch with integrated crew communication.",
      },
      {
        q: "Can it generate binding and non-binding estimates?",
        a: "All major platforms support both binding and non-binding estimates, which is essential for interstate movers. They typically include item-by-item inventory lists, cube sheet calculations, weight-based pricing, and the ability to convert estimates to bills of lading. SmartMoving and Supermove have the most sophisticated estimating engines, including virtual survey capabilities.",
      },
      {
        q: "Does it manage DOT compliance documentation?",
        a: "Compliance support varies by platform. Supermove and SmartMoving include features for generating bills of lading, order-for-service documents, and valuation forms that meet FMCSA requirements. Some platforms auto-populate DOT numbers and MC numbers on customer-facing documents. If you do interstate moves, verify that the platform supports all required federal documentation before committing.",
      },
      {
        q: "Can customers track their shipment in real-time?",
        a: "Some platforms offer customer-facing tracking. Supermove provides a customer portal with real-time status updates. SmartMoving sends automated status notifications via email and SMS. Elromco offers basic customer communication features. Full GPS-based shipment tracking (like package tracking) is still uncommon in moving software, but status-based tracking is becoming standard.",
      },
      {
        q: "Is there a built-in CRM for managing leads?",
        a: "Most moving software includes CRM functionality — lead capture from your website, automated follow-up sequences, pipeline tracking, and conversion reporting. SmartMoving is particularly strong here with its built-in lead management and automated email/SMS follow-up. Supermove includes AI-powered lead scoring. If you rely heavily on lead follow-up, the CRM quality should be a primary evaluation factor.",
      },
      {
        q: "Can it handle both local and long-distance moves?",
        a: "Most platforms support both, but the depth varies. Local move features (hourly rate calculations, same-day dispatch) are standard. Long-distance features (tariff-based pricing, multi-day scheduling, storage-in-transit, interstate compliance documents) are more specialized. Supermove and SmartMoving handle long-distance operations most comprehensively. If long-distance is a significant part of your business, test this functionality specifically.",
      },
    ],
  },
  {
    id: "switching",
    title: "Switching & Migration",
    questions: [
      {
        q: "How long does it take to switch moving company software?",
        a: "Plan for 2–6 weeks depending on the complexity of your operation. A small local mover with basic needs can be up and running in under two weeks. A larger operation with long-distance services, multiple branches, and complex pricing structures may need a month or more. Most vendors provide onboarding support, and some offer dedicated implementation specialists.",
      },
      {
        q: "Can I migrate my customer data from my current system?",
        a: "Customer contact information and job history can typically be imported via CSV. However, active estimates, in-progress jobs, and custom pricing tables usually need to be recreated manually. Ask your new vendor specifically about migration support from your current platform — some offer free data migration as part of onboarding, while others charge for it.",
      },
      {
        q: "When is the best time to switch software?",
        a: "Most moving companies switch during their slower months — typically November through February in most markets. Avoid switching during peak moving season (May through September) when your team is at full capacity and any disruption costs you revenue. Start evaluating software in the fall and target a January or February go-live date.",
      },
    ],
  },
  {
    id: "choosing",
    title: "Choosing the Right Software",
    questions: [
      {
        q: "What should I look for when evaluating moving company software?",
        a: "Focus on five areas: (1) estimating quality — can it produce accurate, professional estimates for your move types? (2) dispatch and scheduling — does the interface match how your operation actually runs? (3) customer communication — does it automate the touchpoints your customers expect? (4) reporting — can you track revenue, conversion rates, and crew productivity? (5) pricing transparency — do you fully understand the total monthly cost?",
      },
      {
        q: "Should I choose an all-in-one platform or use multiple specialized tools?",
        a: "For most moving companies, an all-in-one platform is the better choice. Moving operations are tightly integrated — a lead becomes an estimate becomes a dispatch becomes an invoice — and having that flow in one system reduces errors and manual entry. Multi-tool setups (separate CRM, separate dispatch, separate billing) create data silos and sync headaches. All-in-one platforms like SmartMoving and Supermove are designed around this end-to-end workflow.",
      },
      {
        q: "How do I get my crew and office staff to adopt new software?",
        a: "Start with office staff — dispatchers and sales reps — since they use the software most. Get them trained and comfortable before rolling out crew-facing features like mobile job sheets. Pick a cutoff date for the old system so nobody can fall back to the whiteboard. Choose software with a clean mobile interface since your crews will use it on their phones, not desktop computers.",
      },
    ],
  },
  {
    id: "support",
    title: "Support & Updates",
    questions: [
      {
        q: "What kind of support do moving company software platforms offer?",
        a: "Support models vary. MoveitPro offers 24/7 US-based phone and chat support — the strongest support offering in the space. SmartMoving provides responsive email and chat support with a solid knowledge base. Supermove offers dedicated account managers for enterprise clients. Elromco includes phone and email support during business hours. During peak season, responsive support is critical — a dispatch system going down on a Saturday morning cannot wait until Monday.",
      },
      {
        q: "How often do these platforms release updates?",
        a: "Cloud-based platforms release updates continuously — typically every 1–2 weeks for bug fixes and monthly for feature updates. Supermove has the most aggressive release cadence with frequent AI and automation improvements. SmartMoving releases steady feature updates. One thing to watch: frequent UI changes can confuse crews in the field, so look for platforms that communicate changes clearly and do not break existing workflows.",
      },
    ],
  },
];

const allQAs = faqCategories.flatMap((cat) => cat.questions);

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://movingsoftware.io" },
          { name: "FAQ", url: "https://movingsoftware.io/faq" },
        ]}
      />
      <FAQSchema
        faqs={allQAs.map((item) => ({
          question: item.q,
          answer: item.a,
        }))}
      />
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">

        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-700">
            Home
          </Link>{" "}
          / <span className="text-slate-900">FAQ</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 mb-10 text-lg">
          Everything you need to know about moving company software — from
          pricing and dispatch to estimating, compliance, and choosing the right
          platform for your business.
        </p>

        {/* Jump-to-section nav */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-10 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
            Jump to Section
          </h2>
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-block bg-brand-50 text-brand-700 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-brand-100 transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>

        {/* FAQ sections */}
        <div className="space-y-12">
          {faqCategories.map((cat) => (
            <section key={cat.id} id={cat.id}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {cat.title}
              </h2>
              <div className="space-y-4">
                {cat.questions.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      {item.q}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-brand-50 border border-brand-100 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Ready to Find the Right Platform?
          </h2>
          <p className="text-slate-700 mb-6">
            Explore our in-depth reviews or learn more about our evaluation
            process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/software/supermove"
              className="inline-block rounded-xl bg-brand-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-800 transition-all hover:-translate-y-0.5"
            >
              Browse Software Reviews
            </Link>
            <Link
              href="/how-we-review"
              className="inline-block rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:border-brand-300 transition-colors"
            >
              How We Review Software
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
          <Link href="/how-we-review" className="hover:text-brand-700">
            How We Review
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
