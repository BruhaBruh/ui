import { cn } from '@/utility';
import React from 'react';

const EasingPlate: React.FC<{
  easing: string;
}> = ({ easing }) => {
  return (
    <div
      className={cn('group p-3 typography-h4 flex flex-col items-center gap-3')}
    >
      <div>
        {easing
          .split('-')
          .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
          .join(' ')}
      </div>
      <div
        className={cn(
          'h-8 w-64 border border-outline rounded-full flex items-center',
        )}
      >
        <div
          className={cn(
            'w-8 h-8 bg-secondary rounded-full transition duration-1000',
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
    <div className="grid grid-cols-3 gap-6 mb-8">
      {easings.map((easing) => (
        <EasingPlate key={easing} easing={easing} />
      ))}
    </div>
  );
};
