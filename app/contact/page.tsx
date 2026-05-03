'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Check, Clock3, Home, MapPin, ShieldCheck } from 'lucide-react';

const buyerProof = [
  'Premium projects across Banani, Baridhara, and Gulshan',
  'Clear route to site visits, brochures, and advisor consultation',
  'Support for pricing, availability, and shortlist decisions'
];

const buyerSteps = [
  {
    title: 'Share your intent',
    description: 'Tell us whether you are comparing projects, requesting pricing, or planning a site visit.'
  },
  {
    title: 'Get guided recommendations',
    description: 'Our advisors align projects, location, and lifestyle fit with your budget and timeline.'
  },
  {
    title: 'Move into a confident decision',
    description: 'Receive brochure access, next-step guidance, and a direct route to the right conversation.'
  }
];

const buyerReasons = [
  {
    icon: Home,
    title: 'Project-first consultation',
    description: 'Choose from ongoing, upcoming, and completed residences with a clearer fit-based recommendation.'
  },
  {
    icon: MapPin,
    title: 'Location-led matching',
    description: 'Compare Dhaka addresses by lifestyle, convenience, and long-term value rather than only price.'
  },
  {
    icon: ShieldCheck,
    title: 'Brand-backed confidence',
    description: 'Understand project quality, delivery posture, and what makes each residence distinct before you inquire.'
  },
  {
    icon: Clock3,
    title: 'Faster next steps',
    description: 'Move from interest to site visit, brochure request, or advisor conversation without unnecessary friction.'
  }
];

export default function ContactPage() {
  return (
    <div className="border-b border-brand-pearl bg-white pt-28 md:pt-32">
      <section className="border-b border-brand-pearl px-6 pb-16 pt-8 md:px-12 md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[1px] w-10 bg-brand-granite" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Buyer Journey</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl text-[38px] font-semibold leading-[0.95] tracking-[-0.05em] text-brand-black sm:text-5xl md:text-[78px]"
            >
              Find the right Suvastu address with a clearer path to inquiry.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl text-[15px] leading-8 text-brand-charcoal md:text-base"
            >
              This page is designed for buyers who want more than a generic contact form. Use it to move from project interest to site visits, brochure requests, availability questions, and a better-qualified conversation with the Suvastu team.
            </motion.p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {buyerProof.map((item) => (
                <div key={item} className="rounded-[20px] border border-brand-pearl bg-brand-pearl/35 p-5">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-brand-black text-brand-black">
                    <Check size={16} />
                  </div>
                  <p className="text-[14px] leading-6 text-brand-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            id="buyer-form"
            className="rounded-[28px] border border-brand-pearl bg-[linear-gradient(180deg,rgba(230,234,237,0.62),rgba(255,255,255,0.95))] p-6 shadow-[0_20px_56px_rgba(27,33,39,0.08)] md:p-10 lg:sticky lg:top-32"
          >
            <div className="mb-8 border-b border-brand-stone pb-6">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-granite">Buyer Inquiry Form</p>
              <h2 className="mb-2 text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] text-brand-black md:text-[36px]">
                Book a visit or speak to an advisor
              </h2>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-granite">For project comparisons, pricing, brochures, and site visits</p>
            </div>
            <form className="space-y-7 text-left">
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-granite">Name</label>
                <input type="text" className="w-full border-b border-brand-granite bg-transparent py-2 text-sm text-brand-black transition-colors focus:border-brand-black focus:outline-none" placeholder="Your full name" />
              </div>
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-granite">Phone</label>
                <input type="tel" className="w-full border-b border-brand-granite bg-transparent py-2 text-sm text-brand-black transition-colors focus:border-brand-black focus:outline-none" placeholder="+880 123 456 7890" />
              </div>
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-granite">Preferred Project</label>
                <input type="text" className="w-full border-b border-brand-granite bg-transparent py-2 text-sm text-brand-black transition-colors focus:border-brand-black focus:outline-none" placeholder="Suvastu Shaptarshi" />
              </div>
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-granite">Inquiry Type</label>
                <select className="w-full border-b border-brand-granite bg-transparent py-2 text-sm text-brand-black transition-colors focus:border-brand-black focus:outline-none">
                  <option>Book a Site Visit</option>
                  <option>Pricing Inquiry</option>
                  <option>Availability Inquiry</option>
                  <option>Request Brochure</option>
                  <option>General Consultation</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-granite">Message</label>
                <textarea className="h-24 w-full resize-none border-b border-brand-granite bg-transparent py-2 text-sm text-brand-black transition-colors focus:border-brand-black focus:outline-none" placeholder="Tell us what kind of project, budget range, or site visit you are considering." />
              </div>
              <button type="button" className="mt-4 w-full border border-brand-black bg-brand-black py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-white transition-colors hover:bg-transparent hover:text-brand-black">
                Submit Buyer Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-brand-pearl px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <div className="h-[1px] w-10 bg-brand-granite" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">What Happens Next</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {buyerSteps.map((step, index) => (
              <div key={step.title} className="rounded-[24px] border border-brand-pearl bg-white p-6 shadow-[0_16px_40px_rgba(27,33,39,0.04)] md:p-7">
                <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-granite">0{index + 1}</div>
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
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Why This Route Converts Better</span>
            </div>
            <h2 className="text-[32px] font-semibold leading-[1.02] tracking-[-0.04em] text-brand-black md:text-[54px]">
              A buyer landing page built around decision support, not just contact details.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-brand-charcoal md:text-base">
              Performance campaigns need a clearer promise, lower friction, and stronger next-step confidence. This buyer route is designed to turn interest into qualified action.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {buyerReasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="rounded-[24px] border border-brand-pearl bg-brand-pearl/28 p-6 md:p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-black text-brand-black">
                    <Icon size={20} />
                  </div>
                  <h3 className="mb-3 text-[22px] font-semibold leading-[1.05] tracking-[-0.03em] text-brand-black">{reason.title}</h3>
                  <p className="text-[15px] leading-7 text-brand-charcoal">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-7xl rounded-[28px] border border-brand-pearl bg-brand-black px-7 py-8 text-brand-pearl md:px-10 md:py-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-cloud">Need the landowner path instead?</p>
              <h3 className="text-[28px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-white md:text-[34px]">
                Start the dedicated landowner conversation with the right team.
              </h3>
            </div>
            <Link href="/landowners#landowner-form" className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-white">
              Go to Landowner Journey
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
