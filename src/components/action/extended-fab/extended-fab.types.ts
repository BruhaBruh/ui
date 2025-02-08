import { AriaPropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { extendedFabVariants } from './extended-fab.variants';

export type ExtendedFabProps = AriaPropsWithAsChild<
  'button',
  AriaButtonProps,
  'isDisabled'
> &
  VariantProps<typeof extendedFabVariants>;
