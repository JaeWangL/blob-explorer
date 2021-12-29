import type { NextApiRequest, NextApiResponse } from 'next';
import { BlobServiceClient } from '@azure/storage-blob';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string | string[]>): Promise<void> {
  if (!process.env.BLOB_CONNECTION_STRING) {
    return;
  }

  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.BLOB_CONNECTION_STRING);
    const containers = blobServiceClient.listContainers();

    const list = [];
    for await (const container of containers) {
      list.push(container.name);
    }

    res.status(200).json(list);
  } catch (e) {
    res.status(500).json('Blob API error');
  }
}
