import { ExternalLink, FileText } from 'lucide-react';

const posts = [
  {
    title: "Getting Started with Web App Security",
    date: "Jan 2025",
    excerpt: "A short guide to common web app vulnerabilities and quick steps to test them safely.",
    link: "#",
  },
  {
    title: "Lessons from Advent of the Cyber 2025",
    date: "Dec 2025",
    excerpt: "Key takeaways and write-ups from the Advent of the Cyber event on TryHackMe.",
    link: "#",
  },
  {
    title: "Hands-on: Building a Secure CI Pipeline",
    date: "Nov 2024",
    excerpt: "Small steps to harden your CI workflows and avoid common pitfalls.",
    link: "#",
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

          <div className="grid md:grid-cols-3 gap-5">
            {posts.map((post, index) => (
              <article key={index} className="card-pro p-6 group">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-heading">{post.title}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>

                <a href={post.link} className="link-animated inline-flex items-center gap-2 text-sm font-medium">
                  Read
                  <ExternalLink className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
