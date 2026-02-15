import { Section } from '@/components/layout/Section';
import { weddingContent } from '@/data/site-content';

export function TravelSection() {
  return (
    <Section id="travel" title="Travel & Stay" subtitle="Helpful details for out-of-town guests.">
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <article className="rounded-2xl bg-white/80 p-6 shadow-sm">
          <h3 className="font-display text-2xl text-evergreen">Nearest Airport</h3>
          <p className="mt-3">{weddingContent.travel.airport}</p>
        </article>
        <article className="rounded-2xl bg-white/80 p-6 shadow-sm">
          <h3 className="font-display text-2xl text-evergreen">Recommended Hotels</h3>
          <ul className="mt-3 list-inside list-disc space-y-2">
            {weddingContent.travel.hotels.map((hotel) => (
              <li key={hotel}>{hotel}</li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
