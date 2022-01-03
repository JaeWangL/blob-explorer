import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { useRecoilValue } from 'recoil';
import { Grid } from '@mui/material';
import { FolderPreview } from '@components/index';
import { containerNamesSelector } from '@lib/recoil';

function Home(): JSX.Element {
  const { t } = useTranslation('common');
  const containerNames = useRecoilValue(containerNamesSelector);

  return (
    <div>
      <Link href="/container/cheongmac" passHref>
        <p>{t('ok')}</p>
      </Link>
      <Grid container spacing={1}>
        {containerNames.map((containerName) => (
          <Grid key={containerName} item xs={12} sm={4} lg={3}>
            <FolderPreview name={containerName} href="/" filesCount={10} sizeMb={12400} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default memo(Home, IsEqual);
