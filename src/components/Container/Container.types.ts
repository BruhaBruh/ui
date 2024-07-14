import { PropsWithAsChild } from '@/types/index.types';
import { VariantProps } from 'class-variance-authority';
import { containerVariants } from './Container.variants';

export type ContainerProps = PropsWithAsChild<'section'> &
  VariantProps<typeof containerVariants>;
