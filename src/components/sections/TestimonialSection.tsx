import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

interface TestimonialSectionProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialSection({ quote, author, role, company }: TestimonialSectionProps) {
  return (
    <section className="bg-black px-3 md:px-16 lg:px-32 py-40 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 opacity-50" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-neutral-900/30 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex rounded-full bg-neutral-900/50 p-6 backdrop-blur-sm border border-neutral-800">
            <Quote className="h-8 w-8 text-neutral-600" />
          </div>
        </motion.div>

        <motion.blockquote 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed tracking-tight">
            "{quote}"
          </p>
        </motion.blockquote>

        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-white text-xl">{author}</div>
          <div className="text-neutral-500 text-lg">
            {role}, {company}
          </div>
        </motion.div>

        {/* Rating Stars */}
        <motion.div 
          className="mt-12 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
            >
              <svg
                className="h-6 w-6 text-neutral-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
