import { cva } from '@/utility';

const variants = cva({
  name: 'pagination group/pagination',
  flex: 'inline-flex items-center justify-center',
  spacing: 'gap-sm',
});

const buttonVariants = cva({
  name: 'pagination--button',
  typography: 'typography-label-large',
});

const buttonTextVariants = cva({
  name: 'pagination--button',
  flex: 'inline-flex items-center justify-center',
});

export const paginationVariants = Object.assign(variants, {
  button: buttonVariants,
  buttonText: buttonTextVariants,
});
