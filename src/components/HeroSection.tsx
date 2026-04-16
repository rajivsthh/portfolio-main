import { useEffect, useState } from 'react';
import { Shield, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const roles = ['Cybersecurity Learner', 'CTF Player', 'Network Explorer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isRoleComplete = displayedRole === currentRole;
    const isRoleDeleted = displayedRole.length === 0;

    const timeout = setTimeout(
      () => {
        if (!isDeleting && !isRoleComplete) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
          return;
        }

        if (!isDeleting && isRoleComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !isRoleDeleted) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
          return;
        }

        setIsDeleting(false);
        setRoleIndex((previousIndex) => (previousIndex + 1) % roles.length);
      },
      !isDeleting && isRoleComplete ? 1500 : isDeleting ? 55 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      <div className="hero-container container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Content */}
          <div className="hero-content">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <span className="w-2 h-2 bg-foreground rounded-full" />
              <span className="text-foreground text-sm font-medium">Open to Opportunities</span>
            </div>

            {/* Heading */}
            <div className="hero-heading-group">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight tracking-tight">
                Hi, I'm <span className="text-gradient">Rajiv Shrestha</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-light">
                Exploring the digital world, one system at a time.
                <span className="terminal-cursor" aria-hidden="true">|</span>
              </p>

              <p className="text-sm md:text-base text-muted-foreground font-mono min-h-[1.5rem] typewriter-line">
                {displayedRole}
                <span className="typewriter-cursor" aria-hidden="true">|</span>
              </p>
            </div>

            {/* Description */}
            <p className="hero-description text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Cybersecurity learner focused on networks, web applications, and system vulnerabilities. 
              Building practical security skills through hands-on experimentation.
            </p>

            {/* Social Links */}
            <div className="hero-social-links">
              <a
                href="https://github.com/rajivsthh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rajivsthh/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rajivshresthaa23@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                View Projects
              </a>
              <a href="#contact" className="btn-outline inline-flex items-center justify-center gap-2">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <a 
              href="#about" 
              className="text-muted-foreground/60 hover:text-primary transition-colors duration-300"
              aria-label="Scroll to about section"
            >
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
