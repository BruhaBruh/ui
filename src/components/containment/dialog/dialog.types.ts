import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaDialogProps } from 'react-aria';
import { dialogVariants } from './dialog.variants';

export type DialogProps = AriaProps<'section', AriaDialogProps> &
  VariantProps<typeof dialogVariants>;
