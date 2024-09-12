'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import React from 'react';
import { AriaSwitchProps, useSwitch } from 'react-aria';
import { useToggleState } from 'react-stately';
import { SwitchProps } from './Switch.types';
import {
  switchContainerVariants,
  switchWrapperVariants,
} from './Switch.variants';

const splitProps = ({
  defaultSelected,
  isSelected,
  onChange,
  value,
  isDisabled,
  isReadOnly,
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
}: SwitchProps): [
  AriaSwitchProps,
  Omit<SwitchProps, keyof AriaSwitchProps>,
] => {
  const ariaProps = {
    defaultSelected,
    isSelected,
    onChange,
    value,
    isDisabled,
    isReadOnly,
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

export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>(
  ({ size, color, className, children, ...restProps }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [ariaProps, props] = splitProps(restProps);
    const state = useToggleState(ariaProps);
    const { isSelected, isDisabled, labelProps, inputProps } = useSwitch(
      ariaProps,
      state,
      inputRef,
    );

    return (
      <label
        {...labelProps}
        {...props}
        ref={ref}
        data-disabled={isDisabled || 'false'}
        data-selected={isSelected || 'false'}
        className={cn(switchWrapperVariants({ size }), className)}
      >
        <span
          className={cn(
            switchContainerVariants({
              size,
              color,
            }),
          )}
        >
          <input {...inputProps} className="sr-only" ref={inputRef} />
        </span>
        {children && <span>{children}</span>}
      </label>
    );
  },
);
Switch.displayName = '@bruhabruh/ui/Switch';
