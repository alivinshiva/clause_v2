"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimateOnScroll } from './AnimateOnScroll';
import { industries } from '@/lib/data';

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? industries[activeIndex] : null;
  const hue = activeIndex !== null ? (activeIndex * 47) % 360 : 243;

  return (
    <section id="industries" className="w-full py-16 px-6 bg-[#EAF9F4]">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-clause-midnight mb-4">
              Expertise That Adapts to the Business Context
            </h2>
            <p className="text-clause-steel max-w-2xl mx-auto">
              Hover over a sector to see how Clause supports it.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] items-start mb-12">
          {/* Industry boxes */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {industries.map((industry, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={industry.name}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group flex flex-col items-center text-center rounded-xl p-4 bg-white border transition-all duration-300 cursor-pointer h-full ${
                      isActive
                        ? 'border-clause-intelligence shadow-lg shadow-clause-intelligence/15 -translate-y-0.5'
                        : 'border-clause-steel/10 hover:border-clause-intelligence/40 hover:shadow-md'
                    }`}
                  >
                    <span
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        isActive
                          ? 'bg-clause-intelligence text-white'
                          : 'bg-clause-intelligence/10 text-clause-intelligence group-hover:bg-clause-intelligence group-hover:text-white'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={industry.icon} />
                      </svg>
                    </span>
                    <span className="mt-3 text-xs sm:text-sm font-medium text-clause-midnight leading-tight">
                      {industry.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </AnimateOnScroll>

          {/* Preview panel */}
          <AnimateOnScroll direction="left" delay={0.2} className="hidden lg:block sticky top-28">
            <div
              className="relative min-h-[420px] rounded-2xl border border-clause-steel/10 overflow-hidden"
              style={{
                background: `linear-gradient(150deg, hsl(${hue} 75% 96%) 0%, hsl(${(hue + 45) % 360} 80% 92%) 100%)`,
                transition: 'background 500ms ease',
              }}
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                style={{ background: `hsl(${hue} 80% 70%)`, transition: 'background 500ms ease' }}
              />
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="relative z-10 flex flex-col h-full min-h-[420px] p-8"
                  >
                    <span
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, hsl(${hue} 70% 55%), hsl(${(hue + 40) % 360} 70% 48%))`,
                        transition: 'background 500ms ease',
                      }}
                    >
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={active.icon} />
                      </svg>
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-clause-midnight leading-snug">
                      {active.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-clause-graphite flex-1">
                      {active.focus}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-clause-intelligence transition-all hover:gap-2.5"
                    >
                      Talk to us about {active.name.split(' ')[0].toLowerCase()}{' '}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative z-10 flex flex-col items-center justify-center h-full min-h-[420px] p-8 text-center"
                  >
                    <span className="w-14 h-14 rounded-xl bg-clause-intelligence/10 text-clause-intelligence flex items-center justify-center">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    </span>
                    <p className="mt-6 text-sm text-clause-steel max-w-[220px]">
                      Hover over an industry to see how Clause creates value in that context.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll direction="up">
          <div className="text-center">
            <Link
              href="/industries"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-clause-intelligence text-white font-semibold text-sm hover:bg-clause-intelligence/90 transition-all"
            >
              See how we support your industry <span aria-hidden="true">→</span>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
