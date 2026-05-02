'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { value: '30+', label: 'Years of Excellence' },
  { value: '75+', label: 'Projects Delivered' },
  { value: '10M+', label: 'Sq. Ft. Developed' },
  { value: 'Thousands', label: 'Happy Families' },
];

export default function TrustIndicators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 bg-white border-b border-brand-pearl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 pt-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="text-center flex flex-col items-center"
            >
              <h4 className="mb-4 text-[42px] font-semibold leading-none tracking-[-0.045em] text-brand-black md:text-[58px] lg:text-[72px]">{stat.value}</h4>
              <p className="text-[11px] font-semibold tracking-[0.24em] text-brand-granite uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
