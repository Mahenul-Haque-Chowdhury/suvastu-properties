import type { Metadata } from 'next';
import MockupLanding3 from './Mockuplanding3';

export const metadata: Metadata = {
  title: 'Mockup 3 | Suvastu Properties',
  description:
    'A third mockup landing page for Suvastu Properties with refined aesthetics, smooth animations, and optimized lead funnels.',
  alternates: {
    canonical: '/mockup3',
  },
};

export default function MockupPage3() {
  return (
    <MockupLanding3 />
  );
}
