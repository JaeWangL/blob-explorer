import { useEffect, useState } from 'react';
import { localeClient } from '@utils/index';

type ContainersProps = {
  containerName: string;
};

function Containers(props: ContainersProps): JSX.Element {
  const { containerName } = props;
  const [blobs, setBlobs] = useState<string[]>([]);

  useEffect(() => {
    const initAsync = async () => {
      const res = await localeClient().get<string[]>(`getBlobs/${containerName}`);
      setBlobs(res.data);
    };

    initAsync();
  }, []);

  return (
    <div>
      <p>{containerName}</p>
      <ul>
        {blobs.map((blob) => (
          <li>{blob}</li>
        ))}
      </ul>
    </div>
  );
}

export default Containers;
