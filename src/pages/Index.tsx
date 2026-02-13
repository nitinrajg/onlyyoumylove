import FloatingHearts from '@/components/FloatingHearts';
import MusicToggle from '@/components/MusicToggle';
import HeroSection from '@/components/HeroSection';
import LoveLetterSection from '@/components/LoveLetterSection';
import MemoryGallery from '@/components/MemoryGallery';
import ReasonsSection from '@/components/ReasonsSection';
import TimelineSection from '@/components/TimelineSection';
import FinalMessage from '@/components/FinalMessage';

const Index = () => {
  return (
    <div className="relative">
      <FloatingHearts count={12} />
      <MusicToggle />
      <HeroSection />
      <LoveLetterSection />
      <MemoryGallery />
      <ReasonsSection />
      <TimelineSection />
      <FinalMessage />
    </div>
  );
};

export default Index;
