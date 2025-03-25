import { useMergedRefs } from '@/hooks';
import type { PropsWithAsChild } from '@/types';
import { cn } from '@/utility';
import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import React from 'react';
import { breadcrumbsVariants } from '../breadcrumbs.variants';

export type BreadcrumbsItemProps = PropsWithAsChild<'section'> &
  VariantProps<typeof breadcrumbsVariants.item>;

export const BreadcrumbsItem = React.forwardRef<
  HTMLElement,
  BreadcrumbsItemProps
>(({ className, isActive, asChild, children, ...props }, forwardedRef) => {
  const ref = useMergedRefs(forwardedRef);

  const Comp = asChild ? Slot : 'section';

  return (
    <Comp
      {...props}
      ref={ref}
      className={cn(breadcrumbsVariants.item({ isActive }), className)}
    >
      {children}
    </Comp>
  );
});
BreadcrumbsItem.displayName = 'BreadcrumbsItem';
