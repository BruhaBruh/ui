'use client';

import { Button, ButtonProps } from '@/components/Button';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { useModal } from '../Modal.context';

export const ModalTrigger: React.FC<ButtonProps> = ({
  asChild,
  children,
  ...props
}) => {
  const { triggerProps } = useModal();

  const Comp = asChild ? Slot : Button;

  return (
    <Comp {...props} {...triggerProps}>
      {children}
    </Comp>
  );
};
ModalTrigger.displayName = '@bruhabruh/ui/ModalTrigger';
