'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { createCalendar } from '@internationalized/date';
import React from 'react';
import { AriaDateFieldProps, DateValue, useDateField } from 'react-aria';
import { useDateFieldState } from 'react-stately';
import { DateSegment } from '../DateSegment';
import { Field } from '../Field';
import { DateFieldProps } from './DateField.types';

const splitProps = ({
  isDateUnavailable,
  isOpen,
  defaultOpen,
  onOpenChange,
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
}: DateFieldProps): [
  AriaDateFieldProps<DateValue>,
  Omit<DateFieldProps, keyof AriaDateFieldProps<DateValue>>,
] => {
  const ariaProps = {
    isDateUnavailable,
    isOpen,
    defaultOpen,
    onOpenChange,
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

export const DateField = React.forwardRef<HTMLSpanElement, DateFieldProps>(
  ({ left, right, className, child, asChild, ...restProps }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);
    const [ariaProps, props] = splitProps(restProps);
    const state = useDateFieldState({
      ...ariaProps,
      locale: 'ru-RU',
      createCalendar,
    });
    const {
      fieldProps,
      labelProps: { id: labelId, ...labelProps },
      descriptionProps,
      errorMessageProps,
      isInvalid,
      validationErrors,
    } = useDateField(ariaProps, state, ref);

    return (
      <Field
        className={cn('date-field', className)}
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
DateField.displayName = 'DateField';
