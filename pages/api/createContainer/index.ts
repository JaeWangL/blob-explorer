import type { NextApiRequest, NextApiResponse } from 'next';
import { BlobServiceClient } from '@azure/storage-blob';
import { CreateContainerInput } from '@lib/dtos';

interface CreateContainerRequest extends NextApiRequest {
  body: CreateContainerInput;
}

export default async function handler(
  req: CreateContainerRequest,
  res: NextApiResponse<string | string[]>,
): Promise<void> {
  if (!req.body) {
    res.status(400).json('[createContainer] Body is empty');
    return;
  }
  if (!process.env.BLOB_CONNECTION_STRING) {
    res.status(400).json('[createContainer] Blob Connection String is empty');
    return;
  }
  const { body } = req;

  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.BLOB_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient(body.name);

    await containerClient.create();

    res.status(200).json('');
  } catch (e) {
    res.status(500).json('Blob API error');
  }
}
