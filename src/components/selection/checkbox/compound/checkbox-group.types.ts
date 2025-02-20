import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaCheckboxGroupProps } from 'react-aria';
import { checkboxGroupVariants } from './checkbox-group.variants';

export type CheckboxGroupProps = AriaProps<'section', AriaCheckboxGroupProps> &
  VariantProps<typeof checkboxGroupVariants>;
