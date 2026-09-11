# Clause Holdings — Complete Website Makeover Plan

## 1. Transformation objective

Rebuild Clause Holdings as a distinctive, premium digital experience that makes a visitor understand four things quickly:

1. Clause solves valuable business problems with AI, product engineering and growth expertise.
2. Clause can move from strategy to a working, measurable system.
3. Clause has original thinking and owned product capability, even as a young company.
4. The next step is a focused, low-friction discovery conversation.

The new site should feel like an intelligent product company with consulting depth, not a conventional consulting template.

### Recommended mission

> Help ambitious organisations turn complex knowledge, workflows and growth challenges into responsible AI systems and digital products that deliver measurable results.

### Recommended positioning

> Clause is an AI transformation and product engineering partner—from business problem to production-ready system.

### Core audience

The first version should speak primarily to founders, functional leaders and transformation leaders in growing and mid-market organisations that:

- have important AI opportunities but no clear implementation path;
- need to modernise a workflow, customer experience or decision process;
- want a product-grade solution rather than a slide deck;
- need strategy, implementation and team enablement from one partner.

Marketing expertise should be framed as **AI-enabled growth systems**, so it supports the central positioning instead of appearing to be a separate general-purpose agency.

---

## 2. Non-negotiable experience principles

### Clarity before spectacle

Every page must answer, in this order: who it is for, what problem is solved, what outcome is created, how Clause does it and what the visitor should do next.

### Premium through restraint

Use fewer colours, stronger typography, intentional whitespace, high-quality visual assets and precise motion. Avoid filling every section with cards, gradients or animation.

### Evidence before capability lists

Show prototypes, product interfaces, frameworks, sample deliverables, measurable targets and working methods before long lists of services.

### One idea per viewport

Each major section should have a clear focal point. Alternate editorial layouts, interface compositions, diagrams and selective card groups to prevent visual monotony.

### Honest credibility

Clause has not yet worked with external companies, so the site must not use fabricated client logos, testimonials, case studies, revenue numbers or outcome claims.

Use these truthful credibility assets instead:

- Clause-owned product logos: TestArq, ShowGrid and Grid Pulse;
- product prototypes and real interface screenshots;
- founder and team experience, accurately attributed;
- original frameworks and diagnostic methods;
- working demos, pilots and sample deliverables;
- technology logos only when the technology is genuinely used, labelled **Technology ecosystem** or **Built with**, never **Trusted by**;
- clearly labelled concept studies or internal builds;
- certifications, partnerships and memberships only after they are verifiable.

If a temporary design needs sample logos, use neutral placeholders that cannot ship to production and track their removal as a release blocker.

---

## 3. Proposed information architecture

### Primary navigation

- What We Do
  - AI Transformation
  - AI-Enabled Growth
  - Product & Platform Engineering
- Products
- Work
- Insights
- About
- **Book a Discovery Call**

### Navigation behaviour

- Use one compact sticky header with a refined wordmark.
- Put the three service areas in an accessible desktop dropdown and mobile accordion.
- Make the discovery CTA the only filled control in the header.
- Remove the public theme switcher from the production navigation.
- Keep active-route feedback subtle.
- Add a skip-to-content link and full keyboard support.

### Route strategy

| Proposed route | Role | Existing route/action |
|---|---|---|
| `/` | Brand, value proposition and conversion | Complete redesign |
| `/services` | Overview of the three connected capabilities | Evolve `/consulting` |
| `/services/ai-transformation` | AI strategy, automation, governance and adoption | Evolve `/consulting/ai` |
| `/services/ai-growth` | Positioning, demand, AI search and growth systems | Evolve `/consulting/marketing` |
| `/services/product-engineering` | Custom AI products, SaaS, data and platforms | Evolve `/build-studio` |
| `/products` | Clause product and venture portfolio | Redesign existing route |
| `/products/[product]` | Product narrative, interface and conversion | Redesign existing routes |
| `/work` | Demonstrations, concept studies and later client results | New route |
| `/industries` | Supporting sector-specific problems and solutions | Retain, reduce prominence |
| `/insights` | Search-led thought leadership hub | Rebuild existing route |
| `/insights/[slug]` | Real article pages | New dynamic route |
| `/about` | Mission, team, principles and operating model | Redesign existing route |
| `/contact` | Qualification and scheduling | Rebuild existing route |

