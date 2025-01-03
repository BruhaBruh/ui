'use client';

import React from 'react';
import { useButtonContext } from '../button-context';

export const ButtonLeftIcon: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { setLeftIcon } = useButtonContext();

  React.useEffect(() => {
    setLeftIcon(children);
    return () => {
      setLeftIcon(null);
    };
  }, [children, setLeftIcon]);

  return null;
};
