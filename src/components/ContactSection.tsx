import { Mail, Phone, Linkedin, Github, Twitter, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rajivshresthaa23@gmail.com",
    href: "mailto:rajivshresthaa23@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9749710955",
    href: "tel:+9779749710955",
  },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-[#0A66C2]" },
  { icon: Github, label: "GitHub", href: "https://github.com/rajivsthh", color: "hover:text-foreground" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "hover:text-[#1DA1F2]" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="section-label">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Interested in collaborating on security projects or have opportunities to discuss? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="card-pro p-8">
              <h3 className="text-lg font-semibold text-heading mb-6">Contact Information</h3>
              
              <div className="space-y-5 mb-8">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.href}
                    className="contact-item group"
                  >
                    <div className="icon-container">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{info.label}</p>
                      <p className="text-foreground group-hover:text-primary transition-colors text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">Connect</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-pro p-8">
              <h3 className="text-lg font-semibold text-heading mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wide mb-2">Name</label>
                  <input 
                    type="text"
                    placeholder="Your name"
                    className="input-pro"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wide mb-2">Email</label>
                  <input 
                    type="email"
                    placeholder="your@email.com"
                    className="input-pro"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wide mb-2">Message</label>
                  <textarea 
                    placeholder="Your message..."
                    rows={4}
                    className="input-pro resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
                <p className="text-xs text-muted-foreground/70 text-center">
                  Form submission requires backend integration
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
