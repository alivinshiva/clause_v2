'use client';

import { useState } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  });

  const interests = [
    'Clause Products',
    'AI Strategy and Consulting',
    'AI Agents and Automation',
    'AI Training and Governance',
    'Marketing Strategy',
    'Demand Generation',
    'AEO and GEO',
    'Marketing Analytics',
    'Product Development',
    'Other',
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="w-full py-24 px-6 bg-clause-cloud dark:bg-clause-midnight">
      <AnimateOnScroll direction="up">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-clause-midnight dark:text-clause-white">
            What are you trying to build, improve, automate or grow?
          </h2>
          <p className="mt-4 text-lg text-clause-steel">
            You do not need to begin with a specific technology, platform or
            consulting service.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button className="px-6 py-3 bg-clause-intelligence text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              Start a Conversation
            </button>
            <button className="px-6 py-3 border border-clause-steel/30 text-clause-midnight dark:text-clause-white rounded-lg font-medium">
              Explore Our Capabilities
            </button>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll direction="up" delay={0.2}>
        <div className="max-w-xl mx-auto">
          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-clause-midnight dark:text-clause-white mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-clause-steel/30 bg-white dark:bg-clause-graphite text-clause-midnight dark:text-clause-white text-sm focus:outline-none focus:ring-2 focus:ring-clause-intelligence/50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-clause-midnight dark:text-clause-white mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-clause-steel/30 bg-white dark:bg-clause-graphite text-clause-midnight dark:text-clause-white text-sm focus:outline-none focus:ring-2 focus:ring-clause-intelligence/50"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-clause-midnight dark:text-clause-white mb-1"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-clause-steel/30 bg-white dark:bg-clause-graphite text-clause-midnight dark:text-clause-white text-sm focus:outline-none focus:ring-2 focus:ring-clause-intelligence/50"
              />
            </div>

            <div>
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-clause-midnight dark:text-clause-white mb-1"
              >
                I am interested in
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-clause-steel/30 bg-white dark:bg-clause-graphite text-clause-midnight dark:text-clause-white text-sm focus:outline-none focus:ring-2 focus:ring-clause-intelligence/50"
              >
                <option value="">Select an area of interest</option>
                {interests.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-clause-midnight dark:text-clause-white mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-clause-steel/30 bg-white dark:bg-clause-graphite text-clause-midnight dark:text-clause-white text-sm focus:outline-none focus:ring-2 focus:ring-clause-intelligence/50 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-clause-intelligence text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
