import Link from 'next/link';
import { products } from '@/lib/data';

const challenges = [
  {
    number: '01',
    label: 'AI transformation',
    question: 'Where can AI create value now?',
    description: 'Move from scattered experiments to prioritised opportunities, governed workflows and an implementation path leadership can trust.',
    href: '/consulting/ai',
    cta: 'Map your AI opportunity',
  },
  {
    number: '02',
    label: 'AI-enabled growth',
    question: 'How do we build a smarter growth system?',
    description: 'Connect positioning, demand, AI-search visibility, automation and analytics around one measurable commercial objective.',
    href: '/consulting/marketing',
    cta: 'Diagnose your growth system',
  },
  {
    number: '03',
    label: 'Product engineering',
    question: 'What should we build—and how do we ship it?',
    description: 'Validate the problem, design the experience and engineer an AI application, platform or decision system ready for real use.',
    href: '/build-studio',
    cta: 'Discuss a product build',
  },
];

const method = [
  ['Diagnose', 'Understand the decision, workflow and constraint behind the request.'],
  ['Prioritise', 'Balance business value, feasibility, urgency and responsible use.'],
  ['Build', 'Turn the chosen opportunity into a product-grade working system.'],
  ['Enable', 'Give teams the controls, knowledge and confidence to own it.'],
  ['Measure', 'Track adoption and outcomes, then scale what proves valuable.'],
];

const productAccent: Record<string, string> = {
  indigo: 'from-[#7575f0]/30 to-[#5757e8]/5',
  cyan: 'from-[#22b8d6]/30 to-[#22b8d6]/5',
  amber: 'from-[#f2b84b]/25 to-[#f2b84b]/5',
};

