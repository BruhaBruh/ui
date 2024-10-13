'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { childrenUnwrapper, cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { AriaToastProps, useToast } from '@react-aria/toast';
import React from 'react';
import { IconButton } from '../IconButton';
import { SnackbarContent, SnackbarProps } from './Snackbar.types';
import {
  snackbarActionsVariants,
  snackbarCloseButtonVariants,
  snackbarContainerVariants,
  snackbarContentVariants,
  snackbarDescriptionVariants,
  snackbarTitleVariants,
} from './Snackbar.variants';

const splitProps = ({
  toast,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  ...restProps
}: SnackbarProps): [
  AriaToastProps<SnackbarContent>,
  Omit<SnackbarProps, keyof AriaToastProps<SnackbarContent>>,
] => {
  const ariaProps = {
    toast,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
  };
  return [ariaProps, restProps];
};

export const Snackbar = React.forwardRef<HTMLElement, SnackbarProps>(
  ({ className, ...restProps }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);

    const [{ toast, ...ariaProps }, { state, ...props }] =
      splitProps(restProps);

    const {
      toastProps,
      contentProps,
      titleProps,
      descriptionProps,
      closeButtonProps,
    } = useToast({ toast, ...ariaProps }, state, ref);

    const Comp = toast.content.asChild ? Slot : 'section';

    return (
      <Comp
        {...props}
        {...toastProps}
        {...contentProps}
        ref={ref}
        className={cn('snackbar', snackbarContainerVariants(), className)}
        data-longer-actions={toast.content.longerActions || 'false'}
        onMouseEnter={() => toast.timer?.pause()}
        onMouseLeave={() => toast.timer?.resume()}
        onTouchStart={() => toast.timer?.pause()}
        onTouchEnd={() => toast.timer?.resume()}
        data-animation={toast.animation}
      >
        <Slottable>
          {childrenUnwrapper(toast.content.asChild, () => (
            <span
              className={cn('snackbar--content', snackbarContentVariants())}
            >
              <span
                {...titleProps}
                className={cn('snackbar--title', snackbarTitleVariants())}
              >
                {toast.content.title}
              </span>
              {toast.content.description && (
                <span
                  {...descriptionProps}
                  className={cn(
                    'snackbar--description',
                    snackbarDescriptionVariants(),
                  )}
                >
                  {toast.content.description}
                </span>
              )}
            </span>
          ))}
        </Slottable>
        {(toast.content.actions || toast.content.closeButton) && (
          <span className={cn('snackbar--actions', snackbarActionsVariants())}>
            {toast.content.actions}
            {toast.content.closeButton && (
              <IconButton
                {...closeButtonProps}
                className={cn(snackbarCloseButtonVariants())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </IconButton>
            )}
          </span>
        )}
      </Comp>
    );
  },
);
Snackbar.displayName = 'Snackbar';
