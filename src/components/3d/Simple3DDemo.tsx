import { Suspense } from 'react';

export function Simple3DDemo() {
  return (
    <div className="h-64 w-full relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          {/* CSS-based 3D elements as demonstration */}
          <div className="relative">
            <div 
              className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg mx-auto mb-4 animate-spin"
              style={{
                transform: 'rotateX(45deg) rotateY(45deg)',
                transformStyle: 'preserve-3d',
                animation: 'spin 4s linear infinite'
              }}
            />
            <div 
              className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-600 rounded-full mx-auto mb-4"
              style={{
                transform: 'rotateX(30deg) rotateY(60deg)',
                transformStyle: 'preserve-3d',
                animation: 'bounce 2s ease-in-out infinite'
              }}
            />
            <div 
              className="w-12 h-24 bg-gradient-to-br from-green-400 to-emerald-600 mx-auto"
              style={{
                transform: 'rotateX(60deg) rotateY(30deg)',
                transformStyle: 'preserve-3d',
                animation: 'pulse 3s ease-in-out infinite'
              }}
            />
          </div>
          <p className="text-white/70 text-sm mt-6">3D Demo - TELULANG Innovation</p>
        </div>
      </div>
    </div>
  );
}
