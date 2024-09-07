import { cva } from 'class-variance-authority';

export const buttonContainerVariants = cva(
  [
    'inline-flex items-center justify-center',
    'transition',
    'select-none outline-none',
    'disabled:pointer-events-none',
    'border-2',
    'border-transparent ring-transparent',
    'whitespace-nowrap',
    'focus-visible:ring-[3px]',
  ],
  {
    variants: {
      variant: {
        filled: [],
        outlined: [],
        ghost: [],
        text: ['hover:underline'],
      },
      color: {
        primary: ['ring-primary'],
        secondary: ['ring-secondary'],
        brand: ['ring-brand'],
        brandSubdued: ['ring-brand'],
        info: ['ring-info'],
        infoSubdued: ['ring-info'],
        success: ['ring-success'],
        successSubdued: ['ring-success'],
        caution: ['ring-caution'],
        cautionSubdued: ['ring-caution'],
        critical: ['ring-critical'],
        criticalSubdued: ['ring-critical'],
      },
      size: {
        sm: ['h-8 rounded-sm typography-small'],
        md: ['h-10 rounded-md typography-medium'],
        lg: ['h-12 rounded-lg typography-large'],
      },
      isDisabled: {
        true: [],
        false: [],
      },
    },
    defaultVariants: {
      color: 'primary',
      variant: 'filled',
      size: 'md',
      isDisabled: false,
    },
    compoundVariants: [
      //#region Filled
      {
        variant: 'filled',
        color: 'primary',
        className: 'bg-primary text-on-primary hover:bg-primary-hover',
      },
      {
        variant: 'filled',
        color: 'secondary',
        className: 'bg-secondary text-on-secondary hover:bg-secondary-hover',
      },
      {
        variant: 'filled',
        color: 'brand',
        className: 'bg-brand text-on-brand hover:bg-brand-hover',
      },
      {
        variant: 'filled',
        color: 'brandSubdued',
        className:
          'bg-brand-subdued text-on-brand-subdued hover:bg-brand-subdued-hover',
      },
      {
        variant: 'filled',
        color: 'info',
        className: 'bg-info text-on-info hover:bg-info-hover',
      },
      {
        variant: 'filled',
        color: 'infoSubdued',
        className:
          'bg-info-subdued text-on-info-subdued hover:bg-info-subdued-hover',
      },
      {
        variant: 'filled',
        color: 'success',
        className: 'bg-success text-on-success hover:bg-success-hover',
      },
      {
        variant: 'filled',
        color: 'successSubdued',
        className:
          'bg-success-subdued text-on-success-subdued hover:bg-success-subdued-hover',
      },
      {
        variant: 'filled',
        color: 'caution',
        className: 'bg-caution text-on-caution hover:bg-caution-hover',
      },
      {
        variant: 'filled',
        color: 'cautionSubdued',
        className:
          'bg-caution-subdued text-on-caution-subdued hover:bg-caution-subdued-hover',
      },
      {
        variant: 'filled',
        color: 'critical',
        className: 'bg-critical text-on-critical hover:bg-critical-hover',
      },
      {
        variant: 'filled',
        color: 'criticalSubdued',
        className:
          'bg-critical-subdued text-on-critical-subdued hover:bg-critical-subdued-hover',
      },
      {
        variant: 'filled',
        isDisabled: true,
        className: 'bg-disabled text-on-disabled',
      },
      //#endregion Filled

      //#region Outlined
      {
        variant: 'outlined',
        color: 'primary',
        className:
          'text-foreground hover:bg-primary hover:text-on-primary border-primary',
      },
      {
        variant: 'outlined',
        color: 'secondary',
        className:
          'text-secondary hover:bg-secondary hover:text-on-secondary border-secondary',
      },
      {
        variant: 'outlined',
        color: 'brand',
        className: 'text-brand hover:bg-brand hover:text-on-brand border-brand',
      },
      {
        variant: 'outlined',
        color: 'brandSubdued',
        className:
          'text-brand hover:bg-brand-subdued hover:text-on-brand-subdued border-brand',
      },
      {
        variant: 'outlined',
        color: 'info',
        className: 'text-info hover:bg-info hover:text-on-info border-info',
      },
      {
        variant: 'outlined',
        color: 'infoSubdued',
        className:
          'text-info hover:bg-info-subdued hover:text-on-info-subdued border-info',
      },
      {
        variant: 'outlined',
        color: 'success',
        className:
          'text-success hover:bg-success hover:text-on-success border-success',
      },
      {
        variant: 'outlined',
        color: 'successSubdued',
        className:
          'text-success hover:bg-success-subdued hover:text-on-success-subdued border-success',
      },
      {
        variant: 'outlined',
        color: 'caution',
        className:
          'text-caution hover:bg-caution hover:text-on-caution border-caution',
      },
      {
        variant: 'outlined',
        color: 'cautionSubdued',
        className:
          'text-caution hover:bg-caution-subdued hover:text-on-caution-subdued border-caution',
      },
      {
        variant: 'outlined',
        color: 'critical',
        className:
          'text-critical hover:bg-critical hover:text-on-critical border-critical',
      },
      {
        variant: 'outlined',
        color: 'criticalSubdued',
        className:
          'text-critical hover:bg-critical-subdued hover:text-on-critical-subdued border-critical',
      },
      {
        variant: 'outlined',
        isDisabled: true,
        className: 'text-disabled border-disabled',
      },
      //#endregion Outlined

      //#region Ghost
      {
        variant: 'ghost',
        color: 'primary',
        className: 'text-foreground hover:bg-primary hover:text-on-primary',
      },
      {
        variant: 'ghost',
        color: 'secondary',
        className: 'text-secondary hover:bg-secondary hover:text-on-secondary',
      },
      {
        variant: 'ghost',
        color: 'brand',
        className:
          'text-brand hover:bg-brand-subdued hover:text-on-brand-subdued',
      },
      {
        variant: 'ghost',
        color: 'brandSubdued',
        className:
          'text-brand hover:bg-brand-subdued hover:text-on-brand-subdued',
      },
      {
        variant: 'ghost',
        color: 'info',
        className: 'text-info hover:bg-info-subdued hover:text-on-info-subdued',
      },
      {
        variant: 'ghost',
        color: 'infoSubdued',
        className: 'text-info hover:bg-info-subdued hover:text-on-info-subdued',
      },
      {
        variant: 'ghost',
        color: 'success',
        className:
          'text-success hover:bg-success-subdued hover:text-on-success-subdued',
      },
      {
        variant: 'ghost',
        color: 'successSubdued',
        className:
          'text-success hover:bg-success-subdued hover:text-on-success-subdued',
      },
      {
        variant: 'ghost',
        color: 'caution',
        className:
          'text-caution hover:bg-caution-subdued hover:text-on-caution-subdued',
      },
      {
        variant: 'ghost',
        color: 'cautionSubdued',
        className:
          'text-caution hover:bg-caution-subdued hover:text-on-caution-subdued',
      },
      {
        variant: 'ghost',
        color: 'critical',
        className:
          'text-critical hover:bg-critical-subdued hover:text-on-critical-subdued',
      },
      {
        variant: 'ghost',
        color: 'criticalSubdued',
        className:
          'text-critical hover:bg-critical-subdued hover:text-on-critical-subdued',
      },
      {
        variant: 'ghost',
        isDisabled: true,
        className: 'text-disabled',
      },
      //#endregion Ghost

      //#region Text
      {
        variant: 'text',
        color: 'primary',
        className: 'text-foreground',
      },
      {
        variant: 'text',
        color: 'secondary',
        className: 'text-secondary',
      },
      {
        variant: 'text',
        color: 'brand',
        className: 'text-brand',
      },
      {
        variant: 'text',
        color: 'brandSubdued',
        className: 'text-brand',
      },
      {
        variant: 'text',
        color: 'info',
        className: 'text-info',
      },
      {
        variant: 'text',
        color: 'infoSubdued',
        className: 'text-info',
      },
      {
        variant: 'text',
        color: 'success',
        className: 'text-success',
      },
      {
        variant: 'text',
        color: 'successSubdued',
        className: 'text-success',
      },
      {
        variant: 'text',
        color: 'caution',
        className: 'text-caution',
      },
      {
        variant: 'text',
        color: 'cautionSubdued',
        className: 'text-caution',
      },
      {
        variant: 'text',
        color: 'critical',
        className: 'text-critical',
      },
      {
        variant: 'text',
        color: 'criticalSubdued',
        className: 'text-critical',
      },
      {
        variant: 'text',
        isDisabled: true,
        className: 'text-disabled',
      },
      //#endregion Text

      //#region SM
      {
        size: 'sm',
        variant: 'filled',
        className: 'px-sm',
      },
      {
        size: 'sm',
        variant: 'outlined',
        className: 'px-sm',
      },
      {
        size: 'sm',
        variant: 'ghost',
        className: 'px-xs',
      },
      {
        size: 'sm',
        variant: 'text',
        className: 'px-xs',
      },
      //#endregion SM

      //#region MD
      {
        size: 'md',
        variant: 'filled',
        className: 'px-md',
      },
      {
        size: 'md',
        variant: 'outlined',
        className: 'px-md',
      },
      {
        size: 'md',
        variant: 'ghost',
        className: 'px-sm',
      },
      {
        size: 'md',
        variant: 'text',
        className: 'px-sm',
      },
      //#endregion MD

      //#region LG
      {
        size: 'lg',
        variant: 'filled',
        className: 'px-lg',
      },
      {
        size: 'lg',
        variant: 'outlined',
        className: 'px-lg',
      },
      {
        size: 'lg',
        variant: 'text',
        className: 'px-md',
      },
      {
        size: 'lg',
        variant: 'ghost',
        className: 'px-md',
      },
      //#endregion LG
    ],
  },
);

