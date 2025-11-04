import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Simple3DDemo } from '../3d/Simple3DDemo';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  secondaryTitle?: string;
  subtitle: string;
  heroImage: string;
}

export function HeroSection({ title, secondaryTitle, subtitle, heroImage }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Hero Image/Video Placeholder with Parallax */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <ImageWithFallback
          src={heroImage}
          alt="Hero"
          className="h-full w-full object-cover opacity-60"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      </motion.div>

      {/* 3D Floating Elements Overlay */}
      <div className="absolute top-1/4 right-8 z-20 opacity-60 pointer-events-none">
        <Simple3DDemo />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-3 md:px-16 lg:px-32 pb-32">
        <motion.div 
          className="max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1 
            className="mb-4 text-4xl md:text-7xl lg:text-8xl text-white tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {title}
          </motion.h1>
          {secondaryTitle && (
            <motion.h2 
              className="mb-8 text-2xl md:text-4xl lg:text-5xl text-neutral-300 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {secondaryTitle}
            </motion.h2>
          )}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-4xl opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span className="text-neutral-400 text-sm uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-neutral-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
