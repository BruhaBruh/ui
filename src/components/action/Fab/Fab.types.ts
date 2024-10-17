import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { fabVariants } from './Fab.variants';

export type FabProps = Omit<AriaButtonProps, 'isDisabled'> &
  PropsWithAsChild<'button', AriaButtonProps, 'isDisabled' | 'disabled'> &
  VariantProps<typeof fabVariants> & {
    lowered?: boolean;
  };
