import { Props, PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { buttonVariants } from './Button.variants';

export type ButtonProps = AriaButtonProps &
  PropsWithAsChild<'button'> &
  VariantProps<typeof buttonVariants>;

export type ButtonEmptyIconProps = Props<'svg'>;
