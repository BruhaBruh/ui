import { AriaPropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps, AriaToggleButtonProps } from 'react-aria';
import { iconButtonVariants } from './icon-button.variants';

export type IconButtonProps = AriaPropsWithAsChild<
  'button',
  AriaButtonProps & AriaToggleButtonProps
> &
  VariantProps<typeof iconButtonVariants>;
