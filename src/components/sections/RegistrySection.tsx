import { Section } from '@/components/layout/Section';
import { weddingContent } from '@/data/site-content';

export function RegistrySection() {
  return (
    <Section id="registry" title="Registry" subtitle="Thank you for celebrating with us.">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white/80 p-8 text-center shadow-sm">
        <p className="text-lg">{weddingContent.registry.message}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {weddingContent.registry.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-evergreen px-5 py-2 font-medium text-evergreen transition hover:bg-evergreen hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
