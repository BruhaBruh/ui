import { cn } from '@/utility';
import React from 'react';
import { useTextField } from 'react-aria';
import {
  fieldInputVariants,
  fieldInputWrapperVariants,
} from '../Field.variants';
import { TextFieldProps } from './Text.types';

export const TextField: React.FC<TextFieldProps> = ({
  className,
  ...props
}) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const { inputProps } = useTextField(props, ref);

  return (
    <span className={cn(fieldInputWrapperVariants(), className)}>
      <input
        type="text"
        {...props}
        {...inputProps}
        className={fieldInputVariants()}
        ref={ref}
      />
    </span>
  );
};
TextField.displayName = '@bruhabruh/ui/TextField';
