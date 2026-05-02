'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function RandomTextReveal({ text, className = '' }: { text: string, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const chars = containerRef.current.querySelectorAll('.char');
    
    gsap.fromTo(chars, 
      { opacity: 0.1 },
      {
        opacity: 1,
        duration: 1.5,
        stagger: {
          each: 0.05,
          from: "random"
        },
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "center center",
          toggleActions: "play none none reverse",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {text.split('').map((char, index) => (
        <span key={index} className="char" style={{ display: 'inline-block', opacity: 0.1 }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}
