'use client';

import React from 'react';
import { AriaButtonProps, useOverlayTrigger } from 'react-aria';
import {
  OverlayTriggerProps,
  OverlayTriggerState,
  useOverlayTriggerState,
} from 'react-stately';

type ModalState = {
  state: OverlayTriggerState;
  triggerProps: AriaButtonProps<'button'>;
  overlayProps: { id?: string };
};

const initialState: ModalState = {
  state: {
    isOpen: false,
    setOpen: () => {},
    open: () => {},
    close: () => {},
    toggle: () => {},
  },
  triggerProps: {},
  overlayProps: {},
};

const ModalContext = React.createContext(initialState);

export const useModal = () => {
  return React.useContext(ModalContext);
};

export const ModalProvider: React.FC<
  React.PropsWithChildren<OverlayTriggerProps>
> = ({ children, ...props }) => {
  const state = useOverlayTriggerState({ ...props });
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
  );
  const value = React.useMemo(
    () => ({ triggerProps, overlayProps, state }),
    [triggerProps, overlayProps, state],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
