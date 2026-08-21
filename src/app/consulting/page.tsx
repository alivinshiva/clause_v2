import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, ButtonLink, TextLink } from '@/components/ui';
import {
  aiConsulting,
  marketingConsulting,
  integratedSolutions,
  integratedSuitableFor,
  engagementTypes,
  starterPackages,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'Consulting | Clause Holdings',
  description:
    'AI and marketing consulting that connects intelligent capability to measurable business outcomes.',
};

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clause Consulting"
        title="Consulting That Connects AI and Growth"
        description="Two focused practices, one goal: turn intelligent capability into measurable business outcomes."
      />

      <section className="bg-clause-cloud py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col rounded-2xl p-8 bg-white border border-clause-steel/10">
            <h2 className="text-xl font-semibold text-clause-midnight">AI Consulting</h2>
            <p className="mt-4 text-sm leading-relaxed text-clause-steel">
              Move from AI experimentation to practical implementation. Identify
              valuable AI opportunities, redesign workflows and implement responsible
              AI solutions that create measurable value.
            </p>
            <ul className="mt-5 flex-1 space-y-2">
              {aiConsulting.map((area) => (
                <li key={area.title} className="flex items-start gap-2 text-sm text-clause-steel">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clause-intelligence" aria-hidden="true" />
                  {area.title}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <TextLink href="/consulting/ai">Explore AI Consulting</TextLink>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl p-8 bg-white border border-clause-steel/10">
            <h2 className="text-xl font-semibold text-clause-midnight">Marketing Consulting</h2>
            <p className="mt-4 text-sm leading-relaxed text-clause-steel">
              Build a modern marketing system for the AI era. Strengthen positioning,
              improve visibility, generate demand and connect marketing activity to
              measurable business growth.
            </p>
            <ul className="mt-5 flex-1 space-y-2">
              {marketingConsulting.map((area) => (
                <li key={area.title} className="flex items-start gap-2 text-sm text-clause-steel">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clause-signal" aria-hidden="true" />
                  {area.title}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <TextLink href="/consulting/marketing">Explore Marketing Consulting</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section id="integrated" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-clause-midnight mb-4">
              AI and Marketing Should Work Together
            </h2>
            <p className="text-clause-steel max-w-2xl mx-auto mb-6">
              Many organisations treat AI implementation, digital transformation and
              marketing growth as separate initiatives. Clause brings them together.
            </p>
            <p className="text-clause-steel max-w-2xl mx-auto">
              We help companies use AI to improve customer research, content development,
              personalisation, campaign execution, lead management, analytics and
              decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-clause-cloud rounded-2xl p-8 border border-clause-steel/10">
              <h3 className="text-xl font-semibold text-clause-midnight mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-clause-intelligence/10 flex items-center justify-center text-clause-intelligence">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                </span>
                Integrated Solutions
              </h3>
              <ul className="space-y-3">
                {integratedSolutions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-clause-steel">
                    <span className="w-1.5 h-1.5 rounded-full bg-clause-intelligence mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-clause-cloud rounded-2xl p-8 border border-clause-steel/10">
              <h3 className="text-xl font-semibold text-clause-midnight mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-clause-signal/10 flex items-center justify-center text-clause-signal">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </span>
                Suitable For
              </h3>
              <ul className="space-y-3">
                {integratedSuitableFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-clause-steel">
                    <span className="w-1.5 h-1.5 rounded-full bg-clause-signal mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="engagements" className="bg-clause-cloud py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-clause-midnight mb-4">
              Flexible Engagements Built Around the Business Need
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {engagementTypes.map((engagement) => (
              <div
                key={engagement.title}
                className="p-6 rounded-xl bg-white border border-clause-steel/10 hover:border-clause-intelligence/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-clause-intelligence/10 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-clause-intelligence" />
                </div>
                <h3 className="text-lg font-semibold text-clause-midnight mb-2">
                  {engagement.title}
                </h3>
                <p className="text-sm text-clause-steel">{engagement.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-clause-midnight">
              Starting Engagements
            </h2>
            <p className="mt-4 text-clause-steel max-w-2xl mx-auto">
              Defined starting points with clear outputs — designed to create value quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {starterPackages.map((starter) => (
              <div
                key={starter.title}
                className="p-6 rounded-xl bg-white border border-clause-steel/10 hover:border-clause-intelligence/40 transition-colors"
              >
                <h3 className="text-xl font-semibold text-clause-midnight mb-2">
                  {starter.title}
                </h3>
                <p className="text-clause-steel mb-4">{starter.description}</p>
                <h4 className="text-sm font-medium text-clause-midnight mb-2">Outputs:</h4>
                <ul className="space-y-1">
                  {starter.outputs.map((output) => (
                    <li key={output} className="text-sm text-clause-steel flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clause-intelligence" />
                      {output}
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
            Start with a focused sprint
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-clause-steel">
            Tell us what you are trying to improve and we will recommend the
            fastest path from problem to measurable value.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contact" withArrow>
              Start a conversation
            </ButtonLink>
            <Link
              href="/consulting/ai"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-clause-intelligence transition-all hover:gap-2.5"
            >
              Explore AI Consulting <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
