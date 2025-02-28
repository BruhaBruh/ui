'use client';

import { materialDuration, materialEasing } from '@/config';
import { Props } from '@/types';
import { cn, mergeProps } from '@/utility';
import { motion } from 'motion/react';
import React from 'react';
import { useFocus, useTextField } from 'react-aria';
import { Field } from '../field';
import { TextFieldProps } from './text-field.types';
import { textFieldVariants } from './text-field.variants';

export const TextField: React.FC<TextFieldProps> = ({
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
  const { inputProps } = useTextField(
    { ...props, label, description, errorMessage, isDisabled, isInvalid },
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
      className={cn(textFieldVariants(), className)}
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
          className={cn(textFieldVariants.input())}
          ref={ref}
        />
      )}
    </Field>
  );
};
