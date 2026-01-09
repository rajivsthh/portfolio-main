import { Award, Trophy, BookOpen, LucideIcon } from 'lucide-react';

interface Certification {
  title: string;
  subtitle: string;
  achievement: string;
  icon: LucideIcon;
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
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="section-label">Achievements</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">
              Certifications & Awards
            </h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`card-pro p-6 text-center ${cert.highlight ? 'border-primary/20' : ''}`}
              >
                <div className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-5 ${cert.highlight ? 'bg-primary/10' : 'bg-muted/60'}`}>
                  <cert.icon className={`w-6 h-6 ${cert.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                
                <h3 className="font-semibold text-heading mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{cert.subtitle}</p>
                <span className={`inline-block px-3 py-1.5 rounded-md text-sm ${cert.highlight ? 'bg-primary/10 text-primary font-medium' : 'bg-muted/60 text-muted-foreground'}`}>
                  {cert.achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;