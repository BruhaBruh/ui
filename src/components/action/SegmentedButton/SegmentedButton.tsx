'use client';

import { useInteractionsWithRipple } from '@/hooks';
import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn, withProvider } from '@/utility';
import React from 'react';
import { mergeProps, useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';
import { SegmentedButtonProps } from './SegmentedButton.types';
import {
  segmentedButtonLabelVariants,
  segmentedButtonVariants,
} from './SegmentedButton.variants';
import {
  SegmentedButtonProvider,
  useSegmentedButtonContext,
} from './SegmentedButtonContext/SegmentedButton.context';
import { SegmentedButtonGroup } from './SegmentedButtonGroup';
import { SegmentedButtonSelectedIcon } from './SegmentedButtonSelectedIcon';

const _SegmentedButton = React.forwardRef<
  HTMLButtonElement,
  SegmentedButtonProps
>(
  (
    { color, isSelected, disabled, isDisabled, className, children, ...props },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const [{ selectedIcon }] = useSegmentedButtonContext();

    const { interactionsProps } = useInteractionsWithRipple<'button'>({
      autoFocus: props.autoFocus,
    });

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
        {...mergeProps(buttonProps, interactionsProps)}
        ref={ref}
        className={cn(
          'segmented-button',
          segmentedButtonVariants({ color }),
          className,
        )}
        data-disabled={isDisabled || disabled || false}
        data-selected={isSelected || false}
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
        <span
          className={cn(
            'segmented-button--label',
            segmentedButtonLabelVariants(),
          )}
        >
          {children}
        </span>
      </button>
    );
  },
);
_SegmentedButton.displayName = 'SegmentedButton';

export const SegmentedButton = Object.assign(
  withProvider(SegmentedButtonProvider, _SegmentedButton),
  {
    Group: SegmentedButtonGroup,
    SelectedIcon: SegmentedButtonSelectedIcon,
  },
);
