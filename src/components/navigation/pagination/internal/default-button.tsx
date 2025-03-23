import { IconButton } from '@/components/action';
import type { PaginationProps } from '../pagination.types';
import { paginationVariants } from '../pagination.variants';

export const DefaultButton: NonNullable<PaginationProps['children']> = ({
  isActive,
  page,
  onClick,
}) => (
  <IconButton
    className={paginationVariants.button()}
    variant="tonal"
    isToggleable
    isSelected={isActive}
    onPress={onClick}
  >
    <span className={paginationVariants.buttonText()}>{page}</span>
  </IconButton>
);
