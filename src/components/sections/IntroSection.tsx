import { motion } from 'motion/react';

interface IntroSectionProps {
  title: string;
  paragraphs: string[];
}

export function IntroSection({ title, paragraphs }: IntroSectionProps) {
  return (
    <section className="bg-black px-6 py-32 md:px-16 lg:px-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-16 tracking-tight">
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
