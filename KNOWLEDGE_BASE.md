# Clause Holdings — Project Knowledge Base

> Single source of truth for any AI CLI tool (Codex, Claude, Cursor, etc.) to understand the project without re-explaining.

---

## 1. Project Overview

**Clause Holdings** is a corporate website for an intelligence infrastructure company. It's a **Next.js 16.3.1** multi-page marketing site with a dual-theme system (light default + experimental animations), built with **React 19**, **Tailwind CSS v4**, **framer-motion**, and **TypeScript**.

**Reference site (content source):** `/home/shivam/rtos/clause-holdings` (static HTML version — data was migrated from here).

**Live repo:** https://github.com/alivinshiva/clause_v2

---

## 2. Tech Stack

| Dependency | Version | Notes |
|---|---|---|
| Next.js | 16.3.1 | App Router, Turbopack, SSG |
| React | 19.2.8 | `LayoutProps<"/">` typing, `params: Promise<...>` for dynamic routes |
| Tailwind CSS | v4 | `@tailwindcss/postcss`, no `tailwind.config` — all config via `@theme` in CSS |
| framer-motion | 13.1.x | Used for scroll animations, modal transitions, carousel entrance |
| TypeScript | 5.x | Strict mode |
| ESLint | 9.x | `eslint-config-next` with `core-web-vitals` + `typescript` |

**No other UI libraries.** No lucide-react, no clsx, no shadcn — all icons are inline SVGs.

---

## 3. Commands

```bash
npm run dev          # Next.js dev server (Turbopack)
npm run build        # Production build (outputs to .next/)
npm run start        # Production server (default port 3000)
npm run lint         # ESLint (must pass before commits)
```

**Building & starting:**
```bash
rm -rf .next && npm run build && npm run start
```

**Running on a different port:**
```bash
npx next start -p 3100
```

**Shell quirk — HTTP proxy breaks curl:** Always use:
```bash
curl --noproxy '*' http://127.0.0.1:3000/
```

**Shell quirk — background servers hang the shell tool:** Use this pattern:
```bash
(setsid ./node_modules/.bin/next start -p 3000 </dev/null >/tmp/next.log 2>&1 &)
```

---

## 4. Brand Palette & CSS Variables

Defined in `src/app/globals.css` via `@theme`:

| Token | Hex | Usage |
|---|---|---|
| `--clause-midnight` | `#0B1224` | Primary dark, headings, body text |
| `--clause-intelligence` | `#5757E8` | Primary brand (indigo), CTAs, links |
| `--clause-signal` | `#22B8D6` | Secondary brand (cyan), accents |
| `--clause-cloud` | `#F5F7FC` | Light backgrounds |
| `--clause-white` | `#FFFFFF` | Card backgrounds |
| `--clause-slate` | `#18233D` | Dark panels |
| `--clause-graphite` | `#232A3B` | Dark surfaces |
| `--clause-steel` | `#667085` | Secondary text, muted content |

Tailwind utility classes: `text-clause-midnight`, `bg-clause-intelligence`, `border-clause-steel/20`, etc.

---

## 5. Theme System

Dual-theme via `data-theme` attribute on `<html>`:
- **`light`** (default) — clean white cards, no animations
- **`experimental`** — animated background (grid, orbs, ripples), glow effects on cards

Stored in `localStorage` key `clause-theme`. Toggled by `src/components/ThemeToggle.tsx`.

**CRITICAL: Tailwind v4 `dark:` variant follows OS `prefers-color-scheme`**, not the custom theme. All `dark:` variants have been removed from the codebase. Never add `dark:` classes.

---

