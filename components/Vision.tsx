import Link from 'next/link';
import FadeIn from './FadeIn';
import type { Dictionary } from '@/lib/i18n/types';
import { getLocalePath } from '@/lib/i18n';

export default function Vision({ dict, lang = 'ja' }: { dict: Dictionary; lang?: string }) {
  const t = dict.vision;
  return (
    <section id="vision" className="py-24 sm:py-32 bg-white">
      <div className="section-container">
        <FadeIn>
          <p className="text-mirai-600 font-semibold text-sm tracking-widest uppercase mb-3">
            {t.label}
          </p>
          <h2 className="section-heading">
            {t.heading1}
            <br />
            <span className="text-mirai-600">{t.heading2}</span>
          </h2>
        </FadeIn>

        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <FadeIn delay={100}>
            <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="card border-mirai-100 bg-gradient-to-br from-mirai-50/50 to-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-mirai-600 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{t.cardTitle}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">{t.cardDesc}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={getLocalePath(lang || 'ja', '/vision/policies')}
                  className="inline-flex items-center gap-2 text-mirai-600 font-semibold hover:text-mirai-700 transition-colors"
                >
                  {t.viewPolicies}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a
                  href="https://github.com/okamuroshogo/election"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-500 font-medium hover:text-slate-700 transition-colors"
                >
                  {t.discussGitHub}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
