'use client';

import { withProvider } from '@/utility';
import React from 'react';
import { TooltipContextProvider, useTooltipSetContext } from './context';
import { TooltipProps } from './tooltip.types';

const TooltipImpl: React.FC<TooltipProps> = ({ children, ...tooltipProps }) => {
  const setState = useTooltipSetContext();

  React.useEffect(() => {
    setState((p) => ({
      ...p,
      tooltipProps,
    }));

    return () => setState((p) => ({ ...p, tooltipProps: undefined }));
  }, [setState, tooltipProps]);

  return <>{children}</>;
};

export const Tooltip = withProvider(TooltipContextProvider, TooltipImpl);
