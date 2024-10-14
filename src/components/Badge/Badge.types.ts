import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { badgeVariants } from './Badge.variants';

export type BadgeProps = PropsWithAsChild<'span'> &
  VariantProps<typeof badgeVariants> & {
    count?: number;
    maxCount?: number;
  };
