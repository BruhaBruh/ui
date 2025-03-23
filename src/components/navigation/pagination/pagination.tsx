import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import React from 'react';
import {
  DefaultButton,
  DefaultNextButton,
  DefaultPreviousButton,
  calculatePages,
} from './internal';
import type { PaginationProps } from './pagination.types';
import { paginationVariants } from './pagination.variants';

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      page,
      pageAmount,
      maxPagesToView = 5,
      renderPreviousButton = DefaultPreviousButton,
      renderNextButton = DefaultNextButton,
      children = DefaultButton,
      onChangePage,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const pages = calculatePages({ page, pageAmount, maxPagesToView });

    return (
      <section {...props} ref={ref} className={cn(paginationVariants())}>
        {renderPreviousButton({
          isDisabled: page === 1,
          onClick: () => onChangePage?.(page - 1),
        })}
        {pages.map((p) => (
          <React.Fragment key={'page-' + p}>
            {children({
              isActive: p === page,
              page: p,
              onClick: () => onChangePage?.(page),
            })}
          </React.Fragment>
        ))}
        {renderNextButton({
          isDisabled: page === pageAmount,
          onClick: () => onChangePage?.(page + 1),
        })}
      </section>
    );
  },
);
Pagination.displayName = 'Pagination';
