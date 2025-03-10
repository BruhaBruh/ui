import type { AriaProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaCheckboxGroupProps } from 'react-aria';
import type { checkboxGroupVariants } from './checkbox-group.variants';

export type CheckboxGroupProps = AriaProps<'section', AriaCheckboxGroupProps> &
  VariantProps<typeof checkboxGroupVariants>;
