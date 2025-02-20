'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { useRadioGroup } from 'react-aria';
import { useRadioGroupState } from 'react-stately';
import { RadioGroupContextProvider } from '../context';
import { RadioGroupProps } from './radio-group.types';
import { radioGroupVariants } from './radio-group.variants';

export const RadioGroup: React.FC<RadioGroupProps> = ({
  className,
  children,
  ref: forwardedRef,
  ...props
}) => {
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
};
