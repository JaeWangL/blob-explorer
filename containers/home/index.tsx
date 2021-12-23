import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import IsEqual from 'react-fast-compare';

function Home(): JSX.Element {
  const { t } = useTranslation('common');

  return (
    <div>
      <p>{t('ok')}</p>
    </div>
  );
}

export default memo(Home, IsEqual);