Before changing URLs, define permanent redirects from existing routes so search equity and bookmarks are preserved. If the team wants to avoid URL migration initially, the new experience can ship on the existing paths and migrate later.

---

## 4. Visual identity and art direction

### Desired character

The interface should feel:

- intelligent, editorial and product-led;
- confident without exaggerated claims;
- precise, calm and slightly unconventional;
- technically credible without using generic futuristic imagery.

Avoid common consulting-site patterns: handshake photography, office stock photos, glowing robot heads, random 3D blobs, endless icon grids and vague “digital transformation” copy.

### Colour system

- Keep midnight as the structural colour and indigo as the primary action colour.
- Use cyan sparingly for signals, data and moments of discovery.
- Replace the many unrelated pastel section backgrounds with a small surface system: white, cloud, midnight and one tinted accent surface.
- Introduce semantic tokens for text, border, surface, focus, success and error states.
- Verify WCAG AA contrast for normal text and controls.

### Typography

Use a deliberate two-family system:

- **Display:** a distinctive but highly readable variable typeface for major headlines.
- **Interface/body:** a neutral, precise grotesk for paragraphs, navigation and controls.
- **Mono accent:** optional and limited to labels, data and process markers.

Candidate direction: a restrained editorial display face paired with Geist Sans, or a premium grotesk if licensing allows. Self-host production font files through `next/font/local` to avoid build-time network dependency and layout shifts.

Typography rules:

- Use tighter, shorter headlines with controlled line breaks.
- Keep body copy around 60–72 characters per line.
- Create a fluid type scale rather than repeating the same heading size.
- Use sentence case for most headings; reserve uppercase for small technical labels.
- Use font weight and spacing for hierarchy instead of excessive colour.

### Layout language

- Use a 12-column desktop grid and consistent max-width tokens.
- Mix full-bleed visual moments with narrower editorial copy.
- Create intentional negative space around decisive statements.
- Use thin rules, numbered markers and data-like annotations as recurring brand details.
- Keep border radii controlled; not every element should be a rounded card.
- Use cards only when the content represents a selectable object or distinct unit.

### Motion

- Use motion to reveal relationships: system diagrams, process progression and product transitions.
- Prefer subtle opacity, mask, line-draw and 8–16px positional movement.
- Avoid animating every paragraph and card.
- Remove cursor-following effects from content-heavy pages unless testing shows genuine value.
- Respect reduced-motion preferences everywhere.
- Keep interaction feedback fast, typically 150–300ms.

---

## 5. Image and visual asset strategy

The site currently has no meaningful imagery. The makeover should use a coherent visual library rather than isolated decorative images.

### Visual asset families

1. **Product interfaces**
   - High-resolution screenshots and device compositions for each Clause product.
   - Show a meaningful workflow, not an empty dashboard.
   - Use consistent perspective, lighting, radius and background treatment.

2. **Intelligence-system diagrams**
   - Original diagrams showing how fragmented inputs become governed workflows, decisions and measurable outcomes.
   - Build simple diagrams as accessible HTML/SVG when possible so they stay sharp and responsive.

3. **Editorial concept imagery**
   - A small set of art-directed abstract images based on signals, systems, knowledge and decision-making.
   - Use for hero compositions, service headers and insight covers.
   - Maintain one visual grammar rather than using unrelated AI-generated styles.

4. **Human credibility**
   - High-quality founder/team portraits and candid working images when available.
   - Avoid staged boardroom stock photography.

5. **Proof artefacts**
   - Cropped diagnostic reports, roadmap excerpts, architecture diagrams, prototype frames and governance matrices.
   - Clearly label samples and concept work.

### Route-by-route image placement

