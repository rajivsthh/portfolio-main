import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  current: boolean;
}

const education: Education[] = [
  {
    degree: "Bachelors in Information Management",
    institution: "KIST College & SS",
    period: "2023 - Present",
    current: true,
  },
  {
    degree: "Intermediate (+2)",
    institution: "Edmark Academy",
    period: "2020 - 2022",
    current: false,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left - About Text */}
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="section-label">About Me</span>
                <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">
                  Passionate About Cybersecurity
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a dedicated cybersecurity enthusiast, I explore the intricate 
                  world of digital security through hands-on experimentation with 
                  network protocols, web application vulnerabilities, and security frameworks.
                </p>
                <p>
                  I actively participate in hackathons and CTF competitions, applying theoretical 
                  knowledge to real-world security challenges. My goal is to contribute to making 
                  the digital world a safer place.
                </p>
              </div>
            </div>

            {/* Right - Education */}
            <div>
              <div className="card-pro p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading">Education</h3>
                </div>

                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div 
                      key={index} 
                      className={`relative pl-6 border-l-2 ${edu.current ? 'border-primary' : 'border-border'}`}
                    >
                      <div className={`absolute left-[-5px] top-1 w-2 h-2 rounded-full ${edu.current ? 'bg-primary' : 'bg-muted-foreground/40'}`} />
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">{edu.degree}</h4>
                        <p className="text-muted-foreground text-sm flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5" />
                          {edu.institution}
                        </p>
                        <p className="text-muted-foreground/70 text-sm flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;