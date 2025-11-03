import { HeroSection } from './components/sections/HeroSection';
import { MetadataSection } from './components/sections/MetadataSection';
import { IntroSection } from './components/sections/IntroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { Innovation3DSection } from './components/sections/Innovation3DSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { TeamSection } from './components/sections/TeamSection';
import { TestimonialSection } from './components/sections/TestimonialSection';
import { CTASection } from './components/sections/CTASection';

export default function App() {
  const metadata = [
    { label: 'NAMA TEAM', value: 'TELULANG' },
    { label: 'Visi', value: 'Menjadi tolak ukur inovasi Telkom University' },
    { label: 'Misi', value: ' Merekayasa inovasi yang relevan dan solutif' },
    { label: 'Tahun', value: '2025' },
  ];

  const introParagraphs = [
    'Kami adalah TELULANG, tim inovasi unggulan Telkom University. Kami menghidupi filosofi "PETUALANG"sebuah keyakinan bahwa inovasi sejati tidak lahir dari jalan yang aman, melainkan dari eksplorasi di wilayah yang belum terpetakan. Sebagai penjelajah di dunia ide, kami adalah kolektif yang berani menantang status quo dan mentransformasi konsep abstrak menjadi solusi nyata yang berdampak. Petualangan kami adalah sebuah pencarian abadi',
    'Pencarian abadi ini menuntut lebih dari sekadar keberanian ia menuntut metodologi yang presisi. Kekuatan kami adalah sinergi disiplin antara tiga pilar inti: wawasan strategis yang tajam, empati desain yang mendalam, dan eksekusi teknis tanpa kompromi. Kami terobsesi dengan proses iterasi sebuah komitmen untuk terus-menerus menguji, beradaptasi dan menyempurnakan setiap detail. Kami tidak berhenti saat sebuah solusi berhasil; kami berhenti saat solusi itu telah menetapkan standar baru.',
    'Pada akhirnya, kami bukan sekadar tim kompetisi; kami adalah duta. Misi kami melampaui perolehan trofi, karena kami mengemban ambisi kolektif untuk membawa standar keunggulan dan semangat inovasi Telkom University ke panggung global. Kami di sini untuk bersaing, berprestasi, dan membuktikan bahwa petualangan ide yang kami mulai di kampus ini mampu menciptakan gelombang dampak yang diakui dunia.',
  ];

  const features = [
    {
      title: 'Eksplorasi & Riset Mendalam',
      description:
        'Kami mengembangkan metodologi riset yang komprehensif untuk memahami permasalahan dari berbagai sudut pandang. Dengan pendekatan etnografi digital, analisis kompetitif, dan user journey mapping, kami mampu mengidentifikasi peluang inovasi yang tersembunyi dan menghasilkan insight yang actionable untuk setiap tahap pengembangan produk.',
      image: 'https://images.unsplash.com/photo-1760931969401-9bd6ee902798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwQUklMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxOTEzNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      imagePosition: 'right' as const,
    },
    {
      title: 'Inovasi Berkelanjutan',
      description:
        'Kami menerapkan metodologi yang presisi dalam setiap tahap pengembangan. Dengan sinergi antara wawasan strategis yang tajam, empati desain yang mendalam, dan eksekusi teknis tanpa kompromi, kami menciptakan solusi yang tidak hanya memenuhi kebutuhan saat ini, tetapi juga menetapkan standar baru dalam industri teknologi.',
      image: 'https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBVSSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjE5MTM0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imagePosition: 'left' as const,
    },
    {
      title: 'Kolaborasi Tim yang Solid',
      description:
        'Sebagai kolektif yang berani menantang status quo, kami membangun sinergi disiplin dalam setiap proyek. Tim TELULANG bekerja dengan prinsip transparansi, saling menginspirasi, dan komitmen bersama untuk mentransformasi konsep abstrak menjadi solusi nyata yang berdampak. Setiap anggota adalah petualang ide yang berkontribusi unik dalam pencarian inovasi.',
      image: 'https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTgzNzc0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      imagePosition: 'right' as const,
    },
    {
      title: 'Dampak Global & Prestasi',
      description:
        'Sebagai duta Telkom University di panggung global, kami tidak berhenti pada pencapaian lokal. Misi kami melampaui perolehan trofi - kami berkomitmen membuktikan bahwa petualangan ide yang dimulai di kampus ini mampu menciptakan gelombang dampak yang diakui dunia. Setiap proyek adalah langkah menuju visi menjadi tolak ukur inovasi.',
      image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxODgwMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      imagePosition: 'left' as const,
    },
  ];

  const achievements = [
    {
      image: 'https://images.unsplash.com/photo-1759446334429-bb1f2d1d9f13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waHklMjBhd2FyZCUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc2MTkxODUzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Best Innovation Award 2024',
    },
    {
      image: 'https://images.unsplash.com/photo-1758691737138-7b9b1884b1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjE4Mjg3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Team Excellence Recognition',
    },
    {
      image: 'https://images.unsplash.com/photo-1661347998996-dcf102498c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYxODM4MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Partnership with Leading Tech Companies',
    },
    {
      image: 'https://images.unsplash.com/photo-1752937326758-f130e633b422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc2MTgwMjU3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Professional Certification',
    },
    {
      image: 'https://images.unsplash.com/photo-1739300293390-da9b6b474ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5uaW5nJTIwdGVhbSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MTkxODUzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Championship Victory',
    },
    {
      image: 'https://images.unsplash.com/photo-1761095596618-081ea3f043a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwYXdhcmR8ZW58MXx8fHwxNzYxOTE4NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Innovation Excellence Award',
    },
    {
      image: 'https://images.unsplash.com/photo-1758599543157-bc1a94fec33c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2MTgyMjM1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Strategic Partnership',
    },
    {
      image: 'https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjE5MTg1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Startup Success Story',
    },
  ];

  const innovation3D = {
    badge: 'Innovation Technology',
    title: 'Eksplorasi Dimensi Inovasi Baru',
    description: 'TELULANG mengintegrasikan teknologi 3D dan interactive design untuk menciptakan pengalaman yang menghubungkan dunia digital dengan realitas yang bermakna.',
    contentTitle: 'Filosofi Logo TELULANG',
    contentDescription: 'Logo TELULANG bukan sekadar identitas visual, tetapi representasi dari filosofi kami sebagai petualang inovasi. Setiap elemen dirancang dengan cermat untuk mencerminkan perpaduan antara eksplorasi berani (petualang) dan standar keunggulan Telkom University. Desain kami menggabungkan geometri modern dengan sentuhan organik, simbolisasi bahwa inovasi sejati lahir dari keseimbangan antara presisi teknis dan kreativitas tanpa batas. Warna-warna yang kami pilih mewakili energi, pertumbuhan, dan transformasi digital yang dinamis. Melalui logo ini, kami mengundang setiap orang untuk menjadi bagian dari eksplorasi di wilayah yang belum terpetakan, menciptakan dampak yang melampaui batasan konvensional.',
    features: [
    ],
  };

  const teamMembers = [
    {
      name: 'Thoriq',
      role: 'CEO',
      image: 'https://ik.imagekit.io/telulang/ThoriqPose.JPG?updatedAt=1762182365695',
      bio: 'Thoriq adalah perekat yang menyatukan para penjelajah ini. Dia bertanggung jawab untuk membangun budaya kolaborasi yang kuat dan secara konstan mendorong tim untuk menantang status quo',
      email: 'thoriq.a.taqy@gmail.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com/thoriq.a.taqy',
    },
    {
      name: 'Dani',
      role: 'CTO',
      image: 'https://ik.imagekit.io/telulang/DaniPose1.JPG?updatedAt=1762182364335',
      bio: 'Arsitek Teknis utama TELULANG, yang menerjemahkan visi kami menjadi fondasi digital yang kokoh. Dia merancang seluruh arsitektur solusi kami, memastikan setiap inovasi tidak hanya brilian secara konseptual, tetapi juga skalabel, aman,',
      email: 'dani@company.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://www.instagram.com/daniarthaw_?igsh=a282aXZseGdlZXAz&utm_source=qr'
    },
    {
      name: 'Affan',
      role: 'CIO',
      image: 'https://ik.imagekit.io/telulang/AffanPose.JPG?updatedAt=1762182364388',
      bio: 'Arsitek Sistem kami, pilar yang memastikan seluruh ekosistem digital TELULANG beroperasi dengan presisi. Dia bertanggung jawab atas alur kerja (workflow) tim, integritas data, dan efisiensi operasional',
      email: 'affan@company.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com/_bangzola?igsh=eDRmc2U5dHJrbmJp'
    },
    {
      name: 'Rifky',
      role: 'CPO',
      image: 'https://ik.imagekit.io/telulang/RifkyPose.JPG?updatedAt=1762182364366',
      bio: 'Experience Architect kami, Rifky adalah desainer utama dari setiap perjalanan pengguna. Dia memimpin strategi produk dan memastikan bahwa setiap touchpoint tidak hanya fungsional, tetapi juga bermakna',
      email: 'rifky@company.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://www.instagram.com/rifky_albuchori?igsh=ZmY4ODF3YmJmejk5'
    },
    {
      name: 'Ibnu Hafidz',
      role: 'Full Stack Developer',
      image: 'https://ik.imagekit.io/telulang/IbnuPose.JPG?updatedAt=1762189379654',
      bio: 'eksekutor teknis inti tim. Dia adalah engineer yang mengubah blueprint arsitektur kami menjadi produk fungsional.',
      email: 'ibnu@company.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com/ibnhfdz7_?igsh=ejhidHY5ZjQ3Y2V6'
    },
  ];

  return (
    <div className="min-h-screen bg-black antialiased">
      <div className="mx-3 md:mx-0">
        <HeroSection
          title="TELULANG"
          secondaryTitle="TELKOM UNIVERSITY PETUALANG"
          subtitle="Tim inovator Telkom University yang mentransformasi ide kompleks menjadi solusi digital yang bermakna."
          heroImage="https://images.unsplash.com/photo-1730830741396-ffb85bb2e983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwaW50ZXJmYWNlJTIwc2NyZWVufGVufDF8fHx8MTc2MTkxMzQ4MXww&ixlib=rb-4.1.0&q=80&w=1080"
        />

        <MetadataSection items={metadata} />

        <IntroSection title="Tentang Kami" paragraphs={introParagraphs} />

        <FeaturesSection features={features} />

        <Innovation3DSection data={innovation3D} />

        <AchievementsSection achievements={achievements} />

        <TeamSection members={teamMembers} />

        <TestimonialSection
          quote="If you are not willing to risk the unusual, you will have to settle for the ordinary."
          author="TELULANG"
          role="Bandung Indonesia"
          company="Telkom University"
        />

        <CTASection
          title="Bergabunglah dalam Petualangan Inovasi Kami"
          description="Apakah Anda siap menjadi bagian dari eksplorasi di wilayah yang belum terpetakan? TELULANG mengundang Anda untuk berkolaborasi dalam mentransformasi ide-ide revolusioner menjadi solusi yang berdampak global. Mari bersama-sama menciptakan gelombang inovasi dari Bandung untuk dunia."
          primaryButtonText="Bergabung dengan TELULANG"
          secondaryButtonText="Pelajari Lebih Lanjut"
        />
      </div>
    </div>
  );
}
