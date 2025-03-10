import { createContext } from '@/utility';
import type { AriaMenuOptions } from 'react-aria';
import type { TreeState } from 'react-stately';
import type { Item } from '../internal';

export type MenuContextState = {
  state?: TreeState<Item>;
  triggerMenuProps?: AriaMenuOptions<Item>;
};

const { useStore, useSetStore, Provider } = createContext<MenuContextState>(
  {},
  {
    storeName: 'Menu',
  },
);

export const MenuContextProvider = Provider;

export const useMenuContext = useStore;

export const useMenuSetContext = useSetStore;
