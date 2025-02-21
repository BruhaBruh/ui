'use client';

import { Portal } from '@/components/utility';
import { useMergedRefs } from '@/hooks';
import { Props } from '@/types';
import { cn } from '@/utility';
import React from 'react';
import { mergeProps } from 'react-aria';
import { useModalContext } from '../context';
import { modalVariants } from '../modal.variants';

export type ModalContentProps = Props<'section', 'children'> & {
  children: (close: () => void) => React.ReactElement;
};

export const ModalContent = React.forwardRef<HTMLElement, ModalContentProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);
    const [{ state, modalProps, overlayProps, underlayProps }] =
      useModalContext();

    if (!state?.isOpen) return null;

    return (
      <Portal>
        <section
          {...underlayProps}
          onClick={(e) => {
            if (e.currentTarget === e.target) state.close();
            underlayProps?.onMouseDown?.(e);
          }}
          onTouchStart={(e) => {
            if (e.currentTarget === e.target) state.close();
            underlayProps?.onTouchStart?.(e);
          }}
          className={cn(modalVariants.underlay())}
        >
          <section
            {...mergeProps(props, modalProps)}
            className={cn(modalVariants(), className)}
            ref={ref}
          >
            {React.cloneElement(children(state.close), overlayProps)}
          </section>
        </section>
      </Portal>
    );
  },
);
ModalContent.displayName = 'ModalContent';
