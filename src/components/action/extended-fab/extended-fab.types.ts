import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { extendedFabVariants } from './extended-fab.variants';

export type ExtendedFabProps = AriaButtonProps &
  PropsWithAsChild<'button', AriaButtonProps, 'disabled'> &
  VariantProps<typeof extendedFabVariants>;
