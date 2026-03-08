import FadeIn from './FadeIn';
import type { Dictionary } from '@/lib/i18n/types';
import { getNogeassUrl } from '@/lib/i18n';

const LINK_ICONS = [
  <svg key="gh" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
  <svg key="x" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  <svg key="note" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM12 17.25a.75.75 0 110-1.5.75.75 0 010 1.5zm3.75-4.5h-7.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5zm0-3h-7.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5z"/></svg>,
  <svg key="nogeass" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" /></svg>,
  <svg key="mail" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
];

const LINK_HREFS_BASE = [
  'https://github.com/okamuroshogo/election',
  'https://x.com/okamu_ro',
  'https://note.com/okamu_ro',
  '__nogeass__',
  'mailto:shogo@okamu.ro',
];

export default function JoinUs({ dict, lang = 'ja' }: { dict: Dictionary; lang?: string }) {
  const t = dict.joinUs;

  const links = t.linkLabels.map((label, i) => ({
    label,
    href: LINK_HREFS_BASE[i] === '__nogeass__' ? getNogeassUrl(lang || 'ja') : LINK_HREFS_BASE[i],
    icon: LINK_ICONS[i],
  }));

  return (
    <section id="join" className="py-24 sm:py-32 bg-mirai-900 text-white">
      <div className="section-container">
        <FadeIn>
          <p className="text-mirai-300 font-semibold text-sm tracking-widest uppercase mb-3">
            {t.label}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
            {t.heading}
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-mirai-200 leading-relaxed max-w-2xl">
            {t.description}
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <span className="text-mirai-300">{link.icon}</span>
                <span className="font-medium text-white/90">{link.label}</span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
