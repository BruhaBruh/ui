import React from 'react';
import { useExtendedFabContext } from '../context';

export const ExtendedFabIcon: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [, setState] = useExtendedFabContext();

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      icon: children,
    }));

    return () => {
      setState((prev) => ({ ...prev, icon: null }));
    };
  }, [children, setState]);

  return null;
};
