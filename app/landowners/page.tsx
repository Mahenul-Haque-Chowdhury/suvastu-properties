'use client';

export default function LandownersPage() {
  return (
    <div className="bg-white border-b border-brand-pearl">
      <section className="px-6 pb-20 pt-40 md:px-12 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center space-x-3">
            <div className="w-10 h-[1px] bg-brand-granite"></div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">For Landowners</span>
          </div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-brand-black md:text-[80px]">
            Transform your land into a landmark through a transparent partnership.
          </h1>
          <p className="mt-8 max-w-3xl text-[15px] leading-8 text-brand-charcoal md:text-base">
            Suvastu partners with landowners to unlock site value through strong design, responsible development, and long-term brand trust. Share your property details and our team will guide the next steps.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-pearl px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center space-x-3">
              <div className="h-[1px] w-10 bg-brand-granite"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Landowner Journey</span>
            </div>
            <h2 className="text-[36px] font-semibold leading-[1] tracking-[-0.04em] text-brand-black md:text-[52px]">
              A clearer, more confident way to begin the conversation.
            </h2>
            <div className="mt-8 space-y-6 text-[15px] leading-8 text-brand-charcoal">
              <p>
                Our land acquisition team reviews location potential, site conditions, development viability, and partnership expectations with a transparent process from the first conversation.
              </p>
              <p>
                Whether the site is in a prime urban address or an emerging residential corridor, we aim to build proposals that respect both long-term value and execution quality.
              </p>
            </div>
          </div>

          <div id="landowner-form" className="rounded-[32px] border border-brand-pearl bg-brand-pearl/45 p-8 shadow-[0_18px_48px_rgba(27,33,39,0.08)] md:p-10">
            <div className="mb-8 border-b border-brand-stone pb-6">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-granite">Landowner Form</p>
              <h3 className="text-3xl font-light tracking-tight text-brand-black mb-2">Start a Land Partnership Discussion</h3>
              <p className="text-[9px] uppercase tracking-[0.2em] text-brand-granite">Dedicated inquiry for landowners and joint venture discussions</p>
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
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-granite">Property Location</label>
                <input type="text" className="w-full border-b border-brand-granite bg-transparent py-2 text-sm text-brand-black transition-colors focus:border-brand-black focus:outline-none" placeholder="Gulshan, Banani, Dhanmondi..." />
              </div>
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-granite">Land Size</label>
                <input type="text" className="w-full border-b border-brand-granite bg-transparent py-2 text-sm text-brand-black transition-colors focus:border-brand-black focus:outline-none" placeholder="e.g. 10 kathas" />
              </div>
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-granite">Partnership Interest</label>
                <select className="w-full border-b border-brand-granite bg-transparent py-2 text-sm text-brand-black transition-colors focus:border-brand-black focus:outline-none">
                  <option>Joint Venture</option>
                  <option>Direct Sale</option>
                  <option>Development Consultation</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-brand-granite">Message</label>
                <textarea className="h-28 w-full resize-none border-b border-brand-granite bg-transparent py-2 text-sm text-brand-black transition-colors focus:border-brand-black focus:outline-none" placeholder="Share basic land details, location notes, or preferred partnership expectations."></textarea>
              </div>
              <button type="button" className="mt-4 w-full border border-brand-black bg-brand-black py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-white transition-colors hover:bg-transparent hover:text-brand-black">
                Submit Landowner Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
