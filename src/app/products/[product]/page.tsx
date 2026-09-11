import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ButtonLink } from '@/components/ui';
import { products } from '@/lib/data';

type Props = { params: Promise<{ product: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ product: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product } = await params;
  const item = products.find((p) => p.slug === product);
  if (!item) return { title: 'Product' };
  return { title: item.name, description: item.tagline };
}

const accentColor: Record<string, string> = {
  indigo: '#5757E8',
  cyan: '#22B8D6',
  amber: '#F2B84B',
};

export default async function ProductPage({ params }: Props) {
  const { product } = await params;
  const item = products.find((p) => p.slug === product);
  if (!item) notFound();

  const others = products.filter((p) => p.slug !== item.slug);

  return (
    <>
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #0B1224 0%, #18233D 55%, #172E4F 100%)',
          }}
        />
        <div
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-clause-intelligence/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-36 lg:pb-24 lg:pt-44">
          <Link
            href="/products"
            className="text-sm font-medium text-clause-cloud/70 hover:text-white transition-colors"
          >
            ← All products
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-clause-signal">
            Clause Product
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {item.name}
          </h1>
          <p className="mt-3 text-base font-medium uppercase tracking-[0.16em] text-clause-signal/90">
            {item.category}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-clause-cloud/80">
            {item.tagline}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-clause-cloud/60">
            {item.description}
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="brand" withArrow>
              Talk to us
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-clause-cloud py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight">
              What {item.name} delivers
            </h2>
            <p className="mt-4 text-lg text-clause-steel max-w-2xl mx-auto">
              Built product-grade: structured, governed and designed for real-world adoption.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {item.capabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-2xl border border-clause-steel/10 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span
                  className="block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: accentColor[item.accent] }}
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-base font-semibold tracking-tight text-clause-midnight">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-clause-steel">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-clause-midnight sm:text-3xl">
            See how {item.name} fits your context
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-clause-steel">
            Every engagement starts with the business problem. Tell us what you
            are trying to improve and we will map the fastest path to value.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contact" withArrow>
              Start a conversation
            </ButtonLink>
            {others.map((other) => (
              <ButtonLink key={other.slug} href={`/products/${other.slug}`} variant="secondary">
                View {other.name}
              </ButtonLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
