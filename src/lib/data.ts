export type Capability = { title: string; description: string };

export type Product = {
  slug: string;
  name: string;
  category: string;
  status: string;
  audience: string;
  tagline: string;
  description: string;
  problem: string;
  outcome: string;
  workflow: string[];
  capabilities: Capability[];
  accent: 'indigo' | 'cyan' | 'amber';
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    slug: 'testarq',
    name: 'TestArq',
    category: 'AI-Native Quality Intelligence',
    status: 'Concept product · In development',
    audience: 'For product, engineering and quality leaders',
    tagline:
      'TestArq helps organisations transform software quality from a reporting activity into an intelligent decision system.',
    description:
      'It converts requirements into structured and traceable test assets while providing visibility into coverage, risk, execution and release readiness.',
    problem:
      'Quality teams often work across disconnected requirements, test suites and release reports. The result is duplicated effort, uncertain coverage and late risk discovery.',
    outcome:
      'A shared quality intelligence layer that makes requirements traceable, coverage visible and release decisions easier to defend.',
    workflow: ['Connect requirements', 'Generate test assets', 'Review coverage and risk', 'Track release readiness'],
    capabilities: [
      {
        title: 'AI-assisted test design',
        description:
          'Generate structured test assets directly from requirements, so coverage is defined by intent rather than guesswork.',
      },
      {
        title: 'Requirements traceability',
        description:
          'Link every test asset back to its requirement for an auditable chain from specification to release.',
      },
      {
        title: 'Test coverage intelligence',
        description:
          'See exactly what is covered, what is at risk and where the gaps are — in real time.',
      },
      {
        title: 'Risk and readiness visibility',
        description:
          'Turn coverage, execution and defect data into clear release-readiness signals.',
      },
      {
        title: 'Enterprise integrations',
        description:
          'Connect with Jira, Azure DevOps and QTest so intelligence lives inside your existing workflow.',
      },
      {
        title: 'Enterprise governance',
        description:
          'Role-based controls, audit trails and policies built for regulated environments.',
      },
    ],
    accent: 'indigo',
    image: '/images/products/testarq-system.png',
    imageAlt: 'Abstract requirements and risk signals flowing into a structured quality system',
  },
  {
    slug: 'showgrid',
    name: 'ShowGrid',
    category: 'The Engagement Layer for Modern Fandom',
    status: 'Concept product · In development',
    audience: 'For media, entertainment and sports communities',
    tagline:
      'ShowGrid transforms fan creativity, opinions and participation into structured engagement and measurable audience signals.',
    description:
      'Through community challenges, open ratings, grid-based scoring and fan-created experiences, ShowGrid gives fans new ways to participate in the entertainment and sports communities they care about.',
    problem:
      'Audience energy is spread across posts, polls and disconnected platforms. Brands can see attention, but struggle to turn it into sustained participation or useful community insight.',
    outcome:
      'A structured participation layer where audiences create, rate and play — while operators learn what their communities value.',
    workflow: ['Launch an experience', 'Invite participation', 'Structure community signals', 'Learn and activate'],
    capabilities: [
      {
        title: 'Grid Sports',
        description:
          'Grid-based scoring and predictions that turn games into shared, watchable experiences.',
      },
      {
        title: 'Grid Play',
        description:
          'Interactive formats that reward participation and keep communities coming back.',
      },
      {
        title: 'Fanverse',
        description:
          'A structured home for fan-created content, rankings and stories.',
      },
      {
        title: 'Community challenges',
        description:
          'Themed prompts that mobilise fan creativity into measurable engagement.',
      },
      {
        title: 'Open ratings',
        description:
          'Transparent, aggregated ratings that surface audience opinion at scale.',
      },
      {
        title: 'Fan engagement analytics',
        description:
          'Clear signals on participation, sentiment and growth across every experience.',
      },
    ],
    accent: 'cyan',
    image: '/images/products/showgrid-signal.png',
    imageAlt: 'Abstract audience signals flowing into a luminous modular grid',
  },
  {
    slug: 'grid-pulse',
    name: 'Grid Pulse',
    category: 'Political Intelligence Through Public Signals',
    status: 'Concept product · In development',
    audience: 'For public affairs, research and communications teams',
    tagline:
      'Grid Pulse helps organise and interpret political conversations, public opinion and engagement signals.',
    description:
      'It is designed to help stakeholders understand emerging narratives, audience sentiment and issue-level movement through structured analytics and intelligence.',
    problem:
      'Public conversations move faster than periodic research. Teams need a clearer way to separate durable issue movement from short-lived noise and fragmented commentary.',
    outcome:
      'A decision-ready view of emerging narratives, sentiment and issue momentum — grounded in transparent public signals.',
    workflow: ['Define issues and audiences', 'Observe public signals', 'Interpret narrative movement', 'Brief decision-makers'],
    capabilities: [
      {
        title: 'Political sentiment monitoring',
        description:
          'Track how audiences feel about issues, figures and narratives over time.',
      },
      {
        title: 'Public issue tracking',
        description:
          'Follow the issues that matter as they rise, peak and fade in public conversation.',
      },
      {
        title: 'Narrative intelligence',
        description:
          'Identify emerging stories and how they spread across channels and audiences.',
      },
      {
        title: 'Constituency and audience insights',
        description:
          'Understand the concerns and priorities of specific communities.',
      },
      {
        title: 'Engagement analytics',
        description:
          'Measure participation, reach and influence with structured signals.',
      },
      {
        title: 'Decision dashboards',
        description:
          'Turn intelligence into the views leadership needs to act with confidence.',
      },
    ],
    accent: 'amber',
    image: '/images/products/grid-pulse-field.png',
    imageAlt: 'Abstract public signals resolving into a calm analytical pulse field',
  },
];

