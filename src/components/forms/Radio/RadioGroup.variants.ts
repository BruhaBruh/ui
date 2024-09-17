import { cva } from 'class-variance-authority';

export const radioGroupVariants = cva(['flex flex-col gap-xs']);

export const radioGroupLabelVariants = cva(['typography-medium']);

export const radioGroupDescriptionVariants = cva([
  'text-secondary typography-body3',
]);

export const radioGroupErrorVariants = cva(['text-critical']);
