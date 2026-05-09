'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion, MotionValue, useScroll, useSpring, useTransform, useMotionValueEvent } from 'motion/react';
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
} from 'lucide-react';

const heroProjects = [
  {
    eyebrow: 'Suvastu Shaptarshi',
    title: 'Wellness and Luxury',
    description:
      'Strategically located at Block-H, Road-07, Banani, Suvastu Shaptarshi is set to be your ideal abode to rejuvenate your mind and soul! It is designed to be your ideal home where you can unwind and focus on the true values of your life. It is a home where you Return to Yourself!',
    image: '/Shoptorshi.png',
    href: '/projects/suvastu-shaptarshi',
    index: '01',
    accent: 'Return to Yourself',
  },
  {
    eyebrow: 'Suvastu Florentina',
    title: 'Life of Wellness',
    description:
      'The name “Florentina” is reminiscent of the iconic city of Florence, Italy. And just like the city, Florentina tells a story of harmony in our designs, meticulousness in our works, and grace in every detail. Florentina extends a warm embrace to all and promises a life of wellness.',
    image: '/florentina.jpg',
    href: '/projects/suvastu-florentina',
    index: '02',
    accent: 'Harmony in Every Detail',
  },
  {
    eyebrow: 'Suvastu Mirambeena',
    title: 'A Symphony of Welcome',
    description:
      'Suvastu Mirambeena is where luxury meets convenience and offers real estate investment opportunities. It’s your ticket to modern urban living in Dhaka, making it one of the top choices for residential properties in Dhaka.',
    image: '/mirambeenacover.png',
    href: '/projects/suvastu-mirambeena',
    index: '03',
    accent: 'Luxury Meets Convenience',
  },
  {
    eyebrow: 'Saleha Suvastu',
    title: 'Dream Home Where You Celebrate',
    description:
      'Discover eco-friendly apartments with modern and luxurious facilities in the heart of Gulshan. Saleha Suvastu is your gateway to the finest real estate deal in Dhaka, offered by Suvastu Properties Ltd.',
    image: '/saleha.jpg',
    href: '/projects/saleha-suvastu',
    index: '04',
    accent: 'Eco-Luxury in Gulshan',
  },
];

const journeySteps = [
  {
    label: '01',
    title: 'Discover the right address',
    description:
      'Start with the projects, locations, and lifestyle narrative that best match your family, investment goals, and preferred neighborhood.',
  },
  {
    label: '02',
    title: 'Qualify the fit with confidence',
    description:
      'Use project detail pages, buyer guidance, and direct advisor access to understand value, layout logic, amenities, and next steps.',
  },
  {
    label: '03',
    title: 'Take the next step clearly',
    description:
      'Move into a dedicated inquiry path for buyers or landowners, with the right form, the right expectations, and a stronger conversion route.',
  },
];

const leadMagnetItems = [
  'Compare Banani, Baridhara, and Gulshan project fit',
  'Shortlist available residences by lifestyle and budget intent',
  'Get the right questions to ask before booking a site visit',
  'Understand buyer and landowner next steps before speaking with an advisor',
];

const trustPillars = [
  {
    icon: Compass,
    title: 'Best Locations',
    description: 'Addresses selected for long-term value, mobility, and a refined city lifestyle.',
  },
  {
    icon: BadgeCheck,
    title: 'High-End Construction',
    description: 'Materials, execution, and detailing held to a premium residential standard.',
  },
  {
    icon: PhoneCall,
    title: 'Enhanced Customer Services',
    description: 'A guided experience from first visit to final handover and after-sales support.',
  },
  {
    icon: Building2,
    title: 'Excellent Design',
    description: 'Plans shaped around proportion, daylight, circulation, and everyday comfort.',
  },
  {
    icon: CalendarCheck,
    title: 'On-Time Handover',
    description: 'Delivery discipline backed by a development process built around accountability.',
  },
];

