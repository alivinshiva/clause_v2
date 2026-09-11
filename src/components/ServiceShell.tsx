import Link from 'next/link';
import type { ReactNode } from 'react';
import type { ServiceArea } from '@/lib/data';

export function ServiceHero({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  visual,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  visual: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#07101f] px-6 pb-20 pt-36 text-white lg:pb-28 lg:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(87,87,232,.2),transparent_32%)]" />
      <div className="hero-noise absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-clause-signal">
            <span className="h-px w-8 bg-clause-signal" />
            {eyebrow}
          </p>
          <h1 className="mt-7 max-w-3xl text-[clamp(3.2rem,6.5vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-balance">
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
            {description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="button-primary-light">
              {primaryLabel} <span aria-hidden="true">↗</span>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="button-quiet-dark">
                {secondaryLabel} <span aria-hidden="true">↓</span>
              </Link>
            )}
          </div>
        </div>
        <div className="relative">{visual}</div>
      </div>
    </section>
  );
}

export function ServiceAreaRows({ areas }: { areas: ServiceArea[] }) {
  return (
    <div className="border-t border-clause-midnight/12">
      {areas.map((area, index) => (
        <details key={area.title} className="service-detail group border-b border-clause-midnight/12">
          <summary className="grid cursor-pointer list-none gap-5 py-7 sm:grid-cols-[3rem_0.9fr_1.1fr_auto] sm:items-start sm:gap-7 lg:py-9">
            <span className="pt-1 text-xs font-medium text-clause-intelligence">0{index + 1}</span>
            <h3 className="text-xl font-semibold leading-tight tracking-[-0.035em] text-clause-midnight sm:text-2xl">{area.title}</h3>
            <p className="text-sm leading-6 text-clause-steel">{area.blurb}</p>
            <span className="service-detail-icon flex h-9 w-9 items-center justify-center rounded-full border border-clause-midnight/15 text-lg text-clause-midnight transition">+</span>
          </summary>
          <div className="pb-9 sm:ml-[calc(3rem+1.75rem)] sm:grid sm:grid-cols-[0.9fr_1.1fr_auto] sm:gap-7">
            <div />
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {area.services.map((service) => (
                <li key={service} className="flex items-start gap-3 text-sm leading-6 text-clause-steel">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-clause-intelligence" />
                  {service}
                </li>
              ))}
            </ul>
            <div />
          </div>
        </details>
      ))}
    </div>
  );
}

export function ServiceCTA({
  eyebrow,
  title,
  description,
  label,
}: {
  eyebrow: string;
  title: string;
  description: string;
  label: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#eef1ff] px-6 py-24 lg:py-32">
      <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-clause-intelligence/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="section-label">{eyebrow}</p>
          <h2 className="mt-5 max-w-4xl text-[clamp(2.8rem,6vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-clause-midnight">{title}</h2>
        </div>
        <div className="lg:pb-2">
          <p className="max-w-md text-lg leading-8 text-clause-steel">{description}</p>
          <Link href="/contact" className="button-primary-dark mt-8">{label} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}

export function SystemVisual({ variant }: { variant: 'connected' | 'ai' | 'growth' | 'build' }) {
  if (variant === 'connected') {
    return (
      <div className="service-visual min-h-[460px] p-5 sm:p-8">
        <div className="relative flex h-full min-h-[400px] flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/35">
            <span>Clause operating model</span><span>Connected practice</span>
          </div>
          <div className="relative my-10 grid gap-3">
            {[
              ['01', 'AI transformation', 'Direction'],
              ['02', 'AI-enabled growth', 'Momentum'],
              ['03', 'Product engineering', 'Delivery'],
            ].map(([number, label, outcome], index) => (
              <div key={number} className="relative grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 rounded-xl border border-white/10 bg-white/[0.045] p-4">
                <span className="text-xs text-clause-signal">{number}</span>
                <span className="text-sm font-medium text-white">{label}</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/35">{outcome}</span>
                {index < 2 && <span className="absolute -bottom-3 left-8 h-3 w-px bg-clause-signal/60" />}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-5 text-xs text-white/42">
            <span>One business problem</span><span className="text-clause-signal">One accountable path →</span>
          </div>
        </div>
      </div>
    );
  }

  const nodes = variant === 'ai'
    ? [['Opportunity', 'Value'], ['Workflow', 'Adoption'], ['Controls', 'Trust'], ['System', 'Scale']]
    : variant === 'build'
      ? [['Problem', 'Clarity'], ['Prototype', 'Evidence'], ['Product', 'Quality'], ['Operate', 'Learning']]
      : [['Signal', 'Context'], ['Position', 'Relevance'], ['Demand', 'Momentum'], ['Measure', 'Learning']];

  const visualTitle = variant === 'ai'
    ? 'Responsible AI system'
    : variant === 'build'
      ? 'Product delivery system'
      : 'Intelligent growth system';

  const visualFooter = variant === 'ai'
    ? 'Business value with human accountability.'
    : variant === 'build'
      ? 'Each stage removes risk before the next investment.'
      : 'Every signal improves the next decision.';

  return (
    <div className="service-visual min-h-[460px] p-5 sm:p-8">
      <div className="relative flex h-full min-h-[400px] flex-col">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/35">
          <span>{visualTitle}</span>
          <span>Live model</span>
        </div>
        <div className="relative my-auto grid grid-cols-2 gap-3">
          <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-clause-signal/50 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[70%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-clause-intelligence/70 to-transparent" />
          {nodes.map(([label, outcome], index) => (
            <div key={label} className="relative z-10 min-h-28 rounded-xl border border-white/10 bg-[#0d192d]/90 p-4">
              <span className="text-[10px] text-clause-signal">0{index + 1}</span>
              <p className="mt-5 text-sm font-medium text-white">{label}</p>
              <p className="mt-1 text-xs text-white/35">{outcome}</p>
            </div>
          ))}
          <div className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-clause-signal/40 bg-[#07101f] shadow-[0_0_40px_rgba(53,201,222,.18)]">
            <span className="h-2 w-2 rounded-full bg-clause-signal shadow-[0_0_14px_rgba(53,201,222,.8)]" />
          </div>
        </div>
        <p className="border-t border-white/10 pt-5 text-xs text-white/42">
          {visualFooter}
        </p>
      </div>
    </div>
  );
}
