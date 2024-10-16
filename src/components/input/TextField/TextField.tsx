'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import React from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import { Field } from '../Field';
import { TextFieldProps } from './TextField.types';

const splitProps = ({
  'aria-activedescendant': ariaActiveDescendant,
  'aria-autocomplete': ariaAutoComplete,
  'aria-haspopup': ariaHasPopup,
  isDisabled,
  isReadOnly,
  isRequired,
  isInvalid,
  validationBehavior,
  validate,
  description,
  errorMessage,
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
  label,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  excludeFromTabOrder,
  id,
  autoComplete,
  maxLength,
  minLength,
  pattern,
  type,
  inputMode,
  name,
  onCopy,
  onCut,
  onPaste,
  onCompositionStart,
  onCompositionEnd,
  onCompositionUpdate,
  onSelect,
  onBeforeInput,
  onInput,
  'aria-errormessage': ariaErrorMessage,
  ...restProps
}: TextFieldProps): [
  AriaTextFieldProps,
  Omit<TextFieldProps, keyof AriaTextFieldProps>,
] => {
  const ariaProps = {
    'aria-activedescendant': ariaActiveDescendant,
    'aria-autocomplete': ariaAutoComplete,
    'aria-haspopup': ariaHasPopup,
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    validationBehavior,
    validate,
    description,
    errorMessage,
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
    label,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
    excludeFromTabOrder,
    id,
    autoComplete,
    maxLength,
    minLength,
    pattern,
    type,
    inputMode,
    name,
    onCopy,
    onCut,
    onPaste,
    onCompositionStart,
    onCompositionEnd,
    onCompositionUpdate,
    onSelect,
    onBeforeInput,
    onInput,
    'aria-errormessage': ariaErrorMessage,
  };
  return [ariaProps, restProps];
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { left, right, className, isVisible, child, asChild, ...restProps },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const [ariaProps, props] = splitProps(restProps);
    const {
      inputProps,
      labelProps: { id: labelId, ...labelProps },
      descriptionProps,
      errorMessageProps,
      isInvalid,
      validationErrors,
    } = useTextField(ariaProps, ref);

    return (
      <Field
        className={cn('text-field', className)}
        left={left}
        right={right}
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
            type="text"
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
TextField.displayName = 'TextField';
