'use client';

import { useState, useEffect, useRef } from 'react';

const themes = [
  { id: 'light', label: 'Light (Official)', description: 'Brand colors from guidelines' },
  { id: 'experimental', label: 'Experimental', description: 'Light UI with glow effects' },
];

export function ThemeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('clause-theme') || 'light';
    setCurrentTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem('clause-theme', themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    setIsOpen(false);
  };

  const current = themes.find(t => t.id === currentTheme);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all
          bg-clause-white border-clause-steel/20 text-clause-midnight
          hover:border-clause-intelligence/30"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        {current?.label}
        <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-56 rounded-lg border border-clause-steel/20 bg-clause-white shadow-lg z-50">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => selectTheme(theme.id)}
              className={`w-full px-4 py-3 text-left transition-colors ${
                currentTheme === theme.id
                  ? 'bg-clause-intelligence/10 text-clause-intelligence'
                  : 'text-clause-midnight hover:bg-clause-cloud'
              }`}
            >
              <div className="text-sm font-medium">{theme.label}</div>
              <div className="text-xs text-clause-steel mt-0.5">{theme.description}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}