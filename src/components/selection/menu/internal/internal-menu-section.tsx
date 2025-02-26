'use client';

import { Divider } from '@/components/containment';
import { cn } from '@/utility';
import React from 'react';
import { useMenuSection } from 'react-aria';
import { Node, TreeState } from 'react-stately';
import { menuVariants } from '../menu.variants';
import { InternalMenuItem } from './internal-menu-item';
import { Item } from './item';

export const InternalMenuSection: React.FC<{
  section: Node<Item>;
  state: TreeState<Item>;
}> = ({ section, state }) => {
  const { itemProps, groupProps } = useMenuSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  });

  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <Divider
          orientation="horizontal"
          className={cn(menuVariants.divider())}
        />
      )}
      <li {...itemProps}>
        <ul
          {...groupProps}
          className={cn(menuVariants.list({ withScroll: true }))}
        >
          {[...section.childNodes].map((node) => (
            <InternalMenuItem key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
};
