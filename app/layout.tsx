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
  title: 'Suvastu Properties | Refined Living. Elevated Spaces.',
  description: 'Premium real estate brand website for Suvastu Properties Ltd., Dhaka. Discover our ongoing, upcoming, and completed projects.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased font-sans`}>
      <body suppressHydrationWarning className="bg-brand-white text-brand-charcoal min-h-screen flex flex-col items-center">
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
