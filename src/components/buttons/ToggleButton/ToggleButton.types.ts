import { AriaToggleButtonProps } from 'react-aria';
import { ButtonProps } from '../Button';

export type ToggleButtonProps = AriaToggleButtonProps &
  Omit<ButtonProps, 'variant' | 'value'> & {
    selectedVariant?: ButtonProps['variant'];
    unselectedVariant?: ButtonProps['variant'];
  };
