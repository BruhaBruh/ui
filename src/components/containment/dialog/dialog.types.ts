import type { AriaProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaDialogProps } from 'react-aria';
import type { dialogVariants } from './dialog.variants';

export type DialogProps = AriaProps<'section', AriaDialogProps> &
  VariantProps<typeof dialogVariants>;
