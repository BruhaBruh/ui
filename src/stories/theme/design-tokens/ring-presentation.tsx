import { cn } from '@/utility';
import React from 'react';

const RingPlate: React.FC<{
  ring: string;
}> = ({ ring }) => {
  return (
    <div
      className={cn(
        'p-3 aspect-video ring-4 rounded-lg typography-h4 flex items-center justify-center',
        `ring-${ring}`,
      )}
    >
      {ring[0].toUpperCase() + ring.slice(1)}
    </div>
  );
};

export const RingPresentation: React.FC<{
  rings: string[];
}> = ({ rings }) => {
  return (
    <div className="mb-4 grid grid-cols-2 gap-4">
      <div className="grid grid-cols-3 gap-4 p-4 bg-background text-foreground rounded-xl border border-primary">
        {rings.map((ring) => (
          <RingPlate key={ring} ring={ring} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 p-4 dark bg-background text-foreground rounded-xl border border-primary">
        {rings.map((ring) => (
          <RingPlate key={ring} ring={ring} />
        ))}
      </div>
    </div>
  );
};
