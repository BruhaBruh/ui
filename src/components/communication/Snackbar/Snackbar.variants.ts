import { cva } from 'class-variance-authority';

export const snackbarVariants = cva([
  'group/snackbar',
  'overflow-hidden',
  'min-w-72',
  'rounded-xs elevation-3',
  'bg-inverse-surface',
  'text-inverse-on-surface',
  'inline-flex',
  'transition-[opacity,scale,translate_medium-1_emphasized-accelerate]',
  'origin-bottom',
  'starting:translate-y-full translate-y-0',
  'scale-y-100 starting:scale-y-0',
  'opacity-100 starting:opacity-0',
  'data-[animation=exiting]:scale-y-0',
  'data-[animation=exiting]:opacity-0',
  'data-[animation=exiting]:translate-y-full',
  'data-[longer-actions=true]:items-between',
  'data-[longer-actions=true]:flex-col',
  'data-[longer-actions=false]:items-center',
  'data-[longer-actions=false]:justify-between',
  'data-[longer-actions=false]:gap-2xs',
]);

export const snackbarContentVariants = cva([
  'typography-body-medium',
  'px-md py-3.5',
  'group-data-[longer-actions=false]/snackbar:[&:has(~.snackbar--actions)]:pr-0',
  'overflow-hidden',
  'inline-flex w-full flex-col',
]);

export const snackbarTitleVariants = cva(['truncate']);

export const snackbarDescriptionVariants = cva(['truncate']);

export const snackbarActionsVariants = cva([
  'inline-flex items-center justify-end gap-2xs',
  '[&_.button]:ring:invisible',
  '[&_.button]:text-inverse-primary',
  '[&_.button:hover]:state:bg-inverse-primary/[0.08]',
  '[&_.button:focus]:state:bg-inverse-primary/[0.12]',
  '[&_.button:active]:state:bg-inverse-primary/[0.12]',
  'group-data-[longer-actions=true]/snackbar:pb-2xs',
  'group-data-[longer-actions=true]/snackbar:pr-xs',
  'group-data-[longer-actions=false]/snackbar:pr-2xs',
]);

export const snackbarCloseButtonVariants = cva([
  'ring:invisible',
  'text-inverse-on-surface',
  'hover:state:bg-inverse-on-surface/[0.08]',
  'focus:state:bg-inverse-on-surface/[0.12]',
  'active:state:bg-inverse-on-surface/[0.12]',
  'data-[selected]:data-[disabled=true]:text-inverse-on-surface/[0.38]',
]);