| Route | Primary visual |
|---|---|
| Home | Interactive or layered “problem → intelligent system → outcome” composition beside the hero copy |
| Services | Three connected system modules rather than three generic service cards |
| AI Transformation | Workflow/agent architecture and a sample opportunity-prioritisation matrix |
| AI-Enabled Growth | Customer-signal-to-growth-system diagram and an analytics interface |
| Product Engineering | Product screens, architecture layers and delivery artefacts |
| Products | One strong product image per portfolio item with its own visual identity |
| Product detail | Hero interface, workflow sequence, capabilities in context and demo CTA |
| Work | Large project/prototype imagery supported by problem, approach and evidence |
| Industries | Selective sector imagery or data patterns; do not use ten generic stock images |
| Insights | Consistent editorial covers generated from category-specific visual rules |
| About | Founder portrait, working principles and behind-the-scenes product artefacts |
| Contact | Minimal; use one quiet brand composition so the form remains dominant |

### Image production rules

- Start with a visual moodboard and approve one art direction before producing final assets.
- Use local source assets with documented ownership and licence.
- Produce master images large enough for retina displays, then let `next/image` serve responsive sizes.
- Define aspect-ratio presets such as hero 16:10, editorial 4:3, card 3:2 and portrait 4:5.
- Reserve dimensions to avoid layout shift and use meaningful alt text; decorative images should have empty alt text.
- Lazy-load below-the-fold imagery. Prioritise only the real largest-contentful-paint image.
- Keep image overlays readable and do not place critical text inside bitmap files.
- Give every insight cover and product image a shareable crop suitable for Open Graph.

---

## 6. Page transformation specifications

### Home

1. **Hero:** one sharp promise, one supporting paragraph, primary discovery CTA and secondary “See how we work” link.
2. **Credibility strip:** Clause product marks and, only if truthful, technology ecosystem logos. Label the row accurately.
3. **Challenge selector:** three business problems written from the buyer's perspective.
4. **Featured work:** internal product builds and concept studies with visible artefacts and honest labels.
5. **Connected capability model:** diagnose, design, build, enable and optimise.
6. **Starter engagement:** feature one high-conversion offer, such as the AI Opportunity Sprint.
7. **Product portfolio:** three visually rich product stories without a hidden carousel.
8. **Selected insight:** one featured article plus two supporting articles.
9. **Founder point of view:** a short, credible statement with portrait or signature treatment.
10. **Final CTA:** specific expectation, meeting length and what happens after submission.

Target: a new visitor should understand Clause within 10 seconds and reach an appropriate next step within two decisions.

### Services overview

- Explain the shared method before listing capabilities.
- Present three service paths based on buyer outcomes.
- Show when each path is appropriate, typical deliverables and engagement shape.
- Add a comparison table that helps visitors self-select.
- Surface starter engagements and realistic timeframes.

### AI Transformation

- Lead with operational outcomes, not AI terminology.
- Organise content around Discover, Pilot, Govern and Scale.
- Include an opportunity matrix, sample workflow and governance artefact.
- Add buyer-specific sections for operations, knowledge, customer service and leadership.
- CTA: **Map your highest-value AI opportunity**.

### AI-Enabled Growth

- Reframe marketing services as an intelligent growth system.
- Connect positioning, demand, AI-search visibility, automation and analytics.
- Include a customer journey or signal-flow visual.
- Keep conventional channel lists secondary.
- CTA: **Diagnose your growth system**.

### Product & Platform Engineering

- Show how Clause goes from problem validation to a production-ready product.
- Include tangible artefacts for discovery, UX, architecture, engineering, QA and operations.
- Explain build-versus-buy judgment, security expectations and ownership/handoff.
- CTA: **Discuss a product build**.

### Products overview and detail

- Give TestArq, ShowGrid and Grid Pulse distinct visual identities inside the Clause system.
- State product maturity honestly: concept, prototype, pilot, beta or production.
- Add “Who it is for,” “Problem,” “How it works,” “Key workflow,” “Business value” and “Request a demo.”
- Replace modal-first exploration with visible product storytelling and direct navigation.
- Use screenshots or prototypes as the main proof.

### Work

Until external client engagements exist, call entries **Clause Labs**, **Product Build** or **Concept Study**, not client case studies.

Each entry should contain:

- the problem;
- the intended user;
- constraints and assumptions;
- the system or prototype;
- key design/technical decisions;
- what was validated or learned;
- next stage/status.

