import type { Metadata } from 'next';
import { PageHeader, ButtonLink, TextLink } from '@/components/ui';
import { marketingConsulting } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Marketing Consulting | Clause Holdings',
  description:
    'Build a modern marketing system for the AI era — strategy, positioning, demand generation, AEO/GEO, analytics and marketing technology.',
};

export default function MarketingConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clause Consulting — Marketing"
        title="Build a modern marketing system for the AI era"
        description="Clause helps companies strengthen their positioning, improve market visibility, generate demand and connect marketing activity to measurable business growth."
      />

      <section className="bg-clause-cloud py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight">
              Seven service areas, one growth system
            </h2>
            <p className="mt-4 text-lg text-clause-steel max-w-2xl mx-auto">
              From positioning to pipeline, each area connects marketing activity
              to measurable business outcomes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {marketingConsulting.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-clause-steel/10 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="block h-2.5 w-2.5 rounded-full bg-clause-signal" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold tracking-tight text-clause-midnight">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-clause-steel">{area.blurb}</p>
                <ul className="mt-4 space-y-1.5">
                  {area.services.map((service) => (
                    <li key={service} className="flex items-start gap-2 text-sm text-clause-steel">
                      <svg
                        className="w-4 h-4 mt-0.5 text-clause-signal shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-clause-midnight sm:text-3xl">
            Start with a growth diagnostic
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-clause-steel">
            The Marketing Growth Diagnostic evaluates your complete marketing
            system — positioning, journey, channels — and returns a clear growth
            roadmap.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contact" variant="brand" withArrow>
              Start a conversation
            </ButtonLink>
            <TextLink href="/consulting#engagements">Explore starting engagements</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
