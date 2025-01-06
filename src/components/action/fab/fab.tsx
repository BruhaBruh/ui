'use client';

import { useInteractionsWithRipple, useMergedRefs } from '@/hooks';
import { cn, keyFromChildren, unwrapChildren } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import { AnimatePresence } from 'motion/react';
import React from 'react';
import { mergeProps, useButton } from 'react-aria';
import { FabIcon } from './fab-icon';
import { FabProps } from './fab.types';
import { fabVariants } from './fab.variants';

export const Fab: React.FC<FabProps> = ({
  color,
  size,
  lowered,
  className,
  asChild,
  children,
  ref: forwardedRef,
  ...props
}) => {
  const ref = useMergedRefs(forwardedRef);

  const { interactionsProps, rippleProps } = useInteractionsWithRipple({
    autoFocus: props.autoFocus,
  });

  const { buttonProps } = useButton(props, ref);

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      type="button"
      {...mergeProps(buttonProps, interactionsProps, rippleProps)}
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
    >
      {unwrapChildren(
        children,
        (child) => (
          <AnimatePresence mode="wait">
            <FabIcon key={keyFromChildren(child)} size={size || 'md'}>
              {child}
            </FabIcon>
          </AnimatePresence>
        ),
        !asChild,
      )}
    </Comp>
  );
};
