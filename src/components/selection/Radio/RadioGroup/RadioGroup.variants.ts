import { cva } from 'class-variance-authority';

export const radioGroupVariants = cva(['gap-sm flex flex-col']);

export const radioGroupLabelVariants = cva(['typography-title-medium']);

export const radioGroupListVariants = cva(['gap-xs flex flex-col']);

export const radioGroupDescriptionVariants = cva([
  'text-secondary typography-body-medium',
]);

export const radioGroupErrorVariants = cva(['text-critical']);
