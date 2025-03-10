import React from 'react';
import { useTooltipSetContext } from '../context';

export const TooltipSubhead: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const setState = useTooltipSetContext();

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      subhead: children,
    }));

    return () => {
      setState((prev) => ({ ...prev, subhead: null }));
    };
  }, [children, setState]);

  return null;
};
