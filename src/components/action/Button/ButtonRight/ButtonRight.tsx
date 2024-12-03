'use client';

import React from 'react';
import { useSetButtonContext } from '../ButtonContext';
import { IconWrapper } from '../IconWrapper';

export const ButtonRight: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const setContext = useSetButtonContext();

  React.useEffect(() => {
    setContext((p) => ({
      ...p,
      right: <IconWrapper key={Math.random()}>{children}</IconWrapper>,
    }));
  }, [children, setContext]);

  return null;
};
