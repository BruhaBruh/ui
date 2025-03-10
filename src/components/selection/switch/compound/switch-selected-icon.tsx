import React from 'react';
import { useSwitchContext } from '../context';

export const SwitchSelectedIcon: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [, setState] = useSwitchContext();

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      selectedIcon: children,
    }));

    return () => {
      setState((prev) => ({ ...prev, selectedIcon: null }));
    };
  }, [children, setState]);

  return null;
};