export type ServiceArea = { title: string; blurb: string; services: string[] };

export const aiConsulting: ServiceArea[] = [
  {
    title: 'AI Strategy and Readiness',
    blurb:
      'Assess where AI can create real value, prioritise opportunities and build a practical roadmap.',
    services: [
      'AI-readiness assessment',
      'Leadership workshops',
      'AI opportunity identification',
      'Use-case prioritisation',
      'Technology evaluation',
      'AI investment roadmap',
      'Build-versus-buy recommendations',
    ],
  },
  {
    title: 'Agentic AI and Automation',
    blurb:
      'Design AI agents and automated workflows that handle real work with human oversight.',
    services: [
      'AI agent strategy',
      'Department-specific AI agents',
      'Workflow automation',
      'Human-in-the-loop processes',
      'Sales and marketing agents',
      'Customer-service automation',
      'Operations and knowledge agents',
    ],
  },
  {
    title: 'Generative AI Solutions',
    blurb:
      'Ship GenAI products that answer questions, process documents and support decisions.',
    services: [
      'Enterprise knowledge assistants',
      'Internal AI copilots',
      'Intelligent document processing',
      'Research and summarisation systems',
      'Proposal-generation workflows',
      'Customer-support assistants',
      'Natural-language analytics',
    ],
  },
  {
    title: 'Data and Knowledge Intelligence',
    blurb:
      'Turn disconnected data and documents into retrievable, trustworthy knowledge.',
    services: [
      'Retrieval-augmented generation',
      'Enterprise search',
      'Knowledge-base architecture',
      'Document classification',
      'Data pipelines',
      'Analytics engineering',
      'Predictive intelligence',
    ],
  },
  {
    title: 'Responsible AI and Governance',
    blurb:
      'Build AI with the policies, controls and accountability that enterprises require.',
    services: [
      'Organisational AI policies',
      'Data privacy frameworks',
      'Risk classification',
      'Model and vendor evaluation',
      'Human oversight design',
      'AI output-review processes',
      'Responsible-use guidelines',
    ],
  },
  {
    title: 'AI Training and Adoption',
    blurb:
      'Make AI a working capability across the organisation, not a pilot in a corner.',
    services: [
      'Executive AI workshops',
      'Employee AI-literacy programmes',
      'Role-specific training',
      'Prompt and workflow training',
      'Department-level AI playbooks',
      'AI champion programmes',
      'Change-management support',
    ],
  },
];

