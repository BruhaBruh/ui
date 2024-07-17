'use client';

import { useCN } from '@/providers';
import React from 'react';
import { Overlay, useModalOverlay } from 'react-aria';
import { ModalCloseButton } from '../CloseButton';
import { useModal } from '../Modal.context';
import { ModalContentProps } from './Content.types';
import {
  modalContentVariants,
  modalUnderlayVariants,
} from './Content.variants';

export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  className,
  ...props
}) => {
  const cn = useCN();

  const ref = React.useRef<HTMLDivElement>(null);
  const [state] = useModal((s) => s.state);
  const [overlayProps] = useModal((s) => s.overlayProps);
  const { modalProps, underlayProps } = useModalOverlay(
    { isDismissable: true, ...props },
    state || {
      isOpen: false,
      setOpen: () => {},
      open: () => {},
      close: () => {},
      toggle: () => {},
    },
    ref,
  );

  if (!state?.isOpen) return null;

  return (
    <Overlay>
      <div {...underlayProps} className={modalUnderlayVariants()}>
        <div
          {...modalProps}
          {...overlayProps}
          ref={ref}
          className={cn(modalContentVariants(), className)}
        >
          <ModalCloseButton onClick={state.close} />
          {children}
        </div>
      </div>
    </Overlay>
  );
};
ModalContent.displayName = '@bruhabruh/ui/ModalContent';
