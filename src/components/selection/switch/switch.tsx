import { materialDuration, materialEasing } from '@/config';
import { useInteractions, useMergedRefs } from '@/hooks';
import { cn, withProvider } from '@/utility';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { useSwitch } from 'react-aria';
import { useToggleState } from 'react-stately';
import { SwitchContextProvider, useSwitchContext } from './context';
import type { SwitchProps } from './switch.types';
import { switchVariants } from './switch.variants';

const SwitchImpl = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ color, className, children, ...props }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);
    const [{ selectedIcon, unselectedIcon }] = useSwitchContext();
    const state = useToggleState(props);

    const { inputProps, labelProps, isSelected, isDisabled } = useSwitch(
      props,
      state,
      ref,
    );

    const { interactionsProps } = useInteractions<'label'>({
      ...labelProps,
      isDisabled,
    });

    return (
      <label
        {...interactionsProps}
        className={cn(switchVariants({ color }), className)}
        data-is-selected={isSelected}
      >
        <input {...inputProps} className="sr-only" ref={ref} />
        <span
          aria-hidden={true}
          className={cn(switchVariants.track({ color, isSelected }))}
        >
          <span
            className={cn(switchVariants.thumbWrapper({ color, isSelected }))}
          >
            <span
              className={cn(
                switchVariants.thumb({
                  size: unselectedIcon ? 'icon' : 'default',
                  color,
                  isSelected,
                }),
              )}
            >
              <AnimatePresence mode="wait">
                {isSelected && selectedIcon ? (
                  <motion.span
                    key="selected"
                    initial={{ width: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      width: 'var(--spacing-4)',
                      height: 'var(--spacing-4)',
                    }}
                    exit={{ width: 0, height: 0 }}
                    transition={{
                      duration: materialDuration.asMotion('medium-1'),
                      ease: materialEasing['standard'],
                    }}
                    className={cn(switchVariants.icon())}
                  >
                    {selectedIcon}
                  </motion.span>
                ) : null}
                {!isSelected && unselectedIcon ? (
                  <motion.span
                    key="unselected"
                    initial={{ width: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      width: 'var(--spacing-4)',
                      height: 'var(--spacing-4)',
                    }}
                    exit={{ width: 0, height: 0 }}
                    transition={{
                      duration: materialDuration.asMotion('medium-1'),
                      ease: materialEasing['standard'],
                    }}
                    className={cn(switchVariants.icon())}
                  >
                    {unselectedIcon}
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </span>
          </span>
        </span>
        {children && (
          <span className={cn(switchVariants.label())}>{children}</span>
        )}
      </label>
    );
  },
);
SwitchImpl.displayName = 'Switch';

export const Switch = withProvider(SwitchContextProvider, SwitchImpl);
