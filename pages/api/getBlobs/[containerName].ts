import type { NextApiRequest, NextApiResponse } from 'next';
import { BlobServiceClient } from '@azure/storage-blob';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string | string[]>): Promise<void> {
  if (!process.env.BLOB_CONNECTION_STRING) {
    return;
  }
  const { containerName } = req.query;

  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.BLOB_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient(containerName as string);

    const list = [];
    for await (const blob of containerClient.listBlobsFlat()) {
      list.push(blob.name);
    }

    res.status(200).json(list);
  } catch (e) {
    res.status(500).json('Blob API error');
  }
}
