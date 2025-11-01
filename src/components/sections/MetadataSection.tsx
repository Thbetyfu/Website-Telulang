import { motion } from 'motion/react';

interface MetadataItem {
  label: string;
  value: string;
}

interface MetadataSectionProps {
  items: MetadataItem[];
}

export function MetadataSection({ items }: MetadataSectionProps) {
  return (
    <section className="bg-black px-6 py-20 md:px-16 lg:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 border-t border-neutral-800/50 pt-16 md:grid-cols-4 lg:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="space-y-3 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-neutral-500 uppercase tracking-wider text-xs transition-colors group-hover:text-neutral-400">
                {item.label}
              </div>
              <div className="text-white text-lg transition-transform group-hover:translate-x-1">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
