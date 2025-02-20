'use client';

import React from 'react';
import { useSwitchContext } from '../context';

export const SwitchUnselectedIcon: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [, setState] = useSwitchContext();

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      unselectedIcon: children,
    }));

    return () => {
      setState((prev) => ({ ...prev, unselectedIcon: null }));
    };
  }, [children, setState]);

  return null;
};
