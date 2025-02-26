import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaTextFieldProps } from 'react-aria';
import { FieldProps } from '../field';
import { textFieldVariants } from './text-field.variants';

export type TextFieldProps = Omit<
  AriaProps<'label', AriaTextFieldProps, 'errorMessage'>,
  'children'
> &
  Omit<FieldProps, 'children' | 'isDisabled' | 'isExpanded' | 'isInvalid'> &
  VariantProps<typeof textFieldVariants>;
