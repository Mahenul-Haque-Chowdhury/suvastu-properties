'use client';

export default function AboutPage() {
  const leaders = [
    {
      name: 'Nazmul Haque Khan',
      role: 'Managing Director',
      note: 'Guiding Suvastu with a long-term vision rooted in wellness, trust, and design excellence.'
    },
    {
      name: 'Design & Delivery Team',
      role: 'Project Leadership',
      note: 'Cross-functional professionals committed to construction quality, smooth delivery, and premium customer experience.'
    },
    {
      name: 'Customer Experience Team',
      role: 'Partner Success',
      note: 'Ensuring every buyer and landowner journey feels responsive, transparent, and well supported.'
    }
  ];

  const differentiators = [
    'Wellness-led brand philosophy built around Return to Yourself.',
    'Prime Dhaka locations selected for long-term lifestyle value.',
    'Design-forward residences with premium construction standards.',
    'Transparent relationships with both homeowners and landowners.',
  ];

  return (
    <div className="bg-white border-b border-brand-pearl">
      <section className="px-6 pb-16 pt-32 md:px-12 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center space-x-3">
            <div className="h-[1px] w-10 bg-brand-granite"></div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">The Brand</span>
          </div>
          <h1 className="max-w-5xl text-[40px] font-semibold leading-[0.98] tracking-[-0.05em] text-brand-black sm:text-5xl md:text-[80px]">
            Building legacies through wellness, trust, and timeless living.
          </h1>
          <p className="mt-8 max-w-3xl text-[15px] leading-8 text-brand-charcoal md:text-base">
            Suvastu Properties Ltd. has been shaping premium real estate experiences since 1994. Our work brings together thoughtful locations, strong construction values, and a brand philosophy that invites people to return to what matters most.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 md:gap-8">
            <a href="#our-story" className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-granite transition-colors hover:text-brand-black">Our Story</a>
            <a href="#leadership" className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-granite transition-colors hover:text-brand-black">Leadership</a>
            <a href="#why-us" className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-granite transition-colors hover:text-brand-black">Why Us</a>
          </div>
        </div>
      </section>

      <section id="our-story" className="border-t border-brand-pearl px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center space-x-3">
              <div className="h-[1px] w-10 bg-brand-granite"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Our Story</span>
            </div>
            <h2 className="text-[30px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-black md:text-[52px]">
              A real estate journey rooted in meaning.
            </h2>
          </div>
          <div className="space-y-6 text-[15px] leading-8 text-brand-charcoal md:text-base">
            <p>
              Established in 1994, Suvastu has spent decades building a reputation around design quality, integrity, and long-term customer trust. Over time, the brand has evolved into a wellness-led real estate company with a clear point of view about how people should feel in the spaces they call home.
            </p>
            <p>
              Our philosophy, Return to Yourself, reflects a deeper commitment than simply delivering buildings. We aim to create environments that support calm, dignity, and a stronger sense of belonging in everyday life.
            </p>
          </div>
        </div>
      </section>

      <section id="leadership" className="border-t border-brand-pearl bg-brand-pearl/45 px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-5 flex items-center space-x-3">
                <div className="h-[1px] w-10 bg-brand-granite"></div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Leadership</span>
              </div>
              <h2 className="text-[30px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-black md:text-[52px]">
                Leadership with long-term conviction.
              </h2>
            </div>
            <p className="max-w-2xl text-[15px] leading-8 text-brand-charcoal md:text-base">
              The brand is guided by professionals who balance premium design ambition with disciplined delivery, responsible partnerships, and customer confidence.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {leaders.map((leader) => (
              <div key={leader.name} className="rounded-[24px] border border-brand-stone/60 bg-brand-white p-6 shadow-[0_14px_36px_rgba(27,33,39,0.06)] md:rounded-[28px] md:p-8">
                <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-granite">{leader.role}</div>
                <h3 className="mb-4 text-[24px] font-semibold leading-[1.02] tracking-[-0.03em] text-brand-black md:text-[28px]">{leader.name}</h3>
                <p className="text-[15px] leading-7 text-brand-charcoal">{leader.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="border-t border-brand-pearl px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center space-x-3">
              <div className="h-[1px] w-10 bg-brand-granite"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Why Us</span>
            </div>
            <h2 className="text-[30px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-black md:text-[52px]">
              Why homeowners and landowners choose Suvastu.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item} className="rounded-[24px] border border-brand-pearl bg-brand-white p-6">
                <div className="mb-4 h-10 w-10 rounded-full border border-brand-black text-brand-black flex items-center justify-center text-sm">+</div>
                <p className="text-[15px] leading-7 text-brand-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
