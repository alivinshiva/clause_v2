"use client";

import Link from 'next/link';
import { AnimateOnScroll } from './AnimateOnScroll';
import { buildCapabilities } from '@/lib/data';

export function BuildStudio() {
  return (
    <section id="build-studio" className="w-full py-16 px-6 bg-[#EDF3FD] relative z-10">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight">
              From Business Problem to Production-Ready Product
            </h2>
            <p className="mt-4 text-lg text-clause-steel max-w-2xl mx-auto">
              Clause Build Studio designs and develops custom digital solutions for
              organisations with specialised business requirements — combining product
              strategy, AI, engineering, analytics and user experience.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {buildCapabilities.map((cap, index) => (
            <AnimateOnScroll key={cap.title} direction="up" delay={index * 0.1}>
              <div className="rounded-xl p-6 bg-clause-cloud border border-clause-steel/10 h-full text-center hover:border-clause-intelligence/30 transition-colors duration-300">
                <h3 className="font-semibold text-clause-intelligence">{cap.title}</h3>
                <p className="mt-2 text-sm text-clause-steel">
                  {cap.items.length} capability areas
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll direction="up">
          <div className="text-center">
            <Link
              href="/build-studio"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-clause-intelligence text-white font-semibold text-sm hover:bg-clause-intelligence/90 transition-all"
            >
              Explore Build Studio <span aria-hidden="true">→</span>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
