import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { fabContainerVariants } from './Fab.variants';

export type FabProps = AriaButtonProps &
  PropsWithAsChild<'button', AriaButtonProps, 'isDisabled' | 'disabled'> &
  VariantProps<typeof fabContainerVariants> & {
    lowered?: boolean;
  };