'use client';

import Link from 'next/link';
import { AnimateOnScroll } from './AnimateOnScroll';
import { insights } from '@/lib/data';

export function Insights() {
  return (
    <section id="insights" className="w-full py-16 px-6 bg-[#F3F0FC]">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight">
              Ideas for an Intelligent Business Future
            </h2>
            <p className="mt-4 text-lg text-clause-steel max-w-2xl mx-auto">
              Clause Insights publishes practical perspectives across AI strategy,
              agentic AI, governance, automation, marketing transformation,
              AEO/GEO, and product innovation.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-3">
          {insights.slice(0, 3).map((article, index) => (
            <AnimateOnScroll key={article.title} direction="up" delay={index * 0.05}>
              <Link
                href="/insights"
                className="block rounded-xl p-6 bg-white border border-clause-steel/10 hover:shadow-lg hover:-translate-y-0.5 transition-all h-full"
              >
                <p className="text-sm text-clause-steel mb-3">{article.date} · {article.category}</p>
                <h3 className="font-semibold text-clause-midnight mb-4 leading-snug">
                  {article.title}
                </h3>
                <span className="text-sm font-medium text-clause-intelligence">
                  Read More →
                </span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll direction="up">
          <div className="text-center mt-12">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-clause-intelligence transition-all hover:gap-2.5"
            >
              View all insights <span aria-hidden="true">→</span>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
