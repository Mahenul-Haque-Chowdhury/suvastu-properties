'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const brandStatement = 'We do not just build structures. We craft timeless environments where every detail resonates with purpose and elegance.';
const brandStatementWords = brandStatement.split(' ');

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BrandStatement() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textEl = textRef.current;
    if (!containerRef.current || !textEl || !lineRef.current) return;

    gsap.fromTo(lineRef.current, 
      { scaleX: 0, transformOrigin: 'left' },
      { scaleX: 1, duration: 1, ease: 'power3.out', scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }}
    );

    const words = textEl.querySelectorAll('[data-brand-word]');

    gsap.set(words, {
      opacity: 0.2
    });

    gsap.to(words, {
      opacity: 1,
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'center center',
        scrub: 1,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };

  }, []);

  return (
    <section className="py-24 md:py-32 bg-white text-brand-black px-6 md:px-12 border-b border-brand-pearl" ref={containerRef}>
      <div className="mx-auto flex max-w-5xl flex-col items-stretch text-center md:text-left">
        <div className="mb-12 flex items-center space-x-3 self-center md:self-start">
          <div ref={lineRef} className="w-12 h-[1px] bg-brand-granite"></div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Brand Philosophy</span>
        </div>
        
        <p
          ref={textRef}
          className="w-full max-w-full text-[38px] font-semibold tracking-[-0.04em] leading-[1.1] text-brand-black md:text-[60px] lg:text-[68px]"
        >
          {brandStatementWords.map((word, index) => (
            <span key={`${word}-${index}`} data-brand-word className="inline-block opacity-20">
              {word}
              {index < brandStatementWords.length - 1 ? '\u00A0' : ''}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
