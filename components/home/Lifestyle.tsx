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

    // Move the image downward through the frame as the section scrolls into view.
    gsap.fromTo(imageRef.current,
      { yPercent: -14, scale: 1.02 },
      { yPercent: 14, scale: 1.02, ease: 'none', scrollTrigger: {
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
    <section ref={containerRef} className="overflow-hidden border-b border-brand-pearl bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          <div className="order-2 relative h-[44vh] w-full overflow-hidden bg-brand-pearl shadow-[0_18px_40px_rgba(27,33,39,0.08)] sm:h-[52vh] lg:order-1 lg:h-[80vh]">
            <div className="absolute inset-x-0 -top-[20%] -bottom-[20%] h-[140%] w-full">
              <div ref={imageRef} className="w-full h-full relative">
                <Image
                  src="/building.png"
                  alt="Luxury Lifestyle"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <div className="order-1 max-w-lg lg:order-2 lg:ml-auto" ref={textContainerRef}>
            <div className="mb-6 flex items-center space-x-3">
              <div className="w-10 h-[1px] bg-brand-granite"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">The Suvastu Lifestyle</span>
            </div>
            
            <h2 className="mb-6 text-[34px] font-semibold leading-[1] tracking-[-0.04em] text-brand-black sm:text-[38px] md:mb-8 md:text-[64px]">
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
