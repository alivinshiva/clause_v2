'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

const ripples = [
  { x: '22%', y: '28%', size: '42rem', dur: '9s', delay: '0s' },
  { x: '78%', y: '55%', size: '36rem', dur: '11s', delay: '3s' },
  { x: '50%', y: '88%', size: '48rem', dur: '13s', delay: '6s' },
];

export function BackgroundEffects() {
  const [isExperimental, setIsExperimental] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsExperimental(
        document.documentElement.getAttribute('data-theme') === 'experimental'
      );
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  if (!isExperimental) return null;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #f7f7fc 0%, #eef0fa 50%, #f5f4fb 100%)',
        }}
      />

      <div className="hero-grid absolute inset-0" />

      <div
        className="hero-orb-a absolute top-[8%] left-[8%] h-[30rem] w-[30rem] rounded-full blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, rgba(108, 92, 231, 0.32), transparent 65%)',
        }}
      />
      <div
        className="hero-orb-b absolute bottom-[6%] right-[6%] h-[26rem] w-[26rem] rounded-full blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 206, 201, 0.26), transparent 65%)',
        }}
      />
      <div
        className="hero-orb-c absolute top-[45%] left-[45%] h-[22rem] w-[22rem] rounded-full blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(108, 92, 231, 0.16), transparent 65%)',
        }}
      />

      <div
        className="hero-ring absolute -right-56 top-[10%] h-[44rem] w-[44rem] rounded-full opacity-30 blur-2xl"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, rgba(108, 92, 231, 0.28) 60deg, transparent 120deg, rgba(0, 206, 201, 0.22) 200deg, transparent 260deg)',
        }}
      />

      {ripples.map((ripple, i) => (
        <span
          key={i}
          className="clause-ripple"
          style={
            {
              '--x': ripple.x,
              '--y': ripple.y,
              '--size': ripple.size,
              '--dur': ripple.dur,
              '--delay': ripple.delay,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
