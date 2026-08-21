'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimateOnScroll } from './AnimateOnScroll';

export function Products() {
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

  const products = [
    {
      name: 'TestArq',
      tagline: 'AI-Native Quality Intelligence',
      description:
        'TestArq helps organisations transform software quality from a reporting activity into an intelligent decision system.',
      capabilities: [
        'AI-assisted test design',
        'Requirements traceability',
        'Test coverage intelligence',
        'Risk and readiness visibility',
        'Jira / Azure DevOps / QTest integrations',
        'Enterprise governance',
      ],
      cta: 'Explore TestArq',
    },
    {
      name: 'ShowGrid',
      tagline: 'The Engagement Layer for Modern Fandom',
      description:
        'ShowGrid transforms fan creativity, opinions and participation into structured engagement and measurable audience signals.',
      capabilities: [
        'Grid Sports',
        'Grid Play',
        'Fanverse',
        'Community challenges',
        'Open ratings',
        'Fan engagement analytics',
      ],
      cta: 'Explore ShowGrid',
    },
    {
      name: 'Grid Pulse',
      tagline: 'Political Intelligence Through Public Signals',
      description:
        'Grid Pulse helps organise and interpret political conversations, public opinion and engagement signals.',
      capabilities: [
        'Political sentiment monitoring',
        'Public issue tracking',
        'Narrative intelligence',
        'Constituency and audience insights',
        'Engagement analytics',
        'Decision dashboards',
      ],
      cta: 'Explore Grid Pulse',
    },
  ];

  return (
    <section id="products" className="w-full py-24 px-6 bg-clause-cloud relative z-10">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight">
              Products Built Around Real-World Problems
            </h2>
            <p className="mt-4 text-lg text-clause-steel max-w-2xl mx-auto">
              Clause develops focused digital platforms across quality intelligence,
              consumer engagement and political insights.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <AnimateOnScroll
              key={product.name}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg bg-white ${
                  isExperimental ? 'glow-card border-clause-intelligence/20' : 'border-clause-steel/10'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-clause-intelligence flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-clause-midnight">
                      {product.name}
                    </h3>
                    <p className="text-sm text-clause-intelligence font-medium">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-clause-steel text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {product.capabilities.map((cap) => (
                    <li
                      key={cap}
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
                      {cap}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 rounded-lg bg-clause-intelligence text-white font-medium text-sm hover:bg-clause-intelligence/90 transition-all">
                  {product.cta}
                </button>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}