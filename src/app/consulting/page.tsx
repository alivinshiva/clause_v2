import type { Metadata } from 'next';
import Link from 'next/link';
import { ServiceCTA, ServiceHero, SystemVisual } from '@/components/ServiceShell';
import { engagementTypes, starterPackages } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AI Transformation and Product Consulting',
  description: 'One connected practice for AI transformation, intelligent growth systems and product-grade implementation.',
};

const practices = [
  {
    number: '01',
    label: 'AI transformation',
    title: 'Make AI useful, governable and owned by your team.',
    description: 'Prioritise the right opportunities, redesign real workflows and move from experimentation to responsible implementation.',
    href: '/consulting/ai',
    cta: 'Explore AI transformation',
  },
  {
    number: '02',
    label: 'AI-enabled growth',
    title: 'Build a growth system that learns from every signal.',
    description: 'Connect market position, demand, AI-search visibility, automation and analytics around measurable commercial outcomes.',
    href: '/consulting/marketing',
    cta: 'Explore AI-enabled growth',
  },
  {
    number: '03',
    label: 'Product engineering',
    title: 'Turn specialised requirements into a system ready for use.',
    description: 'Combine product strategy, experience design, AI and engineering to validate, build and operationalise a digital product.',
    href: '/build-studio',
    cta: 'Explore product engineering',
  },
];

export default function ConsultingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Clause capabilities"
        title="Strategy that ends in a working system."
        description="Clause brings direction, design and delivery into one accountable path—from a difficult business problem to a system your team can use, govern and improve."
        primaryLabel="Book a discovery call"
        secondaryLabel="Explore the practice"
        secondaryHref="#practices"
        visual={<SystemVisual variant="connected" />}
      />

      <section id="practices" className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="section-label">Three capabilities. One outcome.</p>
              <h2 className="section-title mt-5">No gap between the recommendation and the result.</h2>
            </div>
            <p className="max-w-2xl text-xl leading-8 text-clause-steel lg:pt-9 lg:text-2xl lg:leading-9">
              Work with a focused team that can frame the opportunity, design the operating model and build the technology behind it.
            </p>
          </div>

          <div className="mt-20 border-t border-clause-midnight/12">
            {practices.map((practice) => (
              <article key={practice.number} className="grid gap-7 border-b border-clause-midnight/12 py-10 lg:grid-cols-[0.45fr_1.1fr_1.1fr_auto] lg:items-start lg:gap-10">
                <div>
                  <span className="text-xs font-medium text-clause-intelligence">{practice.number}</span>
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-clause-steel">{practice.label}</p>
                </div>
                <h3 className="max-w-md text-2xl font-semibold leading-tight tracking-[-0.04em] text-clause-midnight sm:text-3xl">{practice.title}</h3>
                <p className="max-w-lg text-sm leading-6 text-clause-steel">{practice.description}</p>
                <Link href={practice.href} aria-label={practice.cta} className="flex h-11 w-11 items-center justify-center rounded-full border border-clause-midnight/15 text-clause-midnight transition hover:border-clause-intelligence hover:bg-clause-intelligence hover:text-white">↗</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-clause-cloud px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="section-label">Defined starting points</p>
              <h2 className="section-title mt-5">Create clarity before committing to a transformation.</h2>
              <p className="mt-6 max-w-md leading-7 text-clause-steel">Each starting engagement produces tangible outputs and a clear recommendation for what should happen next.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {starterPackages.map((starter, index) => (
                <article key={starter.title} className={`flex min-h-[310px] flex-col rounded-2xl border p-6 sm:p-7 ${index === 0 ? 'border-clause-intelligence/30 bg-clause-midnight text-white' : 'border-clause-midnight/10 bg-white text-clause-midnight'}`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${index === 0 ? 'text-clause-signal' : 'text-clause-intelligence'}`}>0{index + 1}</span>
                    {index === 0 && <span className="rounded-full border border-white/15 px-3 py-1 text-[9px] uppercase tracking-[0.15em] text-white/55">Recommended start</span>}
                  </div>
                  <h3 className="mt-12 text-2xl font-semibold tracking-[-0.035em]">{starter.title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${index === 0 ? 'text-white/52' : 'text-clause-steel'}`}>{starter.description}</p>
                  <ul className={`mt-auto grid gap-2 pt-8 text-xs ${index === 0 ? 'text-white/55' : 'text-clause-steel'}`}>
                    {starter.outputs.map((output) => <li key={output} className="flex items-center gap-2"><span className={`h-1 w-1 rounded-full ${index === 0 ? 'bg-clause-signal' : 'bg-clause-intelligence'}`} />{output}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 border-b border-clause-midnight/12 pb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">Ways to work together</p>
              <h2 className="section-title mt-5 max-w-3xl">Match the engagement to the decision.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-clause-steel">Begin with advice, validate through a pilot or engage Clause through implementation and continuous improvement.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-clause-midnight/10 bg-clause-midnight/10 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {engagementTypes.map((engagement, index) => (
              <article key={engagement.title} className="min-h-52 bg-white p-6 lg:p-7">
                <span className="text-xs font-medium text-clause-intelligence">0{index + 1}</span>
                <h3 className="mt-8 text-lg font-semibold tracking-[-0.025em] text-clause-midnight">{engagement.title}</h3>
                <p className="mt-3 text-sm leading-6 text-clause-steel">{engagement.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        eyebrow="A focused first step"
        title="Clarify the opportunity before choosing the solution."
        description="Tell us what needs to change. We will help frame the problem and recommend the most useful next step—even if that step is not a large engagement."
        label="Book a discovery call"
      />
    </>
  );
}
