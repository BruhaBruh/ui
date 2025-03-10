import { Portal } from '@/components/utility';
import { useMergedRefs } from '@/hooks';
import type { Props } from '@/types';
import { cn, mergeProps } from '@/utility';
import { AnimatePresence } from 'motion/react';
import React from 'react';
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

    return (
      <Portal>
        <AnimatePresence mode="wait">
          {state?.isOpen && (
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
          )}
        </AnimatePresence>
      </Portal>
    );
  },
);
ModalContent.displayName = 'ModalContent';
