import Image from 'next/image';
import FadeIn from './FadeIn';
import type { Dictionary } from '@/lib/i18n/types';

export default function SocialImpact({ dict }: { dict: Dictionary }) {
  const t = dict.socialImpact;
  return (
    <section id="social-impact" className="py-24 sm:py-32 bg-slate-50">
      <div className="section-container">
        <FadeIn>
          <p className="text-mirai-600 font-semibold text-sm tracking-widest uppercase mb-3">
            {t.label}
          </p>
          <h2 className="section-heading">{t.heading}</h2>
          <p className="section-subheading max-w-2xl">{t.subheading}</p>
        </FadeIn>

        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 gap-6">
          {t.items.map((item, i) => (
            <FadeIn key={i} delay={i * 120}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card h-full flex flex-col p-0 overflow-hidden hover:shadow-md transition-all"
              >
                <div className="relative aspect-[1200/630] bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={630}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">
                    {item.badge}
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
