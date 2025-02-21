'use client';

import { useMergedRefs } from '@/hooks';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { useModalContext } from '../context';

export const ModalTrigger = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren
>(({ children }, forwardedRef) => {
  const ref = useMergedRefs(forwardedRef);
  const [triggerProps] = useModalContext((s) => s.triggerProps);

  const Comp = Slot;

  return (
    <Comp {...triggerProps} ref={ref}>
      <Slottable>{children}</Slottable>
    </Comp>
  );
});
ModalTrigger.displayName = 'ModalTrigger';