Later, replace or supplement these with permissioned client case studies containing verified outcomes.

### Industries

- Reduce the ten equal industry cards to three or four priority sectors based on commercial focus.
- Describe sector-specific problems, regulatory context and relevant Clause capability.
- Link each sector to relevant work, products and insights.
- Put remaining sectors in a compact “Additional contexts” section.

### Insights

- Create real article routes; remove non-functional “Read more” labels.
- Add featured article, category filters and clear publish/update dates.
- Use author profiles, reading time, table of contents and related articles.
- Build topic clusters around AI transformation, responsible AI, agentic workflows, AI-enabled growth and product engineering.
- Every article should provide original analysis, examples, frameworks or evidence rather than generic AI summaries.

### About

- Lead with why Clause exists and the problem it sees in the market.
- Add real founder/team biographies, relevant experience and areas of accountability.
- Explain how consulting, building and products reinforce one another.
- Keep principles concise and demonstrate each with an operating behaviour.
- Include location, working model and the kinds of partners Clause works best with.

### Contact

- Offer two paths: book a discovery call or submit a scoped enquiry.
- Explain what happens next and expected response time.
- Use required validation, accessible errors, loading/success states, spam protection and a working server-side submission path.
- Ask only qualification questions that influence the response: goal, organisation, urgency and optional budget range.
- Add privacy consent and a privacy-policy link.
- Track form starts, errors, submissions and scheduling conversions without collecting unnecessary personal data.

### Footer

- Add service, product, insight and company navigation.
- Include a concise positioning statement, primary CTA, contact method, location, social links and legal links.
- Add privacy, cookies and terms pages before production launch.

---

## 7. Content and conversion system

### Message hierarchy

Use a consistent pattern across pages:

1. Outcome-led headline
2. Specific audience/problem statement
3. Evidence or visual demonstration
4. Method and deliverables
5. Risk reduction and credibility
6. Relevant next step

### Copy rules

- Prefer concrete verbs: diagnose, prioritise, design, build, govern, ship, measure.
- Replace vague claims such as “innovative,” “cutting-edge” and “world-class” with observable detail.
- Keep one main message and one primary CTA per section.
- Explain acronyms such as AEO and GEO on first use.
- Never imply client outcomes that have not occurred.
- State product status and engagement expectations clearly.

### CTA ladder

Use CTAs matched to visitor readiness:

- Early: **See how it works**
- Exploring: **View a sample deliverable**
- Evaluating: **Explore the AI Opportunity Sprint**
- Ready: **Book a 30-minute discovery call**
- Product buyer: **Request a product demo**

---

## 8. SEO and discoverability plan

### Technical SEO

- Define a canonical production domain and `metadataBase`.
- Add unique title templates and compelling descriptions for every indexable route.
- Add canonical URLs, Open Graph metadata, Twitter metadata and route-specific share images.
- Create `src/app/sitemap.ts` covering static pages, product pages and published insights.
- Create `src/app/robots.ts` and reference the sitemap.
- Add Organization and WebSite JSON-LD globally.
- Add Service JSON-LD where appropriate, Product/SoftwareApplication markup for real products, Person markup for real team profiles, and Article/BreadcrumbList markup for insights.
- Do not add ratings, reviews or customer claims to structured data unless they are real and visible on the page.
- Add descriptive image filenames, alt text and image entries in the sitemap where valuable.
- Create a useful `not-found` experience and verify correct status codes.
- Implement permanent redirects for any changed routes.
- Add favicon variants, web app manifest and consistent brand social imagery.

### Search content architecture

Build pages around problems and buyer intent rather than isolated keyword lists:

- AI readiness assessment
- enterprise AI opportunity prioritisation
- AI workflow automation
- responsible AI governance
- enterprise knowledge assistants
- AI product development
- AI-enabled demand generation
- generative engine optimisation and AI search visibility

Map one primary intent to each commercial page. Avoid creating multiple pages that compete for the same query.

### Editorial authority

- Publish a small number of high-quality articles before launch rather than nine empty cards.
- Organise articles into topic clusters connected to service pages.
- Include a real author, publish date, updated date, sources where relevant and a distinct point of view.
- Add internal links from articles to related services, products, work and other articles.
- Create original frameworks or research assets that can earn links and mentions.

