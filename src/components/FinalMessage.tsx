import { useState } from 'react';
import { useInView } from '@/hooks/use-animations';
import { Heart, Sparkles } from 'lucide-react';

const FinalMessage = () => {
  const { ref, isInView } = useInView();
  const [easterEggRevealed, setEasterEggRevealed] = useState(false);

  return (
    <section ref={ref} className="relative py-24 md:py-32 section-gradient-deep overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>

      <div className="container max-w-2xl mx-auto px-6 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <Sparkles className="w-8 h-8 text-primary-foreground/80 mx-auto mb-6" />

          <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            You Are My
            <br />
            <span className="font-script text-5xl md:text-7xl">Everything</span>
          </h2>

          <p className="font-body text-lg text-primary-foreground/80 max-w-lg mx-auto leading-relaxed mb-10">
            In a world of billions, my heart chose you — and it would choose you
            in a hundred lifetimes, in a hundred worlds, in any version of reality.
          </p>

          {/* Big heart easter egg */}
          <button
            onClick={() => setEasterEggRevealed(true)}
            className="group relative inline-flex items-center justify-center mb-8 cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none"
            title="Click me..."
          >
            <Heart
              className="w-20 h-20 text-primary-foreground fill-primary-foreground animate-pulse-heart drop-shadow-2xl"
            />
            {!easterEggRevealed && (
              <span className="absolute -bottom-8 font-body text-xs text-primary-foreground/50 whitespace-nowrap">
                click the heart ♥
              </span>
            )}
          </button>

          {easterEggRevealed && (
            <div className="animate-fade-in-up mt-4 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <p className="font-script text-2xl md:text-3xl text-primary-foreground leading-relaxed">
                I promise to love you fiercely, laugh with you endlessly, and choose you every single day — 
                today, tomorrow, and for all the tomorrows after that.
              </p>
              <p className="font-body text-sm text-primary-foreground/70 mt-6 tracking-widest uppercase">
                Forever Yours ♥
              </p>
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-primary-foreground/10">
            <p className="font-body text-sm text-primary-foreground/50">
              Made with ♥ just for you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalMessage;
