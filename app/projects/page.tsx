'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const allProjects = [
  { id: 'suvastu-shaptarshi', title: 'Suvastu Shaptarshi', location: 'Gulshan 2', status: 'Ongoing', image: 'https://picsum.photos/seed/shaptarshi/800/1000' },
  { id: 'suvastu-mirambeena', title: 'Suvastu Mirambeena', location: 'Banani', status: 'Upcoming', image: 'https://picsum.photos/seed/mirambeena/800/1000' },
  { id: 'saleha-suvastu', title: 'Saleha Suvastu', location: 'Dhanmondi', status: 'Completed', image: 'https://picsum.photos/seed/saleha/800/1000' },
  { id: 'suvastu-florentina', title: 'Suvastu Florentina', location: 'Baridhara', status: 'Ongoing', image: 'https://picsum.photos/seed/florentina/800/1000' },
  { id: 'suvastu-jesrin', title: 'Suvastu Jesrin', location: 'Bashundhara R/A', status: 'Completed', image: 'https://picsum.photos/seed/jesrin/800/1000' },
  { id: 'suvastu-opaline', title: 'Suvastu Opaline', location: 'Gulshan 1', status: 'Upcoming', image: 'https://picsum.photos/seed/opaline/800/1000' },
  { id: 'suvastu-verde', title: 'Suvastu Verde', location: 'Baridhara DOHS', status: 'Completed', image: 'https://picsum.photos/seed/verde/800/1000' },
  { id: 'suvastu-celestia', title: 'Suvastu Celestia', location: 'Banani 11', status: 'Ongoing', image: 'https://picsum.photos/seed/celestia/800/1000' },
];

const projectSections = [
  {
    id: 'ongoing',
    title: 'Ongoing',
    description: 'Projects currently under development for immediate consideration.',
  },
  {
    id: 'upcoming',
    title: 'Upcoming',
    description: 'Future addresses shaping the next chapter of the portfolio.',
  },
  {
    id: 'completed',
    title: 'Completed',
    description: 'Delivered residences that reflect the Suvastu legacy in full.',
  },
] as const;

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 border-b border-brand-pearl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex items-center space-x-3"
          >
            <div className="w-10 h-[1px] bg-brand-granite"></div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Properties</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-[72px] leading-[1] font-normal tracking-tight text-brand-black mb-12"
          >
            Our Portfolio
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-wrap gap-4 md:gap-8"
          >
            {projectSections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="text-[10px] tracking-[0.2em] font-semibold uppercase pb-1 transition-colors relative text-brand-granite hover:text-brand-charcoal"
              >
                {section.title}
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="space-y-24">
          {projectSections.map((section) => {
            const sectionProjects = allProjects.filter((project) => project.status.toLowerCase() === section.title.toLowerCase());

            return (
              <section key={section.id} id={section.id} className="scroll-mt-32 border-t border-brand-pearl pt-10 first:border-t-0 first:pt-0">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
                >
                  <div>
                    <h2 className="text-[34px] font-semibold tracking-[-0.03em] text-brand-black md:text-[46px]">{section.title}</h2>
                    <p className="mt-2 max-w-2xl text-[15px] leading-7 text-brand-charcoal">{section.description}</p>
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-granite">
                    {sectionProjects.length} Projects
                  </div>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 gap-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
                >
                  {sectionProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      className="group cursor-pointer"
                    >
                      <Link href={`/projects/${project.id}`}>
                        <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden border-8 border-brand-pearl bg-brand-pearl shadow-inner">
                          <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,var(--color-brand-white)_0%,var(--color-brand-pearl)_100%)] text-center">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-granite">
                              Project Image
                            </span>
                          </div>
                          <div className="absolute inset-0 border border-brand-stone/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>
                        <div>
                          <div className="mb-2 flex items-start justify-between">
                            <h3 className="text-2xl font-semibold tracking-tight text-brand-black">{project.title}</h3>
                            <span className="text-[9px] tracking-[0.2em] uppercase text-brand-granite">{project.status}</span>
                          </div>
                          <p className="text-sm leading-relaxed text-brand-charcoal">{project.location}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