const funnelCards = [
  {
    icon: Home,
    eyebrow: 'Buyer Journey',
    title: 'Searching for a new residence or an investment-grade address?',
    description:
      'Move from discovery to consultation with project shortlists, value cues, and a direct route to site visits, brochures, and advisor contact.',
    href: '/contact#buyer-form',
    cta: 'Start Buyer Journey',
  },
  {
    icon: Handshake,
    eyebrow: 'Landowner Journey',
    title: 'Exploring development potential for your land?',
    description:
      'Use the dedicated landowner route to discuss site location, partnership model, development viability, and the shape of a transparent joint venture.',
    href: '/landowners#landowner-form',
    cta: 'Start Landowner Journey',
  },
];

const featuredProjects = [
  { title: 'Suvastu Shaptarshi', category: 'Wellness & Luxury', image: '/shaptarshi.png', href: '/projects/suvastu-shaptarshi' },
  { title: 'Suvastu Mirambeena', category: 'Residential', image: '/Mirambeena.png', href: '/projects/suvastu-mirambeena' },
  { title: 'Saleha Suvastu', category: 'Luxury Living', image: '/saleha.png', href: '/projects/saleha-suvastu' },
  { title: 'Suvastu Florentina', category: 'Contemporary', image: '/florentina.png', href: '/projects/suvastu-florentina' },
];

type HeroProject = (typeof heroProjects)[number];

