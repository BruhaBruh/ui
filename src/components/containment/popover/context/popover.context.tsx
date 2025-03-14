import { createContext } from '@/utility';
import type { AriaPopoverProps, OverlayTriggerProps } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

export type PopoverContextState = {
  state?: OverlayTriggerState;
  popoverProps?: Omit<AriaPopoverProps, 'triggerRef' | 'popoverRef'> &
    Partial<OverlayTriggerProps>;
  triggerRef?: React.RefObject<HTMLElement | null>;
  triggerPopoverProps?: { id?: string };
};

const { useStore, useSetStore, Provider } = createContext<PopoverContextState>(
  {},
  {
    storeName: 'Popover',
  },
);

export const PopoverContextProvider = Provider;

export const usePopoverContext = useStore;

export const usePopoverSetContext = useSetStore;
