'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { AriaToastRegionProps, useToastRegion } from '@react-aria/toast';
import React from 'react';
import { mergeProps, useHover } from 'react-aria';
import { Snackbar } from '../Snackbar';
import { useSnackbar } from '../SnackbarProvider';
import { SnackbarRegionProps } from './SnackbarRegion.types';
import { snackbarRegionVariants } from './SnackbarRegion.variants';

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

  const { hoverProps } = useHover({
    onHoverChange: (isHovering) => {
      if (isHovering) {
        state.pauseAll();
      } else {
        state.resumeAll();
      }
    },
  });

  const Comp = asChild ? Slot : 'section';

  return (
    <Comp
      {...mergeProps(props, regionProps, hoverProps)}
      ref={ref}
      className={cn(
        'snackbar-region',
        snackbarRegionVariants({ position }),
        className,
      )}
      data-empty={state.visibleToasts.length === 0}
    >
      {asChild && <Slottable>{children}</Slottable>}
      {state.visibleToasts.map((toast) => (
        <Snackbar key={toast.key} toast={toast} state={state} />
      ))}
    </Comp>
  );
});
SnackbarRegion.displayName = 'SnackbarRegion';
