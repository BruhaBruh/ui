import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility/cn';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { useButton } from 'react-aria';
import { ButtonProps } from './Button.types';
import { buttonVariants } from './Button.variants';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, color, size, content, className, asChild, children, ...props },
    ref,
  ) => {
    const internalRef = useMergedRefs(ref);

    const { buttonProps } = useButton(
      {
        elementType: asChild
          ? (children as unknown as React.JSXElementConstructor<unknown>)
          : 'button',
        ...props,
      },
      internalRef,
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
Button.displayName = '@bruhabruh/ui/Button';
