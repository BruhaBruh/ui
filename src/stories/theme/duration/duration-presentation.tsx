import { cn } from '@/utility';
import React from 'react';

const DurationPlate: React.FC<{
  duration: string;
}> = ({ duration }) => {
  return (
    <div
      className={cn(
        'group flex flex-col items-center gap-2xs typography-title-medium',
      )}
    >
      <div>
        {duration
          .split('-')
          .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
          .join(' ')}
      </div>
      <div
        className={cn(
          'flex h-8 w-48 items-center rounded-full border border-outline',
        )}
      >
        <div
          className={cn(
            'size-8 rounded-full bg-secondary transition ease-linear',
            'scale-50',
            'group-hover:translate-x-40',
            'group-hover:scale-100',
            `duration-${duration}`,
          )}
        />
      </div>
    </div>
  );
};

export const DurationPresentation: React.FC<{
  durations: string[];
}> = ({ durations }) => {
  return (
    <div className="flex flex-wrap justify-between gap-md">
      {durations.map((duration) => (
        <DurationPlate key={duration} duration={duration} />
      ))}
    </div>
  );
};
