import { cva } from 'class-variance-authority';

export const fabVariants = cva(
  [
    'group relative',
    'inline-flex items-center justify-center',
    'transition-[width,height,box-shadow,color,background-color,border-color_medium-1_emphasized-decelerate]',
    'select-none outline-none',
    'elevation-3 data-[lowered=true]:elevation-1',
    'hover:elevation-4 data-[lowered=true]:elevation-2',
    'active:elevation-3 active:data-[lowered=true]:elevation-1',
    '[&>*]:z-1',
    'string:absolute',
    'state:transition-[background-color_medium-1_emphasized]',
    'state:inset-0',
    'ring:-inset-0.5',
    'ring:transition-[box-shadow_medium-1_emphasized-accelerate]',
    'ring:hidden focus-visible:ring:block',
    'ring:ring-4 starting:ring:ring-8',
    'ring:ring-primary-container',
    '[&>svg]:starting:size-0',
    '[&>svg]:transition-[color,width,height,margin_medium-1_emphasized-decelerate]',
  ],
  {
    variants: {
      color: {
        surface: [
          'bg-surface-container-high text-primary-foreground',
          'data-[lowered=true]:bg-surface-container-low',
          'hover:state:bg-primary/[0.08]',
          'focus:state:bg-primary/[0.12]',
          'active:state:bg-primary/[0.12]',
        ],
        primary: [
          'bg-primary-container text-on-primary-container',
          'hover:state:bg-on-primary-container/[0.08]',
          'focus:state:bg-on-primary-container/[0.12]',
          'active:state:bg-on-primary-container/[0.12]',
        ],
        secondary: [
          'bg-secondary-container text-on-secondary-container',
          'hover:state:bg-on-secondary-container/[0.08]',
          'focus:state:bg-on-secondary-container/[0.12]',
          'active:state:bg-on-secondary-container/[0.12]',
        ],
        info: [
          'bg-info-container text-on-info-container',
          'hover:state:bg-on-info-container/[0.08]',
          'focus:state:bg-on-info-container/[0.12]',
          'active:state:bg-on-info-container/[0.12]',
        ],
        success: [
          'bg-success-container text-on-success-container',
          'hover:state:bg-on-success-container/[0.08]',
          'focus:state:bg-on-success-container/[0.12]',
          'active:state:bg-on-success-container/[0.12]',
        ],
        caution: [
          'bg-caution-container text-on-caution-container',
          'hover:state:bg-on-caution-container/[0.08]',
          'focus:state:bg-on-caution-container/[0.12]',
          'active:state:bg-on-caution-container/[0.12]',
        ],
        critical: [
          'bg-critical-container text-on-critical-container',
          'hover:state:bg-on-critical-container/[0.08]',
          'focus:state:bg-on-critical-container/[0.12]',
          'active:state:bg-on-critical-container/[0.12]',
        ],
      },
      size: {
        sm: ['size-10 rounded-xs string:rounded-xs', '[&>svg]:size-6'],
        md: ['size-14 rounded-md string:rounded-md', '[&>svg]:size-6'],
        lg: ['size-24 rounded-2xl string:rounded-2xl', '[&>svg]:size-9'],
      },
    },
    defaultVariants: {
      color: 'surface',
      size: 'md',
    },
  },
);
