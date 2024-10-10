import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { circularProgressContainerVariants } from './CircularProgress.variants';

export type CircularProgressProps = PropsWithAsChild<'div'> &
  VariantProps<typeof circularProgressContainerVariants> & {
    value?: number;
    indeterminate?: boolean;
    easeInOut?: boolean;
  };
