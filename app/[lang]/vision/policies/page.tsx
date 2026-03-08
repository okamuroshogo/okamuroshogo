import PoliciesPage from '@/components/pages/PoliciesPage';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ko' }, { lang: 'zh' }];
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <PoliciesPage lang={lang} />;
}
