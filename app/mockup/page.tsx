import type { Metadata } from 'next';
import MockupLanding from './MockupLanding';

export const metadata: Metadata = {
  title: 'Mockup | Suvastu Properties',
  description:
    'A mockup landing page for Suvastu Properties using the same home page content, animations, transitions, project storytelling, and inquiry paths.',
  alternates: {
    canonical: '/mockup',
  },
  openGraph: {
    title: 'Mockup | Suvastu Properties',
    description:
      'Explore the Suvastu mockup landing page with the same premium project content and animated journey in a refreshed flow.',
    images: ['/Shoptorshi.png'],
  },
};

export default function MockupPage() {
  return (
    <MockupLanding />
  );
}
