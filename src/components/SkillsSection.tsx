import { Shield, Globe, Terminal, Code, Brain, Search } from 'lucide-react';

const skillCategories = [
  {
    title: "Security & Networking",
    icon: Shield,
    skills: ["TCP/IP", "Web Security", "OWASP Top 10", "Network Protocols"],
  },
  {
    title: "Security Tools",
    icon: Terminal,
    skills: ["Burp Suite", "Nmap", "Linux", "Bash Scripting"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML5", "CSS3", "JavaScript", "PHP", "Java"],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python Basics", "Java", "Shell Scripting"],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    skills: ["Problem Solving", "Research & Analysis", "Critical Thinking"],
  },
  {
    title: "Learning Focus",
    icon: Search,
    skills: ["Penetration Testing", "Vulnerability Assessment", "Security Auditing"],
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, index) => (
              <div key={index} className="card-pro p-6 group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="icon-container">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="skill-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
