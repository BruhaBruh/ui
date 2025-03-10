import type { AriaPropsWithAsChild } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaButtonProps } from 'react-aria';
import type { extendedFabVariants } from './extended-fab.variants';

export type ExtendedFabProps = AriaPropsWithAsChild<
  'button',
  AriaButtonProps,
  'isDisabled'
> &
  VariantProps<typeof extendedFabVariants>;
