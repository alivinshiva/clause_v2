import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceCTA } from '@/components/ServiceShell';
import { products } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Clause Labs — Product Builds & Concept Studies',
  description:
    'Explore Clause Labs product builds and concept studies, including the problems, hypotheses, system decisions and validation still in progress.',
  openGraph: {
    title: 'Clause Labs — Work in the Open',
    description:
      'A transparent view of the product ideas Clause is shaping, what each system is designed to change and what remains to be validated.',
    images: [{ url: '/images/products/testarq-system.png', alt: 'Clause Labs product systems' }],
  },
};

const studies = [
  {
    slug: 'testarq',
    discipline: 'Quality intelligence',
    hypothesis:
      'If requirements, test assets and release signals share one traceable model, teams can identify quality risk earlier and make release decisions with greater confidence.',
    constraints: ['Must fit existing delivery tools', 'Human review remains authoritative', 'Traceability must be explainable'],
    system: ['Requirement ingestion', 'AI-assisted test design', 'Coverage and readiness signals'],
    validation: ['Which quality signal changes a release decision?', 'Where does AI assistance save effort without weakening control?'],
    next: 'Prototype the core traceability loop with product and quality leaders.',
  },
  {
    slug: 'showgrid',
    discipline: 'Audience participation',
    hypothesis:
      'If audience expression is designed as structured participation rather than passive reaction, communities become more valuable to both members and operators.',
    constraints: ['Participation must feel rewarding', 'Community signals need context', 'Formats must work across fandoms'],
    system: ['Composable engagement formats', 'Community scoring and creation', 'Participation intelligence'],
    validation: ['Which formats create repeat participation?', 'What insight is genuinely useful to community operators?'],
    next: 'Test a narrow participation format with one clearly defined fan community.',
  },
  {
    slug: 'grid-pulse',
    discipline: 'Public-signal intelligence',
    hypothesis:
      'If public signals are organised around issues, audiences and narrative movement, decision-makers can distinguish meaningful change from short-lived noise.',
    constraints: ['Sources and limits must stay visible', 'Analysis cannot imply false certainty', 'Sensitive use requires explicit governance'],
    system: ['Issue and audience framing', 'Narrative and sentiment signals', 'Decision-ready briefing views'],
    validation: ['Which signals are stable enough to inform action?', 'How should confidence and source limitations be communicated?'],
    next: 'Validate the intelligence model against a bounded, non-electoral public issue.',
  },
];

