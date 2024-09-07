import { AriaToggleButtonProps } from 'react-aria';
import { ButtonProps } from '../Button';
import { IconButtonProps } from '../IconButton';

export type ToggleIconButtonProps = AriaToggleButtonProps &
  Omit<IconButtonProps, 'variant' | 'value'> & {
    selectedVariant?: ButtonProps['variant'];
    unselectedVariant?: ButtonProps['variant'];
  };
