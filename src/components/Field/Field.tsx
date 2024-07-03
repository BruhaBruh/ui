import { cn } from '@/utility';
import React from 'react';
import { useField, useTextField } from 'react-aria';
import { FieldProps, TextAreaFieldProps, TextFieldProps } from './Field.types';
import {
  fieldContentVariants,
  fieldDescriptionVariants,
  fieldErrorVariants,
  fieldInputVariants,
  fieldInputWrapperVariants,
  fieldLabelVariants,
  fieldVariants,
  fieldWrapperVariants,
} from './Field.variants';

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
      <span ref={ref} className={cn(fieldWrapperVariants(), className)}>
        <label
          {...labelProps}
          className={fieldVariants({ error: Boolean(isInvalid) })}
        >
          {left || <span aria-hidden="true" />}
          <div data-field-content className={fieldContentVariants()}>
            {label && (
              <label {...labelProps} className={fieldLabelVariants()}>
                {label}
              </label>
            )}
            {modifiedChildren}
          </div>
          {right || <span aria-hidden="true" />}
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
    );
  },
);
FieldImpl.displayName = '@bruhabruh/ui/Field';

const TextField: React.FC<TextFieldProps> = ({ className, ...props }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const { inputProps } = useTextField(props, ref);

  return (
    <span className={cn(fieldInputWrapperVariants(), className)}>
      <input
        type="text"
        {...inputProps}
        {...props}
        className={fieldInputVariants()}
        ref={ref}
      />
    </span>
  );
};
TextField.displayName = '@bruhabruh/ui/TextField';

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  className,
  ...props
}) => {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  const { inputProps } = useTextField(
    props,
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
    <span className={cn(fieldInputWrapperVariants(), className)}>
      <textarea
        type="text"
        {...(inputProps as TextAreaFieldProps)}
        {...props}
        rows={1}
        className={fieldInputVariants()}
        ref={ref}
      />
    </span>
  );
};
TextAreaField.displayName = '@bruhabruh/ui/TextAreaField';

export const Field = Object.assign(FieldImpl, {
  Text: TextField,
  TextArea: TextAreaField,
});
