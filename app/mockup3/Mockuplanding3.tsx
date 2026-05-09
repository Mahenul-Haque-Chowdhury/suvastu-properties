'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
  useInView,
  AnimatePresence,
} from 'motion/react';
import ProjectsInMotion from '@/components/home/ProjectsInMotion';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  Compass,
  Download,
  FileText,
  MapPinned,
  PhoneCall,
  Sparkles,
  ChevronRight,
  Mail,
  Phone,
  User,
  Star,
  Users,
  Clock,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const heroProjects = [
  {
    eyebrow: 'Suvastu Shaptarshi',
    title: 'Wellness\nand Luxury',
    description:
      'Strategically located at Block-H, Road-07, Banani, Suvastu Shaptarshi is set to be your ideal abode to rejuvenate your mind and soul.',
    image: '/Shoptorshi.png',
    href: '/projects/suvastu-shaptarshi',
    index: '01',
    tag: 'Banani · Premium',
  },
  {
    eyebrow: 'Suvastu Florentina',
    title: 'Life of\nWellness',
    description:
      'Florentina tells a story of harmony in our designs, meticulousness in our works, and grace in every detail.',
    image: '/florentina.jpg',
    href: '/projects/suvastu-florentina',
    index: '02',
    tag: 'Gulshan · Curated',
  },
  {
    eyebrow: 'Suvastu Mirambeena',
    title: 'A Symphony\nof Welcome',
    description:
      'Where luxury meets convenience and offers real estate investment opportunities built for the discerning.',
    image: '/mirambeenacover.png',
    href: '/projects/suvastu-mirambeena',
    index: '03',
    tag: 'Baridhara · Iconic',
  },
  {
    eyebrow: 'Saleha Suvastu',
    title: 'Dream Home\nYou Celebrate',
    description:
      'Discover eco-friendly apartments with modern and luxurious facilities in the heart of Gulshan.',
    image: '/saleha.jpg',
    href: '/projects/saleha-suvastu',
    index: '04',
    tag: 'Gulshan · Eco-Luxury',
  },
];

const stats = [
  { value: 35, suffix: '+', label: 'Years of Legacy', icon: Clock },
  { value: 60, suffix: '+', label: 'Completed Projects', icon: Building2 },
  { value: 12000, suffix: '+', label: 'Happy Families', icon: Users },
];

const trustPillars = [
  {
    icon: Compass,
    title: 'Prime Locations',
    description:
      'Each address is selected for its long-term value, connectivity, and lifestyle quotient.',
    stat: '100%',
    statLabel: 'Prime zones',
  },
  {
    icon: BadgeCheck,
    title: 'Premium Build',
    description:
      'Uncompromising execution — from foundation to finish, quality is our non-negotiable.',
    stat: '35+',
    statLabel: 'Years experience',
  },
  {
    icon: PhoneCall,
    title: 'Dedicated Support',
    description:
      'A guided experience from first inquiry to key handover, every step of the way.',
    stat: '24/7',
    statLabel: 'Client support',
  },
  {
    icon: Building2,
    title: 'Timeless Design',
    description:
      'Architecture and interiors shaped around the rhythms of everyday human comfort.',
    stat: '60+',
    statLabel: 'Projects delivered',
  },
];

const featuredProjects = [
  {
    title: 'Suvastu Shaptarshi',
    category: 'Wellness & Luxury',
    location: 'Banani, Dhaka',
    image: '/shaptarshi.png',
    href: '/projects/suvastu-shaptarshi',
    size: '1,200 – 3,500 sqft',
  },
  {
    title: 'Suvastu Mirambeena',
    category: 'Residential',
    location: 'Baridhara, Dhaka',
    image: '/Mirambeena.png',
    href: '/projects/suvastu-mirambeena',
    size: '2,100 – 4,200 sqft',
  },
  {
    title: 'Saleha Suvastu',
    category: 'Luxury Living',
    location: 'Gulshan, Dhaka',
    image: '/saleha.png',
    href: '/projects/saleha-suvastu',
    size: '1,800 – 3,800 sqft',
  },
];

const journeySteps = [
  {
    label: '01',
    title: 'Discover',
    description:
      'Explore our curated portfolio and identify the project that matches your lifestyle vision.',
  },
  {
    label: '02',
    title: 'Qualify',
    description:
      'Dive deep into amenities, layouts, and financials with our expert advisory team.',
  },
  {
    label: '03',
    title: 'Experience',
    description:
      'Book a private, curated site visit and feel the Suvastu difference firsthand.',
  },
  {
    label: '04',
    title: 'Acquire',
    description:
      'Secure your address with our seamless, transparent transaction process.',
  },
];

