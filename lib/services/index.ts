import useSWR from 'swr';

async function fetcher(url: string): Promise<any> {
  return window.fetch(url).then((res) => res.json());
}

export function useAllBlobs(containerName: string | undefined): string[] | undefined {
  const { data, error } = useSWR<string[]>(`/api/getBlobs/${containerName}`, fetcher);
  if (error) {
    return undefined;
  }

  return data;
}

export function useAllContainers(): string[] | undefined {
  const { data, error } = useSWR<string[]>(`/api/getContainers`, fetcher);
  if (error) {
    return undefined;
  }

  return data;
}
