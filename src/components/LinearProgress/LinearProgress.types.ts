import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { linearProgressContainerVariants } from './LinearProgress.variants';

export type LinearProgressProps = PropsWithAsChild<'div'> &
  VariantProps<typeof linearProgressContainerVariants> & {
    value?: number;
    indeterminate?: boolean;
    easeInOut?: boolean;
  };
