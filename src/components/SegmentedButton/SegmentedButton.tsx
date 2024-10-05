'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { Props } from '@/types';
import { cn } from '@/utility';
import React from 'react';
import { useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';
import { SegmentedButtonProps } from './SegmentedButton.types';
import {
  segmentedButtonContainerVariants,
  segmentedButtonGroupVariants,
  segmentedButtonLabelVariants,
} from './SegmentedButton.variants';

const SegmentedButtonImpl = React.forwardRef<
  HTMLButtonElement,
  SegmentedButtonProps
>(
  (
    {
      color,
      selectedIcon,
      isSelected,
      disabled,
      isDisabled,
      className,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const state = useToggleState({
      elementType: 'button',
      isDisabled: isDisabled || disabled,
      isSelected,
      ...props,
    });
    const { buttonProps } = useToggleButton(
      {
        elementType: 'button',
        isDisabled: isDisabled || disabled,
        isSelected,
        ...props,
      },
      state,
      ref,
    );

    return (
      <button
        type="button"
        {...buttonProps}
        ref={ref}
        className={cn(segmentedButtonContainerVariants({ color }), className)}
        data-disabled={isDisabled || disabled || 'false'}
        data-selected={isSelected || 'false'}
      >
        {isSelected &&
          (selectedIcon || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          ))}
        <span className={cn(segmentedButtonLabelVariants())}>{children}</span>
      </button>
    );
  },
);
SegmentedButtonImpl.displayName = 'SegmentedButton';

const Group: React.FC<Props<'div'>> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn(segmentedButtonGroupVariants(), className)}>
      {children}
    </div>
  );
};

export const SegmentedButton = Object.assign(SegmentedButtonImpl, {
  Group,
});
