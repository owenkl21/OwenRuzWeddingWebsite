import { Section } from '@/components/layout/Section';
import { weddingContent } from '@/data/site-content';

export function ScheduleSection() {
  return (
    <Section id="schedule" title="Wedding Day Schedule" subtitle="A joyful day, one moment at a time.">
      <div className="mx-auto grid max-w-3xl gap-4">
        {weddingContent.timeline.map((item) => (
          <div key={item.time} className="grid grid-cols-[110px_1fr] rounded-xl bg-white/80 p-4 shadow-sm">
            <span className="font-semibold text-evergreen">{item.time}</span>
            <span>{item.event}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
