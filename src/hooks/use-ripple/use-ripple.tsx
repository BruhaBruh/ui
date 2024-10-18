'use client';

import React from 'react';
import { PressEvent } from 'react-aria';
import {
  RippleAnimationFn,
  RippleControl,
  UseRippleOptions,
} from './use-ripple.types';

class AnimationController {
  #ripple: HTMLSpanElement;
  #startAnimation: RippleAnimationFn;
  #endAnimation: RippleAnimationFn;
  #shortAnimationDuration: number;
  #longAnimationDuration: number;

  constructor(
    ripple: HTMLSpanElement,
    startAnimation: RippleAnimationFn,
    endAnimation: RippleAnimationFn,
    shortAnimationDuration: number,
    longAnimationDuration: number,
  ) {
    this.#ripple = ripple;
    this.#startAnimation = startAnimation;
    this.#endAnimation = endAnimation;
    this.#shortAnimationDuration = shortAnimationDuration;
    this.#longAnimationDuration = longAnimationDuration;
  }

  private get startTime(): number {
    return parseFloat(this.#ripple.dataset.startTime || '0');
  }

  private set startTime(value: number) {
    this.#ripple.dataset.startTime = `${value}`;
  }

  private get endTime(): number {
    return parseFloat(this.#ripple.dataset.endTime || '0');
  }

  private set endTime(value: number) {
    this.#ripple.dataset.endTime = `${value}`;
  }

  private get t(): number {
    const delta = this.endTime - this.startTime;
    const duration = performance.now() - this.startTime;
    if (delta <= 0) return 0;
    const t = duration / delta;
    return Math.min(1, Math.max(t, 0));
  }

  private get isPressed(): boolean {
    return this.#ripple.dataset.pressed === 'true';
  }

  private set isPressed(value: boolean) {
    this.#ripple.dataset.pressed = `${value}`;
  }

  private get isAnimationEnded(): boolean {
    return this.#ripple.dataset.animationEnded === 'true';
  }

  private set isAnimationEnded(value: boolean) {
    this.#ripple.dataset.animationEnded = `${value}`;
  }

  private get rippleControl(): RippleControl {
    return {
      scale: (value) => {
        this.#ripple.style.setProperty('--ripple-scale', `${value}`);
      },
      opacity: (value) => {
        this.#ripple.style.setProperty('--ripple-opacity', `${value}`);
      },
    };
  }

  animate = () => {
    this.startAnimate(this.startAnimation, this.#longAnimationDuration);
  };

  handleEndPress = () => {
    if (!this.isPressed) return;
    this.isPressed = false;
    if (this.isAnimationEnded) {
      this.startAnimate(this.endAnimation, this.#shortAnimationDuration);
      return;
    }
    this.changeDuration(this.#shortAnimationDuration);
  };

  private startAnimate = (fn: () => void, duration: number) => {
    this.startTime = performance.now();
    this.endTime = this.startTime + duration;
    fn();
  };

  private startAnimation = () => {
    this.#startAnimation(this.rippleControl, this.t);
    if (this.t === 1) {
      this.isAnimationEnded = true;
      if (!this.isPressed) {
        this.startAnimate(this.endAnimation, this.#shortAnimationDuration);
      }
      return;
    }
    requestAnimationFrame(this.startAnimation);
  };

  private endAnimation = () => {
    this.#endAnimation(this.rippleControl, this.t);
    if (this.t === 1) {
      this.#ripple.remove();
      return;
    }
    requestAnimationFrame(this.endAnimation);
  };

  private changeDuration = (duration: number) => {
    const now = performance.now();
    const endTime = now + duration;
    const delta = endTime - now;
    const startTime = now - delta * this.t;
    this.startTime = startTime;
    this.endTime = endTime;
  };
}

export const useRipple = ({
  startAnimation = ({ scale }, t) => scale(t),
  endAnimation = ({ opacity }, t) => opacity(1 - t),
  shortAnimationDuration = 200,
  longAnimationDuration = 1000,
  centered = false,
}: Partial<UseRippleOptions> = {}) => {
  const onEnd = React.useCallback(
    (e: PressEvent) => {
      const target = e.target;
      const ripples = target.querySelectorAll<HTMLSpanElement>('span.ripple');
      ripples.forEach((ripple) => {
        new AnimationController(
          ripple,
          startAnimation,
          endAnimation,
          shortAnimationDuration,
          longAnimationDuration,
        ).handleEndPress();
      });
    },
    [
      endAnimation,
      longAnimationDuration,
      shortAnimationDuration,
      startAnimation,
    ],
  );

  const onStart = React.useCallback(
    (e: PressEvent) => {
      const target = e.target;
      const diameter = Math.max(target.clientWidth, target.clientHeight) * 2;
      const ripple = document.createElement('span');
      ripple.dataset.pressed = 'true';
      ripple.dataset.animationEnded = 'false';
      ripple.className = 'ripple';
      if (centered) {
        ripple.style.setProperty('--ripple-x', `${target.clientWidth / 2}px`);
        ripple.style.setProperty('--ripple-y', `${target.clientHeight / 2}px`);
      } else {
        ripple.style.setProperty('--ripple-x', `${e.x}px`);
        ripple.style.setProperty('--ripple-y', `${e.y}px`);
      }
      ripple.style.setProperty('--ripple-diameter', `${diameter}px`);
      ripple.setAttribute('aria-hidden', 'true');
      target.appendChild(ripple);

      new AnimationController(
        ripple,
        startAnimation,
        endAnimation,
        shortAnimationDuration,
        longAnimationDuration,
      ).animate();

      ripple.addEventListener(
        'mouseleave',
        () => {
          onEnd(e);
        },
        { once: true },
      );
    },
    [
      endAnimation,
      longAnimationDuration,
      onEnd,
      shortAnimationDuration,
      startAnimation,
    ],
  );

  return { onStart, onEnd };
};
