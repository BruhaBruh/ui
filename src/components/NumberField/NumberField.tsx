'use client';

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
  isDisabled,
  increaseIcon,
  decreaseIcon,
  minValue,
  maxValue,
  className,
  onChange,
  ...props
}) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const state = useNumberFieldState({
    label,
    description,
    errorMessage,
    isInvalid: isInvalidProp,
    isDisabled,
    onChange,
    minValue,
    maxValue,
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
  } = useNumberField({ onChange, minValue, maxValue, ...props }, state, ref);

  return (
    <span className={cn(fieldWrapperVariants(), className)}>
      <label
        {...labelProps}
        {...groupProps}
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
              min={minValue}
              max={maxValue}
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
              {increaseIcon || (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-up"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              )}
            </NumberFieldButton>
            <NumberFieldButton {...decrementButtonProps}>
              {decreaseIcon || (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
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
