import { Popover } from '@/components/containment';
import { withProvider } from '@/utility';
import type React from 'react';
import { MenuContextProvider } from './context';
import type { MenuProps } from './menu.types';

const MenuImpl: React.FC<MenuProps> = ({ offset = 4, children, ...props }) => {
  return (
    <Popover {...props} offset={offset}>
      {children}
    </Popover>
  );
};
MenuImpl.displayName = 'Menu';

export const Menu = withProvider(MenuContextProvider, MenuImpl);
