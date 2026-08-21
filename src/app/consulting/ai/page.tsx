import type { Metadata } from 'next';
import { PageHeader, ButtonLink, TextLink } from '@/components/ui';
import { aiConsulting } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AI Consulting | Clause Holdings',
  description:
    'Move from AI experimentation to practical implementation — strategy, agents, generative AI, knowledge intelligence, governance and adoption.',
};

export default function AIConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clause Consulting — AI"
        title="Move from AI experimentation to practical implementation"
        description="Clause helps organisations identify valuable AI opportunities, redesign workflows and implement responsible AI solutions that create measurable business value."
      />

      <section className="bg-clause-cloud py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight">
              Six service areas, one operating discipline
            </h2>
            <p className="mt-4 text-lg text-clause-steel max-w-2xl mx-auto">
              From strategy to adoption, each area is designed to move AI from
              proof-of-concept into production value.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiConsulting.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-clause-steel/10 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="block h-2.5 w-2.5 rounded-full bg-clause-intelligence" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold tracking-tight text-clause-midnight">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-clause-steel">{area.blurb}</p>
                <ul className="mt-4 space-y-1.5">
                  {area.services.map((service) => (
                    <li key={service} className="flex items-start gap-2 text-sm text-clause-steel">
                      <svg
                        className="w-4 h-4 mt-0.5 text-clause-intelligence shrink-0"
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
            Start with a focused AI sprint
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-clause-steel">
            The AI Opportunity Sprint identifies the most valuable and achievable
            AI opportunities inside your organisation — with a ninety-day action
            plan to begin.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contact" withArrow>
              Start a conversation
            </ButtonLink>
            <TextLink href="/consulting#engagements">Explore starting engagements</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
