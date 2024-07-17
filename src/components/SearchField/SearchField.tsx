'use client';

import { useCN } from '@/providers';
import React from 'react';
import { useSearchField } from 'react-aria';
import { useSearchFieldState } from 'react-stately';
import { Button } from '../Button';
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
import { SearchFieldProps } from './SearchField.types';

export const SearchField: React.FC<SearchFieldProps> = ({
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
  const state = useSearchFieldState(props);
  const {
    inputProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    clearButtonProps,
  } = useSearchField(
    {
      label,
      description,
      errorMessage,
      isInvalid: isInvalidProp,
      isDisabled,
      ...props,
    },
    state,
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
        {right}
        {!right && state.value !== '' && (
          <Button
            size="sm"
            variant="ghost"
            content="icon"
            color="secondary"
            {...clearButtonProps}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        )}
        {!right && state.value === '' && (
          <span aria-hidden="true" className="w-10" />
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
SearchField.displayName = '@bruhabruh/ui/SearchField';
