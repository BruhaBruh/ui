'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { AriaProgressBarProps, useProgressBar } from 'react-aria';
import { LinearProgressProps } from './LinearProgress.types';
import {
  linearProgressContainerVariants,
  linearProgressIndeterminateContainerVariants,
  linearProgressIndicatorVariants,
  linearProgressTrackVariants,
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
          'linear-progress',
          linearProgressContainerVariants({ color }),
          className,
        )}
        style={
          {
            ...style,
            '--progress-value': `${percentage}%`,
          } as React.CSSProperties
        }
        data-indeterminate={ariaProps.isIndeterminate || 'false'}
        data-ease-in-out={easeInOut || 'false'}
      >
        {asChild && <Slottable>{children}</Slottable>}
        {ariaProps.isIndeterminate && (
          <span
            className={cn(
              'linear-progress--indeterminate-container',
              linearProgressIndeterminateContainerVariants(),
            )}
          >
            <span
              className={cn(
                'linear-progress-indicator',
                linearProgressIndicatorVariants({ color }),
              )}
            />
            <span
              className={cn(
                'linear-progress-track',
                linearProgressTrackVariants(),
              )}
            />
            <span
              className={cn(
                'linear-progress-indicator',
                linearProgressIndicatorVariants({ color }),
              )}
            />
            <span
              className={cn(
                'linear-progress-track',
                linearProgressTrackVariants(),
              )}
            />
          </span>
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
            {percentage < 100 && (
              <span
                className={cn(
                  'linear-progress--track',
                  linearProgressTrackVariants(),
                )}
              />
            )}
          </>
        )}
      </Comp>
    );
  },
);
LinearProgress.displayName = 'LinearProgress';
