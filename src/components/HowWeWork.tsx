"use client";

import { AnimateOnScroll } from './AnimateOnScroll';

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description: "Understand the business problem, existing processes, customer journey, technology and data environment.",
  },
  {
    number: "02",
    title: "Prioritise",
    description: "Identify opportunities based on value, feasibility, urgency, risk and implementation effort.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create the operating model, solution architecture, customer experience or growth programme.",
  },
  {
    number: "04",
    title: "Implement",
    description: "Build the workflow, platform, campaign, dashboard or AI solution.",
  },
  {
    number: "05",
    title: "Enable",
    description: "Train teams, document processes and establish internal ownership.",
  },
  {
    number: "06",
    title: "Optimise",
    description: "Measure results, learn from real usage and scale what creates value.",
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll direction="up">
          <h2 className="text-3xl md:text-4xl font-semibold text-clause-midnight text-center mb-16">
            How Clause Works
          </h2>
        </AnimateOnScroll>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-clause-cloud" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.number} direction="up" delay={index * 0.15}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-clause-intelligence text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-clause-intelligence/30">
                    {step.number}
                  </div>

                  {/* Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5">
                      <svg className="w-full h-4 -mt-1.5" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 L90 5 L85 0 M90 5 L85 10" stroke="#5757E8" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  )}

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-clause-midnight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-clause-steel text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
