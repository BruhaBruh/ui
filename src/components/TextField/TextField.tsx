'use client';

import { useCN } from '@/providers';
import React from 'react';
import { useTextField } from 'react-aria';
import {
  fieldContentVariants,
  fieldDescriptionVariants,
  fieldErrorVariants,
  fieldInputVariants,
  fieldInputWrapperVariants,
  fieldLabelVariants,
  fieldVariants,
  fieldWrapperVariants,
} from '../Field';
import { TextFieldProps } from './TextField.types';

export const TextField: React.FC<TextFieldProps> = ({
  label,
  description,
  errorMessage,
  left,
  right,
  isInvalid: isInvalidProp,
  isDisabled,
  className,
  ...props
}) => {
  const cn = useCN();

  const ref = React.useRef<HTMLInputElement>(null);
  const {
    inputProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
  } = useTextField(
    {
      label,
      description,
      errorMessage,
      isInvalid: isInvalidProp,
      isDisabled,
      ...props,
    },
    ref,
  );

  return (
    <span className={cn(fieldWrapperVariants(), className)}>
      <label
        {...labelProps}
        className={fieldVariants({ isInvalid, isDisabled })}
      >
        {left || <span aria-hidden="true" />}
        <div data-field-content className={fieldContentVariants()}>
          {label && (
            <label {...labelProps} className={fieldLabelVariants()}>
              {label}
            </label>
          )}
          <span className={cn(fieldInputWrapperVariants(), className)}>
            <input
              type="text"
              {...props}
              {...inputProps}
              className={fieldInputVariants()}
              ref={ref}
            />
          </span>
        </div>
        {right || <span aria-hidden="true" />}
      </label>
      {description && !errorMessage && (
        <span {...descriptionProps} className={fieldDescriptionVariants()}>
          {description}
        </span>
      )}
      {(errorMessage || validationErrors.length > 0) && (
        <span {...errorMessageProps} className={fieldErrorVariants()}>
          {errorMessage || validationErrors.join(', ')}
        </span>
      )}
    </span>
  );
};
TextField.displayName = '@bruhabruh/ui/TextField';
