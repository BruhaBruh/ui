import { cn } from '@/utility';
import React from 'react';
import { useNumberField } from 'react-aria';
import { useNumberFieldState } from 'react-stately';
import { useFieldContext } from '../Field.context';
import {
  fieldInputVariants,
  fieldInputWrapperVariants,
} from '../Field.variants';
import { NumberFieldButton } from './Button';
import { NumberFieldProps } from './Number.types';
import { numberFieldButtonsVariants } from './Number.variants';

export const NumberField: React.FC<NumberFieldProps> = ({
  className,
  ...props
}) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const state = useNumberFieldState({ ...props, locale: 'ru-RU' });
  const { inputProps, incrementButtonProps, decrementButtonProps } =
    useNumberField(props, state, ref);
  const [, setFieldState] = useFieldContext();

  React.useEffect(() => {
    setFieldState((prev) => {
      return {
        ...prev,
        right: (
          <span className={numberFieldButtonsVariants()}>
            <NumberFieldButton {...incrementButtonProps}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M13.03 10.53a.75.75 0 0 1-1.06 0L8 6.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06"
                  clipRule="evenodd"
                />
              </svg>
            </NumberFieldButton>
            <NumberFieldButton {...decrementButtonProps}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06"
                  clipRule="evenodd"
                />
              </svg>
            </NumberFieldButton>
          </span>
        ),
      };
    });
  }, [decrementButtonProps, incrementButtonProps, setFieldState]);

  return (
    <span className={cn(fieldInputWrapperVariants(), className)}>
      <input
        type="number"
        {...props}
        {...inputProps}
        className={fieldInputVariants()}
        ref={ref}
      />
    </span>
  );
};
NumberField.displayName = '@bruhabruh/ui/NumberField';
