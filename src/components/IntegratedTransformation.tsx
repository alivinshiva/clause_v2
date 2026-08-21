"use client";

import { AnimateOnScroll } from './AnimateOnScroll';

const solutions = [
  "AI-powered marketing operating models",
  "Intelligent customer research",
  "Automated content workflows",
  "AI-assisted account intelligence",
  "Personalised campaign systems",
  "Marketing and sales copilots",
  "AI-powered lead qualification",
  "Customer journey automation",
  "Predictive campaign analytics",
  "AI search visibility",
  "Executive growth dashboards",
];

const suitableFor = [
  "Companies entering new markets",
  "Businesses launching new products",
  "Organisations modernising marketing",
  "Enterprises adopting AI",
  "Start-ups building their first growth engine",
  "B2B companies improving pipeline generation",
  "Founders building category authority",
];

export default function IntegratedTransformation() {
  return (
    <section className="w-full bg-clause-cloud py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-clause-midnight mb-4">
              AI and Marketing Should Work Together
            </h2>
            <p className="text-clause-steel max-w-2xl mx-auto mb-6">
              Many organisations treat AI implementation, digital transformation and marketing growth as separate initiatives. Clause brings them together.
            </p>
            <p className="text-clause-steel max-w-2xl mx-auto">
              We help companies use AI to improve customer research, content development, personalisation, campaign execution, lead management, analytics and decision-making.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Integrated Solutions */}
          <AnimateOnScroll direction="left">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-clause-midnight mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-clause-intelligence/10 flex items-center justify-center text-clause-intelligence">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </span>
                Integrated Solutions
              </h3>
              <ul className="space-y-3">
                {solutions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-clause-steel">
                    <span className="w-1.5 h-1.5 rounded-full bg-clause-intelligence mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Suitable For */}
          <AnimateOnScroll direction="right">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-clause-midnight mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-clause-signal/10 flex items-center justify-center text-clause-signal">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </span>
                Suitable For
              </h3>
              <ul className="space-y-3">
                {suitableFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-clause-steel">
                    <span className="w-1.5 h-1.5 rounded-full bg-clause-signal mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll direction="up">
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-clause-intelligence text-white rounded-lg font-medium hover:bg-clause-intelligence/90 transition-colors">
              Discuss an AI and Growth Programme
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
