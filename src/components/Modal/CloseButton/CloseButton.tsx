import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility/cn';
import React from 'react';
import { useButton } from 'react-aria';
import { ModalCloseButtonProps } from './CloseButton.types';
import { modalCloseButtonVariants } from './CloseButton.variants';

export const ModalCloseButton = React.forwardRef<
  HTMLButtonElement,
  ModalCloseButtonProps
>(({ className, ...props }, forwardedRef) => {
  const ref = useMergedRefs(forwardedRef);

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
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
});
ModalCloseButton.displayName = '@bruhabruh/ui/ModalCloseButton';
