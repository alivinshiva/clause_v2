import type { Metadata } from 'next';
import { PageHeader, ButtonLink } from '@/components/ui';
import { insights } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Practical perspectives across AI strategy, agentic AI, governance, automation, marketing transformation, AEO/GEO and product innovation.',
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clause Insights"
        title="Ideas for an Intelligent Business Future"
        description="Practical perspectives across AI strategy, agentic AI, governance, automation, marketing transformation, AEO/GEO and product innovation."
      />

      <section className="bg-clause-cloud py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((article) => (
            <article
              key={article.title}
              className="rounded-xl p-6 bg-white border border-clause-steel/10 hover:shadow-lg hover:-translate-y-0.5 transition-all h-full flex flex-col"
            >
              <p className="text-sm text-clause-steel mb-3">
                {article.date} · {article.category}
              </p>
              <h2 className="font-semibold text-clause-midnight leading-snug">
                {article.title}
              </h2>
              <span className="mt-auto pt-4 inline-block text-sm font-medium text-clause-intelligence">
                Read More →
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-clause-midnight sm:text-3xl">
            Want these ideas applied to your business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-clause-steel">
            Every article reflects how we work with clients. Start a conversation
            and we will map the ideas to your context.
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
