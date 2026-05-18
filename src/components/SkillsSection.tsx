import { Shield, Server, Terminal, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Security Research',
    icon: Shield,
    skills: ['Web Security', 'API Security', 'Burp Suite', 'Reconnaissance'],
  },
  {
    title: 'Systems & Infra',
    icon: Server,
    skills: ['Linux', 'Networking', 'Cloud Architecture'],
  },
  {
    title: 'Software Development',
    icon: Code2,
    skills: ['React', 'Java', 'Spring Boot', 'TypeScript'],
  },
  {
    title: 'Engineering',
    icon: Terminal,
    skills: ['Automation', 'Python', 'CI/CD Pipelines'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/40">My Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Technical Expertise
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg font-light">
              A comprehensive toolkit spanning offensive security, software development, and automation.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <article key={index} className="card-pro p-8 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-container">
                    <category.icon className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white group-hover:text-white transition-colors">{category.title}</h3>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3.5 py-1.5 text-sm font-medium text-white/60 bg-white/[0.03] border border-white/10 rounded-lg group-hover:bg-white/[0.06] group-hover:text-white/90 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
