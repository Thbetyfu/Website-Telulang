import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
}: CTASectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-black via-neutral-950 to-black px-6 py-40 md:px-16 lg:px-32 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/3 left-1/3 h-96 w-96 rounded-full bg-neutral-800/20 blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 h-96 w-96 rounded-full bg-neutral-800/20 blur-3xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block rounded-full bg-neutral-900/50 px-5 py-2 text-xs uppercase tracking-widest text-neutral-400 border border-neutral-800 mb-12 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's Work Together
          </motion.div>
        </motion.div>

        <motion.h2 
          className="text-white text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {title}
        </motion.h2>

        <motion.p 
          className="text-neutral-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {description}
        </motion.p>

        <motion.div 
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-neutral-200 transition-all duration-300 group text-base px-8 py-6"
            >
              <Mail className="mr-2 h-5 w-5" />
              {primaryButtonText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          {secondaryButtonText && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-700 bg-transparent text-white hover:bg-neutral-900 hover:text-white hover:border-neutral-600 transition-all duration-300 text-base px-8 py-6"
              >
                {secondaryButtonText}
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-16 pt-16 border-t border-neutral-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-neutral-500">
            <a 
              href="mailto:thoriq.a.taqy@gmail.com" 
              className="hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              thoriq.a.taqy@gmail.com
            </a>
            <span className="hidden sm:block">•</span>
            <a 
              href="tel:+62895603358692" 
              className="hover:text-white transition-colors duration-300"
            >
              +62 89 5603 358692
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
