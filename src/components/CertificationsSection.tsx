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
                  {cert.img ? (
                    // show an inline thumbnail for images; PDFs will open via the link below
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={cert.img} alt={`${cert.title} certificate`} className="w-10 h-10 object-contain rounded" />
                  ) : (
                    cert.icon && <cert.icon className={`w-6 h-6 ${cert.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                  )}
                </div>

                <h3 className="font-semibold text-heading mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{cert.subtitle}</p>
                <div className="flex items-center justify-center gap-3">
                  <span className={`inline-block px-3 py-1.5 rounded-md text-sm ${cert.highlight ? 'bg-primary/10 text-primary font-medium' : 'bg-muted/60 text-muted-foreground'}`}>
                    {cert.achievement}
                  </span>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="link-animated text-sm font-medium">
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