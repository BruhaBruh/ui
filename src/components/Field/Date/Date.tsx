import { cn } from '@/utility';
import { createCalendar } from '@internationalized/date';
import React from 'react';
import { useDateField } from 'react-aria';
import { useDateFieldState } from 'react-stately';
import { DateSegment } from '../DateSegment';
import { fieldInputWrapperVariants } from '../Field.variants';
import { DateFieldProps } from './Date.types';

export const DateField: React.FC<DateFieldProps> = ({
  className,
  ...props
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const state = useDateFieldState({
    ...props,
    locale: 'ru-RU',
    createCalendar,
  });
  const { fieldProps } = useDateField(props, state, ref);

  return (
    <span
      className={cn(
        fieldInputWrapperVariants({ visible: true }),
        state.isInvalid && 'invalid',
        className,
      )}
    >
      <span {...props} {...fieldProps} defaultValue={undefined} ref={ref}>
        {state.segments
          .filter((segment) => segment.type !== 'timeZoneName')
          .map((segment, i) => (
            <DateSegment key={i} segment={segment} state={state} />
          ))}
      </span>
    </span>
  );
};
DateField.displayName = '@bruhabruh/ui/DateField';