### Measurement

- Connect Google Search Console and privacy-conscious analytics.
- Track organic landing pages, qualified CTA clicks, form completion and booked calls.
- Establish baseline Core Web Vitals and indexed-page coverage before launch.
- Review search queries, conversions and page engagement monthly.

---

## 9. Accessibility, performance and quality

### Accessibility

- Meet WCAG 2.2 AA as the release target.
- Ensure semantic headings, landmarks and logical reading order.
- Provide visible focus states and keyboard operation for menus, dialogs, cards and carousels.
- Use real buttons/links instead of clickable `div` elements.
- Add dialog labelling, focus management and focus return where modals remain.
- Do not communicate meaning through colour alone.
- Test at 200% zoom, with reduced motion and with screen-reader navigation.

### Performance

- Keep most page content in Server Components; isolate only genuinely interactive components.
- Use local, optimised variable fonts and remove the global Arial override.
- Use `next/image` with correct responsive `sizes` and stable aspect ratios.
- Avoid video or large canvas effects in the first viewport unless performance budgets are met.
- Load analytics and scheduling tools after essential content.
- Remove unused experimental and stack code after the direction is approved.

### Suggested budgets

- Lighthouse performance: 90+ on representative mobile hardware.
- Accessibility, best practices and SEO: 95+.
- Largest Contentful Paint: under 2.5s at the 75th percentile.
- Interaction to Next Paint: under 200ms at the 75th percentile.
- Cumulative Layout Shift: under 0.1.

### Required verification

- ESLint and production build.
- Responsive review at mobile, tablet, laptop and wide desktop sizes.
- Keyboard and screen-reader smoke tests.
- Automated accessibility scan plus manual checks.
- Rich Results Test and schema validation.
- Social-share preview validation.
- Sitemap, robots, canonical and redirect verification.
- Real form submission, error, spam and notification testing.

---

## 10. Implementation architecture

### Design-system foundation

Create reusable tokens and primitives before rebuilding routes:

- colours, type scale, spacing, grids, radii, shadows and motion;
- container, section, eyebrow, heading, rich text and divider;
- button, text link, field, select and form feedback;
- media frame, figure, product mockup and logo row;
- metric, quote, comparison table, process and CTA band;
- header, dropdown, mobile navigation and footer.

Store repeatable business content in typed data structures or a content layer. Long-form insight content should move out of the general shared-data file into MDX or a CMS when publishing begins.

### Image directories

Use a predictable structure such as:

```text
public/
  brand/
  products/
    testarq/
    showgrid/
    grid-pulse/
  services/
  work/
  insights/
  team/
```

Keep editable source artwork outside the production bundle or in a clearly separated source directory.

---

## 11. Execution phases

### Phase 0 — Decisions and truthful source material

Deliverables:

- confirm primary audience, geography and commercial priority;
- approve mission, positioning and three service pillars;
- document product maturity and available demos;
- collect founder biographies and verifiable experience;
- decide production domain, enquiry destination and scheduling tool;
- identify which technology logos can be truthfully shown;
- create a claim/evidence register so every proof statement has a source.

Exit criterion: one approved positioning brief and no unresolved credibility claims.

### Phase 1 — Content architecture and wireframes

Deliverables:

- final sitemap and redirect map;
- homepage and route-level content outlines;
- desktop and mobile low-fidelity wireframes;
- CTA and conversion map;
- SEO keyword/intent map;
- image shot list and asset inventory.

Exit criterion: every page has one purpose, primary audience, primary query and primary CTA.

### Phase 2 — Visual direction

Deliverables:

- two focused moodboard directions;
- selected typography and licensing decision;
- colour, layout, image and motion system;
- high-fidelity homepage hero plus two representative sections;
- service, product-detail and insight-page samples;
- mobile navigation and contact form treatment.

Exit criterion: one approved design language tested on at least four different content types.

### Phase 3 — Asset production

Deliverables:

