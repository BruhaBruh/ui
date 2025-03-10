import { useInteractionsWithRipple, useMergedRefs } from '@/hooks';
import { cn, mergeProps, unwrapChildren } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { useButton } from 'react-aria';
import type { FabProps } from './fab.types';
import { fabVariants } from './fab.variants';
import { InternalFabIcon } from './internal/internal-fab-icon';

export const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  (
    { color, size, lowered, className, asChild, children, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const { buttonProps } = useButton(props, ref);

    const { interactionsProps, rippleProps } =
      useInteractionsWithRipple<'button'>(buttonProps);

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        type="button"
        {...mergeProps(props, interactionsProps, rippleProps)}
        ref={ref}
        className={cn(
          'fab',
          fabVariants({
            color,
            size,
            lowered,
          }),
          className,
        )}
        data-lowered={lowered ?? 'false'}
      >
        {unwrapChildren(
          children,
          (child) => (
            <InternalFabIcon size={size ?? 'md'}>{child}</InternalFabIcon>
          ),
          !asChild,
        )}
      </Comp>
    );
  },
);
Fab.displayName = 'Fab';
