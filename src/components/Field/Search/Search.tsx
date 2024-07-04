import { Button } from '@/components/Button';
import { cn } from '@/utility';
import React from 'react';
import { useSearchField } from 'react-aria';
import { useSearchFieldState } from 'react-stately';
import { useFieldContext } from '../Field.context';
import {
  fieldInputVariants,
  fieldInputWrapperVariants,
} from '../Field.variants';
import { SearchFieldProps } from './Search.types';

export const SearchField: React.FC<SearchFieldProps> = ({
  className,
  ...props
}) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const state = useSearchFieldState(props);
  const { inputProps, clearButtonProps } = useSearchField(props, state, ref);
  const [, setFieldState] = useFieldContext();

  React.useEffect(() => {
    setFieldState((prev) => {
      if (!state.value) {
        return {
          ...prev,
          right: <span aria-hidden="true" className="w-10" />,
        };
      }
      return {
        ...prev,
        right: (
          <Button
            size="sm"
            variant="ghost"
            content="icon"
            color="secondary"
            {...clearButtonProps}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        ),
      };
    });
  }, [state.value, clearButtonProps, setFieldState]);

  return (
    <span className={cn(fieldInputWrapperVariants(), className)}>
      <input
        type="text"
        {...props}
        {...inputProps}
        className={cn(fieldInputVariants(), 'appearance-none')}
        ref={ref}
      />
    </span>
  );
};
SearchField.displayName = '@bruhabruh/ui/SearchField';
