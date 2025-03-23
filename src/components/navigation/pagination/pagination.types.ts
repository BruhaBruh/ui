import type { Props } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { paginationVariants } from './pagination.variants';

export type PaginationProps = Props<'section', 'children'> &
  VariantProps<typeof paginationVariants> & {
    page: number;
    pageAmount: number;
    maxPagesToView?: number;
    renderPreviousButton?: (props: {
      isDisabled: boolean;
      onClick: () => void;
    }) => React.ReactNode;
    renderNextButton?: (props: {
      isDisabled: boolean;
      onClick: () => void;
    }) => React.ReactNode;
    children?: (props: {
      isActive: boolean;
      page: number;
      onClick: () => void;
    }) => React.ReactNode;
    onChangePage?: (page: number) => void;
  };
