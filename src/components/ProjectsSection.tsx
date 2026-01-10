import { Shield, FileText, GraduationCap, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "SAFE-MCP Security Framework",
    role: "Contributor",
    description: "Improved security documentation and detection rules for the framework. Contributed to enhancing security protocols and vulnerability detection mechanisms.",
    tags: ["Security", "Documentation", "Framework"],
    icon: Shield,
    links: {
      demo: "#",
      github: "https://github.com/SAFE-MCP/safe-mcp",
    },
  },
  {
    title: "Mitra Smart",
    role: "100x Nepal Hackathon 2025",
    description: "AI-powered document validation and smart form-filling solution designed to streamline document processing with intelligent automation.",
    tags: ["AI", "Hackathon", "Automation"],
    icon: FileText,
    links: {
      demo: "https://100x-hackathon.vercel.app/",
      github: "#",
    },
  },
  {
    title: "Seekha Nepal",
    role: "KIST HackFest 2025",
    description: "Interactive learning platform featuring an AI Chatbot to enhance educational experiences and provide personalized learning assistance.",
    tags: ["AI Chatbot", "Education", "Platform"],
    icon: GraduationCap,
    links: {
      demo: "#",
      github: "#",
    },
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="section-label">My Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hands-on projects and contributions showcasing my journey in cybersecurity and development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <article key={index} className="card-pro p-6 flex flex-col group">
                <div className="mb-5">
                  <div className="icon-container inline-block">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="text-lg font-semibold text-heading group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm font-medium">{project.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="project-tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-border/50">
                    <a 
                      href={project.links.demo} 
                      className="link-animated text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Details
                    </a>
                    <a 
                      href={project.links.github} 
                      className="link-animated text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
