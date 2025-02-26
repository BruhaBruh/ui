import { Section, SectionProps } from 'react-stately';
import { Item } from '../internal';

export const MenuSection = Section as (
  props: SectionProps<Item>,
) => React.JSX.Element;
