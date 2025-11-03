import { motion } from 'motion/react';
import { TeamMemberCard } from '../shared/TeamMemberCard';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamSectionProps {
  members: TeamMember[];
}

export function TeamSection({ members }: TeamSectionProps) {
  // Separate leader and other members
  const leader = members[0];
  const middleRow = members.slice(1, 4);
  const bottomRow = members.slice(4);

  return (
    <section className="bg-black px-3 md:px-16 lg:px-32 py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block rounded-full bg-neutral-900/50 px-5 py-2 text-xs uppercase tracking-widest text-neutral-400 border border-neutral-800 mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
            Tim Kami
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
            Bertemu dengan para profesional berbakat yang mendedikasikan keahlian mereka untuk menciptakan solusi inovatif
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="space-y-8">
          {/* Leader - Centered */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <TeamMemberCard member={leader} index={0} />
            </div>
          </div>

          {/* Middle Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {middleRow.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index + 1} />
            ))}
          </div>

          {/* Bottom Row - Remaining cards */}
          {bottomRow.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bottomRow.map((member, index) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  index={index + middleRow.length + 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
