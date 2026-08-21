'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
      className="relative min-h-[75vh] lg:min-h-full flex items-center justify-center overflow-hidden py-16"
    >
      {!isExperimental && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #0B1224 0%, #18233D 55%, #172E4F 100%)'
          }}
        />
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <AnimateOnScroll direction="up" delay={0}>
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <motion.span variants={item} className={isExperimental ? 'text-clause-midnight' : 'text-white'}>Build </motion.span>
            <motion.span
              variants={item}
              className={isExperimental ? 'text-gradient' : 'text-clause-signal'}
            >
              intelligently
            </motion.span>
            <motion.span variants={item} className={isExperimental ? 'text-clause-midnight' : 'text-white'}>. Operate efficiently. Grow meaningfully.</motion.span>
          </motion.h1>
        </AnimateOnScroll>
        
        <AnimateOnScroll direction="up" delay={0.2}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${isExperimental ? 'text-clause-steel' : 'text-clause-cloud/80'}`}
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
            <Link href="/contact" className="px-8 py-3 bg-clause-intelligence text-white rounded-lg font-medium hover:bg-clause-intelligence/90 transition-all">
              Start a Conversation
            </Link>
            <Link href="/about" className={`px-8 py-3 border rounded-lg font-medium transition-all ${isExperimental ? 'border-clause-midnight text-clause-midnight hover:bg-clause-midnight/5' : 'border-white/40 text-white hover:bg-white/10'}`}>
              Explore Clause
            </Link>
          </motion.div>
        </AnimateOnScroll>
        
        <AnimateOnScroll direction="up" delay={0.6}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className={`text-sm ${isExperimental ? 'text-clause-steel' : 'text-clause-cloud/70'}`}
          >
            AI Products • AI Consulting • Modern Marketing • Custom Technology
          </motion.p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}