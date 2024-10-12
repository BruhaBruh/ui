import { PropsWithAsChild } from '@/types';
import { AriaToastRegionProps } from '@react-aria/toast';
import { VariantProps } from 'class-variance-authority';
import { snackbarRegionContainerVariants } from './SnackbarRegion.variants';

export type SnackbarRegionProps = AriaToastRegionProps &
  PropsWithAsChild<'section', AriaToastRegionProps> &
  VariantProps<typeof snackbarRegionContainerVariants>;
