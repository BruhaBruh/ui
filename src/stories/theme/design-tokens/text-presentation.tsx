import { cn } from '@/utility';
import React from 'react';

export const TextPresentation: React.FC<{
  color: string;
  className?: string;
}> = ({ color: rawColor, className }) => {
  const color = rawColor
    .split('-')
    .map((v) => v[0].toUpperCase() + v.slice(1).toLowerCase())
    .join(' ');

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="flex bg-background text-foreground border border-primary p-4 rounded-xl">
        <div
          className={cn(
            'transition flex-1 flex flex-col items-center justify-center text-foreground border border-primary p-4 rounded-xl',
            `text-${rawColor}`,
            className,
          )}
        >
          <h3 className="typography-large">
            {color[0].toUpperCase() + color.slice(1)}
          </h3>
          {!rawColor.startsWith('on') && (
            <p className="typography-small">On Light</p>
          )}
        </div>
      </div>
      <div className="dark flex bg-background text-foreground border border-primary p-4 rounded-xl">
        <div
          className={cn(
            'transition flex-1 flex flex-col items-center justify-center text-foreground border border-primary p-4 rounded-xl',
            `text-${rawColor}`,
            className,
          )}
        >
          <h3 className="typography-large">
            {color[0].toUpperCase() + color.slice(1)}
          </h3>
          {!rawColor.startsWith('on') && (
            <p className="typography-small">On Dark</p>
          )}
        </div>
      </div>
    </div>
  );
};
