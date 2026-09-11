import type { Metadata } from 'next';
import Link from 'next/link';
import { ServiceAreaRows, ServiceCTA, ServiceHero, SystemVisual } from '@/components/ServiceShell';
import { aiConsulting, starterPackages } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AI Transformation Consulting',
  description: 'Identify valuable AI opportunities, redesign critical workflows and implement responsible systems your team can govern and scale.',
};

const signals = [
  ['Too many experiments', 'Pilots exist, but there is no shared way to decide what deserves investment.'],
  ['Critical knowledge is fragmented', 'Teams lose time searching, reconciling and recreating information across systems.'],
  ['Automation lacks ownership', 'The technology works in isolation, but controls, adoption and accountability remain unclear.'],
];

const principles = [
  ['Value before novelty', 'Prioritise use cases by measurable benefit, feasibility and urgency—not by technical excitement.'],
  ['Humans stay accountable', 'Design review, escalation and decision rights into the workflow from the beginning.'],
  ['Adoption is part of the build', 'Create the operating model, training and ownership required for the system to survive launch.'],
];

export default function AIConsultingPage() {
  const aiStarters = starterPackages.filter((item) => item.title === 'AI Opportunity Sprint' || item.title === 'AI Workflow Pilot');

  return (
    <>
      <ServiceHero
        eyebrow="AI transformation"
        title="Make AI useful, governable and owned."
        description="Clause helps organisations find the opportunities worth pursuing, redesign the workflows around them and implement responsible AI systems that create practical business value."
        primaryLabel="Map your AI opportunity"
        secondaryLabel="Explore capabilities"
        secondaryHref="#capabilities"
        visual={<SystemVisual variant="ai" />}
      />

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="section-label">When the problem is not the model</p>
              <h2 className="section-title mt-5">AI stalls between possibility and ownership.</h2>
            </div>
            <div className="border-t border-clause-midnight/12">
              {signals.map(([title, description], index) => (
                <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-clause-midnight/12 py-7 sm:grid-cols-[3rem_0.75fr_1.25fr] sm:gap-7">
                  <span className="text-xs font-medium text-clause-intelligence">0{index + 1}</span>
                  <h3 className="text-lg font-semibold tracking-[-0.025em] text-clause-midnight">{title}</h3>
                  <p className="col-start-2 text-sm leading-6 text-clause-steel sm:col-start-auto">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-clause-cloud px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="section-label">Transformation capabilities</p>
              <h2 className="section-title mt-5">From first decision to scaled use.</h2>
            </div>
            <p className="max-w-2xl text-xl leading-8 text-clause-steel lg:pt-9">Open each area to see the practical services behind it. We shape the combination around the business need rather than forcing a fixed technology package.</p>
          </div>
          <ServiceAreaRows areas={aiConsulting} />
        </div>
      </section>

      <section className="bg-[#07101f] px-6 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="section-label text-clause-signal">Responsible by design</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">Build confidence into the system—not around it later.</h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/52">Responsible implementation is a product decision, an operating decision and a leadership decision. It starts before the first workflow is automated.</p>
            </div>
            <div className="border-t border-white/12">
              {principles.map(([title, description], index) => (
                <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-white/12 py-8 sm:grid-cols-[3rem_0.7fr_1.3fr] sm:gap-7">
                  <span className="text-xs text-clause-signal">0{index + 1}</span>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="col-start-2 text-sm leading-6 text-white/48 sm:col-start-auto">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="section-label">Start with evidence</p>
              <h2 className="section-title mt-5">Two ways to create momentum.</h2>
              <p className="mt-6 max-w-md leading-7 text-clause-steel">Choose clarity first or validate one valuable workflow through a working pilot.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {aiStarters.map((starter, index) => (
                <article key={starter.title} className={`flex min-h-[360px] flex-col rounded-2xl border p-7 ${index === 0 ? 'border-clause-intelligence bg-clause-intelligence text-white' : 'border-clause-midnight/10 bg-clause-cloud text-clause-midnight'}`}>
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${index === 0 ? 'text-white/55' : 'text-clause-intelligence'}`}>{index === 0 ? 'Discover' : 'Validate'}</span>
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
        eyebrow="Your next AI decision"
        title="Choose the right opportunity before choosing the tool."
        description="Bring the workflow, constraint or business target. We will help frame where AI can create real value and what it would take to implement responsibly."
        label="Map your AI opportunity"
      />
    </>
  );
}
