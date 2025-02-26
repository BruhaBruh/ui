'use client';

import { withProvider } from '@/utility';
import React from 'react';
import { PopoverContextProvider, usePopoverSetContext } from './context';
import { PopoverProps } from './popover.types';

const PopoverImpl: React.FC<PopoverProps> = ({ children, ...popoverProps }) => {
  const setState = usePopoverSetContext();

  React.useEffect(() => {
    setState((p) => ({
      ...p,
      popoverProps,
    }));

    return () => setState((p) => ({ ...p, popoverProps: undefined }));
  }, [setState, popoverProps]);

  return <>{children}</>;
};

export const Popover = withProvider(PopoverContextProvider, PopoverImpl);
