import { cva } from '@/utility';
import { checkboxVariants } from '../checkbox.variants';

const variants = cva({
  name: 'checkbox-group group/checkbox-group',
  flex: 'inline-flex flex-col gap-2xs',
});

const labelVariants = cva({
  name: 'checkbox-group--label',
  typography: 'typography-label-large',
});

const listVariants = cva({
  name: 'checkbox-group--list',
  flex: 'inline-flex flex-col gap-3xs',
});

const descriptionVariants = cva({
  name: 'checkbox-group--description',
  typography: 'typography-body-small text-secondary',
});

const errorMessageVariants = cva({
  name: 'checkbox-group--error-message',
  typography: 'typography-body-small text-critical',
});

export const checkboxGroupVariants = Object.assign(variants, {
  label: labelVariants,
  list: listVariants,
  description: descriptionVariants,
  errorMessage: errorMessageVariants,
  item: checkboxVariants,
});
