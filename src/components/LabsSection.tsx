import { ExternalLink, Github } from 'lucide-react';

const labs = [
  {
    title: "TryHackMe - Intro Labs",
    tags: ["Forensics", "Web", "Networking"],
    demo: "#",
    github: "#",
  },
  {
    title: "Personal Security Experiments",
    tags: ["Tooling", "Automation"],
    demo: "#",
    github: "#",
  },
  {
    title: "SAFE-MCP Detections (contrib)",
    tags: ["Detection", "YARA", "SIEM"],
    demo: "#",
    github: "https://github.com/SAFE-MCP/safe-mcp",
  },
];

const LabsSection = () => {
  return (
    <section id="labs" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <span className="section-label">Labs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">Hands-on Labs</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Small security labs and experiments demonstrating tools, detections and write-ups.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {labs.map((lab, index) => (
              <article key={index} className="card-pro p-6 group">
                <h3 className="text-lg font-semibold text-heading mb-2">{lab.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {lab.tags.map((t, i) => (
                    <span key={i} className="project-tag">{t}</span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-border/50">
                  <a href={lab.demo} className="link-animated text-sm font-medium inline-flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a href={lab.github} className="link-animated text-sm font-medium inline-flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsSection;
