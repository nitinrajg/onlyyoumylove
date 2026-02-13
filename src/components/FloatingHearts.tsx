import { useMemo } from 'react';

interface FloatingHeart {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
  opacity: number;
}

const FloatingHearts = ({ count = 15 }: { count?: number }) => {
  const hearts = useMemo<FloatingHeart[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${12 + Math.random() * 20}px`,
      duration: `${6 + Math.random() * 8}s`,
      delay: `${Math.random() * 10}s`,
      opacity: 0.15 + Math.random() * 0.25,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-heart"
          style={{
            left: heart.left,
            fontSize: heart.size,
            ['--duration' as string]: heart.duration,
            ['--delay' as string]: heart.delay,
            animationDelay: heart.delay,
            opacity: heart.opacity,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
