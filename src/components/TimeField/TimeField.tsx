'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import React from 'react';
import { AriaTimeFieldProps, TimeValue, useTimeField } from 'react-aria';
import { useTimeFieldState } from 'react-stately';
import { DateSegment } from '../DateSegment';
import { Field } from '../Field';
import { TimeFieldProps } from './TimeField.types';

const splitProps = ({
  hourCycle,
  granularity,
  hideTimeZone,
  shouldForceLeadingZeros = true,
  placeholderValue,
  minValue,
  maxValue,
  isDisabled,
  isReadOnly,
  isRequired,
  isInvalid,
  validationBehavior,
  validate,
  autoFocus,
  onFocus,
  onBlur,
  onFocusChange,
  onKeyDown,
  onKeyUp,
  label,
  description,
  errorMessage,
  value,
  defaultValue,
  onChange,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  id,
  name,
  ...restProps
}: TimeFieldProps): [
  AriaTimeFieldProps<TimeValue>,
  Omit<TimeFieldProps, keyof AriaTimeFieldProps<TimeValue>>,
] => {
  const ariaProps = {
    hourCycle,
    granularity,
    hideTimeZone,
    shouldForceLeadingZeros,
    placeholderValue,
    minValue,
    maxValue,
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    validationBehavior,
    validate,
    autoFocus,
    onFocus,
    onBlur,
    onFocusChange,
    onKeyDown,
    onKeyUp,
    label,
    description,
    errorMessage,
    value,
    defaultValue,
    onChange,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
    id,
    name,
  };
  return [ariaProps, restProps];
};

export const TimeField = React.forwardRef<HTMLSpanElement, TimeFieldProps>(
  ({ left, right, className, child, asChild, ...restProps }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);
    const [ariaProps, props] = splitProps(restProps);
    const state = useTimeFieldState({
      ...ariaProps,
      locale: 'ru-RU',
    });
    const {
      fieldProps,
      labelProps: { id: labelId, ...labelProps },
      descriptionProps,
      errorMessageProps,
      isInvalid,
      validationErrors,
    } = useTimeField(ariaProps, state, ref);

    return (
      <Field
        className={cn('time-field', className)}
        left={left}
        right={right}
        labelId={labelId}
        label={ariaProps.label}
        labelProps={labelProps}
        isDisabled={ariaProps.isDisabled}
        isInvalid={isInvalid}
        isVisible={true}
        asChild={asChild}
        description={(() => {
          if (!isInvalid) return ariaProps.description;
          if (validationErrors.length > 0) return validationErrors.join(' ');
          return ariaProps.description;
        })()}
        descriptionProps={
          isInvalid && validationErrors.length > 0
            ? errorMessageProps
            : descriptionProps
        }
        input={(inputClassName) => (
          <span
            {...props}
            {...fieldProps}
            className={cn(
              inputClassName,
              props.className,
              fieldProps.className,
            )}
            ref={ref}
          >
            {state.segments.map((segment, i) => (
              <DateSegment key={i} segment={segment} state={state} />
            ))}
          </span>
        )}
      >
        {child}
      </Field>
    );
  },
);
TimeField.displayName = 'TimeField';