export const marketingConsulting: ServiceArea[] = [
  {
    title: 'Marketing and Go-to-Market Strategy',
    blurb:
      'Design how you enter markets, position offers and build a demand engine.',
    services: [
      'Marketing audits',
      'Go-to-market planning',
      'Market-entry strategy',
      'Customer segmentation',
      'Ideal customer profile development',
      'Competitive positioning',
      'Marketing operating models',
      'Annual marketing planning',
    ],
  },
  {
    title: 'Brand and Product Positioning',
    blurb:
      'Develop messaging that gives your category, product and founders a clear voice.',
    services: [
      'Brand strategy',
      'Corporate messaging',
      'Value-proposition development',
      'Product positioning',
      'Category creation',
      'Founder positioning',
      'Executive thought leadership',
      'Brand narrative development',
    ],
  },
  {
    title: 'Demand Generation',
    blurb:
      'Create pipeline through campaigns engineered for the buying journey.',
    services: [
      'B2B demand-generation strategy',
      'Account-based marketing',
      'Integrated campaign planning',
      'LinkedIn advertising',
      'Paid-search strategy',
      'Content-led demand generation',
      'Lead-nurturing programmes',
      'Retargeting',
      'Campaign optimisation',
    ],
  },
  {
    title: 'AI Search, AEO and GEO',
    blurb:
      'Become the answer across search engines and AI answer platforms.',
    services: [
      'Search visibility audits',
      'SEO strategy',
      'Answer Engine Optimisation',
      'Generative Engine Optimisation',
      'AI-search content architecture',
      'Entity and topic-authority development',
      'Structured answer content',
      'Expert-led content programmes',
      'AI-platform visibility monitoring',
    ],
  },
  {
    title: 'Marketing Analytics',
    blurb: 'Connect marketing activity to pipeline, revenue and growth.',
    services: [
      'Marketing KPI frameworks',
      'Campaign analytics',
      'Customer journey analysis',
      'Funnel reporting',
      'Attribution strategy',
      'Customer acquisition analysis',
      'Pipeline and revenue reporting',
      'Executive dashboards',
      'Performance optimisation',
    ],
  },
  {
    title: 'Marketing Technology and Automation',
    blurb: 'Build the martech stack that runs your marketing at scale.',
    services: [
      'Marketing technology assessment',
      'CRM and marketing-automation strategy',
      'Lead lifecycle design',
      'Lead-scoring models',
      'Email automation',
      'Campaign workflow automation',
      'Customer-data integration',
      'AI-enabled marketing operations',
    ],
  },
  {
    title: 'Fractional Marketing Leadership',
    blurb:
      'Senior marketing leadership and operating muscle without the full-time hire.',
    services: [
      'Fractional CMO support',
      'Marketing team leadership',
      'Agency and vendor management',
      'Marketing operating cadence',
      'Budget planning and allocation',
      'Board and investor reporting',
    ],
  },
];

export type EngagementType = { title: string; description: string };

export const engagementTypes: EngagementType[] = [
  {
    title: 'Advisory',
    description:
      'Strategic assessments, workshops, roadmaps and leadership guidance.',
  },
  {
    title: 'Consulting Projects',
    description:
      'Defined transformation initiatives with specific objectives, deliverables and outcomes.',
  },
  {
    title: 'Pilot Programmes',
    description:
      'Focused AI or marketing pilots designed to validate business value before wider investment.',
  },
  {
    title: 'Build and Implement',
    description:
      'End-to-end design, development and implementation of AI, technology or marketing systems.',
  },
  {
    title: 'Fractional Leadership',
    description:
      'Ongoing senior AI, product or marketing leadership for organisations building internal capabilities.',
  },
  {
    title: 'Managed Transformation',
    description:
      'Continuous implementation, measurement, optimisation and capability development.',
  },
];

