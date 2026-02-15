import { weddingContent } from '@/data/site-content';

export function HeroSection() {
  const { couple } = weddingContent;

  return (
    <section id="top" className="bg-hero-pattern">
      <div className="section-shell flex min-h-[70vh] flex-col items-center justify-center text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-evergreen/80">We&apos;re getting married</p>
        <h1 className="font-display text-5xl text-evergreen md:text-7xl">
          {couple.partnerOne} &amp; {couple.partnerTwo}
        </h1>
        <p className="mt-6 text-lg text-charcoal/85 md:text-2xl">{couple.dateLabel}</p>
        <p className="mt-2 text-base text-charcoal/75 md:text-lg">{couple.locationLabel}</p>
      </div>
    </section>
  );
}
