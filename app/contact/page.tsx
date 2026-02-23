import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Contact MovingSoftware.io",
  description:
    "Get in touch with the MovingSoftware.io team — corrections, user experiences, vendor inquiries, and partnership requests.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-700">Home</Link>
            {" > "}
            <span>Contact</span>
          </nav>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Contact Us
          </h1>
          <p className="text-slate-600 mb-8">
            We read and respond to every email. Here&apos;s the best way to
            reach us depending on what you need.
          </p>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="font-semibold text-slate-900 mb-2">
                General Inquiries & Corrections
              </h2>
              <p className="text-sm text-slate-600 mb-3">
                Found an error in a review? Have a question about our
                methodology? Want to share your experience with a platform?
              </p>
              <a
                href="mailto:hello@movingsoftware.io"
                className="text-brand-700 font-medium underline"
              >
                hello@movingsoftware.io
              </a>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="font-semibold text-slate-900 mb-2">
                Vendor & Partnership Inquiries
              </h2>
              <p className="text-sm text-slate-600 mb-3">
                Software vendors interested in being reviewed or exploring
                partnership opportunities.
              </p>
              <a
                href="mailto:partnerships@movingsoftware.io"
                className="text-brand-700 font-medium underline"
              >
                partnerships@movingsoftware.io
              </a>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="font-semibold text-slate-900 mb-2">
                Share Your Experience
              </h2>
              <p className="text-sm text-slate-600 mb-3">
                Currently use moving company software? Your honest experience
                (good or bad) directly informs our reviews and helps other
                movers make better decisions.
              </p>
              <a
                href="mailto:reviews@movingsoftware.io"
                className="text-brand-700 font-medium underline"
              >
                reviews@movingsoftware.io
              </a>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <p className="text-sm text-slate-600">
                <strong>Response time:</strong> We aim to respond within 24–48
                hours on business days. Corrections and factual errors are
                prioritized and addressed within 24 hours.
              </p>
            </div>
          </div>

          <div className="text-sm text-slate-500 border-t border-slate-200 pt-4 mt-8">
            <p>
              <Link href="/about" className="underline hover:text-slate-700">About</Link>
              {" · "}
              <Link href="/how-we-review" className="underline hover:text-slate-700">How We Review</Link>
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
