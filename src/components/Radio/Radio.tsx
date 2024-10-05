'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import React from 'react';
import { AriaRadioProps, useRadio } from 'react-aria';
import { RadioProps } from './Radio.types';
import {
  radioContainerVariants,
  radioTargetVariants,
  radioWrapperVariants,
} from './Radio.variants';
import { RadioGroupContext } from './RadioGroup/RadioGroup.context';

const splitProps = ({
  onChange,
  value,
  isDisabled,
  autoFocus,
  onFocus,
  onBlur,
  onFocusChange,
  onKeyDown,
  onKeyUp,
  'aria-controls': ariaControls,
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  'aria-errormessage': ariaErrorMessage,
  ...restProps
}: RadioProps): [AriaRadioProps, Omit<RadioProps, keyof AriaRadioProps>] => {
  const ariaProps = {
    onChange,
    value,
    isDisabled,
    autoFocus,
    onFocus,
    onBlur,
    onFocusChange,
    onKeyDown,
    onKeyUp,
    'aria-controls': ariaControls,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
    'aria-errormessage': ariaErrorMessage,
  };
  return [ariaProps, restProps];
};

export const Radio = React.forwardRef<HTMLLabelElement, RadioProps>(
  ({ color, className, children, ...restProps }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [ariaProps, props] = splitProps(restProps);
    const state = React.useContext(RadioGroupContext);
    const { isSelected, isDisabled, labelProps, inputProps } = useRadio(
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
        className={cn(radioWrapperVariants(), className)}
      >
        <span className={cn(radioTargetVariants())}>
          <span className={cn(radioContainerVariants({ color }))}>
            <input {...inputProps} className="sr-only" ref={inputRef} />
            <span />
          </span>
        </span>
        {children && <span>{children}</span>}
      </label>
    );
  },
);
Radio.displayName = 'Radio';
