import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function BlogSection() {
  const blogs = [
    {
      title: "TypeScript Is Getting a Big Upgrade!",
      excerpt: "Imagine you're working on a big project with lots of code. Right now, it can take a long time to...",
      readTime: "1 Min Read",
      date: "13 days ago",
      likes: "1",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=420"
    },
    {
      title: "Optimizing Next.js Websites for Core Web Vitals and Page Performance",
      excerpt: "In today's competitive online landscape, a fast and responsive website is critical for user...",
      readTime: "3 Min Read",
      date: "5 months ago",
      likes: "8",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=420"
    },
    {
      title: "Simple Guide to Implementing Clerk Authentication",
      excerpt: "Clerk is a simple and effective solution for adding user authentication and management to web apps...",
      readTime: "2 Min Read",
      date: "6 months ago",
      likes: "6",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=420"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" ref={useScrollAnimation()}>
          <h2 className="text-4xl font-bold">Blogs</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              className="bg-secondary rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all animate-on-scroll"
              ref={useScrollAnimation()}
            >
              <img 
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-slate-400">{blog.date}</span>
                  <span className="bg-accent text-white px-2 py-1 rounded text-sm">{blog.likes}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">{blog.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{blog.readTime}</p>
                <p className="text-slate-300">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}
