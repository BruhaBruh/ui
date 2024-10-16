import React from 'react';
import { useSetButtonContext } from '../ButtonContext';

export const ButtonLeft: React.FC<React.PropsWithChildren> = ({ children }) => {
  const setContext = useSetButtonContext();

  React.useEffect(() => {
    setContext((p) => ({
      ...p,
      left: children,
    }));
  }, [children, setContext]);

  return null;
};
