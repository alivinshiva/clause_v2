import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ServiceCTA } from '@/components/ServiceShell';
import { products } from '@/lib/data';

type Props = { params: Promise<{ product: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ product: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product } = await params;
  const item = products.find((candidate) => candidate.slug === product);
  if (!item) return { title: 'Product' };

  return {
    title: item.name,
    description: item.tagline,
    openGraph: {
      title: `${item.name} — ${item.category}`,
      description: item.tagline,
      images: [{ url: item.image, alt: item.imageAlt }],
    },
  };
}

const accentStyles = {
  indigo: {
    dot: 'bg-clause-intelligence',
    text: 'text-clause-signal',
    pale: 'bg-indigo-50',
    border: 'border-clause-intelligence/30',
  },
  cyan: {
    dot: 'bg-clause-signal',
    text: 'text-clause-signal',
    pale: 'bg-cyan-50',
    border: 'border-clause-signal/35',
  },
  amber: {
    dot: 'bg-amber-400',
    text: 'text-amber-300',
    pale: 'bg-amber-50',
    border: 'border-amber-400/35',
  },
};

export default async function ProductPage({ params }: Props) {
  const { product } = await params;
  const item = products.find((candidate) => candidate.slug === product);
  if (!item) notFound();

  const styles = accentStyles[item.accent];
  const others = products.filter((candidate) => candidate.slug !== item.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-[#07101f] px-6 pb-16 pt-32 text-white lg:pb-24 lg:pt-40">
        <div className="hero-noise absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-7xl">
          <Link href="/products" className="inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white">
            <span aria-hidden="true">←</span> All products
          </Link>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.17em]">
                <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
                <span className={styles.text}>{item.status}</span>
              </div>
              <h1 className="mt-7 text-[clamp(4rem,8vw,7rem)] font-semibold leading-[0.88] tracking-[-0.075em]">{item.name}</h1>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">{item.category}</p>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">{item.tagline}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/contact" className="button-primary-light">Discuss the concept <span aria-hidden="true">↗</span></Link>
                <a href="#how-it-works" className="button-quiet-dark">See how it works <span aria-hidden="true">↓</span></a>
              </div>
            </div>

            <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_35px_100px_rgba(0,0,0,.35)] sm:min-h-[500px]">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07101f]/85 to-transparent p-6 pt-20">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">Designed for</p>
                <p className="mt-2 text-sm text-white/85">{item.audience.replace('For ', '')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">
          <article>
            <p className="section-label">The problem</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] text-clause-midnight sm:text-5xl">Too much activity. Not enough useful clarity.</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-clause-steel">{item.problem}</p>
          </article>
          <article className={`rounded-[2rem] border p-8 sm:p-10 ${styles.pale} ${styles.border}`}>
            <p className="section-label">The intended shift</p>
            <p className="mt-8 text-2xl font-semibold leading-snug tracking-[-0.035em] text-clause-midnight sm:text-3xl">{item.outcome}</p>
            <div className="mt-12 border-t border-clause-midnight/10 pt-5 text-xs uppercase tracking-[0.15em] text-clause-steel">Concept direction · subject to validation</div>
          </article>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 bg-clause-cloud px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-label">How it works</p>
            <h2 className="section-title mt-5">From raw input to a clearer next move.</h2>
          </div>

          <ol className="mt-14 grid overflow-hidden rounded-[2rem] border border-clause-midnight/10 bg-clause-midnight/10 md:grid-cols-4">
            {item.workflow.map((step, index) => (
              <li key={step} className="relative min-h-60 bg-white p-7 lg:p-8">
                <span className={`block h-2 w-2 rounded-full ${styles.dot}`} />
                <span className="mt-8 block text-xs font-medium text-clause-steel">0{index + 1}</span>
                <h3 className="mt-4 max-w-[12rem] text-xl font-semibold leading-tight tracking-[-0.035em] text-clause-midnight">{step}</h3>
                {index < item.workflow.length - 1 && <span className="absolute right-5 top-7 hidden text-clause-midnight/25 md:block" aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <p className="section-label">Product capabilities</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] text-clause-midnight sm:text-5xl">The system behind the idea.</h2>
              <p className="mt-6 max-w-md text-base leading-7 text-clause-steel">{item.description}</p>
            </div>
            <div className="border-t border-clause-midnight/12">
              {item.capabilities.map((capability, index) => (
                <article key={capability.title} className="grid gap-4 border-b border-clause-midnight/12 py-7 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-7">
                  <span className="text-xs font-medium text-clause-intelligence">0{index + 1}</span>
                  <h3 className="font-semibold leading-6 text-clause-midnight">{capability.title}</h3>
                  <p className="text-sm leading-6 text-clause-steel">{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07101f] px-6 py-24 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-24">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-clause-signal">
              <span className="h-px w-8 bg-clause-signal" /> Current shape
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">A product direction, shared honestly.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-white/58">
              {item.name} is a Clause concept in development, not a claim of finished market traction. We are using conversations, prototypes and focused validation to shape where it creates the most value.
            </p>
            <Link href="/contact" className="button-primary-light mt-8">Help shape {item.name} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">Explore another direction</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {others.map((other) => (
              <Link key={other.slug} href={`/products/${other.slug}`} className="group flex items-center justify-between rounded-2xl border border-clause-midnight/10 bg-clause-cloud p-6 transition-colors hover:border-clause-intelligence/30">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-clause-steel">{other.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-clause-midnight">{other.name}</h3>
                </div>
                <span className="text-xl text-clause-intelligence transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        eyebrow={`${item.name} conversation`}
        title="Does this problem look familiar?"
        description="Tell us how it shows up in your organisation. We will share where the concept is heading and explore whether there is a useful fit."
        label="Start the conversation"
      />
    </>
  );
}
