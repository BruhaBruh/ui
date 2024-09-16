'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { useButton } from 'react-aria';
import { IconButtonProps } from './IconButton.types';
import { iconButtonContainerVariants } from './IconButton.variants';

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant,
      color,
      size,
      disabled,
      isDisabled,
      className,
      asChild,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const { buttonProps } = useButton(
      {
        elementType: asChild ? (children as React.ElementType) : 'button',
        isDisabled: isDisabled || disabled,
        ...props,
      },
      ref,
    );

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        type="button"
        {...buttonProps}
        ref={ref}
        className={cn(
          iconButtonContainerVariants({
            color,
            variant,
            size,
          }),
          className,
        )}
        data-disabled={isDisabled || disabled}
      >
        {children}
      </Comp>
    );
  },
);
IconButton.displayName = '@bruhabruh/ui/IconButton';
