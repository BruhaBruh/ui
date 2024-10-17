import { cva } from 'class-variance-authority';

export const extendedFabVariants = cva(
  [
    'group relative',
    'inline-flex items-center justify-center',
    'h-14 min-w-20 rounded-md',
    'px-md',
    '[&>svg]:mr-xs [&>svg]:starting:mr-0',
    '[&>svg]:size-6 [&>svg]:starting:size-0',
    '[&>svg]:transition-[color,width,height,margin_medium-1_emphasized-decelerate]',
    'transition-[box-shadow,color,background-color,border-color_medium-1_emphasized-decelerate]',
    'select-none outline-none',
    'elevation-3 data-[lowered=true]:elevation-1',
    'hover:elevation-4 data-[lowered=true]:elevation-2',
    'active:elevation-3 active:data-[lowered=true]:elevation-1',
    '[&>*]:z-1',
    'string:absolute string:rounded-md',
    'state:transition-[background-color_medium-1_emphasized]',
    'state:inset-0',
    'ring:-inset-0.5',
    'ring:transition-[box-shadow_medium-1_emphasized-accelerate]',
    'ring:hidden focus-visible:ring:block',
    'ring:ring-4 starting:ring:ring-8',
    'ring:ring-primary-container',
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
    },
    defaultVariants: {
      color: 'surface',
    },
  },
);

export const extendedFabLabelVariants = cva([
  'truncate px-2xs typography-label-large',
]);
