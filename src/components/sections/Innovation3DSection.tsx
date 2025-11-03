import { motion } from 'motion/react';
import { OBJModelViewer } from '../3d/OBJModelViewer';

interface Innovation3DData {
  badge: string;
  title: string;
  description: string;
  contentTitle: string;
  contentDescription: string;
  features: Array<{
    color: string;
    title: string;
    description: string;
  }>;
}

interface Innovation3DSectionProps {
  data: Innovation3DData;
}

const getColorClass = (color: string): string => {
  const colorMap: Record<string, string> = {
    cyan: 'bg-cyan-400',
    red: 'bg-red-400',
    green: 'bg-green-400',
    blue: 'bg-blue-400',
    purple: 'bg-purple-400',
    pink: 'bg-pink-400',
    yellow: 'bg-yellow-400',
    orange: 'bg-orange-400',
  };
  return colorMap[color] || 'bg-cyan-400';
};

export function Innovation3DSection({ data }: Innovation3DSectionProps) {
  return (
    <section className="py-20 px-3 md:px-12 lg:px-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-30"
        >
          <div className="inline-block rounded-full bg-neutral-900 px-6 py-2 text-sm text-neutral-300 border border-neutral-800 mb-8">
            {data.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
            {data.title}
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {/* 3D OBJ Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <OBJModelViewer />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-5 mt-12"
          >
            <h3 className="text-2xl md:text-3xl text-white mb-">
              {data.contentTitle}
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              {data.contentDescription}
            </p>
            <div className="space-y-17">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 ${getColorClass(feature.color)} rounded-full mt-2 flex-shrink-0`} />
                  <div>
                    <h4 className="text-white font-medium">{feature.title}</h4>
                    <p className="text-neutral-500 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
