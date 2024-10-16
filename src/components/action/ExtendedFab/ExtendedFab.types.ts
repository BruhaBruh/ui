import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { extendedFabVariants } from './ExtendedFab.variants';

export type ExtendedFabProps = AriaButtonProps &
  PropsWithAsChild<'button', AriaButtonProps, 'isDisabled' | 'disabled'> &
  VariantProps<typeof extendedFabVariants> & {
    lowered?: boolean;
  };
