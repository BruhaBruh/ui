'use client';

import { materialDuration, materialEasing } from '@/config';
import { useInteractionsWithRipple, useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { IconCheck, IconMinus } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
import { useCheckboxGroupItem } from 'react-aria';
import { useCheckboxGroupContext } from '../context';
import { CheckboxGroupItemProps } from './checkbox-group-item.types';
import { checkboxGroupVariants } from './checkbox-group.variants';

export const CheckboxGroupItem: React.FC<CheckboxGroupItemProps> = ({
  color,
  className,
  children,
  isIndeterminate = false,
  ref: forwardedRef,
  ...props
}) => {
  const ref = useMergedRefs(forwardedRef);
  const state = useCheckboxGroupContext();
  const { inputProps, labelProps, isSelected, isInvalid, isDisabled } =
    useCheckboxGroupItem({ ...props, isIndeterminate }, state, ref);

  const { interactionsProps, rippleProps } = useInteractionsWithRipple<'label'>(
    { ...labelProps, isDisabled },
  );

  return (
    <label
      {...interactionsProps}
      className={cn(
        checkboxGroupVariants.item({ color: isInvalid ? 'critical' : color }),
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
          checkboxGroupVariants.item.markWrapper({
            color: isInvalid ? 'critical' : color,
          }),
        )}
      >
        <span
          className={cn(
            checkboxGroupVariants.item.mark({
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
                className={cn(checkboxGroupVariants.item.icon())}
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
                className={cn(checkboxGroupVariants.item.icon())}
              >
                <IconMinus />
              </motion.span>
            ) : null}
          </AnimatePresence>
        </span>
      </span>
      {children && (
        <span className={cn(checkboxGroupVariants.item.label())}>
          {children}
        </span>
      )}
    </label>
  );
};
