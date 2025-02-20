'use client';

import { materialDuration, materialEasing } from '@/config';
import { useInteractionsWithRipple, useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import { IconCheck } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { mergeProps, useToggleButtonGroupItem } from 'react-aria';
import { useSegmentedButtonGroupContext } from './context';
import { SegmentedButtonProps } from './segmented-button.types';
import { segmentedButtonVariants } from './segmented-button.variants';

export const SegmentedButton: React.FC<SegmentedButtonProps> = ({
  color,
  checkIcon = <IconCheck />,
  className,
  asChild,
  children,
  ref: forwardedRef,
  ...props
}) => {
  const ref = useMergedRefs(forwardedRef);
  const state = useSegmentedButtonGroupContext();

  const { buttonProps, isSelected } = useToggleButtonGroupItem(
    { ...props, elementType: 'button' },
    state,
    ref,
  );

  const { interactionsProps, rippleProps } =
    useInteractionsWithRipple<'button'>({
      ...buttonProps,
      isDisabled: props.isDisabled,
    });

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      {...mergeProps(interactionsProps, rippleProps)}
      className={cn(segmentedButtonVariants({ isSelected, color }), className)}
      ref={ref}
      data-is-selected={isSelected}
    >
      <AnimatePresence mode="wait">
        {!isSelected && (
          <motion.span
            aria-hidden={true}
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: 'var(--spacing-2-5)',
              height: 'var(--spacing-4-5)',
              opacity: 1,
            }}
            exit={{ width: 0, height: 0, opacity: 0 }}
            transition={{
              duration: materialDuration.asMotion('medium-1'),
              ease: materialEasing['standard'],
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isSelected && (
          <motion.span
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: 'var(--spacing-4-5)',
              height: 'var(--spacing-4-5)',
              opacity: 1,
            }}
            exit={{ width: 0, height: 0, opacity: 0 }}
            transition={{
              duration: materialDuration.asMotion('medium-1'),
              ease: materialEasing['standard'],
            }}
            className={cn(segmentedButtonVariants.icon())}
          >
            {checkIcon}
          </motion.span>
        )}
      </AnimatePresence>
      <span className={cn(segmentedButtonVariants.label())}>{children}</span>
      <AnimatePresence mode="wait">
        {!isSelected && (
          <motion.span
            aria-hidden={true}
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: 'var(--spacing-2-5)',
              height: 'var(--spacing-4-5)',
              opacity: 1,
            }}
            exit={{ width: 0, height: 0, opacity: 0 }}
            transition={{
              duration: materialDuration.asMotion('medium-1'),
              ease: materialEasing['standard'],
            }}
          />
        )}
      </AnimatePresence>
    </Comp>
  );
};