const marqueeItems = [
  'Prime Locations',
  'Timeless Architecture',
  'Wellness Living',
  'Banani',
  'Gulshan',
  'Baridhara',
  'Investment Grade',
  'Est. 1990',
];

const checklistItems = [
  'Compare premium neighborhoods (Banani, Gulshan, Baridhara)',
  'Checklist for evaluating floor plan efficiency',
  'Questions you must ask developers before investing',
  'Exclusive preview of upcoming Suvastu inventory',
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = 80;
    const increment = value / totalFrames;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.min(Math.round(increment * frame), value));
      if (frame >= totalFrames) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function InfiniteMarquee() {
  const repeated = [...marqueeItems, ...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y border-brand-pearl/60 py-4 bg-white">
      <motion.div
        animate={{ x: [0, '-33.333%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex gap-14 whitespace-nowrap"
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 text-[10px] font-bold uppercase tracking-[0.35em] text-brand-granite"
          >
            <span className="h-[5px] w-[5px] rounded-full bg-brand-cloud/70 inline-block flex-shrink-0" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Hero Layer ────────────────────────────────────────────────────────────────

function HeroProjectLayer({
  project,
  index,
  activeProjectIndex,
  heroScale,
}: {
  project: (typeof heroProjects)[0];
  index: number;
  activeProjectIndex: import('motion/react').MotionValue<number>;
  heroScale: import('motion/react').MotionValue<number>;
}) {
  const opacity = useTransform(
    activeProjectIndex,
    [index - 0.5, index, index + 0.5],
    [0, 1, 0]
  );
  const y = useTransform(
    activeProjectIndex,
    [index - 0.5, index, index + 0.5],
    [56, 0, -56]
  );
  const imgScale = useTransform(
    activeProjectIndex,
    [index - 0.5, index, index + 0.5],
    [1.1, 1, 1.1]
  );

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      {/* Layered image with individual parallax */}
      <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
        <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
          <Image
            src={project.image}
            alt={project.eyebrow}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Dual gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/92 via-brand-black/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-brand-black/25" />

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex items-end pb-14 md:pb-24"
        style={{ y }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl">
            {/* Eyebrow row */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-brand-cloud">
                {project.index}
              </span>
              <span className="h-px w-8 bg-brand-cloud/50" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-cloud/75">
                {project.eyebrow}
              </span>
              <span className="rounded-full border border-brand-cloud/25 px-3 py-[3px] text-[9px] font-semibold uppercase tracking-[0.22em] text-brand-cloud/55">
                {project.tag}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 whitespace-pre-line text-[54px] font-semibold leading-[0.87] tracking-[-0.05em] text-white sm:text-[72px] md:text-[98px] lg:text-[112px]">
              {project.title}
            </h1>

            {/* Description */}
            <p className="mb-10 max-w-[42ch] text-[15px] leading-[1.85] text-white/65">
              {project.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#lead-magnet"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-[15px] text-[11px] font-bold uppercase tracking-[0.25em] text-brand-black transition-all duration-300 hover:bg-brand-cloud hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/25"
              >
                Get Brochure
                <Download
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </Link>
              <Link
                href={project.href}
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-[15px] text-[11px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
              >
                Explore
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────

export default function MockupLanding3() {
  const [intent, setIntent] = useState('Buyer');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const heroRef = useRef<HTMLElement>(null);
  const journeyRef = useRef<HTMLElement>(null);
  const pinnedStateRef = useRef(true);
  const [isPinned, setIsPinned] = useState(true);

  // ── Custom cursor ──────────────────────────────────────────────────────────
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 22, stiffness: 380, mass: 0.4 });
  const cursorYSpring = useSpring(cursorY, { damping: 22, stiffness: 380, mass: 0.4 });
  const [cursorLabel, setCursorLabel] = useState('');

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 24);
      cursorY.set(e.clientY - 24);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  // ── Hero scroll ────────────────────────────────────────────────────────────
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });
  const smoothHero = useSpring(heroScroll, { stiffness: 70, damping: 22, mass: 0.8 });

  useMotionValueEvent(heroScroll, 'change', (latest) => {
    const next = pinnedStateRef.current ? latest < 0.996 : latest < 0.985;
    if (next !== pinnedStateRef.current) {
      pinnedStateRef.current = next;
      setIsPinned(next);
    }
  });

  const activeProjectIndex = useTransform(
    smoothHero,
    [0, 0.28, 0.52, 0.76, 1],
    [0, 1, 2, 3, 3]
  );
  const heroScale = useTransform(smoothHero, [0, 1], [1.12, 1]);
  const progressWidth = useTransform(smoothHero, [0, 1], ['0%', '100%']);

  useMotionValueEvent(activeProjectIndex, 'change', (v) =>
    setActiveIdx(Math.round(Math.min(3, Math.max(0, v))))
  );

  // ── Journey scroll ─────────────────────────────────────────────────────────
  const { scrollYProgress: journeyScroll } = useScroll({
    target: journeyRef,
    offset: ['start end', 'end start'],
  });
  const journeyX = useTransform(journeyScroll, [0.15, 0.85], ['0%', '-50%']);

  return (
    <main className="relative bg-brand-white text-brand-black selection:bg-brand-black selection:text-white">

      {/* ── Grain Overlay ─────────────────────────────────────────────────── */}
      <div
        className="pointer-events-none fixed inset-0 z-[200] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* ── Custom Cursor ─────────────────────────────────────────────────── */}
      <motion.div
        className="pointer-events-none fixed z-[199] hidden h-12 w-12 items-center justify-center md:flex"
        style={{ left: cursorXSpring, top: cursorYSpring }}
      >
        <div className="absolute inset-0 rounded-full border border-brand-black/20 mix-blend-multiply" />
        <AnimatePresence>
          {cursorLabel && (
            <motion.span
              key={cursorLabel}
              initial={{ opacity: 0, scale: 0.85, x: -4 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.18 }}
              className="absolute left-14 whitespace-nowrap rounded-full bg-brand-black px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-xl"
            >
              {cursorLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Global Progress Bar ───────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-brand-pearl/30">
        <motion.div className="h-full bg-brand-black" style={{ width: progressWidth }} />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[420svh] bg-brand-black">
        <div
          className={
            isPinned
              ? 'fixed left-0 right-0 top-0 z-0 h-[100svh] overflow-hidden bg-brand-black text-brand-white'
              : 'absolute inset-x-0 bottom-0 z-0 h-[100svh] overflow-hidden bg-brand-black text-brand-white'
          }
        >
          {/* Project image layers */}
          <div className="absolute inset-0">
            {heroProjects.map((project, i) => (
              <HeroProjectLayer
                key={project.title}
                project={project}
                index={i}
                activeProjectIndex={activeProjectIndex}
                heroScale={heroScale}
              />
            ))}
          </div>

          {/* Right: Project navigator */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-end gap-5 md:flex"
          >
            {heroProjects.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <AnimatePresence>
                  {activeIdx === i && (
                    <motion.span
                      key="label"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.25 }}
                      className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60"
                    >
                      {p.eyebrow}
                    </motion.span>
                  )}
                </AnimatePresence>
                <motion.div
                  animate={{
                    width: activeIdx === i ? 32 : 12,
                    opacity: activeIdx === i ? 1 : 0.28,
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="h-px bg-white"
                />
              </div>
            ))}

            {/* Action icons */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="#lead-magnet"
                onMouseEnter={() => setCursorLabel('Brochure')}
                onMouseLeave={() => setCursorLabel('')}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-black shadow-2xl transition-all duration-200 hover:scale-110 hover:-translate-y-1"
              >
                <FileText size={17} />
              </Link>
              <Link
                href="/contact"
                onMouseEnter={() => setCursorLabel('Contact')}
                onMouseLeave={() => setCursorLabel('')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/10"
              >
                <PhoneCall size={17} />
              </Link>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
          >
            <motion.div
              animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="h-9 w-px origin-top bg-white"
            />
            <span className="text-[9px] font-bold uppercase tracking-[0.45em] text-white/35">
              Scroll
            </span>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════════════════════════════════════ */}
      <InfiniteMarquee />

      {/* ══════════════════════════════════════════════════════════════════════
          STATS + EDITORIAL STATEMENT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-brand-black py-20 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">

          {/* Animated stat counters */}
          <div className="grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10">
            {stats.map(({ value, suffix, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.14, duration: 0.75 }}
                className="flex flex-col items-start px-0 first:pl-0 md:px-14"
              >
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className="mb-6 text-brand-cloud/50"
                />
                <div className="mb-2 text-[60px] font-semibold leading-none tracking-[-0.05em] md:text-[76px]">
                  <AnimatedCounter value={value} suffix={suffix} />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/35">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Editorial statement */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9 }}
            className="mt-24 grid items-end gap-10 border-t border-white/10 pt-20 md:grid-cols-2"
          >
            <h2 className="text-[38px] font-semibold leading-[0.93] tracking-[-0.04em] md:text-[54px]">
              We build addresses that appreciate in value — and in life.
            </h2>
            <div>
              <p className="mb-8 text-[15px] leading-[1.9] text-white/55">
                Since 1990, Suvastu Properties has been redefining what a home means in Dhaka. Our projects aren&apos;t just buildings — they are ecosystems of wellness, design, and lasting value.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-b border-white/25 pb-1 text-[11px] font-bold uppercase tracking-[0.28em] text-white/60 transition-all hover:border-white hover:text-white"
              >
                Our Story <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TRUST PILLARS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-brand-pearl bg-white py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-center justify-between"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-granite/25 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-granite">
              <Sparkles size={11} /> The Suvastu Standard
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  onMouseEnter={() => setCursorLabel(p.title)}
                  onMouseLeave={() => setCursorLabel('')}
                  className="group relative cursor-default overflow-hidden rounded-3xl border border-brand-pearl bg-brand-stone/5 p-8 transition-colors duration-500 hover:border-brand-black hover:bg-brand-black"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-brand-black transition-colors duration-500 group-hover:text-brand-cloud"
                    />
                    <span className="text-[11px] font-bold text-brand-granite transition-colors duration-500 group-hover:text-brand-cloud/80">
                      {p.stat}
                    </span>
                  </div>
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-granite transition-colors duration-500 group-hover:text-brand-cloud/65">
                    {p.statLabel}
                  </div>
                  <h3 className="mb-3 text-[19px] font-semibold leading-tight transition-colors duration-500 group-hover:text-white">
                    {p.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-brand-charcoal transition-colors duration-500 group-hover:text-white/55">
                    {p.description}
                  </p>

                  {/* Decorative corner fill */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                    className="absolute bottom-0 right-0 h-20 w-20 rounded-tl-full bg-brand-pearl/40 transition-colors duration-500 group-hover:bg-white/5"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PROJECTS IN MOTION (existing component — unchanged)
      ══════════════════════════════════════════════════════════════════════ */}
      <ProjectsInMotion />

      {/* ══════════════════════════════════════════════════════════════════════
          FEATURED PROJECTS — Sticky stacking cards
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="border-b border-brand-pearl bg-brand-stone/8 py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">

          {/* Header */}
          <div className="mb-16 flex items-end justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-4 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-brand-black" />
                <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-brand-granite">
                  Portfolio
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.8 }}
                className="text-[42px] font-semibold leading-[0.92] tracking-[-0.04em] md:text-[66px]"
              >
                Signature<br />Residences
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/projects"
                className="hidden items-center gap-2 rounded-full border border-brand-black px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors hover:bg-brand-black hover:text-white md:inline-flex"
              >
                All Projects <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>

          {/* Sticky stacking cards */}
          <div className="flex flex-col gap-[16vh] pb-[16vh] md:gap-[22vh]">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group sticky overflow-hidden rounded-[28px] border border-brand-pearl bg-white shadow-[0_-10px_50px_rgba(0,0,0,0.07)]"
                style={{ top: `calc(96px + ${i * 14}px)` }}
                onMouseEnter={() => { setHoveredProject(i); setCursorLabel('Explore'); }}
                onMouseLeave={() => { setHoveredProject(null); setCursorLabel(''); }}
              >
                <div className="grid md:grid-cols-[1.15fr_0.85fr]">
                  {/* Image with zoom on hover */}
                  <div className="relative h-[360px] overflow-hidden md:h-[480px]">
                    <motion.div
                      animate={{ scale: hoveredProject === i ? 1.05 : 1 }}
                      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    {/* Location badge on image */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black/55 to-transparent p-6">
                      <div className="flex items-center gap-2">
                        <MapPinned size={13} className="text-brand-cloud" />
                        <span className="text-[12px] font-semibold text-white/80">
                          {project.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                    <div className="mb-7">
                      <span className="rounded-full bg-brand-pearl/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-granite">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mb-3 text-[28px] font-semibold leading-tight tracking-[-0.03em] md:text-[38px]">
                      {project.title}
                    </h3>
                    <div className="mb-8 flex items-center gap-2 text-[13px] text-brand-charcoal">
                      <span className="font-semibold">{project.size}</span>
                      <span className="text-brand-pearl">·</span>
                      <span className="text-green-600 font-medium">Available Now</span>
                    </div>
                    <p className="mb-10 text-[14px] leading-[1.8] text-brand-charcoal">
                      Experience a perfect blend of modern architecture and natural harmony — an unparalleled living experience right in the heart of Dhaka.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-2 rounded-full bg-brand-black px-7 py-[14px] text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-all hover:-translate-y-1 hover:shadow-lg"
                      >
                        View Details <ArrowRight size={12} />
                      </Link>
                      <Link
                        href="#lead-magnet"
                        className="inline-flex items-center gap-2 rounded-full border border-brand-pearl px-7 py-[14px] text-[11px] font-bold uppercase tracking-[0.22em] text-brand-black transition-colors hover:border-brand-black/40 hover:bg-brand-pearl/30"
                      >
                        Get Pricing
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PROCESS / JOURNEY — Horizontal scroll
      ══════════════════════════════════════════════════════════════════════ */}
      <section ref={journeyRef} className="overflow-hidden bg-brand-black py-24 text-white md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-brand-cloud/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-brand-cloud/50">
              The Process
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.85 }}
            className="mb-16 max-w-2xl text-[40px] font-semibold leading-[0.93] tracking-[-0.04em] md:text-[64px]"
          >
            Your seamless path to a Suvastu address.
          </motion.h2>
        </div>

        <div className="pl-6 md:pl-12">
          <motion.div
            style={{ x: journeyX }}
            className="flex gap-5 md:gap-6"
            // make the container wide enough to contain all cards
          >
            {/* Invisible anchor to ensure the parent is wide enough */}
            <div className="hidden w-[max-content] md:flex gap-5 md:gap-6 absolute opacity-0 pointer-events-none">
              {journeySteps.map((s) => (
                <div key={s.label} className="w-[360px] shrink-0" />
              ))}
            </div>

            {journeySteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -7, transition: { duration: 0.3 } }}
                className="group relative w-[290px] shrink-0 cursor-default rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10 md:w-[360px] md:p-10"
              >
                <div className="mb-8 select-none text-[68px] font-light leading-none tracking-[-0.05em] text-white/12">
                  {step.label}
                </div>
                <h3 className="mb-4 text-[26px] font-semibold md:text-[30px]">{step.title}</h3>
                <p className="text-[14px] leading-[1.8] text-white/50">{step.description}</p>
                {i === journeySteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-8"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-black transition-all hover:bg-brand-cloud hover:-translate-y-0.5"
                    >
                      Begin <ChevronRight size={13} />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          LEAD MAGNET — Completely redesigned
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="lead-magnet" className="relative overflow-hidden bg-white py-24 md:py-36">

        {/* Soft ambient blobs */}
        <div className="pointer-events-none absolute right-0 top-0 h-[700px] w-[700px] -translate-y-1/4 translate-x-1/4 rounded-full bg-brand-pearl/40 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-[500px] w-[500px] translate-y-1/3 rounded-full bg-brand-stone/15 blur-[80px]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-black px-5 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-white">
              <Download size={11} /> Free Download
            </div>
            <h2 className="mx-auto max-w-2xl text-[38px] font-semibold leading-[0.92] tracking-[-0.04em] md:text-[62px]">
              The Complete<br />Residence Fit Checklist.
            </h2>
          </motion.div>

          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

            {/* Left: Benefits panel */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85 }}
              className="rounded-[32px] border border-brand-pearl bg-brand-stone/5 p-8 md:p-12"
            >
              <p className="mb-10 text-[17px] leading-[1.85] text-brand-charcoal">
                Cut through the noise. Get expert insights on comparing locations, evaluating developer reputation, and understanding true investment value before booking a visit.
              </p>

              <div className="mb-10 space-y-5">
                {checklistItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-black">
                      <Check size={12} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-[15px] font-semibold leading-snug text-brand-black">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Social proof strip */}
              <div className="flex items-center gap-5 border-t border-brand-pearl pt-8">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, n) => (
                    <div
                      key={n}
                      className="h-9 w-9 rounded-full border-2 border-white bg-brand-stone/30"
                    />
                  ))}
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-0.5">
                    {[...Array(5)].map((_, n) => (
                      <Star key={n} size={12} fill="currentColor" className="text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[12px] text-brand-charcoal">
                    <strong className="text-brand-black">2,000+</strong> investors trust our guidance
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Form — dark luxury card */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[32px] bg-brand-black p-8 shadow-[0_30px_80px_rgba(11,11,11,0.18)] md:p-10">

                {/* FREE badge */}
                <motion.div
                  initial={{ rotate: 0, scale: 0.8 }}
                  whileInView={{ rotate: 6, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                  className="absolute right-8 top-8"
                >
                  <div className="rounded-2xl bg-white px-4 py-2.5 text-center shadow-lg">
                    <span className="block text-[22px] font-bold leading-none text-brand-black">
                      FREE
                    </span>
                    <span className="mt-0.5 block text-[8px] font-bold uppercase tracking-widest text-brand-granite">
                      Download
                    </span>
                  </div>
                </motion.div>

                {/* Form / Success state */}
                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex min-h-[440px] flex-col items-center justify-center py-10 text-center text-white"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 260 }}
                        className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10"
                      >
                        <Check size={28} strokeWidth={2.5} />
                      </motion.div>
                      <h3 className="mb-3 text-2xl font-semibold">You&apos;re all set!</h3>
                      <p className="max-w-[30ch] text-[15px] leading-7 text-white/50">
                        Your guide is on its way. Check your inbox within a few minutes.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" exit={{ opacity: 0 }}>
                      <h3 className="mb-1 text-2xl font-semibold text-white">
                        Where should we send it?
                      </h3>
                      <p className="mb-8 text-[14px] text-white/45">
                        Join 2,000+ who&apos;ve used our guide to invest smarter.
                      </p>

                      <div className="space-y-4">
                        {[
                          { icon: User, placeholder: 'Full Name', type: 'text' },
                          { icon: Mail, placeholder: 'Email Address', type: 'email' },
                          { icon: Phone, placeholder: 'Phone Number', type: 'tel' },
                        ].map(({ icon: Icon, placeholder, type }) => (
                          <div key={placeholder} className="relative">
                            <Icon
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/28"
                              size={16}
                            />
                            <input
                              type={type}
                              placeholder={placeholder}
                              className="w-full rounded-xl border border-white/10 bg-white/6 py-[15px] pl-11 pr-4 text-[14px] text-white placeholder-white/28 outline-none transition-colors focus:border-white/28 focus:bg-white/10"
                            />
                          </div>
                        ))}

                        <div className="pt-1">
                          <p className="mb-3 text-[12px] font-semibold text-white/40">
                            I am primarily a:
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {['Buyer', 'Investor', 'Landowner', 'Realtor'].map((item) => (
                              <button
                                key={item}
                                type="button"
                                onClick={() => setIntent(item)}
                                className={`rounded-xl py-[13px] text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-200 ${
                                  intent === item
                                    ? 'bg-white text-brand-black shadow-lg'
                                    : 'border border-white/12 text-white/42 hover:border-white/28 hover:text-white/75'
                                }`}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>

                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setFormSubmitted(true)}
                          className="mt-2 w-full rounded-xl bg-white py-[17px] text-[12px] font-bold uppercase tracking-[0.28em] text-brand-black shadow-[0_10px_30px_rgba(255,255,255,0.12)] transition-shadow hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]"
                        >
                          Get Immediate Access →
                        </motion.button>

                        <p className="text-center text-[11px] text-white/28">
                          We respect your privacy. No spam, ever.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mobile Floating Nav ────────────────────────────────────────────── */}
      <div className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 overflow-hidden rounded-full border border-brand-charcoal/80 bg-brand-black text-white shadow-[0_18px_48px_rgba(27,33,39,0.38)] md:hidden">
        <Link
          href="#lead-magnet"
          className="flex items-center gap-2 px-6 py-[15px] text-[10px] font-bold uppercase tracking-[0.22em] transition-colors hover:bg-brand-charcoal"
        >
          <Download size={15} /> Guide
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-2 border-l border-brand-charcoal/80 px-6 py-[15px] text-[10px] font-bold uppercase tracking-[0.22em] transition-colors hover:bg-brand-charcoal"
        >
          <MapPinned size={15} /> Visit
        </Link>
      </div>
    </main>
  );
}