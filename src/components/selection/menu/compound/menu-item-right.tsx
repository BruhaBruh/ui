'use client';

import React from 'react';
import { useMenuItemContext } from '../context';

export const MenuItemRight: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [, setState] = useMenuItemContext();

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      right: children,
    }));

    return () => {
      setState((prev) => ({ ...prev, right: null }));
    };
  }, [children, setState]);

  return null;
};
