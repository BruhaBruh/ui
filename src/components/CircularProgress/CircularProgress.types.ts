import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaProgressBarProps } from 'react-aria';
import { circularProgressContainerVariants } from './CircularProgress.variants';

export type CircularProgressProps = Omit<
  AriaProgressBarProps,
  'label' | 'valueLabel'
> &
  PropsWithAsChild<'div', AriaProgressBarProps> &
  VariantProps<typeof circularProgressContainerVariants> & {
    value?: number;
    indeterminate?: boolean;
    easeInOut?: boolean;
  };
