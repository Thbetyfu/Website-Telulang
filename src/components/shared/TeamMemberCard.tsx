import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="perspective-1000 h-[400px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="relative h-full w-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-2xl border border-neutral-800/50 bg-neutral-950 overflow-hidden shadow-2xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-full">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl mb-2 tracking-tight">{member.name}</h3>
              <div className="inline-block rounded-full bg-neutral-900 px-4 py-1.5 text-sm text-neutral-300 border border-neutral-800">
                {member.role}
              </div>
              <p className="text-neutral-500 text-sm mt-4">Klik untuk info lebih lanjut</p>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-950 to-neutral-900 overflow-hidden shadow-2xl p-6 flex flex-col"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex-1 flex flex-col">
            <div className="mb-4">
              <h3 className="text-white text-2xl mb-2 tracking-tight">{member.name}</h3>
              <div className="text-neutral-400 text-sm uppercase tracking-wider">{member.role}</div>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
              {member.bio}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-4 border-t border-neutral-800/50">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-neutral-400 transition-all hover:bg-neutral-800 hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Mail className="h-4 w-4" />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-neutral-400 transition-all hover:bg-neutral-800 hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-neutral-400 transition-all hover:bg-neutral-800 hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-neutral-400 transition-all hover:bg-neutral-800 hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <p className="text-neutral-600 text-xs mt-4 text-center">Klik untuk kembali</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
