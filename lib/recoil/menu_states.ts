import { atom } from 'recoil';

interface MenuState {
  isShow: boolean;
}

export const menuState = atom<MenuState>({
  key: 'menuState',
  default: {
    isShow: true,
  },
});
