import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import React from 'react';
import { useRadioGroup } from 'react-aria';
import { useRadioGroupState } from 'react-stately';
import { RadioGroupContextProvider } from '../context';
import type { RadioGroupProps } from './radio-group.types';
import { radioGroupVariants } from './radio-group.variants';

export const RadioGroup = React.forwardRef<HTMLElement, RadioGroupProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);

    const state = useRadioGroupState(props);
    const {
      radioGroupProps,
      labelProps,
      descriptionProps,
      errorMessageProps,
      isInvalid,
      validationErrors,
    } = useRadioGroup(props, state);

    return (
      <section
        {...radioGroupProps}
        ref={ref}
        className={cn(radioGroupVariants(), className)}
      >
        {props.label && (
          <span {...labelProps} className={cn(radioGroupVariants.label())}>
            {props.label}
          </span>
        )}
        <RadioGroupContextProvider state={state}>
          {children}
        </RadioGroupContextProvider>
        {props.description && (
          <p
            {...descriptionProps}
            className={cn(radioGroupVariants.description())}
          >
            {props.description}
          </p>
        )}
        {isInvalid && validationErrors.join(' ') && (
          <p
            {...errorMessageProps}
            className={cn(radioGroupVariants.errorMessage())}
          >
            {validationErrors.join(' ')}
          </p>
        )}
      </section>
    );
  },
);
RadioGroup.displayName = 'RadioGroup';
