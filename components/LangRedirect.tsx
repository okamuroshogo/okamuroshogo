'use client';

import { useEffect } from 'react';

export default function LangRedirect() {
  useEffect(() => {
    // Only redirect on first visit (no stored preference)
    const visited = sessionStorage.getItem('lang-detected');
    if (visited) return;

    sessionStorage.setItem('lang-detected', '1');

    // Only redirect if we're on the root path (Japanese default)
    if (window.location.pathname !== '/') return;

    const browserLang = navigator.language.toLowerCase();

    if (browserLang.startsWith('ko')) {
      window.location.replace('/ko');
    } else if (browserLang.startsWith('zh')) {
      window.location.replace('/zh');
    } else if (browserLang.startsWith('en')) {
      window.location.replace('/en');
    }
    // ja or any other language stays on /
  }, []);

  return null;
}
