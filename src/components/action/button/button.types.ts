import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { buttonVariants } from './button.variants';

export type ButtonProps = AriaButtonProps &
  PropsWithAsChild<'button', AriaButtonProps, 'disabled'> &
  VariantProps<typeof buttonVariants>;
