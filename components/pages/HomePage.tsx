import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import TrackRecord from '@/components/TrackRecord';
import Media from '@/components/Media';
import Philosophy from '@/components/Philosophy';
import AboutMe from '@/components/AboutMe';
import JoinUs from '@/components/JoinUs';
import Footer from '@/components/Footer';
import { getDictionary } from '@/lib/i18n';

export default function HomePage({ lang = 'ja' }: { lang?: string }) {
  const dict = getDictionary(lang);
  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} lang={lang} />
        <Vision dict={dict} lang={lang} />
        <TrackRecord dict={dict} lang={lang} />
        <Media dict={dict} />
        <Philosophy dict={dict} />
        <AboutMe dict={dict} lang={lang} />
        <JoinUs dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