const accentStyles = {
  indigo: { dot: 'bg-clause-intelligence', text: 'text-clause-intelligence', tint: 'bg-indigo-50' },
  cyan: { dot: 'bg-clause-signal', text: 'text-cyan-700', tint: 'bg-cyan-50' },
  amber: { dot: 'bg-amber-400', text: 'text-amber-700', tint: 'bg-amber-50' },
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07101f] px-6 pb-20 pt-36 text-white lg:pb-28 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_8%,rgba(53,201,222,.14),transparent_30%),radial-gradient(circle_at_92%_48%,rgba(87,87,232,.18),transparent_30%)]" />
        <div className="hero-noise absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-7xl">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-clause-signal">
            <span className="h-px w-8 bg-clause-signal" /> Clause Labs
          </p>
          <div className="mt-7 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
            <div>
              <h1 className="max-w-5xl text-[clamp(3.5rem,7.2vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-balance">
                Work in the open.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
                A transparent view of the product ideas we are shaping: the problem, the working hypothesis, the system decisions and the evidence still needed.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 lg:pb-1">
              {products.map((product, index) => (
                <div key={product.slug} className={`relative overflow-hidden rounded-2xl border border-white/10 ${index === 1 ? '-translate-y-5' : ''}`}>
                  <div className="relative aspect-[3/4]">
                    <Image src={product.image} alt="" fill sizes="(min-width: 1024px) 12vw, 28vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/80 via-transparent to-transparent" />
                  </div>
                  <span className="absolute bottom-3 left-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/65">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex max-w-4xl items-start gap-4 border-t border-white/12 pt-6 text-sm leading-6 text-white/46">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clause-signal" />
            <p><span className="font-semibold text-white/75">A note on proof:</span> these are Clause-owned concept studies, not client case studies. We show their current state without inventing customers, outcomes or market traction.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="section-label">How we show the work</p>
            <h2 className="section-title mt-5">Evidence has a status.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-clause-steel">
              Credible innovation separates what is known from what is assumed. Every Clause Labs study uses the same simple evidence language.
            </p>
          </div>
          <div className="border-t border-clause-midnight/12">
            {[
              ['Known', 'The problem, constraint or behaviour we can already observe and describe.'],
              ['Assumed', 'The proposition or system choice we believe may create value.'],
              ['Testing', 'The question a prototype, conversation or pilot must answer next.'],
            ].map(([label, description], index) => (
              <article key={label} className="grid grid-cols-[3rem_0.6fr_1.4fr] gap-4 border-b border-clause-midnight/12 py-7 sm:gap-7">
                <span className="text-xs font-medium text-clause-intelligence">0{index + 1}</span>
                <h3 className="font-semibold text-clause-midnight">{label}</h3>
                <p className="text-sm leading-6 text-clause-steel">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-clause-cloud px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-label">Active concept studies</p>
            <h2 className="section-title mt-5">Three problems. Three system directions.</h2>
          </div>

          <div className="mt-16 space-y-10 lg:space-y-16">
            {studies.map((study, index) => {
              const product = products.find((item) => item.slug === study.slug);
              if (!product) return null;
              const styles = accentStyles[product.accent];

              return (
                <article key={study.slug} className="overflow-hidden rounded-[2rem] border border-clause-midnight/10 bg-white shadow-[0_24px_70px_rgba(11,18,36,.055)]">
                  <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                    <div className={`relative min-h-[380px] overflow-hidden bg-[#07101f] lg:min-h-[650px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Image src={product.image} alt={product.imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] via-[#07101f]/5 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-white/45">Concept study 0{index + 1}</p>
                        <h3 className="mt-3 text-5xl font-semibold tracking-[-0.06em]">{product.name}</h3>
                        <p className="mt-3 text-sm text-white/58">{study.discipline}</p>
                      </div>
                    </div>

                    <div className="p-7 sm:p-10 lg:p-12">
                      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-clause-midnight/10 pb-6">
                        <span className={`flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] ${styles.text}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} /> {product.status}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.14em] text-clause-steel">Clause-owned build</span>
                      </div>

                      <div className="py-8">
                        <p className="section-label">Known · The problem</p>
                        <p className="mt-4 text-lg leading-8 text-clause-steel">{product.problem}</p>
                      </div>

                      <div className={`rounded-2xl p-6 ${styles.tint}`}>
                        <p className="section-label">Assumed · Working hypothesis</p>
                        <p className="mt-4 font-medium leading-7 text-clause-midnight">{study.hypothesis}</p>
                      </div>

                      <div className="mt-8 grid gap-8 sm:grid-cols-2">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clause-steel">System direction</p>
                          <ul className="mt-4 space-y-3">
                            {study.system.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-clause-midnight"><span className={`mt-2.5 h-1 w-1 shrink-0 rounded-full ${styles.dot}`} />{item}</li>)}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clause-steel">Design constraints</p>
                          <ul className="mt-4 space-y-3">
                            {study.constraints.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-clause-midnight"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-clause-midnight/30" />{item}</li>)}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 border-t border-clause-midnight/10 pt-7">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clause-steel">Testing now</p>
                        <ul className="mt-4 space-y-2">
                          {study.validation.map((question) => <li key={question} className="text-sm leading-6 text-clause-steel">— {question}</li>)}
                        </ul>
                        <p className="mt-5 text-sm font-medium leading-6 text-clause-midnight"><span className="text-clause-intelligence">Next:</span> {study.next}</p>
                      </div>

                      <Link href={`/products/${product.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-clause-intelligence transition-all hover:gap-3">
                        Explore the product direction <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
          <div>
            <p className="section-label">From concept to evidence</p>
            <h2 className="section-title mt-5">The work becomes proof one decision at a time.</h2>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-[2rem] border border-clause-midnight/10 bg-clause-midnight/10 sm:grid-cols-2">
            {[
              ['01', 'Frame', 'Define the user, decision and constraint.'],
              ['02', 'Prototype', 'Make the riskiest assumption tangible.'],
              ['03', 'Validate', 'Collect evidence from realistic use.'],
              ['04', 'Build', 'Invest in the system the evidence supports.'],
            ].map(([number, title, description]) => (
              <li key={title} className="min-h-52 bg-clause-cloud p-7">
                <span className="text-xs text-clause-intelligence">{number}</span>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em] text-clause-midnight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-clause-steel">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ServiceCTA
        eyebrow="Build with us"
        title="Bring a problem worth making tangible."
        description="We can frame the opportunity, expose the risky assumptions and build the smallest credible system that creates useful evidence."
        label="Discuss a product build"
      />
    </>
  );
}
