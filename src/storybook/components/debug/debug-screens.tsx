import { cn } from '@/utility';
import React from 'react';

export const DebugScreens: React.FC = () => {
  return (
    <section
      className={cn(
        'fixed bottom-sm right-sm rounded-2xs px-xs py-2xs',
        'typography-label-large',
        'bg-secondary-container text-on-secondary-container',
      )}
    >
      <span>Screen:</span> <span className="sm:hidden">none</span>
      <span className="hidden sm:inline md:hidden">sm</span>
      <span className="hidden md:inline lg:hidden">md</span>
      <span className="hidden lg:inline xl:hidden">lg</span>
      <span className="hidden xl:inline 2xl:hidden">xl</span>
      <span className="hidden 2xl:inline">2xl</span>
    </section>
  );
};
