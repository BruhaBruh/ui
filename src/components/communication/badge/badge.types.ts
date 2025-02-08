import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { badgeVariants } from './badge.variants';

export type BadgeProps = PropsWithAsChild<'section', 'children'> &
  VariantProps<typeof badgeVariants> & {
    value?: number;
    maxValue?: number;
  };
