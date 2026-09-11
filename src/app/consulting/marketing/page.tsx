import type { Metadata } from 'next';
import Link from 'next/link';
import { ServiceAreaRows, ServiceCTA, ServiceHero, SystemVisual } from '@/components/ServiceShell';
import { marketingConsulting, starterPackages } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AI-Enabled Growth Consulting',
  description: 'Connect positioning, demand generation, AI-search visibility, automation and analytics into one measurable growth system.',
};

const growthLoop = [
  ['Understand', 'Customer, category and commercial signals'],
  ['Position', 'A clear reason to choose and remember'],
  ['Create demand', 'Connected journeys, campaigns and content'],
  ['Learn', 'Pipeline, revenue and decision intelligence'],
];

const outcomes = [
  ['Sharper market position', 'Align the category, customer and product story around a clear commercial advantage.'],
  ['More useful demand', 'Design programmes around buying intent and pipeline quality rather than surface-level activity.'],
  ['Visibility in a changing search world', 'Build authority for search engines and AI answer platforms with genuinely useful expertise.'],
  ['A measurable operating system', 'Connect teams, technology and analytics so each cycle improves the next decision.'],
];

export default function MarketingConsultingPage() {
  const growthStarters = starterPackages.filter((item) => item.title === 'Marketing Growth Diagnostic' || item.title === 'AI Search Visibility Audit');

  return (
    <>
      <ServiceHero
        eyebrow="AI-enabled growth"
        title="Build a growth system that gets smarter."
        description="Clause connects positioning, demand, AI-search visibility, automation and analytics around the decisions that create measurable commercial momentum."
        primaryLabel="Diagnose your growth system"
        secondaryLabel="Explore capabilities"
        secondaryHref="#capabilities"
        visual={<SystemVisual variant="growth" />}
      />

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="section-label">The growth loop</p>
              <h2 className="section-title mt-5">Connect every signal to the next decision.</h2>
              <p className="mt-6 max-w-md leading-7 text-clause-steel">Growth compounds when customer learning, market position, execution and measurement operate as one system.</p>
            </div>
            <ol className="relative grid gap-3 sm:grid-cols-2">
              <div className="absolute left-1/2 top-1/2 hidden h-px w-3/4 -translate-x-1/2 bg-clause-intelligence/20 sm:block" />
              {growthLoop.map(([title, description], index) => (
                <li key={title} className="relative z-10 min-h-48 rounded-2xl border border-clause-midnight/10 bg-clause-cloud p-6">
                  <span className="text-xs font-medium text-clause-intelligence">0{index + 1}</span>
                  <h3 className="mt-10 text-xl font-semibold tracking-[-0.03em] text-clause-midnight">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-clause-steel">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#07101f] px-6 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-7 border-b border-white/12 pb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label text-clause-signal">Commercial outcomes</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">Less disconnected activity. More cumulative intelligence.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/48">The goal is not to add more channels. It is to make the commercial system clearer, more responsive and more accountable.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 mt-10 sm:grid-cols-2">
            {outcomes.map(([title, description], index) => (
              <article key={title} className="min-h-60 bg-[#0a1425] p-7 lg:p-9">
                <span className="text-xs text-clause-signal">0{index + 1}</span>
                <h3 className="mt-12 text-2xl font-semibold tracking-[-0.035em]">{title}</h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/48">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-clause-cloud px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="section-label">Growth capabilities</p>
              <h2 className="section-title mt-5">Design the system around the constraint.</h2>
            </div>
            <p className="max-w-2xl text-xl leading-8 text-clause-steel lg:pt-9">Open each area to explore the practical work behind it. We combine only the capabilities needed to move the commercial objective.</p>
          </div>
          <ServiceAreaRows areas={marketingConsulting} />
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <div>
              <p className="section-label">Defined starting points</p>
              <h2 className="section-title mt-5">Diagnose before adding more activity.</h2>
              <p className="mt-6 max-w-md leading-7 text-clause-steel">Create a clear baseline, surface the highest-leverage constraints and leave with a prioritised roadmap.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {growthStarters.map((starter, index) => (
                <article key={starter.title} className={`flex min-h-[370px] flex-col rounded-2xl border p-7 ${index === 0 ? 'border-clause-intelligence bg-clause-intelligence text-white' : 'border-clause-midnight/10 bg-clause-cloud text-clause-midnight'}`}>
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${index === 0 ? 'text-white/55' : 'text-clause-intelligence'}`}>{index === 0 ? 'Complete system' : 'Search & AI visibility'}</span>
                  <h3 className="mt-12 text-3xl font-semibold tracking-[-0.04em]">{starter.title}</h3>
                  <p className={`mt-4 text-sm leading-6 ${index === 0 ? 'text-white/65' : 'text-clause-steel'}`}>{starter.description}</p>
                  <ul className={`mt-auto space-y-2 pt-9 text-xs ${index === 0 ? 'text-white/65' : 'text-clause-steel'}`}>
                    {starter.outputs.map((output) => <li key={output} className="flex items-center gap-2"><span className={`h-1 w-1 rounded-full ${index === 0 ? 'bg-clause-signal' : 'bg-clause-intelligence'}`} />{output}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-10 text-right">
            <Link href="/consulting" className="text-sm font-semibold text-clause-intelligence hover:text-clause-midnight">Compare all engagement options ↗</Link>
          </div>
        </div>
      </section>

      <ServiceCTA
        eyebrow="Your next growth decision"
        title="Find the constraint before funding more activity."
        description="Bring the commercial target, market question or visibility challenge. We will help identify where a more connected growth system can create leverage."
        label="Diagnose your growth system"
      />
    </>
  );
}
