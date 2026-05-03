import Link from 'next/link';

const journeySteps = [
  {
    label: '01',
    title: 'Discover the right address',
    description: 'Start with the projects, locations, and lifestyle narrative that best match your family, investment goals, and preferred neighborhood.'
  },
  {
    label: '02',
    title: 'Qualify the fit with confidence',
    description: 'Use project detail pages, buyer guidance, and direct advisor access to understand value, layout logic, amenities, and next steps.'
  },
  {
    label: '03',
    title: 'Take the next step clearly',
    description: 'Move into a dedicated inquiry path for buyers or landowners, with the right form, the right expectations, and a stronger conversion route.'
  }
];

const audiences = [
  {
    eyebrow: 'Buyer Journey',
    title: 'Searching for a new residence or an investment-grade address?',
    description: 'Move from discovery to consultation with project shortlists, value cues, and a direct route to site visits, brochures, and advisor contact.',
    href: '/contact#buyer-form',
    cta: 'Start Buyer Journey',
    tone: 'light'
  },
  {
    eyebrow: 'Landowner Journey',
    title: 'Exploring development potential for your land?',
    description: 'Use the dedicated landowner route to discuss site location, partnership model, development viability, and the shape of a transparent joint venture.',
    href: '/landowners#landowner-form',
    cta: 'Start Landowner Journey',
    tone: 'dark'
  }
] as const;

export default function FunnelJourney() {
  return (
    <section className="border-b border-brand-pearl bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(230,234,237,0.42))] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 border-b border-brand-pearl pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[1px] w-10 bg-brand-granite" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Your Suvastu Journey</span>
            </div>
            <h2 className="max-w-xl text-[34px] font-semibold leading-[0.98] tracking-[-0.05em] text-brand-black md:text-[58px]">
              Find the Suvastu address that fits the life you want to build.
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-8 text-brand-charcoal md:justify-self-end md:text-base">
            Explore signature residences, compare locations and lifestyles, and move forward with clear guidance whether you are searching for a home, an investment, or a land development partnership.
          </p>
        </div>

        <div className="grid gap-5 pt-10 md:grid-cols-3">
          {journeySteps.map((step) => (
            <div key={step.label} className="rounded-[24px] border border-brand-pearl bg-white p-6 shadow-[0_18px_42px_rgba(27,33,39,0.05)] md:p-7">
              <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-granite">{step.label}</div>
              <h3 className="mb-4 text-[24px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-black md:text-[28px]">{step.title}</h3>
              <p className="text-[15px] leading-7 text-brand-charcoal">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 pt-12 md:grid-cols-2">
          {audiences.map((audience) => (
            <Link
              key={audience.eyebrow}
              href={audience.href}
              className={audience.tone === 'dark'
                ? 'group relative overflow-hidden rounded-[28px] border border-brand-charcoal/20 bg-brand-black p-7 text-brand-pearl shadow-[0_24px_58px_rgba(27,33,39,0.16)] md:p-8'
                : 'group relative overflow-hidden rounded-[28px] border border-brand-pearl bg-white p-7 shadow-[0_18px_44px_rgba(27,33,39,0.06)] md:p-8'}
            >
              <div className={audience.tone === 'dark'
                ? 'absolute bottom-0 right-0 h-32 w-32 rounded-full bg-brand-charcoal/60 blur-3xl transition-transform duration-500 group-hover:scale-110'
                : 'absolute right-0 top-0 h-28 w-28 rounded-full bg-brand-pearl/80 blur-3xl transition-transform duration-500 group-hover:scale-110'}
              />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className={audience.tone === 'dark' ? 'h-[1px] w-10 bg-brand-cloud' : 'h-[1px] w-10 bg-brand-granite'} />
                  <span className={audience.tone === 'dark'
                    ? 'text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-cloud'
                    : 'text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-granite'}>
                    {audience.eyebrow}
                  </span>
                </div>
                <h3 className={audience.tone === 'dark'
                  ? 'mb-4 max-w-[16ch] text-[28px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-white md:text-[36px]'
                  : 'mb-4 max-w-[16ch] text-[28px] font-semibold leading-[1.04] tracking-[-0.04em] text-brand-black md:text-[36px]'}>
                  {audience.title}
                </h3>
                <p className={audience.tone === 'dark'
                  ? 'mb-8 max-w-xl text-[15px] leading-7 text-brand-pearl/82'
                  : 'mb-8 max-w-xl text-[15px] leading-7 text-brand-charcoal'}>
                  {audience.description}
                </p>
                <div className={audience.tone === 'dark'
                  ? 'inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-white'
                  : 'inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-black'}>
                  {audience.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
