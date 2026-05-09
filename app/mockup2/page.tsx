import type { Metadata } from 'next';
import MockupLanding2 from './MockupLanding2';

export const metadata: Metadata = {
  title: 'Mockup 2 | Suvastu Properties',
  description:
    'A redesigned mockup landing page for Suvastu Properties with enhanced scroll interactivity, seamless customer journey, and optimized lead generation funnels.',
  alternates: {
    canonical: '/mockup2',
  },
  openGraph: {
    title: 'Mockup 2 | Suvastu Properties',
    description:
      'Explore the Suvastu mockup 2 landing page with enhanced lead generation funnels and highly interactive scroll animations.',
    images: ['/Shoptorshi.png'],
  },
};

export default function MockupPage2() {
  return (
    <MockupLanding2 />
  );
}
