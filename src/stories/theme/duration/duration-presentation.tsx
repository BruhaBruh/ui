import { cn } from '@/utility';
import React from 'react';

const DurationPlate: React.FC<{
  duration: string;
}> = ({ duration }) => {
  return (
    <div
      className={cn('group p-3 typography-h4 flex flex-col items-center gap-3')}
    >
      <div>
        {duration
          .split('-')
          .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
          .join(' ')}
      </div>
      <div
        className={cn(
          'h-8 w-48 border border-outline rounded-full flex items-center',
        )}
      >
        <div
          className={cn(
            'w-8 h-8 bg-secondary rounded-full transition ease-linear',
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
    <div className="grid grid-cols-4 gap-6 mb-8">
      {durations.map((duration) => (
        <DurationPlate key={duration} duration={duration} />
      ))}
    </div>
  );
};
