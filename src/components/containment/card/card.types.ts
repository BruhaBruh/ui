import type { PropsWithAsChild } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { cardVariants } from './card.variants';

export type CardProps = PropsWithAsChild<'section'> &
  VariantProps<typeof cardVariants> & {
    isDisabled?: boolean;
  };
