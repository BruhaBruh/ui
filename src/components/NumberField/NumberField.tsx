'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import React from 'react';
import { AriaNumberFieldProps, useNumberField } from 'react-aria';
import { useNumberFieldState } from 'react-stately';
import { Field } from '../Field';
import { IconButton } from '../IconButton';
import { NumberFieldProps } from './NumberField.types';

const splitProps = ({
  decrementAriaLabel,
  incrementAriaLabel,
  isWheelDisabled,
  formatOptions,
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
  placeholder,
  value,
  defaultValue,
  onChange,
  minValue,
  maxValue,
  step,
  label,
  description,
  errorMessage,
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  onCopy,
  onCut,
  onPaste,
  onCompositionStart,
  onCompositionEnd,
  onCompositionUpdate,
  onSelect,
  onBeforeInput,
  onInput,
  ...restProps
}: NumberFieldProps): [
  AriaNumberFieldProps,
  Omit<NumberFieldProps, keyof AriaNumberFieldProps>,
] => {
  const ariaProps = {
    decrementAriaLabel,
    incrementAriaLabel,
    isWheelDisabled,
    formatOptions,
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
    placeholder,
    value,
    defaultValue,
    onChange,
    minValue,
    maxValue,
    step,
    label,
    description,
    errorMessage,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
    onCopy,
    onCut,
    onPaste,
    onCompositionStart,
    onCompositionEnd,
    onCompositionUpdate,
    onSelect,
    onBeforeInput,
    onInput,
  };
  return [ariaProps, restProps];
};

export const NumberField = React.forwardRef<HTMLInputElement, NumberFieldProps>(
  (
    {
      left,
      right,
      className,
      isVisible,
      incrementButton,
      decrementButton,
      child,
      asChild,
      ...restProps
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const [ariaProps, props] = splitProps(restProps);
    const state = useNumberFieldState({
      ...ariaProps,
      locale: 'ru-RU',
    });
    const {
      inputProps,
      labelProps: { id: labelId, ...labelProps },
      descriptionProps,
      errorMessageProps,
      isInvalid,
      validationErrors,
      incrementButtonProps,
      decrementButtonProps,
    } = useNumberField(
      {
        ...ariaProps,
        ...props,
      },
      state,
      ref,
    );

    return (
      <Field
        className={cn('number-field', className)}
        left={
          decrementButton &&
          (left ? (
            left(decrementButtonProps)
          ) : (
            <IconButton {...decrementButtonProps}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
              </svg>
            </IconButton>
          ))
        }
        right={
          incrementButton &&
          (right ? (
            right(incrementButtonProps)
          ) : (
            <IconButton {...incrementButtonProps}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
            </IconButton>
          ))
        }
        labelId={labelId}
        label={ariaProps.label}
        labelProps={labelProps}
        isDisabled={ariaProps.isDisabled}
        isInvalid={isInvalid}
        isVisible={isVisible || Boolean(inputProps.value)}
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
          <input
            type="number"
            {...props}
            {...inputProps}
            className={inputClassName}
            ref={ref}
          />
        )}
      >
        {child}
      </Field>
    );
  },
);
NumberField.displayName = 'NumberField';
