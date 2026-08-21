'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function BackgroundEffects() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  if (!isDark) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(129, 140, 248, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(129, 140, 248, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[150px]"
        style={{ background: 'rgba(129, 140, 248, 0.08)' }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ background: 'rgba(34, 211, 238, 0.06)' }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -50, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{ background: 'rgba(129, 140, 248, 0.05)' }}
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
