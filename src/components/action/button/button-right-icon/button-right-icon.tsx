'use client';

import React from 'react';
import { useButtonContext } from '../button-context';

export const ButtonRightIcon: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { setRightIcon } = useButtonContext();

  React.useEffect(() => {
    setRightIcon(children);
    return () => {
      setRightIcon(null);
    };
  }, [children, setRightIcon]);

  return null;
};
