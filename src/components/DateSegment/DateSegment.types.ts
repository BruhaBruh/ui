import { PropsWithAsChild } from '@/types';
import { DateFieldState, DateSegment, TimeFieldState } from 'react-stately';

export type DateSegmentProps = PropsWithAsChild<'span'> & {
  segment: DateSegment;
  state: TimeFieldState | DateFieldState;
};
