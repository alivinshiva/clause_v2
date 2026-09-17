import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceCTA } from '@/components/ServiceShell';
import { industries } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AI Transformation by Industry',
  description:
    'Explore how Clause applies AI transformation, product engineering and intelligent growth to specific problems across technology, professional services, media and public affairs.',
  openGraph: {
    title: 'Industry Context Changes the System | Clause',
    description:
      'Sector-specific problems, constraints and system opportunities across four focused industry contexts.',
    images: [{ url: '/images/clause-signal-system-hero.png', alt: 'Signals forming a connected intelligent system' }],
  },
};

const priorityIndustries = [
  {
    name: 'Technology and SaaS',
    eyebrow: 'Ship with confidence',
    headline: 'Turn product complexity into clearer release decisions.',
    problem:
      'Growing software businesses need to move quickly without allowing quality risk, disconnected requirements or an expanding toolchain to slow every release.',
    context:
      'The system has to fit existing delivery practices, preserve engineering judgment and create useful evidence without adding another reporting burden.',
    opportunities: ['AI-assisted product workflows', 'Quality and release intelligence', 'Customer and internal copilots'],
    inputs: ['Requirements', 'Delivery signals', 'Customer context'],
    output: 'Confident product decisions',
    image: '/images/products/testarq-system.png',
    imageAlt: 'Requirements and risk signals flowing into a structured quality system',
    links: [
      ['Explore TestArq', '/products/testarq'],
      ['Product engineering', '/build-studio'],
    ],
  },
  {
    name: 'Professional services',
    eyebrow: 'Scale expertise',
    headline: 'Make valuable knowledge easier to find, apply and improve.',
    problem:
      'Expertise often lives across documents, inboxes and a small number of experienced people. Growth increases the cost of finding context and delivering work consistently.',
    context:
      'Useful automation must protect confidential knowledge, retain source traceability and keep professionals accountable for judgment and client outcomes.',
    opportunities: ['Enterprise knowledge assistants', 'Proposal and research workflows', 'AI-enabled demand systems'],
    inputs: ['Knowledge', 'Client context', 'Expert review'],
    output: 'Repeatable expert delivery',
    image: '/images/clause-signal-system-hero.png',
    imageAlt: 'Fragmented information becoming an organised decision system',
    links: [
      ['AI transformation', '/consulting/ai'],
      ['AI-enabled growth', '/consulting/marketing'],
    ],
  },
  {
    name: 'Media, entertainment and sports',
    eyebrow: 'Design participation',
    headline: 'Convert audience attention into meaningful community signals.',
    problem:
      'Audience energy is spread across platforms, posts and short-lived reactions. Operators can measure reach but often struggle to understand sustained participation and community value.',
    context:
      'Participation must feel worthwhile to the audience while moderation, consent and interpretation remain visible to the organisations using the resulting signals.',
    opportunities: ['Community participation systems', 'Fan-created formats and scoring', 'Audience intelligence'],
    inputs: ['Creative participation', 'Ratings', 'Community behaviour'],
    output: 'Structured audience insight',
    image: '/images/products/showgrid-signal.png',
    imageAlt: 'Audience participation signals flowing into a luminous modular grid',
    links: [
      ['Explore ShowGrid', '/products/showgrid'],
      ['View Clause Labs', '/work'],
    ],
  },
  {
    name: 'Public affairs and civic organisations',
    eyebrow: 'Read public signals',
    headline: 'Understand narrative movement without pretending noise is certainty.',
    problem:
      'Public conversations move faster than periodic research, while fragmented signals make it difficult to distinguish durable issue movement from temporary attention.',
    context:
      'Any intelligence system must make sources, confidence and limitations visible. Sensitive uses require deliberate governance, privacy safeguards and human interpretation.',
    opportunities: ['Issue and narrative monitoring', 'Public-signal analysis', 'Decision-ready briefing systems'],
    inputs: ['Public narratives', 'Issue movement', 'Source context'],
    output: 'Transparent decision support',
    image: '/images/products/grid-pulse-field.png',
    imageAlt: 'Public signals resolving into a calm analytical pulse field',
    links: [
      ['Explore Grid Pulse', '/products/grid-pulse'],
      ['Responsible AI', '/consulting/ai'],
    ],
  },
];

const priorityNames = new Set([
  'Technology and SaaS',
  'Professional services',
  'Media, entertainment and sports',
  'Public affairs and political organisations',
]);

