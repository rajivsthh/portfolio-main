import { Shield, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {

  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="hero-container container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="hero-content animate-fade-up">
            {/* Status Badge */}
            <div className="badge-opportunity inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
              <span className="badge-opportunity-dot w-2 h-2 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              <span className="text-sm font-medium text-white/70 tracking-wide uppercase text-xs">Open to Opportunities</span>
            </div>

            {/* Heading */}
            <div className="hero-heading-group space-y-6 mt-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                Rajiv Shrestha
              </h1>

              <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide">
                Security Researcher & Developer
              </p>
            </div>

            {/* Description */}
            <p className="hero-description text-white/50 max-w-2xl mx-auto leading-relaxed text-lg mt-8 font-light">
              Focused on web security, application testing, automation, and modern development. Building secure systems and practical security tooling with hands-on research and real-world projects.
            </p>

            {/* Social Links */}
            <div className="hero-social-links mt-10">
              <a
                href="https://github.com/rajivsthh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/rajivsthh/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:rajivshresthaa23@gmail.com"
                className="social-icon group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta mt-12 flex items-center justify-center gap-6">
              <a href="#projects" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <Shield className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  View Projects
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </a>
              <a href="#contact" className="btn-outline group hover:bg-white/[0.03]">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <a 
              href="#about" 
              className="text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
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
