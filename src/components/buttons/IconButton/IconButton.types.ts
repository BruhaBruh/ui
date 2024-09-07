import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { iconButtonContainerVariants } from './IconButton.variants';

export type IconButtonProps = AriaButtonProps &
  PropsWithAsChild<'button'> &
  VariantProps<typeof iconButtonContainerVariants>;
