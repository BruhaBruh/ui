'use client';

import { createContext } from '@/utility';
import React from 'react';
import { AriaTooltipProps } from 'react-aria';
import { TooltipTriggerState } from 'react-stately';

export type TooltipContextState = {
  subhead?: React.ReactNode;
  text?: React.ReactNode;
  actions?: React.ReactNode;
  state?: TooltipTriggerState;
  tooltipProps?: AriaTooltipProps;
  trigger?: HTMLElement | null;
  triggerTooltipProps?: React.DOMAttributes<HTMLElement>;
};

const { useStore, useSetStore, Provider } = createContext<TooltipContextState>(
  {},
  {
    storeName: 'Tooltip',
  },
);

export const TooltipContextProvider = Provider;

export const useTooltipContext = useStore;

export const useTooltipSetContext = useSetStore;
