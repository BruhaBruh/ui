'use client';

import { materialDuration, materialEasing } from '@/config';
import { useInteractionsWithRipple, useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { IconCheck, IconMinus } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
import { useCheckbox } from 'react-aria';
import { useToggleState } from 'react-stately';
import { CheckboxProps } from './checkbox.types';
import { checkboxVariants } from './checkbox.variants';

export const Checkbox: React.FC<CheckboxProps> = ({
  color,
  className,
  children,
  isReadOnly,
  isRequired,
  isInvalid,
  isSelected,
  isDisabled,
  isIndeterminate = false,
  ref: forwardedRef,
  ...props
}) => {
  const ref = useMergedRefs(forwardedRef);
  const state = useToggleState(props);

  const { inputProps, labelProps } = useCheckbox(
    {
      ...props,
      isDisabled,
      isSelected,
      isIndeterminate,
      isReadOnly,
      isRequired,
      isInvalid,
    },
    state,
    ref,
  );

  const { interactionsProps, rippleProps } = useInteractionsWithRipple<'label'>(
    { ...labelProps, isDisabled },
  );

  return (
    <label
      aria-label={children ? undefined : 'Checkbox'}
      {...interactionsProps}
      className={cn(
        checkboxVariants({ color: isInvalid ? 'critical' : color }),
        className,
      )}
      data-is-selected={isSelected}
      data-is-indeterminate={isIndeterminate}
    >
      <input {...inputProps} className="sr-only" ref={ref} />
      <span
        {...rippleProps}
        aria-hidden={true}
        className={cn(
          checkboxVariants.markWrapper({
            color: isInvalid ? 'critical' : color,
          }),
        )}
      >
        <span
          className={cn(
            checkboxVariants.mark({
              color: isInvalid ? 'critical' : color,
              isSelected,
              isIndeterminate,
            }),
          )}
        >
          <AnimatePresence mode="wait">
            {isSelected ? (
              <motion.span
                key="selected"
                initial={{ width: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  width: 'var(--spacing-4-5)',
                  height: 'var(--spacing-4-5)',
                }}
                exit={{ width: 0, height: 0 }}
                transition={{
                  duration: materialDuration.asMotion('medium-1'),
                  ease: materialEasing['standard'],
                }}
                className={cn(checkboxVariants.icon())}
              >
                <IconCheck />
              </motion.span>
            ) : null}
            {!isSelected && isIndeterminate ? (
              <motion.span
                key="indeterminate"
                initial={{ width: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  width: 'var(--spacing-4-5)',
                  height: 'var(--spacing-4-5)',
                }}
                exit={{ width: 0, height: 0 }}
                transition={{
                  duration: materialDuration.asMotion('medium-1'),
                  ease: materialEasing['standard'],
                }}
                className={cn(checkboxVariants.icon())}
              >
                <IconMinus />
              </motion.span>
            ) : null}
          </AnimatePresence>
        </span>
      </span>
      {children && (
        <span className={cn(checkboxVariants.label())}>{children}</span>
      )}
    </label>
  );
};
