import { cva } from '@/utility';

const variants = cva(
  {
    name: 'divider group/divider',
    layout: 'relative',
    flex: 'inline-flex items-center justify-center',
    box: [
      'data-[orientation=horizontal]:h-0.25 data-[orientation=horizontal]:w-full',
      'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-0.25',
    ],
    after: ['after:bg-outline-variant', 'after:size-full'],
  },
  {
    variants: {
      inset: {
        true: {
          spacing: [
            'data-[orientation=horizontal]:px-md',
            'data-[orientation=vertical]:py-md',
          ],
        },
        false: {},
      },
    },
  },
);

export const dividerVariants = Object.assign(variants, {});
