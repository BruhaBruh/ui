import { cva } from 'class-variance-authority';

export const fieldWrapperVariants = cva([
  'group/field',
  'text-on-surface-variant',
  'data-[disabled=true]:text-on-surface/[0.38]',
]);

export const fieldContainerVariants = cva([
  '[&_.icon-button]:ring:invisible',
  'flex min-h-14 items-start justify-between rounded-lg bg-surface-container-highest',
  'px-sm py-xs',
  'relative',
  '[&>*]:z-1',
  'string:absolute string:rounded-lg',
  'state:transition-[background-color_medium-1_emphasized]',
  'state:inset-0',
  'ring:rounded-lg',
  'ring:-inset-0.5',
  'ring:transition-[box-shadow_medium-1_emphasized-accelerate]',
  'ring:hidden focus-visible-within/field:ring:block',
  'ring:ring-4 starting:ring:ring-8',
  'ring:ring-primary-container',
  '[&>*:not(.field--inner-container)]:starting:size-0',
  '[&>*:not(.field--inner-container):first-child]:mr-sm',
  '[&>*:not(.field--inner-container):first-child]:starting:mr-0',
  '[&>*:not(.field--inner-container):last-child]:ml-sm',
  '[&>*:not(.field--inner-container):last-child]:starting:ml-0',
  '[&>svg]:my-2',
  '[&>svg]:size-6 [&>svg]:starting:size-0',
  '[&>*:not(.field--inner-container):first-child]:transition-[color,width,margin,box-shadow,color,background-color,border-color_medium-1_emphasized-decelerate]',
  '[&>*:not(.field--inner-container):last-child]:transition-[color,width,margin,box-shadow,color,background-color,border-color_medium-1_emphasized-decelerate]',
  'group-data-[disabled=true]/field:bg-on-surface/[0.04]',
  'hovered:group-data-[disabled=false]/field:state:bg-on-surface/[0.08]',
  'group-data-[invalid=true]/field:[&>svg:last-child]:text-critical-foreground',
]);

export const fieldInnerContainerVariants = cva([
  'flex-1',
  'self-stretch',
  'flex flex-col justify-center overflow-hidden',
  'px-2xs',
]);

export const fieldLabelVariants = cva([
  'typography-body-large',
  'select-none truncate',
  'group-focus-within/field:typography-body-small',
  'group-has-[*:placeholder-shown]/field:typography-body-small',
  'group-data-[visible=true]/field:typography-body-small',
  'transition-[line-height,font-size,font-weight_medium-1_emphasized-decelerate]',
  'group-data-[invalid=true]/field:text-critical-foreground',
]);

export const fieldInputVariants = cva([
  'w-0 min-w-full resize-none',
  'bg-transparent outline-none',
  'h-0',
  'focus:h-6',
  'placeholder-shown:h-6',
  'group-data-[visible=true]/field:h-6',
  'text-on-surface placeholder:text-on-surface-variant',
  'typography-body-large',
  'transition-[height,width,box-shadow,color,background-color,border-color_medium-1_emphasized-decelerate]',
  'caret-primary',
  'group-data-[disabled=true]/field:text-on-surface/[0.38]',
  'group-data-[disabled=true]/field:placeholder:text-on-surface/[0.38]',
]);

export const fieldSupportTextVariants = cva([
  'typography-body-small',
  'mt-2xs',
  'flex items-start justify-between',
  'gap-md px-md',
  'group-data-[invalid=true]/field:text-critical-foreground',
]);
