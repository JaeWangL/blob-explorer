import Axios, { AxiosInstance } from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({ maxAge: 15 * 60 * 1000, exclude: { query: false } }); // 15 min
const noCache = setupCache({ maxAge: 0 });

export const localeClient = (disableCache = true): AxiosInstance =>
  Axios.create({
    baseURL: 'api',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 0, // 20000,
    adapter: disableCache ? noCache.adapter : cache.adapter,
  });
