import { useInView } from "@/hooks/use-animations";
import { Heart, MapPin, Music, Star, Plane, Coffee, Gift } from "lucide-react";

const milestones = [
  {
    icon: Star,
    date: "The Beginning",
    title: "We Met",
    description: "Two paths crossing at exactly the right moment. Fate knew what it was doing.",
  },
  {
    icon: Coffee,
    date: "First Date",
    title: "holding hands",
    description: "I knew from that very first act that you were something special.",
  },
  {
    icon: Heart,
    date: "The Moment",
    title: "First Kiss",
    description: "Time stopped, the world went quiet, and everything made sense.",
  },
  {
    icon: Music,
    date: "Our Song",
    title: "We Found Our Song",
    description: "Every time it plays, I'm transported back to that perfect moment with you.",
  },
  { icon: MapPin, date: "Adventure", title: "locked in stairs", description: "exploring each other's horniness." },
  {
    icon: Gift,
    date: "Special Day",
    title: "accepting",
    description: "the night you accepted me is the most special day of my life. Will love you to a thousand more.",
  },
  {
    icon: Plane,
    date: "Today",
    title: "Still Writing Our Story",
    description: "Every chapter with you is my favorite one yet.",
  },
];

const TimelineSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 md:py-32 section-gradient-rose">
      <div className="container max-w-3xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Heart className="w-6 h-6 text-primary fill-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Our Journey</h2>
          <p className="font-body text-muted-foreground">Every moment led us here</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {milestones.map((milestone, i) => {
            const Icon = milestone.icon;
            const isRight = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative flex items-start mb-12 md:mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Mobile layout: all left-aligned */}
                <div className="md:hidden flex gap-4 w-full">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 bg-card rounded-2xl p-5 shadow-md border border-border">
                    <span className="font-body text-xs tracking-wider uppercase text-muted-foreground">
                      {milestone.date}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">{milestone.title}</h3>
                    <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Desktop layout: alternating */}
                <div className="hidden md:flex w-full items-center">
                  <div className={`w-[calc(50%-24px)] ${isRight ? "text-right pr-8" : "order-3 pl-8"}`}>
                    <div
                      className={`bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow inline-block ${isRight ? "text-right" : "text-left"}`}
                    >
                      <span className="font-body text-xs tracking-wider uppercase text-muted-foreground">
                        {milestone.date}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground mt-1">{milestone.title}</h3>
                      <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg order-2">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className={`w-[calc(50%-24px)] ${isRight ? "order-3" : ""}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
