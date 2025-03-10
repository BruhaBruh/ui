import type { AriaProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaTextFieldProps } from 'react-aria';
import type { FieldProps } from '../field';
import type { textFieldVariants } from './text-field.variants';

export type TextFieldProps = Omit<
  AriaProps<'label', AriaTextFieldProps, 'errorMessage'>,
  'children'
> &
  Omit<FieldProps, 'children' | 'isDisabled' | 'isExpanded' | 'isInvalid'> &
  VariantProps<typeof textFieldVariants>;
