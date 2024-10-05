import { cva } from 'class-variance-authority';

export const radioGroupVariants = cva(['flex flex-col']);

export const radioGroupLabelVariants = cva(['typography-title-medium']);

export const radioGroupDescriptionVariants = cva([
  'text-secondary typography-body-medium',
]);

export const radioGroupErrorVariants = cva(['text-critical']);
