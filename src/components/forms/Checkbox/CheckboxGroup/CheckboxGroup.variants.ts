import { cva } from 'class-variance-authority';

export const checkboxGroupVariants = cva(['flex flex-col gap-xs']);

export const checkboxGroupLabelVariants = cva(['typography-medium']);

export const checkboxGroupDescriptionVariants = cva([
  'text-secondary typography-body3',
]);

export const checkboxGroupErrorVariants = cva(['text-critical']);
