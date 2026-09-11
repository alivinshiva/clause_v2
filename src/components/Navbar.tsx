'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const capabilities = [
  { name: 'AI transformation', description: 'Find, govern and implement valuable AI opportunities.', href: '/consulting/ai' },
  { name: 'AI-enabled growth', description: 'Connect positioning, demand, automation and analytics.', href: '/consulting/marketing' },
  { name: 'Product engineering', description: 'Turn specialised requirements into production-ready systems.', href: '/build-studio' },
];

const primaryLinks = [
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Insights', href: '/insights' },
  { name: 'About', href: '/about' },
];

function ClauseMark() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path d="M5 7.5 12 3l7 4.5v9L12 21l-7-4.5v-9Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="m8 9.25 4-2.5 4 2.5v5.5l-4 2.5-4-2.5v-5.5Z" fill="currentColor" fillOpacity=".35" />
      </svg>
    </span>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const capabilitiesActive = pathname.startsWith('/consulting') || pathname.startsWith('/build-studio');

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav aria-label="Primary navigation" className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#07101f]/90 px-4 py-3 text-white shadow-[0_18px_60px_rgba(3,8,18,0.22)] backdrop-blur-xl sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Clause Holdings home">
            <ClauseMark />
            <span className="text-[15px] font-semibold tracking-[-0.02em]">Clause</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button type="button" aria-expanded={servicesOpen} aria-haspopup="true" onClick={() => setServicesOpen((value) => !value)} className={`nav-link ${capabilitiesActive ? 'nav-link-active' : ''}`}>
                What we do
                <svg aria-hidden="true" viewBox="0 0 20 20" className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none">
                  <path d="m6 8 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.16 }} className="absolute left-1/2 top-full w-[32rem] -translate-x-1/2 pt-4">
                    <div className="rounded-2xl border border-white/10 bg-[#0d1728] p-2 shadow-2xl">
                      <Link href="/consulting" onClick={() => setServicesOpen(false)} className="mb-1 flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/[0.06]">
                        Explore all capabilities <span aria-hidden="true" className="text-clause-signal">↗</span>
                      </Link>
                      <div className="grid gap-1">
                        {capabilities.map((item) => (
                          <Link key={item.href} href={item.href} onClick={() => setServicesOpen(false)} className="group rounded-xl px-4 py-3 hover:bg-white/[0.06]">
                            <span className="block text-sm font-medium text-white group-hover:text-clause-signal">{item.name}</span>
                            <span className="mt-1 block text-xs leading-relaxed text-white/50">{item.description}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {primaryLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return <Link key={link.href} href={link.href} className={`nav-link ${active ? 'nav-link-active' : ''}`}>{link.name}</Link>;
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-clause-midnight transition hover:bg-clause-signal sm:inline-flex">Book a discovery call</Link>
            <button type="button" onClick={() => setIsOpen((value) => !value)} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 lg:hidden" aria-label="Toggle navigation" aria-expanded={isOpen}>
              <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                {isOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden lg:hidden">
              <div className="mt-4 border-t border-white/10 pb-1 pt-4">
                <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">What we do</p>
                {capabilities.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block rounded-xl px-2 py-2.5 text-sm text-white/75 hover:bg-white/[0.06] hover:text-white">{item.name}</Link>)}
                <div className="my-3 h-px bg-white/10" />
                {primaryLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block rounded-xl px-2 py-2.5 text-sm text-white/75 hover:bg-white/[0.06] hover:text-white">{link.name}</Link>)}
                <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-3 flex w-full justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-clause-midnight sm:hidden">Book a discovery call</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
