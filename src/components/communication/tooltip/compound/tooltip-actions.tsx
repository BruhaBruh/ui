'use client';

import React from 'react';
import { useTooltipSetContext } from '../context';

export const TooltipActions: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const setState = useTooltipSetContext();

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      actions: children,
    }));

    return () => {
      setState((prev) => ({ ...prev, actions: null }));
    };
  }, [children, setState]);

  return null;
};
