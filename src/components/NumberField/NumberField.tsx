'use client';

import { cn } from '@/utility';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
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
  className,
  ...props
}) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const state = useNumberFieldState({
    label,
    description,
    errorMessage,
    isInvalid: isInvalidProp,
    isDisabled,
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
        {right || (
          <span className={numberFieldButtonsVariants()}>
            <NumberFieldButton {...incrementButtonProps}>
              <IconChevronUp />
            </NumberFieldButton>
            <NumberFieldButton {...decrementButtonProps}>
              <IconChevronDown />
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
