import HomePage from '@/components/pages/HomePage';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ko' }, { lang: 'zh' }];
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <HomePage lang={lang} />;
}
