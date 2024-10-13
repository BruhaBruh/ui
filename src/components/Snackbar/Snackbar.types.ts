import { Props } from '@/types';
import { AriaToastProps } from '@react-aria/toast';
import { QueuedToast, ToastState } from '@react-stately/toast';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { snackbarContainerVariants } from './Snackbar.variants';

export type SnackbarContent = {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  closeButton?: boolean;
  longerActions?: boolean;
  asChild?: React.ReactNode;
} & VariantProps<typeof snackbarContainerVariants>;

export type SnackbarProps = AriaToastProps<SnackbarContent> &
  Props<'section', AriaToastProps<SnackbarContent>, 'children'> & {
    state: ToastState<SnackbarContent>;
    toast: QueuedToast<SnackbarContent>;
  };
