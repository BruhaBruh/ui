import type { Props } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { breadcrumbsVariants } from './breadcrumbs.variants';

export type BreadcrumbsProps = Props<'section'> &
  VariantProps<typeof breadcrumbsVariants>;
