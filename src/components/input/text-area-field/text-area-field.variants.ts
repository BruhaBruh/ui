import { cva } from '@/utility';

const variants = cva({
  name: 'text-area-field group/text-area-field',
});

const textAreaVariants = cva({
  name: 'text-area-field--text-area',
  overflow: 'overflow-hidden',
  transitions: 'transition easing-standard duration-medium-1',
  borders: 'outline-none border-transparent',
  background: 'bg-transparent',
  typography: [
    'text-on-surface placeholder:text-on-surface-variant',
    'group-is-disabled/field:text-opacity-38',
  ],
  other: 'resize-none',
});

export const textAreaFieldVariants = Object.assign(variants, {
  textArea: textAreaVariants,
});
