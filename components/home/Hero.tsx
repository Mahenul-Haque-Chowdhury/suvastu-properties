'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react';
import Link from 'next/link';

const heroProjects = [
  {
    eyebrow: 'Refined Living',
    headline: 'Elevated',
    subhead: 'Spaces.',
    description:
      "Architectural precision meets artisanal luxury. We craft environments that redefine the essence of home in Dhaka's most coveted skylines.",
    image: '/Shoptorshi.png?v=2',
    projectName: 'Suvastu Shaptarshi',
    projectDesc:
      'A wholesome blend of wellness and luxury. Experience the height of contemporary minimalism in Dhaka.',
    link: '/projects/suvastu-shaptarshi',
    index: '01',
    accent: 'Skyline Residence'
  },
  {
    eyebrow: 'Wellness Edition',
    headline: 'Wellness &',
    subhead: 'Luxury.',
    description:
      'Experience the pinnacle of wellness integration where every breath you take inside your home is a breath of fresh air.',
    image: '/florentina.jpg?v=2',
    projectName: 'Suvastu Florentina',
    projectDesc: 'Inviting you to a life of wellness. Natural light and biophilic design harmonized.',
    link: '/projects/suvastu-florentina',
    index: '02',
    accent: 'Light-Filled Address'
  },
  {
    eyebrow: 'Urban Nature',
    headline: 'Symphony of',
    subhead: 'Elegance.',
    description:
      'We build homes that are a symphony of elegance. Integrating lush landscapes with urban sophistication.',
    image: '/mirambeenacover.png',
    projectName: 'Suvastu Mirambeena',
    projectDesc: 'A symphony of elegance in Banani. A visual marvel against the Dhaka skyline.',
    link: '/projects/suvastu-mirambeena',
    index: '03',
    accent: 'Garden Overlook'
  },
  {
    eyebrow: 'Signature Living',
    headline: 'Celebrate',
    subhead: 'Life.',
    description:
      'Saleha Suvastu brings your dream home to reality where every architectural detail is meticulously designed.',
    image: '/saleha.jpg',
    projectName: 'Saleha Suvastu',
    projectDesc: 'Your dream home where life is celebrated. Heritage meets modern luxury.',
    link: '/projects/saleha-suvastu',
    index: '04',
    accent: 'Private Club Living'
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [transitionState, setTransitionState] = useState({
    currentIndex: 0,
    nextIndex: 1,
    transitionProgress: 0
  });
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setHasEntered(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
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
    setTransitionState(getTransitionState(latest, heroProjects.length));
  });

  const currentProject = heroProjects[transitionState.currentIndex];
  const nextProject = heroProjects[transitionState.nextIndex];
  const transitionProgress = transitionState.transitionProgress;
  const currentOpacity = 1 - clamp(transitionProgress * 1.75, 0, 1);
  const nextOpacity = clamp((transitionProgress - 0.34) / 0.66, 0, 1);
  const currentImageOpacity = 1;
  const nextImageOpacity = clamp((transitionProgress - 0.12) / 0.88, 0, 1);
  const currentTranslateY = -26 * transitionProgress;
  const nextTranslateY = 40 * (1 - transitionProgress);
  const currentImageTranslateY = 0;
  const nextImageTranslateY = 30 * (1 - transitionProgress);
  const revealRadius = `${transitionProgress * 180}%`;
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
    const eyebrowTile = getTileMotion(layer, 0.02, 18);
    const headlineTile = getTileMotion(layer, 0.1, 28);
    const bodyTile = getTileMotion(layer, 0.18, 22);
    const ctaTile = getTileMotion(layer, 0.24, 18);
    const statsTile = getTileMotion(layer, 0.3, 16);

    return (
      <motion.div
        key={`${project.projectName}-${layer}-copy`}
        className="absolute inset-0 flex h-full w-full flex-col justify-center px-8 pb-8 pt-28 md:px-12 md:pb-12 md:pt-32"
        initial={false}
        style={{
          opacity: 1,
          y: 0,
          pointerEvents: isCurrentLayer && transitionProgress < 0.6 ? 'auto' : 'none'
        }}
      >
        <motion.div className="mb-7 flex items-center space-x-3" style={eyebrowTile}>
          <div className="w-10 h-[1px] bg-brand-granite"></div>
          <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-brand-granite">{project.eyebrow}</span>
        </motion.div>
        <motion.h1
          className="mb-8 max-w-[340px] text-[50px] font-semibold leading-[0.9] tracking-[-0.045em] text-brand-black md:max-w-[360px] md:text-[64px] lg:text-[72px]"
          style={headlineTile}
        >
          <span className="block">{project.headline}</span>
          <span className="block font-extrabold">{project.subhead}</span>
        </motion.h1>
        <motion.p className="mb-10 max-w-[360px] text-[15px] leading-8 text-brand-charcoal md:text-base" style={bodyTile}>
          {project.description}
        </motion.p>
        <motion.div className="mb-8" style={ctaTile}>
          <Link
            href={project.link}
            className="group inline-flex items-center"
          >
            <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-black bg-brand-white transition-all duration-500 group-hover:bg-brand-black group-hover:shadow-[0_10px_24px_rgba(27,33,39,0.16)]">
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
            <span className="-ml-6 flex h-12 min-w-[152px] items-center rounded-r-full border border-l-0 border-brand-black bg-brand-black px-6 pl-10 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-white transition-all duration-500 group-hover:border-brand-black group-hover:bg-brand-white group-hover:pr-7 group-hover:text-brand-black">
              Explore
            </span>
          </Link>
        </motion.div>
        <motion.div className="mb-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-brand-cloud md:hidden" style={statsTile}>
          <span>{project.index}</span>
          <div className="h-[1px] flex-1 bg-brand-pearl" />
          <span>{project.accent}</span>
        </motion.div>
        <motion.div className="mt-auto hidden w-full space-x-8 border-t border-brand-pearl pt-6 md:flex" style={statsTile}>
          <div className="flex flex-col">
            <span className="text-2xl font-medium text-brand-black">30+</span>
            <span className="mt-1 text-[9px] uppercase tracking-widest text-brand-cloud">Years of Excellence</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-medium text-brand-black">Thousands</span>
            <span className="mt-1 text-[9px] uppercase tracking-widest text-brand-cloud">of Happy Families</span>
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

  return (
    <section
      ref={containerRef}
      className="relative w-full border-b border-brand-pearl bg-white"
      style={{ height: `${heroProjects.length * 100}svh` }}
    >
      <div className="sticky top-0 md:top-[5rem] z-0 flex h-[100svh] w-full flex-col overflow-hidden md:h-[calc(100svh-5rem)] md:flex-row">
        <div className="hidden w-12 shrink-0 items-center justify-center border-r border-brand-charcoal bg-brand-black shadow-sm md:flex">
          <span className="rotate-[-90deg] whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.34em] text-brand-pearl/85">
            Excellence Since 1994 / Dhaka
          </span>
        </div>

        <div className="relative z-10 h-[52svh] w-full shrink-0 overflow-hidden bg-white shadow-[10px_0_15px_-3px_rgba(0,0,0,0.05)] md:h-full md:w-[440px] pointer-events-auto">
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
    </section>
  );
}
