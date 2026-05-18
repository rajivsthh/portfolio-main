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
              <div className="space-y-4 animate-fade-up">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/40">About Me</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Security Researcher
                </h2>
              </div>
              
              <div className="space-y-4 text-white/50 leading-relaxed font-light text-lg">
                <p>
                  As a security researcher and developer, I focus on identifying and mitigating 
                  vulnerabilities across complex systems, network architectures, and modern web applications.
                </p>
                <p>
                  Combining software engineering principles with offensive security techniques, I build 
                  resilient systems, develop security tooling, and solve critical security challenges in 
                  fast-paced environments.
                </p>
              </div>
            </div>

            {/* Right - Education */}
            <div>
              <div className="card-pro p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="icon-container">
                    <GraduationCap className="w-5 h-5 text-white/80" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                </div>

                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div 
                      key={index} 
                      className={`relative pl-6 border-l-2 ${edu.current ? 'border-white/20' : 'border-white/5'}`}
                    >
                      <div className={`absolute left-[-5px] top-1.5 w-2 h-2 rounded-full ${edu.current ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-white/20'}`} />
                      <div className="space-y-2">
                        <h4 className="font-semibold text-white group-hover:text-white transition-colors">{edu.degree}</h4>
                        <p className="text-white/50 text-sm flex items-center gap-2 font-medium">
                          <MapPin className="w-3.5 h-3.5" />
                          {edu.institution}
                        </p>
                        <p className="text-white/40 text-sm flex items-center gap-2">
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