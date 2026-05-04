'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useIsMobile } from '@/hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 'suvastu-shaptarshi', title: 'Suvastu Shaptarshi', category: 'Wellness & Luxury', image: '/shaptarshi.png' },
  { id: 'suvastu-mirambeena', title: 'Suvastu Mirambeena', category: 'Residential', image: '/Mirambeena.png' },
  { id: 'saleha-suvastu', title: 'Saleha Suvastu', category: 'Luxury Living', image: '/saleha.png' },
  { id: 'suvastu-florentina', title: 'Suvastu Florentina', category: 'Contemporary', image: '/florentina.png' },
  { id: 'suvastu-bayside', title: 'Suvastu Anondolok', category: 'Waterfront Living', image: '/anondolok.png' },
  { id: 'suvastu-opaline', title: 'Suvastu Rialto Tower', category: 'Skyline Edition', image: '/rialto.png' },
  { id: 'suvastu-celestia', title: 'Suvastu Muskan Tower', category: 'Signature Towers', image: '/muskan.png' },
  { id: 'suvastu-verde', title: 'Suvastu Shahnawaz', category: 'Garden Estates', image: '/shahnawaz.png' },
];

export default function FeaturedProjects() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isMobile) return;
    if (!triggerRef.current || !containerRef.current) return;

    const horizontalDistance = Math.max(
      containerRef.current.scrollWidth - triggerRef.current.clientWidth,
      0,
    );

    if (horizontalDistance <= 0) return;
    
    // Header scroll-linked animation
    gsap.fromTo(
      '.projects-heading-stack',
      { opacity: 0, x: -520 },
      {
        opacity: 1,
        x: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 92%',
          end: 'top 54%',
          scrub: 1.4,
        }
      }
    );

    gsap.fromTo(
      '.projects-link',
      { opacity: 0, x: 520 },
      {
        opacity: 1,
        x: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 92%',
          end: 'top 54%',
          scrub: 1.4,
        }
      }
    );

    // Horizontal Scroll Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        end: () => "+=" + Math.max(
          (containerRef.current?.scrollWidth || 0) - (triggerRef.current?.clientWidth || 0),
          0,
        ),
      }
    });

    tl.to(containerRef.current, {
      x: -horizontalDistance,
      ease: "none",
    }, 0);
  }, { scope: triggerRef, dependencies: [isMobile] });

  return (
    <section ref={triggerRef} className="bg-white py-24 md:py-32 overflow-hidden border-b border-brand-pearl">
      <div className="projects-header px-6 lg:px-12 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end max-w-7xl mx-auto gap-5">
        <div className="projects-heading-stack">
          <div className="projects-label mb-4 flex items-center space-x-3">
            <div className="w-10 h-[1px] bg-brand-granite"></div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Portfolio</span>
          </div>
          <h2 className="projects-title mb-3 whitespace-nowrap text-[44px] font-semibold leading-[0.96] tracking-[-0.04em] text-brand-black md:text-[64px]">Featured Projects</h2>
          <p className="projects-description max-w-[22rem] text-[15px] leading-7 text-brand-charcoal line-clamp-2 md:max-w-none md:text-base md:line-clamp-none md:whitespace-nowrap">Symphonies of architecture and nature, designed to elevate your everyday.</p>
        </div>
        <div className="projects-link hidden md:block">
          <Link href="/projects" className="text-[10px] font-medium tracking-[0.2em] uppercase border-b border-brand-black pb-1 hover:text-brand-granite hover:border-brand-granite transition-colors">
            View All
          </Link>
        </div>
      </div>

      {isMobile ? (
        <div className="grid gap-5 px-6 pb-4 pt-2">
          {projects.slice(0, 4).map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group overflow-hidden rounded-[24px] border border-brand-pearl bg-white shadow-[0_16px_34px_rgba(27,33,39,0.08)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-pearl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/88 via-brand-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="mb-2 block text-[9px] uppercase tracking-[0.3em] text-brand-cloud">{project.category}</span>
                  <h3 className="max-w-[11ch] text-[30px] font-semibold leading-[1.02] tracking-[-0.035em] text-white">{project.title}</h3>
                  <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white">
                    Discover <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
      <div className="relative flex min-h-[72vh] items-start overflow-x-hidden overflow-y-visible pt-0 pb-8 md:min-h-[78vh] md:pt-0 md:pb-10">
        <div
          ref={containerRef}
          className="absolute left-0 top-0 flex h-[62vh] gap-8 px-6 lg:px-12 md:h-[66vh]"
          style={{ width: `max-content` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="project-card relative h-full w-[75vw] flex-shrink-0 group overflow-hidden bg-brand-pearl shadow-[0_16px_34px_rgba(27,33,39,0.08)] sm:w-[400px]">
              <div className="relative h-full w-full overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 640px) 75vw, 400px"
                  className="project-image object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="absolute bottom-4 left-0 flex w-full flex-col justify-end px-8 pb-6 pt-16 translate-y-1 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] md:bottom-6">
                <span className="text-[9px] text-brand-cloud tracking-[0.3em] uppercase mb-3 block opacity-80">{project.category}</span>
                <h3 className="mb-4 text-[26px] font-semibold tracking-[-0.035em] text-white lg:text-[34px]">{project.title}</h3>
                <Link href={`/projects/${project.id}`} className="text-white text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  Discover <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
      
      <div className="px-6 lg:px-12 mt-12 md:hidden">
        <Link href="/projects" className="text-[10px] font-medium tracking-[0.2em] uppercase border-b border-brand-black pb-1 hover:text-brand-granite hover:border-brand-granite transition-colors inline-block">
          View All Projects
        </Link>
      </div>
    </section>
  );
}
