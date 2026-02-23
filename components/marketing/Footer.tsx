import Link from "next/link";
import { Truck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-700">
                <Truck className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-900">MovingSoftware.io</span>
            </Link>
            <p className="text-sm text-slate-600 max-w-xs">
              Independent, unbiased comparisons of moving company software. Find the right platform to grow your moving business.
            </p>
          </div>

          {/* Comparisons */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Top Comparisons</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vs/supermove-vs-smartmoving" className="text-slate-600 hover:text-brand-700">Supermove vs SmartMoving</Link></li>
              <li><Link href="/vs/supermove-vs-elromco" className="text-slate-600 hover:text-brand-700">Supermove vs Elromco</Link></li>
              <li><Link href="/vs/smartmoving-vs-moveitpro" className="text-slate-600 hover:text-brand-700">SmartMoving vs MoveitPro</Link></li>
              <li><Link href="/vs/supermove-vs-vonigo" className="text-slate-600 hover:text-brand-700">Supermove vs Vonigo</Link></li>
            </ul>
          </div>

          {/* By Type */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">By Mover Type</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/for/local-movers" className="text-slate-600 hover:text-brand-700">Local Movers</Link></li>
              <li><Link href="/for/long-distance-movers" className="text-slate-600 hover:text-brand-700">Long-Distance Movers</Link></li>
              <li><Link href="/for/small-moving-companies" className="text-slate-600 hover:text-brand-700">Small Moving Companies</Link></li>
              <li><Link href="/for/commercial-movers" className="text-slate-600 hover:text-brand-700">Commercial Movers</Link></li>
            </ul>
          </div>

          {/* Software */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Software Reviews</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/software/supermove" className="text-slate-600 hover:text-brand-700">Supermove Review</Link></li>
              <li><Link href="/software/smartmoving" className="text-slate-600 hover:text-brand-700">SmartMoving Review</Link></li>
              <li><Link href="/software/elromco" className="text-slate-600 hover:text-brand-700">Elromco Review</Link></li>
              <li><Link href="/software/moveitpro" className="text-slate-600 hover:text-brand-700">MoveitPro Review</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MovingSoftware.io. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/about" className="hover:text-slate-700 underline">About</Link>
            {" · "}
            <Link href="/contact" className="hover:text-slate-700 underline">Contact</Link>
            {" · "}
            <Link href="/how-we-review" className="hover:text-slate-700 underline">How We Review</Link>
            {" · "}
            <Link href="/faq" className="hover:text-slate-700 underline">FAQ</Link>
          </p>
          <p className="mt-2">
            Affiliate Disclosure: Some links on this site may earn us a commission at no extra cost to you. Our reviews are independent and unbiased.
          </p>
        </div>
      </div>
    </footer>
  );
}
