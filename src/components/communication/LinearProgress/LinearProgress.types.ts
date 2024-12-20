import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaProgressBarProps } from 'react-aria';
import { linearProgressVariants } from './LinearProgress.variants';

export type LinearProgressProps = Omit<
  AriaProgressBarProps,
  'label' | 'valueLabel'
> &
  PropsWithAsChild<'div', AriaProgressBarProps> &
  VariantProps<typeof linearProgressVariants>;
