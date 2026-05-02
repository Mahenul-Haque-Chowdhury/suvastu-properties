'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Lifestyle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !textContainerRef.current) return;

    // Image Parallax
    gsap.fromTo(imageRef.current,
      { yPercent: -15, scale: 1.1 },
      { yPercent: 15, ease: 'none', scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
      }}
    );

    // Text Reveal Stagger
    const elements = textContainerRef.current.children;
    gsap.fromTo(elements,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', stagger: 0.2, scrollTrigger: {
          trigger: textContainerRef.current,
          start: 'top 80%',
      }}
    );

  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white overflow-hidden border-b border-brand-pearl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative h-[60vh] lg:h-[80vh] w-full overflow-hidden bg-brand-pearl shadow-[0_18px_40px_rgba(27,33,39,0.08)]">
            <div className="absolute inset-x-0 -top-[20%] -bottom-[20%] h-[140%] w-full">
              <div ref={imageRef} className="w-full h-full relative">
                <Image
                  src="https://picsum.photos/seed/lifestyle/1000/1400"
                  alt="Luxury Lifestyle"
                  fill
                  className="object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 max-w-lg lg:ml-auto" ref={textContainerRef}>
            <div className="mb-6 flex items-center space-x-3">
              <div className="w-10 h-[1px] bg-brand-granite"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">The Suvastu Lifestyle</span>
            </div>
            
            <h2 className="mb-8 text-[42px] font-semibold leading-[0.98] tracking-[-0.04em] text-brand-black md:text-[64px]">
              An ecosystem of uncompromising luxury.
            </h2>
            
            <p className="text-[15px] leading-8 text-brand-charcoal md:text-base">
              Every Suvastu property is conceived as a sanctuary. From grand lobbies to intelligent floor plans, we combine aesthetic brilliance with functional mastery. Experience amenities designed not just to impress, but to transform your daily rituals.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
