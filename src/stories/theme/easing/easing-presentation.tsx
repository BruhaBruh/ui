import { cn } from '@/utility';
import React from 'react';

const EasingPlate: React.FC<{
  name: string;
  easing: string;
}> = ({ name, easing }) => {
  return (
    <div
      className={cn(
        'group flex flex-col items-center gap-3xs typography-title-medium',
      )}
    >
      <div>
        {name
          .split('-')
          .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
          .join(' ')}
      </div>
      <div className="typography-label-large">{easing}</div>
      <div
        className={cn(
          'flex h-8 w-64 items-center rounded-full border border-outline',
        )}
      >
        <div
          className={cn(
            'transition size-8 rounded-full bg-secondary duration-extra-long-4',
            'scale-50',
            'group-hover:translate-x-56',
            'group-hover:scale-100',
            `easing-${name}`,
          )}
        />
      </div>
    </div>
  );
};

export const EasingPresentation: React.FC<{
  easings: [string, string][];
}> = ({ easings }) => {
  return (
    <div className="flex flex-wrap justify-between gap-md">
      {easings.map(([name, easing]) => (
        <EasingPlate key={easing} name={name} easing={easing} />
      ))}
    </div>
  );
};
