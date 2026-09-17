import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceCTA } from '@/components/ServiceShell';

export const metadata: Metadata = {
  title: 'About Clause — Strategy That Becomes a Working System',
  description:
    'Clause is an AI transformation and product engineering practice built to connect business strategy, working technology and real adoption.',
  openGraph: {
    title: 'About Clause — From Business Problem to Working System',
    description:
      'Why Clause connects transformation strategy, product engineering and intelligent growth in one accountable practice.',
    images: [{
      url: '/images/about/clause-connected-practice.png',
      alt: 'Strategic, product and intelligence layers converging into one connected system',
    }],
  },
};

const handoffs = [
  ['Strategy → delivery', 'The recommendation is only useful if it can survive real workflows, constraints and technical decisions.'],
  ['Prototype → operation', 'A promising demonstration needs ownership, governance and product quality before it can create durable value.'],
  ['Launch → adoption', 'A working system still fails if the team cannot understand, trust and improve it.'],
];

const practices = [
  {
    number: '01',
    title: 'Transformation consulting',
    description: 'Frame the business problem, prioritise the right opportunity and design the operating model around it.',
    href: '/consulting',
    link: 'Explore consulting',
  },
  {
    number: '02',
    title: 'Build Studio',
    description: 'Turn the chosen opportunity into a useful product, workflow or decision system that can be operated responsibly.',
    href: '/build-studio',
    link: 'Explore Build Studio',
  },
  {
    number: '03',
    title: 'Clause products',
    description: 'Develop focused product concepts around recurring problems and use evidence to decide what deserves to scale.',
    href: '/products',
    link: 'Explore products',
  },
];

const principles = [
  ['Outcomes before tools', 'We begin with the decision, workflow or result that needs to change — then choose the technology.'],
  ['Evidence before scale', 'We make risky assumptions visible and test them before asking a team to fund the full system.'],
  ['Humans stay accountable', 'Automation has explicit owners, review points and escalation paths wherever judgment matters.'],
  ['Built to be owned', 'Documentation, knowledge transfer and operational clarity are part of delivery, not an exit task.'],
];

const partnerSignals = [
  'There is an important business problem, but the right solution is not yet obvious.',
  'Leadership wants working evidence before making a larger transformation investment.',
  'The opportunity crosses strategy, technology and adoption — and needs one accountable path.',
  'The internal team wants a partner that will build capability rather than create dependence.',
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07101f] px-6 pb-20 pt-36 text-white lg:pb-28 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_4%,rgba(87,87,232,.18),transparent_34%)]" />
        <div className="hero-noise absolute inset-0 opacity-25" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-clause-signal">
              <span className="h-px w-8 bg-clause-signal" /> About Clause
            </p>
            <h1 className="mt-7 max-w-4xl text-[clamp(3.3rem,6.5vw,6.5rem)] font-semibold leading-[0.91] tracking-[-0.07em] text-balance">
              Built to close the gap between advice and adoption.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/62">
              Clause helps ambitious organisations turn complex knowledge, workflows and growth challenges into responsible AI systems and digital products people can actually use.
            </p>
            <Link href="/contact" className="button-primary-light mt-9">Start a focused conversation <span aria-hidden="true">↗</span></Link>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_35px_100px_rgba(0,0,0,.36)] sm:min-h-[540px]">
            <Image
              src="/images/about/clause-connected-practice.png"
              alt="Strategic, product and intelligence layers converging into one connected system"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-6 text-[10px] uppercase tracking-[0.15em] text-white/58">
              <span>Strategy · Product · Adoption</span>
              <span className="text-clause-signal">One connected practice</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <div>
            <p className="section-label">Why Clause exists</p>
            <h2 className="section-title mt-5">Transformation usually breaks at the hand-off.</h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-clause-steel">
              Strategy, technology and change are often treated as separate assignments. The gaps between them create delay, rework and systems that look convincing but never become part of the business.
            </p>
          </div>
          <div className="border-t border-clause-midnight/12">
            {handoffs.map(([title, description], index) => (
              <article key={title} className="grid gap-4 border-b border-clause-midnight/12 py-7 sm:grid-cols-[3rem_0.72fr_1.28fr] sm:gap-7 lg:py-9">
                <span className="text-xs font-medium text-clause-intelligence">0{index + 1}</span>
                <h3 className="text-lg font-semibold tracking-[-0.025em] text-clause-midnight">{title}</h3>
                <p className="text-sm leading-6 text-clause-steel">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-clause-cloud px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="section-label">The Clause model</p>
              <h2 className="section-title mt-5">Think clearly. Build credibly. Learn continuously.</h2>
            </div>
            <p className="max-w-lg text-lg leading-8 text-clause-steel lg:pb-1">
              Consulting, building and owned products reinforce one another. Each discipline makes the others more practical and more accountable.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-clause-midnight/10 bg-clause-midnight/10 lg:grid-cols-3">
            {practices.map((practice) => (
              <article key={practice.number} className="flex min-h-[360px] flex-col bg-white p-8 lg:p-9">
                <span className="text-xs font-medium text-clause-intelligence">{practice.number}</span>
                <div className="my-auto py-12">
                  <h3 className="text-3xl font-semibold tracking-[-0.045em] text-clause-midnight">{practice.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-clause-steel">{practice.description}</p>
                </div>
                <Link href={practice.href} className="inline-flex items-center gap-2 border-t border-clause-midnight/10 pt-5 text-sm font-semibold text-clause-intelligence transition-all hover:gap-3">
                  {practice.link} <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07101f] px-6 py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-clause-signal">
              <span className="h-px w-8 bg-clause-signal" /> How we behave
            </p>
            <h2 className="mt-6 text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.06em]">Principles made observable.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/52">A principle matters only when it changes a decision, a deliverable or the way a team works.</p>
          </div>

          <div className="border-t border-white/12">
            {principles.map(([title, behaviour], index) => (
              <article key={title} className="grid gap-4 border-b border-white/12 py-7 sm:grid-cols-[3rem_0.7fr_1.3fr] sm:gap-7 lg:py-8">
                <span className="text-xs text-clause-signal">0{index + 1}</span>
                <h3 className="font-semibold text-white/90">{title}</h3>
                <p className="text-sm leading-6 text-white/48">{behaviour}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="section-label">A good fit</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] text-clause-midnight sm:text-5xl">The strongest work starts with a consequential problem.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-clause-steel">Clause is best suited to teams that value clarity, honest evidence and the ability to move from a decision to a working system.</p>
          </div>
          <div className="border-t border-clause-midnight/12">
            {partnerSignals.map((signal, index) => (
              <div key={signal} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-clause-midnight/12 py-7">
                <span className="text-xs font-medium text-clause-intelligence">0{index + 1}</span>
                <p className="max-w-2xl text-base leading-7 text-clause-steel">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        eyebrow="Start with the problem"
        title="Let us make the next decision clearer."
        description="Bring the workflow, product idea or transformation question. We will help define what needs to change and the smallest useful way to prove it."
        label="Book a discovery conversation"
      />
    </>
  );
}
