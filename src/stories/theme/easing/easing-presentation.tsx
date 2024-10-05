import { cn } from '@/utility';
import React from 'react';

const EasingPlate: React.FC<{
  easing: string;
}> = ({ easing }) => {
  return (
    <div
      className={cn(
        'group flex flex-col items-center gap-2xs typography-title-medium',
      )}
    >
      <div>
        {easing
          .split('-')
          .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
          .join(' ')}
      </div>
      <div
        className={cn(
          'flex h-8 w-64 items-center rounded-full border border-outline',
        )}
      >
        <div
          className={cn(
            'size-8 rounded-full bg-secondary transition duration-1000',
            'scale-50',
            'group-hover:translate-x-56',
            'group-hover:scale-100',
            `easing-${easing}`,
          )}
        />
      </div>
    </div>
  );
};

export const EasingPresentation: React.FC<{
  easings: string[];
}> = ({ easings }) => {
  return (
    <div className="flex flex-wrap justify-between gap-md">
      {easings.map((easing) => (
        <EasingPlate key={easing} easing={easing} />
      ))}
    </div>
  );
};
