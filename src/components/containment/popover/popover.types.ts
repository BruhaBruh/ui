import { AriaPopoverProps, OverlayTriggerProps } from 'react-aria';

export type PopoverProps = React.PropsWithChildren<
  Omit<AriaPopoverProps, 'triggerRef' | 'popoverRef' | 'placement'> &
    Partial<OverlayTriggerProps>
>;
