import { Shield, FileText, GraduationCap, Hammer, Lock, ExternalLink, Github, Boxes, Award } from 'lucide-react';

const projects = [
  // Security Engineering & Research
  {
    title: "OSaaS (Open Security as a Service) – SXC Sandbox 3.0",
    category: "Security Engineering & Research",
    role: "SXC Sandbox 3.0 Event",
    description: "Privacy-focused security platform automating vulnerability analysis and streamlining ethical hacking workflows with secure temporary workspaces.",
    tags: ["React", "Firebase", "Express", "Security"],
    icon: Lock,
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "SAFE-MCP Security Framework",
    category: "Security Engineering & Research",
    role: "Contributor",
    description: "Enhanced security documentation and detection rules for the framework, improving security protocols and vulnerability detection mechanisms.",
    tags: ["Security", "Documentation", "Framework"],
    icon: Shield,
    links: {
      demo: "#",
      github: "https://github.com/SAFE-MCP/safe-mcp",
    },
  },
  {
    title: "NASA Hall of Fame",
    category: "Security Engineering & Research",
    role: "Contribution",
    description: "Recognized in the NASA Hall of Fame for contributions reflecting technical impact and commitment to security excellence.",
    tags: ["NASA", "Recognition", "Contribution"],
    icon: Shield,
    links: {
      demo: "#",
      github: "#",
    },
  },
  // Software Development & AI Projects
  {
    title: "Warehouse Navigator",
    category: "Software Development & AI Projects",
    role: "Full-Stack Web App",
    description: "Full-stack warehouse management web app with React, TypeScript, Firebase Auth, and Supabase. Handles inventory, receipts, filtering, and reporting with secure workflows.",
    tags: ["React", "TypeScript", "Supabase", "Firebase", "Tailwind", "Full-Stack"],
    icon: Boxes,
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "AI HACKATHON 2026",
    category: "Software Development & AI Projects",
    role: "24-Hour Hackathon Project",
    description: "AI tourism platform built in 24 hours using crowd intelligence and flow forecasting to guide travelers to hidden destinations with trip planning, safety, and offline support.",
    tags: ["AI", "Tourism", "Forecasting", "React", "TypeScript", "Node.js"],
    icon: FileText,
    links: {
      demo: "#",
      github: "https://github.com/rajivsthh/smart-trails-nepal-main",
    },
  },
  {
    title: "5th Avenue - KEC Hack-a-lite 3.0",
    category: "Software Development & AI Projects",
    role: "KEC Hackathon",
    description: "Built Rent A Construction — a marketplace platform for renting construction materials and equipment, reducing idle asset waste and contractor costs.",
    tags: ["React", "Web", "Marketplace", "Hackathon"],
    icon: Hammer,
    links: {
      demo: "https://5th-avenue-kec-hack-a-lite-3-o.vercel.app/",
      github: "https://github.com/dhirendraxd/5th-Avenue-KEC-Hack-a-Lite-3.o",
    },
  },
  {
    title: "Mitra Smart",
    category: "Software Development & AI Projects",
    role: "100x Nepal Hackathon 2025",
    description: "AI-powered document validation and smart form-filling solution streamlining document processing with intelligent automation.",,
    tags: ["AI", "Hackathon", "Automation"],
    icon: FileText,
    links: {
      demo: "https://100x-hackathon.vercel.app/",
      github: "#",
    },
  },
  {
    title: "Seekha Nepal",
    category: "Software Development & AI Projects",
    role: "KIST HackFest 2025",
    description: "Interactive learning platform featuring AI Chatbot for personalized educational experiences and real-time learning assistance.",,
    tags: ["AI Chatbot", "Education", "Platform"],
    icon: GraduationCap,
    links: {
      demo: "https://seekhanepal.vercel.app/",
      github: "#",
    },
  },
  {
    title: "FutureFront AI Innovation Lab",
    category: "Software Development & AI Projects",
    role: "Participant",
    description: "Participated in AI Innovation Lab 2026 organized by Youth Innovation Lab and U.S. Embassy Nepal, exploring emerging AI technologies and research.",,
    tags: ["AI", "Innovation", "Research"],
    icon: FileText,
    links: {
      demo: "#",
      github: "#",
    },
  },
  // Leadership & Contributions
  {
    title: "Technical Lead — KIST BIM College",
    category: "Leadership & Contributions",
    role: "Leadership Position",
    description: "Provided technical leadership at KIST BIM College for event planning, technical coordination, and team support. Guided participants through technical challenges and organized successful technology initiatives.",,
    tags: ["Leadership", "Technical Coordination", "Event Management", "Mentoring"],
    icon: Award,
    links: {
      demo: "#",
      github: "#",
    },
  },
];

const ProjectsSection = () => {
  const securityProjects = projects.filter(p => p.category === "Security Engineering & Research");
  const developmentProjects = projects.filter(p => p.category === "Software Development & AI Projects");
  const leadershipProjects = projects.filter(p => p.category === "Leadership & Contributions");

  const renderProjectsGrid = (projectList) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projectList.map((project, index) => (
        <article key={index} className="card-pro p-7 flex flex-col group">
          <div className="mb-6 flex justify-between items-start">
            <div className="icon-container inline-flex">
              <project.icon className="w-6 h-6 text-white/80" />
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-white/60 text-sm font-medium tracking-wide uppercase">{project.role}</p>
            <p className="text-white/50 text-sm leading-relaxed font-light mt-4">
              {project.description}
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-2.5 py-1 text-xs font-medium bg-white/[0.03] text-white/60 border border-white/5 rounded-md group-hover:border-white/10 group-hover:bg-white/[0.05] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-5 border-t border-white/5">
              <a 
                href={project.links.demo} 
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Details
              </a>
              <a 
                href={project.links.github} 
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                Source
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/40">My Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Featured Projects & Research
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg font-light">
              A selection of my work in security engineering, platform development, and research contributions.
            </p>
          </div>

          {/* Security Engineering & Research */}
          <div className="mb-20">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white tracking-tight">Security Engineering & Research</h3>
              <div className="w-12 h-1 bg-white/10 rounded-full mt-3" />
            </div>
            {renderProjectsGrid(securityProjects)}
          </div>

          {/* Software Development & AI Projects */}
          <div className="mb-20">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white tracking-tight">Software Development & AI Projects</h3>
              <div className="w-12 h-1 bg-white/10 rounded-full mt-3" />
            </div>
            {renderProjectsGrid(developmentProjects)}
          </div>

          {/* Leadership & Contributions */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white tracking-tight">Leadership & Contributions</h3>
              <div className="w-12 h-1 bg-white/10 rounded-full mt-3" />
            </div>
            {renderProjectsGrid(leadershipProjects)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
