import Link from 'next/link';

const footerGroups = [
  {
    label: 'Capabilities',
    links: [
      ['AI transformation', '/consulting/ai'],
      ['AI-enabled growth', '/consulting/marketing'],
      ['Product engineering', '/build-studio'],
    ],
  },
  {
    label: 'Explore',
    links: [
      ['Work', '/work'],
      ['Products', '/products'],
      ['Insights', '/insights'],
      ['Industries', '/industries'],
    ],
  },
  {
    label: 'Company',
    links: [
      ['About', '/about'],
      ['Contact', '/contact'],
      ['All capabilities', '/consulting'],
    ],
  },
  {
    label: 'Start',
    links: [
      ['Book a discovery call', '/contact'],
      ['Discuss a product build', '/contact'],
      ['Explore Clause Labs', '/work'],
    ],
  },
];

function FooterMark() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#080b10] shadow-[0_10px_30px_rgba(0,0,0,.25)]">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M5 7.5 12 3l7 4.5v9L12 21l-7-4.5v-9Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="m8 9.25 4-2.5 4 2.5v5.5l-4 2.5-4-2.5v-5.5Z" fill="currentColor" fillOpacity=".28" />
      </svg>
    </span>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-3 pb-3 pt-24 text-white sm:px-5 sm:pb-5 sm:pt-28 lg:px-6 lg:pb-6 lg:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#07101f]/30 via-black/80 to-black" />
      <div className="relative mx-auto max-w-[96rem] overflow-hidden bg-[radial-gradient(ellipse_at_48%_0%,rgba(255,255,255,.025),transparent_48%),linear-gradient(180deg,#050607_0%,#08090b_45%,#090a0c_100%)] px-6 pb-10 pt-16 sm:px-10 sm:pb-12 lg:px-16 lg:pb-14 lg:pt-20 xl:px-20">
        <div className="relative z-10 grid gap-16 lg:grid-cols-[1.05fr_1.35fr] lg:gap-20">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Clause Holdings home">
              <FooterMark />
              <span className="text-lg font-semibold tracking-[-0.03em]">Clause</span>
            </Link>
            <p className="mt-7 max-w-sm text-sm leading-6 text-white/42">
              Strategy, product engineering and intelligent growth—from business problem to working system.
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/72 transition-all hover:gap-3 hover:text-clause-signal">
              Start a focused conversation <span aria-hidden="true">↗</span>
            </Link>
            <p className="mt-10 text-xs text-white/28">© {new Date().getFullYear()} Clause Holdings. All rights reserved.</p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 lg:gap-x-10">
            {footerGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold text-white/74">{group.label}</p>
                <ul className="mt-6 space-y-4">
                  {group.links.map(([label, href]) => (
                    <li key={`${group.label}-${label}`}>
                      <Link href={href} className="text-sm leading-5 text-white/40 transition-colors hover:text-white">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none relative mt-24 overflow-visible sm:mt-28 lg:mt-32" aria-hidden="true">
          <p className="whitespace-nowrap bg-[linear-gradient(180deg,rgba(255,255,255,.012)_0%,rgba(255,255,255,.07)_100%)] bg-clip-text text-center text-[clamp(4.8rem,20vw,19rem)] font-semibold leading-[0.82] tracking-[-0.085em] text-transparent">
            Clause
          </p>
        </div>
      </div>
    </footer>
  );
}
