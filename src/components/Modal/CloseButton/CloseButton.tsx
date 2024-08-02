'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { CloseSquareLinear } from '@bruhabruh/solar-icon-set';
import React from 'react';
import { useButton } from 'react-aria';
import { ModalCloseButtonProps } from './CloseButton.types';
import { modalCloseButtonVariants } from './CloseButton.variants';

export const ModalCloseButton = React.forwardRef<
  HTMLButtonElement,
  ModalCloseButtonProps
>(({ className, ...props }, forwardedRef) => {
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
      <CloseSquareLinear className="[&>*:first-child]:hidden scale-[2]" />
    </button>
  );
});
ModalCloseButton.displayName = '@bruhabruh/ui/ModalCloseButton';
