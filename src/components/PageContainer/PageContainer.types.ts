import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { pageContainerVariants } from './PageContainer.variants';

export type PageContainerProps = PropsWithAsChild<'div'> &
  VariantProps<typeof pageContainerVariants>;
