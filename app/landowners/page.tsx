'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { BadgeCheck, Building2, Landmark, MapPinned } from 'lucide-react';

const landownerProof = [
  'Dedicated joint venture and land acquisition conversation',
  'Transparent review of location, site potential, and partnership structure',
  'A route designed for serious landowners, not generic website traffic'
];

const partnershipPoints = [
  {
    icon: MapPinned,
    title: 'Location review',
    description: 'We assess address strength, neighborhood demand, and development relevance before moving deeper into the discussion.'
  },
  {
    icon: Building2,
    title: 'Development fit',
    description: 'Our team evaluates site conditions, scale potential, and the right project approach for the land parcel.'
  },
  {
    icon: Landmark,
    title: 'Partnership clarity',
    description: 'The conversation stays grounded in structure, value creation, and transparent expectations from the start.'
  },
  {
    icon: BadgeCheck,
    title: 'Brand-backed trust',
    description: 'Landowners engage a team positioned around design quality, execution discipline, and long-term relationship value.'
  }
];

const process = [
  {
    label: '01',
    title: 'Submit initial site details',
    description: 'Share land location, size, and partnership intent through the dedicated form.'
  },
  {
    label: '02',
    title: 'Receive an informed follow-up',
    description: 'The land acquisition team reviews core viability and connects with the right next-step discussion.'
  },
  {
    label: '03',
    title: 'Explore a structured opportunity',
    description: 'Move into a more serious conversation around potential, value creation, and partnership format.'
  }
];

export default function LandownersPage() {
  return (
    <div className="border-b border-brand-pearl bg-white pt-28 md:pt-32">
      <section className="border-b border-brand-pearl px-6 pb-16 pt-8 md:px-12 md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[1px] w-10 bg-brand-granite" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Landowner Journey</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl text-[38px] font-semibold leading-[0.95] tracking-[-0.05em] text-brand-black sm:text-5xl md:text-[78px]"
            >
              Turn the value of your land into a clearer development opportunity.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl text-[15px] leading-8 text-brand-charcoal md:text-base"
            >
              This page is designed for landowners who want a serious first conversation around development potential, joint venture alignment, and a partnership route backed by design quality and execution trust.
            </motion.p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {landownerProof.map((item) => (
                <div key={item} className="rounded-[20px] border border-brand-pearl bg-brand-pearl/35 p-5">
                  <div className="mb-3 h-2 w-12 bg-brand-black" />
                  <p className="text-[14px] leading-6 text-brand-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            id="landowner-form"
            className="rounded-[28px] border border-brand-pearl bg-[linear-gradient(180deg,rgba(27,33,39,0.98),rgba(83,90,95,0.94))] p-6 text-brand-pearl shadow-[0_28px_60px_rgba(27,33,39,0.16)] md:p-10 lg:sticky lg:top-32"
          >
            <div className="mb-8 border-b border-brand-charcoal/80 pb-6">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-cloud">Landowner Inquiry Form</p>
              <h2 className="mb-2 text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] text-brand-white md:text-[36px]">
                Start a land partnership discussion
              </h2>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-cloud">For joint ventures, direct sale discussions, and development consultation</p>
            </div>
            <form className="space-y-7 text-left">
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-cloud">Name</label>
                <input type="text" className="w-full border-b border-brand-cloud/80 bg-transparent py-2 text-sm text-brand-white transition-colors focus:border-brand-white focus:outline-none" placeholder="Your full name" />
              </div>
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-cloud">Phone</label>
                <input type="tel" className="w-full border-b border-brand-cloud/80 bg-transparent py-2 text-sm text-brand-white transition-colors focus:border-brand-white focus:outline-none" placeholder="+880 123 456 7890" />
              </div>
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-cloud">Property Location</label>
                <input type="text" className="w-full border-b border-brand-cloud/80 bg-transparent py-2 text-sm text-brand-white transition-colors focus:border-brand-white focus:outline-none" placeholder="Gulshan, Banani, Dhanmondi..." />
              </div>
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-cloud">Land Size</label>
                <input type="text" className="w-full border-b border-brand-cloud/80 bg-transparent py-2 text-sm text-brand-white transition-colors focus:border-brand-white focus:outline-none" placeholder="e.g. 10 kathas" />
              </div>
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-cloud">Partnership Interest</label>
                <select className="w-full border-b border-brand-cloud/80 bg-transparent py-2 text-sm text-brand-white transition-colors focus:border-brand-white focus:outline-none">
                  <option className="text-brand-black">Joint Venture</option>
                  <option className="text-brand-black">Direct Sale</option>
                  <option className="text-brand-black">Development Consultation</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-cloud">Message</label>
                <textarea className="h-28 w-full resize-none border-b border-brand-cloud/80 bg-transparent py-2 text-sm text-brand-white transition-colors focus:border-brand-white focus:outline-none" placeholder="Share basic land details, access notes, or preferred partnership expectations." />
              </div>
              <button type="button" className="mt-4 w-full border border-brand-white bg-brand-white py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-black transition-colors hover:bg-transparent hover:text-brand-white">
                Submit Landowner Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-brand-pearl px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <div className="h-[1px] w-10 bg-brand-granite" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">How The Process Works</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {process.map((step) => (
              <div key={step.label} className="rounded-[24px] border border-brand-pearl bg-white p-6 shadow-[0_16px_40px_rgba(27,33,39,0.04)] md:p-7">
                <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-granite">{step.label}</div>
                <h3 className="mb-4 text-[24px] font-semibold leading-[1.05] tracking-[-0.035em] text-brand-black">{step.title}</h3>
                <p className="text-[15px] leading-7 text-brand-charcoal">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[1px] w-10 bg-brand-granite" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Why This Route Matters</span>
            </div>
            <h2 className="text-[32px] font-semibold leading-[1.02] tracking-[-0.04em] text-brand-black md:text-[54px]">
              A landowner page built for serious partnership intent.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-brand-charcoal md:text-base">
              Performance-focused landowner campaigns work best when the proposition is direct, the process is transparent, and the inquiry route feels purpose-built for higher-value decisions.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {partnershipPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="rounded-[24px] border border-brand-pearl bg-brand-pearl/28 p-6 md:p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-black text-brand-black">
                    <Icon size={20} />
                  </div>
                  <h3 className="mb-3 text-[22px] font-semibold leading-[1.05] tracking-[-0.03em] text-brand-black">{point.title}</h3>
                  <p className="text-[15px] leading-7 text-brand-charcoal">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-7xl rounded-[28px] border border-brand-pearl bg-white px-7 py-8 shadow-[0_16px_42px_rgba(27,33,39,0.04)] md:px-10 md:py-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-granite">Need the buyer route instead?</p>
              <h3 className="text-[28px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-black md:text-[34px]">
                Compare residences, request brochures, or book a site visit through the buyer journey.
              </h3>
            </div>
            <Link href="/contact#buyer-form" className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-black">
              Go to Buyer Journey
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
