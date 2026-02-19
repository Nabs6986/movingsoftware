import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-brand-700 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Page Not Found</h2>
          <p className="text-slate-600 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-6 py-3 font-medium text-white hover:bg-brand-800 transition-colors">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
