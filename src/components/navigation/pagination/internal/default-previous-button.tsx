import { IconButton } from '@/components/action';
import { IconChevronLeft } from '@tabler/icons-react';
import type { PaginationProps } from '../pagination.types';

export const DefaultPreviousButton: NonNullable<
  PaginationProps['renderPreviousButton']
> = ({ isDisabled, onClick }) => (
  <IconButton variant="tonal" isDisabled={isDisabled} onPress={onClick}>
    <IconChevronLeft />
  </IconButton>
);
