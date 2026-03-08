import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './FadeIn';
import type { Dictionary } from '@/lib/i18n/types';
import { getLocalePath } from '@/lib/i18n';

export default function Hero({ dict, lang = 'ja' }: { dict: Dictionary; lang?: string }) {
  const t = dict.hero;
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-mirai-800 via-mirai-700 to-mirai-900">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)',
      }} />

      <div className="section-container relative z-10 py-28 sm:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center md:text-left">
            <FadeIn>
              <p className="text-mirai-200 text-sm sm:text-base font-medium tracking-widest uppercase mb-6">
                {t.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-tight tracking-tight">
                {t.heading1}
                <br />
                {t.heading2}
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-mirai-100 leading-relaxed max-w-xl">
                {t.description}
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="mt-3 text-sm sm:text-base text-mirai-200/80">
                {t.role}
              </p>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="mt-10 flex flex-col sm:flex-row items-center md:items-start gap-4">
                <Link
                  href={getLocalePath(lang || 'ja', '/vision/policies')}
                  className="btn-primary bg-white text-mirai-700 hover:bg-mirai-50 w-full sm:w-auto"
                >
                  {t.cta}
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300} className="shrink-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mirai-400/30 to-mirai-600/30 blur-2xl scale-110" />
              <Image
                src="/profile.jpg"
                alt="岡室庄悟（おかむー）"
                width={320}
                height={320}
                priority
                className="relative rounded-full object-cover w-full h-full border-4 border-white/20 shadow-2xl"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
