import { Props } from '@/types/index.types';
import { DateFieldState, DateSegment, TimeFieldState } from 'react-stately';

export type DateSegmentProps = Props<'span'> & {
  segment: DateSegment;
  state: TimeFieldState | DateFieldState;
};
