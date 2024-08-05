'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import React from 'react';
import { useButton } from 'react-aria';
import { ModalCloseButtonProps } from './CloseButton.types';
import { modalCloseButtonVariants } from './CloseButton.variants';

export const ModalCloseButton = React.forwardRef<
  HTMLButtonElement,
  ModalCloseButtonProps
>(({ children, className, ...props }, forwardedRef) => {
  const ref = useMergedRefs(forwardedRef);

  const { buttonProps } = useButton(
    {
      elementType: 'button',
      ...props,
    },
    ref,
  );

  return (
    <button
      type="button"
      {...buttonProps}
      ref={ref}
      className={cn(modalCloseButtonVariants(), className)}
    >
      {children}
    </button>
  );
});
ModalCloseButton.displayName = '@bruhabruh/ui/ModalCloseButton';
