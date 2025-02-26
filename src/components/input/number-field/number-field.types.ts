import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaNumberFieldProps } from 'react-aria';
import { FieldProps } from '../field';
import { numberFieldVariants } from './number-field.variants';

export type NumberFieldProps = Omit<
  AriaProps<'label', AriaNumberFieldProps, 'errorMessage'>,
  'children'
> &
  Omit<FieldProps, 'children' | 'isDisabled' | 'isExpanded' | 'isInvalid'> &
  VariantProps<typeof numberFieldVariants>;
