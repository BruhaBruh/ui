import { Popover } from '@/components/containment';
import { withProvider } from '@/utility';
import React from 'react';
import { MenuContextProvider } from './context';
import { MenuProps } from './menu.types';

const MenuImpl: React.FC<MenuProps> = ({ offset = 4, children, ...props }) => {
  return (
    <Popover {...props} offset={offset}>
      {children}
    </Popover>
  );
};
MenuImpl.displayName = 'Menu';

export const Menu = withProvider(MenuContextProvider, MenuImpl);
