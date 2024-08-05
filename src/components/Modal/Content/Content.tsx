'use client';

import { cn } from '@/utility';
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
  closeIcon,
  children,
  className,
  ...props
}) => {
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
          <ModalCloseButton onClick={state.close}>
            {closeIcon || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            )}
          </ModalCloseButton>
          {children}
        </div>
      </div>
    </Overlay>
  );
};
ModalContent.displayName = '@bruhabruh/ui/ModalContent';
