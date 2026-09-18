export type InsightSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
};

export type InsightArticle = {
  slug: string;
  title: string;
  dek: string;
  excerpt: string;
  category: 'AI Strategy' | 'Responsible AI';
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  author: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  keyTakeaways: string[];
  sections: InsightSection[];
};

export type InsightSummary = Pick<
  InsightArticle,
  'slug' | 'title' | 'excerpt' | 'category' | 'publishedAt' | 'readingTime' | 'image' | 'imageAlt' | 'featured'
>;

export const insightArticles: InsightArticle[] = [
  {
    slug: 'from-ai-experiments-to-business-value',
    title: 'From AI Experiments to Business Value',
    dek: 'The difficult part of enterprise AI is rarely producing another demonstration. It is choosing a decision or workflow worth changing, then building the conditions for that change to last.',
    excerpt: 'A practical framework for turning disconnected AI activity into an accountable operating change.',
    category: 'AI Strategy',
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
    readingTime: '8 min read',
    author: 'Clause Editorial',
    image: '/images/insights/ai-experiments-to-value.png',
    imageAlt: 'Scattered AI experiments converging into one focused operating system',
    featured: true,
    keyTakeaways: [
      'Start with a consequential decision or workflow, not a model demonstration.',
      'Define value, ownership and evidence before choosing the technology pattern.',
      'Treat adoption, controls and operational fit as part of the product itself.',
    ],
    sections: [
      {
        id: 'activity-is-not-value',
        title: 'AI activity is not the same as business value',
        paragraphs: [
          'Many organisations now have an impressive collection of AI activity: workshops, licences, experiments, internal demos and isolated automations. That activity can be useful, but it is not evidence that the business operates differently.',
          'A demonstration proves that a technical interaction is possible. Business value requires a workflow to become faster, safer, more consistent or more useful—and for the people responsible for that workflow to adopt the change. The distance between those two outcomes is where most AI programmes lose momentum.',
          'The practical question is therefore not “Where can we use AI?” It is “Which decision, hand-off or repeated task is important enough to redesign, and what evidence would show that the redesign worked?”',
        ],
        callout: 'A prototype demonstrates capability. A pilot produces evidence. An operating system sustains the change.',
      },
      {
        id: 'name-the-change',
        title: 'Name the operating change before selecting the tool',
        paragraphs: [
          'Useful AI initiatives begin with a specific unit of work. That might be resolving a customer request, preparing a proposal, reviewing a document, prioritising an opportunity or deciding whether a release is ready.',
          'The unit of work gives the team something observable. It has inputs, decisions, constraints, owners and an existing level of performance. Without that specificity, an AI initiative becomes a broad technology ambition with no stable way to judge progress.',
        ],
        bullets: [
          'Who currently owns the decision or workflow?',
          'What delay, inconsistency, risk or missed opportunity matters?',
          'Which parts require judgment, and which are repeatable?',
          'What would a meaningful improvement look like in operational terms?',
        ],
      },
      {
        id: 'design-the-value-chain',
        title: 'Design the complete value chain',
        paragraphs: [
          'An AI capability only creates value as part of a larger system. Data has to arrive with enough context. Outputs need to appear at the right moment. A person must know when to trust, review or reject them. Exceptions need somewhere to go. The organisation needs a way to learn from real use.',
          'This is why apparently simple assistants often become operating-model projects. The model may generate a strong answer, while unclear source quality, missing permissions or an awkward hand-off prevents the answer from being useful.',
          'Mapping the complete value chain early exposes these dependencies before the team mistakes model performance for production readiness.',
        ],
        bullets: [
          'Inputs: the data, documents and context the system needs.',
          'Intelligence: the model, retrieval or rules that shape the output.',
          'Decision: the person or process that acts on the output.',
          'Control: review, escalation, security and audit requirements.',
          'Learning: the feedback that improves the workflow over time.',
        ],
      },
      {
        id: 'pilot-for-evidence',
        title: 'Run a pilot to answer a decision',
        paragraphs: [
          'A good pilot is not a smaller production rollout. It is a deliberately bounded way to reduce uncertainty. It should test the riskiest assumption with realistic users, representative inputs and explicit success criteria.',
          'The evidence may show that the workflow creates value, that the data is not ready, that users need a different interaction or that the control burden is greater than expected. All four results are useful if they prevent a larger unsupported investment.',
        ],
        callout: 'The purpose of a pilot is not to prove the original idea right. It is to make the next investment decision better informed.',
      },
      {
        id: 'move-into-operation',
        title: 'Make adoption and accountability part of the build',
        paragraphs: [
          'Moving from a pilot to operation requires more than technical hardening. Roles change. Review expectations become explicit. Teams need guidance for normal cases and exceptions. Leaders need measures that reveal whether the workflow is creating value or merely generating activity.',
          'The strongest programmes assign an operational owner early, involve real users before the design becomes fixed and document how human judgment interacts with the system. They measure the business workflow alongside technical performance.',
          'AI becomes valuable when it stops being an interesting layer beside the work and becomes a carefully governed part of how the work gets done.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-prioritise-enterprise-ai-use-cases',
    title: 'How to Prioritise Enterprise AI Use Cases',
    dek: 'A long list of possible use cases creates the appearance of strategy. Real prioritisation makes the trade-offs visible and selects the few opportunities capable of producing useful evidence.',
    excerpt: 'A decision framework for choosing AI opportunities across value, feasibility, risk and adoption.',
    category: 'AI Strategy',
    publishedAt: '2026-08-26',
    updatedAt: '2026-09-10',
    readingTime: '9 min read',
    author: 'Clause Editorial',
    image: '/images/insights/prioritise-ai-use-cases.png',
    imageAlt: 'Many opportunity signals passing through decision layers into a focused shortlist',
    keyTakeaways: [
      'Evaluate complete workflow opportunities, not isolated AI features.',
      'Use value, feasibility, adoption and consequence as separate lenses.',
      'Select a balanced portfolio instead of ranking everything with one synthetic score.',
    ],
    sections: [
      {
        id: 'the-backlog-problem',
        title: 'The problem with the AI use-case backlog',
        paragraphs: [
          'Once people are invited to suggest AI ideas, organisations rarely suffer from a shortage. Lists quickly fill with assistants, generators, predictors and automations. The difficulty is that the items are usually described at different levels of detail and supported by different assumptions.',
          'One entry may describe a clear workflow with an owner and known cost. Another may be a technology capability searching for a problem. Ranking both in the same spreadsheet creates precision without comparability.',
          'Before scoring anything, rewrite each candidate as an operating opportunity: a defined user, a current workflow, a meaningful friction and an intended change.',
        ],
      },
      {
        id: 'four-lenses',
        title: 'Use four lenses, not one score',
        paragraphs: [
          'A weighted score can help organise discussion, but it should not hide the reasoning behind it. Four separate lenses keep the most important trade-offs visible.',
        ],
        bullets: [
          'Value: the scale, frequency and strategic importance of the problem.',
          'Feasibility: data readiness, integration effort and technical uncertainty.',
          'Adoption: workflow fit, user incentive, ownership and capability change.',
          'Consequence: the impact of error, privacy exposure and required oversight.',
        ],
        callout: 'A high-value opportunity with no credible owner is not ready. A technically easy opportunity with no meaningful outcome is not strategic.',
      },
      {
        id: 'find-evidence-path',
        title: 'Look for the shortest path to useful evidence',
        paragraphs: [
          'The first initiative should not automatically be the opportunity with the largest theoretical return. It should have a credible route to evidence: representative inputs, accessible users, a bounded workflow and measures that can change a decision.',
          'Evidence velocity matters because the organisation is learning more than whether one use case works. It is learning how quickly data can be made usable, how governance decisions are made, where adoption resistance appears and what production standards will be required.',
          'A well-chosen first pilot therefore creates both local evidence and reusable organisational capability.',
        ],
      },
      {
        id: 'build-a-portfolio',
        title: 'Build a portfolio, not a race',
        paragraphs: [
          'AI opportunities serve different strategic purposes. Some remove repeated operational effort. Some improve the quality of a decision. Some create a differentiated customer experience. Others build a foundational knowledge or data capability.',
          'Collapsing every opportunity into one ranking can cause quick efficiency ideas to crowd out more important learning, or ambitious transformation ideas to absorb resources before the organisation has built delivery confidence.',
        ],
        bullets: [
          'One near-term workflow where value can be evidenced quickly.',
          'One strategic opportunity that tests a differentiating capability.',
          'One enabling investment that improves data, governance or adoption readiness.',
        ],
      },
      {
        id: 'decision-output',
        title: 'End prioritisation with commitments',
        paragraphs: [
          'The output of prioritisation is not the matrix. It is a small set of commitments: which workflow will be tested, who owns it, what assumption the pilot must resolve, what evidence will be collected and what conditions would justify scaling or stopping.',
          'Opportunities that are not selected should still receive a reason and a revisit condition. That prevents the backlog from becoming a graveyard of unexplained decisions and makes future reviews faster.',
          'Prioritisation is valuable when it concentrates attention and creates permission to say no—not when it simply gives every idea a decimal score.',
        ],
      },
    ],
  },
  {
    slug: 'building-responsible-ai-governance',
    title: 'Building Responsible AI Governance',
    dek: 'Governance creates value when it helps teams make proportionate decisions close to the work. It fails when it exists only as policy language or treats every AI use in exactly the same way.',
    excerpt: 'How to turn responsible AI principles into practical decision rights, workflow controls and evidence.',
    category: 'Responsible AI',
    publishedAt: '2026-08-12',
    updatedAt: '2026-09-12',
    readingTime: '10 min read',
    author: 'Clause Editorial',
    image: '/images/insights/responsible-ai-governance.png',
    imageAlt: 'An intelligent signal passing through transparent review and control layers',
    keyTakeaways: [
      'Classify AI uses by consequence and context rather than applying one process to everything.',
      'Place review, escalation and evidence capture inside the operating workflow.',
      'Treat governance as a feedback system that evolves with real use.',
    ],
    sections: [
      {
        id: 'governance-is-operating-design',
        title: 'Governance is operating design',
        paragraphs: [
          'Responsible AI is often introduced as a set of principles: fairness, transparency, privacy, accountability and safety. Those principles matter, but teams still need to know who can approve a use, what evidence is required and what happens when the system behaves unexpectedly.',
          'That makes governance an operating-design problem. It connects policy to roles, workflow steps, technical controls and records. If those connections are missing, a policy may be admirable while daily decisions remain inconsistent.',
          'The objective is not to eliminate uncertainty. It is to make consequential decisions deliberate, reviewable and owned.',
        ],
      },
      {
        id: 'classify-by-consequence',
        title: 'Classify by consequence and context',
        paragraphs: [
          'Not every use of AI deserves the same control burden. A tool that reformats internal notes is different from a system that recommends employment, financial or healthcare decisions. Governance should respond to what the system influences, who may be affected and how reversible an error would be.',
          'A practical classification asks about the decision, the data, the audience, the degree of autonomy and the potential impact. Higher-consequence uses require stronger evidence, oversight and monitoring. Low-consequence uses can move through a lighter path without bypassing basic security and privacy expectations.',
        ],
        bullets: [
          'What decision or action can the system influence?',
          'Who could be affected by an incorrect or biased result?',
          'Does the system use sensitive, personal or confidential information?',
          'Can a person meaningfully review the output before it causes an effect?',
          'How quickly could the organisation detect and correct a failure?',
        ],
      },
      {
        id: 'assign-decision-rights',
        title: 'Assign decision rights, not just responsibilities',
        paragraphs: [
          'A list of stakeholders is not an accountability model. Teams need to know who may propose a use, who evaluates risk, who owns the business outcome, who accepts residual risk and who can pause the system.',
          'These rights should sit as close to the relevant expertise as possible. Central governance can set standards and handle high-consequence cases, while trained domain owners make proportionate decisions for routine uses. This avoids both uncontrolled experimentation and a central committee that becomes a bottleneck.',
        ],
        callout: 'Human oversight is meaningful only when the reviewer has enough context, authority and time to intervene.',
      },
      {
        id: 'controls-in-the-workflow',
        title: 'Put controls inside the workflow',
        paragraphs: [
          'Controls are most reliable when they are part of how the product works. Source citations can appear beside generated answers. Sensitive actions can require explicit confirmation. Low-confidence cases can route to a specialist. Access rules can limit what the system retrieves. Logs can preserve the evidence needed for review.',
          'Training and policy still matter, but they should not carry the entire burden. If safe use depends on every person remembering a long document at the exact moment of action, the system design is incomplete.',
        ],
        bullets: [
          'Prevent: permissions, data boundaries and prohibited actions.',
          'Detect: monitoring, quality checks and anomaly signals.',
          'Respond: review queues, escalation and the ability to pause.',
          'Learn: incident analysis, user feedback and control updates.',
        ],
      },
      {
        id: 'minimum-viable-governance',
        title: 'Start with minimum viable governance',
        paragraphs: [
          'An organisation does not need an elaborate bureaucracy before it can learn responsibly. It needs an inventory of active uses, a proportionate classification method, named owners, a review path for higher-consequence cases and a small evidence record for important decisions.',
          'The framework should then evolve from real usage. Incidents, exceptions, user behaviour and changing regulation reveal where controls are too weak, too heavy or attached to the wrong point in the workflow.',
          'Good governance gives teams a safer route to action. It makes expectations clear enough that valuable work can move, while ensuring the organisation can explain what it built, why it made the decision and how it remains accountable.',
        ],
      },
    ],
  },
];

export const insightSummaries: InsightSummary[] = insightArticles.map((article) => ({
  slug: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  category: article.category,
  publishedAt: article.publishedAt,
  readingTime: article.readingTime,
  image: article.image,
  imageAlt: article.imageAlt,
  featured: article.featured,
}));

export const insightCategories = ['All', ...new Set(insightArticles.map((article) => article.category))];

export function getInsight(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}

export function formatInsightDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
