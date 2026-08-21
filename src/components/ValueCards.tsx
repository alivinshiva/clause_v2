"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "./AnimateOnScroll";

const cards = [
  {
    title: "Products",
    description:
      "We build specialised digital platforms that transform complex information into useful intelligence, better experiences and clearer decisions.",
    cta: "Explore Our Products →",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Consulting",
    description:
      "We help organisations adopt AI, modernise marketing and create practical transformation roadmaps connected to measurable business outcomes.",
    cta: "Explore Clause Consulting →",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3v18" />
      </svg>
    ),
  },
  {
    title: "Build Studio",
    description:
      "We design and develop custom AI applications, SaaS platforms, analytics systems and intelligent workflows for companies with unique business requirements.",
    cta: "Discuss a Custom Build →",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

export default function ValueCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section className="w-full bg-clause-white py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-semibold text-clause-midnight text-center mb-4">
            Three Ways We Create Value
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <p className="text-clause-steel text-center mb-16 max-w-2xl mx-auto">
            From products to consulting to custom builds, we deliver intelligence at every level.
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <AnimateOnScroll key={card.title} delay={index * 0.1}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.02 }}
                className={`
                  group relative bg-white rounded-2xl p-8 
                  transition-all duration-300 ease-out cursor-pointer
                  ${isExperimental 
                    ? 'glow-card border border-clause-intelligence/20'
                    : 'border border-clause-cloud shadow-md shadow-black/5 hover:shadow-lg'
                  }
                  ${hoveredIndex === index 
                    ? isExperimental
                      ? "border-clause-intelligence/40 -translate-y-1"
                      : "shadow-xl shadow-clause-intelligence/10 -translate-y-1 border-clause-intelligence/30"
                    : ""
                  }
                `}
              >
                <div className="w-14 h-14 rounded-xl bg-clause-intelligence/10 flex items-center justify-center text-clause-intelligence mb-6 transition-colors duration-300 group-hover:bg-clause-intelligence group-hover:text-white">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-clause-midnight mb-3">
                  {card.title}
                </h3>
                <p className="text-clause-steel leading-relaxed mb-6">
                  {card.description}
                </p>
                <span className="inline-flex items-center text-clause-intelligence font-medium text-sm transition-all duration-300 group-hover:gap-2">
                  {card.cta}
                </span>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}