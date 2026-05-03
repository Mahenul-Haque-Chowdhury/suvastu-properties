'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import Image from 'next/image';
import { allProjects } from '@/lib/project-data';

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
    <div className="min-h-screen border-b border-brand-pearl bg-white pt-28 pb-20 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14 md:mb-16">
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
            className="mb-10 text-[40px] leading-[1] font-normal tracking-tight text-brand-black sm:text-5xl md:mb-12 md:text-[72px]"
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
                  className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between"
                >
                  <div>
                    <h2 className="text-[30px] font-semibold tracking-[-0.03em] text-brand-black md:text-[46px]">{section.title}</h2>
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
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/55 via-brand-black/10 to-transparent" />
                          <div className="absolute inset-0 border border-brand-stone/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>
                        <div>
                          <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <h3 className="text-[26px] font-semibold tracking-tight text-brand-black md:text-2xl">{project.title}</h3>
                            <span className="text-[9px] tracking-[0.2em] uppercase text-brand-granite">{project.status}</span>
                          </div>
                          <p className="text-sm leading-relaxed text-brand-charcoal">{project.location}</p>
                          <p className="mt-2 max-w-md text-[14px] leading-6 text-brand-charcoal/85">{project.description}</p>
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
