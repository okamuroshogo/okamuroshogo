'use client';

import { useEffect, useState } from 'react';
import type { Dictionary } from '@/lib/i18n/types';

export default function Header({ dict, lang = 'ja' }: { dict: Dictionary; lang?: string }) {
  const t = dict.header;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { href: '#vision', label: t.nav.vision },
    { href: '#track-record', label: t.nav.trackRecord },
    { href: '#philosophy', label: t.nav.philosophy },
    { href: '#about', label: t.nav.about },
    { href: '#join', label: t.nav.join },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 sm:h-20">
        <a
          href="#"
          className={`text-lg font-bold tracking-tight transition-colors ${
            scrolled ? 'text-slate-900' : 'text-white'
          }`}
        >
          {t.name}
        </a>

        {/* Language switcher */}
        <div className="hidden md:flex items-center gap-1 mr-4">
          {(['ja', 'en', 'ko', 'zh'] as const).map((l) => {
            const href = l === 'ja' ? '/' : `/${l}`;
            return (
              <a
                key={l}
                href={href}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                  lang === l
                    ? 'bg-mirai-600 text-white'
                    : scrolled
                    ? 'text-slate-500 hover:text-mirai-600'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {l.toUpperCase()}
              </a>
            );
          })}
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-mirai-500 ${
                scrolled ? 'text-slate-600' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 transition-colors ${
            scrolled ? 'text-slate-700' : 'text-white'
          }`}
          aria-label={t.menu}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-sm font-medium text-slate-700 hover:bg-slate-50 border-b border-slate-50"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-2 px-6 py-4 border-t border-slate-100">
            {(['ja', 'en', 'ko', 'zh'] as const).map((l) => {
              const href = l === 'ja' ? '/' : `/${l}`;
              return (
                <a
                  key={l}
                  href={href}
                  className={`px-3 py-1.5 text-xs font-medium rounded ${
                    lang === l ? 'bg-mirai-600 text-white' : 'text-slate-500 bg-slate-100'
                  }`}
                >
                  {l.toUpperCase()}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
