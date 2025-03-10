import type { AriaPropsWithAsChild } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaButtonProps } from 'react-aria';
import type { fabVariants } from './fab.variants';

export type FabProps = AriaPropsWithAsChild<
  'button',
  AriaButtonProps,
  'isDisabled'
> &
  VariantProps<typeof fabVariants>;
