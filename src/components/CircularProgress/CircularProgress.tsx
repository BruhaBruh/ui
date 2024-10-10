'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { CircularProgressProps } from './CircularProgress.types';
import {
  circularProgressCircleVariants,
  circularProgressContainerVariants,
  circularProgressIndicatorVariants,
  circularProgressPathVariants,
  circularProgressTrackVariants,
} from './CircularProgress.variants';

export const CircularProgress = React.forwardRef<
  HTMLDivElement,
  CircularProgressProps
>(
  (
    {
      value = 0,
      color,
      indeterminate,
      easeInOut,
      className,
      asChild,
      children,
      style,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const computedValue = indeterminate
      ? 33
      : Math.max(0, Math.min(value, 100));

    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(
          'circular-progress',
          circularProgressContainerVariants({ color }),
          className,
        )}
        style={
          {
            ...style,
            '--progress-value': `${computedValue / 100}`,
          } as React.CSSProperties
        }
        data-indeterminate={indeterminate}
        data-ease-in-out={easeInOut}
        data-show-indicator={computedValue > 0}
      >
        <Slottable>{children}</Slottable>
        {/* <span className="absolute left-1/2 top-0 z-1 size-2xs -translate-x-1/2 bg-red-50/25" />
        <span className="absolute bottom-0 left-1/2 z-1 size-2xs -translate-x-1/2 bg-red-50/25" />
        <span className="absolute inset-y-0 left-1/2 z-1 border-x border-red-50/25" /> */}
        <svg
          className={cn(
            'circular-progress--circle',
            circularProgressCircleVariants(),
          )}
          viewBox="0 0 48 48"
        >
          {computedValue > 0 && (
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
          {computedValue < 90 && (
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
