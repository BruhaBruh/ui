import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaTextFieldProps } from 'react-aria';
import { FieldProps } from '../field';
import { textAreaFieldVariants } from './text-area-field.variants';

export type TextAreaFieldProps = Omit<
  AriaProps<'label', AriaTextFieldProps<HTMLTextAreaElement>, 'errorMessage'>,
  'children'
> &
  Omit<FieldProps, 'children' | 'isDisabled' | 'isExpanded' | 'isInvalid'> &
  VariantProps<typeof textAreaFieldVariants>;
