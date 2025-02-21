import { AriaProps } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaModalOverlayProps } from 'react-aria';
import { modalVariants } from './modal.variants';

export type ModalProps = AriaProps<'section', AriaModalOverlayProps> &
  VariantProps<typeof modalVariants> & {
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
  };
