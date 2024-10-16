import { PropsWithAsChild } from '@/types';
import { AriaToastRegionProps } from '@react-aria/toast';
import { VariantProps } from 'class-variance-authority';
import { snackbarRegionVariants } from './SnackbarRegion.variants';

export type SnackbarRegionProps = AriaToastRegionProps &
  PropsWithAsChild<'section', AriaToastRegionProps> &
  VariantProps<typeof snackbarRegionVariants>;
