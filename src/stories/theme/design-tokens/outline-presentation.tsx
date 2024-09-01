import { cn } from '@/utility';
import React from 'react';

const OutlinePlate: React.FC<{
  outline: string;
}> = ({ outline }) => {
  return (
    <div
      className={cn(
        'p-3 aspect-video outline outline-4 rounded-lg typography-h4 flex items-center justify-center',
        `outline-${outline}`,
      )}
    >
      {outline[0].toUpperCase() + outline.slice(1)}
    </div>
  );
};

export const OutlinePresentation: React.FC<{
  outlines: string[];
}> = ({ outlines }) => {
  return (
    <div className="mb-4 grid grid-cols-2 gap-4">
      <div className="grid grid-cols-3 gap-4 p-4 bg-background text-foreground rounded-xl border border-primary">
        {outlines.map((outline) => (
          <OutlinePlate key={outline} outline={outline} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 p-4 dark bg-background text-foreground rounded-xl border border-primary">
        {outlines.map((outline) => (
          <OutlinePlate key={outline} outline={outline} />
        ))}
      </div>
    </div>
  );
};
