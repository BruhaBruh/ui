'use client';

import { PopoverContent, PopoverContentProps } from '@/components/containment';
import { cn } from '@/utility';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { AriaMenuProps, useMenu } from 'react-aria';
import { useTreeState } from 'react-stately';
import { useMenuSetContext } from '../context';
import { InternalMenuItem, InternalMenuSection, Item } from '../internal';
import { menuVariants } from '../menu.variants';

export type MenuContentProps = AriaMenuProps<Item> &
  VariantProps<typeof menuVariants> &
  Pick<PopoverContentProps, 'position' | 'className'> & {
    checkIcon?: React.ReactNode;
  };

export const MenuContent: React.FC<MenuContentProps> = ({
  position = 'bottom',
  className,
  checkIcon,
  ...props
}) => {
  const ref = React.useRef<HTMLUListElement>(null);
  const state = useTreeState(props);
  // const [{ triggerMenuProps }] = useMenuContext();
  const setState = useMenuSetContext();

  const { menuProps } = useMenu({ ...props }, state, ref);

  React.useEffect(() => {
    setState((p) => ({
      ...p,
      state,
    }));

    return () => setState((p) => ({ ...p, state: undefined }));
  }, [setState, state]);

  return (
    <PopoverContent
      position={position}
      className={cn(menuVariants(), className)}
    >
      <ul {...menuProps} className={cn(menuVariants.list())} ref={ref}>
        {state &&
          [...state.collection].map((item) =>
            item.type === 'section' ? (
              <InternalMenuSection
                key={item.key}
                section={item}
                state={state}
              />
            ) : (
              <InternalMenuItem
                key={item.key}
                checkIcon={checkIcon}
                item={item}
                state={state}
              />
            ),
          )}
      </ul>
    </PopoverContent>
  );
};
