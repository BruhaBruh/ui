import { cn } from '@/utility';
import React from 'react';
import { useField } from 'react-aria';
import { FieldLeft, FieldProvider, FieldRight } from './Field.context';
import { FieldProps } from './Field.types';
import {
  fieldContentVariants,
  fieldDescriptionVariants,
  fieldErrorVariants,
  fieldLabelVariants,
  fieldVariants,
  fieldWrapperVariants,
} from './Field.variants';
import { NumberField } from './Number';
import { TextField } from './Text';
import { TextAreaField } from './TextArea';

const FieldImpl = React.forwardRef<HTMLLabelElement, FieldProps>(
  (
    {
      label,
      description,
      errorMessage,
      isInvalid,
      left,
      right,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { labelProps, fieldProps, descriptionProps, errorMessageProps } =
      useField({
        ...props,
        label,
        description,
        errorMessage,
        isInvalid,
      });

    const modifiedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...props,
          ...fieldProps,
        });
      }
      return child;
    });

    return (
      <FieldProvider left={left} right={right}>
        <span ref={ref} className={cn(fieldWrapperVariants(), className)}>
          <label
            {...labelProps}
            className={fieldVariants({ error: Boolean(isInvalid) })}
          >
            <FieldLeft />
            <div data-field-content className={fieldContentVariants()}>
              {label && (
                <label {...labelProps} className={fieldLabelVariants()}>
                  {label}
                </label>
              )}
              {modifiedChildren}
            </div>
            <FieldRight />
          </label>
          {description && !errorMessage && (
            <span {...descriptionProps} className={fieldDescriptionVariants()}>
              {description}
            </span>
          )}
          {errorMessage && (
            <span {...errorMessageProps} className={fieldErrorVariants()}>
              {errorMessage}
            </span>
          )}
        </span>
      </FieldProvider>
    );
  },
);
FieldImpl.displayName = '@bruhabruh/ui/Field';

export const Field = Object.assign(FieldImpl, {
  Text: TextField,
  TextArea: TextAreaField,
  Number: NumberField,
});