export const buttonLabelVariants = cva(['truncate'], {
  variants: {
    variant: {
      filled: [],
      outlined: [],
      ghost: [],
      text: [],
    },
    color: {
      primary: [],
      secondary: [],
      brand: [],
      brandSubdued: [],
      info: [],
      infoSubdued: [],
      success: [],
      successSubdued: [],
      caution: [],
      cautionSubdued: [],
      critical: [],
      criticalSubdued: [],
    },
    size: {
      sm: [],
      md: [],
      lg: [],
    },
  },
  defaultVariants: {
    color: 'primary',
    variant: 'filled',
    size: 'md',
  },
  compoundVariants: [
    //#region SM
    {
      size: 'sm',
      variant: 'filled',
      className: 'px-2xs',
    },
    {
      size: 'sm',
      variant: 'outlined',
      className: 'px-2xs',
    },
    {
      size: 'sm',
      variant: 'ghost',
      className: 'px-3xs',
    },
    {
      size: 'sm',
      variant: 'text',
      className: 'px-3xs',
    },
    //#endregion SM

    //#region MD
    {
      size: 'md',
      variant: 'filled',
      className: 'px-xs',
    },
    {
      size: 'md',
      variant: 'outlined',
      className: 'px-xs',
    },
    {
      size: 'md',
      variant: 'ghost',
      className: 'px-2xs',
    },
    {
      size: 'md',
      variant: 'text',
      className: 'px-2xs',
    },
    //#endregion MD

    //#region LG
    {
      size: 'lg',
      variant: 'filled',
      className: 'px-sm',
    },
    {
      size: 'lg',
      variant: 'outlined',
      className: 'px-sm',
    },
    {
      size: 'lg',
      variant: 'ghost',
      className: 'px-xs',
    },
    {
      size: 'lg',
      variant: 'text',
      className: 'px-xs',
    },
    //#endregion LG
  ],
});

export const buttonIconVariants = cva([], {
  variants: {
    variant: {
      filled: [],
      outlined: [],
      ghost: [],
      text: [],
    },
    color: {
      primary: [],
      secondary: [],
      brand: [],
      brandSubdued: [],
      info: [],
      infoSubdued: [],
      success: [],
      successSubdued: [],
      caution: [],
      cautionSubdued: [],
      critical: [],
      criticalSubdued: [],
    },
    size: {
      sm: ['h-4 w-4 min-w-4'],
      md: ['h-5 w-5 min-w-5'],
      lg: ['h-6 w-6 min-w-6'],
    },
  },
  defaultVariants: {
    color: 'primary',
    variant: 'filled',
    size: 'md',
  },
  compoundVariants: [
    //#region SM
    {
      size: 'sm',
      variant: 'ghost',
      className: 'mr-3xs',
    },
    //#endregion SM

    //#region MD
    {
      size: 'md',
      variant: 'ghost',
      className: 'mr-2xs',
    },
    //#endregion MD

    //#region LG
    {
      size: 'lg',
      variant: 'ghost',
      className: 'mr-xs',
    },
    //#endregion LG
  ],
});
