'use client';

import React from 'react';
import { useButtonContext } from '../context';

export const ButtonRightIcon: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [, setState] = useButtonContext();

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      rightIcon: children,
    }));

    return () => {
      setState((prev) => ({ ...prev, rightIcon: null }));
    };
  }, [children, setState]);

  return null;
};
