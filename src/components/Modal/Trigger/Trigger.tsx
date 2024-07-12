'use client';

import { Button, ButtonProps } from '@/components/Button';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { useOverlayTrigger } from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';
import { useModal } from '../Modal.context';

export const ModalTrigger: React.FC<ButtonProps> = ({
  asChild,
  children,
  ...props
}) => {
  const [isOpen, setModal] = useModal((s) => s.isOpen);
  const [defaultOpen] = useModal((s) => s.defaultOpen);
  const [onOpenChange] = useModal((s) => s.onOpenChange);
  const state = useOverlayTriggerState({
    isOpen: isOpen,
    defaultOpen: defaultOpen,
    onOpenChange: onOpenChange,
  });
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
  );

  React.useEffect(() => {
    setModal((prev) => {
      const newState = prev;
      newState.state = state;
      newState.overlayProps = overlayProps;
      return newState;
    });
  }, [state, overlayProps, setModal]);

  const Comp = asChild ? Slot : Button;

  return (
    <Comp {...props} {...triggerProps}>
      {children}
    </Comp>
  );
};
ModalTrigger.displayName = '@bruhabruh/ui/ModalTrigger';
