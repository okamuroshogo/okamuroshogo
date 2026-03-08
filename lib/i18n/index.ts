import type { Dictionary, Locale } from './types';
import ja from './ja';

const dictionaries: Record<string, Dictionary> = { ja };

// Lazy-load other languages
export function getDictionary(lang: string): Dictionary {
  if (lang in dictionaries) return dictionaries[lang];

  // Dynamic requires for other languages (they'll be bundled at build time for static export)
  try {
    if (lang === 'en') return require('./en').default;
    if (lang === 'ko') return require('./ko').default;
    if (lang === 'zh') return require('./zh').default;
  } catch {
    // fallback
  }
  return ja;
}

export const locales: Locale[] = ['ja', 'en', 'ko', 'zh'];

export function getLocalePath(lang: string, path: string = '/'): string {
  if (lang === 'ja') return path;
  return `/${lang}${path}`;
}

export function getNogeassUrl(lang: string): string {
  if (lang === 'ja') return 'https://nogeass.com';
  return `https://nogeass.com/${lang}`;
}

export function localizeNogeassLink(url: string, lang: string): string {
  if (lang === 'ja') return url;
  // nogeass.com, gawain.nogeass.com, gawainai.com
  const patterns = [
    /^(https?:\/\/(?:gawain\.)?nogeass\.com)(\/.*)?$/,
    /^(https?:\/\/gawainai\.com)(\/.*)?$/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      const base = match[1];
      const path = match[2] || '';
      return `${base}/${lang}${path}`;
    }
  }
  return url;
}

export type { Dictionary, Locale };
