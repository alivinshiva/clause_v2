'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimateOnScroll } from './AnimateOnScroll';

const aiConsultingServices = [
  'AI Strategy and Readiness',
  'Agentic AI and Automation',
  'Generative AI Solutions',
  'Data and Knowledge Intelligence',
  'Responsible AI and Governance',
  'AI Training and Adoption',
];

const marketingConsultingServices = [
  'Marketing and Go-to-Market Strategy',
  'Brand and Product Positioning',
  'Demand Generation',
  'AI Search, AEO and GEO',
  'Marketing Analytics',
  'Marketing Technology and Automation',
  'Fractional Marketing Leadership',
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
      className="py-20 px-6 bg-clause-white relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-clause-midnight mb-4">
              AI Consulting
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="text-xl text-clause-steel mb-4">
              Move from AI experimentation to practical implementation.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-lg text-clause-steel mb-8 max-w-3xl">
              Clause helps organisations identify valuable AI opportunities, redesign workflows and implement responsible AI solutions that create measurable business value.
            </p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {aiConsultingServices.map((service, index) => (
              <AnimateOnScroll key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-lg transition-all duration-300 bg-clause-cloud ${
                    isExperimental ? 'glow-card border border-clause-intelligence/20' : 'border border-clause-intelligence/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="w-2 h-2 rounded-full bg-clause-intelligence"
                    />
                    <span className="text-clause-midnight font-medium">{service}</span>
                  </div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
          
          <AnimateOnScroll delay={0.3}>
            <button className="px-6 py-3 bg-clause-intelligence text-white rounded-lg font-medium hover:bg-clause-intelligence/90 transition-all">
              Explore AI Consulting
            </button>
          </AnimateOnScroll>
        </div>
        
        <div>
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-clause-midnight mb-4">
              Marketing Consulting
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="text-xl text-clause-steel mb-4">
              Build a modern marketing system for the AI era.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-lg text-clause-steel mb-8 max-w-3xl">
              Clause helps companies strengthen their positioning, improve market visibility, generate demand and connect marketing activity to measurable business growth.
            </p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {marketingConsultingServices.map((service, index) => (
              <AnimateOnScroll key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-lg transition-all duration-300 bg-clause-cloud ${
                    isExperimental ? 'glow-card border border-clause-signal/20' : 'border border-clause-signal/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="w-2 h-2 rounded-full bg-clause-signal"
                    />
                    <span className="text-clause-midnight font-medium">{service}</span>
                  </div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
          
          <AnimateOnScroll delay={0.3}>
            <button className="px-6 py-3 bg-clause-signal text-white rounded-lg font-medium hover:bg-clause-signal/90 transition-all">
              Explore Marketing Consulting
            </button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}