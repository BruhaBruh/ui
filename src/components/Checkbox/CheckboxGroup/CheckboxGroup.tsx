'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { childrenUnwrapper, cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { AriaCheckboxGroupProps, useCheckboxGroup } from 'react-aria';
import { useCheckboxGroupState } from 'react-stately';
import { Checkbox } from './Checkbox';
import { CheckboxGroupContext } from './CheckboxGroup.context';
import { CheckboxGroupProps } from './CheckboxGroup.types';
import {
  checkboxGroupDescriptionVariants,
  checkboxGroupErrorVariants,
  checkboxGroupLabelVariants,
  checkboxGroupListVariants,
  checkboxGroupVariants,
} from './CheckboxGroup.variants';

const splitProps = ({
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
}: CheckboxGroupProps): [
  Omit<AriaCheckboxGroupProps, 'errorMessage'> &
    Pick<CheckboxGroupProps, 'errorMessage'>,
  Omit<CheckboxGroupProps, keyof AriaCheckboxGroupProps>,
] => {
  const ariaProps = {
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

const CheckboxGroupImpl = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ asChild, className, children, ...restProps }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);
    const [{ label, description, errorMessage, ...ariaProps }, props] =
      splitProps(restProps);

    const state = useCheckboxGroupState(ariaProps);
    const {
      groupProps,
      labelProps,
      descriptionProps,
      errorMessageProps,
      isInvalid,
      validationErrors,
    } = useCheckboxGroup(
      { label, description, errorMessage, ...ariaProps },
      state,
    );

    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        {...props}
        {...groupProps}
        ref={ref}
        className={cn('checkbox-group', checkboxGroupVariants(), className)}
      >
        <span
          {...labelProps}
          className={cn('checkbox-group--label', checkboxGroupLabelVariants())}
        >
          {label}
        </span>
        <span
          className={cn('checkbox-group--list', checkboxGroupListVariants())}
        >
          <Slottable>
            {childrenUnwrapper(children, (child) => (
              <CheckboxGroupContext.Provider value={state}>
                {child}
              </CheckboxGroupContext.Provider>
            ))}
          </Slottable>
        </span>
        {description && !(isInvalid || errorMessage) && (
          <span
            {...descriptionProps}
            className={cn(
              'checkbox-group--description',
              checkboxGroupDescriptionVariants(),
            )}
          >
            {description}
          </span>
        )}
        {(isInvalid || errorMessage) && (
          <span
            {...errorMessageProps}
            className={cn(
              'checkbox-group--description',
              'checkbox-group--description---error',
              checkboxGroupDescriptionVariants(),
              checkboxGroupErrorVariants(),
            )}
          >
            {errorMessage || validationErrors.join(' ')}
          </span>
        )}
      </Comp>
    );
  },
);
CheckboxGroupImpl.displayName = 'CheckboxGroup';

export const CheckboxGroup = Object.assign(CheckboxGroupImpl, {
  Item: Checkbox,
});
