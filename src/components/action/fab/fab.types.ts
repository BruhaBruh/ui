import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { fabVariants } from './fab.variants';

export type FabProps = Omit<AriaButtonProps, 'isDisabled'> &
  PropsWithAsChild<'button', AriaButtonProps, 'disabled'> &
  VariantProps<typeof fabVariants>;
