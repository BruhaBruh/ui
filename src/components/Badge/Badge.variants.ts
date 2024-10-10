import { cva } from 'class-variance-authority';

export const badgeContainerVariants = cva(
  [
    'tabular-nums',
    'select-none',
    'rounded-full',
    'overflow-hidden',
    'transition easing-emphasized duration-short-3',
    'data-[size=small]:size-xs',
    'data-[size=medium]:size-md',
    'data-[size=large]:h-md',
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
