import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { useAllBlobs } from '@lib/services';

type ContainerProps = {
  containerName: string;
};

function Container(props: ContainerProps): JSX.Element {
  const { containerName } = props;
  const { t } = useTranslation('common');
  const blobNames = useAllBlobs(containerName);

  if (!blobNames) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <p>{t('ok')}</p>
      <ul>
        {blobNames.map((n) => (
          <li>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default memo(Container, IsEqual);
