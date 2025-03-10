import type { AriaProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';
import type { AriaModalOverlayProps } from 'react-aria';
import type { modalVariants } from './modal.variants';

export type ModalProps = AriaProps<'section', AriaModalOverlayProps> &
  VariantProps<typeof modalVariants> & {
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
  };
