'use client';

import { cn } from '@/utility';
import React from 'react';
import { Overlay, useModalOverlay } from 'react-aria';
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
  const ref = React.useRef<HTMLDivElement>(null);
  const { state, overlayProps } = useModal();
  const { modalProps, underlayProps } = useModalOverlay(
    { isDismissable: true, ...props },
    state,
    ref,
  );

  if (!state.isOpen) return null;

  return (
    <Overlay>
      <div {...underlayProps} className={modalUnderlayVariants()}>
        <div
          {...modalProps}
          {...overlayProps}
          ref={ref}
          className={cn(modalContentVariants(), className)}
        >
          {children}
        </div>
      </div>
    </Overlay>
  );
};
ModalContent.displayName = '@bruhabruh/ui/ModalContent';
