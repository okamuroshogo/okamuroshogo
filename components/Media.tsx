import Image from 'next/image';
import FadeIn from './FadeIn';
import type { Dictionary } from '@/lib/i18n/types';

const MEDIA_URLS = [
  'https://ios-academia.com/blog/interview/ios-engineer/2156/',
  'https://jba-web.jp/activity/seminar/material20210928',
  'https://www.youtube.com/watch?v=ukPzY1TQ12Q',
  undefined,
];
const MEDIA_IMAGES = [
  '/media/interview.webp',
  '/media/jba.webp',
  '/media/youtube-channel.jpg',
  '/media/nikkei-1.webp',
];

export default function Media({ dict }: { dict: Dictionary }) {
  const t = dict.media;
  return (
    <section id="media" className="py-24 sm:py-32 bg-white">
      <div className="section-container">
        <FadeIn>
          <p className="text-mirai-600 font-semibold text-sm tracking-widest uppercase mb-3">
            {t.label}
          </p>
          <h2 className="section-heading">{t.heading}</h2>
        </FadeIn>

        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, i) => (
            <FadeIn key={i} delay={i * 120}>
              {MEDIA_URLS[i] ? (
                <a href={MEDIA_URLS[i]} target="_blank" rel="noopener noreferrer" className="card h-full flex flex-col p-0 overflow-hidden hover:shadow-md transition-all">
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image src={MEDIA_IMAGES[i]} alt={item.title} fill className="object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-mirai-600 text-white text-xs font-bold rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-slate-900 leading-snug mb-2">{item.title}</h3>
                  </div>
                </a>
              ) : (
                <div className="card h-full flex flex-col p-0 overflow-hidden">
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image src={MEDIA_IMAGES[i]} alt={item.title} fill className="object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-mirai-600 text-white text-xs font-bold rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-slate-900 leading-snug mb-2">{item.title}</h3>
                  </div>
                </div>
              )}
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <blockquote className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-br from-mirai-50 to-white rounded-2xl border border-mirai-100">
            <div className="text-base sm:text-lg text-slate-700 leading-relaxed space-y-4">
              {t.quoteParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <footer className="mt-4 text-sm text-slate-500">{t.quoteAuthor}</footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
