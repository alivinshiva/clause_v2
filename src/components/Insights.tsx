"use client";

import { AnimateOnScroll } from './AnimateOnScroll';

export function Insights() {
  const articles = [
    'From AI Experiments to Business Value',
    'Where AI Agents Can Create Immediate Impact',
    'How to Prioritise Enterprise AI Use Cases',
    'From SEO to AEO: How Brands Become the Answer',
    'Building a Marketing Function for the AI Era',
    'Why Marketing Analytics Must Move Beyond Clicks',
    'How AI Is Transforming B2B Demand Generation',
    'Building Responsible AI Governance',
    'How Human and AI Teams Can Work Together',
  ];

  return (
    <section id="insights" className="w-full py-24 px-6 bg-clause-cloud dark:bg-clause-midnight">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight dark:text-clause-white">
              Ideas for an Intelligent Business Future
            </h2>
            <p className="mt-4 text-lg text-clause-steel max-w-2xl mx-auto">
              Clause Insights publishes practical perspectives across AI strategy,
              agentic AI, governance, automation, marketing transformation,
              AEO/GEO, and product innovation.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((title, index) => (
            <AnimateOnScroll key={title} direction="up" delay={index * 0.05}>
              <div className="rounded-xl p-6 bg-white dark:bg-clause-graphite border border-clause-steel/10 hover:shadow-lg transition-shadow h-full">
                <p className="text-sm text-clause-steel mb-3">Aug 2026</p>
                <h3 className="font-semibold text-clause-midnight dark:text-clause-white mb-4 leading-snug">
                  {title}
                </h3>
                <a
                  href="#"
                  className="text-sm font-medium text-clause-intelligence hover:underline"
                >
                  Read More →
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
