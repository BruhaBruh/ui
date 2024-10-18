import { cva } from 'class-variance-authority';

export const radioGroupVariants = cva(['flex flex-col gap-2xs']);

export const radioGroupLabelVariants = cva(['typography-title-medium']);

export const radioGroupListVariants = cva(['flex flex-col']);

export const radioGroupDescriptionVariants = cva([
  'text-secondary typography-body-medium',
]);

export const radioGroupErrorVariants = cva(['text-critical']);
