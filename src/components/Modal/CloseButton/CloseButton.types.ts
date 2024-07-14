import { Props } from '@/types/index.types';
import { VariantProps } from 'class-variance-authority';
import { AriaButtonProps } from 'react-aria';
import { modalCloseButtonVariants } from './CloseButton.variants';

export type ModalCloseButtonProps = AriaButtonProps &
  Props<'button'> &
  VariantProps<typeof modalCloseButtonVariants>;
