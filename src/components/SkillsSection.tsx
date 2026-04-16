import { Network, ShieldCheck, Terminal, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    title: 'Networking',
    icon: Network,
    skills: ['Wireshark', 'TCP/IP', 'Nmap'],
  },
  {
    title: 'Web Security',
    icon: ShieldCheck,
    skills: ['Burp Suite', 'OWASP Top 10', 'SQLi/XSS'],
  },
  {
    title: 'Tools & OS',
    icon: Terminal,
    skills: ['Linux', 'Kali', 'Metasploit'],
  },
  {
    title: 'Currently Learning',
    icon: BookOpen,
    skills: ['Python scripting', 'Active Directory'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="section-label">My Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A focused set of cybersecurity skills and tools developed through 
              hands-on practice and continuous learning.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <article key={index} className="skill-card card-pro group">
                <div className="skill-card-header">
                  <div className="icon-container">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="skill-category-label">Category</span>
                    <h3 className="font-medium text-foreground">{category.title}</h3>
                  </div>
                </div>
                
                <div className="skills-pill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="skills-pill"
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
