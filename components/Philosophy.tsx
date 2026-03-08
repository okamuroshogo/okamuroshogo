import FadeIn from './FadeIn';
import type { Dictionary } from '@/lib/i18n/types';

export default function Philosophy({ dict }: { dict: Dictionary }) {
  const t = dict.philosophy;
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-white">
      <div className="section-container">
        <FadeIn>
          <p className="text-mirai-600 font-semibold text-sm tracking-widest uppercase mb-3">
            {t.label}
          </p>
          <h2 className="section-heading">{t.heading}</h2>
          <p className="section-subheading max-w-2xl">{t.subheading}</p>
        </FadeIn>

        <div className="mt-12 sm:mt-16 flex flex-wrap gap-3">
          {t.values.map((value, i) => (
            <FadeIn key={i} delay={Math.min(i * 30, 600)}>
              <div className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm sm:text-base text-slate-700 font-medium hover:bg-mirai-50 hover:border-mirai-200 hover:text-mirai-700 transition-all cursor-default">
                <span className="text-mirai-400 font-bold mr-2 text-xs">{i + 1}</span>
                {value}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-8 text-center">
            <a
              href="https://posfie.com/@okamu_ro/p/mvfaYU0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-mirai-600 font-semibold text-sm hover:text-mirai-700 transition-colors"
            >
              {t.readMore}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
