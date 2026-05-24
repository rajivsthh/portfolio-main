import { Award, Trophy, BookOpen, LucideIcon } from 'lucide-react';

interface Certification {
  title: string;
  subtitle: string;
  achievement: string;
  // optional icon (vector) or img (photo). Prefer `img` when you have a photo/pdf.
  icon?: LucideIcon;
  // public-facing path, e.g. /images/certificates/foo.jpg or /certificates/foo.pdf
  img?: string;
  // optional link to open the certificate (image or pdf)
  link?: string;
  highlight?: boolean;
}

const certifications: Certification[] = [
  {
    title: "KIST FAIR 2081",
    subtitle: "IT Project Competition",
    achievement: "2nd Place",
    icon: Trophy,
    highlight: true,
  },
  {
    title: "Microsoft Office Training",
    subtitle: "Professional Certification",
    achievement: "12 Days Intensive",
    icon: Award,
  },
  {
    title: "Java Fundamentals Training",
    subtitle: "Programming Course",
    achievement: "6 Days Course",
    icon: BookOpen,
  },
  {
    title: "FutureFront AI Innovation Lab 2026",
    subtitle: "Youth Innovation Lab & U.S. Embassy",
    achievement: "Participant",
    icon: Award,
    highlight: true,
  },
  {
    title: "KIST FAIR 2081 - Certificate Image",
    subtitle: "KIST Fair Certificate (photo)",
    achievement: "Certificate Photo",
    img: "/images/certificates/kistFair.jpeg",
  },
  {
    title: "Introduction to Cybersecurity",
    subtitle: "TryHackMe - Online Course",
    achievement: "Completion Certificate",
    // PDF certificate (place it in `public/certificates/tryhackme.pdf`)
    img: "/certificates/tryhackme.pdf",
    link: "/certificates/tryhackme.pdf",
  },
  {
    title: "Advent of the Cyber 2025 (TryHackMe)",
    subtitle: "CTF / Learning Event, Labs",
    achievement: "Participation Badge",
    img: "/images/certificates/hackathon.jpeg",
    link: "/images/certificates/hackathon.jpeg",
  },
  {
    title: "Introduction to Cybersecurity",
    subtitle: "TryHackMe - Online Course",
    achievement: "Completion Certificate",
    icon: BookOpen,
  },
  {
    title: "Advent of the Cyber 2025 (TryHackMe)",
    subtitle: "CTF / Learning Event,Labs",
    achievement: "Participation Badge",
    icon: Award,
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/40">Achievements</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Certifications & Awards
            </h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`card-pro p-7 text-center flex flex-col group ${cert.highlight ? 'border-white/10 bg-white/[0.03]' : ''}`}
              >
                <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-1 ${cert.highlight ? 'bg-white/10 border border-white/20' : 'bg-white/[0.04] border border-white/5'}`}>
                  {cert.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={cert.img} alt={`${cert.title} certificate`} className="w-10 h-10 object-contain rounded" />
                  ) : (
                    cert.icon && <cert.icon className={`w-7 h-7 ${cert.highlight ? 'text-white' : 'text-white/60'}`} />
                  )}
                </div>

                <h3 className="font-bold text-white mb-2 group-hover:text-white transition-colors">{cert.title}</h3>
                <p className="text-white/50 text-sm mb-6 flex-1 font-light">{cert.subtitle}</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-auto">
                  <span className={`inline-block px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-widest ${cert.highlight ? 'bg-white/10 text-white border border-white/20' : 'bg-white/[0.03] text-white/60 border border-white/5'}`}>
                    {cert.achievement}
                  </span>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors">
                      View
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;