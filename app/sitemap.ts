import { MetadataRoute } from "next";
import { getAllComparisonSlugs } from "./vs/_data/comparisons";
import { getAllAudienceSlugs } from "./for/_data/audiences";
import { getAllUseCaseSlugs } from "./use-case/_data/usecases";
import { getAllSoftwareSlugs } from "./software/_data/software";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://movingsoftware.io";
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/how-we-review`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    ...getAllComparisonSlugs().map((slug) => ({
      url: `${baseUrl}/vs/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...getAllAudienceSlugs().map((slug) => ({
      url: `${baseUrl}/for/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...getAllUseCaseSlugs().map((slug) => ({
      url: `${baseUrl}/use-case/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getAllSoftwareSlugs().map((slug) => ({
      url: `${baseUrl}/software/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
