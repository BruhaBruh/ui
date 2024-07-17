'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { useCN } from '@/providers';
import React from 'react';
import { useButton } from 'react-aria';
import { NumberFieldButtonProps } from './Button.types';
import { numberFieldButtonVariants } from './Button.variants';

export const NumberFieldButton = React.forwardRef<
  HTMLButtonElement,
  NumberFieldButtonProps
>(({ className, children, ...props }, forwardedRef) => {
  const cn = useCN();

  const ref = useMergedRefs(forwardedRef);

  const { buttonProps } = useButton(
    {
      ...props,
    },
    ref,
  );

  return (
    <button
      type="button"
      {...buttonProps}
      ref={ref}
      className={cn(numberFieldButtonVariants(), className)}
    >
      {children}
    </button>
  );
});
NumberFieldButton.displayName = '@bruhabruh/ui/NumberFieldButton';
