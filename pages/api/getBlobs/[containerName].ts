import type { NextApiRequest, NextApiResponse } from 'next';
import { BlobServiceClient } from '@azure/storage-blob';
import { BlobDTO } from '@lib/dtos';
import { formatBytes } from '@utils/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string | BlobDTO[]>): Promise<void> {
  if (!process.env.BLOB_CONNECTION_STRING) {
    return;
  }
  const { containerName } = req.query;

  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.BLOB_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient(containerName as string);

    const list: BlobDTO[] = [];
    for await (const blob of containerClient.listBlobsFlat()) {
      list.push({
        id: blob.properties.blobSequenceNumber!,
        name: blob.name,
        type: blob.properties.contentType!,
        size: formatBytes(blob.properties.contentLength!),
        uploadedAt: blob.properties.lastModified,
        blobUrl: `${containerClient.url}/${blob.name}`,
      });
    }

    res.status(200).json(list);
  } catch (e) {
    res.status(500).json('Blob API error');
  }
}
