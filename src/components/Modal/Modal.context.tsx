'use client';

import { createFastContext } from '@/utility';
import React from 'react';
import { OverlayTriggerProps, OverlayTriggerState } from 'react-stately';

type ModalState = OverlayTriggerProps & {
  state?: OverlayTriggerState;
  overlayProps?: { id?: string };
};

const initialState: ModalState = {};

const { Provider, useStore: useModal } = createFastContext(initialState);

export { useModal };

export const ModalProvider: React.FC<
  React.PropsWithChildren<OverlayTriggerProps>
> = ({ children, ...props }) => (
  <Provider
    value={{
      ...props,
    }}
  >
    {children}
  </Provider>
);
