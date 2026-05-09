'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion, MotionValue, useScroll, useSpring, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';
import ProjectsInMotion from '@/components/home/ProjectsInMotion';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Check,
  Compass,
  Download,
  FileText,
  Handshake,
  Home,
  MapPinned,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Mail,
  Phone,
  User
} from 'lucide-react';

const heroProjects = [
  {
    eyebrow: 'Suvastu Shaptarshi',
    title: 'Wellness and Luxury',
    description:
      'Strategically located at Block-H, Road-07, Banani, Suvastu Shaptarshi is set to be your ideal abode to rejuvenate your mind and soul!',
    image: '/Shoptorshi.png',
    href: '/projects/suvastu-shaptarshi',
    index: '01',
    accent: 'Return to Yourself',
  },
  {
    eyebrow: 'Suvastu Florentina',
    title: 'Life of Wellness',
    description:
      'Florentina tells a story of harmony in our designs, meticulousness in our works, and grace in every detail.',
    image: '/florentina.jpg',
    href: '/projects/suvastu-florentina',
    index: '02',
    accent: 'Harmony in Every Detail',
  },
  {
    eyebrow: 'Suvastu Mirambeena',
    title: 'A Symphony of Welcome',
    description:
      'Suvastu Mirambeena is where luxury meets convenience and offers real estate investment opportunities.',
    image: '/mirambeenacover.png',
    href: '/projects/suvastu-mirambeena',
    index: '03',
    accent: 'Luxury Meets Convenience',
  },
  {
    eyebrow: 'Saleha Suvastu',
    title: 'Dream Home Where You Celebrate',
    description:
      'Discover eco-friendly apartments with modern and luxurious facilities in the heart of Gulshan.',
    image: '/saleha.jpg',
    href: '/projects/saleha-suvastu',
    index: '04',
    accent: 'Eco-Luxury in Gulshan',
  },
];

const journeySteps = [
  {
    label: '01',
    title: 'Discover',
    description: 'Find the project that matches your lifestyle and investment goals.',
  },
  {
    label: '02',
    title: 'Qualify',
    description: 'Review amenities, layouts, and value propositions with expert guidance.',
  },
  {
    label: '03',
    title: 'Visit',
    description: 'Book a curated site visit to experience the Suvastu standard in person.',
  },
  {
    label: '04',
    title: 'Acquire',
    description: 'Secure your address with seamless, transparent transaction support.',
  }
];

const trustPillars = [
  { icon: Compass, title: 'Prime Locations', description: 'Selected for long-term value.' },
  { icon: BadgeCheck, title: 'Premium Build', description: 'Uncompromising execution.' },
  { icon: PhoneCall, title: 'Dedicated Support', description: 'Guided experience start to finish.' },
  { icon: Building2, title: 'Timeless Design', description: 'Shaped around everyday comfort.' },
];

const featuredProjects = [
  { title: 'Suvastu Shaptarshi', category: 'Wellness & Luxury', image: '/shaptarshi.png', href: '/projects/suvastu-shaptarshi' },
  { title: 'Suvastu Mirambeena', category: 'Residential', image: '/Mirambeena.png', href: '/projects/suvastu-mirambeena' },
  { title: 'Saleha Suvastu', category: 'Luxury Living', image: '/saleha.png', href: '/projects/saleha-suvastu' },
];

