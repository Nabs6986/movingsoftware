export interface Alternative {
  name: string;
  slug: string;
  tagline: string;
  rating: number;
  priceRange: string;
  keyDifferentiator: string;
  pros: string[];
  cons: string[];
  website: string;
}

export interface AlternativesPage {
  slug: string;
  productName: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  whySwitch: string[];
  alternatives: Alternative[];
  comparisonHeaders: string[];
  comparisonRows: { feature: string; values: (string | boolean)[] }[];
  faqs: { question: string; answer: string }[];
}

const alternativesPages: Record<string, AlternativesPage> = {
  "supermove-alternatives": {
    slug: "supermove-alternatives",
    productName: "Supermove",
    metaTitle: "5 Best Supermove Alternatives in 2026 | Moving Software Compared",
    metaDescription:
      "Looking for a Supermove alternative? We compare SmartMoving, Elromco, MoveItPro, Vonigo, and MoveitPro on pricing, dispatching, CRM, and automation for movers.",
    heroTitle: "Best Supermove Alternatives for Moving Companies in 2026",
    heroDescription:
      "Supermove has become a popular choice for modern moving companies, but it is not the only game in town. Whether you need better dispatching, lower pricing, or more established industry support, these alternatives are strong contenders.",
    whySwitch: [
      "Supermove is a newer entrant and still building out features that legacy platforms have had for years, like deep fleet management and warehouse storage tracking.",
      "Pricing scales quickly with crew size and move volume, which can make Supermove expensive for mid-size companies processing 200+ moves per month.",
      "The platform focuses heavily on residential moves and may lack depth for commercial or long-distance specialty operations.",
      "Some moving companies report that the CRM and follow-up automation tools are less configurable than older platforms like SmartMoving.",
      "Integration options with third-party accounting software and lead aggregators are more limited compared to established competitors.",
    ],
    alternatives: [
      {
        name: "SmartMoving",
        slug: "smartmoving",
        tagline: "All-in-one moving company software with deep automation",
        rating: 4.6,
        priceRange: "$399 - $799/month",
        keyDifferentiator:
          "The most complete automation suite in the moving industry, covering lead capture, automated follow-ups, booking, dispatching, and customer reviews in one platform.",
        pros: [
          "Best-in-class automated lead follow-up and nurturing",
          "Complete CRM with pipeline management built for movers",
          "Integrated review collection and reputation management",
          "Detailed crew performance and profitability tracking",
          "Strong integration with move lead providers like Angi and Yelp",
        ],
        cons: [
          "Higher starting price than most competitors",
          "Can feel complex during initial setup and training",
          "Mobile app for crews has occasional reliability issues",
        ],
        website: "https://www.smartmoving.com",
      },
      {
        name: "Elromco",
        slug: "elromco",
        tagline: "Enterprise-grade moving and storage management platform",
        rating: 4.3,
        priceRange: "Custom pricing",
        keyDifferentiator:
          "Purpose-built for large moving companies with warehouse storage operations, offering deep inventory tracking and inter-branch transfer management.",
        pros: [
          "Excellent warehouse and storage inventory management",
          "Supports both local and long-distance move operations",
          "Multi-branch and franchise management capabilities",
          "Strong dispatching with real-time crew tracking",
          "Comprehensive financial reporting and job costing",
        ],
        cons: [
          "Dated interface compared to newer cloud-native platforms",
          "Requires dedicated onboarding and training investment",
          "Custom pricing means no transparent self-serve plans",
        ],
        website: "https://www.elromco.com",
      },
      {
        name: "MoveItPro",
        slug: "moveitpro",
        tagline: "Cloud-based CRM and operations platform for movers",
        rating: 4.2,
        priceRange: "$149 - $499/month",
        keyDifferentiator:
          "A mid-market platform that balances CRM depth with operational tools, offering strong visual dispatch boards and customer communication tracking.",
        pros: [
          "Visual drag-and-drop dispatch board for scheduling",
          "Integrated VoIP calling and call tracking",
          "Customizable estimate templates with e-signatures",
          "Good lead source tracking and ROI reporting",
          "Affordable starting price for small to mid-size movers",
        ],
        cons: [
          "Fewer automation features than SmartMoving",
          "Storage management capabilities are limited",
          "Reporting can be slow with large datasets",
        ],
        website: "https://www.moveitpro.com",
      },
      {
        name: "Vonigo",
        slug: "vonigo",
        tagline: "Field service management platform adaptable for movers",
        rating: 4.1,
        priceRange: "$98 - $196/month per user",
        keyDifferentiator:
          "A flexible field service platform with strong online booking, franchise management, and white-label customer portals that work well for moving companies.",
        pros: [
          "Excellent online booking and quote request forms",
          "White-label customer portal for branded experience",
          "Built-in franchise and multi-location management",
          "Flexible workflow engine adaptable to moving operations",
          "Good QuickBooks and Xero accounting integrations",
        ],
        cons: [
          "Not moving-industry-specific, requiring customization",
          "Per-user pricing gets expensive with larger teams",
          "Moving-specific features like tariff management are missing",
        ],
        website: "https://www.vonigo.com",
      },
      {
        name: "Movegistics",
        slug: "movegistics",
        tagline: "Affordable moving software focused on small operators",
        rating: 4.0,
        priceRange: "$99 - $299/month",
        keyDifferentiator:
          "Budget-friendly moving software built specifically for small to mid-size moving companies that need core CRM and dispatch without enterprise complexity.",
        pros: [
          "Very affordable entry price for small movers",
          "Simple, focused interface with low learning curve",
          "Built-in estimate calculator with customizable rates",
          "GPS crew tracking included in all plans",
          "Good customer communication tools with SMS and email",
        ],
        cons: [
          "Limited scalability for companies over 20 crews",
          "Reporting and analytics are basic compared to SmartMoving",
          "Fewer third-party integrations available",
        ],
        website: "https://www.movegistics.com",
      },
    ],
    comparisonHeaders: ["Feature", "SmartMoving", "Elromco", "MoveItPro", "Vonigo", "Movegistics"],
    comparisonRows: [
      { feature: "Starting Price", values: ["$399/mo", "Custom", "$149/mo", "$98/user/mo", "$99/mo"] },
      { feature: "Lead Automation", values: [true, false, true, false, false] },
      { feature: "Visual Dispatch Board", values: [true, true, true, true, true] },
      { feature: "Storage Management", values: [false, true, false, false, false] },
      { feature: "Online Booking Portal", values: [true, false, true, true, false] },
      { feature: "Multi-Location Support", values: [true, true, false, true, false] },
      { feature: "Crew GPS Tracking", values: [true, true, true, true, true] },
      { feature: "Accounting Integration", values: [true, true, true, true, false] },
    ],
    faqs: [
      {
        question: "What is the best Supermove alternative for lead automation?",
        answer:
          "SmartMoving is the clear leader in lead automation for moving companies. It offers automated follow-up sequences, lead scoring, and integrations with major lead providers like Angi, Thumbtack, and Yelp out of the box.",
      },
      {
        question: "Which Supermove alternative is best for large moving companies?",
        answer:
          "Elromco is the strongest choice for large operations, particularly those with warehouse storage, multiple branches, and long-distance operations. Its enterprise features handle the complexity that smaller platforms cannot.",
      },
      {
        question: "Can I switch from Supermove without losing my data?",
        answer:
          "Yes, most alternatives offer data migration support. SmartMoving and Elromco both have dedicated onboarding teams that assist with importing customer records, job history, and financial data from your existing platform.",
      },
      {
        question: "Which is the most affordable Supermove alternative?",
        answer:
          "Movegistics starts at $99 per month and Vonigo at $98 per user per month, making them the most budget-friendly options. However, Movegistics offers flat pricing rather than per-user, which is better for companies with multiple dispatchers.",
      },
      {
        question: "Is SmartMoving worth the higher price over Supermove?",
        answer:
          "SmartMoving justifies its premium pricing through deeper automation, stronger lead management, and more mature reporting tools. Companies processing over 100 moves per month often see ROI within the first quarter through improved conversion rates and reduced follow-up labor.",
      },
    ],
  },
  "smartmoving-alternatives": {
    slug: "smartmoving-alternatives",
    productName: "SmartMoving",
    metaTitle: "5 Best SmartMoving Alternatives in 2026 | Moving Software Compared",
    metaDescription:
      "Exploring SmartMoving alternatives? We compare Supermove, Elromco, MoveItPro, Vonigo, and Movegistics on pricing, features, and ease of use for moving companies.",
    heroTitle: "Best SmartMoving Alternatives for Moving Companies in 2026",
    heroDescription:
      "SmartMoving is a powerhouse for moving company automation, but its pricing and complexity are not right for everyone. If you want a simpler setup, lower costs, or a more modern interface, these five alternatives deserve your attention.",
    whySwitch: [
      "SmartMoving starts at $399 per month, which is a significant investment for small moving companies running fewer than 50 moves per month.",
      "The platform has a steep learning curve with many features that smaller operators may never use, leading to wasted spend on unnecessary capabilities.",
      "The mobile crew app has been reported as inconsistent in areas with poor connectivity, which is problematic for on-site move operations.",
      "Some companies prefer a more modern, cloud-native interface, and SmartMoving's UI can feel dated compared to newer platforms like Supermove.",
      "Companies primarily running commercial or specialty moves may find SmartMoving's residential focus limiting for their specific workflow needs.",
    ],
    alternatives: [
      {
        name: "Supermove",
        slug: "supermove",
        tagline: "Modern, cloud-native moving software with a clean interface",
        rating: 4.5,
        priceRange: "$199 - $599/month",
        keyDifferentiator:
          "A modern, intuitive interface with real-time crew tracking and streamlined estimation tools built for the next generation of moving companies.",
        pros: [
          "Clean, modern interface that is easy to learn",
          "Real-time crew tracking with live move status updates",
          "Streamlined digital estimates with photo and video support",
          "Fast onboarding with minimal training required",
          "Strong API for custom integrations",
        ],
        cons: [
          "Younger platform with less feature depth than SmartMoving",
          "Fewer lead provider integrations out of the box",
          "Storage management features are still in development",
        ],
        website: "https://www.supermove.co",
      },
      {
        name: "Elromco",
        slug: "elromco",
        tagline: "Enterprise moving and storage management for large operators",
        rating: 4.3,
        priceRange: "Custom pricing",
        keyDifferentiator:
          "The deepest storage and warehouse management in the moving software space, built for companies managing inventory across multiple locations.",
        pros: [
          "Industry-leading warehouse and storage management",
          "Multi-branch operations with centralized reporting",
          "Long-distance and interstate move compliance tools",
          "Deep financial reporting with job-level profitability",
          "Proven track record with large moving companies",
        ],
        cons: [
          "Interface is dated and not as intuitive as modern tools",
          "Requires significant onboarding investment",
          "Pricing is opaque and requires a sales conversation",
        ],
        website: "https://www.elromco.com",
      },
      {
        name: "MoveItPro",
        slug: "moveitpro",
        tagline: "Visual dispatch and CRM built for growing movers",
        rating: 4.2,
        priceRange: "$149 - $499/month",
        keyDifferentiator:
          "An excellent visual dispatch board combined with integrated VoIP calling and call recording for sales-focused moving companies.",
        pros: [
          "Intuitive drag-and-drop dispatch scheduling",
          "Built-in VoIP with call recording and tracking",
          "Customizable estimate templates with e-sign",
          "Solid lead attribution and ROI tracking",
          "More affordable than SmartMoving for similar features",
        ],
        cons: [
          "Automation is less sophisticated than SmartMoving",
          "Storage management is not a core strength",
          "Can slow down with very large customer databases",
        ],
        website: "https://www.moveitpro.com",
      },
      {
        name: "Vonigo",
        slug: "vonigo",
        tagline: "Flexible field service software for franchise movers",
        rating: 4.1,
        priceRange: "$98 - $196/month per user",
        keyDifferentiator:
          "Best-in-class franchise management with white-label portals and flexible workflows that can be tailored to any moving operation type.",
        pros: [
          "Strong franchise and multi-location management",
          "White-label booking portal for brand consistency",
          "Customizable workflows for different move types",
          "Good integrations with QuickBooks and Xero",
          "Online booking with instant quote capabilities",
        ],
        cons: [
          "Per-user pricing is expensive for large crews",
          "Not purpose-built for moving, needs customization",
          "Missing industry-specific features like tariff tables",
        ],
        website: "https://www.vonigo.com",
      },
      {
        name: "Movegistics",
        slug: "movegistics",
        tagline: "Simple, affordable software for small moving teams",
        rating: 4.0,
        priceRange: "$99 - $299/month",
        keyDifferentiator:
          "The most budget-friendly moving-specific platform with flat monthly pricing and all the core tools a small mover needs without enterprise bloat.",
        pros: [
          "Flat monthly pricing starting at just $99",
          "Purpose-built for moving companies",
          "Simple interface with fast onboarding",
          "GPS tracking and crew management included",
          "Good customer communication via SMS and email",
        ],
        cons: [
          "Limited scalability for companies with 20+ crews",
          "Basic reporting compared to SmartMoving",
          "Fewer integrations with third-party tools",
        ],
        website: "https://www.movegistics.com",
      },
    ],
    comparisonHeaders: ["Feature", "Supermove", "Elromco", "MoveItPro", "Vonigo", "Movegistics"],
    comparisonRows: [
      { feature: "Starting Price", values: ["$199/mo", "Custom", "$149/mo", "$98/user/mo", "$99/mo"] },
      { feature: "Lead Automation", values: [true, false, true, false, false] },
      { feature: "Visual Dispatch Board", values: [true, true, true, true, true] },
      { feature: "Storage Management", values: [false, true, false, false, false] },
      { feature: "Online Booking Portal", values: [true, false, true, true, false] },
      { feature: "Franchise Support", values: [false, true, false, true, false] },
      { feature: "Crew GPS Tracking", values: [true, true, true, true, true] },
      { feature: "VoIP Integration", values: [false, false, true, false, false] },
    ],
    faqs: [
      {
        question: "What is the best SmartMoving alternative for small movers?",
        answer:
          "Movegistics is the best option for small moving companies. It starts at just $99 per month with flat pricing, includes GPS tracking and dispatch tools, and has a minimal learning curve that lets small teams get started quickly.",
      },
      {
        question: "Which SmartMoving alternative has the most modern interface?",
        answer:
          "Supermove offers the most modern, cloud-native interface of all SmartMoving alternatives. Its clean design and intuitive workflows make it particularly appealing to younger moving company operators who value user experience.",
      },
      {
        question: "Can I get SmartMoving-level automation at a lower price?",
        answer:
          "MoveItPro comes closest to SmartMoving's automation capabilities at a lower price point, starting at $149 per month. While the automation is not as deep, it covers lead follow-up, estimate generation, and dispatch for most mid-size operations.",
      },
      {
        question: "Which alternative is best for moving companies with storage?",
        answer:
          "Elromco is the only alternative with enterprise-grade warehouse and storage management. If storage revenue is a significant part of your business, Elromco's inventory tracking and inter-branch transfer capabilities are unmatched.",
      },
      {
        question: "How does Supermove compare to SmartMoving overall?",
        answer:
          "Supermove offers a more modern interface and faster onboarding at a lower price point, but SmartMoving wins on automation depth, lead provider integrations, and reporting maturity. Companies prioritizing ease of use choose Supermove, while those needing maximum automation choose SmartMoving.",
      },
    ],
  },
};

export function getAllAlternativesPages(): AlternativesPage[] {
  return Object.values(alternativesPages);
}

export function getAlternativesPage(slug: string): AlternativesPage | undefined {
  return alternativesPages[slug];
}

export function getAllAlternativesSlugs(): string[] {
  return Object.keys(alternativesPages);
}
