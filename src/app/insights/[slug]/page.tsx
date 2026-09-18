import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatInsightDate, getInsight, insightArticles } from '@/lib/insights';
import { siteOrigin } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return { title: 'Insight' };

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    authors: [{ name: article.author }],
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: `/insights/${article.slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      images: [{ url: article.image, alt: article.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  const related = insightArticles.filter((candidate) => candidate.slug !== article.slug).slice(0, 2);
  const articleUrl = `${siteOrigin}/insights/${article.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        image: `${siteOrigin}${article.image}`,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        mainEntityOfPage: articleUrl,
        author: { '@type': 'Organization', name: 'Clause Editorial', url: siteOrigin },
        publisher: { '@type': 'Organization', name: 'Clause Holdings', url: siteOrigin },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteOrigin },
          { '@type': 'ListItem', position: 2, name: 'Insights', item: `${siteOrigin}/insights` },
          { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <article>
        <header className="relative overflow-hidden bg-[#07101f] px-6 pb-16 pt-32 text-white lg:pb-24 lg:pt-40">
          <div className="hero-noise absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-7xl">
            <Link href="/insights" className="inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white">
              <span aria-hidden="true">←</span> All insights
            </Link>
            <div className="mt-9 grid items-end gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  <span className="text-clause-signal">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.publishedAt}>{formatInsightDate(article.publishedAt)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{article.readingTime}</span>
                </div>
                <h1 className="mt-7 text-[clamp(3.1rem,6.1vw,6.2rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-balance">{article.title}</h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">{article.dek}</p>
                <div className="mt-9 flex items-center gap-3 border-t border-white/12 pt-5 text-xs text-white/42">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] font-semibold text-white/72">C</span>
                  <span>By {article.author}</span>
                  {article.updatedAt !== article.publishedAt && <><span aria-hidden="true">·</span><span>Updated {formatInsightDate(article.updatedAt)}</span></>}
                </div>
              </div>

              <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_35px_100px_rgba(0,0,0,.35)] sm:min-h-[520px]">
                <Image src={article.image} alt={article.imageAlt} fill priority sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/55 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </header>

        <div className="bg-white px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="section-label">In this perspective</p>
              <nav aria-label="Article sections" className="mt-5 border-t border-clause-midnight/12">
                {article.sections.map((section, index) => (
                  <a key={section.id} href={`#${section.id}`} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-clause-midnight/12 py-3 text-xs leading-5 text-clause-steel transition-colors hover:text-clause-intelligence">
                    <span className="text-clause-intelligence">0{index + 1}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </aside>

            <div>
              <section className="rounded-[1.6rem] bg-clause-cloud p-7 sm:p-9" aria-labelledby="takeaways-title">
                <p id="takeaways-title" className="section-label">Key takeaways</p>
                <ul className="mt-6 space-y-4">
                  {article.keyTakeaways.map((takeaway) => (
                    <li key={takeaway} className="flex gap-4 text-base leading-7 text-clause-midnight">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-clause-intelligence" />{takeaway}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="mt-16 space-y-16">
                {article.sections.map((section, index) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-medium text-clause-intelligence">0{index + 1}</span>
                      <span className="h-px flex-1 bg-clause-midnight/10" />
                    </div>
                    <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.045em] text-clause-midnight sm:text-4xl">{section.title}</h2>
                    <div className="mt-7 space-y-6">
                      {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-[1.08rem] leading-8 text-clause-graphite/82">{paragraph}</p>)}
                    </div>
                    {section.bullets && (
                      <ul className="mt-8 space-y-3 border-l-2 border-clause-intelligence/30 pl-6">
                        {section.bullets.map((bullet) => <li key={bullet} className="text-base leading-7 text-clause-steel">{bullet}</li>)}
                      </ul>
                    )}
                    {section.callout && (
                      <blockquote className="mt-9 rounded-2xl bg-[#eef1ff] p-7 text-xl font-semibold leading-8 tracking-[-0.025em] text-clause-midnight sm:p-8 sm:text-2xl">
                        “{section.callout}”
                      </blockquote>
                    )}
                  </section>
                ))}
              </div>

              <div className="mt-16 flex flex-col gap-5 border-t border-clause-midnight/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-clause-midnight">Clause Editorial</p>
                  <p className="mt-1 text-sm text-clause-steel">Original thinking from the Clause transformation and product practice.</p>
                </div>
                <Link href="/contact" className="button-primary-dark">Apply this thinking <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-clause-cloud px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">Continue reading</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {related.map((candidate) => (
              <Link key={candidate.slug} href={`/insights/${candidate.slug}`} className="group grid overflow-hidden rounded-2xl border border-clause-midnight/10 bg-white sm:grid-cols-[0.42fr_0.58fr]">
                <div className="relative min-h-52 overflow-hidden bg-[#07101f]">
                  <Image src={candidate.image} alt="" fill sizes="(min-width: 768px) 22vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                </div>
                <div className="flex flex-col p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-clause-intelligence">{candidate.category}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-tight tracking-[-0.035em] text-clause-midnight">{candidate.title}</h3>
                  <span className="mt-auto pt-7 text-sm font-semibold text-clause-intelligence">Read next <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
