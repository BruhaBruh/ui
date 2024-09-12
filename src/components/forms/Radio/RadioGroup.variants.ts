import { cva } from 'class-variance-authority';

export const radioGroupVariants = cva(['flex flex-col gap-2xs'], {
  variants: {
    size: {
      sm: [],
      md: [],
      lg: [],
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const radioGroupLabelVariants = cva([], {
  variants: {
    size: {
      sm: ['typography-small'],
      md: ['typography-medium'],
      lg: ['typography-large'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const radioGroupDescriptionVariants = cva(['text-secondary'], {
  variants: {
    size: {
      sm: ['typography-body4'],
      md: ['typography-body3'],
      lg: ['typography-body2'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const radioGroupErrorVariants = cva(['text-critical']);
