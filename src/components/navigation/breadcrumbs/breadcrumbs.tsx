import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import React from 'react';
import type { BreadcrumbsProps } from './breadcrumbs.types';
import { breadcrumbsVariants } from './breadcrumbs.variants';
import { BreadcrumbsArrow } from './internal/breadcrumbs-arrow';

export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ children, ...props }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);

    return (
      <section {...props} ref={ref} className={cn(breadcrumbsVariants())}>
        {React.Children.map(children, (child, index) => (
          <React.Fragment
            key={React.isValidElement(child) ? child.key || index : index}
          >
            {child}
            {index < React.Children.count(children) - 1 && <BreadcrumbsArrow />}
          </React.Fragment>
        ))}
      </section>
    );
  },
);
Breadcrumbs.displayName = 'Breadcrumbs';
