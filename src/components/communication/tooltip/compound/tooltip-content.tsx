'use client';

import { materialDuration, materialEasing } from '@/config';
import { Props } from '@/types';
import { cn, throttle } from '@/utility';
import { VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { mergeProps, useTooltip } from 'react-aria';
import { useTooltipContext } from '../context';
import { tooltipVariants } from '../tooltip.variants';

export type TooltipContentProps = Props<'section'> &
  VariantProps<typeof tooltipVariants>;

const calculatePosition = (
  bounding: DOMRect,
  position: NonNullable<TooltipContentProps['position']> = 'top',
): { x: number; y: number } => {
  let x = -9999;
  let y = -9999;
  if (position.includes('left')) {
    x = bounding.left;
  } else if (position.includes('right')) {
    x = bounding.left + bounding.width;
  } else {
    x = bounding.left + bounding.width / 2;
  }
  if (position.includes('top')) {
    y = bounding.top;
  } else if (position.includes('bottom')) {
    y = bounding.top + bounding.height;
  } else {
    y = bounding.top + bounding.height / 2;
  }

  return { x, y };
};

const calculateMotionPosition = (
  position: NonNullable<TooltipContentProps['position']> = 'top',
): { x: string; y: string } => {
  let x = '-9999px';
  let y = '-9999px';
  if (position.includes('left')) {
    x = '-100%';
  } else if (position.includes('right')) {
    x = '0%';
  } else {
    x = '-50%';
  }
  if (position.includes('top')) {
    y = '-100%';
  } else if (position.includes('bottom')) {
    y = '0%';
  } else {
    y = '-50%';
  }
  return { x, y };
};

const calculateMotionStartEndPosition = (
  position: NonNullable<TooltipContentProps['position']> = 'top',
): { x: string; y: string } => {
  const values = calculateMotionPosition(position);
  if (position.includes('left')) {
    values.x = `calc(${values.x} + 4px)`;
  } else if (position.includes('right')) {
    values.x = `calc(${values.x} - 4px)`;
  }
  if (position.includes('top')) {
    values.y = `calc(${values.y} + 4px)`;
  } else if (position.includes('bottom')) {
    values.y = `calc(${values.y} - 4px)`;
  }
  return values;
};

export const TooltipContent: React.FC<TooltipContentProps> = ({
  variant,
  position,
  className,
  children,
  ...props
}) => {
  const [
    {
      trigger,
      text,
      subhead,
      actions,
      state,
      tooltipProps: ariaTooltipProps,
      triggerTooltipProps,
    },
  ] = useTooltipContext();

  const { tooltipProps } = useTooltip(
    mergeProps(props, triggerTooltipProps, ariaTooltipProps),
    state,
  );

  const [absolutePosition, setAbsolutePosition] = React.useState({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    if (!trigger) {
      setAbsolutePosition({ x: -9999, y: -9999 });
      return () => {};
    }

    const recalculateThrottled = throttle(() => {
      if (!trigger) {
        setAbsolutePosition({ x: -9999, y: -9999 });
        return;
      }
      setAbsolutePosition(
        calculatePosition(trigger.getBoundingClientRect(), position ?? 'top'),
      );
    }, 50);

    recalculateThrottled();

    const abortController = new AbortController();
    window.addEventListener('scroll', recalculateThrottled, {
      signal: abortController.signal,
    });
    window.addEventListener('resize', recalculateThrottled, {
      signal: abortController.signal,
    });

    return () => {
      abortController.abort();
    };
  }, [trigger, position]);

  return (
    <>
      {children}
      <AnimatePresence mode="wait">
        {state?.isOpen && (
          <motion.section
            {...(tooltipProps as Record<string, unknown>)}
            initial={{
              opacity: 0,
              top: absolutePosition.y,
              left: absolutePosition.x,
              ...calculateMotionStartEndPosition(position ?? 'top'),
            }}
            animate={{
              opacity: 1,
              top: absolutePosition.y,
              left: absolutePosition.x,
              ...calculateMotionPosition(position ?? 'top'),
            }}
            exit={{
              opacity: 0,
              top: absolutePosition.y,
              left: absolutePosition.x,
              ...calculateMotionStartEndPosition(position ?? 'top'),
            }}
            transition={{
              duration: materialDuration.asMotion('medium-1'),
              ease: materialEasing['standard'],
            }}
            className={cn(
              tooltipVariants.wrapper({ variant, position }),
              className,
            )}
          >
            <section className={cn(tooltipVariants({ variant, position }))}>
              {variant === 'rich' && subhead && (
                <p className={cn(tooltipVariants.subhead())}>{subhead}</p>
              )}
              <p className={cn(tooltipVariants.text({ variant }))}>{text}</p>
              {variant === 'rich' && actions && (
                <p className={cn(tooltipVariants.actions())}>{actions}</p>
              )}
            </section>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
