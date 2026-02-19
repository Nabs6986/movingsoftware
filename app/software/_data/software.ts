export interface PricingTier {
  tier: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface FeatureCategory {
  category: string;
  items: { name: string; included: boolean | string; note?: string }[];
}

export interface SoftwareReview {
  slug: string;
  name: string;
  tagline: string;
  logoInitials: string;
  logoColor: string;
  rating: number;
  ratingCount: number;
  founded: string;
  website: string;
  quickVerdict: string;
  priceRange: string;
  bestFor: string;
  notIdealFor: string;
  pricingTiers: PricingTier[];
  pricingNote: string;
  features: FeatureCategory[];
  pros: string[];
  cons: string[];
  bestForList: string[];
  notIdealForList: string[];
  comparisonSlugs: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const softwareReviews: Record<string, SoftwareReview> = {
  supermove: {
    slug: "supermove",
    name: "Supermove",
    tagline: "The complete AI-powered platform for enterprise moving companies",
    logoInitials: "SM",
    logoColor: "#1E40AF",
    rating: 4.8,
    ratingCount: 340,
    founded: "2018",
    website: "https://www.supermove.com",
    quickVerdict: "Supermove is the enterprise leader in moving company software, used by the industry's fastest-growing mid-to-large operations. Its AI-driven automation — including outbound call bots, intelligent dispatch, and automated follow-ups — allows companies to scale revenue without proportionally scaling headcount. It has won the ATA Best Supplier award and multiple other industry recognitions. Smaller operations (under 10 trucks) may find it more powerful and expensive than needed.",
    priceRange: "Custom / ~$500–$1,500+/mo",
    bestFor: "Mid-to-large moving companies (10+ trucks) and enterprise operations",
    notIdealFor: "Small moving companies with fewer than 5 trucks and tight budgets",
    pricingTiers: [
      {
        tier: "Growth",
        price: "~$500–$800/mo",
        description: "For growing operations scaling from single to multi-truck",
        features: ["5 users", "CRM & lead management", "AI-powered follow-ups", "Online estimating", "Dispatch & scheduling", "Crew mobile app", "Digital BOL & e-sign", "Integrated payments", "Basic reporting"],
      },
      {
        tier: "Scale",
        price: "~$800–$1,500/mo",
        description: "For established operations ready for full enterprise automation",
        features: ["Unlimited users", "Full AI automation suite", "Advanced dispatch optimization", "Multi-branch management", "Full financial accounting", "Advanced analytics & BI", "Payroll management", "Standard API integrations", "Dedicated account manager"],
        highlighted: true,
      },
      {
        tier: "Enterprise",
        price: "Custom",
        description: "For large multi-location operations with custom needs",
        features: ["Custom integrations", "SLA guarantees", "Custom onboarding program", "Executive business reviews", "Priority engineering support", "Custom reporting & dashboards"],
      },
    ],
    pricingNote: "Supermove uses custom pricing based on company size and needs. All plans require a demo and sales conversation to get an exact quote. Annual billing typically offers 10-15% discount.",
    features: [
      {
        category: "Sales & CRM",
        items: [
          { name: "AI Outbound Call Automation", included: true, note: "AI handles follow-up calls 24/7" },
          { name: "Lead Pipeline Management", included: true },
          { name: "Automated Lead Follow-ups", included: true },
          { name: "Lead Source Attribution", included: true },
          { name: "Multi-User Sales Team", included: true },
          { name: "Customer Communication Log", included: true },
        ],
      },
      {
        category: "Estimating & Quoting",
        items: [
          { name: "Online Estimating", included: true },
          { name: "AI-Assisted Estimates", included: true },
          { name: "E-Signature on Estimates", included: true },
          { name: "Inventory-Based Quoting", included: true },
          { name: "Binding Estimate Support", included: true },
          { name: "Weight-Based Pricing", included: true },
        ],
      },
      {
        category: "Dispatch & Operations",
        items: [
          { name: "Dispatch Calendar", included: true },
          { name: "AI Crew-Job Matching", included: true, note: "Unique to Supermove" },
          { name: "Multi-Crew Coordination", included: true },
          { name: "Real-Time GPS Tracking", included: true },
          { name: "Route Optimization", included: true },
          { name: "Electronic BOL", included: true },
        ],
      },
      {
        category: "Financial & Reporting",
        items: [
          { name: "Full Financial Accounting", included: true, note: "Unique to Supermove" },
          { name: "Margin Tracking Per Job", included: true },
          { name: "Revenue Analytics", included: true },
          { name: "Payroll Management", included: true },
          { name: "Multi-Branch Reporting", included: true },
          { name: "QuickBooks Integration", included: true },
        ],
      },
      {
        category: "Customer Experience",
        items: [
          { name: "Customer Self-Service Portal", included: true },
          { name: "Automated SMS/Email Updates", included: true },
          { name: "Real-Time Move Tracking", included: true },
          { name: "AI 24/7 Voice Support", included: true, note: "AI handles customer calls" },
          { name: "Crew Mobile App", included: true },
          { name: "Instant Crew Payouts", included: true },
        ],
      },
    ],
    pros: [
      "AI-driven automation that handles follow-ups, dispatch, and customer communication at unlimited volume",
      "Industry recognition: ATA Best Supplier, CAM Innovation Award, NJWMA Outstanding Service",
      "Full financial accounting with margin tracking — unique among moving platforms",
      "Multi-branch management with consolidated reporting for all locations",
      "Instant crew payouts improve retention of top movers",
      "Dedicated implementation team and account manager for enterprise accounts",
    ],
    cons: [
      "Custom pricing means no upfront costs — requires a sales conversation",
      "Implementation takes 3-6 weeks — not suitable for companies needing same-week setup",
      "More complex than necessary for small operators (under 5 trucks)",
      "No built-in reputation management (Google review requests)",
    ],
    bestForList: [
      "Moving companies with 10+ trucks looking to scale without adding headcount",
      "Multi-location operations needing centralized management and reporting",
      "Companies whose biggest challenge is sales follow-up volume and automation",
      "Enterprise operations that need full financial accounting built into their moving CRM",
      "Companies ready to make a serious investment in software infrastructure for growth",
    ],
    notIdealForList: [
      "Small moving companies with 1-5 trucks and limited monthly software budgets",
      "Companies needing to be up and running in less than 2 weeks",
      "Operators who prefer simple, no-frills tools over sophisticated enterprise platforms",
    ],
    comparisonSlugs: [
      "supermove-vs-smartmoving",
      "supermove-vs-elromco",
      "supermove-vs-vonigo",
      "supermove-vs-oncue",
    ],
    faqs: [
      {
        question: "How much does Supermove cost?",
        answer: "Supermove uses custom pricing based on your company's size and feature requirements. Based on market information, the Growth tier typically starts around $500-800/month, the Scale tier runs $800-1,500/month, and Enterprise is custom-quoted. You'll need to complete a demo to get an exact price for your operation.",
      },
      {
        question: "Is Supermove worth the price?",
        answer: "For mid-to-large moving companies (10+ trucks), Supermove typically delivers strong ROI through improved booking rates (AI follow-ups close more leads), better crew utilization (intelligent dispatch), and reduced admin time (automation). Companies commonly report 15-30% revenue increases within 6 months of full implementation.",
      },
      {
        question: "Does Supermove integrate with QuickBooks?",
        answer: "Yes, Supermove integrates with QuickBooks for financial reconciliation. The platform also has a full built-in financial accounting module that many companies use instead of or alongside QuickBooks. API integrations are available for other accounting and enterprise systems on higher-tier plans.",
      },
      {
        question: "How long does Supermove onboarding take?",
        answer: "Full Supermove implementation typically takes 3-6 weeks, including data migration from your existing system, platform configuration, integration setup, and staff training. Supermove assigns a dedicated implementation specialist to guide you through the process.",
      },
      {
        question: "Does Supermove have a free trial?",
        answer: "Supermove does not offer a self-serve free trial. Instead, they provide a personalized product demo tailored to your operation's size and needs. After the demo, they may offer a pilot period for enterprise accounts. Contact their sales team to arrange a demo.",
      },
    ],
    metaTitle: "Supermove Review (2026): Pricing, Features & Is It Worth It?",
    metaDescription: "Comprehensive Supermove review for 2026. Pricing, features, AI automation, pros/cons, and who it's best for. Is Supermove right for your moving company?",
  },

  smartmoving: {
    slug: "smartmoving",
    name: "SmartMoving",
    tagline: "The top-rated all-in-one moving software for growing companies",
    logoInitials: "SV",
    logoColor: "#0D9488",
    rating: 4.7,
    ratingCount: 520,
    founded: "2016",
    website: "https://www.smartmoving.com",
    quickVerdict: "SmartMoving is the highest-rated moving software for growing small-to-mid size companies, consistently praised for its sales automation, excellent CRM, and outstanding customer support. Its Essential plan (~$399/month) covers everything most movers need, while the Growth plan (~$599/month) adds automation, storage management, and reputation management. The platform is purpose-built for moving companies, not adapted from generic field service software.",
    priceRange: "~$399–$599/mo + custom for larger operations",
    bestFor: "Growing moving companies with 2-20 trucks focused on sales and customer experience",
    notIdealFor: "Very large enterprise operations needing AI automation or very small startups on tight budgets",
    pricingTiers: [
      {
        tier: "Essential",
        price: "~$399/mo",
        description: "For early-stage and growing movers building their foundation",
        features: ["CRM to manage leads, sales, and clients", "Embedded website lead form", "Mobile-friendly estimates with e-sign", "Lead auto-import from multiple sources", "Dispatch & crew management", "Calendar sync (Google, Apple, Microsoft)", "Integrated payment processing", "Customer self-service portal", "40+ pre-built reports", "Electronic BOL"],
      },
      {
        tier: "Growth",
        price: "~$599/mo",
        description: "For established movers ready to maximize profit and efficiency",
        features: ["Everything in Essential", "Automated lead routing & sales task follow-up", "Custom pricing periods & rate tables", "Crew notifications & confirmations", "Payroll management", "Job profitability management", "Storage management", "Standard API", "Reputation management (automated review requests)", "Sales scripts & rebuttals", "Affiliate/partner portal"],
        highlighted: true,
      },
    ],
    pricingNote: "SmartMoving pricing is based on features rather than number of users or trucks. Annual billing saves approximately 15-20% compared to monthly. Enterprise pricing is available for very large or multi-location operations.",
    features: [
      {
        category: "Sales & CRM",
        items: [
          { name: "Lead Pipeline Management", included: true },
          { name: "Lead Lifecycle Tracking", included: true },
          { name: "Automated Lead Routing", included: "Growth plan" },
          { name: "Sales Scripts & Rebuttals", included: true, note: "Unique feature" },
          { name: "Sales Activities & Call Notes", included: true },
          { name: "Lead Source Reporting", included: true },
        ],
      },
      {
        category: "Estimating & Quoting",
        items: [
          { name: "Mobile-Friendly Estimates", included: true },
          { name: "E-Signature on Estimates", included: true },
          { name: "Configurable Inventory Forms", included: true },
          { name: "Custom Rate Tables", included: "Growth plan" },
          { name: "Weight-Based Estimating", included: true },
          { name: "Online Booking Widget", included: true },
        ],
      },
      {
        category: "Dispatch & Operations",
        items: [
          { name: "Dispatch Calendar", included: true },
          { name: "Crew Mobile App", included: true },
          { name: "Crew Notifications & Confirmations", included: "Growth plan" },
          { name: "Electronic BOL", included: true },
          { name: "Real-Time GPS Tracking", included: true },
          { name: "Multi-Branch Support", included: "Growth plan" },
        ],
      },
      {
        category: "Financial & Reporting",
        items: [
          { name: "40+ Pre-Built Reports", included: true },
          { name: "Job Profitability Management", included: "Growth plan" },
          { name: "Payroll Management", included: "Growth plan" },
          { name: "Integrated Payment Processing", included: true },
          { name: "QuickBooks Integration", included: true },
          { name: "Storage Billing", included: "Growth plan" },
        ],
      },
      {
        category: "Customer Experience",
        items: [
          { name: "Customer Self-Service Portal", included: true },
          { name: "Automated SMS/Email Templates", included: true },
          { name: "Two-Way SMS", included: true },
          { name: "Reputation Management", included: "Growth plan", note: "Auto review requests" },
          { name: "Online Reputation Tracking", included: "Growth plan" },
          { name: "Storage Management", included: "Growth plan" },
        ],
      },
    ],
    pros: [
      "Highest-rated moving CRM on G2 and Capterra for small-to-mid moving companies",
      "Sales scripts and rebuttals embedded in the platform — unique feature that improves close rates",
      "Reputation management with automated Google review requests drives organic growth",
      "40+ pre-built reports give immediate visibility into business performance",
      "Transparent, flat-fee pricing with no per-user or per-job charges",
      "Outstanding customer support team with moving industry expertise",
    ],
    cons: [
      "Higher entry price (~$399/mo) than Elromco or MoveitPro",
      "No moving website builder (must use or build your own website)",
      "Advanced automation features require the Growth plan (~$599/mo)",
      "No AI-driven outbound calling (Supermove has this advantage for high-volume operations)",
    ],
    bestForList: [
      "Moving companies with 2-20 trucks that want the best sales + operations platform",
      "Owners who want automated Google review generation to grow their local presence",
      "Companies with dedicated sales reps who need coaching tools and lead tracking",
      "Movers wanting comprehensive reporting to understand their business performance",
      "Operations that offer both moving and storage services",
    ],
    notIdealForList: [
      "Startups with budgets under $350/month who would be better served by Elromco or MoveitPro",
      "Very large operations (30+ trucks) needing AI automation at enterprise scale",
    ],
    comparisonSlugs: [
      "supermove-vs-smartmoving",
      "smartmoving-vs-elromco",
      "smartmoving-vs-moveitpro",
      "smartmoving-vs-vonigo",
    ],
    faqs: [
      {
        question: "How much does SmartMoving cost?",
        answer: "SmartMoving's Essential plan costs approximately $399/month and includes CRM, estimating, dispatch, payments, and 40+ reports. The Growth plan costs approximately $599/month and adds automated lead routing, payroll management, storage management, reputation management, and sales scripts. Enterprise pricing is available for large operations.",
      },
      {
        question: "Does SmartMoving have a free trial?",
        answer: "SmartMoving doesn't offer a self-serve free trial. Instead, they offer product demos and a guided onboarding process. Contact their sales team to schedule a demo and discuss your company's needs.",
      },
      {
        question: "Is SmartMoving good for small moving companies?",
        answer: "SmartMoving is excellent for small-to-mid size moving companies. The Essential plan at ~$399/month provides everything a 2-10 truck operation needs. For very small companies with tight budgets (1-2 trucks), Elromco at $289/month or MoveitPro at $150/month might be more appropriate starting points.",
      },
      {
        question: "Does SmartMoving include storage management?",
        answer: "Yes, storage management is included in SmartMoving's Growth plan (~$599/month). This covers storage unit management, automated billing, customer access to their storage account, and integration with moving job workflows.",
      },
      {
        question: "What integrations does SmartMoving support?",
        answer: "SmartMoving integrates with Google Calendar, Apple Calendar, Microsoft Outlook, QuickBooks, and major payment processors. The Standard API on the Growth plan allows custom integrations with other tools. The platform also has native lead import from major moving lead sources.",
      },
    ],
    metaTitle: "SmartMoving Review (2026): Pricing, Features & Is It Worth It?",
    metaDescription: "Comprehensive SmartMoving review for 2026. Pricing, features, sales tools, pros/cons, and who it's best for in the moving industry.",
  },

  elromco: {
    slug: "elromco",
    name: "Elromco",
    tagline: "Affordable moving software with a transparent flat monthly fee",
    logoInitials: "EL",
    logoColor: "#7C3AED",
    rating: 4.6,
    ratingCount: 280,
    founded: "2012",
    website: "https://www.elromco.com",
    quickVerdict: "Elromco is the go-to choice for small and startup moving companies that want a complete CRM at the lowest price in the industry. At $289/month for 3 users, it includes everything from online quoting to electronic BOL, two-way SMS, and integrated payments. The optional $99/month website builder lets new businesses launch a professional presence without separate hosting. It's not the most feature-rich platform, but for small operators, it's the best value available.",
    priceRange: "$289–$399/mo + custom for enterprise",
    bestFor: "Small moving companies (1-5 trucks) and startups",
    notIdealFor: "Large operations needing advanced automation or multi-branch management",
    pricingTiers: [
      {
        tier: "Starter",
        price: "$289/mo (or $259/mo billed annually)",
        description: "For new and small moving companies getting organized",
        features: ["3 office users", "Online quoting & booking", "CRM & lead management", "Two-way SMS", "Automated email sending", "Interactive dispatch calendar", "Auto estimating", "Google integration", "Electronic BOL", "Online payments", "Leads grabber", "Regular updates", "Free support"],
        highlighted: true,
      },
      {
        tier: "Professional",
        price: "$399/mo (or $359/mo billed annually)",
        description: "For growing operations with larger teams",
        features: ["5 office users", "Everything in Starter", "Advanced reporting", "Payroll reporting", "Auto job closing", "Priority support"],
      },
      {
        tier: "Enterprise",
        price: "Custom (call for pricing)",
        description: "For companies with 5+ office users and advanced needs",
        features: ["5+ office users", "Full feature set", "Custom integrations", "Dedicated account support"],
      },
    ],
    pricingNote: "Elromco pricing is flat-fee per plan, not per user within the plan limits. Annual billing saves approximately $360/year on the Starter plan. Moving website builder is available as a $99/month add-on for any plan.",
    features: [
      {
        category: "Sales & CRM",
        items: [
          { name: "Lead Management", included: true },
          { name: "Leads Grabber (auto-import)", included: true, note: "Pulls leads from multiple sources" },
          { name: "Customer Account Portal", included: true },
          { name: "Lead Follow-up Automation", included: "Basic" },
          { name: "Sales Pipeline", included: "Basic" },
          { name: "Reporting", included: true },
        ],
      },
      {
        category: "Estimating & Quoting",
        items: [
          { name: "Auto Estimating", included: true },
          { name: "Online Quoting", included: true },
          { name: "Online Booking", included: true },
          { name: "E-Signature", included: true },
          { name: "Interactive Dashboard", included: true },
          { name: "Google Integration", included: true },
        ],
      },
      {
        category: "Dispatch & Operations",
        items: [
          { name: "Interactive Calendar", included: true },
          { name: "Dispatch Scheduling", included: true },
          { name: "Auto Job Closing", included: true },
          { name: "Electronic BOL", included: true },
          { name: "Email Tracking", included: true },
          { name: "Two-Way SMS", included: true },
        ],
      },
      {
        category: "Financial & Reporting",
        items: [
          { name: "Online Payments", included: true },
          { name: "Payroll Reporting", included: true },
          { name: "Reports Dashboard", included: true },
          { name: "Auto Email Sending", included: true },
          { name: "QuickBooks Integration", included: false, note: "Not natively supported" },
          { name: "Advanced Analytics", included: false },
        ],
      },
      {
        category: "Add-Ons",
        items: [
          { name: "Moving Website Builder", included: "$99/mo add-on", note: "Integrated with booking system" },
          { name: "Storage Management", included: true },
          { name: "Regular Updates", included: true },
          { name: "Quick Search", included: true },
        ],
      },
    ],
    pros: [
      "Lowest price among full-featured platforms at $289/month for 3 users",
      "Transparent, flat-fee pricing — no surprises or per-user charges within plan limits",
      "Optional integrated website builder ($99/month) for new businesses launching online",
      "Leads grabber automatically imports leads from multiple sources",
      "Auto estimating speeds up quote creation significantly",
      "Free support included with all plans",
    ],
    cons: [
      "Less automation than SmartMoving or Supermove — no automated lead routing or reputation management",
      "Mobile crew app is less robust than competitors",
      "Limited to 3 users on Starter plan — teams may need to upgrade quickly",
      "Less polished UI compared to SmartMoving and Oncue",
      "No native QuickBooks integration",
    ],
    bestForList: [
      "New moving companies launching and needing an affordable professional platform",
      "Small movers with 1-5 trucks on a tight software budget",
      "Operators who want a moving website built and integrated for under $400/month total",
      "Companies with 3-5 office staff fitting within the plan user limits",
      "Movers who want a straightforward platform without enterprise complexity",
    ],
    notIdealForList: [
      "Companies with 6+ office staff regularly using the system (may need Professional plan or above)",
      "Operations needing automated lead nurturing and reputation management",
      "Large movers needing multi-branch support and advanced analytics",
    ],
    comparisonSlugs: [
      "supermove-vs-elromco",
      "smartmoving-vs-elromco",
      "elromco-vs-vonigo",
    ],
    faqs: [
      {
        question: "How much does Elromco cost?",
        answer: "Elromco's Starter plan costs $289/month (or $259/month billed annually) for 3 office users. The Professional plan is $399/month (or $359/month annually) for 5 users. An optional moving website is available for $99/month as an add-on. Enterprise pricing (5+ users) requires a custom quote.",
      },
      {
        question: "Is Elromco good for a new moving company?",
        answer: "Yes, Elromco is one of the best options for new moving companies. The Starter plan at $289/month includes all the core features needed to run a professional operation: online quoting, CRM, two-way SMS, electronic BOL, and payments. Add the $99/month website and you have a complete business presence for under $400/month total.",
      },
      {
        question: "Does Elromco have a website builder?",
        answer: "Yes, Elromco offers an optional moving website builder for $99/month. The website is integrated with Elromco's booking and quoting system, so leads from your website go directly into the CRM. This is a significant advantage for new movers who need a website and CRM in one package.",
      },
      {
        question: "How many users does Elromco include?",
        answer: "The Starter plan includes 3 office users, and the Professional plan includes 5 office users. Field crew members typically access the mobile interface which may have different access controls. If you need more office users, you'll need the Professional plan ($399/month) or Enterprise plan.",
      },
      {
        question: "Does Elromco work for small moving companies?",
        answer: "Yes, Elromco is specifically designed for small and startup moving companies. Its transparent pricing, simple setup, and inclusive feature set make it ideal for 1-5 truck operations. Most small moving companies can be fully operational on Elromco within 1-2 days of setup.",
      },
    ],
    metaTitle: "Elromco Review (2026): Pricing, Features & Is It Worth It?",
    metaDescription: "Comprehensive Elromco moving software review for 2026. Pricing ($289/mo), features, website builder add-on, and who it's best for.",
  },

  vonigo: {
    slug: "vonigo",
    name: "Vonigo",
    tagline: "Field service management for moving and multi-service businesses",
    logoInitials: "VO",
    logoColor: "#059669",
    rating: 4.4,
    ratingCount: 190,
    founded: "2012",
    website: "https://www.vonigo.com",
    quickVerdict: "Vonigo is a general-purpose field service management platform used by moving companies, junk removal businesses, cleaning services, and other field service industries. It offers solid dispatch, online booking, and customer management — but lacks moving-specific features like electronic BOL, moving-specific inventory, and storage-in-transit management. It's most compelling for businesses offering multiple field service types or franchise operations. For dedicated moving companies, purpose-built platforms offer more relevant features.",
    priceRange: "$98–$148/user/mo + enterprise custom",
    bestFor: "Multi-service field service businesses and moving franchises",
    notIdealFor: "Dedicated moving companies that need FMCSA-compliant documentation and inventory tracking",
    pricingTiers: [
      {
        tier: "Starter",
        price: "$98/user/mo",
        description: "For small service businesses getting started",
        features: ["Online booking widget", "Scheduling & dispatch", "Client management", "Invoicing & payments", "Mobile app for field staff", "Basic reporting"],
      },
      {
        tier: "Business",
        price: "$148/user/mo",
        description: "For growing businesses needing more advanced tools",
        features: ["Everything in Starter", "Route optimization", "Customer self-service portal", "Advanced reporting", "API access", "Integrations"],
        highlighted: true,
      },
      {
        tier: "Enterprise",
        price: "Custom",
        description: "For multi-location and franchise operations",
        features: ["Multi-location management", "Franchise management tools", "Custom workflows", "Dedicated support", "Custom integrations"],
      },
    ],
    pricingNote: "Vonigo charges per user per month. For a team of 5 users, the cost is $490/month (Starter) or $740/month (Business). This per-user model becomes significantly more expensive than flat-fee moving platforms as teams grow.",
    features: [
      {
        category: "Sales & CRM",
        items: [
          { name: "Client Management", included: true },
          { name: "Online Booking", included: true },
          { name: "Lead Management", included: "Basic" },
          { name: "Lead Source Tracking", included: false },
          { name: "Sales Automation", included: false },
          { name: "Sales Scripts", included: false },
        ],
      },
      {
        category: "Estimating & Quoting",
        items: [
          { name: "Online Quotes", included: true },
          { name: "E-Signature", included: true },
          { name: "Custom Pricing Rules", included: true },
          { name: "Electronic BOL", included: false, note: "Not supported" },
          { name: "Weight-Based Pricing", included: false },
          { name: "Moving-Specific Inventory", included: false },
        ],
      },
      {
        category: "Dispatch & Operations",
        items: [
          { name: "Scheduling Calendar", included: true },
          { name: "Dispatch", included: true },
          { name: "Route Optimization", included: "Business plan" },
          { name: "Mobile App", included: true },
          { name: "Real-Time GPS", included: true },
          { name: "Storage Management", included: false },
        ],
      },
      {
        category: "Financial & Reporting",
        items: [
          { name: "Invoicing", included: true },
          { name: "Payment Processing", included: true },
          { name: "Reporting", included: true },
          { name: "Advanced Analytics", included: "Business plan" },
          { name: "Payroll Management", included: false },
          { name: "Job Profitability", included: false },
        ],
      },
      {
        category: "Franchise & Multi-Location",
        items: [
          { name: "Multi-Location Support", included: "Enterprise" },
          { name: "Franchise Management", included: "Enterprise", note: "Vonigo strength" },
          { name: "Brand Management", included: "Enterprise" },
          { name: "Cross-Location Reporting", included: "Enterprise" },
          { name: "Franchisee Onboarding", included: "Enterprise" },
        ],
      },
    ],
    pros: [
      "Works across multiple service types — ideal for businesses offering moving + other services",
      "Strong franchise management capabilities for growing franchise operations",
      "Clean, modern online booking experience for consumers",
      "Good route optimization for multi-stop service jobs",
      "Professional customer portal for client self-service",
    ],
    cons: [
      "No electronic BOL — a critical gap for moving companies",
      "Per-user pricing gets expensive quickly as teams grow",
      "No moving-specific features like storage-in-transit or weight-based estimating",
      "No reputation management (automated review requests)",
      "No payroll management",
      "Less specialized for moving than SmartMoving, Elromco, or MoveitPro",
    ],
    bestForList: [
      "Businesses offering multiple service lines (moving + junk removal, moving + cleaning, etc.)",
      "Franchise moving companies needing centralized franchise management",
      "Very small teams (1-2 people) where per-user pricing is competitive with flat-fee plans",
      "Companies that prioritize polished consumer-facing online booking",
    ],
    notIdealForList: [
      "Dedicated moving companies that need electronic BOL and FMCSA-compliant documents",
      "Moving companies with 5+ team members where per-user costs exceed flat-fee alternatives",
      "Companies needing storage-in-transit billing and inventory management",
    ],
    comparisonSlugs: [
      "supermove-vs-vonigo",
      "elromco-vs-vonigo",
      "smartmoving-vs-vonigo",
    ],
    faqs: [
      {
        question: "Is Vonigo good for moving companies?",
        answer: "Vonigo works for moving companies but was built as a general field service platform, not a moving-specific tool. It lacks key moving features like electronic BOL, storage-in-transit management, and weight-based estimating. Moving-specific platforms like SmartMoving, Elromco, or MoveitPro offer better-suited workflows. Vonigo is a better fit for companies offering multiple service types.",
      },
      {
        question: "How much does Vonigo cost for a small moving company?",
        answer: "For a small moving company with 3 users, Vonigo costs $294/month (Starter) or $444/month (Business). This is comparable to Elromco's $289/month Starter plan, but Elromco includes moving-specific features Vonigo lacks. For 5+ users, Vonigo becomes significantly more expensive than flat-fee alternatives.",
      },
      {
        question: "Does Vonigo have electronic BOL?",
        answer: "No, Vonigo does not support electronic Bill of Lading. This is a significant gap for moving companies, especially those doing interstate moves regulated by FMCSA. If BOL is required for your operation, use SmartMoving, Elromco, MoveitPro, or Supermove instead.",
      },
      {
        question: "What field service businesses use Vonigo?",
        answer: "Vonigo is used by moving companies, junk removal businesses, carpet cleaning companies, pest control services, and other field service businesses. Its multi-service support makes it popular with companies that offer several service types. This breadth is Vonigo's key advantage over moving-specific platforms.",
      },
      {
        question: "Does Vonigo support franchise management?",
        answer: "Yes, franchise management is one of Vonigo's strongest features. The Enterprise plan supports multi-location management, franchisee onboarding, brand management, and consolidated cross-location reporting. For growing moving franchises, Vonigo's franchise capabilities are worth considering despite its moving-specific feature gaps.",
      },
    ],
    metaTitle: "Vonigo Review (2026): Pricing, Features & Is It Right for Movers?",
    metaDescription: "Comprehensive Vonigo review for 2026. Pricing per user, features, moving-specific gaps, and who Vonigo is actually best for.",
  },

  moveitpro: {
    slug: "moveitpro",
    name: "MoveitPro",
    tagline: "Complete moving software with 24/7 US-based support, built for all sizes",
    logoInitials: "MP",
    logoColor: "#DC2626",
    rating: 4.5,
    ratingCount: 410,
    founded: "2008",
    website: "https://moveitpro.com",
    quickVerdict: "MoveitPro is a veteran of the moving software industry, serving companies from solo operators to those handling 10,000+ jobs per year. Its key advantages are the lowest entry price ($150/month), 24/7 US-based live support, and an offline-capable crew mobile app — critical for moves in rural areas or buildings with poor cell signal. While its interface isn't the most modern, the depth of features and support quality make it a reliable choice for moving companies of all sizes.",
    priceRange: "$150–$400+/mo",
    bestFor: "Moving companies of all sizes wanting great support and value",
    notIdealFor: "Companies primarily focused on cutting-edge AI automation or the most polished UI",
    pricingTiers: [
      {
        tier: "Starter",
        price: "From $150/mo",
        description: "Everything you need to run a professional moving operation",
        features: ["CRM & lead management", "Scheduling & dispatch", "Digital contracts & e-sign", "Payment processing", "Storage management", "Customer portal", "Crew mobile app (with offline)", "Basic reporting"],
        highlighted: true,
      },
      {
        tier: "Pro",
        price: "From $250/mo",
        description: "For growing companies needing advanced reporting and payroll",
        features: ["Everything in Starter", "Advanced reporting & analytics", "Payroll management", "Multi-truck support", "API access"],
      },
      {
        tier: "Enterprise",
        price: "From $400/mo",
        description: "For large operations with complex needs",
        features: ["Unlimited trucks/scale", "Custom workflows", "Dedicated account support", "Priority integrations", "Advanced analytics"],
      },
    ],
    pricingNote: "MoveitPro pricing scales with company size. The starting price of $150/month is the most accessible in the industry. All plans include 24/7 US-based live support — a standard feature, not a premium add-on.",
    features: [
      {
        category: "Sales & CRM",
        items: [
          { name: "Lead Management", included: true },
          { name: "Lead Pipeline Tracking", included: true },
          { name: "Lead Source Attribution", included: true },
          { name: "Customer Communication Log", included: true },
          { name: "Automated Follow-up Sequences", included: "Partial" },
          { name: "Sales Scripts", included: false },
        ],
      },
      {
        category: "Estimating & Quoting",
        items: [
          { name: "Digital Estimates", included: true },
          { name: "E-Signature on Estimates", included: true },
          { name: "Custom Inventory Forms", included: true },
          { name: "Online Booking Widget", included: true },
          { name: "Weight-Based Estimating", included: true },
          { name: "Binding Estimate Support", included: true },
        ],
      },
      {
        category: "Dispatch & Operations",
        items: [
          { name: "Dispatch Calendar", included: true },
          { name: "Electronic BOL", included: true },
          { name: "Crew Mobile App", included: true, note: "Offline capability included" },
          { name: "Real-Time GPS Tracking", included: true },
          { name: "Customer Arrival Notifications", included: true },
          { name: "Multi-Location Support", included: "Enterprise" },
        ],
      },
      {
        category: "Financial & Reporting",
        items: [
          { name: "Payment Processing", included: true },
          { name: "Crew Mobile Payments", included: true, note: "Crew collects on-site" },
          { name: "Instant Crew Payouts", included: true },
          { name: "Payroll Management", included: "Pro plan" },
          { name: "Advanced Reporting", included: "Pro plan" },
          { name: "Job Profitability", included: "Pro plan" },
        ],
      },
      {
        category: "Customer & Crew",
        items: [
          { name: "Customer Self-Service Portal", included: true },
          { name: "Storage Management", included: true },
          { name: "24/7 US-Based Live Support", included: true, note: "Standard, not premium" },
          { name: "Offline Crew App", included: true, note: "Unique advantage" },
          { name: "On-Site Signature Capture", included: true },
          { name: "Reputation Management", included: "Basic" },
        ],
      },
    ],
    pros: [
      "24/7 US-based live support available on evenings, weekends, and holidays",
      "Lowest entry price at $150/month — most accessible in the industry",
      "Offline crew mobile app for moves in poor connectivity areas",
      "Crew can accept payment on-site via mobile app",
      "Proven scalability from 100 to 10,000+ jobs/year without switching platforms",
      "Instant crew payouts improve crew retention",
    ],
    cons: [
      "Interface less polished and modern than SmartMoving or Oncue",
      "Sales automation features less sophisticated than SmartMoving or Supermove",
      "No embedded sales coaching tools (scripts, rebuttals)",
      "Some advanced features require higher-tier plans",
    ],
    bestForList: [
      "Companies where 24/7 live support availability is a top priority",
      "Moving companies operating in rural areas where offline crew app is critical",
      "Budget-conscious operators wanting the lowest entry price ($150/month)",
      "Companies with crews who need to accept on-site payment via mobile",
      "Operations scaling from small to large without wanting to change platforms",
    ],
    notIdealForList: [
      "Companies where modern, polished UI is a top priority for customer-facing interactions",
      "Sales-focused operations wanting the most sophisticated CRM and coaching tools",
    ],
    comparisonSlugs: [
      "smartmoving-vs-moveitpro",
      "moveitpro-vs-oncue",
      "yembo-vs-moveitpro",
    ],
    faqs: [
      {
        question: "How much does MoveitPro cost?",
        answer: "MoveitPro starts at $150/month for the Starter plan, $250/month for Pro, and $400/month for Enterprise. All plans include the full feature set appropriate to that tier plus 24/7 US-based live support. Pricing scales with company size.",
      },
      {
        question: "Does MoveitPro work offline?",
        answer: "Yes, MoveitPro's crew mobile app supports offline functionality. Movers can view job details, access digital inventories, capture customer signatures, and record payments without internet connectivity. Data syncs when the connection is restored. This is a key advantage for moves in basements, rural areas, or buildings with poor cell service.",
      },
      {
        question: "Is MoveitPro good for small moving companies?",
        answer: "Yes, MoveitPro's $150/month Starter plan is the most affordable entry point in the moving software industry. It includes CRM, dispatch, digital contracts, payments, and storage management — everything a small moving company needs. The 24/7 support is especially valuable for small companies without in-house IT.",
      },
      {
        question: "Does MoveitPro include storage management?",
        answer: "Yes, storage management is included in all MoveitPro plans, including the Starter plan at $150/month. This covers storage unit inventory, automated billing, and integration with moving job workflows. It's a complete storage management solution for moving companies that also offer storage.",
      },
      {
        question: "How is MoveitPro support compared to competitors?",
        answer: "MoveitPro's 24/7 US-based live support is consistently rated as one of the best in the moving software industry. Unlike most competitors who offer business-hours support, MoveitPro's team is available at night, on weekends, and on holidays. This is particularly valuable for moving companies that operate 7 days a week.",
      },
    ],
    metaTitle: "MoveitPro Review (2026): Pricing, Features & 24/7 Support",
    metaDescription: "Comprehensive MoveitPro review for 2026. Starting at $150/mo with 24/7 support and offline crew app — see if it's right for your moving company.",
  },

  oncue: {
    slug: "oncue",
    name: "Oncue",
    tagline: "Visual dispatch and modern CRM for operations-focused moving companies",
    logoInitials: "OC",
    logoColor: "#D97706",
    rating: 4.7,
    ratingCount: 220,
    founded: "2016",
    website: "https://www.oncue.co",
    quickVerdict: "Oncue is best known for its intuitive visual drag-and-drop dispatch board, which operations managers consistently praise as one of the most user-friendly in the industry. Beyond dispatch, it offers a complete moving CRM, online estimating, storage management, payroll, and reputation management. Its clean, modern interface makes it easier to train new staff compared to more complex platforms. Custom pricing means you'll need a demo to get exact costs.",
    priceRange: "Custom (typically $300–$600+/mo)",
    bestFor: "Mid-size moving companies prioritizing dispatch efficiency and modern UI",
    notIdealFor: "Very small companies on tight budgets or those needing enterprise AI automation",
    pricingTiers: [
      {
        tier: "Core",
        price: "~$300–500/mo (custom)",
        description: "For growing moving companies needing the full suite",
        features: ["CRM & lead management", "Online estimating & e-sign", "Visual drag-drop dispatch board", "Crew management & notifications", "Electronic BOL", "Integrated payments", "Customer portal", "Real-time tracking"],
        highlighted: true,
      },
      {
        tier: "Pro",
        price: "Custom",
        description: "For established operations with advanced needs",
        features: ["Everything in Core", "Storage management", "Payroll management", "Multi-branch support", "Standard API", "Reputation management", "Advanced reporting"],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        description: "For large multi-location operations",
        features: ["Custom integrations", "Dedicated support", "Custom onboarding", "Advanced analytics"],
      },
    ],
    pricingNote: "Oncue uses custom pricing based on company size and feature requirements. Pricing is not published publicly. Contact their sales team for a demo and custom quote.",
    features: [
      {
        category: "Sales & CRM",
        items: [
          { name: "Lead Management", included: true },
          { name: "Customer Communication Log", included: true },
          { name: "Lead Pipeline", included: true },
          { name: "Lead Source Tracking", included: true },
          { name: "Sales Automation", included: "Partial" },
          { name: "Sales Scripts", included: false },
        ],
      },
      {
        category: "Estimating",
        items: [
          { name: "Online Estimating", included: true },
          { name: "E-Signature", included: true },
          { name: "Inventory Forms", included: true },
          { name: "Custom Rate Tables", included: true },
          { name: "Binding Estimate Support", included: true },
          { name: "Online Booking Widget", included: true },
        ],
      },
      {
        category: "Dispatch (Oncue's Strength)",
        items: [
          { name: "Visual Drag-Drop Dispatch Board", included: true, note: "Industry-best feature" },
          { name: "Multi-Dispatcher Support", included: true },
          { name: "Crew Notifications", included: true },
          { name: "Electronic BOL", included: true },
          { name: "Real-Time GPS Tracking", included: "Partial" },
          { name: "Crew Mobile App", included: true },
        ],
      },
      {
        category: "Financial",
        items: [
          { name: "Payment Processing", included: true },
          { name: "Payroll Management", included: "Pro plan" },
          { name: "Storage Billing", included: "Pro plan" },
          { name: "Job Profitability", included: "Pro plan" },
          { name: "Advanced Reporting", included: "Pro plan" },
          { name: "QuickBooks Integration", included: true },
        ],
      },
      {
        category: "Customer Experience",
        items: [
          { name: "Customer Self-Service Portal", included: true },
          { name: "Automated SMS/Email Updates", included: true },
          { name: "Reputation Management", included: "Pro plan" },
          { name: "Multi-Branch Support", included: "Pro plan" },
          { name: "Two-Way SMS", included: true },
        ],
      },
    ],
    pros: [
      "Best-in-class visual drag-and-drop dispatch board praised by dispatchers and operations managers",
      "Modern, clean UI reduces training time for new staff",
      "Complete feature set: CRM, dispatch, estimating, storage, payroll, reputation management",
      "Reputation management with automated review requests built in",
      "Well-suited for operations teams doing high-volume daily dispatch",
    ],
    cons: [
      "Custom pricing requires demo — no published rates",
      "No AI automation (Supermove has this advantage at enterprise scale)",
      "No sales scripts or coaching tools (SmartMoving has this edge)",
      "Offline crew app less capable than MoveitPro",
    ],
    bestForList: [
      "Moving companies where the dispatch experience is the #1 operational priority",
      "Operations teams managing 15-50+ jobs per day who want visual clarity",
      "Companies where dispatcher training time is a concern (Oncue is easy to learn)",
      "Mid-size movers wanting a modern, complete platform with great reputation management",
    ],
    notIdealForList: [
      "Very small companies on tight budgets (custom pricing may be higher than flat-fee alternatives)",
      "Enterprise operations needing AI automation at scale (Supermove is better)",
    ],
    comparisonSlugs: [
      "supermove-vs-oncue",
      "moveitpro-vs-oncue",
    ],
    faqs: [
      {
        question: "How much does Oncue cost?",
        answer: "Oncue uses custom pricing and doesn't publish its rates publicly. Based on market information, the Core plan typically costs $300-500/month for growing moving operations. You'll need to schedule a demo to get an exact quote based on your company size and needs.",
      },
      {
        question: "What makes Oncue's dispatch board special?",
        answer: "Oncue's visual drag-and-drop dispatch board lets dispatchers see all jobs, crews, and time slots in a visual calendar format. Jobs can be reassigned by simply dragging them to a different crew or time. Multiple dispatchers can work the board simultaneously with real-time updates. This visual approach significantly reduces coordination time and errors compared to text-based dispatch systems.",
      },
      {
        question: "Is Oncue better than SmartMoving?",
        answer: "It depends on your priority. Oncue is better if dispatch experience and UI quality are your top priorities. SmartMoving is better if you want sales coaching tools (scripts, rebuttals), reputation management included at a lower plan tier, and more transparent pricing. Many operations teams prefer Oncue's dispatch board; sales teams often prefer SmartMoving's CRM.",
      },
      {
        question: "Does Oncue have reputation management?",
        answer: "Yes, Oncue includes reputation management with automated review request workflows on its Pro plan. After a completed move, customers can be automatically prompted to leave a Google or other review. This feature helps build your online reputation without manual outreach.",
      },
      {
        question: "Does Oncue work for large moving operations?",
        answer: "Yes, Oncue's Enterprise plan supports large multi-location operations. The visual dispatch board particularly shines for high-volume operations where dispatchers need to manage many simultaneous crews. Large companies running 30-50+ jobs per day consistently praise Oncue's dispatch clarity for managing complex schedules.",
      },
    ],
    metaTitle: "Oncue Review (2026): Visual Dispatch & Moving Software Features",
    metaDescription: "Comprehensive Oncue moving software review 2026. Visual dispatch board, pricing, features, and who Oncue is best for in the moving industry.",
  },
};

export function getSoftwareReview(slug: string): SoftwareReview | undefined {
  return softwareReviews[slug];
}

export function getAllSoftwareSlugs(): string[] {
  return Object.keys(softwareReviews);
}
