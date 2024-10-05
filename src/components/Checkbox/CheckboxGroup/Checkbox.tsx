'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import React from 'react';
import { AriaCheckboxGroupItemProps, useCheckboxGroupItem } from 'react-aria';
import {
  checkboxContainerVariants,
  checkboxTargetVariants,
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
        className={cn(checkboxWrapperVariants(), className)}
      >
        <span className={cn(checkboxTargetVariants())}>
          <span
            className={cn(
              checkboxContainerVariants({
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                </svg>
              ))}
            {isSelected &&
              (selectedIcon || (
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
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              ))}
          </span>
        </span>
        {children && <span>{children}</span>}
      </label>
    );
  },
);
Checkbox.displayName = 'CheckboxGroupItem';
