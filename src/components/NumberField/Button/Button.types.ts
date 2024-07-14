import { Props } from '@/types/index.types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { numberFieldButtonVariants } from './Button.variants';

export type NumberFieldButtonProps = AriaButtonProps &
  Props<'button'> &
  VariantProps<typeof numberFieldButtonVariants>;
