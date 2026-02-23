import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "About MovingSoftware.io — Who We Are",
  description:
    "MovingSoftware.io is an independent review site for moving company software. We help movers of all sizes find the right platform without the sales pitch.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-700">Home</Link>
            {" > "}
            <span>About</span>
          </nav>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            About MovingSoftware.io
          </h1>

          <div className="space-y-6">
            <div className="rounded-xl bg-brand-50 border border-brand-100 p-6">
              <p className="text-brand-800 font-medium">
                We&apos;re a small team of operations researchers and former
                moving industry professionals who got tired of reading
                vendor-sponsored reviews that tell you every platform is
                &quot;the best.&quot;
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900">Why We Built This</h2>
            <p className="text-slate-600">
              The moving company software market is confusing. Pricing is opaque,
              feature lists are inflated, and most &quot;review&quot; sites are
              thinly disguised affiliate pages that recommend whatever pays the
              highest commission. When a moving company owner searches for
              software, they deserve honest, specific answers — not a listicle
              that recommends six platforms with equal enthusiasm.
            </p>
            <p className="text-slate-600">
              Our team includes former dispatch managers, moving company owners,
              and operations consultants who&apos;ve seen what happens when a
              growing mover picks the wrong software. We write from that
              experience — the missed dispatches, the billing nightmares, the
              &quot;enterprise&quot; platforms that can&apos;t handle a simple
              local move.
            </p>

            <h2 className="text-2xl font-bold text-slate-900">How We Review</h2>
            <p className="text-slate-600">
              Every platform we cover, we demo. We ask the same standardized
              questions to every vendor. We talk to real movers — not the
              references the vendor provides, but companies we find through our
              network and reader submissions. We update our reviews regularly to
              reflect pricing changes, new features, and shifts in user
              sentiment.
            </p>
            <p className="text-slate-600">
              For a deeper look at our evaluation process, read our{" "}
              <Link href="/how-we-review" className="text-brand-700 underline">
                review methodology
              </Link>
              .
            </p>

            <h2 className="text-2xl font-bold text-slate-900">
              Our Editorial Independence
            </h2>
            <p className="text-slate-600">
              MovingSoftware.io participates in affiliate programs with select
              moving software vendors. This means we may earn a referral
              commission when movers click our links and sign up. Our affiliate
              relationships do not influence our review scores, rankings, or
              editorial conclusions. We recommend software based on merit.
            </p>
            <p className="text-slate-600">
              If a platform we have an affiliate relationship with scores lower
              than a platform we don&apos;t, we publish that score. Our
              reputation with our readers is worth more than an affiliate
              commission.
            </p>

            <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
            <p className="text-slate-600">
              Corrections, user experiences to share, or vendors who want to be
              reviewed:{" "}
              <a
                href="mailto:hello@movingsoftware.io"
                className="text-brand-700 underline"
              >
                hello@movingsoftware.io
              </a>
            </p>
          </div>

          <div className="text-sm text-slate-500 border-t border-slate-200 pt-4 mt-8">
            <p>
              <Link href="/how-we-review" className="underline hover:text-slate-700">How We Review</Link>
              {" · "}
              <Link href="/contact" className="underline hover:text-slate-700">Contact</Link>
              {" · "}
              <Link href="/" className="underline hover:text-slate-700">Home</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
