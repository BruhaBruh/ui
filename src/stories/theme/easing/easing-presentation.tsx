import { cn } from '@/utility';
import React from 'react';

const EasingPlate: React.FC<{
  name: string;
  easing: string;
}> = ({ name, easing }) => {
  return (
    <div
      className={cn(
        'gap-3xs typography-title-medium group flex flex-col items-center',
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
          'border-outline flex h-8 w-64 items-center rounded-full border',
        )}
      >
        <div
          className={cn(
            'bg-secondary size-8 rounded-full transition duration-1000',
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
    <div className="gap-md flex flex-wrap justify-between">
      {easings.map(([name, easing]) => (
        <EasingPlate key={easing} name={name} easing={easing} />
      ))}
    </div>
  );
};
