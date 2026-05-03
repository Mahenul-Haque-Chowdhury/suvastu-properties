import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-brand-black text-brand-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 md:gap-12 md:py-20 lg:px-12 lg:grid-cols-4">
        <div className="space-y-6">
          <Link href="/" className="flex items-baseline space-x-1">
            <span className="text-2xl font-bold tracking-tighter uppercase">Suvastu</span>
            <span className="w-1.5 h-1.5 bg-brand-stone rounded-full"></span>
          </Link>
          <p className="max-w-xs text-[13px] leading-7 text-brand-cloud font-medium">
            Architectural precision meets artisanal luxury. We craft environments that redefine the essence of home.
          </p>
        </div>
        
        <div>
          <h4 className="text-[9px] tracking-[0.2em] uppercase text-brand-granite mb-6 font-semibold">Explore</h4>
          <ul className="space-y-4 text-[11px] tracking-[0.22em] uppercase font-medium">
            <li><Link href="/projects" className="hover:text-brand-stone transition-colors">Our Projects</Link></li>
            <li><Link href="/about" className="hover:text-brand-stone transition-colors">The Brand</Link></li>
            <li><Link href="/landowners#landowner-form" className="hover:text-brand-stone transition-colors">For Landowners</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[9px] tracking-[0.2em] uppercase text-brand-granite mb-6 font-semibold">Connect</h4>
          <ul className="space-y-4 text-[11px] tracking-[0.22em] uppercase font-medium">
            <li><Link href="/contact#buyer-form" className="hover:text-brand-stone transition-colors">Contact Us</Link></li>
            <li><Link href="/career" className="hover:text-brand-stone transition-colors">Careers</Link></li>
            <li><Link href="/stories" className="hover:text-brand-stone transition-colors">Stories & News</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[9px] tracking-[0.2em] uppercase text-brand-granite mb-6 font-semibold">Location</h4>
          <address className="not-italic text-[10px] tracking-widest uppercase text-brand-cloud space-y-2">
            <p>123 Gulshan Avenue</p>
            <p>Gulshan-1, Dhaka 1212</p>
            <p className="pb-4">Bangladesh</p>
            <div className="pt-4 border-t border-brand-charcoal">
              <a href="mailto:info@suvastuproperties.com" className="block hover:text-brand-white transition-colors mb-2">info@suvastuproperties.com</a>
              <a href="tel:+8801234567890" className="block hover:text-brand-white transition-colors">+880 12 3456 7890</a>
            </div>
          </address>
        </div>
      </div>
      
      {/* Bottom Editorial Bar */}
      <div className="z-50 flex w-full flex-col items-center justify-between gap-3 border-t border-brand-charcoal px-6 py-4 text-center md:flex-row md:gap-0 md:text-left lg:px-12">
        <div className="text-[9px] uppercase tracking-[0.2em] opacity-60">
          &copy; {new Date().getFullYear()} Suvastu Properties Ltd.
        </div>
        <div className="mt-1 flex flex-col items-center space-y-2 md:mt-0 md:flex-row md:space-x-8 md:space-y-0">
          <div className="text-[9px] uppercase tracking-widest text-brand-cloud/80">
            Designed by{' '}
            <a
              href="https://grayvally.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-white transition-colors hover:text-brand-stone"
            >
              GrayVally
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1 h-1 bg-brand-stone rounded-full animate-pulse"></span>
            <span className="text-[9px] uppercase tracking-widest">Sales Open: Gulshan II</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="text-[9px] uppercase tracking-widest hover:text-brand-stone transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[9px] uppercase tracking-widest hover:text-brand-stone transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
