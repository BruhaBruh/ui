import { materialDuration } from '@/config';
import type { Props } from '@/types';
import { animate } from 'motion';
import type { AnimationPlaybackControls } from 'motion/react';
import React from 'react';
import type { PressEvent } from 'react-aria';
import { usePress } from 'react-aria';
import type { UseRippleOptions } from './use-ripple.types';

type RippleData = {
  id: string | undefined;
  isAnimationEnded: boolean;
  isPressed: boolean;
  animation: 'entering' | 'exiting' | null;
  controls: AnimationPlaybackControls | undefined;
};

type Controls = {
  get: (id: string) => AnimationPlaybackControls | undefined;
  set: (id: string, controls: AnimationPlaybackControls) => void;
  remove: (id: string) => void;
};

const rippleData = (
  ripple: HTMLSpanElement,
  controls: Controls,
): RippleData => {
  const r = ripple;
  const data: RippleData = {
    get id(): string | undefined {
      return r.dataset.id;
    },
    set id(value: string | undefined) {
      r.dataset.id = value;
    },
    get isAnimationEnded(): boolean {
      return r.dataset.isAnimationEnded === 'true';
    },
    set isAnimationEnded(value: boolean) {
      r.dataset.isAnimationEnded = `${value}`;
    },
    get isPressed(): boolean {
      return r.dataset.isPressed === 'true';
    },
    set isPressed(value: boolean) {
      r.dataset.isPressed = `${value}`;
    },
    get animation(): 'entering' | 'exiting' | null {
      const animation = r.dataset.animation;
      if (animation === 'entering' || animation === 'exiting') {
        return animation;
      }
      return null;
    },
    set animation(value: 'entering' | 'exiting' | null) {
      r.dataset.animation = value || undefined;
    },
    get controls(): AnimationPlaybackControls | undefined {
      if (!this.id) return undefined;
      return controls.get(this.id);
    },
    set controls(ctrls: AnimationPlaybackControls | undefined) {
      if (!this.id) return;
      if (ctrls) {
        controls.set(this.id, ctrls);
      } else {
        controls.remove(this.id);
      }
    },
  };

  return data;
};

export type UseRipple<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown> = 'div',
> = typeof useRipple<T>;

const speedDelta = 2;

export const useRipple = <
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown> = 'div',
>({
  duration = materialDuration['extra-long-4'],
  centered = false,
}: Partial<UseRippleOptions> = {}): Props<T> => {
  const animationControls = React.useRef<[string, AnimationPlaybackControls][]>(
    [],
  );
  const controls = React.useMemo<Controls>(() => {
    const c: Controls = {
      get(id: string): AnimationPlaybackControls | undefined {
        const tuple = animationControls.current.find((v) => v[0] === id);
        return tuple?.[1];
      },
      set(id: string, ctrls: AnimationPlaybackControls): void {
        const current = this.get(id);
        current?.cancel();

        animationControls.current = [
          ...animationControls.current.filter((v) => v[0] !== id),
          [id, ctrls],
        ];
      },
      remove(id: string): void {
        const current = this.get(id);
        current?.cancel();
        animationControls.current = animationControls.current.filter(
          (v) => v[0] !== id,
        );
      },
    };

    return c;
  }, [animationControls]);

  const animateEnter = React.useCallback(
    (ripple: HTMLSpanElement, onComplete: () => void) => {
      return animate(
        ripple,
        { '--ripple-scale': 1 },
        {
          duration: (duration * 2) / 1000,
          onComplete: () => {
            onComplete();
          },
        },
      );
    },
    [duration],
  );

  const animateExit = React.useCallback(
    (ripple: HTMLSpanElement, onComplete: () => void) => {
      return animate(
        ripple,
        { opacity: 0 },
        {
          duration: duration / (speedDelta * 2) / 1000,
          onComplete: () => {
            onComplete();
          },
        },
      );
    },
    [duration],
  );

  const onPressUp = React.useCallback(
    (e: PressEvent) => {
      const target = e.target;
      const ripples = target.querySelectorAll<HTMLSpanElement>('span.ripple');
      ripples.forEach((ripple) => {
        const data = rippleData(ripple, controls);
        data.isPressed = false;
        if (data.animation !== 'entering') return;
        if (data.isAnimationEnded) {
          data.animation = 'exiting';
          data.isAnimationEnded = false;
          data.controls = animateExit(ripple, () => {
            ripple.remove();
          });
          return;
        }
        if (!data.controls) return;
        data.controls.speed = speedDelta * 2;
      });
    },
    [animateExit, controls],
  );

  const onPressStart = React.useCallback(
    (e: PressEvent) => {
      const target = e.target;
      const ripple = document.createElement('span');
      const data = rippleData(ripple, controls);
      const diameter = Math.max(target.clientWidth, target.clientHeight) * 2;
      if (centered) {
        ripple.style.setProperty('--ripple-x', `${target.clientWidth / 2}px`);
        ripple.style.setProperty('--ripple-y', `${target.clientHeight / 2}px`);
      } else {
        ripple.style.setProperty('--ripple-x', `${e.x}px`);
        ripple.style.setProperty('--ripple-y', `${e.y}px`);
      }
      ripple.className = 'ripple';
      ripple.style.setProperty('--ripple-diameter', `${diameter}px`);
      ripple.setAttribute('aria-hidden', 'true');
      target.append(ripple);

      data.id = `ripple-${Math.random().toString(16).substring(2)}`;
      data.isPressed = true;
      data.isAnimationEnded = false;
      data.animation = 'entering';
      data.controls = animateEnter(ripple, () => {
        if (!data.isPressed) {
          data.animation = 'exiting';
          data.controls = animateExit(ripple, () => {
            ripple.remove();
          });
          return;
        }
        data.isAnimationEnded = true;
      });
    },
    [animateEnter, animateExit, centered, controls],
  );

  const { pressProps } = usePress({
    onPressStart,
    onPressUp,
    shouldCancelOnPointerExit: true,
  });

  return {
    ...pressProps,
    onMouseLeave: (e: MouseEvent) => onPressUp(e as unknown as PressEvent),
  } as unknown as Props<T>;
};
