'use client';

import { createContext } from '@/utility';
import React from 'react';
import { AriaButtonProps } from 'react-aria';
import { OverlayTriggerState } from 'react-stately';

export type ModalContextState = {
  triggerProps?: AriaButtonProps<'button'>;
  overlayProps?: { id?: string };
  modalProps?: React.DOMAttributes<HTMLElement>;
  underlayProps?: React.DOMAttributes<HTMLElement>;
  state?: OverlayTriggerState;
};

const { useStore, useSetStore, Provider } = createContext<ModalContextState>(
  {},
  {
    storeName: 'Modal',
  },
);

export const ModalContextProvider = Provider;

export const useModalContext = useStore;

export const useModalSetContext = useSetStore;
