'use client';

import React from 'react';
import {
  BaseIconButton,
  BaseIconButtonProps,
  BaseToggleableIconButton,
  BaseToggleableIconButtonProps,
} from './base';
import { IconButtonProps } from './IconButton.types';

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ toggleable, ...props }, forwardedRef) => {
    if (toggleable === true) {
      return (
        <BaseToggleableIconButton
          {...(props as BaseToggleableIconButtonProps)}
          ref={forwardedRef}
        />
      );
    }
    return (
      <BaseIconButton {...(props as BaseIconButtonProps)} ref={forwardedRef} />
    );
  },
);
IconButton.displayName = 'IconButton';
