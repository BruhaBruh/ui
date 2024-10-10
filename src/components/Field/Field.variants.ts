import { cva } from 'class-variance-authority';

export const fieldWrapperVariants = cva([
  'group',
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
  'string:transition string:duration-medium-1',
  'state:inset-0',
  'state:easing-emphasized',
  'ring:rounded-lg',
  'ring:-inset-0.5',
  'ring:easing-emphasized-accelerate',
  'ring:hidden group-has-[*:focus-within]:ring:block',
  'ring:ring-4 starting:ring:ring-8',
  'ring:ring-secondary-container',
  '[&>*:not(.field--inner-container)]:starting:size-0',
  '[&>*:not(.field--inner-container):first-child]:mr-sm',
  '[&>*:not(.field--inner-container):first-child]:starting:mr-0',
  '[&>*:not(.field--inner-container):last-child]:ml-sm',
  '[&>*:not(.field--inner-container):last-child]:starting:ml-0',
  '[&>svg]:my-2',
  '[&>svg]:size-6 [&>svg]:starting:size-0',
  '[&>*:not(.field--inner-container):first-child]:transition',
  '[&>*:not(.field--inner-container):first-child]:easing-emphasized',
  '[&>*:not(.field--inner-container):first-child]:duration-medium-1',
  '[&>*:not(.field--inner-container):last-child]:transition',
  '[&>*:not(.field--inner-container):last-child]:easing-emphasized',
  '[&>*:not(.field--inner-container):last-child]:duration-medium-1',
  'group-data-[disabled=true]:bg-on-surface/[0.04]',
  'hover:group-data-[disabled=false]:state:bg-on-surface/[0.08]',
  'group-data-[invalid=true]:[&>svg:last-child]:text-critical-foreground',
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
  'group-focus-within:typography-body-small',
  'group-has-[*:placeholder-shown]:typography-body-small',
  'group-data-[visible=true]:typography-body-small',
  'transition-all easing-emphasized duration-short-4',
  'group-data-[invalid=true]:text-critical-foreground',
]);

export const fieldInputVariants = cva([
  'w-0 min-w-full resize-none',
  'bg-transparent outline-none',
  'h-0',
  'focus:h-6',
  'placeholder-shown:h-6',
  'group-data-[visible=true]:h-6',
  'text-on-surface placeholder:text-on-surface-variant',
  'typography-body-large',
  'transition easing-emphasized duration-short-4',
  'caret-primary',
  'group-data-[disabled=true]:text-on-surface/[0.38]',
]);

export const fieldSupportTextVariants = cva([
  'typography-body-small',
  'mt-2xs',
  'flex items-start justify-between',
  'gap-md px-md',
  'group-data-[invalid=true]:text-critical-foreground',
]);
