import type { AriaPropsWithAsChild } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaButtonProps } from 'react-aria';
import type { buttonVariants } from './button.variants';

export type ButtonProps = AriaPropsWithAsChild<'button', AriaButtonProps> &
  VariantProps<typeof buttonVariants>;
