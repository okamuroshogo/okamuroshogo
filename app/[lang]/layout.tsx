import { getDictionary } from '@/lib/i18n';
import LangSetter from '@/components/LangSetter';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ko' }, { lang: 'zh' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      siteName: 'okamu.ro',
      type: 'website',
      images: [{ url: '/profile.jpg', width: 1200, height: 1200, alt: dict.meta.ogTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      images: ['/profile.jpg'],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <LangSetter lang={lang} />
      {children}
    </>
  );
}
