import { Shield, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/rajivsthh" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rajivsthh/" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Mail, label: "Email", href: "mailto:rajivshresthaa23@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/[0.03] border border-white/10">
              <Shield className="w-5 h-5 text-white/80" />
            </div>
            <span className="brand-font font-semibold text-lg text-white">Rajiv Shrestha</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-white/70" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-sm font-light text-center">
            © {new Date().getFullYear()} Rajiv Shrestha. Security Research & Development.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
