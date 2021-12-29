import { atom, selector } from 'recoil';
import { localeClient } from '@utils/index';

export const containerNamesState = atom<string[]>({
  key: 'containerNamesState',
  default: [],
});

export const containerNamesSelector = selector<string[]>({
  key: 'containerNamesSelector',
  get: async ({ get }): Promise<string[]> => {
    const currentState: string[] = get(containerNamesState);
    if (currentState.length > 0) {
      return currentState;
    }

    const res = await localeClient().get<string[]>('getContainers');
    return res.data;
  },
});