export function HomeExperience() {
  return (
    <>
      <section aria-label="Clause products" className="border-y border-clause-midnight/8 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-clause-steel">Built inside Clause</p>
          <div className="grid grid-cols-3 divide-x divide-clause-midnight/10">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="px-5 text-center text-sm font-semibold tracking-[-0.02em] text-clause-midnight transition hover:text-clause-intelligence sm:px-10">
                {product.name}
              </Link>
            ))}
          </div>
          <p className="hidden text-xs text-clause-steel lg:block">Original products. Applied product thinking.</p>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="section-label">Start with the challenge</p>
              <h2 className="section-title mt-5 max-w-lg">You do not need another list of AI tools.</h2>
            </div>
            <p className="max-w-2xl text-xl leading-8 text-clause-steel lg:pt-9 lg:text-2xl lg:leading-9">
              You need a clear view of the problem worth solving—and a partner capable of turning that decision into a system people actually use.
            </p>
          </div>

          <div className="mt-16 border-t border-clause-midnight/12 lg:mt-24">
            {challenges.map((challenge) => (
              <Link key={challenge.number} href={challenge.href} className="challenge-row group">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-clause-intelligence">{challenge.number}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clause-steel">{challenge.label}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-clause-midnight sm:text-3xl">{challenge.question}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-clause-steel">{challenge.description}</p>
                </div>
                <div className="flex items-center justify-between gap-4 lg:justify-end">
                  <span className="text-sm font-semibold text-clause-midnight lg:sr-only">{challenge.cta}</span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-clause-midnight/15 text-clause-midnight transition group-hover:border-clause-intelligence group-hover:bg-clause-intelligence group-hover:text-white">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-clause-cloud px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="section-label">Clause Labs · Product build</p>
              <h2 className="section-title mt-5">Capability should be visible, not asserted.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-clause-steel">
                TestArq is our own exploration of a difficult enterprise problem: turning software requirements, coverage and risk into clearer release decisions.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-clause-midnight/10 bg-clause-midnight/10">
                <div className="bg-white p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clause-steel">Problem</p>
                  <p className="mt-2 text-sm font-medium text-clause-midnight">Disconnected quality signals</p>
                </div>
                <div className="bg-white p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clause-steel">System</p>
                  <p className="mt-2 text-sm font-medium text-clause-midnight">Traceable decision intelligence</p>
                </div>
              </div>
              <Link href="/products/testarq" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-clause-intelligence hover:text-clause-midnight">
                Explore the TestArq product story <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="relative min-h-[530px] rounded-[2rem] border border-white bg-[#0a1425] p-5 shadow-[0_30px_80px_rgba(11,18,36,.16)] sm:p-8">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_75%_15%,rgba(87,87,232,.25),transparent_35%)]" />
              <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">Release intelligence</p>
                  <p className="mt-1 text-sm font-medium text-white">Decision workspace</p>
                </div>
                <span className="rounded-full border border-clause-signal/30 bg-clause-signal/10 px-3 py-1 text-[10px] font-medium text-clause-signal">Illustrative view</span>
              </div>

              <div className="relative mt-6 grid grid-cols-3 gap-3">
                {[['Coverage', '86%'], ['Risk signals', '12'], ['Readiness', 'Review']].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.045] p-4">
                    <p className="text-[9px] uppercase tracking-[0.12em] text-white/35">{label}</p>
                    <p className="mt-3 text-lg font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="relative mt-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-white/75">Traceability signal</p>
                  <p className="text-[10px] text-white/35">Requirements → release</p>
                </div>
                <div className="mt-8 flex h-28 items-end gap-2">
                  {[46, 64, 52, 78, 68, 86, 73, 92, 84, 96].map((height, index) => (
                    <div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-clause-intelligence/40 to-clause-signal" style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="mt-4 h-px bg-white/10" />
                <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-5">
                  <div>
                    <p className="text-xs text-white/45">Highest-priority review</p>
                    <p className="mt-1 text-sm font-medium text-white">Payment workflow · edge conditions</p>
                  </div>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f2b84b] shadow-[0_0_18px_rgba(242,184,75,.7)]" />
                </div>
              </div>
              <p className="relative mt-5 text-[10px] leading-relaxed text-white/28">Concept interface shown to communicate product intent. It is not a client result.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="section-label">One connected practice</p>
              <h2 className="section-title mt-5">Direction and delivery belong together.</h2>
              <p className="mt-6 max-w-md leading-7 text-clause-steel">We stay close to the business decision from first diagnosis through implementation, adoption and measurement.</p>
              <Link href="/consulting" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-clause-intelligence hover:text-clause-midnight">Explore how we engage <span aria-hidden="true">↗</span></Link>
            </div>

            <ol className="border-t border-clause-midnight/12">
              {method.map(([title, description], index) => (
                <li key={title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-clause-midnight/12 py-7 sm:grid-cols-[4rem_0.55fr_1fr] sm:items-start sm:gap-8">
                  <span className="pt-1 text-xs font-medium text-clause-intelligence">0{index + 1}</span>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-clause-midnight">{title}</h3>
                  <p className="col-start-2 text-sm leading-6 text-clause-steel sm:col-start-auto">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#07101f] px-6 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label text-clause-signal">Products & ventures</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">Original products built around difficult, real-world problems.</h2>
            </div>
            <Link href="/products" className="shrink-0 text-sm font-semibold text-clause-signal hover:text-white">View all products ↗</Link>
          </div>

          <div className="grid gap-4 pt-8 lg:grid-cols-3">
            {products.map((product, index) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="group relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-white/25">
                <div className={`absolute inset-0 bg-gradient-to-br ${productAccent[product.accent]} opacity-50 transition group-hover:opacity-80`} />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-white/35">
                    <span>0{index + 1}</span>
                    <span>{product.accent === 'indigo' ? 'Enterprise' : product.accent === 'cyan' ? 'Engagement' : 'Public signal'}</span>
                  </div>
                  <div className="mt-auto pt-24">
                    <p className="text-xs font-medium text-clause-signal">{product.category}</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">{product.name}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/52">{product.tagline}</p>
                    <span className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition group-hover:bg-white group-hover:text-clause-midnight">↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eef1ff] px-6 py-24 lg:py-32">
        <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-clause-intelligence/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="section-label">A focused first step</p>
            <h2 className="mt-5 max-w-4xl text-[clamp(2.8rem,6vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-clause-midnight">Find the opportunity worth building.</h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-md text-lg leading-8 text-clause-steel">Start with a short discovery conversation. We will clarify the problem, identify the strongest next step and tell you candidly whether Clause is the right fit.</p>
            <Link href="/contact" className="button-primary-dark mt-8">Book a discovery call <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
