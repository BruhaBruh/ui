import type { PropsWithAsChild } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { containerVariants } from '../../container.variants';

export type ContainerContentProps = PropsWithAsChild<'section'> &
  VariantProps<typeof containerVariants.content>;
