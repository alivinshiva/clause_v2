'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimateOnScroll } from './AnimateOnScroll';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const [isExperimental, setIsExperimental] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsExperimental(document.documentElement.getAttribute('data-theme') === 'experimental');
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: isExperimental
            ? 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)'
            : 'linear-gradient(135deg, #0B1224 0%, #18233D 55%, #172E4F 100%)'
        }}
      />

      {isExperimental && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[150px]"
            style={{ background: 'rgba(99, 102, 241, 0.08)' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px]"
            style={{ background: 'rgba(6, 182, 212, 0.06)' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.1, 0.06] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateOnScroll direction="up" delay={0}>
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <motion.span variants={item} className="text-clause-midnight">Build </motion.span>
            <motion.span
              variants={item}
              className={isExperimental ? 'text-gradient' : 'text-clause-signal'}
            >
              intelligently
            </motion.span>
            <motion.span variants={item} className="text-clause-midnight">. Operate efficiently. Grow meaningfully.</motion.span>
          </motion.h1>
        </AnimateOnScroll>
        
        <AnimateOnScroll direction="up" delay={0.2}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-lg md:text-xl text-clause-steel mb-8 max-w-2xl mx-auto"
          >
            Clause Holdings creates AI-enabled products and consulting solutions that help businesses turn complex challenges into scalable systems and measurable growth.
          </motion.p>
        </AnimateOnScroll>
        
        <AnimateOnScroll direction="up" delay={0.4}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <button className="px-8 py-3 bg-clause-intelligence text-white rounded-lg font-medium hover:bg-clause-intelligence/90 transition-all">
              Start a Conversation
            </button>
            <button className="px-8 py-3 border border-clause-midnight text-clause-midnight rounded-lg font-medium hover:bg-clause-midnight/5 transition-all">
              Explore Clause
            </button>
          </motion.div>
        </AnimateOnScroll>
        
        <AnimateOnScroll direction="up" delay={0.6}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="text-sm text-clause-steel"
          >
            AI Products • AI Consulting • Modern Marketing • Custom Technology
          </motion.p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}