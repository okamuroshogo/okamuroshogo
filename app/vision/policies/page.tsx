import type { Metadata } from 'next';
import PoliciesPage from '@/components/pages/PoliciesPage';
import { getDictionary } from '@/lib/i18n';

const dict = getDictionary('ja');
export const metadata: Metadata = {
  title: dict.policies.metaTitle,
  description: dict.policies.metaDesc,
};

export default function Page() {
  return <PoliciesPage lang="ja" />;
}
