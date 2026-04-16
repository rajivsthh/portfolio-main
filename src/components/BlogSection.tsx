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
    <section id="blog" className="py-24 lg:py-32 bg-muted/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <span className="section-label">Writing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">Blog & Write-ups</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Short technical posts, write-ups and lessons learned from hands-on labs and projects.</p>
          </div>

          <Tabs defaultValue="blog" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="blog">Blog Posts</TabsTrigger>
              <TabsTrigger value="writeups">Write-ups</TabsTrigger>
            </TabsList>

            <TabsContent value="blog" className="mt-0">
              <div className="grid md:grid-cols-2 gap-5">
                {posts.map((post, index) => (
                  <article key={index} className="card-pro p-6 group">
                    <div className="mb-3 flex items-center gap-3">
                      <FileText className="w-5 h-5 text-foreground" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-heading">{post.title}</h3>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>

                    <a href={post.link} className="link-animated inline-flex items-center gap-2 text-sm font-medium">
                      Read article
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="writeups" className="mt-0">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold text-heading mb-2">Advent of Cyber 2025</h3>
                <p className="text-sm text-muted-foreground">Grouped by security domain</p>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {adventCategories.map((cat, idx) => (
                  <article key={idx} className="card-pro p-6 group">
                    <h4 className="text-lg font-semibold text-heading mb-3">{cat.domain}</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                      {cat.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-muted-foreground mt-1">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="#" className="link-animated inline-flex items-center gap-2 text-sm font-medium">
                      View writeups
                      <ExternalLink className="w-4 h-4" />
                    </a>
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
