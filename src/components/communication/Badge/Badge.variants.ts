import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  [
    'group/badge',
    'tabular-nums',
    'select-none',
    'rounded-full',
    'overflow-hidden',
    'transition-[width,height,box-shadow,color,background-color,border-color_short-3_emphasized]',
    'data-[size=small]:size-1.5',
    'data-[size=medium]:size-4',
    'data-[size=large]:h-4',
    'data-[size=large]:px-2xs',
    'typography-label-small',
    'inline-flex items-center justify-center',
    'after:pb-3xs data-[overflow=true]:after:content-["+"]',
  ],
  {
    variants: {
      color: {
        primary: ['bg-primary', 'text-on-primary'],
        secondary: ['bg-secondary', 'text-on-secondary'],
        info: ['bg-info', 'text-on-info'],
        success: ['bg-success', 'text-on-success'],
        caution: ['bg-caution', 'text-on-caution'],
        critical: ['bg-critical', 'text-on-critical'],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);
