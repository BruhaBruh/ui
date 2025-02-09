import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaCheckboxProps } from 'react-aria';
import { checkboxVariants } from './checkbox.variants';

export type CheckboxProps = AriaProps<'input', AriaCheckboxProps> &
  VariantProps<typeof checkboxVariants>;
