import type { AriaProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaTextFieldProps } from 'react-aria';
import type { FieldProps } from '../field';
import type { textAreaFieldVariants } from './text-area-field.variants';

export type TextAreaFieldProps = Omit<
  AriaProps<'label', AriaTextFieldProps<HTMLTextAreaElement>, 'errorMessage'>,
  'children'
> &
  Omit<FieldProps, 'children' | 'isDisabled' | 'isExpanded' | 'isInvalid'> &
  VariantProps<typeof textAreaFieldVariants>;
