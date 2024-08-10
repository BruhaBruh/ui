'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import React from 'react';
import { useButton } from 'react-aria';
import { useModal } from '../Modal.context';
import { ModalCloseButtonProps } from './CloseButton.types';
import { modalCloseButtonVariants } from './CloseButton.variants';

export const ModalCloseButton = React.forwardRef<
  HTMLButtonElement,
  ModalCloseButtonProps
>(({ children, className, ...props }, forwardedRef) => {
  const ref = useMergedRefs(forwardedRef);
  const { state } = useModal();

  const { buttonProps } = useButton(
    {
      elementType: 'button',
      ...props,
    },
    ref,
  );

  return (
    <button
      type="button"
      {...buttonProps}
      ref={ref}
      className={cn(modalCloseButtonVariants(), className)}
      onClick={state.close}
    >
      {children || (
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
      <span className="sr-only">Закрыть модальное окно</span>
    </button>
  );
});
ModalCloseButton.displayName = '@bruhabruh/ui/ModalCloseButton';
