import React from 'react';
import { useSetButtonContext } from '../ButtonContext';

export const ButtonRight: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const setContext = useSetButtonContext();

  React.useEffect(() => {
    setContext((p) => ({
      ...p,
      right: children,
    }));
  }, [children, setContext]);

  return null;
};
