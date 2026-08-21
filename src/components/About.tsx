"use client";

import { AnimateOnScroll } from './AnimateOnScroll';

export function About() {
  const principles = [
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

  return (
    <section className="w-full py-24 px-6 bg-white dark:bg-clause-slate">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight dark:text-clause-white">
              Connected Thinking Across Products, Technology and Growth
            </h2>
            <p className="mt-4 text-lg text-clause-steel max-w-2xl mx-auto">
              Clause Holdings is a product and consulting company focused on
              building intelligent systems, digital platforms and modern growth
              capabilities.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, index) => (
            <AnimateOnScroll key={p.title} direction="up" delay={index * 0.1}>
              <div className="rounded-xl p-6 bg-clause-cloud dark:bg-clause-graphite border border-clause-steel/10 h-full">
                <h3 className="font-semibold text-clause-midnight dark:text-clause-white mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-clause-steel leading-relaxed">
                  {p.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
