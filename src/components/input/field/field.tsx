import type { Props } from '@/types';
import { cn, mergeProps, withProvider } from '@/utility';
import type React from 'react';
import { useField, useFocusRing, useHover } from 'react-aria';
import { FieldContextProvider } from './context';
import type { FieldProps } from './field.types';
import { fieldVariants } from './field.variants';
import { InternalFieldIcon } from './internal/internal-field-icon';

const FieldImpl: React.FC<FieldProps> = ({
  left,
  right,
  isInvalid,
  isDisabled,
  fieldClassName,
  children,
  className,
  ...props
}) => {
  const { labelProps, fieldProps, descriptionProps, errorMessageProps } =
    useField(props);

  const { focusProps, isFocused, isFocusVisible } = useFocusRing({
    isTextInput: true,
  });
  const {
    focusProps: focusVisibleWithinProps,
    isFocused: isFocusedWithin,
    isFocusVisible: isFocusVisibleWithin,
  } = useFocusRing({
    ...props,
    within: true,
  });
  const { hoverProps, isHovered } = useHover({
    isDisabled: isDisabled ?? false,
  });

  return (
    <section className={cn(fieldVariants.wrapper(), className)}>
      <label
        {...mergeProps(
          focusProps as Props<'label'>,
          focusVisibleWithinProps,
          hoverProps,
          labelProps,
        )}
        className={cn(
          fieldVariants({
            isInvalid,
            isDisabled,
          }),
          fieldClassName,
        )}
        data-is-disabled={isDisabled ?? false}
        data-is-hovered={isHovered}
        data-in-focus={isFocused}
        data-in-focus-within={isFocusedWithin}
        data-in-focus-visible={isFocusVisible}
        data-in-focus-visible-within={isFocusVisibleWithin}
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
