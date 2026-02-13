import { useInView } from '@/hooks/use-animations';
import { Heart, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center section-gradient-rose overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blush/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />

      <div className={`text-center z-10 px-4 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <Heart className="w-5 h-5 text-primary fill-primary animate-pulse-heart" />
          <span className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground">
            February 14, 2025
          </span>
          <Heart className="w-5 h-5 text-primary fill-primary animate-pulse-heart" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-tight">
          Happy Valentine's Day
        </h1>

        <p className="font-script text-3xl md:text-5xl text-gradient-romantic mt-4 mb-8 pb-2 leading-relaxed">
          My Love
        </p>

        <p className="font-body text-base md:text-lg text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
          This is my love letter to you — written in pixels, powered by heartbeats.
        </p>

        <div className="mt-12 flex justify-center">
          <Heart className="w-10 h-10 text-primary fill-primary animate-pulse-heart heart-shadow" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 z-10" style={{ animation: 'scrollDown 2s ease-in-out infinite' }}>
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
