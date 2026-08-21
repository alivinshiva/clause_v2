'use client';

import Link from 'next/link';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Carousel, Card, type CarouselCard } from '@/components/ui/apple-cards-carousel';
import { products } from '@/lib/data';

const gradients: Record<string, string> = {
  indigo: 'linear-gradient(135deg, #8E97DB 0%, #B39DDB 100%)',
  cyan: 'linear-gradient(135deg, #86C5D8 0%, #93A8DC 100%)',
  amber: 'linear-gradient(135deg, #E3C08F 0%, #DFA093 100%)',
};

export function Products() {
  const cards: CarouselCard[] = products.map((product) => ({
    category: product.category,
    title: product.name,
    gradient: gradients[product.accent] ?? gradients.indigo,
    tagline: product.tagline,
    highlights: product.capabilities.slice(0, 3).map((cap) => cap.title),
    href: `/products/${product.slug}`,
    ctaLabel: `Explore ${product.name}`,
    content: (
      <div>
        <p className="text-lg font-medium text-clause-midnight leading-relaxed">
          {product.tagline}
        </p>
        <p className="mt-4 text-clause-steel leading-relaxed">
          {product.description}
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {product.capabilities.map((cap) => (
            <li
              key={cap.title}
              className="flex items-start gap-2.5 rounded-xl border border-clause-steel/10 bg-[#F7F9FC] p-4"
            >
              <svg
                className="w-4 h-4 mt-0.5 text-clause-intelligence shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-sm font-medium text-clause-midnight">
                  {cap.title}
                </p>
                <p className="text-xs text-clause-steel mt-1 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  const items = cards.map((card, index) => <Card key={card.title} card={card} index={index} />);

  return (
    <section id="products" className="w-full py-16 px-6 bg-[#EAF8FB] relative z-10">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight">
              Products Built Around Real-World Problems
            </h2>
            <p className="mt-4 text-lg text-clause-steel max-w-2xl mx-auto">
              Clause develops focused digital platforms across quality intelligence,
              consumer engagement and political insights.
            </p>
          </div>
        </AnimateOnScroll>

        <Carousel items={items} />

        <AnimateOnScroll direction="up">
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-clause-intelligence transition-all hover:gap-2.5"
            >
              View all products <span aria-hidden="true">→</span>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
