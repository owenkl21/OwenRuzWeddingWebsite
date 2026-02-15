import { Section } from '@/components/layout/Section';
import { weddingContent } from '@/data/site-content';

export function StorySection() {
  return (
    <Section id="story" title={weddingContent.story.title}>
      <div className="mx-auto max-w-2xl rounded-2xl bg-white/80 p-8 text-center shadow-sm">
        <p className="text-lg leading-relaxed">{weddingContent.story.body}</p>
      </div>
    </Section>
  );
}
