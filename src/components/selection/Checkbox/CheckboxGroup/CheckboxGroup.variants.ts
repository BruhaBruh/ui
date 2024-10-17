import { cva } from 'class-variance-authority';

export const checkboxGroupVariants = cva(['flex flex-col gap-sm']);

export const checkboxGroupLabelVariants = cva(['typography-title-medium']);

export const checkboxGroupListVariants = cva(['flex flex-col gap-xs']);

export const checkboxGroupDescriptionVariants = cva([
  'text-secondary typography-body-medium',
]);

export const checkboxGroupErrorVariants = cva(['text-critical']);
