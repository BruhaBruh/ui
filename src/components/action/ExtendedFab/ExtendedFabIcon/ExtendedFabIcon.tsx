import React from 'react';
import { useSetExtendedFabContext } from '../ExtendedFabContext';

export const ExtendedFabIcon: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const setContext = useSetExtendedFabContext();

  React.useEffect(() => {
    setContext((p) => ({
      ...p,
      icon: children,
    }));
  }, [children, setContext]);

  return null;
};
