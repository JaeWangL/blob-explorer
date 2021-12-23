import type { NextApiRequest, NextApiResponse } from 'next';
import { BlobServiceClient } from '@azure/storage-blob';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string | string[]>): Promise<void> {
  const { containerName } = req.query;
  if (!containerName) {
    res.status(500).json('Invalid Request');
    return;
  }

  const blobServiceClient = BlobServiceClient.fromConnectionString(
    'DefaultEndpointsProtocol=https;AccountName=smartgeo;AccountKey=bMh3apO0aJUQ93AVEWorwkKqCVO7sjJSG20STifAQIcmnrbM8NayCfaZYPCC592zia9WV4l4eeOKe5U+oD9mOw==;EndpointSuffix=core.windows.net',
  );
  const containerClient = blobServiceClient.getContainerClient(containerName as string);

  const list = [];
  for await (const blob of containerClient.listBlobsFlat()) {
    list.push(blob.name);
  }

  res.status(200).json(list);
}
