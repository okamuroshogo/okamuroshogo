import Link from 'next/link';
import FadeIn from './FadeIn';
import type { Dictionary } from '@/lib/i18n/types';
import { getLocalePath, localizeNogeassLink } from '@/lib/i18n';

const URLS = [
  'https://nogeass.com',
  'https://prtimes.jp/main/html/rd/p/000000019.000057625.html',
  'https://www.kayac.com/team/okamuro-shogo',
];
const ACCENTS = ['bg-warmth-500', 'bg-mirai-600', 'bg-hope-600'];

export default function TrackRecord({ dict, lang = 'ja' }: { dict: Dictionary; lang?: string }) {
  const t = dict.trackRecord;
  return (
    <section id="track-record" className="py-24 sm:py-32 bg-slate-50">
      <div className="section-container">
        <FadeIn>
          <p className="text-mirai-600 font-semibold text-sm tracking-widest uppercase mb-3">
            {t.label}
          </p>
          <h2 className="section-heading">{t.heading}</h2>
          <p className="section-subheading max-w-2xl">{t.subheading}</p>
        </FadeIn>

        <div className="mt-12 sm:mt-16 space-y-6">
          {t.records.map((record, i) => (
            <FadeIn key={record.year} delay={i * 100}>
              <a href={localizeNogeassLink(URLS[i], lang || 'ja')} target="_blank" rel="noopener noreferrer" className="card flex flex-col sm:flex-row gap-6 block hover:border-mirai-200 hover:shadow-md transition-all">
                <div className="shrink-0 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1">
                  <span className={`inline-block w-3 h-3 rounded-full ${ACCENTS[i]}`} />
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                    {record.year}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    {record.title}
                    <span className="ml-2 text-sm font-medium text-slate-500">{record.role}</span>
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{record.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {record.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-10 p-6 sm:p-8 bg-white rounded-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-3">{t.rootsTitle}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">{t.rootsDesc}</p>

            <h4 className="text-sm font-bold text-slate-800 tracking-wide uppercase mb-4">{t.awardsTitle}</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {t.awards.map((award, i) => (
                <li key={i} className="flex gap-2">
                  <span className="shrink-0">{award.emoji}</span>
                  <span>
                    <strong className="text-slate-800">{award.title}</strong>
                    {award.detail && <> — {award.detail}</>}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <Link href={getLocalePath(lang || 'ja', '/works')} className="inline-flex items-center gap-2 text-mirai-600 font-semibold text-sm hover:text-mirai-700 transition-colors">
                {t.viewAllWorks}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
