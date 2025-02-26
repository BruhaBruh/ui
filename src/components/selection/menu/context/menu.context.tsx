'use client';

import { createContext } from '@/utility';
import { AriaMenuOptions } from 'react-aria';
import { TreeState } from 'react-stately';
import { Item } from '../internal';

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
