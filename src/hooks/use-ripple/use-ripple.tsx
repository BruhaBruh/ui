'use client';

import React from 'react';
import { PressEvent } from 'react-aria';

const defaultAnimationDuration = 200;
const longAnimationDuration = 1000;

const n = (ripple: HTMLSpanElement) => {
  const startTime = parseFloat(ripple.dataset.startTime || '1000');
  const endTime = parseFloat(ripple.dataset.endTime || '1000');
  const delta = endTime - startTime;
  const duration = performance.now() - startTime;
  const t = duration / delta;
  return Math.min(1, Math.max(t, 0));
};

const applyStartTimeWithNewDuration = (
  r: HTMLSpanElement,
  duration: number,
) => {
  const ripple = r;
  const t = n(ripple);
  const now = performance.now();
  const endTime = now + duration;
  const delta = endTime - now;
  const startTime = now - delta * t;
  ripple.dataset.startTime = `${startTime}`;
  ripple.dataset.endTime = `${endTime}`;
};

const startAnimate = (
  r: HTMLSpanElement,
  duration: number,
  fn: (r: HTMLSpanElement) => void,
) => {
  const ripple = r;
  ripple.dataset.startTime = `${performance.now()}`;
  ripple.dataset.endTime = `${parseFloat(ripple.dataset.startTime) + duration}`;
  fn(ripple);
};

const animateOpacity = (r: HTMLSpanElement) => {
  const ripple = r;
  const t = n(ripple);
  if (t !== null) ripple.style.setProperty('--ripple-opacity', `${1 - t}`);
  if (t === 1) {
    ripple.remove();
    return;
  }
  requestAnimationFrame(() => animateOpacity(r));
};

const animateScale = (r: HTMLSpanElement) => {
  const ripple = r;
  const t = n(ripple);
  if (t !== null) ripple.style.setProperty('--ripple-scale', `${t}`);
  if (t === 1) {
    ripple.dataset.animationEnded = 'true';
    if (ripple.dataset.pressed === 'false')
      startAnimate(ripple, defaultAnimationDuration, animateOpacity);
    return;
  }
  requestAnimationFrame(() => animateScale(r));
};

export const useRipple = () => {
  const onEnd = React.useCallback((e: PressEvent) => {
    const target = e.target;
    const ripples = target.querySelectorAll<HTMLSpanElement>('span.ripple');
    ripples.forEach((r) => {
      const ripple = r;
      if (ripple.dataset.pressed === 'false') return;
      ripple.dataset.pressed = 'false';
      if (ripple.dataset.animationEnded === 'false')
        applyStartTimeWithNewDuration(ripple, defaultAnimationDuration);
      if (ripple.dataset.animationEnded === 'true')
        startAnimate(ripple, defaultAnimationDuration, animateOpacity);
    });
  }, []);

  const onStart = React.useCallback(
    (e: PressEvent) => {
      const target = e.target;
      const diameter = Math.max(target.clientWidth, target.clientHeight) * 2;
      const ripple = document.createElement('span');
      ripple.dataset.pressed = 'true';
      ripple.dataset.animationEnded = 'false';
      ripple.className = 'ripple';
      ripple.style.setProperty('--ripple-x', `${e.x}px`);
      ripple.style.setProperty('--ripple-y', `${e.y}px`);
      ripple.style.setProperty('--ripple-diameter', `${diameter}px`);

      target.appendChild(ripple);

      startAnimate(ripple, longAnimationDuration, animateScale);

      ripple.addEventListener(
        'mouseleave',
        () => {
          onEnd(e);
        },
        { once: true },
      );
    },
    [onEnd],
  );

  return { onStart, onEnd };
};
