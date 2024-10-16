'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { AriaProgressBarProps, useProgressBar } from 'react-aria';
import { CircularProgressProps } from './CircularProgress.types';
import {
  circularProgressCircleVariants,
  circularProgressIndicatorVariants,
  circularProgressPathVariants,
  circularProgressTrackVariants,
  circularProgressVariants,
} from './CircularProgress.variants';

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
}: CircularProgressProps): [
  AriaProgressBarProps,
  Omit<CircularProgressProps, keyof AriaProgressBarProps>,
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

export const CircularProgress = React.forwardRef<
  HTMLDivElement,
  CircularProgressProps
>(
  (
    {
      value = 0,
      minValue = 0,
      maxValue = 100,
      color,
      easeInOut,
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
        {...props}
        {...progressBarProps}
        ref={ref}
        className={cn(
          'circular-progress',
          circularProgressVariants({ color }),
          className,
        )}
        style={
          {
            ...style,
            '--progress-value': `${ariaProps.isIndeterminate ? 0.33 : percentage / 100}`,
          } as React.CSSProperties
        }
        data-indeterminate={ariaProps.isIndeterminate}
        data-ease-in-out={easeInOut}
        data-show-indicator={ariaProps.isIndeterminate || percentage > 0}
      >
        {asChild && <Slottable>{children}</Slottable>}
        <svg
          className={cn(
            'circular-progress--circle',
            circularProgressCircleVariants(),
          )}
          viewBox="0 0 48 48"
        >
          {percentage > 0 && (
            <circle
              className={cn(
                'circular-progress--indicator',
                circularProgressPathVariants(),
                circularProgressIndicatorVariants({ color }),
              )}
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="currentColor"
              pathLength="2048"
              strokeLinecap="round"
            />
          )}
          {percentage < 90 && (
            <circle
              className={cn(
                'circular-progress--track',
                circularProgressPathVariants(),
                circularProgressTrackVariants(),
              )}
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="currentColor"
              pathLength="2048"
              strokeLinecap="round"
            />
          )}
        </svg>
      </Comp>
    );
  },
);
CircularProgress.displayName = 'CircularProgress';
