import type { ContextState } from '@/types';
import React from 'react';

export type MenuItemContextState = ContextState<{
  left?: React.ReactNode;
  right?: React.ReactNode;
}>;

const MenuItemContext = React.createContext<MenuItemContextState | null>(null);

export const useMenuItemContext = () => {
  const value = React.useContext(MenuItemContext);
  if (!value)
    throw new Error(
      'This component must be used within a <MenuItem> component',
    );
  return value;
};

export const MenuItemContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const state = React.useState<MenuItemContextState[0]>({});

  return (
    <MenuItemContext.Provider value={state}>
      {children}
    </MenuItemContext.Provider>
  );
};
