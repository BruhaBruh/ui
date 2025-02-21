'use client';

import { useMergedRefs } from '@/hooks';
import { withProvider } from '@/utility';
import React from 'react';
import { useModalOverlay, useOverlayTrigger } from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';
import { ModalContextProvider, useModalSetContext } from './context';
import { ModalProps } from './modal.types';

const ModalImpl = React.forwardRef<HTMLElement, ModalProps>(
  (
    {
      isDismissable = true,
      isOpen,
      defaultOpen,
      onOpenChange,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const setState = useModalSetContext();

    const state = useOverlayTriggerState({
      isOpen,
      defaultOpen,
      onOpenChange,
    });
    const { triggerProps, overlayProps } = useOverlayTrigger(
      { type: 'dialog' },
      state,
    );

    const { modalProps, underlayProps } = useModalOverlay(
      { ...props, isDismissable },
      state,
      ref,
    );

    React.useEffect(() => {
      setState((p) => ({
        ...p,
        state,
        triggerProps,
        overlayProps,
        modalProps,
        underlayProps,
      }));

      return () => setState({});
    }, [
      modalProps,
      overlayProps,
      setState,
      state,
      triggerProps,
      underlayProps,
    ]);

    return children;
  },
);
ModalImpl.displayName = 'Modal';

export const Modal = withProvider(ModalContextProvider, ModalImpl);
