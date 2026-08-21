'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MouseSpotlight() {
  const [isExperimental, setIsExperimental] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const spotlightY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const checkTheme = () => {
      setIsExperimental(document.documentElement.getAttribute('data-theme') === 'experimental');
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isExperimental) return null;

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `radial-gradient(800px circle at ${spotlightX}px ${spotlightY}px, rgba(99, 102, 241, 0.06), transparent 60%)`,
      }}
    />
  );
}