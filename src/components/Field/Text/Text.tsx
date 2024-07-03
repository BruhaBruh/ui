import { cn } from '@/utility';
import React from 'react';
import { useTextField } from 'react-aria';
import { TextFieldProps } from '../Field.types';
import {
  fieldInputVariants,
  fieldInputWrapperVariants,
} from '../Field.variants';

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
        {...inputProps}
        {...props}
        className={fieldInputVariants()}
        ref={ref}
      />
    </span>
  );
};
TextField.displayName = '@bruhabruh/ui/TextField';
