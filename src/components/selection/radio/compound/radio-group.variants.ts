import { cva } from '@/utility';

const variants = cva({
  name: 'radio-group group/radio-group',
  flex: 'inline-flex flex-col gap-2xs',
});

const labelVariants = cva({
  name: 'radio-group--label',
  typography: 'typography-label-large',
});

const descriptionVariants = cva({
  name: 'radio-group--description',
  typography: 'typography-body-small text-secondary',
});

const errorMessageVariants = cva({
  name: 'radio-group--error-message',
  typography: 'typography-body-small text-critical',
});

export const radioGroupVariants = Object.assign(variants, {
  label: labelVariants,
  description: descriptionVariants,
  errorMessage: errorMessageVariants,
});
