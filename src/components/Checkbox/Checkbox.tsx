'use client';

import { cn } from '@/utility';
import React from 'react';
import { useCheckbox } from 'react-aria';
import { useToggleState } from 'react-stately';
import { CheckboxProps } from './Checkbox.types';
import {
  checkboxInputVariants,
  checkboxVariants,
  checkboxWrapperVariants,
} from './Checkbox.variants';

export const Checkbox: React.FC<CheckboxProps> = ({
  size = 'md',
  className,
  isSelected,
  isDisabled,
  isIndeterminate,
  onChange,
  children,
  ...props
}) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const state = useToggleState({
    isSelected,
    isDisabled,
    onChange,
    ...props,
  });
  const { inputProps } = useCheckbox(
    {
      isSelected,
      isDisabled,
      isIndeterminate,
      onChange,
      ...props,
    },
    state,
    ref,
  );

  return (
    <label className={cn(checkboxWrapperVariants({ size }), className)}>
      <input
        {...inputProps}
        disabled={isDisabled}
        className={checkboxInputVariants()}
        ref={ref}
      />
      <span
        className={checkboxVariants({
          size,
          active: state.isSelected || isIndeterminate,
        })}
      >
        {isIndeterminate && !state.isSelected && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
          </svg>
        )}
        {state.isSelected && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        )}
      </span>
      <span>{children}</span>
    </label>
  );
};
Checkbox.displayName = '@bruhabruh/ui/Checkbox';
