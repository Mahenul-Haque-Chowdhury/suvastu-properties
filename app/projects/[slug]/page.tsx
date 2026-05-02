'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Check, MapPin, Grid, Layers, Ruler } from 'lucide-react';
import Link from 'next/link';

// Mock data fetcher
const getProjectData = (id: string) => {
  return {
    title: id.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Suvastu Nabarun',
    location: 'Gulshan 2, Dhaka',
    status: 'Ongoing',
    heroImage: 'https://picsum.photos/seed/hero/1920/1080',
    overview: 'Suvastu Nabarun is a paradigm of luxury living, meticulously designed to offer an oasis of tranquility amidst the vibrant energy of Gulshan 2. With panoramic views and bespoke amenities, it redefines the modern urban sanctuary.',
    features: ['Double-height Lobby', 'Infinity Pool', 'State-of-the-art Gym', 'Smart Home Features', '24/7 Concierge', 'Green Terraces'],
    gallery: [
      'https://picsum.photos/seed/g1/800/800',
      'https://picsum.photos/seed/g2/800/1200',
      'https://picsum.photos/seed/g3/1200/800',
      'https://picsum.photos/seed/g4/800/800',
    ],
    stats: [
      { icon: <Layers size={20}/>, label: 'Floors', value: '14' },
      { icon: <Grid size={20}/>, label: 'Units', value: '26' },
      { icon: <Ruler size={20}/>, label: 'Size', value: '4500 - 6200 sqft' }
    ]
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const id = Array.isArray(params.slug) ? params.slug[0] : params.slug || '1';
  const data = getProjectData(id);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0, 0]);
  
  const [activeFloorplan, setActiveFloorplan] = useState('Type A');

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[80vh] w-full overflow-hidden bg-brand-pearl border-b border-brand-pearl">
        <motion.div 
          style={{ y, scale: 1.1 }} 
          className="absolute inset-0"
          initial={{ scale: 1.2, filter: 'blur(10px)' }}
          animate={{ scale: 1.1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image 
            src={data.heroImage}
            alt={data.title}
            fill
            className="object-cover opacity-90"
            priority
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 pb-24 px-6 lg:px-12 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent">
          <motion.div 
            style={{ y: titleY, opacity }}
            className="max-w-7xl mx-auto flex flex-col items-start"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-[9px] tracking-[0.4em] uppercase mb-6 border border-white/30 px-3 py-1 bg-brand-black/20 backdrop-blur-sm"
            >
              {data.status}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-[80px] leading-[0.9] font-normal tracking-tight text-white mb-6"
            >
              {data.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center text-brand-pearl text-sm font-light gap-2"
            >
              <MapPin size={18} />
              <span>{data.location}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview & Stats */}
      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center space-x-3">
              <div className="w-10 h-[1px] bg-brand-granite"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">The Vision</span>
            </div>
            <p className="text-xl md:text-3xl text-brand-charcoal font-light leading-relaxed mb-12">
              {data.overview}
            </p>
          </div>
          <div className="space-y-8 p-10 bg-brand-pearl">
            {data.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="text-brand-charcoal">{stat.icon}</div>
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-brand-granite mb-1">{stat.label}</p>
                  <p className="text-xl text-brand-black font-semibold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 pt-12 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.gallery.map((img, i) => (
            <div key={i} className={`relative overflow-hidden group border-4 border-brand-pearl ${i === 2 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}>
              <Image 
                src={img} 
                alt={`${data.title} Gallery ${i+1}`} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Floor Plans (Mock) */}
      <section className="py-24 md:py-32 px-6 lg:px-12 border-t border-brand-pearl bg-brand-pearl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col items-center">
            <div className="mb-6 flex items-center space-x-3">
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Floor Plans</span>
            </div>
            <h2 className="text-4xl leading-[1] font-normal tracking-tight text-brand-black">Schematic Design</h2>
          </div>
          
          <div className="flex justify-center gap-4 md:gap-8 mb-12">
            {['Type A', 'Type B', 'Penthouse'].map(type => (
              <button
                key={type}
                onClick={() => setActiveFloorplan(type)}
                className={`text-[10px] tracking-[0.2em] font-semibold uppercase pb-2 transition-colors relative ${
                  activeFloorplan === type ? 'text-brand-black' : 'text-brand-granite hover:text-brand-charcoal'
                }`}
              >
                {type}
                {activeFloorplan === type && (
                  <motion.div layoutId="active-floorplan" className="absolute left-0 right-0 bottom-0 h-[2px] bg-brand-black" />
                )}
              </button>
            ))}
          </div>
          <div className="relative aspect-video w-full max-w-4xl mx-auto bg-white flex items-center justify-center p-8 shadow-2xl border-4 border-brand-pearl border-opacity-50">
             <div className="text-brand-granite font-light text-center">
               <p className="mb-4 text-sm">Internal schematic for <span className="font-medium text-brand-black">{activeFloorplan}</span></p>
               <p className="text-xs uppercase tracking-widest">(Interactive blueprint visualization)</p>
             </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 bg-white text-brand-black px-6 lg:px-12 border-b border-brand-pearl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-[56px] leading-[1] font-normal tracking-tight text-brand-black">Signature Amenities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {data.features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 border border-brand-pearl"
              >
                <div className="h-10 w-10 shrink-0 rounded-full border border-brand-black flex items-center justify-center text-brand-black">
                  <Check size={16} />
                </div>
                <span className="text-sm font-medium tracking-wide text-brand-charcoal uppercase">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <div className="mb-6 flex items-center justify-center space-x-3">
          <div className="w-10 h-[1px] bg-brand-granite"></div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Inquire</span>
          <div className="w-10 h-[1px] bg-brand-granite"></div>
        </div>
        <h2 className="text-4xl md:text-[56px] leading-[1] font-normal tracking-tight text-brand-black mb-12">Discuss this property</h2>
        <Link href="/contact#buyer-form" className="inline-block text-[10px] uppercase tracking-widest border border-brand-stone px-10 py-4 font-semibold text-brand-black hover:bg-brand-black hover:text-white transition-colors duration-300">
          Request Brochure
        </Link>
      </section>
    </main>
  );
}
