'use client';

import { IconButton } from '@/components/action';
import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import React from 'react';
import { AriaSearchFieldProps, useSearchField } from 'react-aria';
import { useSearchFieldState } from 'react-stately';
import { Field } from '../Field';
import { SearchFieldProps } from './SearchField.types';

const splitProps = ({
  onSubmit,
  onClear,
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
  'aria-activedescendant': ariaActiveDescendant,
  'aria-autocomplete': ariaAutoComplete,
  'aria-haspopup': ariaHasPopup,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  excludeFromTabOrder,
  id,
  autoComplete,
  maxLength,
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
}: SearchFieldProps): [
  AriaSearchFieldProps,
  Omit<SearchFieldProps, keyof AriaSearchFieldProps>,
] => {
  const ariaProps = {
    onSubmit,
    onClear,
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
    'aria-activedescendant': ariaActiveDescendant,
    'aria-autocomplete': ariaAutoComplete,
    'aria-haspopup': ariaHasPopup,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
    excludeFromTabOrder,
    id,
    autoComplete,
    maxLength,
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

export const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      left,
      right,
      className,
      isVisible,
      searchButton,
      child,
      asChild,
      ...restProps
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const [ariaProps, props] = splitProps(restProps);
    const state = useSearchFieldState(ariaProps);
    const {
      inputProps,
      labelProps: { id: labelId, ...labelProps },
      descriptionProps,
      errorMessageProps,
      isInvalid,
      validationErrors,
      clearButtonProps,
    } = useSearchField(ariaProps, state, ref);

    return (
      <Field
        className={cn('search-field', className)}
        left={left}
        right={
          inputProps.value &&
          searchButton &&
          (right ? (
            right(clearButtonProps)
          ) : (
            <IconButton {...clearButtonProps}>
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
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </IconButton>
          ))
        }
        labelId={labelId}
        label={ariaProps.label}
        labelProps={labelProps}
        isDisabled={ariaProps.isDisabled}
        isInvalid={ariaProps.isInvalid}
        isVisible={isVisible || Boolean(inputProps.value)}
        asChild={asChild}
        description={(() => {
          if (!isInvalid) return ariaProps.description;
          if (validationErrors.length > 0) return validationErrors.join(' ');
          return ariaProps.description;
        })()}
        descriptionProps={
          ariaProps.isInvalid && validationErrors.length > 0
            ? errorMessageProps
            : descriptionProps
        }
        input={(inputClassName) => (
          <input
            type="search"
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
SearchField.displayName = 'SearchField';
