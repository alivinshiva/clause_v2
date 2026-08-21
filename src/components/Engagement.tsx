'use client';

import { motion } from 'framer-motion';
import { AnimateOnScroll } from './AnimateOnScroll';

const engagementTypes = [
  {
    title: 'Advisory',
    description: 'Strategic assessments, workshops, roadmaps and leadership guidance.',
  },
  {
    title: 'Consulting Projects',
    description: 'Defined transformation initiatives with specific objectives, deliverables and outcomes.',
  },
  {
    title: 'Pilot Programmes',
    description: 'Focused AI or marketing pilots designed to validate business value before wider investment.',
  },
  {
    title: 'Build and Implement',
    description: 'End-to-end design, development and implementation of AI, technology or marketing systems.',
  },
  {
    title: 'Fractional Leadership',
    description: 'Ongoing senior AI, product or marketing leadership for organisations building internal capabilities.',
  },
  {
    title: 'Managed Transformation',
    description: 'Continuous implementation, measurement, optimisation and capability development.',
  },
];

const starterPackages = [
  {
    title: 'AI Opportunity Sprint',
    description: 'Identify the most valuable AI opportunities.',
    outputs: [
      'AI-readiness assessment',
      'Prioritised use cases',
      'Value-complexity analysis',
      '90-day action plan',
    ],
  },
  {
    title: 'Marketing Growth Diagnostic',
    description: 'Evaluate complete marketing system.',
    outputs: [
      'Positioning assessment',
      'Customer journey review',
      'Channel analysis',
      'Growth roadmap',
    ],
  },
  {
    title: 'AI Search Visibility Audit',
    description: 'Understand discoverability across search and AI platforms.',
    outputs: [
      'Visibility assessment',
      'Competitor comparison',
      'AEO/GEO opportunities',
      'Content roadmap',
    ],
  },
  {
    title: 'AI Workflow Pilot',
    description: 'Design and implement one practical AI workflow.',
    outputs: [
      'Workflow redesign',
      'Working pilot',
      'Human review controls',
      'Scale recommendations',
    ],
  },
];

export function Engagement() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* How We Engage Section */}
        <div className="mb-20">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1224] mb-12 text-center">
              Flexible Engagements Built Around the Business Need
            </h2>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagementTypes.map((engagement, index) => (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  className="p-6 rounded-lg border border-[#667085]/20 hover:border-[#5757E8]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#5757E8]/10 flex items-center justify-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#5757E8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0B1224] mb-2">
                    {engagement.title}
                  </h3>
                  <p className="text-[#667085]">
                    {engagement.description}
                  </p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        
        {/* Starting Engagements Section */}
        <div>
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1224] mb-12 text-center">
              Starting Engagements
            </h2>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {starterPackages.map((packageItem, index) => (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  className="p-6 rounded-lg border border-[#667085]/20 hover:border-[#5757E8]/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-[#0B1224] mb-2">
                    {packageItem.title}
                  </h3>
                  <p className="text-[#667085] mb-4">
                    {packageItem.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-[#0B1224] mb-2">Outputs:</h4>
                    <ul className="space-y-1">
                      {packageItem.outputs.map((output, outputIndex) => (
                        <li key={outputIndex} className="text-sm text-[#667085] flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5757E8]" />
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}