import { cva } from 'class-variance-authority';

export const iconButtonVariants = cva(
  [
    'group relative',
    'inline-flex items-center justify-center',
    'size-10 min-w-10 rounded-lg',
    '[&>svg]:starting:size-0 [&>svg]:size-6',
    '[&>svg]:easing-emphasized-decelerate [&>svg]:duration-medium-1 [&>svg]:transition',
    'easing-emphasized-decelerate duration-medium-1 transition',
    'select-none outline-none',
    'disabled:pointer-events-none',
    'whitespace-nowrap',
    'border-2 border-transparent',
    '[&>*]:z-1',
    'string:absolute string:rounded-lg',
    'string:transition string:duration-medium-1',
    'state:-inset-0.5',
    'state:easing-emphasized',
    'ring:-inset-1',
    'ring:transition ring:easing-emphasized-accelerate',
    'ring:hidden focus-visible:ring:block',
    'ring:ring-4 starting:ring:ring-8',
    'ring:ring-primary-container',
  ],
  {
    variants: {
      variant: {
        standard: [
          'text-on-surface-variant',
          'hover:state:bg-on-surface-variant/[0.08]',
          'focus:state:bg-on-surface-variant/[0.12]',
          'active:state:bg-on-surface-variant/[0.12]',
          'data-[selected]:data-[disabled=true]:text-on-surface/[0.38]',
        ],
        filled: [
          'data-[disabled=true]:bg-on-surface/[0.12]',
          'data-[disabled=true]:text-on-surface/[0.38]',
          'data-[toggleable]:data-[selected]:data-[disabled=true]:bg-on-surface/[0.12]',
          'data-[toggleable]:data-[selected]:data-[disabled=true]:text-on-surface/[0.38]',
        ],
        tonal: [
          'data-[toggleable]:data-[selected=false]:bg-surface-container-highest',
          'data-[toggleable]:data-[selected=false]:text-on-surface-variant',
          'hover:data-[toggleable]:data-[selected=false]:state:bg-on-surface-variant/[0.08]',
          'focus:data-[toggleable]:data-[selected=false]:state:bg-on-surface-variant/[0.12]',
          'active:data-[toggleable]:data-[selected=false]:state:bg-on-surface-variant/[0.12]',
          'data-[disabled=true]:bg-on-surface/[0.12]',
          'data-[disabled=true]:text-on-surface/[0.38]',
          'data-[toggleable]:data-[selected]:data-[disabled=true]:bg-on-surface/[0.12]',
          'data-[toggleable]:data-[selected]:data-[disabled=true]:text-on-surface/[0.38]',
        ],
        outlined: [
          'text-on-surface-variant',
          'border-outline',
          'hover:state:bg-on-surface-variant/[0.08]',
          'focus:state:bg-on-surface-variant/[0.08]',
          'active:state:bg-on-surface-variant/[0.12]',
          'data-[toggleable]:data-[selected=true]:text-surface',
          'data-[toggleable]:data-[selected=true]:border-transparent',
          'data-[toggleable]:data-[selected=true]:bg-on-surface',
          'hover:data-[toggleable]:data-[selected=true]:state:bg-surface/[0.08]',
          'focus:data-[toggleable]:data-[selected=true]:state:bg-surface/[0.12]',
          'active:data-[toggleable]:data-[selected=true]:state:bg-surface/[0.12]',
          'data-[disabled=true]:text-on-surface/[0.38]',
          'data-[disabled=true]:border-on-surface/[0.12]',
          'data-[toggleable]:data-[selected=false]:data-[disabled=true]:text-on-surface/[0.38]',
          'data-[toggleable]:data-[selected=false]:data-[disabled=true]:border-on-surface/[0.12]',
          'data-[toggleable]:data-[selected=true]:data-[disabled=true]:text-on-surface/[0.38]',
          'data-[toggleable]:data-[selected=true]:data-[disabled=true]:bg-on-surface/[0.12]',
        ],
      },
      color: {
        primary: [],
        secondary: [],
        info: [],
        success: [],
        caution: [],
        critical: [],
      },
    },
    defaultVariants: {
      color: 'primary',
      variant: 'standard',
    },
    compoundVariants: [
      // #region Standard
      {
        variant: 'standard',
        color: 'primary',
        className: [
          'data-[selected=true]:text-primary-foreground',
          'hover:data-[selected=true]:state:bg-primary/[0.08]',
          'focus:data-[selected=true]:state:bg-primary/[0.12]',
          'active:data-[selected=true]:state:bg-primary/[0.12]',
        ],
      },
      {
        variant: 'standard',
        color: 'secondary',
        className: [
          'data-[selected=true]:text-secondary-foreground',
          'hover:data-[selected=true]:state:bg-secondary/[0.08]',
          'focus:data-[selected=true]:state:bg-secondary/[0.12]',
          'active:data-[selected=true]:state:bg-secondary/[0.12]',
        ],
      },
      {
        variant: 'standard',
        color: 'info',
        className: [
          'data-[selected=true]:text-info-foreground',
          'hover:data-[selected=true]:state:bg-info/[0.08]',
          'focus:data-[selected=true]:state:bg-info/[0.12]',
          'active:data-[selected=true]:state:bg-info/[0.12]',
        ],
      },
      {
        variant: 'standard',
        color: 'success',
        className: [
          'data-[selected=true]:text-success-foreground',
          'hover:data-[selected=true]:state:bg-success/[0.08]',
          'focus:data-[selected=true]:state:bg-success/[0.12]',
          'active:data-[selected=true]:state:bg-success/[0.12]',
        ],
      },
      {
        variant: 'standard',
        color: 'caution',
        className: [
          'data-[selected=true]:text-caution-foreground',
          'hover:data-[selected=true]:state:bg-caution/[0.08]',
          'focus:data-[selected=true]:state:bg-caution/[0.12]',
          'active:data-[selected=true]:state:bg-caution/[0.12]',
        ],
      },
      {
        variant: 'standard',
        color: 'critical',
        className: [
          'data-[selected=true]:text-critical-foreground',
          'hover:data-[selected=true]:state:bg-critical/[0.08]',
          'focus:data-[selected=true]:state:bg-critical/[0.12]',
          'active:data-[selected=true]:state:bg-critical/[0.12]',
        ],
      },
      // #endregion Standard

      // #region Filled
      {
        variant: 'filled',
        color: 'primary',
        className: [
          'bg-primary',
          'text-on-primary',
          'hover:state:bg-on-primary/[0.08]',
          'focus:state:bg-on-primary/[0.12]',
          'active:state:bg-on-primary/[0.12]',
          'data-[toggleable]:data-[selected=false]:bg-surface-container-highest',
          'data-[toggleable]:data-[selected=false]:text-primary-foreground',
          'hover:data-[toggleable]:data-[selected=false]:state:bg-primary/[0.08]',
          'focus:data-[toggleable]:data-[selected=false]:state:bg-primary/[0.12]',
          'active:data-[toggleable]:data-[selected=false]:state:bg-primary/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'secondary',
        className: [
          'bg-secondary',
          'text-on-secondary',
          'hover:state:bg-on-secondary/[0.08]',
          'focus:state:bg-on-secondary/[0.12]',
          'active:state:bg-on-secondary/[0.12]',
          'data-[toggleable]:data-[selected=false]:bg-surface-container-highest',
          'data-[toggleable]:data-[selected=false]:text-secondary-foreground',
          'hover:data-[toggleable]:data-[selected=false]:state:bg-secondary/[0.08]',
          'focus:data-[toggleable]:data-[selected=false]:state:bg-secondary/[0.12]',
          'active:data-[toggleable]:data-[selected=false]:state:bg-secondary/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'info',
        className: [
          'bg-info',
          'text-on-info',
          'hover:state:bg-on-info/[0.08]',
          'focus:state:bg-on-info/[0.12]',
          'active:state:bg-on-info/[0.12]',
          'data-[toggleable]:data-[selected=false]:bg-surface-container-highest',
          'data-[toggleable]:data-[selected=false]:text-info-foreground',
          'hover:data-[toggleable]:data-[selected=false]:state:bg-info/[0.08]',
          'focus:data-[toggleable]:data-[selected=false]:state:bg-info/[0.12]',
          'active:data-[toggleable]:data-[selected=false]:state:bg-info/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'success',
        className: [
          'bg-success',
          'text-on-success',
          'hover:state:bg-on-success/[0.08]',
          'focus:state:bg-on-success/[0.12]',
          'active:state:bg-on-success/[0.12]',
          'data-[toggleable]:data-[selected=false]:bg-surface-container-highest',
          'data-[toggleable]:data-[selected=false]:text-success-foreground',
          'hover:data-[toggleable]:data-[selected=false]:state:bg-success/[0.08]',
          'focus:data-[toggleable]:data-[selected=false]:state:bg-success/[0.12]',
          'active:data-[toggleable]:data-[selected=false]:state:bg-success/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'caution',
        className: [
          'bg-caution',
          'text-on-caution',
          'hover:state:bg-on-caution/[0.08]',
          'focus:state:bg-on-caution/[0.12]',
          'active:state:bg-on-caution/[0.12]',
          'data-[toggleable]:data-[selected=false]:bg-surface-container-highest',
          'data-[toggleable]:data-[selected=false]:text-caution-foreground',
          'hover:data-[toggleable]:data-[selected=false]:state:bg-caution/[0.08]',
          'focus:data-[toggleable]:data-[selected=false]:state:bg-caution/[0.12]',
          'active:data-[toggleable]:data-[selected=false]:state:bg-caution/[0.12]',
        ],
      },
      {
        variant: 'filled',
        color: 'critical',
        className: [
          'bg-critical',
          'text-on-critical',
          'hover:state:bg-on-critical/[0.08]',
          'focus:state:bg-on-critical/[0.12]',
          'active:state:bg-on-critical/[0.12]',
          'data-[toggleable]:data-[selected=false]:bg-surface-container-highest',
          'data-[toggleable]:data-[selected=false]:text-critical-foreground',
          'hover:data-[toggleable]:data-[selected=false]:state:bg-critical/[0.08]',
          'focus:data-[toggleable]:data-[selected=false]:state:bg-critical/[0.12]',
          'active:data-[toggleable]:data-[selected=false]:state:bg-critical/[0.12]',
        ],
      },
      // #endregion Filled

      // #region Tonal
      {
        variant: 'tonal',
        color: 'primary',
        className: [
          'bg-primary-container text-on-primary-container',
          'hover:state:bg-on-primary-container/[0.08]',
          'focus:state:bg-on-primary-container/[0.12]',
          'active:state:bg-on-primary-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'secondary',
        className: [
          'bg-secondary-container text-on-secondary-container',
          'hover:state:bg-on-secondary-container/[0.08]',
          'focus:state:bg-on-secondary-container/[0.12]',
          'active:state:bg-on-secondary-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'info',
        className: [
          'bg-info-container text-on-info-container',
          'hover:state:bg-on-info-container/[0.08]',
          'focus:state:bg-on-info-container/[0.12]',
          'active:state:bg-on-info-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'success',
        className: [
          'bg-success-container text-on-success-container',
          'hover:state:bg-on-success-container/[0.08]',
          'focus:state:bg-on-success-container/[0.12]',
          'active:state:bg-on-success-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'caution',
        className: [
          'bg-caution-container text-on-caution-container',
          'hover:state:bg-on-caution-container/[0.08]',
          'focus:state:bg-on-caution-container/[0.12]',
          'active:state:bg-on-caution-container/[0.12]',
        ],
      },
      {
        variant: 'tonal',
        color: 'critical',
        className: [
          'bg-critical-container text-on-critical-container',
          'hover:state:bg-on-critical-container/[0.08]',
          'focus:state:bg-on-critical-container/[0.12]',
          'active:state:bg-on-critical-container/[0.12]',
        ],
      },
      // #endregion Tonal
    ],
  },
);
