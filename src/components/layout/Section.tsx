import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section-shell">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl text-evergreen md:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-3 text-base text-charcoal/80 md:text-lg">{subtitle}</p> : null}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
