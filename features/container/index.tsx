import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { FilePreview } from '@components/index';
import { BlobDTO } from '@lib/dtos';
import { localeClient } from '@utils/index';

type ContainersProps = {
  containerName: string;
};

function Containers(props: ContainersProps): JSX.Element {
  const { containerName } = props;
  const [blobs, setBlobs] = useState<BlobDTO[]>([]);

  useEffect(() => {
    const initAsync = async () => {
      const res = await localeClient().get<BlobDTO[]>(`getBlobs/${containerName}`);
      setBlobs(res.data);
    };

    initAsync();
  }, []);

  if (blobs.length < 1) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>{containerName}</p>
      <Grid container spacing={1}>
        {blobs.map((blob) => (
          <Grid key={blob.id} item xs={6} sm={4} md={3} lg={2.4}>
            <FilePreview name={blob.name} size={blob.size} url={blob.blobUrl} uploadedAt={blob.uploadedAt} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Containers;
