'use client';

import { useEffect, useState } from 'react';

export function GridPattern() {
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
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(129, 140, 248, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'gridPulse 8s ease-in-out infinite',
        }}
      />
      <style jsx>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.04; }
          50% { opacity: 0.06; }
        }
      `}</style>
    </div>
  );
}
