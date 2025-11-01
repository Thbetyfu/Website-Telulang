import { motion } from 'motion/react';
import { Simple3DDemo } from '../3d/Simple3DDemo';

export function Innovation3DSection() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-full bg-neutral-900 px-6 py-2 text-sm text-neutral-300 border border-neutral-800 mb-6">
            Innovation Technology
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
            Eksplorasi Dimensi Baru
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            TELULANG mengintegrasikan teknologi 3D dan interactive design untuk menciptakan 
            pengalaman yang menghubungkan dunia digital dengan realitas yang bermakna.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Simple3DDemo />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl text-white mb-4">
              Inovasi dalam Setiap Piksel
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Kami memanfaatkan teknologi Three.js, WebGL, dan advanced rendering techniques 
              untuk menghadirkan visualisasi data yang interaktif dan engaging.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">3D Modeling & Animation</h4>
                  <p className="text-neutral-500 text-sm">Real-time rendering dan interactive 3D elements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Data Visualization</h4>
                  <p className="text-neutral-500 text-sm">Complex data transformed into visual stories</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Interactive Design</h4>
                  <p className="text-neutral-500 text-sm">User-centered experiences yang immersive</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
