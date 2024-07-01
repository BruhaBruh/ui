import { PropsWithAsChild } from '@/types/props';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { buttonVariants } from './Button.variants';

export type ButtonProps = AriaButtonProps &
  PropsWithAsChild<'button'> &
  VariantProps<typeof buttonVariants>;
