import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'brand';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-clause-intelligence text-white hover:bg-clause-intelligence/90',
  brand: 'bg-clause-signal text-white hover:bg-clause-signal/90',
  secondary:
    'border border-clause-midnight/20 text-clause-midnight hover:border-clause-intelligence/40 hover:text-clause-intelligence',
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  withArrow = false,
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all ${variantClasses[variant]} ${className}`}
    >
      {children}
      {withArrow && <span aria-hidden="true">→</span>}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 text-sm font-medium text-clause-intelligence transition-all hover:gap-2.5 ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-clause-midnight text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #0B1224 0%, #18233D 55%, #172E4F 100%)',
        }}
      />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-clause-intelligence/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-36 lg:pb-20 lg:pt-44">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clause-signal">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-clause-cloud/80">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
