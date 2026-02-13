import { useInView, useTypewriter } from '@/hooks/use-animations';
import { Heart } from 'lucide-react';

const loveLetterLines = [
  "My Dearest,",
  "",
  "Every moment with you feels like a beautiful dream I never want to wake from.",
  "You are my sunshine on cloudy days, my calm in every storm,",
  "and the reason I believe in magic.",
  "",
  "Your laugh is my favorite sound,",
  "your smile is my favorite sight,",
  "and your heart is my favorite place to call home.",
  "",
  "I love you more than words could ever express,",
  "but I'll spend every day trying anyway.",
  "",
  "Forever & Always,",
  "Your Valentine ♥"
];

const LoveLetterSection = () => {
  const { ref, isInView } = useInView();
  const fullText = loveLetterLines.join('\n');
  const { displayedText, isComplete } = useTypewriter(fullText, 30, isInView);

  return (
    <section ref={ref} className="relative py-24 md:py-32 section-gradient-cream overflow-hidden">
      <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-blush/15 blur-3xl" />

      <div className="container max-w-2xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Heart className="w-6 h-6 text-primary fill-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            A Letter For You
          </h2>
        </div>

        <div className={`parchment-bg rounded-2xl p-8 md:p-12 shadow-xl border border-blush/30 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Decorative corners */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-2xl gold-accent">❧</div>
            <div className="absolute -top-4 -right-4 text-2xl gold-accent rotate-180">❧</div>
            <div className="absolute -bottom-4 -left-4 text-2xl gold-accent rotate-180" style={{ transform: 'scaleX(-1)' }}>❧</div>
            <div className="absolute -bottom-4 -right-4 text-2xl gold-accent">❧</div>

            <div className="font-script text-lg md:text-xl leading-relaxed text-foreground whitespace-pre-line min-h-[320px]">
              {displayedText}
              {!isComplete && <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
