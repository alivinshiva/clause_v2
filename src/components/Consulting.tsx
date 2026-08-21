'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimateOnScroll } from './AnimateOnScroll';

const practices = [
  {
    title: 'AI Consulting',
    intro:
      'Move from AI experimentation to practical implementation. Identify valuable AI opportunities, redesign workflows and implement responsible AI solutions that create measurable value.',
    highlights: [
      'AI strategy and readiness',
      'Agentic AI and automation',
      'Generative AI solutions',
      'Responsible AI and governance',
    ],
    href: '/consulting/ai',
    dot: 'bg-clause-intelligence',
  },
  {
    title: 'Marketing Consulting',
    intro:
      'Build a modern marketing system for the AI era. Strengthen positioning, improve visibility, generate demand and connect marketing activity to measurable business growth.',
    highlights: [
      'Marketing and go-to-market strategy',
      'Brand and product positioning',
      'Demand generation',
      'AI search, AEO and GEO',
    ],
    href: '/consulting/marketing',
    dot: 'bg-clause-signal',
  },
];

export function Consulting() {
  const [isExperimental, setIsExperimental] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsExperimental(document.documentElement.getAttribute('data-theme') === 'experimental');
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="consulting"
      className="py-16 px-6 bg-[#F4F1FE] relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-clause-midnight mb-4">
              Consulting That Connects AI and Growth
            </h2>
            <p className="text-lg text-clause-steel max-w-2xl mx-auto">
              Two focused practices, one goal: turn intelligent capability into
              measurable business outcomes.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-8 lg:grid-cols-2">
          {practices.map((practice, index) => (
            <AnimateOnScroll
              key={practice.title}
              direction={index === 0 ? 'right' : 'left'}
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`flex flex-col rounded-2xl p-8 bg-clause-cloud transition-all duration-300 ${
                  isExperimental ? 'glow-card border border-clause-intelligence/20' : 'border border-clause-steel/10'
                }`}
              >
                <h3 className="text-xl font-semibold text-clause-midnight">
                  {practice.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-clause-steel">
                  {practice.intro}
                </p>
                <ul className="mt-5 grid flex-1 grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  {practice.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-clause-steel"
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${practice.dot}`}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={practice.href}
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-clause-intelligence transition-all hover:gap-2.5"
                >
                  Explore {practice.title} <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.2}>
          <div className="text-center mt-12">
            <Link
              href="/consulting"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-clause-intelligence transition-all hover:gap-2.5"
            >
              See how we engage <span aria-hidden="true">→</span>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
