/** eslint-disable no-negated-condition */
import { useInteractionsWithRipple } from '@/hooks';
import type { Props } from '@/types';
import { cn, mergeProps, withProvider } from '@/utility';
import { IconCheck } from '@tabler/icons-react';
import React from 'react';
import { useMenuItem } from 'react-aria';
import type { Node, TreeState } from 'react-stately';
import { MenuItemContextProvider, useMenuItemContext } from '../context';
import { menuVariants } from '../menu.variants';
import { InternalMenuItemIcon } from './internal-menu-item-icon';
import type { Item } from './item';

const InternalMenuItemImpl: React.FC<{
  item: Node<Item>;
  state: TreeState<Item>;
  checkIcon?: React.ReactNode;
}> = ({ item, state, checkIcon }) => {
  const ref = React.useRef<HTMLLIElement>(null);
  const [{ left, right }] = useMenuItemContext();

  const { menuItemProps, isSelected, isDisabled } = useMenuItem<Item>(
    { key: item.key },
    state,
    ref,
  );

  const { interactionsProps, rippleProps } =
    useInteractionsWithRipple<'button'>({
      isDisabled: isDisabled,
    });

  return (
    <li
      {...(mergeProps(
        menuItemProps,
        interactionsProps,
        rippleProps,
      ) as Props<'li'>)}
      ref={ref}
      className={cn(menuVariants.item({ isSelected }))}
      data-is-selected={isSelected ?? false}
    >
      <InternalMenuItemIcon position="left" className="menu--icon-left">
        {isSelected
          ? (checkIcon ?? <IconCheck key="menu--check-icon" />)
          : left}
      </InternalMenuItemIcon>
      <span className={cn(menuVariants.label())}>{item.rendered}</span>
      <InternalMenuItemIcon position="right" className="menu--icon-right">
        {right}
      </InternalMenuItemIcon>
    </li>
  );
};

export const InternalMenuItem = withProvider(
  MenuItemContextProvider,
  InternalMenuItemImpl,
);