export type StarterPackage = {
  title: string;
  description: string;
  outputs: string[];
};

export const starterPackages: StarterPackage[] = [
  {
    title: 'AI Opportunity Sprint',
    description: 'Identify the most valuable AI opportunities.',
    outputs: [
      'AI-readiness assessment',
      'Prioritised use cases',
      'Value-complexity analysis',
      '90-day action plan',
    ],
  },
  {
    title: 'Marketing Growth Diagnostic',
    description: 'Evaluate complete marketing system.',
    outputs: [
      'Positioning assessment',
      'Customer journey review',
      'Channel analysis',
      'Growth roadmap',
    ],
  },
  {
    title: 'AI Search Visibility Audit',
    description:
      'Understand discoverability across search and AI platforms.',
    outputs: [
      'Visibility assessment',
      'Competitor comparison',
      'AEO/GEO opportunities',
      'Content roadmap',
    ],
  },
  {
    title: 'AI Workflow Pilot',
    description: 'Design and implement one practical AI workflow.',
    outputs: [
      'Workflow redesign',
      'Working pilot',
      'Human review controls',
      'Scale recommendations',
    ],
  },
];

export type Industry = { name: string; icon: string; focus: string };

export const industries: Industry[] = [
  {
    name: 'Technology and SaaS',
    icon:
      'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
    focus: 'Shorten release cycles with quality intelligence and ship AI-native features with confidence.',
  },
  {
    name: 'Industrial and manufacturing',
    icon: 'M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3v18',
    focus: 'Modernise operations with data-driven workflows, predictive maintenance and connected systems.',
  },
  {
    name: 'Healthcare and life sciences',
    icon:
      'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
    focus: 'Automate documentation and knowledge work while keeping governance and compliance intact.',
  },
  {
    name: 'Financial services',
    icon:
      'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    focus: 'Turn regulated data into decision-ready intelligence with auditable, governed AI systems.',
  },
  {
    name: 'Professional services',
    icon:
      'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z',
    focus: 'Productise expertise with copilots, proposal automation and scalable knowledge systems.',
  },
  {
    name: 'Retail and consumer businesses',
    icon:
      'M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
    focus: 'Personalise customer journeys and connect demand generation to measurable revenue.',
  },
  {
    name: 'Logistics and operations',
    icon:
      'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
    focus: 'Build operational visibility with real-time dashboards and intelligent workflow automation.',
  },
  {
    name: 'Media, entertainment and sports',
    icon:
      'M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621-.504-1.125-1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m0 0h-1.5',
    focus: 'Turn audience passion into structured engagement and measurable fan signals.',
  },
  {
    name: 'Public affairs and political organisations',
    icon:
      'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z',
    focus: 'Understand public sentiment, track issues and read narratives as they move in real time.',
  },
  {
    name: 'Start-ups and growth-stage companies',
    icon:
      'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    focus: 'Build the first growth engine, position the category and ship product-grade MVPs fast.',
  },
];

export type BuildCapability = { title: string; items: string[] };

export const buildCapabilities: BuildCapability[] = [
  {
    title: 'AI Applications',
    items: [
      'AI assistants',
      'Enterprise copilots',
      'Intelligent workflow systems',
      'Recommendation engines',
      'Classification systems',
      'Predictive models',
    ],
  },
  {
    title: 'SaaS Platforms',
    items: [
      'Multi-tenant SaaS applications',
      'Workflow platforms',
      'Customer portals',
      'Internal business applications',
      'Subscription platforms',
      'API-based products',
    ],
  },
  {
    title: 'Data and Analytics',
    items: [
      'Data pipelines',
      'Analytics platforms',
      'Business intelligence dashboards',
      'Decision-support systems',
      'Forecasting models',
      'Real-time operational intelligence',
    ],
  },
  {
    title: 'Product Engineering',
    items: [
      'Product discovery',
      'User-experience design',
      'Cloud architecture',
      'API development',
      'Systems integration',
      'DevOps and observability',
      'Quality engineering',
    ],
  },
];

