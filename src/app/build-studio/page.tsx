import type { Metadata } from 'next';
import Link from 'next/link';
import { ServiceCTA, ServiceHero, SystemVisual } from '@/components/ServiceShell';
import { buildCapabilities, buildProcessSteps } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AI Product Engineering & Custom Software',
  description:
    'Clause Build Studio turns specialised business problems into production-ready AI applications, SaaS platforms and decision systems.',
};

const fitSignals = [
  'The workflow is strategically important but generic software does not fit it.',
  'Your team has a valuable idea, but needs product and engineering leadership to shape it.',
  'An AI prototype has shown promise and now needs governance, integration and production quality.',
  'Disconnected tools and manual hand-offs are limiting scale, speed or decision quality.',
];

const deliveryPrinciples = [
  ['Evidence before scale', 'We validate the riskiest assumptions early, before committing to a full build.'],
  ['One accountable team', 'Strategy, experience, engineering and adoption stay connected from brief to launch.'],
  ['Designed to be operated', 'Ownership, observability, security and handover are part of the product — not afterthoughts.'],
];

export default function BuildStudioPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Clause Build Studio"
        title="Build the system your business actually needs."
        description="We turn specialised workflows and ambitious product ideas into useful, production-ready software — combining product strategy, AI, experience design and engineering in one accountable team."
        primaryLabel="Discuss a build"
        secondaryLabel="See our approach"
        secondaryHref="#approach"
        visual={<SystemVisual variant="build" />}
      />

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="section-label">When custom wins</p>
              <h2 className="section-title mt-5">Not every problem needs another off-the-shelf tool.</h2>
            </div>
            <div className="border-t border-clause-midnight/12">
              {fitSignals.map((signal, index) => (
                <div key={signal} className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-clause-midnight/12 py-6 sm:py-8">
                  <span className="text-xs font-medium text-clause-intelligence">0{index + 1}</span>
                  <p className="max-w-2xl text-base leading-7 text-clause-steel sm:text-lg sm:leading-8">{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-clause-cloud px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-label">What we build</p>
            <h2 className="section-title mt-5">Digital products that create operating advantage.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-clause-steel">
              The format follows the problem. Every build is designed around adoption, measurable value and the environment it must work within.
            </p>
          </div>

          <div className="mt-14 border-t border-clause-midnight/12">
            {buildCapabilities.map((capability, index) => (
              <article key={capability.title} className="grid gap-6 border-b border-clause-midnight/12 py-8 md:grid-cols-[4rem_0.75fr_1.25fr] md:gap-10 lg:py-10">
                <span className="text-xs font-medium text-clause-intelligence">0{index + 1}</span>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-clause-midnight">{capability.title}</h3>
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-clause-steel">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-clause-intelligence" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 bg-[#07101f] px-6 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-clause-signal">
                <span className="h-px w-8 bg-clause-signal" /> The build path
              </p>
              <h2 className="mt-6 text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.06em]">
                Make the next investment with more certainty.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/55">
                Our process moves from evidence to implementation. Each stage creates a decision, an artefact and a clearer case for what comes next.
              </p>
            </div>

            <ol className="border-t border-white/12">
              {buildProcessSteps.map((step, index) => (
                <li key={step} className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-white/12 py-6 sm:py-7">
                  <span className="text-xs text-clause-signal">0{index + 1}</span>
                  <span className="text-lg font-medium tracking-[-0.02em] text-white/88 sm:text-xl">{step}</span>
                  <span className="h-2 w-2 rounded-full border border-white/30 transition-colors group-hover:border-clause-signal group-hover:bg-clause-signal" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="section-label">Built beyond launch</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] text-clause-midnight sm:text-5xl">Product quality is an operating decision.</h2>
              <Link href="/products" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-clause-intelligence hover:gap-3">
                Explore what we are building <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-clause-midnight/10 bg-clause-midnight/10 md:grid-cols-3">
              {deliveryPrinciples.map(([title, description], index) => (
                <article key={title} className="bg-clause-cloud p-7 lg:p-8">
                  <span className="text-xs font-medium text-clause-intelligence">0{index + 1}</span>
                  <h3 className="mt-12 text-xl font-semibold tracking-[-0.035em] text-clause-midnight">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-clause-steel">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        eyebrow="Have a build in mind?"
        title="Bring the problem. We will shape the product."
        description="Start with a focused working session to clarify the opportunity, the constraints and the smallest useful version worth building."
        label="Discuss a custom build"
      />
    </>
  );
}
