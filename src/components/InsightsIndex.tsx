'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { formatInsightDate, type InsightSummary } from '@/lib/insights';

export function InsightsIndex({
  articles,
  categories,
}: {
  articles: InsightSummary[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const visibleArticles = activeCategory === 'All'
    ? articles
    : articles.filter((article) => article.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter insights by topic">
        {categories.map((category) => {
          const active = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                active
                  ? 'border-clause-midnight bg-clause-midnight text-white'
                  : 'border-clause-midnight/12 bg-white text-clause-steel hover:border-clause-intelligence/35 hover:text-clause-midnight'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-9 grid gap-6 lg:grid-cols-3">
        {visibleArticles.map((article) => (
          <article key={article.slug} className="group flex min-h-full flex-col overflow-hidden rounded-[1.6rem] border border-clause-midnight/10 bg-white shadow-[0_18px_50px_rgba(11,18,36,.045)]">
            <Link href={`/insights/${article.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-[#07101f]">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/50 to-transparent" />
              {article.featured && <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07101f]/65 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/75 backdrop-blur-md">Featured</span>}
            </Link>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-clause-steel">
                <span className="text-clause-intelligence">{article.category}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={article.publishedAt}>{formatInsightDate(article.publishedAt)}</time>
                <span aria-hidden="true">·</span>
                <span>{article.readingTime}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.04em] text-clause-midnight">
                <Link href={`/insights/${article.slug}`} className="transition-colors hover:text-clause-intelligence">{article.title}</Link>
              </h3>
              <p className="mt-4 text-sm leading-6 text-clause-steel">{article.excerpt}</p>
              <Link href={`/insights/${article.slug}`} className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-clause-intelligence transition-all group-hover:gap-3">
                Read the perspective <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
