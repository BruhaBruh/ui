'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import React from 'react';
import { useCheckboxGroup } from 'react-aria';
import { useCheckboxGroupState } from 'react-stately';
import { CheckboxGroupContextProvider } from '../context';
import { CheckboxGroupProps } from './checkbox-group.types';
import { checkboxGroupVariants } from './checkbox-group.variants';

export const CheckboxGroup = React.forwardRef<HTMLElement, CheckboxGroupProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);

    const state = useCheckboxGroupState(props);
    const {
      groupProps,
      labelProps,
      descriptionProps,
      errorMessageProps,
      isInvalid,
      validationErrors,
    } = useCheckboxGroup(props, state);

    return (
      <section
        {...groupProps}
        ref={ref}
        className={cn(checkboxGroupVariants(), className)}
      >
        {props.label && (
          <span {...labelProps} className={cn(checkboxGroupVariants.label())}>
            {props.label}
          </span>
        )}
        <CheckboxGroupContextProvider state={state}>
          {children}
        </CheckboxGroupContextProvider>
        {props.description && (
          <p
            {...descriptionProps}
            className={cn(checkboxGroupVariants.description())}
          >
            {props.description}
          </p>
        )}
        {isInvalid && validationErrors.join(' ') && (
          <p
            {...errorMessageProps}
            className={cn(checkboxGroupVariants.errorMessage())}
          >
            {validationErrors.join(' ')}
          </p>
        )}
      </section>
    );
  },
);
CheckboxGroup.displayName = 'CheckboxGroup';
