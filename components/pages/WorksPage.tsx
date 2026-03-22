import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { getDictionary, getLocalePath, localizeNogeassLink } from '@/lib/i18n';
import type { Dictionary } from '@/lib/i18n/types';

const PRODUCTS: { name: string; cat: string; icon?: string; url?: string }[] = [
  { name: 'オセロ', cat: 'ゲーム', icon: '/apps/othello_game.png' },
  { name: 'UFOシューティングアプリ', cat: 'ゲーム', icon: '/apps/ufo.png' },
  { name: '作曲アプリ「クリメロ」', cat: '音楽', icon: '/apps/cremero.webp' },
  { name: 'あなたのトイレ.com', cat: '生活', icon: '/apps/toilet_public.png' },
  { name: '席替えアプリ~また隣だね~', cat: 'アプリ', icon: '/apps/neighbor.webp' },
  { name: 'セキュアカメラアプリ', cat: 'カメラ', icon: '/apps/secure_camera.png' },
  { name: '学フェス', cat: 'SaaS', icon: '/apps/gakufes.jpg' },
  { name: '九工大アプリ', cat: 'アプリ', icon: '/apps/kyutechapp.webp' },
  { name: '九工大ボット〜飯塚キャンパス〜', cat: 'ツール', icon: '/apps/kyutechapp.webp' },
  { name: '九工大ボット〜戸畑キャンパス〜', cat: 'ツール', icon: '/apps/kyutechapp.webp' },
  { name: '九工大ボット〜若松キャンパス〜', cat: 'ツール', icon: '/apps/kyutechapp.webp' },
  { name: 'レーシングARカメラアプリ', cat: 'カメラ', icon: '/apps/race.png' },
  { name: '結婚式クローズドSNS 婚タクト', cat: 'アプリ', icon: '/apps/kontact.webp' },
  { name: '進撃の巨人 TACTICS 公式サイト', cat: 'サイト', icon: '/apps/shingeki.png', url: 'https://www.kayac.com/team/okamuro-shogo' },
  { name: '進撃の巨人 TACTICS 調査兵団入団試験', cat: 'サイト', icon: '/apps/shingeki-2.png', url: 'https://www.kayac.com/team/okamuro-shogo' },
  { name: '九十九島からの挑戦 超激ムズ宝探し', cat: 'サイト', icon: '/apps/tsukumo.png', url: 'https://www.kayac.com/team/okamuro-shogo' },
  { name: '西武・そごう おかいものクマの買い運みくじ', cat: 'サイト', icon: '/apps/gacha.png', url: 'https://www.kayac.com/team/okamuro-shogo' },
  { name: '声で起こす目覚ましアプリ WakeApp!', cat: 'アプリ', icon: '/apps/wakeapp.png', url: 'https://www.kayac.com/team/okamuro-shogo' },
  { name: 'ブランディングWeシャツサイト', cat: 'サイト', icon: '/apps/wesharts.jpeg', url: 'https://www.kayac.com/team/okamuro-shogo' },
  { name: 'LION×３月のライオン コラボwebサイト', cat: 'サイト', icon: '/apps/lion.png', url: 'https://www.kayac.com/team/okamuro-shogo' },
  { name: 'kamatte', cat: 'サイト', icon: '/apps/kamatte.webp' },
  { name: 'iamcam', cat: 'カメラ', icon: '/apps/iamcam.webp' },
  { name: 'カラオケアプリ', cat: '音楽', icon: '/apps/karaoke.png' },
  { name: 'muon', cat: '生活', icon: '/apps/muon.avif', url: 'https://qiita.com/okamu_/items/a65ddf5c15787c0103ba' },
  { name: 'B Chrome Extension', cat: 'ツール', icon: '/apps/bchromeextension.png', url: 'https://github.com/okamuroshogo/BChromeExtension' },
  { name: 'シンデレラ', cat: 'サイト', icon: '/apps/Cindellera.webp', url: 'https://github.com/okamuroshogo/CinderellaLP' },
  { name: '嵐ありがとう', cat: 'サイト', icon: '/apps/arashi.webp' },
  { name: '光の時計~ET~', cat: '時計', icon: '/apps/light-clock.webp' },
  { name: 'Glance~Yes/No~', cat: 'アプリ', icon: '/apps/Clance.webp' },
  { name: 'チャット小説アプリ', cat: 'アプリ', icon: '/apps/balloon.png' },
  { name: 'Alexaスキル チャーハン', cat: 'スキル', icon: '/apps/friedrice.webp', url: 'https://www.amazon.co.jp/okamu-ro-%E7%95%B0%E6%AC%A1%E5%85%83%E3%81%AE%E3%83%95%E3%83%A9%E3%82%A4%E3%83%91%E3%83%B3/dp/B07CT4HQ1M' },
  { name: 'Googleスキル チャーハン', cat: 'スキル', icon: '/apps/friedrice.webp' },
  { name: 'hiwai.city', cat: '生活', icon: '/apps/hiwai.webp' },
  { name: 'ツッコミュ', cat: 'エンタメ', icon: '/apps/ツッコミュ.png' },
  { name: 'ぐらまブル', cat: 'エンタメ', icon: '/apps/grammable.jpg', url: 'https://noplan-inc.studio.site/grammable' },
  { name: 'busica', cat: 'SaaS', icon: '/apps/busica.jpg', url: 'https://prtimes.jp/main/html/rd/p/000000003.000057625.html' },
  { name: 'bentogo', cat: '生活', icon: '/apps/bentogo.jpg', url: 'https://noplan-inc.studio.site/bento-go' },
  { name: 'hexad', cat: 'SDK', icon: '/apps/hexad.jpg', url: 'https://prtimes.jp/main/html/rd/p/000000004.000057625.html' },
  { name: 'TIUS', cat: 'ツール', icon: '/apps/tius.jpg', url: 'https://prtimes.jp/main/html/rd/p/000000014.000057625.html' },
  { name: 'ReCone（のんNFTコミュニティ）', cat: 'Web3', icon: '/apps/recone.jpg', url: 'https://prtimes.jp/main/html/rd/p/000000009.000057625.html' },
  { name: 'コニカミノルタ COCOMITE', cat: '技術顧問', icon: '/apps/cocomite.jpg', url: 'https://prtimes.jp/main/html/rd/p/000000015.000057625.html' },
  { name: 'ガウェインAI', cat: 'AI', icon: '/apps/gawainai.jpg', url: 'https://gawain.nogeass.com/' },
  { name: 'AI Media Promotion', cat: 'AI', icon: '/apps/gawainai.jpg', url: 'https://gawain.nogeass.com/enterprise' },
  { name: 'AI Media Short', cat: 'AI', icon: '/apps/gawainai.jpg', url: 'https://www.youtube.com/shorts/0w_ujnDwTrc' },
  { name: 'デイリー良品紹介', cat: 'サイト', icon: '/apps/daily-item.jpg', url: 'https://daily-item.com/' },
  { name: 'パスアラーム', cat: 'アプリ', icon: '/apps/pass-alarm.jpg', url: 'http://pass-alarm.nogeass.com/' },
  { name: 'Open Calendar', cat: 'アプリ', icon: '/apps/open-calendar.png', url: 'http://open-calendar.nogeass.com/lp' },
];