## 6. Directory Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, Navbar, BackgroundEffects, MouseSpotlight, footer
│   ├── page.tsx                # Home page (all section components)
│   ├── globals.css             # Brand tokens, animations, experimental effects, stack CSS
│   ├── products/
│   │   ├── page.tsx            # Products listing
│   │   └── [product]/page.tsx  # Product detail (SSG via generateStaticParams: testarq, showgrid, grid-pulse)
│   ├── consulting/
│   │   ├── page.tsx            # Consulting overview
│   │   ├── ai/page.tsx         # AI consulting
│   │   └── marketing/page.tsx  # Marketing consulting
│   ├── build-studio/page.tsx   # Build Studio
│   ├── industries/page.tsx     # Industries
│   ├── insights/page.tsx       # Insights
│   ├── about/page.tsx          # About
│   └── contact/page.tsx        # Contact (includes ContactForm)
├── components/
│   ├── Navbar.tsx              # Top nav with pathname-based active state, hide-on-scroll (lg+)
│   ├── Hero.tsx                # Hero section with theme-aware content
│   ├── ValueCards.tsx           # 3 value proposition cards
│   ├── Products.tsx            # Apple-cards-carousel of 3 products (gradient covers, expandable modal)
│   ├── Consulting.tsx          # Consulting section with AI + Marketing cards
│   ├── BuildStudio.tsx         # Build Studio section
│   ├── Industries.tsx          # Industries grid with hover preview panel (experimental theme only)
│   ├── Insights.tsx            # Insights section
│   ├── FinalCTA.tsx            # Final call-to-action
│   ├── ContactForm.tsx         # Contact form component
│   ├── ThemeToggle.tsx         # Light/experimental theme switcher (localStorage)
│   ├── BackgroundEffects.tsx   # Global animated background (experimental theme)
│   ├── MouseSpotlight.tsx      # Cursor glow effect
│   ├── AnimateOnScroll.tsx     # Scroll-triggered fade-in wrapper
│   ├── GridPattern.tsx         # SVG grid background pattern
│   ├── Stack.tsx               # StackContainer/StackItem (currently unused — stacking removed)
│   ├── ui.tsx                  # Shared UI: ButtonLink, TextLink, PageHeader
│   └── ui/
│       └── apple-cards-carousel.tsx  # Carousel + Card components (Aceternity-style)
├── hooks/
│   └── use-outside-click.ts    # Detect clicks outside a ref (for modal close)
└── lib/
    └── data.ts                 # ALL shared content data (products, services, industries, etc.)
