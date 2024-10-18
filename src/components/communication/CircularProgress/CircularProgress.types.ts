import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaProgressBarProps } from 'react-aria';
import { circularProgressVariants } from './CircularProgress.variants';

export type CircularProgressProps = Omit<
  AriaProgressBarProps,
  'label' | 'valueLabel'
> &
  PropsWithAsChild<'div', AriaProgressBarProps> &
  VariantProps<typeof circularProgressVariants> & {
    value?: number;
  };
