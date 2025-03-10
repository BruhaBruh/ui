import React from 'react';
import { useMenuItemContext } from '../context';

export const MenuItemLeft: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [, setState] = useMenuItemContext();

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      left: children,
    }));

    return () => {
      setState((prev) => ({ ...prev, left: null }));
    };
  }, [children, setState]);

  return null;
};
