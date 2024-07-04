import { cn } from '@/utility';
import React from 'react';
import { useTimeField } from 'react-aria';
import { useTimeFieldState } from 'react-stately';
import { DateSegment } from '../DateSegment';
import { fieldInputWrapperVariants } from '../Field.variants';
import { TimeFieldProps } from './Time.types';

export const TimeField: React.FC<TimeFieldProps> = ({
  className,
  ...props
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const state = useTimeFieldState({
    ...props,
    locale: 'ru-RU',
  });
  const { fieldProps } = useTimeField(props, state, ref);

  return (
    <span
      className={cn(
        fieldInputWrapperVariants({ visible: true }),
        state.isInvalid && 'invalid',
        className,
      )}
    >
      <span {...props} {...fieldProps} ref={ref}>
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </span>
    </span>
  );
};
TimeField.displayName = '@bruhabruh/ui/TimeField';
