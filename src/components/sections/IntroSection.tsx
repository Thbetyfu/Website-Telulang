import { motion } from 'motion/react';
import PixelBlast from '../PixelBlast';

interface IntroSectionProps {
  title: string;
  paragraphs: string[];
}

export function IntroSection({ title, paragraphs }: IntroSectionProps) {
  return (
    <section className="bg-black px-3 md:px-16 lg:px-32 py-32 relative overflow-hidden min-h-screen">
      {/* PixelBlast Background Effect - Centered with limited width */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: '0%', zIndex: 0 }}>
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#EF4444"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples={true}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={true}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0}
          transparent={true}
          antialias={true}
          noiseAmount={0}
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white mb-16 tracking-tight">
            {title}
          </h2>
        </motion.div>
        
        <div className="space-y-8">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-neutral-400 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
