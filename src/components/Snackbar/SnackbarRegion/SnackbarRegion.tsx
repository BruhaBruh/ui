'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { AriaToastRegionProps, useToastRegion } from '@react-aria/toast';
import React from 'react';
import { Snackbar } from '../Snackbar';
import { useSnackbar } from '../SnackbarProvider';
import { SnackbarRegionProps } from './SnackbarRegion.types';
import {
  snackbarRegionContainerVariants,
  snackbarRegionItemWrapperVariants,
} from './SnackbarRegion.variants';

const splitProps = ({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  ...restProps
}: SnackbarRegionProps): [
  AriaToastRegionProps,
  Omit<SnackbarRegionProps, keyof AriaToastRegionProps>,
] => {
  const ariaProps = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
  };
  return [ariaProps, restProps];
};

export const SnackbarRegion = React.forwardRef<
  HTMLElement,
  SnackbarRegionProps
>(({ position, className, asChild, children, ...restProps }, forwardedRef) => {
  const ref = useMergedRefs(forwardedRef);
  const state = useSnackbar();
  const [ariaProps, props] = splitProps(restProps);
  const { regionProps } = useToastRegion(ariaProps, state, ref);

  const Comp = asChild ? Slot : 'section';

  return (
    <Comp
      {...props}
      {...regionProps}
      ref={ref}
      className={cn(
        'snackbar-region',
        snackbarRegionContainerVariants({ position }),
        className,
      )}
      data-empty={state.visibleToasts.length === 0}
      onMouseEnter={(e) => {
        state.visibleToasts.forEach((toast) => {
          toast.timer?.pause();
        });
        props.onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        state.visibleToasts.forEach((toast) => {
          toast.timer?.resume();
        });
        props.onMouseLeave?.(e);
      }}
      onTouchStart={(e) => {
        state.visibleToasts.forEach((toast) => {
          toast.timer?.pause();
        });
        props.onTouchStart?.(e);
      }}
      onTouchEnd={(e) => {
        state.visibleToasts.forEach((toast) => {
          toast.timer?.resume();
        });
        props.onTouchEnd?.(e);
      }}
    >
      {asChild && <Slottable>{children}</Slottable>}
      {state.visibleToasts.map((toast) => (
        <div
          className={cn(
            'snackbar-region--item-wrapper',
            snackbarRegionItemWrapperVariants({
              position,
              animation: toast.animation,
            }),
          )}
          key={toast.key}
          onAnimationEnd={() => {
            if (toast.animation === 'exiting') {
              state.remove(toast.key);
            }
          }}
          data-animation={toast.animation}
        >
          <Snackbar toast={toast} state={state} />
        </div>
      ))}
    </Comp>
  );
});
SnackbarRegion.displayName = 'SnackbarRegion';
