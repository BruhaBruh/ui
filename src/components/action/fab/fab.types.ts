import { AriaPropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { fabVariants } from './fab.variants';

export type FabProps = AriaPropsWithAsChild<
  'button',
  AriaButtonProps,
  'isDisabled'
> &
  VariantProps<typeof fabVariants>;
