import { cn } from '@/utility';
import React from 'react';
import { useTextField } from 'react-aria';
import {
  fieldInputVariants,
  fieldInputWrapperVariants,
} from '../Field.variants';
import { TextAreaFieldProps } from './TextArea.types';

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
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
