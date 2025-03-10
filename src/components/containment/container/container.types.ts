import type { PropsWithAsChild } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { containerVariants } from './container.variants';

export type ContainerProps = PropsWithAsChild<'section'> &
  VariantProps<typeof containerVariants>;
