import { materialDuration, materialEasing } from '@/config';
import type { Props } from '@/types';
import { cn, mergeProps } from '@/utility';
import { motion } from 'motion/react';
import React from 'react';
import { useFocus, useNumberField } from 'react-aria';
import { useNumberFieldState } from 'react-stately';
import { Field } from '../field';
import type { NumberFieldProps } from './number-field.types';
import { numberFieldVariants } from './number-field.variants';

export const NumberField: React.FC<NumberFieldProps> = ({
  left,
  right,
  isDisabled,
  isInvalid,
  fieldClassName,
  className,
  label,
  description,
  errorMessage,
  ...props
}) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const state = useNumberFieldState({ ...props, locale: 'ru' });
  const { groupProps, inputProps } = useNumberField(
    { ...props, label, description, errorMessage, isDisabled, isInvalid },
    state,
    ref,
  );
  const [inFocus, setInFocus] = React.useState(false);
  const { focusProps } = useFocus({
    onFocusChange: (isFocused) => setInFocus(isFocused),
  });

  const isExpanded = Boolean(
    inFocus || props.placeholder || ref.current?.value || props.value,
  );

  return (
    <Field
      {...groupProps}
      className={cn(numberFieldVariants(), className)}
      left={left}
      right={right}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      label={label}
      description={description}
      errorMessage={errorMessage}
      fieldClassName={fieldClassName}
    >
      {(fieldProps) => (
        <motion.input
          {...(mergeProps(
            props as Props<'input'>,
            fieldProps,
            focusProps,
            inputProps,
          ) as React.ComponentProps<typeof motion.input>)}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{
            duration: materialDuration.asMotion('medium-1'),
            ease: materialEasing['standard'],
          }}
          className={cn(numberFieldVariants.input())}
          ref={ref}
        />
      )}
    </Field>
  );
};
