'use client';

import React from 'react';
import { useExtendedFabContext } from '../extended-fab-context/extended-fab.context';

export const ExtendedFabIcon: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { setIcon } = useExtendedFabContext();

  React.useEffect(() => {
    setIcon(children);
    return () => {
      setIcon(null);
    };
  }, [children, setIcon]);

  return null;
};
