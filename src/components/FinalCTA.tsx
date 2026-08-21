'use client';

import Link from 'next/link';
import { AnimateOnScroll } from './AnimateOnScroll';

export function FinalCTA() {
  return (
    <section className="w-full py-16 px-6 bg-[#FDF4E7]">
      <AnimateOnScroll direction="up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight md:text-4xl">
            What are you trying to build, improve, automate or grow?
          </h2>
          <p className="mt-4 text-lg text-clause-steel">
            You do not need to begin with a specific technology, platform or
            consulting service. Every engagement starts with the business problem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-clause-intelligence text-white rounded-lg font-medium hover:bg-clause-intelligence/90 transition-all"
            >
              Start a Conversation <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-clause-midnight/20 text-clause-midnight rounded-lg font-medium hover:border-clause-intelligence/40 hover:text-clause-intelligence transition-all"
            >
              Explore Our Capabilities
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
