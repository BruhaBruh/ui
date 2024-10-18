'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { AriaProgressBarProps, mergeProps, useProgressBar } from 'react-aria';
import { LinearProgressProps } from './LinearProgress.types';
import {
  linearProgressIndicatorEndVariants,
  linearProgressIndicatorVariants,
  linearProgressTrackVariants,
  linearProgressVariants,
} from './LinearProgress.variants';

const splitProps = ({
  isIndeterminate,
  formatOptions,
  value,
  minValue,
  maxValue,
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  ...restProps
}: LinearProgressProps): [
  AriaProgressBarProps,
  Omit<LinearProgressProps, keyof AriaProgressBarProps>,
] => {
  const ariaProps = {
    isIndeterminate,
    formatOptions,
    value,
    minValue,
    maxValue,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
  };
  return [ariaProps, restProps];
};

export const LinearProgress = React.forwardRef<
  HTMLDivElement,
  LinearProgressProps
>(
  (
    {
      value = 0,
      minValue = 0,
      maxValue = 100,
      color,
      className,
      asChild,
      children,
      style,
      ...restProps
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const [ariaProps, props] = splitProps(restProps);
    const { progressBarProps } = useProgressBar({
      value,
      minValue,
      maxValue,
      ...ariaProps,
    });

    const percentage = Math.max(
      0,
      Math.min(100, ((value - minValue) / (maxValue - minValue)) * 100),
    );

    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        {...mergeProps(props, progressBarProps)}
        ref={ref}
        className={cn(
          'linear-progress',
          linearProgressVariants({ color }),
          className,
        )}
        style={
          {
            ...style,
            '--progress-value': `${percentage}%`,
          } as React.CSSProperties
        }
        data-indeterminate={ariaProps.isIndeterminate || false}
      >
        {asChild && <Slottable>{children}</Slottable>}
        {ariaProps.isIndeterminate && (
          <span
            className={cn(
              'linear-progress-indicator',
              linearProgressIndicatorVariants({ color }),
            )}
          />
        )}
        {!ariaProps.isIndeterminate && (
          <>
            {percentage > 0 && (
              <span
                className={cn(
                  'linear-progress--indicator',
                  linearProgressIndicatorVariants({ color }),
                )}
              />
            )}
            {percentage < 97 && (
              <span
                className={cn(
                  'linear-progress--track',
                  linearProgressTrackVariants(),
                )}
              />
            )}
            <span
              className={cn(
                'linear-progress--indicator-end',
                linearProgressIndicatorEndVariants({ color }),
              )}
            />
          </>
        )}
      </Comp>
    );
  },
);
LinearProgress.displayName = 'LinearProgress';
