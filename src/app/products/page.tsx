import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, ButtonLink } from '@/components/ui';
import { products } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Clause develops focused digital platforms across quality intelligence, consumer engagement and political insights.',
};

const accentDot: Record<string, string> = {
  indigo: 'bg-clause-intelligence',
  cyan: 'bg-clause-signal',
  amber: 'bg-amber-400',
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clause Products"
        title="Products Built Around Real-World Problems"
        description="Focused digital platforms that transform complex information into useful intelligence, better experiences and clearer decisions."
      />

      <section className="bg-clause-cloud py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col rounded-2xl p-8 bg-white border border-clause-steel/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-clause-intelligence flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {product.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h2 className="font-semibold text-clause-midnight">{product.name}</h2>
                  <p className="text-sm text-clause-intelligence font-medium">
                    {product.category}
                  </p>
                </div>
              </div>

              <p className="text-clause-steel text-sm leading-relaxed mb-6">
                {product.tagline}
              </p>

              <ul className="space-y-2 mb-8">
                {product.capabilities.slice(0, 4).map((cap) => (
                  <li key={cap.title} className="flex items-start gap-2 text-sm text-clause-steel">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accentDot[product.accent]}`}
                      aria-hidden="true"
                    />
                    {cap.title}
                  </li>
                ))}
              </ul>

              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-clause-intelligence transition-all group-hover:gap-2.5">
                Explore {product.name} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-clause-midnight sm:text-3xl">
            See how our products fit your context
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-clause-steel">
            Every engagement starts with the business problem. Tell us what you
            are trying to improve and we will map the fastest path to value.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" withArrow>
              Start a conversation
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
