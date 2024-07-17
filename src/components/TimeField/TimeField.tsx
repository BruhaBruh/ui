'use client';

import { useCN } from '@/providers';
import React from 'react';
import { useTimeField } from 'react-aria';
import { useTimeFieldState } from 'react-stately';
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
import { TimeFieldProps } from './TimeField.types';

export const TimeField: React.FC<TimeFieldProps> = ({
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

  const ref = React.useRef<HTMLSpanElement>(null);
  const state = useTimeFieldState({
    ...props,
    locale: 'ru-RU',
  });
  const {
    fieldProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
  } = useTimeField(
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
TimeField.displayName = '@bruhabruh/ui/TimeField';
