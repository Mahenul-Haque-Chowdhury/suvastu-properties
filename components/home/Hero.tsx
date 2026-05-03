'use client';

import { MouseEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useIsMobile } from '@/hooks/use-mobile';

const heroProjects = [
  {
    eyebrow: 'Suvastu Shaptarshi',
    titleLines: ['Wellness', 'and Luxury'],
    titleMinHeight: 'min-h-[155px] md:min-h-[190px] lg:min-h-[220px]',
    description: 'A wellness-led Banani address designed to help you return to yourself in everyday city life.',
    desktopDescription:
      'Strategically located at Block-H, Road-07, Banani, Suvastu Shaptarshi is set to be your ideal abode to rejuvenate your mind and soul! It is designed to be your ideal home where you can unwind and focus on the true values of your life. It is a home where you Return to Yourself!',
    image: '/Shoptorshi.png',
    projectName: 'Suvastu Shaptarshi',
    projectDesc:
      'A wholesome blend of wellness and luxury.',
    link: '/projects/suvastu-shaptarshi',
    index: '01',
    accent: 'Return to Yourself'
  },
  {
    eyebrow: 'Suvastu Florentina',
    titleLines: ['Life of', 'Wellness'],
    titleMinHeight: 'min-h-[145px] md:min-h-[180px] lg:min-h-[210px]',
    description: 'A graceful residence shaped around harmony, warmth, and a more elevated life of wellness.',
    desktopDescription:
      'The name “Florentina” is reminiscent of the iconic city of Florence, Italy. And just like the city, Florentina tells a story of harmony in our designs, meticulousness in our works, and grace in every detail. Florentina extends a warm embrace to all and promises a life of wellness.',
    image: '/florentina.jpg',
    projectName: 'Suvastu Florentina',
    projectDesc: 'Inviting you to a life of wellness.',
    link: '/projects/suvastu-florentina',
    index: '02',
    accent: 'Harmony in Every Detail'
  },
  {
    eyebrow: 'Suvastu Mirambeena',
    titleLines: ['A Symphony', 'of Welcome'],
    titleMinHeight: 'min-h-[220px] md:min-h-[280px] lg:min-h-[320px]',
    description: 'A Banani residence where luxury, convenience, and investment value come together clearly.',
    desktopDescription:
      'Suvastu Mirambeena is where luxury meets convenience and offers real estate investment opportunities. It’s your ticket to modern urban living in Dhaka, making it one of the top choices for residential properties in Dhaka.',
    image: '/mirambeenacover.png',
    projectName: 'Suvastu Mirambeena',
    projectDesc: 'A symphony of welcome.',
    link: '/projects/suvastu-mirambeena',
    index: '03',
    accent: 'Luxury Meets Convenience'
  },
  {
    eyebrow: 'Saleha Suvastu',
    titleLines: ['Dream Home', 'Where You', 'Celebrate'],
    titleMinHeight: 'min-h-[220px] md:min-h-[280px] lg:min-h-[320px]',
    description: 'An eco-conscious Gulshan residence that brings modern luxury and everyday celebration together.',
    desktopDescription:
      'Discover eco-friendly apartments with modern and luxurious facilities in the heart of Gulshan. Saleha Suvastu is your gateway to the finest real estate deal in Dhaka, offered by Suvastu Properties Ltd.',
    image: '/saleha.jpg',
    projectName: 'Saleha Suvastu',
    projectDesc: 'Your dream home where life is celebrated.',
    link: '/projects/saleha-suvastu',
    index: '04',
    accent: 'Eco-Luxury in Gulshan'
  }
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getTransitionState(progress: number, totalSlides: number) {
  const clampedProgress = clamp(progress, 0, 0.9999);
  const segment = 1 / totalSlides;
  const rawIndex = Math.min(totalSlides - 1, Math.floor(clampedProgress / segment));
  const localProgress = (clampedProgress - rawIndex * segment) / segment;
  const transitionStart = 0.44;
  const transitionProgress = rawIndex === totalSlides - 1
    ? 0
    : clamp((localProgress - transitionStart) / (1 - transitionStart), 0, 1);

  return {
    currentIndex: rawIndex,
    nextIndex: Math.min(rawIndex + 1, totalSlides - 1),
    transitionProgress
  };
}

export default function Hero() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const navigationTimeoutRef = useRef<number | null>(null);
  const [transitionState, setTransitionState] = useState({
    currentIndex: 0,
    nextIndex: 1,
    transitionProgress: 0
  });
  const [hasEntered, setHasEntered] = useState(false);
  const [isPinned, setIsPinned] = useState(true);
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);
  const heroScrollHeight = `${heroProjects.length * 72}svh`;

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setHasEntered(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);

      if (navigationTimeoutRef.current !== null) {
        window.clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  function handleExploreClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    if (navigationTimeoutRef.current !== null) {
      window.clearTimeout(navigationTimeoutRef.current);
    }

    setNavigatingTo(href);

    navigationTimeoutRef.current = window.setTimeout(() => {
      router.push(href);
    }, 240);
  }

  const { scrollYProgress } = useScroll({
    target: isMobile ? mobileContainerRef : desktopContainerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 42,
    damping: 20,
    mass: 0.9
  });

  const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.035, 1.012]);
  const imageY = useTransform(smoothProgress, [0, 1], ['0%', '-2.2%']);

  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    const responsiveProgress = isMobile
      ? clamp(latest * 1.18, 0, 0.9999)
      : latest;

    setTransitionState(getTransitionState(responsiveProgress, heroProjects.length));
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setIsPinned(latest < 0.999);
  });

  const currentProject = heroProjects[transitionState.currentIndex];
  const nextProject = heroProjects[transitionState.nextIndex];
  const transitionProgress = transitionState.transitionProgress;
  const currentOpacity = 1 - clamp(transitionProgress * 1.75, 0, 1);
  const nextOpacity = clamp((transitionProgress - 0.34) / 0.66, 0, 1);
  const currentImageOpacity = 1;
  const nextImageOpacity = 0.26 + clamp((transitionProgress - 0.18) / 0.82, 0, 1) * 0.74;
  const currentTranslateY = -26 * transitionProgress;
  const nextTranslateY = 40 * (1 - transitionProgress);
  const currentImageTranslateY = 0;
  const nextImageTranslateY = 20 * (1 - transitionProgress);
  const revealRadius = `${32 + transitionProgress * 138}%`;
  const revealClipPath = `circle(${revealRadius} at 100% 0%)`;
  const imageOverlay = 'linear-gradient(180deg, rgba(83,90,95,0.42), rgba(27,33,39,0.68))';
  const imageBottomOverlay = 'linear-gradient(to top, rgba(27,33,39,0.72), rgba(27,33,39,0.28), rgba(27,33,39,0))';
  const introTransition = {
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1] as const
  };

  function getTileMotion(layer: 'current' | 'next', offset: number, distance: number) {
    const tileProgress = clamp((transitionProgress - offset) / 0.28, 0, 1);

    if (layer === 'current') {
      return {
        opacity: 1 - tileProgress,
        y: -distance * tileProgress
      };
    }

    return {
      opacity: tileProgress,
      y: distance * (1 - tileProgress)
    };
  }

  function renderCopyPanel(project: (typeof heroProjects)[number], layer: 'current' | 'next') {
    const isCurrentLayer = layer === 'current';
    const headlineTile = getTileMotion(layer, 0.1, 28);
    const bodyTile = getTileMotion(layer, 0.18, 22);
    const ctaTile = getTileMotion(layer, 0.24, 18);
    const statsTile = getTileMotion(layer, 0.3, 16);
    const laptopHeightClass = '[@media(min-width:768px)_and_(max-height:780px)]:min-h-[150px] [@media(min-width:768px)_and_(max-height:780px)]:mb-3';

    return (
      <motion.div
        key={`${project.projectName}-${layer}-copy`}
        className="absolute inset-0 flex h-full w-full flex-col justify-center px-8 pb-6 pt-20 md:px-10 md:pb-8 md:pt-22 xl:px-12 xl:pb-10 xl:pt-28 [@media(min-width:768px)_and_(max-height:780px)]:px-8 [@media(min-width:768px)_and_(max-height:780px)]:pb-5 [@media(min-width:768px)_and_(max-height:780px)]:pt-16"
        initial={false}
        style={{
          opacity: 1,
          y: 0,
          pointerEvents: isCurrentLayer && transitionProgress < 0.6 ? 'auto' : 'none'
        }}
      >
        <motion.div className={`${project.titleMinHeight ?? 'min-h-[220px] md:min-h-[220px] xl:min-h-[280px] 2xl:min-h-[320px]'} ${laptopHeightClass}`} style={headlineTile}>
          <motion.h1 className="max-w-[340px] text-[50px] font-semibold leading-[0.9] tracking-[-0.045em] text-brand-black md:max-w-[320px] md:text-[52px] lg:text-[58px] xl:max-w-[360px] xl:text-[64px] 2xl:text-[72px] [@media(min-width:768px)_and_(max-height:780px)]:max-w-[280px] [@media(min-width:768px)_and_(max-height:780px)]:text-[42px] [@media(min-width:768px)_and_(max-height:780px)]:leading-[0.92]">
            {project.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>
        </motion.div>
        <motion.div className="mb-4 min-h-[86px] md:min-h-[88px] xl:mb-5 xl:min-h-[110px] [@media(min-width:768px)_and_(max-height:780px)]:mb-3 [@media(min-width:768px)_and_(max-height:780px)]:min-h-[72px]" style={bodyTile}>
          <motion.p className="max-w-[360px] text-[15px] leading-7 text-brand-charcoal md:max-w-[320px] md:text-[15px] md:leading-7 xl:max-w-[360px] xl:text-base xl:leading-8 [@media(min-width:768px)_and_(max-height:780px)]:max-w-[290px] [@media(min-width:768px)_and_(max-height:780px)]:text-[13px] [@media(min-width:768px)_and_(max-height:780px)]:leading-6">
            {project.desktopDescription ?? project.description}
          </motion.p>
        </motion.div>
        <motion.div className="mb-3 xl:mb-4 [@media(min-width:768px)_and_(max-height:780px)]:mb-2" style={ctaTile}>
          <motion.div
            animate={navigatingTo === project.link ? { scale: 0.94, y: 2 } : { scale: 1, y: 0 }}
            whileTap={navigatingTo === project.link ? undefined : { scale: 0.972, y: 1 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex"
          >
            <Link
              href={project.link}
              onClick={(event) => handleExploreClick(event, project.link)}
              className="group inline-flex items-center"
            >
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-black bg-brand-white transition-all duration-500 group-hover:bg-brand-black group-hover:shadow-[0_10px_24px_rgba(27,33,39,0.16)] [@media(min-width:768px)_and_(max-height:780px)]:h-10 [@media(min-width:768px)_and_(max-height:780px)]:w-10">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-brand-black transition-all duration-500 group-hover:translate-x-[2px] group-hover:stroke-brand-white"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <span className="-ml-6 flex h-12 min-w-[152px] items-center rounded-r-full border border-l-0 border-brand-black bg-brand-black px-6 pl-10 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-white transition-all duration-500 group-hover:border-brand-black group-hover:bg-brand-white group-hover:pr-7 group-hover:text-brand-black [@media(min-width:768px)_and_(max-height:780px)]:h-10 [@media(min-width:768px)_and_(max-height:780px)]:min-w-[132px] [@media(min-width:768px)_and_(max-height:780px)]:px-5 [@media(min-width:768px)_and_(max-height:780px)]:pl-9 [@media(min-width:768px)_and_(max-height:780px)]:text-[10px]">
                Explore
              </span>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-brand-cloud md:hidden" style={statsTile}>
          <span>{project.index}</span>
          <div className="h-[1px] flex-1 bg-brand-pearl" />
          <span>{project.accent}</span>
        </motion.div>
        <motion.div className="mt-auto hidden w-full space-x-6 border-t border-brand-pearl pt-4 md:flex xl:space-x-8 xl:pt-5 [@media(min-width:768px)_and_(max-height:780px)]:space-x-5 [@media(min-width:768px)_and_(max-height:780px)]:pt-3" style={statsTile}>
          <div className="flex flex-col">
            <span className="text-[28px] font-medium leading-none text-brand-black xl:text-2xl [@media(min-width:768px)_and_(max-height:780px)]:text-[24px]">30+</span>
            <span className="mt-1 text-[9px] uppercase tracking-widest text-brand-cloud [@media(min-width:768px)_and_(max-height:780px)]:text-[8px]">Years of Excellence</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[28px] font-medium leading-none text-brand-black xl:text-2xl [@media(min-width:768px)_and_(max-height:780px)]:text-[24px]">Thousands</span>
            <span className="mt-1 text-[9px] uppercase tracking-widest text-brand-cloud [@media(min-width:768px)_and_(max-height:780px)]:text-[8px]">of Happy Families</span>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  function renderProjectCard(project: (typeof heroProjects)[number], layer: 'current' | 'next') {
    const isCurrentLayer = layer === 'current';

    return (
      <motion.div
        key={`${project.projectName}-${layer}-card`}
        className="absolute inset-0"
        initial={false}
        style={{
          opacity: isCurrentLayer ? currentOpacity : nextOpacity,
          y: isCurrentLayer ? currentTranslateY : nextTranslateY,
          pointerEvents: isCurrentLayer && transitionProgress < 0.6 ? 'auto' : 'none',
          clipPath: isCurrentLayer ? undefined : revealClipPath
        }}
      >
        <div className="relative h-full w-full">
          <div className="pointer-events-auto absolute bottom-6 left-6 w-[calc(100%-3rem)] max-w-[320px] border border-brand-pearl bg-white p-6 shadow-2xl md:bottom-[70px] md:left-6 md:max-w-sm md:p-8 lg:left-10">
            <div className="mb-2 text-[9px] uppercase tracking-[0.3em] text-brand-granite">Featured Project</div>
            <h2 className="mb-3 text-2xl font-bold tracking-[-0.03em] text-brand-black md:text-[30px]">{project.projectName}</h2>
            <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-brand-cloud">
              <span>{project.index}</span>
              <div className="h-[1px] flex-1 bg-brand-pearl" />
              <span>{project.accent}</span>
            </div>
            <p className="mb-6 hidden text-[13px] leading-7 text-brand-charcoal md:block">
              {project.projectDesc}
            </p>
            <div className="mt-6 flex flex-col items-start justify-between gap-4 md:mt-0 md:flex-row md:items-end md:gap-0">
              <Link href={project.link} className="text-[10px] font-bold text-brand-black transition-colors hover:text-brand-granite">
                VIEW DETAILS
              </Link>
              <div className="text-[9px] font-medium text-brand-cloud">{`${project.index} / 04`}</div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  function renderMobileProjectCard(project: (typeof heroProjects)[number]) {
    return (
      <motion.article
        key={`${project.projectName}-mobile`}
        initial={{ opacity: 0.55, y: 34, scale: 0.965 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ amount: 0.68, once: false }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-[calc(100svh-6.75rem)] w-[94vw] shrink-0 snap-center flex-col overflow-hidden rounded-[28px] border border-brand-pearl bg-white shadow-[0_18px_40px_rgba(27,33,39,0.08)]"
      >
        <div className="relative h-[34svh] min-h-[220px] w-full overflow-hidden bg-brand-pearl">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.12, opacity: 0.78 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0.7, once: false }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={project.image}
              alt={project.projectName}
              fill
              sizes="94vw"
              className="object-cover"
              priority={project.index === '01'}
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/72 via-brand-black/18 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-brand-pearl/78">{project.projectName}</div>
            <p className="max-w-[16rem] text-[18px] font-semibold leading-[1.05] tracking-[-0.03em]">{project.projectDesc}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.24em] text-brand-granite">
            <span>{project.index}</span>
            <div className="h-[1px] flex-1 bg-brand-pearl" />
            <span>{project.accent}</span>
          </div>
          <h1 className="mt-4 text-[34px] font-semibold leading-[0.92] tracking-[-0.05em] text-brand-black">
            {project.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-3 line-clamp-3 text-[14px] leading-7 text-brand-charcoal">{project.description}</p>
          <div className="mt-auto border-t border-brand-pearl pt-3">
            <div className="flex flex-col gap-3">
            <motion.div
              animate={navigatingTo === project.link ? { scale: 0.94, y: 2 } : { scale: 1, y: 0 }}
              whileTap={navigatingTo === project.link ? undefined : { scale: 0.972, y: 1 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex"
            >
              <Link href={project.link} onClick={(event) => handleExploreClick(event, project.link)} className="group inline-flex items-center">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-black bg-brand-white transition-all duration-500 group-hover:bg-brand-black">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-black transition-all duration-500 group-hover:translate-x-[2px] group-hover:stroke-brand-white">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
                <span className="-ml-6 flex h-11 min-w-[144px] items-center rounded-r-full border border-l-0 border-brand-black bg-brand-black px-5 pl-10 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-white">
                  Explore
                </span>
              </Link>
            </motion.div>
            <div className="flex justify-between gap-4 text-left">
              <div>
                <div className="text-[22px] font-medium leading-none text-brand-black">30+</div>
                <div className="mt-1 text-[8px] uppercase tracking-[0.22em] text-brand-cloud">Years of Excellence</div>
              </div>
              <div>
                <div className="text-[22px] font-medium leading-none text-brand-black">Thousands</div>
                <div className="mt-1 text-[8px] uppercase tracking-[0.22em] text-brand-cloud">Happy Families</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  function renderMobileCopyPanel(project: (typeof heroProjects)[number], layer: 'current' | 'next') {
    const isCurrentLayer = layer === 'current';
    const headlineTile = getTileMotion(layer, 0.1, 24);
    const bodyTile = getTileMotion(layer, 0.18, 18);
    const ctaTile = getTileMotion(layer, 0.24, 14);
    const statsTile = getTileMotion(layer, 0.3, 14);

    return (
      <motion.div
        key={`${project.projectName}-${layer}-mobile-copy`}
        className="absolute inset-0 flex h-full w-full flex-col px-4 pb-4 pt-4"
        initial={false}
        style={{
          opacity: 1,
          y: 0,
          pointerEvents: isCurrentLayer && transitionProgress < 0.6 ? 'auto' : 'none'
        }}
      >
        <motion.div className="mb-3 flex items-center gap-3 text-[9px] uppercase tracking-[0.24em] text-brand-granite" style={statsTile}>
          <span>{project.index}</span>
          <div className="h-[1px] flex-1 bg-brand-pearl" />
          <span>{project.accent}</span>
        </motion.div>
        <motion.h1 className="text-[34px] font-semibold leading-[0.92] tracking-[-0.05em] text-brand-black" style={headlineTile}>
          {project.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h1>
        <motion.p className="mt-4 line-clamp-5 text-[14px] leading-7 text-brand-charcoal" style={bodyTile}>
          {project.description}
        </motion.p>
        <motion.div className="mt-auto border-t border-brand-pearl pt-4" style={ctaTile}>
          <div className="flex flex-col gap-4">
            <motion.div
              animate={navigatingTo === project.link ? { scale: 0.94, y: 2 } : { scale: 1, y: 0 }}
              whileTap={navigatingTo === project.link ? undefined : { scale: 0.972, y: 1 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex"
            >
              <Link href={project.link} onClick={(event) => handleExploreClick(event, project.link)} className="group inline-flex items-center">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-black bg-brand-white transition-all duration-500 group-hover:bg-brand-black">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-black transition-all duration-500 group-hover:translate-x-[2px] group-hover:stroke-brand-white">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
                <span className="-ml-6 flex h-11 min-w-[144px] items-center rounded-r-full border border-l-0 border-brand-black bg-brand-black px-5 pl-10 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-white">
                  Explore
                </span>
              </Link>
            </motion.div>
            <motion.div className="flex justify-between gap-4 text-left" style={statsTile}>
              <div>
                <div className="text-[22px] font-medium leading-none text-brand-black">30+</div>
                <div className="mt-1 text-[8px] uppercase tracking-[0.22em] text-brand-cloud">Years of Excellence</div>
              </div>
              <div>
                <div className="text-[22px] font-medium leading-none text-brand-black">Thousands</div>
                <div className="mt-1 text-[8px] uppercase tracking-[0.22em] text-brand-cloud">Happy Families</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <>
      {isMobile ? (
        <section
          ref={mobileContainerRef}
          data-home-hero="true"
          className="relative border-b border-brand-pearl bg-white"
          style={{ height: heroScrollHeight }}
        >
          <div className={isPinned
            ? 'fixed left-0 right-0 top-20 z-0 h-[calc(100svh-5rem)] overflow-hidden border-b border-brand-pearl bg-white'
            : 'absolute inset-x-0 bottom-0 z-0 h-[calc(100svh-5rem)] overflow-hidden border-b border-brand-pearl bg-white'}>
            <div className="relative h-[36svh] min-h-[220px] w-full overflow-hidden bg-brand-pearl">
              {!hasEntered ? (
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${currentProject.image})` }}
                />
              ) : null}
              <motion.div
                className="absolute inset-0"
                initial={hasEntered ? { opacity: 0, scale: 1.05 } : false}
                animate={hasEntered ? { opacity: currentImageOpacity, scale: 1 } : undefined}
                transition={hasEntered ? introTransition : undefined}
                style={{ opacity: currentImageOpacity, y: currentImageTranslateY }}
              >
                <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
                  <Image
                    src={currentProject.image}
                    alt={currentProject.projectName}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/72 via-brand-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-brand-pearl/78">{currentProject.projectName}</div>
                  <p className="max-w-[16rem] text-[18px] font-semibold leading-[1.05] tracking-[-0.03em]">{currentProject.projectDesc}</p>
                </div>
              </motion.div>
              {transitionProgress > 0 && transitionState.nextIndex !== transitionState.currentIndex ? (
                <motion.div className="absolute inset-0" style={{ opacity: nextImageOpacity, y: nextImageTranslateY, clipPath: revealClipPath }}>
                  <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
                    <Image
                      src={nextProject.image}
                      alt={nextProject.projectName}
                      fill
                      priority
                      sizes="100vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/72 via-brand-black/18 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-brand-pearl/78">{nextProject.projectName}</div>
                    <p className="max-w-[16rem] text-[18px] font-semibold leading-[1.05] tracking-[-0.03em]">{nextProject.projectDesc}</p>
                  </div>
                </motion.div>
              ) : null}
            </div>
            <div className="relative h-[calc(100%-36svh)] min-h-[360px] overflow-hidden bg-white">
              {renderMobileCopyPanel(currentProject, 'current')}
              {transitionProgress > 0 && transitionState.nextIndex !== transitionState.currentIndex ? renderMobileCopyPanel(nextProject, 'next') : null}
            </div>
          </div>
        </section>
      ) : null}

      <section
        ref={desktopContainerRef}
        data-home-hero="true"
        className="relative hidden w-full border-b border-brand-pearl bg-white md:block"
        style={{ height: heroScrollHeight }}
      >
      <div
        className={isPinned
          ? 'fixed left-1/2 top-20 z-0 w-full max-w-[1920px] -translate-x-1/2 md:top-[5rem] md:w-[calc(100%-16px)] md:max-w-[calc(1920px-16px)]'
          : 'absolute inset-x-0 bottom-0 z-0'}
      >
        <div className="flex h-[calc(100svh-5rem)] w-full flex-col overflow-hidden md:h-[calc(100svh-5rem)] md:flex-row">
          <div className="hidden w-12 shrink-0 items-center justify-center border-r border-brand-charcoal bg-brand-black shadow-sm md:flex">
          <span className="rotate-[-90deg] whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.34em] text-brand-pearl/85">
            Excellence Since 1994 / Dhaka
          </span>
          </div>

          <div className="relative z-10 h-[52svh] w-full shrink-0 overflow-hidden bg-white shadow-[10px_0_15px_-3px_rgba(0,0,0,0.05)] pointer-events-auto md:h-full md:w-[440px]">
            <motion.div
              className="absolute inset-x-0 top-0 z-10 px-8 pt-6 md:px-12 md:pt-10"
              initial={hasEntered ? { opacity: 0, y: -18 } : false}
              animate={hasEntered ? { opacity: 1, y: 0 } : undefined}
              transition={hasEntered ? { ...introTransition, delay: 0.18 } : undefined}
            >
              <div className="h-[1px] w-full bg-brand-pearl" />
              <div className="mt-4 h-[2px] w-full bg-brand-pearl/70">
                <motion.div className="h-full bg-brand-black" style={{ width: progressWidth }} />
              </div>
            </motion.div>

            {renderCopyPanel(currentProject, 'current')}
            {transitionProgress > 0 && transitionState.nextIndex !== transitionState.currentIndex ? renderCopyPanel(nextProject, 'next') : null}
          </div>

          <div className="relative h-[48svh] flex-1 overflow-hidden bg-brand-stone md:h-full">
            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-brand-stone">
              {!hasEntered ? (
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${currentProject.image})` }}
                />
              ) : null}
              <motion.div
                className="absolute inset-0"
                initial={hasEntered ? { opacity: 0, scale: 1.05 } : false}
                animate={hasEntered ? { opacity: currentImageOpacity, scale: 1 } : undefined}
                transition={hasEntered ? introTransition : undefined}
                style={{ opacity: currentImageOpacity, y: currentImageTranslateY }}
              >
                <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
                  <Image
                    src={currentProject.image}
                    alt={currentProject.projectName}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute inset-0" style={{ backgroundImage: imageOverlay }} />
                <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ backgroundImage: imageBottomOverlay }} />
              </motion.div>
              {transitionProgress > 0 && transitionState.nextIndex !== transitionState.currentIndex ? (
                <motion.div
                  className="absolute inset-0"
                  style={{ opacity: nextImageOpacity, y: nextImageTranslateY, clipPath: revealClipPath }}
                >
                  <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
                    <Image
                      src={nextProject.image}
                      alt={nextProject.projectName}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 70vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <div className="absolute inset-0" style={{ backgroundImage: imageOverlay }} />
                  <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ backgroundImage: imageBottomOverlay }} />
                </motion.div>
              ) : null}
              <div className="pointer-events-none absolute inset-0 z-10 hidden border-[20px] border-brand-pearl shadow-inner md:block" />
            </div>

            <div className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-hidden">
              {renderProjectCard(currentProject, 'current')}
              {transitionProgress > 0 && transitionState.nextIndex !== transitionState.currentIndex ? renderProjectCard(nextProject, 'next') : null}
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
