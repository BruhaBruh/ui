import { AriaPropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { buttonVariants } from './button.variants';

export type ButtonProps = AriaPropsWithAsChild<'button', AriaButtonProps> &
  VariantProps<typeof buttonVariants>;