- Clause master wordmark and product marks;
- product screenshots/prototypes;
- hero visual and system diagrams;
- service and insight editorial imagery;
- founder/team photography or approved temporary non-deceptive treatment;
- Open Graph image templates;
- alt-text and licensing inventory.

Exit criterion: all launch-critical pages have final or explicitly approved temporary assets.

### Phase 4 — Foundation implementation

Deliverables:

- design tokens and typography;
- global layout, navigation and footer;
- responsive primitives and reusable content components;
- image pipeline and motion utilities;
- metadata foundation, JSON-LD helpers, sitemap and robots;
- analytics event specification;
- removal of obsolete theme/stack experiments after approval.

Exit criterion: component showcase passes responsive, accessibility and visual review.

### Phase 5 — Route implementation

Recommended order:

1. Home
2. Services overview
3. AI Transformation
4. Product & Platform Engineering
5. AI-Enabled Growth
6. Products overview and product details
7. Work
8. About
9. Industries
10. Insights and article template
11. Contact and legal pages

Complete content, responsive behaviour, metadata and QA for each route before moving it to “done.”

### Phase 6 — Conversion and content integration

Deliverables:

- working enquiry endpoint and scheduling integration;
- validation, spam prevention and notification flow;
- real insight articles;
- event tracking and conversion funnel;
- cookie/privacy treatment appropriate to the selected analytics stack.

Exit criterion: enquiry and booking flows work end to end with appropriate privacy controls.

### Phase 7 — Pre-launch QA and launch

Deliverables:

- content and claim audit;
- device/browser/accessibility testing;
- performance optimisation;
- structured-data, metadata and crawl review;
- redirect and broken-link validation;
- analytics and Search Console verification;
- post-launch monitoring checklist.

Exit criterion: no fabricated proof, broken CTAs, non-functional links, critical accessibility defects or indexation blockers.

### Phase 8 — Post-launch growth

- Review behavioural and search data after 2, 4 and 8 weeks.
- Test hero positioning and primary CTA wording.
- Publish one strong topic-cluster article at a sustainable cadence.
- Replace concept work with verified client stories as engagements are completed.
- Add testimonials only with explicit permission.
- Refine priority industries based on qualified enquiry data.

---

## 12. Prioritised backlog

### Must have for the makeover

- Approved positioning and information architecture
- New global design system
- New responsive navigation and complete footer
- Complete homepage redesign
- Route-wide redesign using shared components
- Real imagery/prototypes and a consistent art direction
- Honest credibility system
- Functional insights and contact journeys
- Route metadata, canonical URLs, sitemap, robots, JSON-LD and social images
- Accessibility, performance and responsive QA

### Should have

- Work/Clause Labs route
- Downloadable sample framework or diagnostic
- Scheduling integration
- Category-based insight system
- Reusable editorial image generator/template
- Lightweight, consent-aware analytics

### Later

- CMS if publishing frequency justifies it
- Personalised industry landing pages based on proven demand
- Interactive diagnostic or assessment
- Newsletter automation
- Multiple languages or regions
- Advanced motion and WebGL only if it supports the story and stays within performance budgets

---

## 13. Definition of success

The makeover is successful when:

- a first-time visitor can accurately explain Clause after viewing the hero and next two sections;
- every page has a clear audience, outcome and next step;
- visual distinction comes from a coherent system, original assets and product detail—not decorative excess;
- credibility is strong without implying clients or outcomes that do not exist;
- product, consulting and engineering offers feel like one connected model;
- all visible links and forms work;
- search engines can crawl, understand and share every intended public route;
- the experience is fast, accessible and convincing on mobile as well as desktop;
- the site can absorb future case studies, products and insights without another structural redesign.

---

## 14. First implementation milestone

The safest first build milestone is a **design-system slice**, not the entire homepage:

1. Approve the positioning and final navigation labels.
2. Build the global typography, colour, spacing and layout tokens.
3. Create the new header and footer.
4. Build a high-fidelity homepage hero with its real visual asset.
5. Build one challenge section, one product story, one work entry and one CTA/form state.
6. Test that slice on desktop and mobile for accessibility and performance.
7. Use the approved slice as the system for every remaining route.

This milestone resolves the highest-risk creative decisions early and provides reusable patterns for the complete transformation.
