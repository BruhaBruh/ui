import { useInteractionsWithRipple, useMergedRefs } from '@/hooks';
import { cn, mergeProps } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import type { CardProps } from './card.types';
import { cardVariants } from './card.variants';

export const Card = React.forwardRef<HTMLElement, CardProps>(
  (
    { color, variant, isInteractable, asChild, className, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const Comp = asChild ? Slot : 'section';

    const { interactionsProps, rippleProps } =
      useInteractionsWithRipple<'section'>({
        ...props,
      });

    return (
      <Comp
        {...mergeProps(props, interactionsProps, rippleProps)}
        ref={ref}
        className={cn(
          cardVariants({ color, variant, isInteractable }),
          className,
        )}
      />
    );
  },
);
Card.displayName = 'Card';
