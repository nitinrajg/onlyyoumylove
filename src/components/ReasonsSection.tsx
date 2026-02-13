import { useState, useCallback } from "react";
import { useInView } from "@/hooks/use-animations";
import { Heart } from "lucide-react";

const reasons = [
  "Your infectious laugh",
  "The way you scrunch your nose",
  "Your kindness to strangers",
  "How you hold my hand",
  "Your terrible puns",
  "The way you say my name",
  "Your morning voice",
  "How you steal my attention",
  "Your adventurous spirit",
  "The way you dance when no one's watching",
  "Your passion for life",
  "How you make everything fun",
  "Your warm hugs",
  "The way you listen",
  "How you believe in me",
  "Your beautiful eyes",
  "The silly faces you make",
  "How you care so deeply",
  "Your determination",
  "The way you light up a room",
  "How safe I feel with you",
  "Your creativity",
  "The way you smell",
  "How you motivate me",
  "Your patience with me",
  "The little notes you leave",
  "How you never give up",
  "Your cooking experiments",
  "The way you sing off-key",
  "How you make me laugh",
  "Your thoughtfulness",
  "The way you read to me",
  "How you remember small details",
  "Your bravery",
  "The way you look at the stars",
  "How you make me better",
  "Your smile first thing in the morning",
  "The way you play with your hair",
  "How you fight for what's right",
  "Your surprise texts",
  "The way you dream big",
  "How you handle tough days",
  "Your playful side",
  "The way you forgive",
  "How you celebrate the little wins",
  "Your empathy",
  "The way you love animals",
  "How you challenge me to grow",
  "Your spontaneity",
  "The fact that you're mine",
];

const ReasonsSection = () => {
  const { ref, isInView } = useInView();
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const revealReason = useCallback((index: number) => {
    setRevealed((prev) => new Set(prev).add(index));
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 section-gradient-cream">
      <div className="container max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Heart className="w-6 h-6 text-primary fill-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-2">Reasons I Love You</h2>
          <p className="font-body text-muted-foreground">
            <span className="text-primary font-semibold">{revealed.size}</span> / {reasons.length} discovered
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-2 md:gap-3 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {reasons.map((reason, i) => (
            <button
              key={i}
              onClick={() => revealReason(i)}
              className={`
                px-4 py-2 rounded-full font-body text-sm transition-all duration-300 border
                ${
                  revealed.has(i)
                    ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                    : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary hover:shadow-sm hover:scale-105 cursor-pointer"
                }
              `}
            >
              {revealed.has(i) ? (
                <span className="flex items-center gap-1.5">
                  <Heart className="w-3 h-3 fill-current" />
                  {reason}
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <Heart className="w-3 h-3" />#{i + 1}
                </span>
              )}
            </button>
          ))}
        </div>

        {revealed.size === reasons.length && (
          <div className="text-center mt-12 animate-fade-in-up">
            <p className="font-script text-2xl text-primary">...and a million more reasons I discover every day 💕</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReasonsSection;
