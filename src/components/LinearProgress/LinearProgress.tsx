'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { LinearProgressProps } from './LinearProgress.types';
import {
  linearProgressContainerVariants,
  linearProgressIndeterminateContainerVariants,
  linearProgressIndicatorVariants,
  linearProgressTrackVariants,
} from './LinearProgress.variants';

export const LinearProgress = React.forwardRef<
  HTMLDivElement,
  LinearProgressProps
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
    const computedValue = Math.max(0, Math.min(value, 100));

    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(
          'linear-progress',
          linearProgressContainerVariants({ color }),
          className,
        )}
        style={
          {
            ...style,
            '--progress-value': `${computedValue}%`,
          } as React.CSSProperties
        }
        data-indeterminate={indeterminate || 'false'}
        data-ease-in-out={easeInOut || 'false'}
      >
        <Slottable>{children}</Slottable>
        {indeterminate && (
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
        {!indeterminate && (
          <>
            {computedValue > 0 && (
              <span
                className={cn(
                  'linear-progress--indicator',
                  linearProgressIndicatorVariants({ color }),
                )}
              />
            )}
            {computedValue < 100 && (
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
