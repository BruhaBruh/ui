import type { AriaProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaNumberFieldProps } from 'react-aria';
import type { FieldProps } from '../field';
import type { numberFieldVariants } from './number-field.variants';

export type NumberFieldProps = Omit<
  AriaProps<'label', AriaNumberFieldProps, 'errorMessage'>,
  'children'
> &
  Omit<FieldProps, 'children' | 'isDisabled' | 'isExpanded' | 'isInvalid'> &
  VariantProps<typeof numberFieldVariants>;
