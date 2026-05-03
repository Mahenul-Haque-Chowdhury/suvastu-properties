import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import BrandStatement from '@/components/home/BrandStatement';
import BrandWelcome from '@/components/home/BrandWelcome';
import FunnelJourney from '@/components/home/FunnelJourney';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import TrustIndicators from '@/components/home/TrustIndicators';
import Lifestyle from '@/components/home/Lifestyle';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Suvastu Properties | Luxury Apartments and Residences in Dhaka',
  description: 'Discover Suvastu Properties in Dhaka through a clearer buyer and landowner journey, premium project storytelling, and direct inquiry paths for site visits and partnerships.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Suvastu Properties | Luxury Apartments and Residences in Dhaka',
    description: 'Explore premium Suvastu projects, compare addresses, and move into the right buyer or landowner journey.',
    images: ['/Shoptorshi.png']
  }
};

export default function Home() {
  return (
    <div className="relative bg-brand-white">
      <Hero />
      <BrandStatement />
      <FunnelJourney />
      <BrandWelcome />
      <FeaturedProjects />
      <TrustIndicators />
      <Lifestyle />
      <CTA />
    </div>
  );
}
