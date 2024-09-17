'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import React from 'react';
import { AriaCheckboxGroupItemProps, useCheckboxGroupItem } from 'react-aria';
import {
  checkboxContainerVariants,
  checkboxWrapperVariants,
} from '../Checkbox.variants';
import { CheckboxProps } from './Checkbox.types';
import { CheckboxGroupContext } from './CheckboxGroup.context';

const splitProps = ({
  isIndeterminate,
  onChange,
  value,
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
  'aria-controls': ariaControls,
  excludeFromTabOrder,
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  'aria-errormessage': ariaErrorMessage,
  name,
  ...restProps
}: CheckboxProps): [
  AriaCheckboxGroupItemProps,
  Omit<CheckboxProps, keyof AriaCheckboxGroupItemProps>,
] => {
  const ariaProps = {
    isIndeterminate,
    onChange,
    value,
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
    'aria-controls': ariaControls,
    excludeFromTabOrder,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
    'aria-errormessage': ariaErrorMessage,
    name,
  };
  return [ariaProps, restProps];
};

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  (
    {
      size,
      color,
      className,
      selectedIcon,
      intermediateIcon,
      children,
      ...restProps
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [ariaProps, props] = splitProps(restProps);
    const state = React.useContext(CheckboxGroupContext);
    const { isSelected, isDisabled, isInvalid, labelProps, inputProps } =
      useCheckboxGroupItem(ariaProps, state, inputRef);
    const isIndeterminate = ariaProps.isIndeterminate;

    return (
      <label
        {...labelProps}
        {...props}
        ref={ref}
        data-disabled={isDisabled || 'false'}
        data-invalid={isInvalid || 'false'}
        data-selected={isSelected || isIndeterminate || 'false'}
        className={cn(checkboxWrapperVariants({ size }), className)}
      >
        <span
          className={cn(
            checkboxContainerVariants({
              size,
              color,
            }),
          )}
        >
          <input {...inputProps} className="sr-only" ref={inputRef} />
          {isIndeterminate &&
            !isSelected &&
            (intermediateIcon || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            ))}
          {isSelected &&
            (selectedIcon || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ))}
        </span>
        {children && <span>{children}</span>}
      </label>
    );
  },
);
Checkbox.displayName = '@bruhabruh/ui/CheckboxGroupItem';
