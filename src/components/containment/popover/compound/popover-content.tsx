'use client';

import { Portal } from '@/components/utility';
import { materialDuration, materialEasing } from '@/config';
import { Props } from '@/types';
import { cn } from '@/utility';
import { VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { AriaPopoverProps, mergeProps, usePopover } from 'react-aria';
import { usePopoverContext } from '../context';
import { popoverVariants } from '../popover.variants';

export type PopoverContentProps = Props<'section'> &
  VariantProps<typeof popoverVariants>;

const positionToPlacement = (
  position: PopoverContentProps['position'],
): AriaPopoverProps['placement'] => {
  if (!position) return 'top';
  const mapped: Record<
    NonNullable<PopoverContentProps['position']>,
    AriaPopoverProps['placement']
  > = {
    'top-start': 'top start',
    top: 'top',
    'top-end': 'top end',
    'right-start': 'right top',
    right: 'right',
    'right-end': 'right bottom',
    'bottom-start': 'bottom start',
    bottom: 'bottom',
    'bottom-end': 'bottom end',
    'left-start': 'left top',
    left: 'left',
    'left-end': 'left bottom',
  };
  return mapped[position];
};

const calculateMotionPosition = (
  position: NonNullable<PopoverContentProps['position']> = 'top',
): { x: number; y: number } => {
  const values = { x: 0, y: 0 };
  if (position.includes('left')) {
    values.x = 4;
  } else if (position.includes('right')) {
    values.x = -4;
  }
  if (position.includes('top')) {
    values.y = 4;
  } else if (position.includes('bottom')) {
    values.y = -4;
  }
  return values;
};

export const PopoverContent: React.FC<PopoverContentProps> = ({
  className,
  position = 'top',
  children,
  ...props
}) => {
  const ref = React.useRef<HTMLElement>(null);
  const [
    { triggerRef, state, popoverProps: ariaPopoverProps, triggerPopoverProps },
  ] = usePopoverContext();

  const { popoverProps } = usePopover(
    {
      ...mergeProps(props, triggerPopoverProps, ariaPopoverProps),
      placement: positionToPlacement(position),
      triggerRef: triggerRef ?? React.createRef(),
      popoverRef: ref,
    },
    state ?? {
      isOpen: false,
      open() {},
      close() {},
      setOpen() {},
      toggle() {},
    },
  );

  return (
    <Portal>
      <AnimatePresence mode="wait">
        {state?.isOpen && (
          <motion.section
            {...(popoverProps as Record<string, unknown>)}
            initial={{
              opacity: 0,
              ...calculateMotionPosition(position ?? 'top'),
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              ...calculateMotionPosition(position ?? 'top'),
            }}
            transition={{
              duration: materialDuration.asMotion('medium-1'),
              ease: materialEasing['standard'],
            }}
            className={cn(popoverVariants({ position }), className)}
            ref={ref}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </Portal>
  );
};
