'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Products', href: '#products' },
  { name: 'Consulting', href: '#consulting' },
  { name: 'Build Studio', href: '#build-studio' },
  { name: 'Industries', href: '#industries' },
  { name: 'Insights', href: '#insights' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest < 50) {
      setVisible(true);
      setLastScrollY(latest);
      return;
    }

    if (latest < lastScrollY) {
      setVisible(true);
    } else if (latest > lastScrollY + 10) {
      setVisible(false);
      setIsOpen(false);
    }
    setLastScrollY(latest);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
        >
          <nav
            className={`
              rounded-2xl border backdrop-blur-xl
              bg-clause-white/90 border-clause-steel/20
              dark:bg-clause-white/95 dark:border-clause-intelligence/20
              px-6 py-3
              transition-all duration-300
            `}
          >
            <div className="flex items-center justify-between">
              <a
                href="#hero"
                onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
                className="text-xl font-bold"
              >
                <span className="text-clause-midnight">
                  Clause
                </span>
              </a>

              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className={`
                      relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors
                      ${activeSection === link.href.slice(1)
                        ? 'text-clause-intelligence'
                        : 'text-clause-steel hover:text-clause-midnight'
                      }
                    `}
                  >
                    {link.name}
                    {activeSection === link.href.slice(1) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg bg-clause-intelligence/10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-clause-steel/10"
                  aria-label="Toggle menu"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden mt-2 rounded-2xl border backdrop-blur-xl overflow-hidden
                  bg-clause-white/95 border-clause-steel/20"
              >
                <div className="p-4 flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      className={`
                        px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                        ${activeSection === link.href.slice(1)
                          ? 'bg-clause-intelligence/10 text-clause-intelligence'
                          : 'text-clause-steel hover:bg-clause-steel/10 hover:text-clause-midnight'
                        }
                      `}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}