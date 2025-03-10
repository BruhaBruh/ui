import type { AriaPropsWithAsChild } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaButtonProps, AriaToggleButtonProps } from 'react-aria';
import type { iconButtonVariants } from './icon-button.variants';

export type IconButtonProps = AriaPropsWithAsChild<
  'button',
  AriaButtonProps & AriaToggleButtonProps
> &
  VariantProps<typeof iconButtonVariants>;
