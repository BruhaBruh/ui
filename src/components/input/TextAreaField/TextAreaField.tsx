'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import React from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import { Field } from '../Field';
import { TextAreaFieldProps } from './TextAreaField.types';

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
}: TextAreaFieldProps): [
  AriaTextFieldProps,
  Omit<TextAreaFieldProps, keyof AriaTextFieldProps>,
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

export const TextAreaField = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(
  (
    {
      left,
      right,
      className,
      isVisible,
      child,
      minRows = 0,
      maxRows,
      asChild,
      ...restProps
    },
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
    } = useTextField<'textarea'>(ariaProps, ref);

    React.useEffect(() => {
      if (!ref.current) return () => {};
      const textarea = ref.current;

      let rowHeight = 0;

      const listener = () => {
        textarea.style.height = '';
        textarea.style.overflowY = 'hidden';
        if (textarea.value === '' && minRows < 1) {
          return;
        }
        textarea.style.height = 'auto';
        const height = textarea.scrollHeight;
        const currentRows = height / rowHeight;
        if (currentRows < minRows) {
          textarea.style.height = `${rowHeight * minRows}px`;
        } else if (maxRows !== undefined && currentRows > maxRows) {
          textarea.style.height = `${rowHeight * maxRows}px`;
        } else {
          textarea.style.height = `${textarea.scrollHeight}px`;
        }
        if (currentRows > 1 || minRows >= 1) {
          textarea.style.overflowY = 'auto';
        }
      };

      textarea.style.height = '';
      textarea.style.overflowY = 'hidden';
      const val = textarea.value;
      textarea.value = '';
      textarea.style.height = 'auto';
      rowHeight = textarea.scrollHeight;
      textarea.value = val;
      if (val === '' && minRows < 1) {
        textarea.style.height = '';
      } else {
        listener();
      }

      textarea.addEventListener('input', listener);

      return () => {
        textarea.removeEventListener('input', listener);
      };
    }, [ref, minRows, maxRows]);

    return (
      <Field
        className={cn('textarea-field', className)}
        left={left}
        right={right}
        labelId={labelId}
        label={ariaProps.label}
        labelProps={labelProps}
        isDisabled={ariaProps.isDisabled}
        isInvalid={isInvalid}
        isVisible={isVisible || minRows > 0 || Boolean(inputProps.value)}
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
          <textarea
            {...props}
            {...inputProps}
            className={inputClassName}
            rows={1}
            ref={ref}
          />
        )}
      >
        {child}
      </Field>
    );
  },
);
TextAreaField.displayName = 'TextAreaField';
