import { cva } from 'class-variance-authority';

export const segmentedButtonVariants = cva(
  [
    'group relative',
    'inline-flex items-center justify-center',
    'h-10 px-md',
    'first-of-type:rounded-l-lg',
    'last-of-type:rounded-r-lg',
    '[&>svg]:size-4.5 [&>svg]:starting:size-0',
    '[&>svg]:transition-[color,width,height,margin_medium-1_emphasized-decelerate]',
    '[&>svg:first-of-type]:mr-xs [&>svg:first-of-type]:starting:mr-0',
    'transition-[box-shadow,color,background-color,border-color_medium-1_emphasized-decelerate]',
    'select-none outline-none',
    'disabled:pointer-events-none',
    'whitespace-nowrap',
    'border border-outline',
    'text-on-surface',
    'hover:state:bg-on-surface/[0.08]',
    'focus:state:bg-on-surface/[0.12]',
    'active:state:bg-on-surface/[0.12]',
    'data-[selected]:data-[disabled=true]:-z-1',
    'data-[selected]:data-[disabled=true]:border-on-surface/[0.12]',
    'data-[selected]:data-[disabled=true]:bg-transparent',
    'data-[selected]:data-[disabled=true]:text-on-surface/[0.38]',
    '[&>*]:z-1',
    'string:absolute',
    'first-of-type:string:rounded-l-lg',
    'last-of-type:string:rounded-r-lg',
    'state:transition-[background-color_medium-1_emphasized]',
    'state:-inset-0.25',
    'ring:-inset-0.75',
    'ring:transition-[box-shadow_medium-1_emphasized-accelerate]',
    'ring:hidden focus-visible:ring:block',
    'ring:ring-4 starting:ring:ring-8',
    'ring:ring-primary-container',
  ],
  {
    variants: {
      color: {
        primary: [
          'data-[selected=true]:bg-primary-container',
          'data-[selected=true]:text-on-primary-container',
          'hover:data-[selected=true]:state:bg-on-primary-container/[0.08]',
          'focus:data-[selected=true]:state:bg-on-primary-container/[0.12]',
          'active:data-[selected=true]:state:bg-on-primary-container/[0.12]',
        ],
        secondary: [
          'data-[selected=true]:bg-secondary-container',
          'data-[selected=true]:text-on-secondary-container',
          'hover:data-[selected=true]:state:bg-on-secondary-container/[0.08]',
          'focus:data-[selected=true]:state:bg-on-secondary-container/[0.12]',
          'active:data-[selected=true]:state:bg-on-secondary-container/[0.12]',
        ],
        info: [
          'data-[selected=true]:bg-info-container',
          'data-[selected=true]:text-on-info-container',
          'hover:data-[selected=true]:state:bg-on-info-container/[0.08]',
          'focus:data-[selected=true]:state:bg-on-info-container/[0.12]',
          'active:data-[selected=true]:state:bg-on-info-container/[0.12]',
        ],
        success: [
          'data-[selected=true]:bg-success-container',
          'data-[selected=true]:text-on-success-container',
          'hover:data-[selected=true]:state:bg-on-success-container/[0.08]',
          'focus:data-[selected=true]:state:bg-on-success-container/[0.12]',
          'active:data-[selected=true]:state:bg-on-success-container/[0.12]',
        ],
        caution: [
          'data-[selected=true]:bg-caution-container',
          'data-[selected=true]:text-on-caution-container',
          'hover:data-[selected=true]:state:bg-on-caution-container/[0.08]',
          'focus:data-[selected=true]:state:bg-on-caution-container/[0.12]',
          'active:data-[selected=true]:state:bg-on-caution-container/[0.12]',
        ],
        critical: [
          'data-[selected=true]:bg-critical-container',
          'data-[selected=true]:text-on-critical-container',
          'hover:data-[selected=true]:state:bg-on-critical-container/[0.08]',
          'focus:data-[selected=true]:state:bg-on-critical-container/[0.12]',
          'active:data-[selected=true]:state:bg-on-critical-container/[0.12]',
        ],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);

export const segmentedButtonLabelVariants = cva([
  'typography-label-large',
  '[&>svg]:size-4.5 [&>svg]:min-w-4.5',
]);
