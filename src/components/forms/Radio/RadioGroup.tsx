'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { AriaRadioGroupProps, useRadioGroup } from 'react-aria';
import { useRadioGroupState } from 'react-stately';
import { RadioGroupContext } from './RadioGroup.context';
import { RadioGroupProps } from './RadioGroup.types';
import {
  radioGroupDescriptionVariants,
  radioGroupErrorVariants,
  radioGroupLabelVariants,
  radioGroupVariants,
} from './RadioGroup.variants';

const splitProps = ({
  orientation,
  value,
  defaultValue,
  onChange,
  isDisabled,
  isReadOnly,
  name,
  label,
  description,
  errorMessage,
  isRequired,
  isInvalid,
  validationBehavior,
  validate,
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  onFocus,
  onBlur,
  onFocusChange,
  ...restProps
}: RadioGroupProps): [
  Omit<AriaRadioGroupProps, 'errorMessage'> &
    Pick<RadioGroupProps, 'errorMessage'>,
  Omit<RadioGroupProps, keyof AriaRadioGroupProps>,
] => {
  const ariaProps = {
    orientation,
    value,
    defaultValue,
    onChange,
    isDisabled,
    isReadOnly,
    name,
    label,
    description,
    errorMessage,
    isRequired,
    isInvalid,
    validationBehavior,
    validate,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
    onFocus,
    onBlur,
    onFocusChange,
  };
  return [ariaProps, restProps];
};

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ size, asChild, className, children, ...restProps }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);
    const [{ label, description, errorMessage, ...ariaProps }, props] =
      splitProps(restProps);

    const state = useRadioGroupState(ariaProps);
    const {
      radioGroupProps,
      labelProps,
      descriptionProps,
      errorMessageProps,
      isInvalid,
      validationErrors,
    } = useRadioGroup(
      { label, description, errorMessage, ...ariaProps },
      state,
    );

    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        {...props}
        {...radioGroupProps}
        ref={ref}
        className={cn(radioGroupVariants({ size }), className)}
      >
        <span {...labelProps} className={cn(radioGroupLabelVariants({ size }))}>
          {label}
        </span>
        <Slottable>
          {React.isValidElement(children) ? (
            React.cloneElement(
              children,
              children.props,
              <RadioGroupContext.Provider value={state}>
                {children.props.children}
              </RadioGroupContext.Provider>,
            )
          ) : (
            <RadioGroupContext.Provider value={state}>
              {children}
            </RadioGroupContext.Provider>
          )}
        </Slottable>
        {description && !(isInvalid || errorMessage) && (
          <span
            {...descriptionProps}
            className={cn(radioGroupDescriptionVariants({ size }))}
          >
            {description}
          </span>
        )}
        {(isInvalid || errorMessage) && (
          <span
            {...errorMessageProps}
            className={cn(
              radioGroupDescriptionVariants({ size }),
              radioGroupErrorVariants(),
            )}
          >
            {errorMessage || validationErrors.join(' ')}
          </span>
        )}
      </Comp>
    );
  },
);
RadioGroup.displayName = '@bruhabruh/ui/RadioGroup';
