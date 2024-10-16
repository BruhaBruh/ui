'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { cn } from '@/utility';
import React from 'react';
import { AriaSwitchProps, useSwitch } from 'react-aria';
import { useToggleState } from 'react-stately';
import { SwitchProps } from './Switch.types';
import { switchThumbVariants, switchVariants } from './Switch.variants';

const splitProps = ({
  defaultSelected,
  isSelected,
  onChange,
  value,
  isDisabled,
  isReadOnly,
  autoFocus,
  onFocus,
  onBlur,
  onFocusChange,
  onKeyDown,
  onKeyUp,
  'aria-controls': ariaControls,
  excludeFromTabOrder,
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  'aria-errormessage': ariaErrorMessage,
  name,
  ...restProps
}: SwitchProps): [
  AriaSwitchProps,
  Omit<SwitchProps, keyof AriaSwitchProps>,
] => {
  const ariaProps = {
    defaultSelected,
    isSelected,
    onChange,
    value,
    isDisabled,
    isReadOnly,
    autoFocus,
    onFocus,
    onBlur,
    onFocusChange,
    onKeyDown,
    onKeyUp,
    'aria-controls': ariaControls,
    excludeFromTabOrder,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
    'aria-errormessage': ariaErrorMessage,
    name,
  };
  return [ariaProps, restProps];
};

export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>(
  (
    { selectedIcon, unselectedIcon, color, className, ...restProps },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [ariaProps, props] = splitProps(restProps);
    const state = useToggleState(ariaProps);
    const { isSelected, isDisabled, isPressed, labelProps, inputProps } =
      useSwitch(ariaProps, state, inputRef);

    const Comp = ariaProps['aria-labelledby'] ? 'span' : 'label';

    return (
      <Comp
        {...labelProps}
        {...props}
        ref={ref}
        data-disabled={isDisabled || false}
        data-selected={isSelected || false}
        data-pressed={isPressed || false}
        data-icon={isSelected ? Boolean(selectedIcon) : Boolean(unselectedIcon)}
        className={cn(
          'switch',
          switchVariants({
            color,
          }),
          className,
        )}
      >
        <input {...inputProps} className="sr-only" ref={inputRef} />
        <span className={cn('switch--thumb', switchThumbVariants({ color }))}>
          {isSelected ? selectedIcon : unselectedIcon}
        </span>
      </Comp>
    );
  },
);
Switch.displayName = 'Switch';
