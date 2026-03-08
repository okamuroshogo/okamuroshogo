import Image from 'next/image';
import FadeIn from './FadeIn';
import type { Dictionary } from '@/lib/i18n/types';

export default function AboutMe({ dict, lang = 'ja' }: { dict: Dictionary; lang?: string }) {
  const t = dict.aboutMe;
  return (
    <section id="about" className="py-24 sm:py-32 bg-slate-50">
      <div className="section-container">
        <FadeIn>
          <p className="text-mirai-600 font-semibold text-sm tracking-widest uppercase mb-3">
            {t.label}
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <a
            href="https://note.com/okamu_ro/n/nc8b3f80cdb58"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block relative rounded-2xl overflow-hidden group"
          >
            <Image
              src="/apps/thisisokamu.webp"
              alt="This is おかむー"
              width={1200}
              height={630}
              className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white font-semibold text-sm">{t.noteLink} &rarr;</span>
            </div>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
