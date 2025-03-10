import type { ItemProps } from 'react-stately';
import { Item } from 'react-stately';
import type { Item as InternalItem } from '../internal';

export const MenuItem = Item as (
  props: ItemProps<InternalItem>,
) => React.JSX.Element;
