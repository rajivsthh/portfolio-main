import { Shield, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/15">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium">Open to Opportunities</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight tracking-tight">
                Hi, I'm <span className="text-gradient">Rajiv Shrestha</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-light">
                Exploring the digital world, one system at a time.
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Cybersecurity learner focused on networks, web applications, and system vulnerabilities. 
              Building practical security skills through hands-on experimentation.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-3">
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
                href="https://linkedin.com"
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
