import React from 'react';
import { useTooltipSetContext } from '../context';

export const TooltipText: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const setState = useTooltipSetContext();

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      text: children,
    }));

    return () => {
      setState((prev) => ({ ...prev, text: null }));
    };
  }, [children, setState]);

  return null;
};
