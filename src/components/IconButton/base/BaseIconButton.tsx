'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { PropsWithAsChild } from '@/types';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { AriaButtonProps, useButton } from 'react-aria';
import { iconButtonContainerVariants } from '../IconButton.variants';

export type BaseIconButtonProps = AriaButtonProps &
  PropsWithAsChild<'button', AriaButtonProps> &
  VariantProps<typeof iconButtonContainerVariants> & {
    toggleable?: false;
  };

export const BaseIconButton = React.forwardRef<
  HTMLButtonElement,
  BaseIconButtonProps
>(
  (
    {
      variant,
      color,
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
          }),
          className,
        )}
        data-selected="false"
        data-disabled={isDisabled || disabled || 'false'}
      >
        {children}
      </Comp>
    );
  },
);
BaseIconButton.displayName = 'IconButton';