const CAT_COLORS: Record<string, string> = {
  'AI': 'bg-rose-100 text-rose-700',
  'SaaS': 'bg-blue-100 text-blue-700',
  'Web3': 'bg-purple-100 text-purple-700',
  '技術顧問': 'bg-amber-100 text-amber-700',
  'SDK': 'bg-teal-100 text-teal-700',
  'ゲーム': 'bg-green-100 text-green-700',
  '音楽': 'bg-pink-100 text-pink-700',
  'カメラ': 'bg-cyan-100 text-cyan-700',
  'アプリ': 'bg-indigo-100 text-indigo-700',
  'サイト': 'bg-slate-100 text-slate-600',
  'ツール': 'bg-orange-100 text-orange-700',
  'エンタメ': 'bg-yellow-100 text-yellow-700',
  '生活': 'bg-emerald-100 text-emerald-700',
  'スキル': 'bg-violet-100 text-violet-700',
  '時計': 'bg-sky-100 text-sky-700',
};

const NOPLAN_URLS = [
  'https://qiita.com/okamu_/items/d716e1006a5f9bbdf437',
  'https://prtimes.jp/main/html/rd/p/000000009.000057625.html',
  'https://prtimes.jp/main/html/rd/p/000000015.000057625.html',
];

function ProductCard({ p, categories, lang = 'ja' }: { p: typeof PRODUCTS[number]; categories: Record<string, string>; lang?: string }) {
  const catLabel = categories[p.cat] || p.cat;
  const colorClass = CAT_COLORS[p.cat] || 'bg-slate-100 text-slate-600';
  const inner = (
    <div className={`flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-white hover:shadow-sm transition-shadow h-full ${p.url ? 'hover:border-mirai-200' : ''}`}>
      <div className="shrink-0 w-11 h-11 rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
        {p.icon ? (
          <Image src={p.icon} alt={p.name} width={44} height={44} className="w-full h-full object-cover" />
        ) : (
          <span className="text-slate-300 text-lg font-bold">{p.name[0]}</span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <span className="font-medium text-slate-800 text-sm block truncate">{p.name}</span>
        <span className={`inline-block mt-0.5 px-2 py-0.5 text-[10px] font-semibold rounded-full ${colorClass}`}>
          {catLabel}
        </span>
      </div>
    </div>
  );

  if (p.url) {
    return <a href={localizeNogeassLink(p.url, lang)} target="_blank" rel="noopener noreferrer">{inner}</a>;
  }
  return <div>{inner}</div>;
}

export default function WorksPage({ lang = 'ja' }: { lang?: string }) {
  const dict = getDictionary(lang);
  const t = dict.works;

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

          {/* GawainAI */}
          <FadeIn delay={100}>
            <div className="mt-14 sm:mt-20 card border-rose-100 bg-gradient-to-br from-rose-50/40 to-white p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full">{t.gawainBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">GawainAI</h2>
              <p className="text-lg text-slate-700 font-medium mb-2">{t.gawainSubtitle}</p>
              <ul className="space-y-2 text-slate-600 mb-6">
                {t.gawainFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">&#9656;</span>
                    <span dangerouslySetInnerHTML={{ __html: f.replace(/1\/100/, '<strong class="text-slate-800">1/100</strong>') }} />
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a href={localizeNogeassLink('https://gawainai.com', lang)} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-2.5 bg-rose-500 hover:bg-rose-600">
                  {t.gawainCta}
                </a>
                <a href={localizeNogeassLink('https://gawain.nogeass.com/enterprise', lang)} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm px-6 py-2.5 border-rose-300 text-rose-600 hover:bg-rose-50">
                  {t.gawainEnterprise}
                </a>
              </div>
            </div>
          </FadeIn>

          {/* no plan inc. */}
          <FadeIn delay={150}>
            <div className="mt-8 card border-purple-100 bg-gradient-to-br from-purple-50/40 to-white p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">no plan inc.</h2>
              <p className="text-lg text-slate-700 font-medium mb-4">{t.noplanSubtitle}</p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {t.noplanCards.map((card, i) => (
                  <a key={i} href={NOPLAN_URLS[i]} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white border border-slate-100 hover:border-purple-200 hover:shadow-sm transition-all">
                    <h3 className="font-bold text-slate-800 text-sm mb-1">{card.title}</h3>
                    <p className="text-sm text-slate-500">{card.desc}</p>
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Web3', 'AI', 'NFT', 'Blockchain', 'Scrum', 'Singapore'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Student Awards */}
          <FadeIn delay={200}>
            <div className="mt-8 card p-8 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">{t.studentTitle}</h2>
              <p className="text-slate-500 mb-6">{t.studentSubtitle}</p>
              <p className="text-sm text-slate-500 mb-4">{t.studentCircle}</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {t.studentAwards.map((a, i) => (
                  <li key={i} className="flex gap-2"><span>{a.emoji}</span><span>{a.text}</span></li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Social Impact / Activities */}
          <FadeIn delay={250}>
            <div className="mt-12 sm:mt-16">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">{t.activitiesTitle}</h2>
              <p className="text-slate-500 mb-8">{t.activitiesSubtitle}</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {t.activities.map((activity, i) => (
                  <a
                    key={i}
                    href={activity.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group card overflow-hidden hover:border-mirai-200 hover:shadow-md transition-all"
                  >
                    <div className="aspect-[1200/630] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        width={1200}
                        height={630}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 sm:p-6">
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full mb-3">
                        {activity.badge}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{activity.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{activity.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* All Products */}
          <FadeIn delay={300}>
            <div className="mt-12 sm:mt-16">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">{t.allTitle}</h2>
              <p className="text-slate-500 mb-8">{t.allSubtitle}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {PRODUCTS.map((p) => (
                  <ProductCard key={p.name} p={p} categories={t.categories} lang={lang} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  );
}
