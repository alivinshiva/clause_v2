import type { Metadata } from 'next';
import { PageHeader, ButtonLink } from '@/components/ui';
import { principles, workSteps } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About | Clause Holdings',
  description:
    'Clause Holdings is a product and consulting company focused on building intelligent systems, digital platforms and modern growth capabilities.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Clause"
        title="Connected Thinking Across Products, Technology and Growth"
        description="Clause Holdings is a product and consulting company focused on building intelligent systems, digital platforms and modern growth capabilities."
      />

      <section className="bg-clause-cloud py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight">
              What We Stand For
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl p-6 bg-white border border-clause-steel/10 h-full"
              >
                <h3 className="font-semibold text-clause-midnight mb-3">{p.title}</h3>
                <p className="text-sm text-clause-steel leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-clause-midnight text-center mb-16">
            How Clause Works
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-clause-cloud" />

            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
              {workSteps.map((step) => (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-clause-intelligence text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-clause-intelligence/30">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-clause-midnight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-clause-steel text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-clause-cloud py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-clause-midnight sm:text-3xl">
            Let us build something that matters
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-clause-steel">
            Whether it is a product, a consulting engagement or a custom build,
            every conversation starts with your business problem.
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
