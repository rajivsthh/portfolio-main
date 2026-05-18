import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Mail, Phone, Linkedin, Github, Twitter, Send } from 'lucide-react';
import LabsSection from '@/components/LabsSection';
import { useToast } from '@/hooks/use-toast';

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
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rajivsthh/" },
  { icon: Github, label: "GitHub", href: "https://github.com/rajivsthh" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
const CONTACT_FORM_AUTH_TOKEN = import.meta.env.VITE_CONTACT_FORM_AUTH_TOKEN;
const DEFAULT_CONTACT_API_ENDPOINT = "/api/contact";
const DEFAULT_CONTACT_EMAIL = "rajivshresthaa23@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${DEFAULT_CONTACT_EMAIL}`;

const getSubmitEndpoint = () => CONTACT_FORM_ENDPOINT || DEFAULT_CONTACT_API_ENDPOINT;

const getErrorMessage = async (response: Response) => {
  try {
    const data = await response.json();
    if (typeof data?.error === "string") {
      return data.error;
    }
    if (typeof data?.hint === "string") {
      return data.hint;
    }
  } catch {
    return "The message could not be sent. Please try again.";
  }

  return "The message could not be sent. Please try again.";
};

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast({
        title: "Missing fields",
        description: "Please complete name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const endpoint = getSubmitEndpoint();
      const usingCustomBackend = Boolean(CONTACT_FORM_ENDPOINT);

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      if (CONTACT_FORM_AUTH_TOKEN) {
        headers.Authorization = `Bearer ${CONTACT_FORM_AUTH_TOKEN}`;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify({
          ...payload,
          source: "portfolio-contact-form",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Message sent",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        return;
      }

      if (!usingCustomBackend) {
        const fallbackResponse = await fetch(FORMSUBMIT_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...payload,
            _subject: `Portfolio Contact: ${payload.name}`,
            _captcha: "true",
            _template: "table",
          }),
        });

        if (fallbackResponse.ok) {
          setFormData({ name: "", email: "", message: "" });
          toast({
            title: "Message sent",
            description: "Delivered via fallback while backend is unavailable.",
          });
          return;
        }
      }

      const errorMessage = await getErrorMessage(response);
      throw new Error(errorMessage);
    } catch (error) {
      console.error("Contact form submission failed", error);
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "The message could not be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/40">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-white/50 max-w-lg mx-auto text-lg font-light">
              Interested in collaborating on security projects or have opportunities to discuss? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="card-pro p-8">
                <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-6 mb-10">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index}
                      href={info.href}
                      className="flex items-center gap-5 group"
                    >
                      <div className="icon-container">
                        <info.icon className="w-5 h-5 text-white/80" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">{info.label}</p>
                        <p className="text-white/80 group-hover:text-white transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="border-t border-white/5 pt-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Connect</p>
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
                        <social.icon className="w-5 h-5 text-white/70" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card-pro p-8">
                <h3 className="text-xl font-bold text-white mb-8">Send a Message</h3>
                
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2.5">Name</label>
                    <input 
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3.5 rounded-lg bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.03] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2.5">Email</label>
                    <input 
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3.5 rounded-lg bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.03] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2.5">Message</label>
                    <textarea 
                      name="message"
                      placeholder="Your message..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3.5 rounded-lg bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.03] transition-all duration-300 resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full mt-2 group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                  <p className="text-xs text-white/30 text-center font-light mt-6">
                    {CONTACT_FORM_ENDPOINT
                      ? "Form is connected to your backend endpoint"
                      : "Primary: local backend (/api/contact), with fallback delivery enabled."}
                  </p>
                </form>
              </div>
            </div>

            <LabsSection variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
