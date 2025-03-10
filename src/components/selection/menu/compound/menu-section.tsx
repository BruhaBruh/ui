import type { SectionProps } from 'react-stately';
import { Section } from 'react-stately';
import type { Item } from '../internal';

export const MenuSection = Section as (
  props: SectionProps<Item>,
) => React.JSX.Element;
