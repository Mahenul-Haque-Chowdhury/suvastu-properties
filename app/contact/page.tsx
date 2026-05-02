'use client';

import { motion } from 'motion/react';
import { RandomTextReveal } from '@/components/ui/RandomTextReveal';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-40 md:pt-48 pb-24 px-6 border-b border-brand-pearl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row items-start justify-between gap-8"
        >
          <div>
            <div className="mb-6 flex items-center space-x-3">
              <div className="w-10 h-[1px] bg-brand-granite"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Contact With Us</span>
            </div>
            <h1 className="text-5xl md:text-[80px] leading-[0.9] font-light tracking-tight text-brand-black">
              Customer <br className="hidden md:block" /> Service.
            </h1>
          </div>
          <div className="md:text-right mt-6 md:mt-auto hidden md:block">
            <p className="text-[9px] uppercase tracking-[0.2em] text-brand-granite">Our experts are waiting for you</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
          
          <div className="lg:col-span-7 space-y-24">
            {/* Customer Service Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl font-light tracking-tight mb-8">Dear Customer,</h2>
              <p className="text-brand-charcoal text-sm leading-relaxed mb-12 max-w-xl">
                At Suvastu Properties Ltd., the journey towards your dream home begins. Our dedicated team is here to assist you at every step, ensuring a smooth and personalized experience. Reach out to us for expert guidance, tailored solutions, and a seamless journey to purchase your perfect home. Contact us today.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-brand-pearl pt-10">
                <div className="group cursor-pointer">
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-brand-granite mb-3">Head Office Front Desk</span>
                  <a href="tel:+8802226601310" className="text-2xl md:text-3xl font-light text-brand-black group-hover:text-brand-granite transition-colors inline-block">+880 2226 601 310</a>
                </div>
                <div className="group cursor-pointer">
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-brand-granite mb-3">International Call</span>
                  <a href="tel:+8809639500400" className="text-2xl md:text-3xl font-light text-brand-black group-hover:text-brand-granite transition-colors inline-block">+880 9639 500 400</a>
                </div>
                <div className="group cursor-pointer sm:col-span-2 mt-4">
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-brand-granite mb-3">Contact through E-mail</span>
                  <a href="mailto:marketing@suvastu.com" className="text-2xl md:text-3xl font-light text-brand-black group-hover:text-brand-granite transition-colors inline-block pb-2 border-b border-transparent group-hover:border-brand-granite">marketing@suvastu.com</a>
                </div>
              </div>
            </motion.section>

            {/* After-Sales Service Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-brand-pearl pt-16"
            >
              <div className="mb-6 flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-brand-black rounded-full"></span>
                <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Beyond Purchase</span>
              </div>
              <h2 className="text-3xl md:text-[40px] leading-[1.1] font-light tracking-tight mb-10 text-brand-black">Premier Real Estate Developer | Suvastu</h2>
              <div className="space-y-6 text-brand-charcoal text-sm leading-loose max-w-2xl">
                <p>
                  Welcome to Suvastu Properties Ltd., where our commitment to your satisfaction goes beyond your property purchase. Our after-sales service team is dedicated to providing you with a seamless and stress-free experience long after you’ve settled into your new home. We understand that your peace of mind is essential, and that’s why we offer comprehensive maintenance solutions, ensuring your property remains in pristine condition. Our experts are always on hand to address your concerns, promptly resolving any issues that may arise.
                </p>
                <p>
                  At Suvastu Properties Ltd., we believe that your home should be a sanctuary where you can thrive, surrounded by comfort and convenience. Our after-sales service goes the extra mile to make your living experience truly exceptional. We take pride in fostering lasting relationships with our homeowners, building trust through our reliable assistance and personalized care. Choose Suvastu for a home that comes with dedicated support every step of the way. Your satisfaction is our priority, and we are here to make your living experience at Suvastu truly unforgettable.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-brand-pearl p-8 border-l-4 border-brand-black transition-all cursor-pointer group"
                >
                  <a href="mailto:crm@suvastu.com" className="text-xl md:text-2xl font-light text-brand-black group-hover:opacity-60 transition-opacity block mb-4">crm@suvastu.com</a>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-brand-granite leading-relaxed">Reach our Dedicated Customer Care Experts through E-mail</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-brand-pearl p-8 border-l-4 border-brand-black transition-all cursor-pointer group"
                >
                  <a href="mailto:pm@suvastu.com" className="text-xl md:text-2xl font-light text-brand-black group-hover:opacity-60 transition-opacity block mb-4">pm@suvastu.com</a>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-brand-granite leading-relaxed">Reach our Expert Project Managers through E-mail</span>
                </motion.div>
              </div>
            </motion.section>

            {/* Landowners Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-brand-pearl pt-16"
            >
              <div className="mb-6 flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-brand-black rounded-full"></span>
                <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">For Landowners</span>
              </div>
              
              <RandomTextReveal 
                text="Witness, As We Transform Your Land to a Landmark" 
                className="text-3xl md:text-[40px] leading-[1.2] font-normal tracking-tight mb-8 text-brand-black max-w-xl"
              />
              
              <p className="text-brand-charcoal text-sm leading-relaxed mb-10 max-w-xl">
                We understand the value of your property. Partner with Suvastu to transform your land into an iconic architectural landmark, ensuring a mutually rewarding relationship built on trust and excellence.
              </p>

              <div className="group cursor-pointer">
                <span className="block text-[9px] uppercase tracking-[0.2em] text-brand-granite mb-3">Joint Venture Inquiry</span>
                <a href="mailto:jv@suvastu.com" className="text-2xl md:text-3xl font-light text-brand-black group-hover:text-brand-granite transition-colors inline-block pb-2 border-b border-transparent group-hover:border-brand-granite">jv@suvastu.com</a>
              </div>

              <div className="rounded-[28px] border border-brand-stone/70 bg-brand-pearl/45 p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-[1px] w-10 bg-brand-granite" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-granite">Landowner Route</span>
                </div>
                <h3 className="mb-4 text-[28px] font-semibold leading-[1.05] tracking-[-0.03em] text-brand-black">
                  Looking for the dedicated landowner form?
                </h3>
                <p className="mb-6 max-w-xl text-[15px] leading-7 text-brand-charcoal">
                  Use the landowner journey to share land details, preferred location, and partnership intent with the right team.
                </p>
                <a href="/landowners#landowner-form" className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-black transition-colors hover:text-brand-granite">
                  Go to Landowner Form
                  <span>→</span>
                </a>
              </div>
            </motion.section>
          </div>

          <div className="lg:col-span-5 relative mt-16 md:mt-24 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              id="buyer-form"
              className="lg:sticky lg:top-32 bg-brand-pearl p-8 md:p-10 border-[8px] md:border-[12px] border-white shadow-sm"
            >
              <div className="mb-10 border-b border-brand-stone pb-6">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-granite">Buyer Form</p>
                <h3 className="text-3xl font-light tracking-tight text-brand-black mb-2">Book a Visit or Speak to an Advisor</h3>
                <p className="text-[9px] uppercase tracking-[0.2em] text-brand-granite">Buyer consultations and project inquiries</p>
              </div>
              <form className="space-y-8 text-left">
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] text-brand-granite mb-2">Name</label>
                  <input type="text" className="w-full border-b border-brand-granite py-2 focus:outline-none focus:border-brand-black bg-transparent transition-colors text-sm text-brand-black" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] text-brand-granite mb-2">Phone</label>
                  <input type="tel" className="w-full border-b border-brand-granite py-2 focus:outline-none focus:border-brand-black bg-transparent transition-colors text-sm text-brand-black" placeholder="+880 123 456 7890" />
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] text-brand-granite mb-2">Preferred Project</label>
                  <input type="text" className="w-full border-b border-brand-granite py-2 focus:outline-none focus:border-brand-black bg-transparent transition-colors text-sm text-brand-black" placeholder="Suvastu Shaptarshi" />
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] text-brand-granite mb-2">Visit or Inquiry Type</label>
                  <select className="w-full border-b border-brand-granite py-2 focus:outline-none focus:border-brand-black bg-transparent transition-colors text-sm text-brand-black">
                    <option>Book a Site Visit</option>
                    <option>Pricing Inquiry</option>
                    <option>Availability Inquiry</option>
                    <option>General Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] text-brand-granite mb-2">Message</label>
                  <textarea className="w-full border-b border-brand-granite py-2 focus:outline-none focus:border-brand-black bg-transparent transition-colors text-sm text-brand-black resize-none h-24" placeholder="Tell us what kind of residence or visit you are interested in."></textarea>
                </div>
                <button type="button" className="w-full border border-brand-black bg-brand-black text-white py-5 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-transparent hover:text-brand-black transition-colors mt-6">
                  Submit Buyer Inquiry
                </button>
              </form>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
