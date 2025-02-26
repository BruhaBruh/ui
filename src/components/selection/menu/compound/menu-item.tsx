import { Item, ItemProps } from 'react-stately';
import { Item as InternalItem } from '../internal';

export const MenuItem = Item as (
  props: ItemProps<InternalItem>,
) => React.JSX.Element;
