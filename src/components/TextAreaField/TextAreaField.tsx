'use client';

import { Props } from '@/types';
import { cn } from '@/utility';
import React from 'react';
import { useTextField } from 'react-aria';
import {
  fieldContentVariants,
  fieldDescriptionVariants,
  fieldErrorVariants,
  fieldInputVariants,
  fieldInputWrapperVariants,
  fieldLabelVariants,
  fieldVariants,
  fieldWrapperVariants,
} from '../Field';
import { TextAreaFieldProps } from './TextAreaField.types';

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  description,
  errorMessage,
  left,
  right,
  isInvalid: isInvalidProp,
  isDisabled,
  onChange,
  className,
  ...props
}) => {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  const {
    inputProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
  } = useTextField(
    {
      label,
      description,
      errorMessage,
      isInvalid: isInvalidProp,
      isDisabled,
      onChange,
      ...props,
    },
    ref as unknown as React.RefObject<HTMLInputElement>,
  );

  React.useEffect(() => {
    const listener = () => {
      if (!ref.current) return;
      ref.current.style.height = '0px';
      const { scrollHeight } = ref.current;

      ref.current.style.height = `${scrollHeight}px`;
    };

    ref.current?.addEventListener('input', listener);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current?.removeEventListener('input', listener);
    };
  }, [ref]);

  return (
    <span className={cn(fieldWrapperVariants(), className)}>
      <label
        {...labelProps}
        className={fieldVariants({ isInvalid, isDisabled })}
      >
        {left || <span aria-hidden="true" />}
        <div data-field-content className={fieldContentVariants()}>
          {label && (
            <label {...labelProps} className={fieldLabelVariants()}>
              {label}
            </label>
          )}
          <span className={cn(fieldInputWrapperVariants(), className)}>
            <textarea
              type="text"
              placeholder=""
              {...props}
              {...(inputProps as Props<'textarea'>)}
              rows={1}
              className={fieldInputVariants()}
              ref={ref}
            />
          </span>
        </div>
        {right || <span aria-hidden="true" />}
      </label>
      {description && !errorMessage && (
        <span {...descriptionProps} className={fieldDescriptionVariants()}>
          {description}
        </span>
      )}
      {(errorMessage || validationErrors.length > 0) && (
        <span {...errorMessageProps} className={fieldErrorVariants()}>
          {errorMessage || validationErrors.join(', ')}
        </span>
      )}
    </span>
  );
};
TextAreaField.displayName = '@bruhabruh/ui/TextAreaField';
