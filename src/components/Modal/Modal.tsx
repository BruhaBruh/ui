import React from 'react';
import { ModalCloseButton } from './CloseButton';
import { ModalContent } from './Content';
import { ModalProvider } from './Modal.context';
import { ModalProps } from './Modal.types';
import { ModalTrigger } from './Trigger';

const ModalImpl: React.FC<ModalProps> = ({ children, ...props }) => {
  return <ModalProvider {...props}>{children}</ModalProvider>;
};
ModalImpl.displayName = '@bruhabruh/ui/Modal';

export const Modal = Object.assign(ModalImpl, {
  Trigger: ModalTrigger,
  Content: ModalContent,
  CloseButton: ModalCloseButton,
});
