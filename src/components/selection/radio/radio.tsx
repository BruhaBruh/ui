'use client';

import { materialDuration, materialEasing } from '@/config';
import { useInteractionsWithRipple, useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { AnimatePresence, motion } from 'motion/react';
import { useRadio } from 'react-aria';
import { useRadioGroupContext } from './context';
import { RadioProps } from './radio.types';
import { radioVariants } from './radio.variants';

export const Radio: React.FC<RadioProps> = ({
  color,
  className,
  children,
  ref: forwardedRef,
  ...props
}) => {
  const ref = useMergedRefs(forwardedRef);
  const state = useRadioGroupContext();
  const { inputProps, labelProps, isSelected, isDisabled } = useRadio(
    props,
    state,
    ref,
  );

  const { interactionsProps, rippleProps } = useInteractionsWithRipple<'label'>(
    { ...labelProps, isDisabled },
  );

  return (
    <label
      {...interactionsProps}
      className={cn(
        radioVariants({ color: state.isInvalid ? 'critical' : color }),
        className,
      )}
      data-is-selected={isSelected}
    >
      <input {...inputProps} className="sr-only" ref={ref} />
      <span
        {...rippleProps}
        aria-hidden={true}
        className={cn(
          radioVariants.markWrapper({
            color: state.isInvalid ? 'critical' : color,
          }),
        )}
      >
        <span
          className={cn(
            radioVariants.mark({
              color: state.isInvalid ? 'critical' : color,
              isSelected,
            }),
          )}
        >
          <AnimatePresence mode="wait">
            {isSelected ? (
              <motion.span
                initial={{ width: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  width: 'var(--spacing-2-5)',
                  height: 'var(--spacing-2-5)',
                }}
                exit={{ width: 0, height: 0 }}
                transition={{
                  duration: materialDuration.asMotion('medium-1'),
                  ease: materialEasing['standard'],
                }}
                className={cn(
                  radioVariants.icon({
                    color: state.isInvalid ? 'critical' : color,
                  }),
                )}
              />
            ) : null}
          </AnimatePresence>
        </span>
      </span>
      {children && (
        <span className={cn(radioVariants.label())}>{children}</span>
      )}
    </label>
  );
};
