'use client';

import { ReactLenis } from 'lenis/react';

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.045,
        duration: 1.9,
        smoothWheel: true,
        syncTouch: true,
        wheelMultiplier: 0.82,
        touchMultiplier: 0.95,
      }}
    >
      {children}
    </ReactLenis>
  );
}
