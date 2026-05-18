import { ExternalLink, FileText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const posts = [
  {
    title: "Getting Started with Web App Security",
    date: "Jan 2025",
    excerpt: "A short guide to common web app vulnerabilities and quick steps to test them safely.",
    link: "#",
  },
  {
    title: "Hands-on: Building a Secure CI Pipeline",
    date: "Nov 2024",
    excerpt: "Small steps to harden your CI workflows and avoid common pitfalls.",
    link: "#",
  },
];

const adventCategories = [
  {
    domain: "Web Security",
    topics: ["IDOR", "XSS", "cURL exploitation", "Burp Suite"],
  },
  {
    domain: "Blue Teaming",
    topics: ["Splunk (SIEM)", "Microsoft Sentinel", "Log Analysis"],
  },
  {
    domain: "Malware Analysis",
    topics: ["Reverse engineering", "YARA rules", "Registry forensics"],
  },
  {
    domain: "Emerging Tech",
    topics: ["AI Prompt Injection", "Cloud Security (AWS)"],
  },
  {
    domain: "Specialized Ops",
    topics: ["ICS/SCADA (Modbus)", "Docker Container security"],
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/40">Writing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Research & Insights</h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg font-light">Short technical posts, vulnerability write-ups, and lessons learned from real-world research.</p>
          </div>

          <Tabs defaultValue="blog" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="blog">Blog Posts</TabsTrigger>
              <TabsTrigger value="writeups">Write-ups</TabsTrigger>
            </TabsList>

            <TabsContent value="blog" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                  <article key={index} className="card-pro p-7 group flex flex-col">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 group-hover:bg-white/[0.06] group-hover:border-white/10 transition-colors">
                        <FileText className="w-5 h-5 text-white/80" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-white text-lg leading-tight group-hover:text-white transition-colors">{post.title}</h3>
                        <span className="text-xs font-medium uppercase tracking-widest text-white/40 mt-1 block">{post.date}</span>
                      </div>
                    </div>

                    <p className="text-white/50 text-sm mb-6 flex-1 font-light leading-relaxed">{post.excerpt}</p>

                    <div className="pt-5 border-t border-white/5 mt-auto">
                      <a href={post.link} className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors group/link">
                        Read article
                        <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="writeups" className="mt-8">
              <div className="mb-8 text-center animate-fade-up">
                <h3 className="text-2xl font-bold text-white mb-2">Advent of Cyber 2025</h3>
                <p className="text-sm text-white/50 font-light">Categorized by security domain</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {adventCategories.map((cat, idx) => (
                  <article key={idx} className="card-pro p-7 group flex flex-col">
                    <h4 className="text-lg font-bold text-white mb-4 group-hover:text-white transition-colors">{cat.domain}</h4>
                    <ul className="text-sm text-white/50 space-y-2.5 mb-6 flex-1 font-light">
                      {cat.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-white/30 mt-0.5 text-xs">▹</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-5 border-t border-white/5 mt-auto">
                      <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors group/link">
                        View writeups
                        <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
