import type { Metadata } from 'next';
import WorksPage from '@/components/pages/WorksPage';
import { getDictionary } from '@/lib/i18n';

const dict = getDictionary('ja');
export const metadata: Metadata = {
  title: dict.works.metaTitle,
  description: dict.works.metaDesc,
};

export default function Page() {
  return <WorksPage lang="ja" />;
}
