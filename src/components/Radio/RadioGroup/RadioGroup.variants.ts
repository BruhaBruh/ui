import { cva } from 'class-variance-authority';

export const radioGroupVariants = cva(['flex flex-col gap-sm']);

export const radioGroupLabelVariants = cva(['typography-title-medium']);

export const radioGroupListVariants = cva(['flex flex-col gap-xs']);

export const radioGroupDescriptionVariants = cva([
  'text-secondary typography-body-medium',
]);

export const radioGroupErrorVariants = cva(['text-critical']);
