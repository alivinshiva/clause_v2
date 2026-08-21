import type { Metadata } from 'next';
import { PageHeader, ButtonLink } from '@/components/ui';
import { buildCapabilities, buildProcessSteps } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Build Studio | Clause Holdings',
  description:
    'Custom AI applications, SaaS platforms, analytics systems and intelligent workflows — designed and built product-grade.',
};

export default function BuildStudioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clause Build Studio"
        title="From Business Problem to Production-Ready Product"
        description="Clause Build Studio designs and develops custom digital solutions for organisations with specialised business requirements. We combine product strategy, AI, software engineering, analytics and user experience to create scalable systems designed for real-world adoption."
      />

      <section className="bg-clause-cloud py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight">
              What we build
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {buildCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl p-6 bg-white border border-clause-steel/10 h-full"
              >
                <h3 className="font-semibold text-clause-intelligence mb-4">{cap.title}</h3>
                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-clause-steel">
                      <svg
                        className="w-4 h-4 mt-0.5 text-clause-intelligence shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-clause-midnight text-center mb-12">
            Our Build Process
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {buildProcessSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-3 px-5 py-3 rounded-lg bg-clause-cloud border border-clause-steel/10"
              >
                <span className="w-8 h-8 rounded-full bg-clause-intelligence text-white font-semibold text-sm flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-sm text-clause-steel">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-clause-cloud py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-clause-midnight sm:text-3xl">
            Have a build in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-clause-steel">
            Tell us the business problem. We will help you validate the opportunity,
            design the solution and ship a production-ready product.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" withArrow>
              Discuss a Custom Build
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
