import { useDebounced } from '@/hooks';
import { cn } from '@/utility';
import React from 'react';

export const useFPSCounter = (initial = 30) => {
  const [fps, setFPS] = React.useState(initial);
  const debouncedFps = useDebounced(fps, 100);

  React.useEffect(() => {
    let frameCount = 0;
    let startTime = performance.now();

    function checkFPS() {
      frameCount++;
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;

      if (elapsed >= 1000) {
        const currentFPS = (frameCount / elapsed) * 1000;
        setFPS(currentFPS);
        frameCount = 0;
        startTime = currentTime;
      }

      requestAnimationFrame(checkFPS);
    }

    const frameId = requestAnimationFrame(checkFPS);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return debouncedFps;
};

export const DebugFPS: React.FC = () => {
  const fps = useFPSCounter();

  return (
    <section
      className={cn(
        'fixed right-sm top-sm rounded-2xs px-xs py-2xs',
        'typography-label-large',
        fps < 60
          ? 'bg-critical-container text-on-critical-container'
          : 'bg-info-container text-on-info-container',
      )}
    >
      {fps.toFixed(0)} FPS
    </section>
  );
};
