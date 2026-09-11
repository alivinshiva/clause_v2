import type { Metadata } from 'next';
import { PageHeader, ButtonLink } from '@/components/ui';
import { industries } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Expertise that adapts to the business context — specific problems Clause solves within each sector.',
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clause Industries"
        title="Expertise That Adapts to the Business Context"
        description="Rather than claiming generic expertise in every industry, we focus on the specific problems Clause can solve within each sector."
      />

      <section className="bg-clause-cloud py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex items-start gap-5 rounded-2xl bg-white border border-clause-steel/10 p-7 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-clause-intelligence/10 flex items-center justify-center text-clause-intelligence">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={industry.icon} />
                </svg>
              </div>
              <div>
                <h2 className="font-semibold text-clause-midnight">{industry.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-clause-steel">
                  {industry.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-clause-midnight sm:text-3xl">
            Do not see your sector?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-clause-steel">
            The problems we solve — intelligent operations, product-grade builds and
            measurable growth — travel well across contexts. Tell us yours.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" withArrow>
              Start a conversation
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
