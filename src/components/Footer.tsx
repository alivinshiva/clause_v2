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
      ['Industries', '/industries'],
      ['Insights', '/insights'],
    ],
  },
  {
    label: 'Company',
    links: [
      ['About', '/about'],
      ['Contact', '/contact'],
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07101f] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-clause-signal/70 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Link href="/" className="text-xl font-semibold tracking-[-0.03em]">Clause</Link>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/62">
              From business problem to intelligent system. Strategy, product engineering and measurable growth in one connected practice.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-clause-signal hover:text-white">
              Start a focused conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.label}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">{group.label}</p>
                <ul className="mt-4 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-white/62 transition hover:text-white">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Clause Holdings. All rights reserved.</p>
          <p>Responsible intelligence. Product-grade execution.</p>
        </div>
      </div>
    </footer>
  );
}
