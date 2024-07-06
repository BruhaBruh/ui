import { cn } from '@/utility';
import React from 'react';
import { useNumberField } from 'react-aria';
import { useNumberFieldState } from 'react-stately';
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
import { NumberFieldButton } from './Button';
import { NumberFieldProps } from './NumberField.types';
import { numberFieldButtonsVariants } from './NumberField.variants';

export const NumberField: React.FC<NumberFieldProps> = ({
  label,
  description,
  errorMessage,
  left,
  right,
  isInvalid: isInvalidProp,
  className,
  ...props
}) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const state = useNumberFieldState({
    label,
    description,
    errorMessage,
    isInvalid: isInvalidProp,
    ...props,
    locale: 'ru-RU',
  });
  const {
    inputProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    groupProps,
    incrementButtonProps,
    decrementButtonProps,
  } = useNumberField(props, state, ref);

  return (
    <span className={cn(fieldWrapperVariants(), className)}>
      <label
        {...labelProps}
        {...groupProps}
        className={fieldVariants({ isInvalid })}
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
        {right || (
          <span className={numberFieldButtonsVariants()}>
            <NumberFieldButton {...incrementButtonProps}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M13.03 10.53a.75.75 0 0 1-1.06 0L8 6.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06"
                  clipRule="evenodd"
                />
              </svg>
            </NumberFieldButton>
            <NumberFieldButton {...decrementButtonProps}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06"
                  clipRule="evenodd"
                />
              </svg>
            </NumberFieldButton>
          </span>
        )}
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
NumberField.displayName = '@bruhabruh/ui/NumberField';
