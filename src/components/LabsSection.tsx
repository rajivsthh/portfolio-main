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

type LabsSectionProps = {
  variant?: 'full' | 'compact';
  className?: string;
};

const LabsSection = ({ variant = 'full', className = '' }: LabsSectionProps) => {
  if (variant === 'compact') {
    return (
      <div className={`card-pro p-8 ${className}`.trim()}>
        <div className="mb-6 space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-white/40">Labs</span>
          <h3 className="text-xl font-bold text-white">Hands-on Labs</h3>
          <p className="text-sm text-white/50 font-light">
            Small security labs and experiments demonstrating tools, detections and write-ups.
          </p>
        </div>

        <div className="space-y-4">
          {labs.map((lab, index) => (
            <article key={index} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors">
              <h4 className="text-sm font-semibold text-white mb-3">{lab.title}</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {lab.tags.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium bg-white/[0.03] text-white/60 border border-white/5 rounded-md">{t}</span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-white/5">
                <a href={lab.demo} className="inline-flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-white transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Demo
                </a>
                <a href={lab.github} className="inline-flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-white transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section id="lab" className="py-24 lg:py-32 relative">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/40">Labs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Hands-on Labs</h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg font-light">Small security labs and experiments demonstrating tools, detections and write-ups.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {labs.map((lab, index) => (
              <article key={index} className="card-pro p-7 group flex flex-col">
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-white transition-colors">{lab.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6 flex-1">
                  {lab.tags.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-medium bg-white/[0.03] text-white/60 border border-white/5 rounded-md group-hover:border-white/10 group-hover:bg-white/[0.05] transition-colors">{t}</span>
                  ))}
                </div>

                <div className="flex gap-4 pt-5 border-t border-white/5">
                  <a href={lab.demo} className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a href={lab.github} className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors">
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
