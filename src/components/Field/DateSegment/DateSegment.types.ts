import { Props } from '@/types';
import { DateSegment, TimeFieldState } from 'react-stately';

export type DateSegmentProps = Props<'span'> & {
  segment: DateSegment;
  state: TimeFieldState;
};
