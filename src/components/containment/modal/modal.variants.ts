import { cva } from '@/utility';

const variants = cva({
  name: 'modal group/modal',
  other: 'p-md',
});

const underlayVariants = cva({
  name: 'modal--underlay',
  layout: 'fixed inset-0',
  flex: 'inline-flex items-center justify-center',
  overflow: 'overflow-hidden',
  other: 'z-30',
});

export const modalVariants = Object.assign(variants, {
  underlay: underlayVariants,
});
