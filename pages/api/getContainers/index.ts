import type { NextApiRequest, NextApiResponse } from 'next';
import { BlobServiceClient } from '@azure/storage-blob';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string | string[]>): Promise<void> {
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    'DefaultEndpointsProtocol=https;AccountName=smartgeo;AccountKey=bMh3apO0aJUQ93AVEWorwkKqCVO7sjJSG20STifAQIcmnrbM8NayCfaZYPCC592zia9WV4l4eeOKe5U+oD9mOw==;EndpointSuffix=core.windows.net',
  );
  const containers = blobServiceClient.listContainers();

  const list = [];
  for await (const container of containers) {
    list.push(container.name);
  }

  return res.json(list);
}
