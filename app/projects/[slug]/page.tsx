'use client';

import { useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { Check, Grid, Layers, MapPin, Ruler } from 'lucide-react';
import { getProjectRecord } from '@/lib/project-data';

const statIcons = {
  Floors: Layers,
  Units: Grid,
  Size: Ruler,
} as const;

export default function ProjectDetail() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug || 'suvastu-shaptarshi';
  const data = getProjectRecord(slug);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '32%']);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '42%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0, 0]);

  return (
    <main className="bg-white">
      <section ref={heroRef} className="relative h-[72vh] w-full overflow-hidden border-b border-brand-pearl bg-brand-pearl md:h-[82vh]">
        <motion.div
          style={{ y, scale: 1.08 }}
          className="absolute inset-0"
          initial={{ scale: 1.16, filter: 'blur(10px)' }}
          animate={{ scale: 1.08, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            sizes="100vw"
            className="object-cover opacity-90"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/48 to-brand-black/10" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-14 md:px-12 md:pb-24">
          <motion.div style={{ y: titleY, opacity }} className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
            >
              <span className="text-[9px] uppercase tracking-[0.34em] text-white">{data.status}</span>
              <span className="h-1 w-1 rounded-full bg-brand-pearl/70" />
              <span className="text-[9px] uppercase tracking-[0.34em] text-brand-pearl">{data.location}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl text-[42px] font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-6xl md:text-[82px]"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-3xl text-[15px] leading-8 text-brand-pearl md:text-base"
            >
              {data.positioning}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/contact#buyer-form" className="inline-flex items-center gap-3 rounded-full border border-white bg-white px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-black transition-colors hover:bg-transparent hover:text-white">
                Request Brochure
              </Link>
              <Link href="/contact#buyer-form" className="inline-flex items-center gap-3 rounded-full border border-white/35 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:border-white hover:bg-white/10">
                Book Site Visit
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 md:px-12 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[1px] w-10 bg-brand-granite" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Project Overview</span>
            </div>
            <h2 className="max-w-3xl text-[30px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-black md:text-[52px]">
              {data.overview}
            </h2>
            <div className="mt-8 flex items-center gap-3 text-[14px] text-brand-charcoal">
              <MapPin size={16} />
              <span>{data.location}</span>
            </div>
          </div>
          <div className="grid gap-4 rounded-[28px] border border-brand-pearl bg-brand-pearl/45 p-6 md:p-8">
            {data.stats.map((stat) => {
              const Icon = statIcons[stat.label as keyof typeof statIcons] ?? Layers;
              return (
                <div key={stat.label} className="flex items-center gap-5 border-b border-brand-stone/60 pb-4 last:border-b-0 last:pb-0">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-black text-brand-black">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.3em] text-brand-granite">{stat.label}</p>
                    <p className="text-[22px] font-semibold tracking-[-0.03em] text-brand-black">{stat.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-brand-pearl bg-brand-pearl/28 px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[1px] w-10 bg-brand-granite" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">USP</span>
            </div>
            <h2 className="text-[30px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-black md:text-[52px]">
              {data.uspTitle}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {data.uspPoints.map((point) => (
              <div key={point} className="rounded-[24px] border border-brand-pearl bg-white p-6 shadow-[0_16px_40px_rgba(27,33,39,0.04)]">
                <div className="mb-5 h-1.5 w-14 bg-brand-black" />
                <p className="text-[15px] leading-7 text-brand-charcoal">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-brand-pearl bg-brand-pearl">
            <Image src={data.gallery[1] ?? data.heroImage} alt={`${data.title} lifestyle`} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/75 via-brand-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-pearl">Lifestyle Context</p>
              <p className="mt-3 max-w-md text-[20px] font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-[28px]">{data.projectDesc}</p>
            </div>
          </div>
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[1px] w-10 bg-brand-granite" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Lifestyle Story</span>
            </div>
            <h2 className="text-[30px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-black md:text-[52px]">
              {data.lifestyleTitle}
            </h2>
            <div className="mt-8 space-y-6 text-[15px] leading-8 text-brand-charcoal md:text-base">
              {data.lifestyleBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-2 md:px-12 md:pb-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {data.gallery.map((img, index) => (
            <div key={img + index} className={`relative overflow-hidden rounded-[24px] border border-brand-pearl bg-brand-pearl ${index === 2 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}>
              <Image
                src={img}
                alt={`${data.title} gallery ${index + 1}`}
                fill
                sizes={index === 2 ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-pearl bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <div className="h-[1px] w-10 bg-brand-granite" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Buyer Intent</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <h2 className="text-[30px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-black md:text-[52px]">
                {data.buyerIntentTitle}
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-8 text-brand-charcoal md:text-base">
                The strongest project pages do not only show amenities. They help buyers understand whether a property matches their actual lifestyle, confidence threshold, and decision stage.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {data.buyerIntentCards.map((card) => (
                <div key={card.title} className="rounded-[24px] border border-brand-pearl bg-brand-pearl/26 p-6">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-black text-brand-black">
                    <Check size={16} />
                  </div>
                  <h3 className="mb-3 text-[22px] font-semibold leading-[1.05] tracking-[-0.03em] text-brand-black">{card.title}</h3>
                  <p className="text-[15px] leading-7 text-brand-charcoal">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-pearl bg-brand-pearl/3 px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <div className="h-[1px] w-10 bg-brand-granite" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Signature Amenities</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.features.map((feature) => (
              <div key={feature} className="flex items-center gap-5 rounded-[22px] border border-brand-pearl bg-white p-6">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-black text-brand-black">
                  <Check size={16} />
                </div>
                <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-brand-charcoal">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-[1px] w-10 bg-brand-granite" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Next Step</span>
            <div className="h-[1px] w-10 bg-brand-granite" />
          </div>
          <h2 className="text-[32px] font-semibold leading-[1] tracking-[-0.04em] text-brand-black md:text-[56px]">
            Ready to discuss {data.title}?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-brand-charcoal md:text-base">
            Move into the buyer route to request a brochure, compare this project with other Suvastu addresses, or schedule a site visit with the right advisor.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact#buyer-form" className="inline-flex items-center gap-3 rounded-full border border-brand-black bg-brand-black px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-transparent hover:text-brand-black">
              Request Brochure
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-3 rounded-full border border-brand-stone px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-black transition-colors hover:border-brand-black">
              Compare More Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
