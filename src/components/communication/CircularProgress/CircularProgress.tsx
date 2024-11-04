'use client';

import { useKeyframes } from '@/hooks';
import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { AriaProgressBarProps, mergeProps, useProgressBar } from 'react-aria';
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

    const animateFunction = React.useCallback(
      (v: number) => {
        if (!ref.current) return;
        ref.current.style.setProperty('--progress-value', `${v / 100}`);
      },
      [ref],
    );

    const { startAnimation, endAnimation } = useKeyframes(
      {
        0: 5,
        50: 90,
        100: 5,
      },
      {
        duration: 3000,
        fn: animateFunction,
        infinite: true,
      },
    );

    React.useEffect(() => {
      if (ariaProps.isIndeterminate) {
        startAnimation();
      } else {
        endAnimation();
        animateFunction(
          Math.max(
            0,
            Math.min(100, ((value - minValue) / (maxValue - minValue)) * 100),
          ),
        );
      }
    }, [
      animateFunction,
      ariaProps.isIndeterminate,
      endAnimation,
      maxValue,
      minValue,
      startAnimation,
      value,
    ]);

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
          'circular-progress',
          circularProgressVariants({ color }),
          className,
        )}
        style={
          {
            ...style,
            '--progress-value': ariaProps.isIndeterminate
              ? undefined
              : `${percentage / 100}`,
          } as React.CSSProperties
        }
        data-indeterminate={ariaProps.isIndeterminate}
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
          {(ariaProps.isIndeterminate || percentage > 0) && (
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
          {(ariaProps.isIndeterminate || percentage < 90) && (
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
