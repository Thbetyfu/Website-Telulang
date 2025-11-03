import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion } from 'motion/react';

interface Feature {
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}

interface FeaturesSectionProps {
  features: Feature[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="bg-black py-20">
      {features.map((feature, index) => (
        <div
          key={index}
          className="mx-auto max-w-7xl px-3 md:px-16 lg:px-32 py-20"
        >
          <div
            className={`grid items-center gap-16 lg:grid-cols-2 lg:gap-20 ${
              feature.imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            {/* Text Content */}
            <motion.div
              className={`space-y-6 ${
                feature.imagePosition === 'right' ? 'lg:col-start-1' : ''
              }`}
              initial={{ opacity: 0, x: feature.imagePosition === 'right' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="inline-block rounded-full bg-neutral-900 px-4 py-2 text-xs uppercase tracking-widest text-neutral-400 border border-neutral-800"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Iterate
              </motion.div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
                {feature.title}
              </h3>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-xl">
                {feature.description}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              className={`relative group ${
                feature.imagePosition === 'right' ? 'lg:col-start-2' : ''
              }`}
              initial={{ opacity: 0, x: feature.imagePosition === 'right' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-950 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-neutral-700/20 via-transparent to-neutral-700/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  <ImageWithFallback
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover aspect-[16/10]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Decorative Element */}
              <motion.div
                className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-neutral-900/50 blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
