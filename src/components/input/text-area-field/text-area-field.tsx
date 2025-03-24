import { materialDuration, materialEasing } from '@/config';
import type { Props } from '@/types';
import { cn, mergeProps } from '@/utility';
import { motion } from 'motion/react';
import React from 'react';
import { useFocus, useTextField } from 'react-aria';
import { Field } from '../field';
import type { TextAreaFieldProps } from './text-area-field.types';
import { textAreaFieldVariants } from './text-area-field.variants';

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
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
  const ref = React.useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = React.useState<string>('auto');

  const { inputProps } = useTextField<'textarea'>(
    {
      ...props,
      label,
      description,
      errorMessage,
      isDisabled,
      isInvalid,
      inputElementType: 'textarea',
      onChange: (value) => {
        props.onChange?.(value);
        const textarea = ref.current;
        if (textarea) {
          if (textarea) {
            textarea.style.height = 'auto';
            setHeight(`${textarea.scrollHeight}px`);
          }
        }
      },
    },
    ref,
  );
  const [inFocus, setInFocus] = React.useState(false);
  const { focusProps } = useFocus({
    onFocusChange: (isFocused) => setInFocus(isFocused),
  });

  const isExpanded = Boolean(
    inFocus || props.placeholder || inputProps.value || props.value,
  );

  return (
    <Field
      className={cn(textAreaFieldVariants(), className)}
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
        <motion.textarea
          {...(mergeProps(
            props as Props<'textarea'>,
            fieldProps,
            focusProps,
            inputProps,
          ) as React.ComponentProps<typeof motion.textarea>)}
          animate={{
            height: isExpanded ? height : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{
            duration: materialDuration.asMotion('medium-1'),
            ease: materialEasing['standard'],
          }}
          className={cn(textAreaFieldVariants.textArea())}
          rows={1}
          ref={ref}
        />
      )}
    </Field>
  );
};
