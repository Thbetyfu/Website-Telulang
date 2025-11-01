import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Achievement {
  image: string;
  alt: string;
}

interface AchievementsGalleryProps {
  achievements: Achievement[];
}

export function AchievementsGallery({ achievements }: AchievementsGalleryProps) {
  // Duplicate the achievements array to create seamless loop
  const duplicatedAchievements = [...achievements, ...achievements];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient overlays for edge fade effect */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

      {/* Scrolling container */}
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -100 * achievements.length - (achievements.length * 2)],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: achievements.length * 5, // Adjust speed here
            ease: 'linear',
          },
        }}
      >
        {duplicatedAchievements.map((achievement, index) => (
          <div
            key={index}
            className="flex-shrink-0 group"
          >
            <div className="relative h-48 w-80 overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-950 shadow-lg transition-all duration-500 group-hover:border-neutral-700 group-hover:shadow-2xl">
              <ImageWithFallback
                src={achievement.image}
                alt={achievement.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
