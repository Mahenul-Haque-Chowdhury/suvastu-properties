'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Landowners', href: '/landowners' },
  { name: 'Stories', href: '/stories' },
  { name: 'Contact', href: '/contact' },
];

const projectSections = [
  { name: 'Ongoing', href: '/projects#ongoing' },
  { name: 'Upcoming', href: '/projects#upcoming' },
  { name: 'Completed', href: '/projects#completed' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const lastScrollYRef = useRef(0);
  const heroEndThresholdRef = useRef(0);

  useEffect(() => {
    const updateHeroThreshold = () => {
      if (pathname !== '/') {
        heroEndThresholdRef.current = 0;
        return;
      }

      const heroSections = Array.from(document.querySelectorAll<HTMLElement>('[data-home-hero="true"]'));
      const visibleHeroSection = heroSections.find((section) => section.getClientRects().length > 0);

      if (!visibleHeroSection) {
        heroEndThresholdRef.current = 0;
        return;
      }

      heroEndThresholdRef.current = Math.max(
        visibleHeroSection.offsetTop + visibleHeroSection.offsetHeight - window.innerHeight,
        0,
      );
    };

    updateHeroThreshold();
    window.addEventListener('resize', updateHeroThreshold);

    return () => {
      window.removeEventListener('resize', updateHeroThreshold);
    };
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);

    if (mobileMenuOpen) {
      lastScrollYRef.current = latest;
      setIsHeaderVisible(true);
      return;
    }

    if (pathname === '/' && latest < heroEndThresholdRef.current) {
      lastScrollYRef.current = latest;
      setIsHeaderVisible(true);
      return;
    }

    const previous = lastScrollYRef.current;
    const delta = latest - previous;

    if (latest <= 24) {
      setIsHeaderVisible(true);
    } else if (delta > 8) {
      setIsHeaderVisible(false);
    } else if (delta < -8) {
      setIsHeaderVisible(true);
    }

    lastScrollYRef.current = latest;
  });

  const isHome = pathname === '/';

  const headerBg = isScrolled || isHome
    ? 'bg-brand-black border-b border-brand-charcoal/80'
    : 'bg-brand-black border-b border-brand-charcoal/80';
  const textColor = 'text-brand-pearl';
  const navHover = 'hover:text-brand-white hover:border-brand-white';
  const btnBorder = 'rounded-md border border-brand-stone bg-brand-pearl text-brand-black shadow-[0_10px_24px_rgba(83,90,95,0.18)] hover:bg-brand-white hover:border-brand-cloud';

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}
        initial={{ y: -100 }}
        animate={{ y: isHeaderVisible || mobileMenuOpen ? 0 : -96 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center">
            <Image
              src="/Suvastu-Logo.svg"
              alt="Suvastu"
              width={218}
              height={46}
              priority
              className="h-auto w-[132px] md:w-[168px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center space-x-10">
            {navLinks.map((link) => (
              link.name === 'Projects' ? (
                <div key={link.name} className="group relative flex items-center">
                  <Link
                    href={link.href}
                    className={`border-b border-transparent pb-1 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors ${textColor} ${navHover}`}
                  >
                    {link.name}
                  </Link>
                  <div className="absolute left-1/2 top-full z-50 hidden min-w-[220px] -translate-x-1/2 pt-5 group-hover:block">
                    <div className="rounded-sm border border-brand-charcoal bg-brand-black/98 p-3 shadow-2xl backdrop-blur-md">
                      {projectSections.map((section) => (
                        <Link
                          key={section.name}
                          href={section.href}
                          className="block rounded-sm px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-pearl transition-colors hover:bg-brand-charcoal/70 hover:text-brand-white"
                        >
                          {section.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`border-b border-transparent pb-1 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors ${textColor} ${navHover}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link 
              href="/contact#buyer-form"
              className={`border px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 ${btnBorder}`}
            >
              Book a Visit
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden z-50 relative ${textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} className="text-brand-pearl" /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-brand-white flex flex-col justify-center items-center gap-8 pt-24"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="flex flex-col items-center gap-3"
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-semibold tracking-[-0.03em] text-brand-black uppercase"
                >
                  {link.name}
                </Link>
                {link.name === 'Projects' ? (
                  <div className="flex flex-col items-center gap-2">
                    {projectSections.map((section) => (
                      <Link
                        key={section.name}
                        href={section.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-granite"
                      >
                        {section.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            ))}
            <Link
              href="/contact#buyer-form"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 border border-brand-black px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-black transition-colors hover:bg-brand-black hover:text-brand-white"
            >
              Book a Visit
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
