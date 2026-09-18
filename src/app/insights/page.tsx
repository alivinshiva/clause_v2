import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { InsightsIndex } from '@/components/InsightsIndex';
import { ServiceCTA } from '@/components/ServiceShell';
import { formatInsightDate, insightArticles, insightCategories, insightSummaries } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Insights on AI Transformation & Product Engineering',
  description:
    'Original Clause perspectives on AI strategy, responsible implementation, product engineering and the operating decisions behind useful systems.',
  openGraph: {
    title: 'Clause Insights — Practical Thinking for Intelligent Systems',
    description:
      'Original frameworks and practical perspectives for moving from AI ambition to accountable implementation.',
    images: [{
      url: '/images/insights/ai-experiments-to-value.png',
      alt: 'AI experiments converging into a focused operating system',
    }],
  },
};

export default function InsightsPage() {
  const featured = insightArticles.find((article) => article.featured) ?? insightArticles[0];

  return (
    <>
      <section className="relative overflow-hidden bg-[#07101f] px-6 pb-20 pt-36 text-white lg:pb-28 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgba(87,87,232,.2),transparent_34%)]" />
        <div className="hero-noise absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-7xl">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-clause-signal">
            <span className="h-px w-8 bg-clause-signal" /> Clause Insights
          </p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="max-w-5xl text-[clamp(3.5rem,7.2vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-balance">
              Thinking for the decisions behind the technology.
            </h1>
            <p className="max-w-lg text-lg leading-8 text-white/60 lg:pb-2">
              Original frameworks and practical perspectives on choosing valuable AI opportunities, building responsible systems and turning ideas into operating change.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">Featured perspective</p>
          <article className="mt-8 overflow-hidden rounded-[2rem] border border-clause-midnight/10 bg-clause-cloud shadow-[0_25px_70px_rgba(11,18,36,.06)]">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <Link href={`/insights/${featured.slug}`} className="relative min-h-[360px] overflow-hidden bg-[#07101f] lg:min-h-[580px]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/50 to-transparent" />
              </Link>
              <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-clause-steel">
                  <span className="text-clause-intelligence">{featured.category}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={featured.publishedAt}>{formatInsightDate(featured.publishedAt)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readingTime}</span>
                </div>
                <div className="my-auto py-12">
                  <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-clause-midnight sm:text-5xl">{featured.title}</h2>
                  <p className="mt-6 text-lg leading-8 text-clause-steel">{featured.dek}</p>
                </div>
                <Link href={`/insights/${featured.slug}`} className="inline-flex items-center gap-2 border-t border-clause-midnight/10 pt-6 text-sm font-semibold text-clause-intelligence transition-all hover:gap-3">
                  Read the full perspective <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-clause-cloud px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <p className="section-label">Latest thinking</p>
              <h2 className="section-title mt-5">Built to be used, not just agreed with.</h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-clause-steel lg:pb-1">Each article turns a broad transformation question into a framework, a set of decisions or a practical next move.</p>
          </div>
          <div className="mt-12">
            <InsightsIndex articles={insightSummaries} categories={insightCategories} />
          </div>
        </div>
      </section>

      <section className="bg-[#07101f] px-6 py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-clause-signal">
              <span className="h-px w-8 bg-clause-signal" /> Editorial standard
            </p>
            <h2 className="mt-6 text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.06em]">A point of view should create a better decision.</h2>
          </div>
          <div className="border-t border-white/12">
            {[
              ['Original', 'Our writing develops a Clause framework or position instead of repeating generic AI commentary.'],
              ['Practical', 'Every perspective gives the reader a clearer question, decision or action they can use.'],
              ['Honest', 'We distinguish established practice, informed judgment and questions that still require evidence.'],
            ].map(([title, description], index) => (
              <article key={title} className="grid gap-4 border-b border-white/12 py-7 sm:grid-cols-[3rem_0.7fr_1.3fr] sm:gap-7">
                <span className="text-xs text-clause-signal">0{index + 1}</span>
                <h3 className="font-semibold text-white/88">{title}</h3>
                <p className="text-sm leading-6 text-white/48">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        eyebrow="Apply the thinking"
        title="Move from an interesting idea to a useful next decision."
        description="Bring the workflow, opportunity or implementation question. We will help clarify what matters, what needs evidence and what a responsible first move looks like."
        label="Start a focused conversation"
      />
    </>
  );
}
