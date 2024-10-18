import { cva } from 'class-variance-authority';

export const switchVariants = cva(
  [
    'group/switch',
    'relative',
    'rounded-full',
    'inline-flex items-center',
    'h-8 w-13 min-w-13',
    'border-2 border-outline',
    'bg-surface-container-highest',
    'transition-[box-shadow,color,background-color,border-color_medium-1_emphasized-decelerate]',
    'data-[disabled=false]:cursor-pointer',
    'data-[disabled]:data-[selected=true]:border-transparent',
    'data-[disabled=true]:border-on-surface/[0.12]',
    'data-[disabled=true]:bg-surface-container-highest/[0.12]',
    'data-[disabled=true]:data-[selected=true]:bg-on-surface/[0.12]',
  ],
  {
    variants: {
      color: {
        primary: ['data-[selected=true]:bg-primary'],
        secondary: ['data-[selected=true]:bg-secondary'],
        info: ['data-[selected=true]:bg-info'],
        success: ['data-[selected=true]:bg-success'],
        caution: ['data-[selected=true]:bg-caution'],
        critical: ['data-[selected=true]:bg-critical'],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);

export const switchThumbVariants = cva(
  [
    'absolute',
    'rounded-full',
    'inline-flex items-center justify-center',
    'size-7',
    '[&>svg]:absolute',
    '[&>svg]:z-1',
    '[&>svg]:size-4',
    '[&>svg]:scale-100 [&>svg]:starting:scale-0',
    '[&>svg]:transition-[scale_medium-1_emphasized-decelerate]',
    'group-data-[selected=true]/switch:translate-x-5',
    'transition-[box-shadow,color,background-color,border-color_medium-1_emphasized-decelerate+translate_medium-1_emphasized]',
    'text-surface-container-highest',
    'group-data-[disabled=true]/switch:text-surface-container-highest/[0.38]',
    'group-data-[disabled=true]/switch:group-data-[selected=true]/switch:text-on-surface/[0.38]',
    'string:rounded-full',
    'ring:size-4',
    'ring:absolute',
    'ring:transition-[box-shadow,color,background-color,border-color_medium-1_emphasized-decelerate+scale_medium-1_emphasized]',
    'group-data-[selected=true]/switch:ring:scale-150',
    'group-data-[icon=true]/switch:ring:scale-150',
    'group-data-[selected]/switch:group-pressed/switch:ring:scale-[1.75]',
    'ring:bg-outline',
    'group-hovered/switch:ring:bg-on-surface-variant',
    'group-focus-visible-within/switch:ring:bg-on-surface-variant',
    'group-data-[disabled=true]/switch:ring:bg-on-surface/[0.38]',
    'group-data-[disabled=true]/switch:group-data-[selected=true]/switch:ring:bg-surface',
    'state:size-10',
    'state:absolute state:left-1/2 state:top-1/2 state:-translate-x-1/2 state:-translate-y-1/2',
    'state:transition-[background-color_medium-1_emphasized]',
    'group-hovered/switch:state:bg-on-surface/[0.08]',
    'group-focus-visible-within/switch:state:bg-on-surface/[0.12]',
    'group-pressed/switch:state:bg-on-surface/[0.12]',
    'group-data-[disabled=true]/switch:group-data-[selected]/switch:state:hidden',
  ],
  {
    variants: {
      color: {
        primary: [
          'group-data-[selected=true]/switch:text-primary',
          'group-hovered/switch:group-data-[selected=true]/switch:text-on-primary-container',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:text-on-primary-container',
          'group-data-[selected=true]/switch:ring:bg-on-primary',
          'group-hovered/switch:group-data-[disabled=false]/switch:group-data-[selected=true]/switch:ring:bg-primary-container',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:ring:bg-primary-container',
          'group-hovered/switch:group-data-[selected=true]/switch:state:bg-primary/[0.08]',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:state:bg-primary/[0.12]',
          'group-pressed/switch:group-data-[selected=true]/switch:state:bg-primary/[0.12]',
        ],
        secondary: [
          'group-data-[selected=true]/switch:text-secondary',
          'group-hovered/switch:group-data-[selected=true]/switch:text-on-secondary-container',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:text-on-secondary-container',
          'group-data-[selected=true]/switch:ring:bg-on-secondary',
          'group-hovered/switch:group-data-[disabled=false]/switch:group-data-[selected=true]/switch:ring:bg-secondary-container',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:ring:bg-secondary-container',
          'group-hovered/switch:group-data-[selected=true]/switch:state:bg-secondary/[0.08]',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:state:bg-secondary/[0.12]',
          'group-pressed/switch:group-data-[selected=true]/switch:state:bg-secondary/[0.12]',
        ],
        info: [
          'group-data-[selected=true]/switch:text-info',
          'group-hovered/switch:group-data-[selected=true]/switch:text-on-info-container',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:text-on-info-container',
          'group-data-[selected=true]/switch:ring:bg-on-info',
          'group-hovered/switch:group-data-[disabled=false]/switch:group-data-[selected=true]/switch:ring:bg-info-container',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:ring:bg-info-container',
          'group-hovered/switch:group-data-[selected=true]/switch:state:bg-info/[0.08]',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:state:bg-info/[0.12]',
          'group-pressed/switch:group-data-[selected=true]/switch:state:bg-info/[0.12]',
        ],
        success: [
          'group-data-[selected=true]/switch:text-success',
          'group-hovered/switch:group-data-[selected=true]/switch:text-on-success-container',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:text-on-success-container',
          'group-data-[selected=true]/switch:ring:bg-on-success',
          'group-hovered/switch:group-data-[disabled=false]/switch:group-data-[selected=true]/switch:ring:bg-success-container',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:ring:bg-success-container',
          'group-hovered/switch:group-data-[selected=true]/switch:state:bg-success/[0.08]',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:state:bg-success/[0.12]',
          'group-pressed/switch:group-data-[selected=true]/switch:state:bg-success/[0.12]',
        ],
        caution: [
          'group-data-[selected=true]/switch:text-caution',
          'group-hovered/switch:group-data-[selected=true]/switch:text-on-caution-container',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:text-on-caution-container',
          'group-data-[selected=true]/switch:ring:bg-on-caution',
          'group-hovered/switch:group-data-[disabled=false]/switch:group-data-[selected=true]/switch:ring:bg-caution-container',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:ring:bg-caution-container',
          'group-hovered/switch:group-data-[selected=true]/switch:state:bg-caution/[0.08]',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:state:bg-caution/[0.12]',
          'group-pressed/switch:group-data-[selected=true]/switch:state:bg-caution/[0.12]',
        ],
        critical: [
          'group-data-[selected=true]/switch:text-critical',
          'group-hovered/switch:group-data-[selected=true]/switch:text-on-critical-container',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:text-on-critical-container',
          'group-data-[selected=true]/switch:ring:bg-on-critical',
          'group-hovered/switch:group-data-[disabled=false]/switch:group-data-[selected=true]/switch:ring:bg-critical-container',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:ring:bg-critical-container',
          'group-hovered/switch:group-data-[selected=true]/switch:state:bg-critical/[0.08]',
          'group-focus-visible-within/switch:group-data-[selected=true]/switch:state:bg-critical/[0.12]',
          'group-pressed/switch:group-data-[selected=true]/switch:state:bg-critical/[0.12]',
        ],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);
