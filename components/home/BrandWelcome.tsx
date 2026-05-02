import Link from 'next/link';
import { RandomTextReveal } from '@/components/ui/RandomTextReveal';

export default function BrandWelcome() {
  return (
    <section className="relative overflow-hidden border-b border-brand-pearl bg-white px-6 py-16 md:px-12 md:py-20">
      <div className="absolute inset-y-0 left-0 hidden w-[34%] bg-[linear-gradient(180deg,var(--color-brand-white)_0%,var(--color-brand-pearl)_100%)] lg:block" />
      <div className="absolute left-[8%] top-14 hidden h-48 w-48 rounded-full bg-brand-pearl/70 blur-3xl lg:block" />
      <div className="absolute bottom-10 right-[10%] hidden h-56 w-56 rounded-full bg-brand-pearl/60 blur-3xl lg:block" />
      <div className="relative mx-auto grid max-w-[1500px] items-stretch gap-8 lg:grid-cols-[minmax(520px,0.95fr)_minmax(0,1.45fr)] lg:gap-10">
        <div className="relative flex min-h-[240px] items-center overflow-hidden rounded-[34px] border border-brand-pearl/90 bg-[linear-gradient(180deg,var(--color-brand-white)_0%,var(--color-brand-pearl)_100%)] px-8 py-10 text-brand-black shadow-[0_18px_55px_rgba(27,33,39,0.08)] md:px-12 lg:min-h-[280px] lg:rounded-[44px] lg:px-14">
          <div className="absolute left-10 top-8 h-24 w-24 rounded-full border border-brand-pearl/80" />
          <div className="absolute bottom-8 left-14 h-36 w-36 rounded-full bg-brand-white/70 blur-2xl" />
          <div className="relative max-w-[420px] pt-2">
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-granite">Brand Mantra</div>
            <div className="text-[48px] font-semibold leading-[0.94] tracking-[-0.055em] text-brand-black md:text-[60px] lg:text-[72px]">
              <RandomTextReveal text="Return" className="block" />
              <RandomTextReveal text="to" className="block" />
              <RandomTextReveal text="Yourself" className="block" />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[34px] bg-brand-black px-8 py-9 text-brand-pearl shadow-[0_30px_90px_rgba(27,33,39,0.16)] md:px-12 md:py-10 lg:rounded-[44px] lg:px-14">
          <div className="absolute inset-y-0 right-0 w-[32%] bg-[linear-gradient(180deg,rgba(160,164,165,0.08)_0%,rgba(118,127,132,0.02)_100%)]" />
          <div className="mb-8 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-brand-cloud" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.34em] text-brand-cloud">Our Story</span>
          </div>

          <div className="relative max-w-4xl">
            <h2 className="max-w-3xl text-[32px] font-semibold leading-[1.02] tracking-[-0.04em] text-brand-white md:text-[44px] lg:text-[52px]">
              Welcome to Suvastu Properties Ltd.
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-brand-pearl/88 md:text-[16px]">
              <p>
                Established in 1994, our journey in the real estate industry spans more than 30 years, and today, we stand as a beacon of wellness, excellence, and commitment in Bangladesh. We redefined ourselves in 2017 with a brand-new vision of becoming the most desirable real estate development company in Bangladesh.
              </p>
              <p>
                Our core belief revolves around wellness for all, which is why we love crafting spaces that echo your essence and nurture your soul. Our slogan, Return to Yourself, reflects a simple idea: your home should be a place where you can truly unwind and reconnect with your true self.
              </p>
              <p>
                Thank you for considering Suvastu Properties Ltd. as your trusted partner in finding the perfect home. Experience the difference of a space that truly resonates with your essence. Welcome home.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-6">
              <Link
                href="/about"
                className="inline-flex items-center justify-center border border-brand-cloud px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-white transition-colors duration-300 hover:bg-brand-white hover:text-brand-black"
              >
                Know More
              </Link>
              <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-cloud">
                Since 1994 / Return to Yourself
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}