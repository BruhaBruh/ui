'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { SeparatorProps, useSeparator } from 'react-aria';
import { DividerProps } from './Divider.types';
import { dividerVariants } from './Divider.variants';

const splitProps = ({
  orientation = 'horizontal',
  elementType = 'span',
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  ...restProps
}: DividerProps): [
  SeparatorProps,
  Omit<DividerProps, keyof SeparatorProps>,
] => {
  const ariaProps = {
    orientation,
    elementType,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
  };
  return [ariaProps, restProps];
};

export const Divider = React.forwardRef<HTMLSpanElement, DividerProps>(
  (
    { inset, middleInset, className, asChild, children, ...restProps },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const [ariaProps, props] = splitProps(restProps);
    const { separatorProps } = useSeparator(ariaProps);

    const Comp = asChild ? Slot : 'span';

    return (
      <Comp
        {...props}
        {...separatorProps}
        ref={ref}
        className={cn(
          'divider',
          dividerVariants({
            orientation: ariaProps.orientation,
            inset,
            middleInset,
          }),
          className,
        )}
      >
        {asChild && <Slottable>{children}</Slottable>}
      </Comp>
    );
  },
);
Divider.displayName = 'Divider';
