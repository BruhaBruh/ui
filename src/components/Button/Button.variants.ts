import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-between',
    'font-medium whitespace-nowrap',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-[3px]',
    'select-none',
    'disabled:pointer-events-none',
    'border-transparent',
  ],
  {
    variants: {
      color: {
        primary: ['focus-visible:ring-primary'],
        secondary: ['focus-visible:ring-secondary'],
        brand: ['focus-visible:ring-brand'],
        brandSubdued: ['focus-visible:ring-brand'],
        info: ['focus-visible:ring-info'],
        infoSubdued: ['focus-visible:ring-info'],
        success: ['focus-visible:ring-success'],
        successSubdued: ['focus-visible:ring-success'],
        caution: ['focus-visible:ring-caution'],
        cautionSubdued: ['focus-visible:ring-caution'],
        critical: ['focus-visible:ring-critical'],
        criticalSubdued: ['focus-visible:ring-critical'],
      },
      variant: {
        solid: ['shadow', 'disabled:bg-disabled disabled:text-on-disabled'],
        ghost: ['bg-transparent', 'text-foreground', 'disabled:text-disabled'],
        outline: [
          'bg-transparent',
          'border-2',
          'shadow-sm',
          'disabled:text-disabled disabled:border-disabled',
        ],
        link: ['underline-offset-4 hover:underline', 'disabled:text-disabled'],
      },
      content: {
        default: '',
        icon: 'justify-center',
      },
      size: {
        sm: [
          'h-10',
          'text-sm',
          'rounded-md',
          'px-sm',
          '[&>*:not(svg)]:px-2xs',
          '[&>svg]:min-w-4',
          '[&>svg]:h-4',
        ],
        md: [
          'h-12',
          'text-sm',
          'rounded-lg',
          'px-md',
          '[&>*:not(svg)]:px-2xs',
          '[&>svg]:min-w-5',
          '[&>svg]:h-5',
        ],
        lg: [
          'h-14',
          'text-md',
          'rounded-xl',
          'px-md',
          '[&>*:not(svg)]:px-2xs',
          '[&>svg]:min-w-5',
          '[&>svg]:h-5',
        ],
      },
    },
    compoundVariants: [
      // solid variant
      {
        color: 'primary',
        variant: 'solid',
        className:
          'bg-primary text-on-primary hover:bg-primary-hover active:bg-primary',
      },
      {
        color: 'secondary',
        variant: 'solid',
        className:
          'bg-secondary text-on-secondary hover:bg-secondary-hover active:bg-secondary',
      },
      {
        color: 'brand',
        variant: 'solid',
        className:
          'bg-brand text-on-brand hover:bg-brand-hover active:bg-brand',
      },
      {
        color: 'brandSubdued',
        variant: 'solid',
        className:
          'bg-brand-subdued text-on-brand-subdued hover:bg-brand-subdued-hover active:bg-brand-subdued',
      },
      {
        color: 'info',
        variant: 'solid',
        className: 'bg-info text-on-info hover:bg-info-hover active:bg-info',
      },
      {
        color: 'infoSubdued',
        variant: 'solid',
        className:
          'bg-info-subdued text-on-info-subdued hover:bg-info-subdued-hover active:bg-info-subdued',
      },
      {
        color: 'success',
        variant: 'solid',
        className:
          'bg-success text-on-success hover:bg-success-hover active:bg-success',
      },
      {
        color: 'successSubdued',
        variant: 'solid',
        className:
          'bg-success-subdued text-on-success-subdued hover:bg-success-subdued-hover active:bg-success-subdued',
      },
      {
        color: 'caution',
        variant: 'solid',
        className:
          'bg-caution text-on-caution hover:bg-caution-hover active:bg-caution',
      },
      {
        color: 'cautionSubdued',
        variant: 'solid',
        className:
          'bg-caution-subdued text-on-caution-subdued hover:bg-caution-subdued-hover active:bg-caution-subdued',
      },
      {
        color: 'critical',
        variant: 'solid',
        className:
          'bg-critical text-on-critical hover:bg-critical-hover active:bg-critical',
      },
      {
        color: 'criticalSubdued',
        variant: 'solid',
        className:
          'bg-critical-subdued text-on-critical-subdued hover:bg-critical-subdued-hover active:bg-critical-subdued',
      },
      // ghost variant
      {
        color: 'primary',
        variant: 'ghost',
        className:
          'hover:bg-primary hover:text-on-primary active:bg-primary-hover',
      },
      {
        color: 'secondary',
        variant: 'ghost',
        className:
          'hover:bg-secondary hover:text-on-secondary active:bg-secondary-hover',
      },
      {
        color: 'brand',
        variant: 'ghost',
        className: 'hover:bg-brand hover:text-on-brand active:bg-brand-hover',
      },
      {
        color: 'brandSubdued',
        variant: 'ghost',
        className:
          'hover:bg-brand-subdued hover:text-on-brand-subdued active:bg-brand-subdued-hover',
      },
      {
        color: 'info',
        variant: 'ghost',
        className: 'hover:bg-info hover:text-on-info active:bg-info-hover',
      },
      {
        color: 'infoSubdued',
        variant: 'ghost',
        className:
          'hover:bg-info-subdued hover:text-on-info-subdued active:bg-info-subdued-hover',
      },
      {
        color: 'success',
        variant: 'ghost',
        className:
          'hover:bg-success hover:text-on-success active:bg-success-hover',
      },
      {
        color: 'successSubdued',
        variant: 'ghost',
        className:
          'hover:bg-success-subdued hover:text-on-success-subdued active:bg-success-subdued-hover',
      },
      {
        color: 'caution',
        variant: 'ghost',
        className:
          'hover:bg-caution hover:text-on-caution active:bg-caution-hover',
      },
      {
        color: 'cautionSubdued',
        variant: 'ghost',
        className:
          'hover:bg-caution-subdued hover:text-on-caution-subdued active:bg-caution-subdued-hover',
      },
      {
        color: 'critical',
        variant: 'ghost',
        className:
          'hover:bg-critical hover:text-on-critical active:bg-critical-hover',
      },
      {
        color: 'criticalSubdued',
        variant: 'ghost',
        className:
          'hover:bg-critical-subdued hover:text-on-critical-subdued active:bg-critical-subdued-hover',
      },
      // outline variant
      {
        color: 'primary',
        variant: 'outline',
        className:
          'border-primary hover:bg-primary hover:text-on-primary active:bg-primary-hover',
      },
      {
        color: 'secondary',
        variant: 'outline',
        className:
          'border-secondary hover:bg-secondary hover:text-on-secondary active:bg-secondary-hover',
      },
      {
        color: 'brand',
        variant: 'outline',
        className:
          'border-brand hover:bg-brand hover:text-on-brand active:bg-brand-hover',
      },
      {
        color: 'brandSubdued',
        variant: 'outline',
        className:
          'border-brand hover:bg-brand-subdued hover:text-on-brand-subdued active:bg-brand-subdued-hover',
      },
      {
        color: 'info',
        variant: 'outline',
        className:
          'border-info hover:bg-info hover:text-on-info active:bg-info-hover',
      },
      {
        color: 'infoSubdued',
        variant: 'outline',
        className:
          'border-info hover:bg-info-subdued hover:text-on-info-subdued active:bg-info-subdued-hover',
      },
      {
        color: 'success',
        variant: 'outline',
        className:
          'border-success hover:bg-success hover:text-on-success active:bg-success-hover',
      },
      {
        color: 'successSubdued',
        variant: 'outline',
        className:
          'border-success hover:bg-success-subdued hover:text-on-success-subdued active:bg-success-subdued-hover',
      },
      {
        color: 'caution',
        variant: 'outline',
        className:
          'border-caution hover:bg-caution hover:text-on-caution active:bg-caution-hover',
      },
      {
        color: 'cautionSubdued',
        variant: 'outline',
        className:
          'border-caution hover:bg-caution-subdued hover:text-on-caution-subdued active:bg-caution-subdued-hover',
      },
      {
        color: 'critical',
        variant: 'outline',
        className:
          'border-critical hover:bg-critical hover:text-on-critical active:bg-critical-hover',
      },
      {
        color: 'criticalSubdued',
        variant: 'outline',
        className:
          'border-critical hover:bg-critical-subdued hover:text-on-critical-subdued active:bg-critical-subdued-hover',
      },
      // link variant
      {
        color: 'primary',
        variant: 'link',
        className: 'text-foreground',
      },
      {
        color: 'secondary',
        variant: 'link',
        className: 'text-secondary',
      },
      {
        color: 'brand',
        variant: 'link',
        className: 'text-brand',
      },
      {
        color: 'brandSubdued',
        variant: 'link',
        className: 'text-brand',
      },
      {
        color: 'info',
        variant: 'link',
        className: 'text-info',
      },
      {
        color: 'infoSubdued',
        variant: 'link',
        className: 'text-info',
      },
      {
        color: 'success',
        variant: 'link',
        className: 'text-success',
      },
      {
        color: 'successSubdued',
        variant: 'link',
        className: 'text-success',
      },
      {
        color: 'caution',
        variant: 'link',
        className: 'text-caution',
      },
      {
        color: 'cautionSubdued',
        variant: 'link',
        className: 'text-caution',
      },
      {
        color: 'critical',
        variant: 'link',
        className: 'text-critical',
      },
      {
        color: 'criticalSubdued',
        variant: 'link',
        className: 'text-critical',
      },
      // icon content
      {
        content: 'icon',
        size: 'sm',
        className: 'px-0 w-10',
      },
      {
        content: 'icon',
        size: 'md',
        className: 'px-0 w-12',
      },
      {
        content: 'icon',
        size: 'lg',
        className: 'px-0 w-14',
      },
    ],
    defaultVariants: {
      color: 'primary',
      variant: 'solid',
      content: 'default',
      size: 'md',
    },
  },
);
