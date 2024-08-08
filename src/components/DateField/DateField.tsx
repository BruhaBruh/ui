'use client';

import { cn } from '@/utility';
import { createCalendar } from '@internationalized/date';
import React from 'react';
import { useDateField } from 'react-aria';
import { useDateFieldState } from 'react-stately';
import { DateSegment } from '../DateSegment';
import {
  fieldContentVariants,
  fieldDescriptionVariants,
  fieldErrorVariants,
  fieldInputWrapperVariants,
  fieldLabelVariants,
  fieldVariants,
  fieldWrapperVariants,
} from '../Field';
import { DateFieldProps } from './DateField.types';

export const DateField: React.FC<DateFieldProps> = ({
  label,
  description,
  errorMessage,
  left,
  right,
  isInvalid: isInvalidProp,
  isDisabled,
  onChange,
  className,
  ...props
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const state = useDateFieldState({
    onChange,
    ...props,
    locale: 'ru-RU',
    createCalendar,
  });
  const {
    fieldProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
  } = useDateField(
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
        {...fieldProps}
        className={fieldVariants({ isInvalid, isDisabled })}
      >
        {left || <span aria-hidden="true" />}
        <div data-field-content className={fieldContentVariants()}>
          {label && (
            <label {...labelProps} className={fieldLabelVariants()}>
              {label}
            </label>
          )}
          <span
            className={cn(
              fieldInputWrapperVariants({ visible: true }),
              className,
            )}
          >
            <span {...props} ref={ref}>
              {state.segments.map((segment, i) => (
                <DateSegment key={i} segment={segment} state={state} />
              ))}
            </span>
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
DateField.displayName = '@bruhabruh/ui/DateField';