export const buildProcessSteps = [
  'Discover the problem',
  'Validate the opportunity',
  'Design the solution',
  'Build the product',
  'Test and operationalise',
  'Measure and scale',
];

export const integratedSolutions = [
  'AI-powered marketing operating models',
  'Intelligent customer research',
  'Automated content workflows',
  'AI-assisted account intelligence',
  'Personalised campaign systems',
  'Marketing and sales copilots',
  'AI-powered lead qualification',
  'Customer journey automation',
  'Predictive campaign analytics',
  'AI search visibility',
  'Executive growth dashboards',
];

export const integratedSuitableFor = [
  'Companies entering new markets',
  'Businesses launching new products',
  'Organisations modernising marketing',
  'Enterprises adopting AI',
  'Start-ups building their first growth engine',
  'B2B companies improving pipeline generation',
  'Founders building category authority',
];

export type WorkStep = { number: string; title: string; description: string };

export const workSteps: WorkStep[] = [
  {
    number: '01',
    title: 'Diagnose',
    description:
      'Understand the business problem, existing processes, customer journey, technology and data environment.',
  },
  {
    number: '02',
    title: 'Prioritise',
    description:
      'Identify opportunities based on value, feasibility, urgency, risk and implementation effort.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Create the operating model, solution architecture, customer experience or growth programme.',
  },
  {
    number: '04',
    title: 'Implement',
    description:
      'Build the workflow, platform, campaign, dashboard or AI solution.',
  },
  {
    number: '05',
    title: 'Enable',
    description:
      'Train teams, document processes and establish internal ownership.',
  },
  {
    number: '06',
    title: 'Optimise',
    description:
      'Measure results, learn from real usage and scale what creates value.',
  },
];

export type Principle = { title: string; description: string };

export const principles: Principle[] = [
  {
    title: 'Outcomes Before Tools',
    description:
      'We start with the business outcome, not the technology. Every engagement is anchored to a measurable result.',
  },
  {
    title: 'Practical Intelligence',
    description:
      'AI should be applied where it creates real value. We focus on use cases that solve actual problems, not theoretical ones.',
  },
  {
    title: 'Human Accountability',
    description:
      'Automation amplifies intent. We ensure humans remain in control of decisions, strategy and governance.',
  },
  {
    title: 'Product-Grade Execution',
    description:
      'Whether it is an internal tool or a customer-facing platform, we build with the rigor of a product team.',
  },
  {
    title: 'Measurable Growth',
    description:
      'We track what matters. Every system we build is tied to metrics that reflect genuine business progress.',
  },
  {
    title: 'Knowledge Transfer',
    description:
      'We leave teams stronger than we found them. Capability building is embedded in every engagement.',
  },
];

export type Insight = { title: string; date: string; category: string };

export const insights: Insight[] = [
  { title: 'From AI Experiments to Business Value', date: 'Aug 2026', category: 'AI Strategy' },
  { title: 'Where AI Agents Can Create Immediate Impact', date: 'Aug 2026', category: 'Agentic AI' },
  { title: 'How to Prioritise Enterprise AI Use Cases', date: 'Jul 2026', category: 'AI Strategy' },
  { title: 'From SEO to AEO: How Brands Become the Answer', date: 'Jul 2026', category: 'AEO & GEO' },
  { title: 'Building a Marketing Function for the AI Era', date: 'Jun 2026', category: 'Marketing' },
  { title: 'Why Marketing Analytics Must Move Beyond Clicks', date: 'Jun 2026', category: 'Analytics' },
  { title: 'How AI Is Transforming B2B Demand Generation', date: 'May 2026', category: 'Demand Generation' },
  { title: 'Building Responsible AI Governance', date: 'May 2026', category: 'Governance' },
  { title: 'How Human and AI Teams Can Work Together', date: 'Apr 2026', category: 'AI Strategy' },
];
