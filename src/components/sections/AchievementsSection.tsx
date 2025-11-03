import { motion } from 'motion/react';
import { AchievementsGallery } from '../shared/AchievementsGallery';

interface Achievement {
  image: string;
  alt: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section className="bg-neutral-950 px-3 md:px-16 lg:px-32 py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block rounded-full bg-neutral-900/50 px-5 py-2 text-xs uppercase tracking-widest text-neutral-400 border border-neutral-800 mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Success
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
            Pencapaian Kami
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
            Prestasi dan kolaborasi dengan klien-klien terkemuka yang telah kami raih
          </p>
        </motion.div>

        {/* Achievements Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AchievementsGallery achievements={achievements} />
        </motion.div>
      </div>
    </section>
  );
}
