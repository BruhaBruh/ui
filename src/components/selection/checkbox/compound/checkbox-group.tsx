'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { useCheckboxGroup } from 'react-aria';
import { useCheckboxGroupState } from 'react-stately';
import { CheckboxGroupContextProvider } from '../context';
import { CheckboxGroupProps } from './checkbox-group.types';
import { checkboxGroupVariants } from './checkbox-group.variants';

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  className,
  children,
  ref: forwardedRef,
  ...props
}) => {
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
      <span {...labelProps} className={cn(checkboxGroupVariants.label())}>
        {props.label}
      </span>
      <CheckboxGroupContextProvider state={state}>
        <section className={cn(checkboxGroupVariants.list())}>
          {children}
        </section>
      </CheckboxGroupContextProvider>
      {props.description && (
        <p
          {...descriptionProps}
          className={cn(checkboxGroupVariants.description())}
        >
          {props.description}
        </p>
      )}
      {isInvalid && (
        <p
          {...errorMessageProps}
          className={cn(checkboxGroupVariants.errorMessage())}
        >
          {validationErrors.join(' ')}
        </p>
      )}
    </section>
  );
};
