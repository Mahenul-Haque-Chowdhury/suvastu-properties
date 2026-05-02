'use client';

export default function StoriesPage() {
  return (
    <div className="bg-white min-h-[70vh] pt-48 pb-24 px-6 text-center border-b border-brand-pearl">
      <div className="mb-6 flex items-center justify-center space-x-3">
        <div className="w-10 h-[1px] bg-brand-granite"></div>
        <span className="text-[11px] uppercase tracking-[0.3em] text-brand-granite">Journal</span>
        <div className="w-10 h-[1px] bg-brand-granite"></div>
      </div>
      <h1 className="text-5xl md:text-[72px] leading-[1] font-light tracking-tight text-brand-black mb-12">Editorial & Insights</h1>
      <p className="max-w-2xl mx-auto text-brand-charcoal text-sm leading-relaxed">
        Explore the latest trends in luxury real estate, architectural innovation, and the Suvastu lifestyle.
      </p>
    </div>
  );
}
