import React from 'react';
import { useButtonContext } from '../context';

export const ButtonLeftIcon: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [, setState] = useButtonContext();

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      leftIcon: children,
    }));

    return () => {
      setState((prev) => ({ ...prev, leftIcon: null }));
    };
  }, [children, setState]);

  return null;
};