const additionalContexts = industries.filter((industry) => !priorityNames.has(industry.name));

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07101f] px-6 pb-20 pt-36 text-white lg:pb-28 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(87,87,232,.2),transparent_34%)]" />
        <div className="hero-noise absolute inset-0 opacity-25" />
        <div className="relative mx-auto grid max-w-7xl items-end gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-clause-signal">
              <span className="h-px w-8 bg-clause-signal" /> Industry contexts
            </p>
            <h1 className="mt-7 max-w-4xl text-[clamp(3.4rem,6.8vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-balance">
              Context changes the system.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/62">
              The same technology behaves differently across products, professional knowledge, communities and public decisions. We start with the environment the system must serve.
            </p>
          </div>

          <div className="service-visual p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-[10px] uppercase tracking-[0.15em] text-white/35">
              <span>Context map</span><span>Problem → system</span>
            </div>
            <div className="mt-3">
              {priorityIndustries.map((industry, index) => (
                <div key={industry.name} className="grid grid-cols-[2.3rem_1fr_auto] items-center gap-3 border-b border-white/10 py-4 last:border-0">
                  <span className="text-[10px] text-clause-signal">0{index + 1}</span>
                  <span className="text-sm font-medium text-white/82">{industry.name}</span>
                  <span className="hidden text-[9px] uppercase tracking-[0.12em] text-white/30 sm:block">{industry.eyebrow}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="section-label">Our industry position</p>
            <h2 className="section-title mt-5">Specific about the problem. Honest about the evidence.</h2>
          </div>
          <div className="border-t border-clause-midnight/12">
            {[
              ['No borrowed credibility', 'We do not turn a list of possible sectors into a claim of client experience.'],
              ['Context before configuration', 'We examine the workflow, decision rights, regulation and adoption conditions before shaping the system.'],
              ['Relevant proof', 'We connect each sector to the products, prototypes and methods that make our thinking tangible.'],
            ].map(([title, description], index) => (
              <article key={title} className="grid gap-4 border-b border-clause-midnight/12 py-7 sm:grid-cols-[3rem_0.7fr_1.3fr] sm:gap-7">
                <span className="text-xs text-clause-intelligence">0{index + 1}</span>
                <h3 className="font-semibold text-clause-midnight">{title}</h3>
                <p className="text-sm leading-6 text-clause-steel">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-clause-cloud px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-label">Priority contexts</p>
            <h2 className="section-title mt-5">Where our current thinking is most tangible.</h2>
          </div>

          <div className="mt-16 space-y-10 lg:space-y-16">
            {priorityIndustries.map((industry, index) => (
              <article key={industry.name} className="overflow-hidden rounded-[2rem] border border-clause-midnight/10 bg-white shadow-[0_24px_70px_rgba(11,18,36,.055)]">
                <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                  <div className={`relative min-h-[380px] overflow-hidden bg-[#07101f] lg:min-h-[660px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image src={industry.image} alt={industry.imageAlt} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] via-[#07101f]/5 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-clause-signal">Context 0{index + 1}</p>
                      <h3 className="mt-3 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">{industry.name}</h3>
                    </div>
                  </div>

                  <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                    <p className="section-label">{industry.eyebrow}</p>
                    <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] text-clause-midnight sm:text-4xl">{industry.headline}</h3>
                    <p className="mt-6 text-base leading-7 text-clause-steel">{industry.problem}</p>

                    <div className="mt-8 rounded-2xl bg-clause-cloud p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clause-steel">Context that shapes the build</p>
                      <p className="mt-3 text-sm leading-6 text-clause-midnight">{industry.context}</p>
                    </div>

                    <div className="mt-8 grid gap-8 sm:grid-cols-2">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clause-steel">Opportunity areas</p>
                        <ul className="mt-4 space-y-3">
                          {industry.opportunities.map((opportunity) => (
                            <li key={opportunity} className="flex gap-3 text-sm leading-6 text-clause-midnight">
                              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-clause-intelligence" />{opportunity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clause-steel">Signal path</p>
                        <div className="mt-4 space-y-2">
                          {industry.inputs.map((input) => <div key={input} className="rounded-lg border border-clause-midnight/10 px-3 py-2 text-xs text-clause-steel">{input}</div>)}
                          <div className="pt-1 text-xs font-semibold text-clause-intelligence">↓ {industry.output}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-5 border-t border-clause-midnight/10 pt-7 lg:mt-9">
                      {industry.links.map(([label, href]) => (
                        <Link key={href} href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-clause-intelligence transition-all hover:gap-3">
                          {label} <span aria-hidden="true">↗</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="section-label">Additional contexts</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] text-clause-midnight sm:text-5xl">Problems travel across sector boundaries.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-clause-steel">These are adjacent environments where the same workflow, knowledge and decision challenges may appear. They are contexts to explore, not claims of established sector expertise.</p>
          </div>
          <div className="border-t border-clause-midnight/12">
            {additionalContexts.map((industry, index) => (
              <article key={industry.name} className="grid gap-4 border-b border-clause-midnight/12 py-6 sm:grid-cols-[3rem_0.7fr_1.3fr] sm:gap-7">
                <span className="text-xs text-clause-intelligence">0{index + 1}</span>
                <h3 className="font-semibold text-clause-midnight">{industry.name}</h3>
                <p className="text-sm leading-6 text-clause-steel">{industry.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        eyebrow="Your context"
        title="Start with the decision that needs to improve."
        description="Tell us the workflow, constraint and outcome that matter. We will help determine whether the opportunity calls for advice, a focused pilot or a product-grade build."
        label="Discuss your context"
      />
    </>
  );
}
