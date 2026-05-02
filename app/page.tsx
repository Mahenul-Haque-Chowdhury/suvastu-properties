 'use client';

import { useLayoutEffect } from 'react';
import Hero from '@/components/home/Hero';
import BrandStatement from '@/components/home/BrandStatement';
import BrandWelcome from '@/components/home/BrandWelcome';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import TrustIndicators from '@/components/home/TrustIndicators';
import Lifestyle from '@/components/home/Lifestyle';
import CTA from '@/components/home/CTA';

export default function Home() {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return (
    <div className="bg-brand-white">
      <Hero />
      <BrandStatement />
      <BrandWelcome />
      <FeaturedProjects />
      <TrustIndicators />
      <Lifestyle />
      <CTA />
    </div>
  );
}
