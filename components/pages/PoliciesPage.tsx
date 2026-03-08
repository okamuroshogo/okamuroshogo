import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { getDictionary, getLocalePath } from '@/lib/i18n';

const COLORS = [
  'bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 'bg-purple-500',
  'bg-rose-500', 'bg-teal-500', 'bg-indigo-500', 'bg-pink-500',
];

export default function PoliciesPage({ lang = 'ja' }: { lang?: string }) {
  const dict = getDictionary(lang);
  const t = dict.policies;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="section-container flex items-center justify-between h-16 sm:h-20">
          <Link href={getLocalePath(lang, '/')} className="text-lg font-bold text-slate-900 tracking-tight hover:text-mirai-600 transition-colors">
            {dict.header.name}
          </Link>
          <Link href={getLocalePath(lang, '/')} className="text-sm font-medium text-slate-500 hover:text-mirai-600 transition-colors">
            {dict.header.backToTop}
          </Link>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <p className="text-mirai-600 font-semibold text-sm tracking-widest uppercase mb-3">{t.label}</p>
            <h1 className="section-heading">{t.heading}</h1>
            <p className="section-subheading max-w-2xl">{t.subheading}</p>
          </FadeIn>

          <div className="mt-14 sm:mt-20 space-y-8">
            {t.sections.map((section, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="card">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`shrink-0 w-10 h-10 rounded-lg ${COLORS[i]} flex items-center justify-center text-white font-bold text-sm`}>
                      {i + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.items.map((item) => (
                      <div key={item.label} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <h3 className="font-bold text-slate-800 mb-1.5">{item.label}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={100}>
            <div className="mt-16 sm:mt-20 rounded-2xl bg-gradient-to-r from-mirai-700 to-mirai-900 p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t.githubTitle}</h2>
              <p className="text-mirai-200 mb-8 max-w-lg mx-auto leading-relaxed">{t.githubDesc}</p>
              <a
                href="https://github.com/okamuroshogo/election"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-mirai-700 font-bold rounded-lg hover:bg-mirai-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                {t.githubButton}
              </a>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  );
}
