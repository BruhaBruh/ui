'use client';

import { useInteractions } from '@/hooks';
import { cn, withProvider } from '@/utility';
import React from 'react';
import { mergeProps, useField } from 'react-aria';
import { FieldContextProvider } from './context';
import { FieldProps } from './field.types';
import { fieldVariants } from './field.variants';
import { InternalFieldIcon } from './internal/internal-field-icon';

const FieldImpl: React.FC<FieldProps> = ({
  left,
  right,
  isInvalid,
  isDisabled,
  children,
  className,
  ...props
}) => {
  const { labelProps, fieldProps, descriptionProps, errorMessageProps } =
    useField(props);

  const { interactionsProps } = useInteractions<'label'>({
    isDisabled: isDisabled ?? false,
  });

  return (
    <section className={cn(fieldVariants.wrapper(), className)}>
      <label
        {...mergeProps(interactionsProps, labelProps)}
        className={cn(
          fieldVariants({
            isInvalid,
            isDisabled,
          }),
        )}
      >
        <InternalFieldIcon position="left" className="field--left-icon">
          {left}
        </InternalFieldIcon>
        <span
          aria-hidden={Boolean(props.label)}
          className={cn(fieldVariants.content())}
        >
          <span className={cn(fieldVariants.label({ isInvalid }))}>
            {props.label}
          </span>
          {children(fieldProps)}
        </span>
        <InternalFieldIcon position="right" className="field--right-icon">
          {right}
        </InternalFieldIcon>
      </label>
      {props.description && (
        <p {...descriptionProps} className={cn(fieldVariants.description())}>
          {props.description}
        </p>
      )}
      {props.errorMessage && (
        <p
          {...errorMessageProps}
          className={cn(fieldVariants.description({ isErrorMessage: true }))}
        >
          {props.errorMessage}
        </p>
      )}
    </section>
  );
};
FieldImpl.displayName = 'Field';

export const Field = withProvider(FieldContextProvider, FieldImpl);