```

---

## 7. Routes

| Route | Type | Notes |
|---|---|---|
| `/` | Home | All sections composed inline (Hero → ValueCards → Products → Consulting → BuildStudio → Industries → Insights → FinalCTA) |
| `/products` | Listing | Apple-cards-carousel of 3 products |
| `/products/testarq` | SSG detail | AI-Native Quality Intelligence |
| `/products/showgrid` | SSG detail | Consumer Engagement Platform |
| `/products/grid-pulse` | SSG detail | Political Insights Platform |
| `/consulting` | Overview | AI + Marketing consulting |
| `/consulting/ai` | Detail | AI consulting services |
| `/consulting/marketing` | Detail | Marketing consulting services |
| `/build-studio` | Detail | Build Studio capabilities |
| `/industries` | Detail | Industry focus areas |
| `/insights` | Detail | Insights/thought leadership |
| `/about` | Detail | Company information |
| `/contact` | Detail | Contact form |

---

## 8. Shared Data (`src/lib/data.ts`)

All content lives here. Exported types and arrays:

| Export | Type | Used by |
|---|---|---|
| `products` | `Product[]` | Products page, carousel, detail pages |
| `aiConsulting` | `ServiceArea[]` | Consulting AI page |
| `marketingConsulting` | `ServiceArea[]` | Consulting Marketing page |
| `engagementTypes` | `EngagementType[]` | Consulting page |
| `starterPackages` | `StarterPackage[]` | Consulting page |
| `industries` | `Industry[]` | Industries page + home hover panel |
| `buildCapabilities` | `BuildCapability[]` | Build Studio page |
| `buildProcessSteps` | array | Build Studio page |
| `workSteps` | `WorkStep[]` | Home HowWeWork section (currently unused) |
| `principles` | `Principle[]` | About page |
| `insights` | array | Insights page |

**Product type:**
```ts
type Product = {
  slug: string;        // URL segment: 'testarq', 'showgrid', 'grid-pulse'
  name: string;        // Display name: 'TestArq'
  category: string;    // e.g. 'AI-Native Quality Intelligence'
  tagline: string;     // One-liner summary
  description: string; // Longer description
  capabilities: Capability[];  // { title, description }[]
  accent: 'indigo' | 'cyan' | 'amber';  // Used for gradient color mapping
};
```

**Detail page SSG:** `src/app/products/[product]/page.tsx` uses `generateStaticParams()` returning `['testarq', 'showgrid', 'grid-pulse']`. `params` is a `Promise` (Next.js 16 convention) — must `await params`.

---

## 9. Component Details

### Apple Cards Carousel (`src/components/ui/apple-cards-carousel.tsx`)
- **Carousel**: horizontal scroll, staggered entrance animation, optional mask (currently removed)
- **Card**: gradient header (muted pastels mapped from `accent`), body shows tagline + 3 capabilities + Explore link. Click opens full modal (ported to `document.body` to escape `stack-card` transform context).
- Card type has: `category`, `title`, `gradient`, `tagline?`, `highlights?`, `href?`, `ctaLabel?`, `content`
- Adapted from Aceternity UI — no lucide-react (inline SVGs), no clsx/cn (template strings)

### Home Page Sections (in order on `/`)
1. **Hero** — heading, subtext, two CTA buttons. Dark gradient background in default theme only (`!isExperimental`).
2. **ValueCards** — 3 cards (Intelligence, Signal, Foundation)
3. **Products** — Apple-cards-carousel with 3 product cards
4. **Consulting** — AI + Marketing service areas
5. **BuildStudio** — capabilities grid
6. **Industries** — 10-item grid with hover preview panel (experimental theme)
7. **Insights** — insights cards
8. **FinalCTA** — closing call-to-action

### Experimental Theme Effects (`src/app/globals.css`)
All scoped to `[data-theme="experimental"]`:
- `.hero-grid` — masked SVG grid pattern
- `.hero-orb-a`, `.hero-orb-b`, `.hero-orb-c` — drifting color orbs (`--clause-float` keyframes)
- `.hero-ring` — rotating conic gradient ring
- `.clause-ripple` — expanding circular ripples (variables: `--x`, `--y`, `--size`, `--dur`, `--delay`)
- `.glow-card` — subtle indigo glow border on cards

`prefers-reduced-motion: reduce` disables all animations.

---

## 10. Key Conventions

### Next.js 16 (IMPORTANT — differs from older versions)
- **Read `node_modules/next/dist/docs/`** before writing new Next.js code
- Dynamic route params are `Promise`-based: `params: Promise<{product: string}>` → must `await params`
- `LayoutProps<"/">` is the correct type for layout props
- Static generation: `generateStaticParams()` + `generateMetadata()`

### Code Style
- `'use client'` directive only on components that use hooks/browser APIs
- No comments in code unless requested
- No `dark:` Tailwind variants (broken with custom theme)
- All icons are inline SVGs (no icon library)
- Content data goes in `src/lib/data.ts`, not inline in components
- Muted/pastel colors for gradients: desaturated versions of brand colors

### Component Conventions
- `AnimateOnScroll` wrapper for fade-in-up on scroll
- `Link` from `next/link` for all internal navigation
- `ButtonLink` and `TextLink` from `src/components/ui.tsx` for styled links
- `PageHeader` from `src/components/ui.tsx` for detail page headers
- Sections use `py-16 px-6` padding, `max-w-7xl mx-auto` container
- Card base: `rounded-2xl border border-clause-steel/10 bg-white p-8`
- CTA buttons: `bg-clause-intelligence text-white` with hover variant

---

## 11. What Has Been Done

1. ✅ Multi-page conversion (single page → 12 routes)
2. ✅ Apple-cards-carousel for Products (gradient covers, expandable modal, muted colors)
3. ✅ Experimental theme system (light + experimental with animated background)
4. ✅ Industries hover preview panel
5. ✅ Stacking cards layout (added then removed — `Stack.tsx` remains but unused)
6. ✅ Removed all `dark:` Tailwind variants (v4 OS-based conflict)
7. ✅ Consistent brand colors and CSS variables
8. ✅ Shared data extracted to `src/lib/data.ts`
9. ✅ Shared UI helpers extracted to `src/components/ui.tsx`
10. ✅ Contact form component
11. ✅ Mouse spotlight effect
12. ✅ Scroll-triggered animations (AnimateOnScroll)
13. ✅ Product SSG detail pages (testarq, showgrid, grid-pulse)

---

## 12. What Remains / Future Work

- **Hero tagline color fix** in default light theme (may need tweaking)
- **Stacking cards** — code exists in `Stack.tsx` + globals.css but currently disabled; can re-enable if needed
- **Real product images** — currently using gradient placeholders
- **Content refinement** across all detail pages
- **Mobile responsiveness polish** (carousel, nav, cards)
- **SEO optimization** — metadata per page, sitemap, etc.
- **Performance** — image optimization when real images are added
- **Analytics** — tracking integration
- **CMS integration** — currently all static data in `data.ts`

---

## 13. Known Issues / Gotchas

| Issue | Detail |
|---|---|
| **`dark:` variants broken** | Tailwind v4 uses OS `prefers-color-scheme`, not the custom `data-theme`. Never use `dark:`. |
| **`sed` can mangle files** | Earlier `sed` passes created broken classes (e.g., `bg-whiteclause-graphite`). Prefer the Edit tool. |
| **Port 3000 conflicts** | Stale `next-server` processes may hold port. Check with `ss -tlnp | grep :3000`. |
| **pkill hangs shell tool** | Killing Next.js processes can hang the shell tool for 30+ seconds. |
| **Stack transforms trap `fixed`** | `.stack-card` uses `scale` transform which creates a containing block — `position: fixed` inside is relative to the card, not the viewport. Use `createPortal` to escape. (Currently stack is disabled.) |
| **`LayoutProps` typing** | Next.js 16 uses `LayoutProps<"/">` instead of older `{ children: React.ReactNode }` pattern. |
| **`params` is a Promise** | Dynamic routes: `params: Promise<{product: string}>` — must `await` it. |
