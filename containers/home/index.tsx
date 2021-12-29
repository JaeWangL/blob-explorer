import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import IsEqual from 'react-fast-compare';

function Home(): JSX.Element {
  const { t } = useTranslation('common');

  return (
    <div>
      <Link href="/container/cheongmac" passHref>
        <p>{t('ok')}</p>
      </Link>
    </div>
  );
}

export default memo(Home, IsEqual);
