import { cva } from 'class-variance-authority';

export const checkboxGroupVariants = cva(['gap-sm flex flex-col']);

export const checkboxGroupLabelVariants = cva(['typography-title-medium']);

export const checkboxGroupListVariants = cva(['gap-xs flex flex-col']);

export const checkboxGroupDescriptionVariants = cva([
  'text-secondary typography-body-medium',
]);

export const checkboxGroupErrorVariants = cva(['text-critical']);
