'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility/cn';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { useButton } from 'react-aria';
import { ButtonEmptyIconProps, ButtonProps } from './Button.types';
import { buttonVariants } from './Button.variants';

const ButtonImpl = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, color, size, content, className, asChild, children, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const { buttonProps } = useButton(
      {
        elementType: asChild ? (children as React.ElementType) : 'button',
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
          buttonVariants({ color, variant, content, size }),
          className,
        )}
      >
        {children}
      </Comp>
    );
  },
);
ButtonImpl.displayName = '@bruhabruh/ui/Button';

const EmptyIcon: React.FC<ButtonEmptyIconProps> = () => {
  return <svg viewBox="0 0 16 16" aria-hidden="true" />;
};
EmptyIcon.displayName = '@bruhabruh/ui/ButtonEmptyIcon';

export const Button = Object.assign(ButtonImpl, { EmptyIcon });
