'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !bgRef.current || !textContainerRef.current) return;

    // Background Parallax
    gsap.fromTo(bgRef.current,
      { yPercent: -20 },
      { yPercent: 20, ease: 'none', scrollTrigger: {
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
          trigger: containerRef.current,
          start: 'top 80%',
      }}
    );

  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden border-b border-brand-pearl py-20 md:py-48">
      <div 
        ref={bgRef} 
        className="absolute inset-x-0 -top-[20%] -bottom-[20%] h-[140%] w-full bg-brand-pearl opacity-50 z-0" 
      />
      
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center relative z-10" ref={textContainerRef}>
        <div className="mb-8 flex items-center space-x-3">
          <div className="w-10 h-[1px] bg-brand-granite"></div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Begin the Journey</span>
          <div className="w-10 h-[1px] bg-brand-granite"></div>
        </div>
        
        <h2 className="mb-6 text-[34px] font-semibold leading-[0.98] tracking-[-0.045em] text-brand-black sm:text-[40px] md:mb-8 md:text-[82px]">
          Ready to elevate <br /> your everyday?
        </h2>
        
        <p className="mb-10 max-w-2xl text-[15px] leading-7 text-brand-charcoal md:mb-14 md:text-base md:leading-8">
          Choose the conversation that fits you best, whether you are searching for your next address or unlocking the full potential of your land.
        </p>

        <div className="grid w-full grid-cols-1 gap-6 text-left md:grid-cols-2">
          <Link
            href="/contact#buyer-form"
            className="group relative overflow-hidden rounded-[24px] border border-brand-pearl bg-white px-6 py-6 shadow-[0_16px_40px_rgba(27,33,39,0.08)] transition-transform duration-300 hover:-translate-y-1 md:rounded-[28px] md:px-8 md:py-8"
          >
            <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-brand-pearl/90 blur-2xl transition-transform duration-500 group-hover:scale-110" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-[1px] w-10 bg-brand-granite" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-granite">For Clients</span>
              </div>
              <h3 className="mb-4 text-[26px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-black md:text-[36px]">
                Find your next home with expert guidance.
              </h3>
              <p className="mb-8 max-w-md text-[15px] leading-7 text-brand-charcoal">
                Speak with our advisors about available residences, viewings, pricing, and the right fit for your lifestyle.
              </p>
              <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-black">
                Contact Client Services
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>

          <Link
            href="/landowners#landowner-form"
            className="group relative overflow-hidden rounded-[24px] border border-brand-charcoal/20 bg-brand-black px-6 py-6 text-brand-pearl shadow-[0_22px_50px_rgba(27,33,39,0.16)] transition-transform duration-300 hover:-translate-y-1 md:rounded-[28px] md:px-8 md:py-8"
          >
            <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-brand-charcoal/60 blur-3xl transition-transform duration-500 group-hover:scale-110" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-[1px] w-10 bg-brand-cloud" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-cloud">For Landowners</span>
              </div>
              <h3 className="mb-4 text-[26px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-white md:text-[36px]">
                Explore a partnership built on trust and value.
              </h3>
              <p className="mb-8 max-w-md text-[15px] leading-7 text-brand-pearl/84">
                Connect with our land acquisition team to discuss development potential, transparent terms, and long-term value creation.
              </p>
              <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-white">
                Connect with Landowners Team
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
