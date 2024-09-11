import { cva } from 'class-variance-authority';

export const checkboxGroupVariants = cva(['flex flex-col gap-2xs'], {
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

export const checkboxGroupLabelVariants = cva([], {
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

export const checkboxGroupDescriptionVariants = cva(['text-secondary'], {
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

export const checkboxGroupErrorVariants = cva(['text-critical']);
