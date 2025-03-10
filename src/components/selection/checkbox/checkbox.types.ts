import type { AriaProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaCheckboxProps } from 'react-aria';
import type { checkboxVariants } from './checkbox.variants';

export type CheckboxProps = AriaProps<'input', AriaCheckboxProps> &
  VariantProps<typeof checkboxVariants>;
