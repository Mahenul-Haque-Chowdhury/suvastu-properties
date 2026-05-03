import type {Metadata} from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import SmoothScroller from '@/components/SmoothScroller';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.suvastuproperties.com'),
  title: 'Suvastu Properties | Refined Living. Elevated Spaces.',
  description: 'Premium real estate brand website for Suvastu Properties Ltd., Dhaka. Discover our ongoing, upcoming, and completed projects.',
  keywords: ['Suvastu Properties', 'luxury apartments in Dhaka', 'Dhaka real estate', 'Banani apartments', 'Gulshan apartments', 'landowner joint venture Dhaka'],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Suvastu Properties | Refined Living. Elevated Spaces.',
    description: 'Premium real estate brand website for Suvastu Properties Ltd., Dhaka. Discover ongoing, upcoming, and completed projects.',
    url: 'https://www.suvastuproperties.com',
    siteName: 'Suvastu Properties',
    locale: 'en_US',
    type: 'website',
    images: ['/Shoptorshi.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suvastu Properties | Refined Living. Elevated Spaces.',
    description: 'Explore Suvastu Properties projects, buyer journeys, and landowner partnership opportunities in Dhaka.',
    images: ['/Shoptorshi.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateDeveloper',
    name: 'Suvastu Properties Ltd.',
    url: 'https://www.suvastuproperties.com',
    logo: 'https://www.suvastuproperties.com/Suvastu-Logo.svg',
    email: 'marketing@suvastu.com',
    telephone: '+8809639500400',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'BD'
    },
    areaServed: 'Dhaka',
    sameAs: ['https://wa.me/8801234567890']
  };

  return (
    <html suppressHydrationWarning lang="en" className={`${manrope.variable} antialiased font-sans`}>
      <body suppressHydrationWarning className="bg-brand-white text-brand-charcoal min-h-screen flex flex-col items-center">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SmoothScroller>
          <div className="w-full max-w-[1920px] min-h-screen border-x-0 md:border-x-8 border-brand-pearl flex flex-col relative bg-white">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingContact />
          </div>
        </SmoothScroller>
      </body>
    </html>
  );
}