function HeroProjectLayer({ project, index, activeProjectIndex, heroScale }: any) {
  const opacity = useTransform(activeProjectIndex, [index - 0.55, index, index + 0.55], [0, 1, 0]);
  const y = useTransform(activeProjectIndex, [index - 0.55, index, index + 0.55], [42, 0, -42]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
        <Image src={project.image} alt={project.eyebrow} fill priority={index === 0} sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
      <motion.div
        className="absolute inset-x-0 bottom-0 top-0 mx-auto grid max-w-7xl items-center px-6 pb-10 pt-10 md:px-12 md:pb-16 lg:grid-cols-[0.88fr_1.12fr]"
        style={{ y }}
      >
        <div className="max-w-2xl translate-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-cloud"
          >
            <span>{project.index}</span>
            <span className="h-px w-10 bg-brand-cloud" />
            <span>{project.eyebrow}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-[11ch] text-[48px] font-semibold leading-[0.9] tracking-[-0.05em] text-white sm:text-[64px] md:text-[86px]"
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-xl text-[15px] leading-7 text-brand-pearl/88 md:text-base md:leading-8"
          >
            {project.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link href="#lead-magnet" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-black transition-all duration-300 hover:bg-brand-cloud hover:-translate-y-1 hover:shadow-lg">
              Unlock Brochure <Download size={15} />
            </Link>
            <Link href={project.href} className="inline-flex items-center gap-3 rounded-full border border-brand-cloud px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-white hover:text-brand-black">
              View Project <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCardLayer({ project, index, projectsScroll }: any) {
  const startIn = index === 0 ? 0 : (index * 0.35) - 0.15;
  const endIn = startIn + 0.2;
  const y = useTransform(projectsScroll, [startIn, endIn], ['120vh', '0vh']);
  
  const startOut = endIn + 0.1;
  const endOut = startOut + 0.2;
  const scale = useTransform(projectsScroll, [startOut, endOut], [1, 0.92]);
  
  // Use an overlay opacity to simulate depth instead of making the card transparent
  const overlayOpacity = useTransform(projectsScroll, [startOut, endOut], [0, 0.6]);
  
  const finalY = index === 0 ? '0%' : y;
  const finalScale = index === featuredProjects.length - 1 ? 1 : scale;

  return (
    <motion.div 
      className="absolute inset-x-0 top-0 h-full overflow-hidden rounded-3xl border border-brand-pearl bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.15)] origin-top"
      style={{ 
        y: finalY,
        scale: finalScale,
        zIndex: index
      }}
    >
      <div className="grid h-full md:grid-cols-2 relative z-0">
         <div className="relative h-[300px] md:h-full">
           <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 hover:scale-105" />
         </div>
         <div className="flex flex-col justify-center p-8 md:p-16 bg-white">
           <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-granite">{project.category}</span>
           <h3 className="mb-6 text-[32px] md:text-[48px] font-semibold leading-tight tracking-[-0.03em]">{project.title}</h3>
           <p className="mb-10 text-brand-charcoal leading-relaxed">Experience a perfect blend of modern architecture and natural harmony, offering an unparalleled living experience right in the heart of the city.</p>
           
           <div className="flex flex-wrap gap-4">
             <Link href={project.href} className="inline-flex items-center justify-center rounded-full bg-brand-black px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-transform hover:-translate-y-1">
               View Details
             </Link>
             <Link href="#lead-magnet" className="inline-flex items-center justify-center rounded-full border border-brand-black px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-black transition-colors hover:bg-brand-pearl">
               Get Pricing
             </Link>
           </div>
         </div>
      </div>
      
      {/* Dark overlay for depth when card goes to background */}
      {index !== featuredProjects.length - 1 && (
        <motion.div 
          className="pointer-events-none absolute inset-0 z-10 bg-brand-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </motion.div>
  );
}

export default function MockupLanding2() {
  const [intent, setIntent] = useState('Buyer');
  const heroRef = useRef<HTMLElement>(null);
  const journeyRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const pinnedStateRef = useRef(true);
  const [isPinned, setIsPinned] = useState(true);

  // Hero Scroll
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end end'] });
  const smoothHero = useSpring(heroScroll, { stiffness: 70, damping: 22, mass: 0.8 });
  
  useMotionValueEvent(heroScroll, 'change', (latest) => {
    const nextPinned = pinnedStateRef.current ? latest < 0.996 : latest < 0.985;
    if (nextPinned !== pinnedStateRef.current) {
      pinnedStateRef.current = nextPinned;
      setIsPinned(nextPinned);
    }
  });

  const activeProjectIndex = useTransform(smoothHero, [0, 0.28, 0.52, 0.76, 1], [0, 1, 2, 3, 3]);
  const heroScale = useTransform(smoothHero, [0, 1], [1.1, 1]);
  const progressWidth = useTransform(smoothHero, [0, 1], ['0%', '100%']);

  // Journey Scroll (Horizontal)
  const { scrollYProgress: journeyScroll } = useScroll({ target: journeyRef, offset: ['start start', 'end end'] });
  const journeyX = useTransform(journeyScroll, [0, 1], ['0%', '-55%']);

  const { scrollYProgress: projectsScroll } = useScroll({ target: projectsRef, offset: ['start start', 'end end'] });

  return (
    <main className="relative bg-brand-white text-brand-black selection:bg-brand-black selection:text-white">
      {/* Global Scroll Progress */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
        <motion.div className="h-full bg-brand-black" style={{ width: progressWidth }} />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[420svh] border-b border-brand-pearl bg-brand-black">
        <div className={isPinned
            ? 'fixed left-0 right-0 top-0 z-0 h-[100svh] overflow-hidden bg-brand-black text-brand-white'
            : 'absolute inset-x-0 bottom-0 z-0 h-[100svh] overflow-hidden bg-brand-black text-brand-white'}>
          <div className="absolute inset-0">
            {heroProjects.map((project, index) => (
              <HeroProjectLayer
                key={project.title}
                project={project}
                index={index}
                activeProjectIndex={activeProjectIndex}
                heroScale={heroScale}
              />
            ))}
          </div>

          {/* Quick Contact floating right */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute right-6 top-1/2 -translate-y-1/2 hidden flex-col gap-4 md:flex z-20"
          >
             <Link href="#lead-magnet" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-black shadow-2xl transition-transform hover:scale-110">
                <FileText size={20} />
             </Link>
             <Link href="/contact" className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-black border border-brand-charcoal text-white shadow-2xl transition-transform hover:scale-110">
                <PhoneCall size={20} />
             </Link>
          </motion.div>
        </div>
      </section>

      <ProjectsInMotion />

      {/* Trust & Vision Section */}
      <section className="bg-white py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             className="text-center max-w-3xl mx-auto"
           >
              <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-brand-granite px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-brand-granite">
                <Sparkles size={12} /> The Suvastu Standard
              </div>
              <h2 className="text-[36px] font-semibold leading-[0.98] tracking-[-0.04em] text-brand-black md:text-[56px]">
                We build addresses that appreciate in value and elevate your everyday.
              </h2>
           </motion.div>

           <div className="mt-20 grid gap-6 md:grid-cols-4">
              {trustPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div 
                    key={pillar.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group border border-brand-pearl bg-brand-pearl/20 p-8 rounded-2xl hover:bg-brand-black hover:text-white transition-colors duration-500"
                  >
                    <Icon className="mb-6 text-brand-black group-hover:text-brand-cloud transition-colors duration-500" size={32} strokeWidth={1.5} />
                    <h3 className="mb-3 text-[18px] font-semibold">{pillar.title}</h3>
                    <p className="text-[14px] text-brand-charcoal group-hover:text-brand-pearl/80 leading-relaxed transition-colors duration-500">{pillar.description}</p>
                  </motion.div>
                )
              })}
           </div>
        </div>
      </section>

      {/* Featured Projects - Pinned Stacking */}
      <section ref={projectsRef} className="relative h-[300vh] bg-brand-stone border-y border-brand-pearl">
        <div className="sticky top-0 h-screen overflow-hidden py-24 md:py-32 flex flex-col justify-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 mb-10 flex justify-between items-end relative z-10">
             <div>
               <h2 className="text-[42px] font-semibold leading-[0.96] tracking-[-0.04em] md:text-[64px]">Signature Projects</h2>
               <p className="mt-4 text-brand-charcoal max-w-lg">Explore our curated selection of premium residences, currently open for booking.</p>
             </div>
             <Link href="/projects" className="hidden md:inline-flex items-center gap-2 border-b border-brand-black pb-1 text-[11px] font-bold uppercase tracking-[0.2em]">
               View Portfolio <ArrowRight size={14} />
             </Link>
          </div>
          
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 relative h-[500px] md:h-[600px] perspective-[1000px]">
             {featuredProjects.map((project, index) => (
               <ProjectCardLayer
                 key={project.title}
                 project={project}
                 index={index}
                 projectsScroll={projectsScroll}
               />
             ))}
          </div>
        </div>
      </section>

      {/* Interactive Horizontal Journey - Pinned */}
      <section ref={journeyRef} className="relative h-[250vh] bg-brand-black text-brand-white">
        <div className="sticky top-0 h-screen overflow-hidden py-24 md:py-36 flex flex-col justify-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-cloud" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-cloud">The Process</span>
            </div>
            <h2 className="max-w-2xl text-[42px] font-semibold leading-[0.96] tracking-[-0.04em] text-white md:text-[64px]">
              Your seamless path to a Suvastu address.
            </h2>
          </div>

          <div className="pl-6 lg:pl-12 w-full">
            <motion.div className="flex w-[250%] gap-6 md:w-[150%] lg:w-[120%]" style={{ x: journeyX }}>
              {journeySteps.map((step, index) => (
                <div key={step.label} className="flex-1 min-w-[280px] rounded-3xl border border-brand-charcoal bg-brand-charcoal/20 p-8 md:p-10 backdrop-blur-sm">
                  <div className="text-[48px] font-light text-brand-cloud/40 leading-none mb-8">{step.label}</div>
                  <h3 className="mb-4 text-[28px] font-semibold text-white">{step.title}</h3>
                  <p className="text-brand-pearl/80 leading-relaxed">{step.description}</p>
                  {index === journeySteps.length - 1 && (
                     <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-cloud hover:text-white transition-colors">
                       Start Now <ChevronRight size={14} />
                     </Link>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ultimate Lead Magnet / Funnel Section */}
      <section id="lead-magnet" className="relative overflow-hidden bg-white py-24 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,234,237,0.8),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
           <div className="grid gap-16 lg:grid-cols-[1fr_1fr] items-center bg-brand-pearl/20 rounded-[40px] p-8 md:p-16 border border-brand-pearl shadow-2xl">
              
              <div>
                 <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-brand-black bg-brand-black px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                   <Download size={12} /> Free Guide
                 </div>
                 <h2 className="text-[42px] font-semibold leading-tight tracking-[-0.04em] text-brand-black md:text-[56px] mb-6">
                   Download the Ultimate Residence Fit Checklist.
                 </h2>
                 <p className="text-lg text-brand-charcoal mb-8 leading-relaxed">
                   Cut through the noise. Get expert insights on comparing locations, evaluating developer reputation, and understanding true investment value before booking a visit.
                 </p>
                 <ul className="space-y-4 mb-10">
                   {[
                     'Compare premium neighborhoods (Banani, Gulshan, Baridhara)',
                     'Checklist for evaluating floor plan efficiency',
                     'Questions you must ask developers before investing',
                     'Exclusive preview of upcoming Suvastu inventory'
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-brand-black">
                       <Check className="mt-1 shrink-0 text-brand-black" size={18} />
                       <span className="font-medium">{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-xl border border-brand-pearl relative">
                 <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand-black text-white flex items-center justify-center rotate-12 shadow-2xl">
                   <div className="text-center">
                     <span className="block text-[22px] font-bold leading-none">FREE</span>
                     <span className="block text-[9px] uppercase tracking-widest mt-1">Download</span>
                   </div>
                 </div>
                 
                 <h3 className="text-2xl font-semibold mb-2">Where should we send it?</h3>
                 <p className="text-brand-charcoal text-sm mb-8">Join 2,000+ others who have used our guide.</p>
                 
                 <form className="space-y-5">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-granite" size={18} />
                      <input type="text" placeholder="Full Name" className="w-full rounded-xl border border-brand-pearl bg-brand-pearl/30 py-4 pl-12 pr-4 outline-none transition-colors focus:border-brand-black focus:bg-white" />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-granite" size={18} />
                      <input type="email" placeholder="Email Address" className="w-full rounded-xl border border-brand-pearl bg-brand-pearl/30 py-4 pl-12 pr-4 outline-none transition-colors focus:border-brand-black focus:bg-white" />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-granite" size={18} />
                      <input type="tel" placeholder="Phone Number" className="w-full rounded-xl border border-brand-pearl bg-brand-pearl/30 py-4 pl-12 pr-4 outline-none transition-colors focus:border-brand-black focus:bg-white" />
                    </div>

                    <div className="pt-2">
                      <label className="block text-sm font-medium text-brand-black mb-3">I am primarily a:</label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Buyer', 'Investor', 'Landowner', 'Realtor'].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setIntent(item)}
                            className={intent === item
                              ? 'rounded-xl border-2 border-brand-black bg-brand-black py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-all'
                              : 'rounded-xl border-2 border-brand-pearl bg-transparent py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-brand-granite hover:border-brand-granite transition-all'}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button type="button" className="w-full mt-4 rounded-xl bg-brand-black py-5 text-[12px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(27,33,39,0.2)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(27,33,39,0.3)]">
                       Get Immediate Access
                    </button>
                    <p className="text-center text-[11px] text-brand-granite mt-4">We respect your privacy. No spam.</p>
                 </form>
              </div>

           </div>
        </div>
      </section>

      {/* Floating Bottom Nav for Mobile */}
      <div className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 overflow-hidden rounded-full border border-brand-charcoal bg-brand-black text-white shadow-[0_18px_48px_rgba(27,33,39,0.3)] md:hidden">
        <Link href="#lead-magnet" className="flex items-center gap-2 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-brand-charcoal">
          <Download size={16} />
          Guide
        </Link>
        <Link href="/contact" className="flex items-center gap-2 border-l border-brand-charcoal px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-brand-charcoal">
          <MapPinned size={16} />
          Visit
        </Link>
      </div>
    </main>
  );
}