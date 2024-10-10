import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { badgeContainerVariants } from './Badge.variants';

export type BadgeProps = PropsWithAsChild<'span'> &
  VariantProps<typeof badgeContainerVariants> & {
    count?: number;
    maxCount?: number;
  };
