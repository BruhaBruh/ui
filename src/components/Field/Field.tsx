'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';
import { FieldProps } from './Field.types';
import {
  fieldContainerVariants,
  fieldInnerContainerVariants,
  fieldInputVariants,
  fieldLabelVariants,
  fieldSupportTextVariants,
  fieldWrapperVariants,
} from './Field.variants';

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      left,
      right,
      label,
      input,
      description,
      descriptionProps,
      isDisabled,
      isInvalid,
      isVisible,
      labelId,
      labelProps,
      className,
      children,
      asChild,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);

    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        {...props}
        ref={ref}
        className={cn('field', fieldWrapperVariants(), className)}
        data-disabled={isDisabled || 'false'}
        data-invalid={isInvalid || 'false'}
        data-visible={isVisible || 'false'}
      >
        {asChild && <Slottable>{children}</Slottable>}
        <label
          {...labelProps}
          aria-labelledby={labelId}
          className={cn(
            'field--container',
            fieldContainerVariants(),
            labelProps?.className,
          )}
        >
          {left}
          <span
            className={cn(
              'field--inner-container',
              fieldInnerContainerVariants(),
            )}
          >
            <span
              id={labelId}
              className={cn('field--label', fieldLabelVariants())}
            >
              {label}
            </span>
            {input(fieldInputVariants())}
          </span>
          {right}
        </label>
        {description && (
          <p
            {...descriptionProps}
            className={cn(
              'field--description',
              fieldSupportTextVariants(),
              descriptionProps?.className,
            )}
          >
            {description}
          </p>
        )}
      </Comp>
    );
  },
);
Field.displayName = 'Field';
