import type { Metadata } from 'next';
import './globals.css';
import LangRedirect from '@/components/LangRedirect';

export const metadata: Metadata = {
  title: '岡室庄悟（おかむー） | テクノロジーで日本の未来をアップデートする',
  description: '2度の起業で培った社会実装力と仲間を集める力で、チームみらいから日本の未来を創る。ノーギアス株式会社 CEO / no plan inc. 創業者。',
  openGraph: {
    title: '岡室庄悟（おかむー） | テクノロジーで日本の未来をアップデートする',
    description: '2度の起業で培った社会実装力で、チームみらいから日本の未来を創る。',
    siteName: 'okamu.ro',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="msvalidate.01" content="D884C3980B509C1962CEE0036ACA0C68" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;600;700;800&family=Noto+Sans+KR:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-800 font-sans antialiased">
        <LangRedirect />
        {children}
      </body>
    </html>
  );
}
