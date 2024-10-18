'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { SplitPropsFn } from '@/types';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { SeparatorProps, mergeProps, useSeparator } from 'react-aria';
import { DividerProps } from './Divider.types';
import { dividerVariants } from './Divider.variants';

export const splitProps: SplitPropsFn<SeparatorProps, DividerProps> = ({
  orientation = 'horizontal',
  elementType = 'span',
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  ...props
}) => [
  {
    orientation,
    elementType,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
  },
  props,
];

export const Divider = React.forwardRef<HTMLSpanElement, DividerProps>(
  (
    { inset, middleInset, className, asChild, children, ...restProps },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const [ariaProps, props] = splitProps(restProps);
    const { separatorProps } = useSeparator(ariaProps);

    const Comp = asChild ? Slot : 'span';

    const orientation = ariaProps.orientation;

    return (
      <Comp
        {...mergeProps(props, separatorProps)}
        ref={ref}
        className={cn(
          'divider',
          dividerVariants({
            orientation,
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
