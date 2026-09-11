import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceCTA } from '@/components/ServiceShell';
import { products } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Digital Product Concepts',
  description:
    'Explore Clause product concepts across quality intelligence, audience engagement and public-signal analysis.',
};

const accentStyles = {
  indigo: { line: 'bg-clause-intelligence', text: 'text-clause-intelligence', glow: 'from-clause-intelligence/30' },
  cyan: { line: 'bg-clause-signal', text: 'text-cyan-700', glow: 'from-clause-signal/30' },
  amber: { line: 'bg-amber-400', text: 'text-amber-700', glow: 'from-amber-400/30' },
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07101f] px-6 pb-20 pt-36 text-white lg:pb-28 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(87,87,232,.22),transparent_34%)]" />
        <div className="hero-noise absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-clause-signal">
            <span className="h-px w-8 bg-clause-signal" /> Clause products
          </p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <h1 className="max-w-5xl text-[clamp(3.5rem,7.5vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-balance">
              Ideas made tangible.
            </h1>
            <div className="lg:pb-2">
              <p className="max-w-lg text-lg leading-8 text-white/60">
                We develop focused product concepts around problems we believe deserve a better system — then turn the strongest ideas into useful software.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.16em] text-white/35">Three concepts · openly in development</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-clause-cloud px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-8 lg:space-y-12">
          {products.map((product, index) => {
            const styles = accentStyles[product.accent];
            return (
              <article key={product.slug} className="group overflow-hidden rounded-[2rem] border border-clause-midnight/10 bg-white shadow-[0_25px_70px_rgba(11,18,36,.06)]">
                <div className="grid lg:grid-cols-2">
                  <Link href={`/products/${product.slug}`} className={`relative min-h-[330px] overflow-hidden bg-[#07101f] lg:min-h-[570px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${styles.glow} via-transparent to-transparent opacity-50`} />
                    <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#07101f]/65 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                      0{index + 1} / 03
                    </span>
                  </Link>

                  <div className="flex min-h-[500px] flex-col p-7 sm:p-10 lg:p-14">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <span className={`flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] ${styles.text}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${styles.line}`} /> {product.status}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-clause-steel">{product.audience}</span>
                    </div>
                    <div className="my-auto py-12">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clause-steel">{product.category}</p>
                      <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-clause-midnight sm:text-6xl">{product.name}</h2>
                      <p className="mt-6 max-w-xl text-lg leading-8 text-clause-steel">{product.tagline}</p>
                    </div>
                    <div className="border-t border-clause-midnight/10 pt-6">
                      <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-clause-midnight transition-all group-hover:gap-3 group-hover:text-clause-intelligence">
                        Explore the concept <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-24">
          <div>
            <p className="section-label">Our product lens</p>
            <h2 className="section-title mt-5">Specific problem. Clear behaviour. Useful signal.</h2>
          </div>
          <div className="border-t border-clause-midnight/12">
            {[
              ['01', 'Focused', 'A product earns its place by solving a defined problem for a defined user.'],
              ['02', 'Intelligent', 'AI and data serve the decision or experience; they are never the proposition on their own.'],
              ['03', 'Operable', 'Trust, governance and a clear path to adoption are designed into the system from day one.'],
            ].map(([number, title, description]) => (
              <article key={title} className="grid grid-cols-[3rem_0.65fr_1.35fr] gap-4 border-b border-clause-midnight/12 py-7 sm:gap-7">
                <span className="text-xs text-clause-intelligence">{number}</span>
                <h3 className="font-semibold text-clause-midnight">{title}</h3>
                <p className="text-sm leading-6 text-clause-steel">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        eyebrow="Build with Clause"
        title="Have a problem worth productising?"
        description="We can shape the opportunity, test the proposition and build the smallest credible product that creates real evidence."
        label="Start a product conversation"
      />
    </>
  );
}