function HeroProjectLayer({
  project,
  index,
  activeProjectIndex,
  heroScale,
}: {
  project: HeroProject;
  index: number;
  activeProjectIndex: MotionValue<number>;
  heroScale: MotionValue<number>;
}) {
  const opacity = useTransform(activeProjectIndex, [index - 0.55, index, index + 0.55], [0, 1, 0]);
  const y = useTransform(activeProjectIndex, [index - 0.55, index, index + 0.55], [42, 0, -42]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
        <Image src={project.image} alt={project.eyebrow} fill priority={index === 0} sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,33,39,0.92),rgba(27,33,39,0.58)_42%,rgba(27,33,39,0.18))]" />
      <motion.div
        className="absolute inset-x-0 bottom-0 top-0 mx-auto grid max-w-7xl items-center px-6 pb-10 pt-10 md:px-12 md:pb-16 lg:grid-cols-[0.88fr_1.12fr]"
        style={{ y }}
      >
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-cloud">
            <span>{project.index}</span>
            <span className="h-px w-10 bg-brand-cloud" />
            <span>{project.eyebrow}</span>
          </div>
          <h1 className="max-w-[11ch] text-[48px] font-semibold leading-[0.9] tracking-[-0.05em] text-white sm:text-[64px] md:text-[86px]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-brand-pearl/88 md:text-base md:leading-8">
            {project.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#lead-magnet" className="inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-black transition-transform duration-300 hover:-translate-y-1">
              Get Buyer Guide <Download size={15} />
            </Link>
            <Link href={project.href} className="inline-flex items-center gap-3 rounded-md border border-brand-cloud px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white hover:text-brand-black">
              View Project <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MockupLanding() {
  const [intent, setIntent] = useState('Buyer');
  const ref = useRef<HTMLElement>(null);
  const pinnedStateRef = useRef(true);
  const [isPinned, setIsPinned] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 22, mass: 0.8 });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextPinned = pinnedStateRef.current
      ? latest < 0.996
      : latest < 0.985;

    if (nextPinned !== pinnedStateRef.current) {
      pinnedStateRef.current = nextPinned;
      setIsPinned(nextPinned);
    }
  });

  const activeProjectIndex = useTransform(smooth, [0, 0.28, 0.52, 0.76, 1], [0, 1, 2, 3, 3]);
  const heroScale = useTransform(smooth, [0, 1], [1.08, 1]);
  const journeyX = useTransform(smooth, [0.12, 0.58], ['0%', '-34%']);
  const progressWidth = useTransform(smooth, [0, 1], ['0%', '100%']);

  return (
    <main className="relative bg-white text-brand-black">
      <div className="fixed bottom-0 left-0 right-0 z-40 h-1 bg-brand-pearl">
        <motion.div className="h-full bg-brand-black" style={{ width: progressWidth }} />
      </div>

      <section ref={ref} className="relative h-[420svh] border-b border-brand-pearl">
        <div className={isPinned
            ? 'fixed left-0 right-0 top-0 z-0 h-[100svh] overflow-hidden bg-brand-black text-brand-white'
            : 'absolute inset-x-0 bottom-0 z-0 h-[100svh] overflow-hidden bg-brand-black text-brand-white'}>
          <div className="absolute inset-0">
            {heroProjects.map((project, index) => {
              return (
                <HeroProjectLayer
                  key={project.title}
                  project={project}
                  index={index}
                  activeProjectIndex={activeProjectIndex}
                  heroScale={heroScale}
                />
              );
            })}
          </div>

          <div className="absolute bottom-8 right-6 hidden w-[330px] border border-white/18 bg-white/10 p-5 backdrop-blur-md md:block">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-cloud">
              <Sparkles size={14} />
              Scroll to qualify
            </div>
            <p className="text-sm leading-6 text-brand-pearl">
              Compare signature residences, understand fit, and move into the right buyer or landowner inquiry path.
            </p>
          </div>
        </div>
      </section>

      <ProjectsInMotion />

      <section className="overflow-hidden border-b border-brand-pearl bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-granite" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Your Suvastu Journey</span>
              </div>
              <h2 className="max-w-xl text-[38px] font-semibold leading-[0.96] tracking-[-0.05em] text-brand-black md:text-[68px]">
                Find the Suvastu address that fits the life you want to build.
              </h2>
            </div>
            <p className="max-w-2xl text-[15px] leading-8 text-brand-charcoal md:justify-self-end md:text-base">
              Explore signature residences, compare locations and lifestyles, and move forward with clear guidance whether you are searching for a home, an investment, or a land development partnership.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {journeySteps.map((step) => (
              <article key={step.label} className="min-h-[300px] border border-brand-pearl bg-[linear-gradient(180deg,#fff,rgba(230,234,237,0.45))] p-6 shadow-[0_18px_42px_rgba(27,33,39,0.06)] md:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-granite">{step.label}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-brand-stone bg-white">
                    <Check size={18} />
                  </span>
                </div>
                <h3 className="mb-4 max-w-[13ch] text-[28px] font-semibold leading-[1.02] tracking-[-0.04em] text-brand-black md:text-[38px]">{step.title}</h3>
                <p className="text-[15px] leading-7 text-brand-charcoal">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-magnet" className="border-b border-brand-pearl bg-brand-black py-20 text-brand-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-cloud" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-cloud">Lead Magnet</span>
            </div>
            <h2 className="max-w-2xl text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-[64px]">
              Get the Suvastu Residence Fit Checklist before you book a visit.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-brand-pearl/84">
              A practical guide for serious buyers and landowners to compare location, lifestyle, value, amenities, and the next conversation with Suvastu advisors.
            </p>
            <div className="mt-8 grid gap-3">
              {leadMagnetItems.map((item) => (
                <div key={item} className="flex gap-3 text-[14px] leading-6 text-brand-pearl">
                  <ShieldCheck className="mt-1 shrink-0 text-brand-cloud" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="border border-brand-charcoal bg-white p-6 text-brand-black shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-black text-white">
                  <FileText size={22} />
                </div>
                <h3 className="text-[28px] font-semibold leading-[1.02] tracking-[-0.04em]">Download the checklist</h3>
              </div>
              <span className="rounded-md border border-brand-pearl px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-granite">Free</span>
            </div>
            <div className="grid gap-4">
              <input className="h-12 rounded-md border border-brand-pearl px-4 text-sm outline-none transition-colors focus:border-brand-black" placeholder="Full name" />
              <input className="h-12 rounded-md border border-brand-pearl px-4 text-sm outline-none transition-colors focus:border-brand-black" placeholder="Phone number" />
              <input className="h-12 rounded-md border border-brand-pearl px-4 text-sm outline-none transition-colors focus:border-brand-black" placeholder="Email address" />
              <div className="grid grid-cols-2 gap-3">
                {['Buyer', 'Investor', 'Landowner', 'Not sure'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setIntent(item)}
                    className={intent === item
                      ? 'rounded-md border border-brand-black bg-brand-black px-3 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white'
                      : 'rounded-md border border-brand-pearl px-3 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-granite transition-colors hover:border-brand-black hover:text-brand-black'}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <Link href={intent === 'Landowner' ? '/landowners#landowner-form' : '/contact#buyer-form'} className="mt-2 inline-flex h-12 items-center justify-center gap-3 rounded-md bg-brand-black px-5 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:-translate-y-1">
                Send Checklist and Match Me <ArrowRight size={15} />
              </Link>
              <p className="text-xs leading-5 text-brand-granite">
                The next step routes to the right Suvastu inquiry path, so sales receives higher-intent leads with clearer buyer or landowner context.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="border-b border-brand-pearl bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-granite" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Portfolio</span>
              </div>
              <h2 className="text-[40px] font-semibold leading-[0.96] tracking-[-0.04em] text-brand-black md:text-[64px]">Featured Projects</h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-brand-charcoal">Symphonies of architecture and nature, designed to elevate your everyday.</p>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-black">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <Link key={project.title} href={project.href} className="group overflow-hidden border border-brand-pearl bg-white shadow-[0_16px_34px_rgba(27,33,39,0.08)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-pearl">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/18 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="mb-2 block text-[9px] uppercase tracking-[0.3em] text-brand-cloud">{project.category}</span>
                    <h3 className="text-[28px] font-semibold leading-[1.02] tracking-[-0.035em] text-white">{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brand-pearl bg-[linear-gradient(180deg,#fff,rgba(230,234,237,0.55))] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-granite" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Why Homeowners Choose Suvastu</span>
              </div>
              <h2 className="text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] text-brand-black md:text-[64px]">
                The confidence of a premium address, designed well beyond the brochure.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {trustPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article key={pillar.title} className="border border-brand-pearl bg-white p-6 shadow-[0_18px_42px_rgba(27,33,39,0.05)] transition-transform duration-300 hover:-translate-y-1">
                    <Icon className="mb-7 text-brand-black" size={28} strokeWidth={1.8} />
                    <h3 className="mb-3 text-[22px] font-semibold leading-[1.08] tracking-[-0.035em] text-brand-black">{pillar.title}</h3>
                    <p className="text-[14px] leading-6 text-brand-charcoal">{pillar.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="mt-12 grid gap-8 border-t border-brand-pearl pt-10 md:grid-cols-3">
            {[
              ['30+', 'Years shaping premium addresses'],
              ['75+', 'Projects delivered across Dhaka'],
              ['10M+', 'Square feet thoughtfully developed'],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="mb-2 text-[42px] font-semibold leading-none tracking-[-0.05em] text-brand-black">{value}</div>
                <p className="max-w-[22ch] text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-granite">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brand-pearl bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-10 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-granite" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Begin the Journey</span>
            </div>
            <h2 className="text-[38px] font-semibold leading-[0.98] tracking-[-0.045em] text-brand-black md:text-[76px]">
              Ready to elevate your everyday?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {funnelCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Link key={card.eyebrow} href={card.href} className={index === 1 ? 'group bg-brand-black p-7 text-brand-white shadow-[0_22px_50px_rgba(27,33,39,0.16)] md:p-8' : 'group border border-brand-pearl bg-white p-7 shadow-[0_16px_40px_rgba(27,33,39,0.08)] md:p-8'}>
                  <Icon className="mb-8" size={30} strokeWidth={1.7} />
                  <div className={index === 1 ? 'mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-cloud' : 'mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-granite'}>{card.eyebrow}</div>
                  <h3 className="mb-4 max-w-[18ch] text-[30px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[40px]">{card.title}</h3>
                  <p className={index === 1 ? 'mb-8 max-w-xl text-[15px] leading-7 text-brand-pearl/82' : 'mb-8 max-w-xl text-[15px] leading-7 text-brand-charcoal'}>{card.description}</p>
                  <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em]">
                    {card.cta}
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 overflow-hidden rounded-md border border-brand-charcoal bg-brand-black text-white shadow-[0_18px_48px_rgba(27,33,39,0.22)] md:flex">
        <Link href="#lead-magnet" className="flex items-center gap-2 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-brand-charcoal">
          <Download size={14} />
          Get Checklist
        </Link>
        <Link href="/contact#buyer-form" className="flex items-center gap-2 border-l border-brand-charcoal px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-brand-charcoal">
          <MapPinned size={14} />
          Book Visit
        </Link>
      </div>
    </main>
  );
}
