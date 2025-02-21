import { cva } from '@/utility';

const variants = cva({
  name: 'modal group/modal',
  other: 'inert',
});

const underlayVariants = cva({
  name: 'modal--underlay',
  layout: 'fixed inset-0',
  other: 'z-30',
  flex: 'inline-flex items-center justify-center',
  background: 'bg-scrim bg-opacity-12',
});

export const modalVariants = Object.assign(variants, {
  underlay: underlayVariants,
});
