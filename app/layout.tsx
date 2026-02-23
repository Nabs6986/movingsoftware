import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://movingsoftware.io"),
  title: "MovingSoftware.io - Compare Moving Company Software",
  description: "Independent, unbiased comparisons of moving company software. Find the best solution for your moving business: Supermove, SmartMoving, Elromco, MoveitPro, and more.",
  keywords: ["moving company software", "best moving software", "Supermove", "SmartMoving", "Elromco", "MoveitPro", "moving CRM", "dispatch software for movers"],
  authors: [{ name: "MovingSoftware.io" }],
  creator: "MovingSoftware.io",
  publisher: "MovingSoftware.io",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://movingsoftware.io",
    siteName: "MovingSoftware.io",
    title: "MovingSoftware.io - Compare Moving Company Software",
    description: "Independent, unbiased comparisons of moving company software for movers of all sizes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MovingSoftware.io - Compare Moving Company Software",
    description: "Independent comparisons of moving company software.",
  },
  alternates: { canonical: "https://movingsoftware.io" },
  category: "Software"
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://movingsoftware.io/#organization",
      "name": "MovingSoftware.io",
      "url": "https://movingsoftware.io",
      "description": "MovingSoftware.io provides independent, unbiased reviews and comparisons of moving company software to help moving businesses make informed decisions.",
    },
    {
      "@type": "WebSite",
      "@id": "https://movingsoftware.io/#website",
      "url": "https://movingsoftware.io",
      "name": "MovingSoftware.io",
      "publisher": { "@id": "https://movingsoftware.io/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://movingsoftware.io/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best moving company software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Supermove is the best moving company software for mid-to-large operations needing enterprise-grade automation and AI features. SmartMoving is top-rated for growing companies wanting CRM + dispatch in one platform. For small movers on a budget, Elromco at $289/month or MoveitPro at $150+/month are strong options."
          }
        },
        {
          "@type": "Question",
          "name": "How much does moving company software cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Moving company software ranges from $150 to $800+ per month. Elromco starts at $289/month, SmartMoving around $399/month, MoveitPro from $150/month, and Supermove uses custom enterprise pricing starting around $500/month for larger operations."
          }
        },
        {
          "@type": "Question",
          "name": "Is Supermove better than SmartMoving?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Supermove is better for larger operations needing AI-driven automation, advanced dispatch, and enterprise reporting. SmartMoving is better for growing mid-size movers who want a more affordable all-in-one platform with strong CRM and excellent customer support."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
