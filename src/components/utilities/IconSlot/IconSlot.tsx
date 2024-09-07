'use client';

import { useMergedRefs } from '@/hooks/use-merge-refs';
import { Props } from '@/types';
import { cn } from '@/utility';
import React from 'react';

export const IconSlot = React.forwardRef<SVGSVGElement, Props<'svg'>>(
  ({ className, ...props }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);

    React.useLayoutEffect(() => {
      if (!ref.current) return;
      const element = ref.current;
      if (element.childNodes.length !== 1) return;
      const child = element.childNodes[0] as SVGElement;
      for (let i = 0; i < child.attributes.length; i++) {
        const attr = child.attributes[i];
        if (attr.name === 'class') {
          element.setAttribute(
            attr.name,
            cn(attr.value, element.getAttribute(attr.name)),
          );
        } else {
          element.setAttribute(attr.name, attr.value);
        }
      }
      while (child.firstChild) {
        element.insertBefore(child.firstChild, child);
      }

      element.removeChild(child);
    }, [className, ref]);

    return <svg {...props} className={className} ref={ref} />;
  },
);
IconSlot.displayName = '@bruhabruh/ui';
