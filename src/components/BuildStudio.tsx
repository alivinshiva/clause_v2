"use client";

import { AnimateOnScroll } from './AnimateOnScroll';

const capabilities = [
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

const processSteps = [
  'Discover the problem',
  'Validate the opportunity',
  'Design the solution',
  'Build the product',
  'Test and operationalise',
  'Measure and scale',
];

export function BuildStudio() {
  return (
    <section id="build-studio" className="w-full py-24 px-6 bg-clause-white relative z-10">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight">
              From Business Problem to Production-Ready Product
            </h2>
            <p className="mt-4 text-lg text-clause-steel max-w-2xl mx-auto">
              Clause Build Studio designs and develops custom digital solutions for
              organisations with specialised business requirements.
            </p>
            <p className="mt-4 text-clause-steel max-w-3xl mx-auto leading-relaxed">
              We combine product strategy, AI, software engineering, analytics and
              user experience to create scalable systems designed for real-world
              adoption.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {capabilities.map((cap, index) => (
            <AnimateOnScroll key={cap.title} direction="up" delay={index * 0.1}>
              <div className="rounded-xl p-6 bg-clause-cloud border border-clause-steel/10 h-full">
                <h3 className="font-semibold text-clause-intelligence mb-4">{cap.title}</h3>
                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-clause-steel"
                    >
                      <svg
                        className="w-4 h-4 mt-0.5 text-clause-intelligence shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll direction="up">
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-clause-midnight text-center mb-8">
              Our Build Process
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 px-5 py-3 rounded-lg bg-clause-cloud border border-clause-steel/10"
                >
                  <span className="w-8 h-8 rounded-full bg-clause-intelligence text-white font-semibold text-sm flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-sm text-clause-steel">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up">
          <div className="text-center">
            <button className="px-8 py-3 rounded-lg bg-clause-intelligence text-white font-semibold text-sm hover:bg-clause-intelligence/90 transition-all">
              Discuss a Custom Build
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}