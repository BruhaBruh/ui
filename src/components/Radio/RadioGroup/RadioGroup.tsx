'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { childrenUnwrapper, cn } from '@/utility';
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
  radioGroupListVariants,
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
  ({ asChild, className, children, ...restProps }, forwardedRef) => {
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
        className={cn('radio-group', radioGroupVariants(), className)}
      >
        <span
          {...labelProps}
          className={cn('radio-group--label', radioGroupLabelVariants())}
        >
          {label}
        </span>
        <span className={cn('radio-group--list', radioGroupListVariants())}>
          <Slottable>
            {childrenUnwrapper(children, (child) => (
              <RadioGroupContext.Provider value={state}>
                {child}
              </RadioGroupContext.Provider>
            ))}
          </Slottable>
        </span>
        {description && !(isInvalid || errorMessage) && (
          <span
            {...descriptionProps}
            className={cn(
              'radio-group--description',
              radioGroupDescriptionVariants(),
            )}
          >
            {description}
          </span>
        )}
        {(isInvalid || errorMessage) && (
          <span
            {...errorMessageProps}
            className={cn(
              'radio-group--description',
              'radio-group--description---error',
              radioGroupDescriptionVariants(),
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
RadioGroup.displayName = 'RadioGroup';
