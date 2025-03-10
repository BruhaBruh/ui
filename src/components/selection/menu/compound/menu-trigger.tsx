import type { PopoverTriggerProps } from '@/components/containment';
import { PopoverTrigger } from '@/components/containment';
import { useMergedRefs } from '@/hooks';
import { mergeProps } from '@/utility';
import React from 'react';
import type { AriaMenuTriggerProps } from 'react-aria';
import { useMenuTrigger } from 'react-aria';
import { useMenuTriggerState } from 'react-stately';
import { useMenuSetContext } from '../context';
import type { Item } from '../internal';

export type MenuTriggerProps = AriaMenuTriggerProps & PopoverTriggerProps;

export const MenuTrigger = React.forwardRef<
  HTMLButtonElement,
  MenuTriggerProps
>(({ type, trigger, isDisabled, children, ...props }, forwardedRef) => {
  const ref = useMergedRefs(forwardedRef);
  const setState = useMenuSetContext();

  const state = useMenuTriggerState(props);
  const { menuTriggerProps, menuProps } = useMenuTrigger<Item>(
    { type, trigger, isDisabled },
    state,
    ref,
  );

  React.useEffect(() => {
    setState((p) => ({
      ...p,
      triggerMenuProps: menuProps,
    }));

    return () => setState((p) => ({ ...p, triggerMenuProps: undefined }));
  }, [setState, state, menuProps]);

  return (
    <PopoverTrigger {...mergeProps(props, menuTriggerProps)} ref={ref}>
      {children}
    </PopoverTrigger>
  );
});
MenuTrigger.displayName = 'MenuTrigger';
