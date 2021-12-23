import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { useAllBlobs, useAllContainers } from '@lib/services';

function Home(): JSX.Element {
  const { t } = useTranslation('common');
  const containerNames = useAllContainers();
  const blobNames = useAllBlobs(containerNames ? containerNames[0] : undefined);

  if (!containerNames || !blobNames) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <p>{t('ok')}</p>
      <ul>
        {containerNames.map((n) => (
          <li>{n}</li>
        ))}
      </ul>
      <ul>
        {blobNames.map((n) => (
          <li>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default memo(Home, IsEqual);
