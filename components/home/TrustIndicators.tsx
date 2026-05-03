'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import {
  BadgeCheck,
  Clock3,
  Compass,
  DraftingCompass,
  HandHelping,
} from 'lucide-react';
import { useRef } from 'react';

const pillars = [
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
    icon: HandHelping,
    title: 'Enhanced Customer Services',
    description: 'A guided experience from first visit to final handover and after-sales support.',
  },
  {
    icon: DraftingCompass,
    title: 'Excellent Design',
    description: 'Plans shaped around proportion, daylight, circulation, and everyday comfort.',
  },
  {
    icon: Clock3,
    title: 'On-Time Handover',
    description: 'Delivery discipline backed by a development process built around accountability.',
  },
];

const proof = [
  { value: '30+', label: 'Years shaping premium addresses' },
  { value: '75+', label: 'Projects delivered across Dhaka' },
  { value: '10M+', label: 'Square feet thoughtfully developed' },
];

export default function TrustIndicators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section className="relative overflow-hidden border-b border-brand-pearl bg-white py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-stone to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12" ref={ref}>
        <div className="grid gap-12 border-b border-brand-pearl/80 pb-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-brand-granite" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-granite">
                Why Homeowners Choose Suvastu
              </span>
            </div>
            <h2 className="max-w-xl text-[34px] font-semibold leading-[0.98] tracking-[-0.05em] text-brand-black sm:text-[42px] md:text-[56px] lg:text-[68px]">
              The confidence of a premium address, designed well beyond the brochure.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            className="max-w-2xl justify-self-start lg:justify-self-end"
          >
            <p className="text-[15px] leading-7 text-brand-charcoal md:text-[17px] md:leading-8">
              Every residence is backed by deliberate location strategy, elevated construction standards,
              attentive service, and a delivery culture that respects both time and trust.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-4 pt-10 sm:grid-cols-2 xl:grid-cols-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.8, delay: 0.08 * index, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-[24px] border border-brand-pearl bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(230,234,237,0.45))] p-6 shadow-[0_20px_45px_rgba(27,33,39,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-stone hover:shadow-[0_24px_56px_rgba(27,33,39,0.1)] md:p-7"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-pearl/70 blur-2xl transition-transform duration-500 group-hover:scale-110" />
                <div className="relative">
                  <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-[18px] border border-brand-stone/60 bg-white text-brand-black shadow-[0_12px_30px_rgba(27,33,39,0.06)]">
                    <Icon size={28} strokeWidth={1.9} />
                  </div>
                  <h3 className="mb-3 max-w-[14ch] text-[20px] font-semibold leading-[1.08] tracking-[-0.035em] text-brand-black md:text-[22px]">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] leading-6 text-brand-charcoal">
                    {pillar.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="grid gap-8 pt-12 md:grid-cols-3 md:gap-10">
          {proof.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.75, delay: 0.4 + index * 0.08, ease: 'easeOut' }}
              className="border-t border-brand-pearl pt-5"
            >
              <div className="mb-2 text-[34px] font-semibold leading-none tracking-[-0.05em] text-brand-black md:text-[44px]">
                {item.value}
              </div>
              <p className="max-w-[22ch] text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-granite">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
