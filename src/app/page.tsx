import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { HeroSection } from '@/components/sections/HeroSection';
import { RegistrySection } from '@/components/sections/RegistrySection';
import { ScheduleSection } from '@/components/sections/ScheduleSection';
import { StorySection } from '@/components/sections/StorySection';
import { TravelSection } from '@/components/sections/TravelSection';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <StorySection />
        <ScheduleSection />
        <TravelSection />
        <RegistrySection />
      </main>
      <SiteFooter />
    </>
  );
}
