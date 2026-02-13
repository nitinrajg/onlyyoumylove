import { useState } from "react";
import { useInView } from "@/hooks/use-animations";
import { Heart } from "lucide-react";

const memories = [
  { date: "Day One", caption: "The moment everything changed", emoji: "✨" },
  { date: "First Date", caption: "Butterflies and stolen glances", emoji: "🦋" },
  { date: "First kiss", caption: "that kisswe had in lift", emoji: "💋" },
  { date: "Our Song", caption: "The melody that's forever ours", emoji: "🎵" },
  { date: "First 'I Love You'", caption: "Three words, infinite meaning", emoji: "💕" },
  { date: "Late Night Talks", caption: "When silence felt like a warm hug", emoji: "🌙" },
  { date: "Random Tuesday", caption: "Even ordinary days feel magic with you", emoji: "☀️" },
  { date: "That Rainy Day", caption: "Dancing without a care in the world", emoji: "🌧️" },
  { date: "Right Now", caption: "Still falling for you, every single day", emoji: "💖" },
];

const MemoryCard = ({
  memory,
  index,
  isVisible,
}: {
  memory: (typeof memories)[0];
  index: number;
  isVisible: boolean;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`perspective-1000 cursor-pointer transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full aspect-square transition-transform duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
        style={{ transformStyle: "preserve-3d", transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl bg-card border border-border shadow-lg flex flex-col items-center justify-center p-4 hover:shadow-xl hover:scale-[1.02] transition-all"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-4xl mb-3">{memory.emoji}</span>
          <h3 className="font-display text-lg font-semibold text-foreground text-center">{memory.date}</h3>
          <p className="text-xs text-muted-foreground mt-1 font-body">tap to reveal</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl section-gradient-deep flex flex-col items-center justify-center p-6 shadow-xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Heart className="w-6 h-6 text-primary-foreground fill-primary-foreground mb-3 animate-pulse-heart" />
          <p className="font-script text-xl text-primary-foreground text-center leading-relaxed">{memory.caption}</p>
        </div>
      </div>
    </div>
  );
};

const MemoryGallery = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 md:py-32 section-gradient-rose">
      <div className="container max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Heart className="w-6 h-6 text-primary fill-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Our Memories</h2>
          <p className="font-body text-muted-foreground">Tap each card to reveal our story</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {memories.map((memory, i) => (
            <MemoryCard key={i} memory={memory} index={i} isVisible={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;
