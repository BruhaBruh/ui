import { cva } from '@/utility';

const variants = cva({
  name: 'number-field group/number-field',
});

const inputVariants = cva({
  name: 'number-field--input',
  overflow: 'overflow-hidden',
  transitions: 'transition easing-standard duration-medium-1',
  borders: 'outline-none border-transparent',
  background: 'bg-transparent',
  typography: [
    'text-on-surface placeholder:text-on-surface-variant',
    'group-is-disabled/field:text-on-surface/38',
  ],
});

export const numberFieldVariants = Object.assign(variants, {
  input: inputVariants,
});
