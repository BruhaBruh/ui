import type { PropsWithAsChild } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { badgeVariants } from './badge.variants';

export type BadgeProps = PropsWithAsChild<'section', 'children'> &
  VariantProps<typeof badgeVariants> & {
    value?: number;
    maxValue?: number;
  };
