import { IconButton } from '@/components/action';
import { IconChevronRight } from '@tabler/icons-react';
import type { PaginationProps } from '../pagination.types';

export const DefaultNextButton: NonNullable<
  PaginationProps['renderNextButton']
> = ({ isDisabled, onClick }) => (
  <IconButton variant="tonal" isDisabled={isDisabled} onPress={onClick}>
    <IconChevronRight />
  </IconButton>
);
