
import React, { useEffect, useRef } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Best Online Casino: A Beginner's Guide",
    excerpt: "Learn the essential factors to consider when selecting an online casino, from licensing and game selection to bonuses and payment options.",
    image: "https://images.unsplash.com/photo-1605979257913-1704eb7b6246?w=300&h=200&fit=crop&auto=format",
    date: "May 5, 2025",
    readTime: 7,
    category: "Guides"
  },
  {
    id: 2,
    title: "Understanding Casino Bonuses and Wagering Requirements",
    excerpt: "Discover how to make the most of casino bonuses by understanding the fine print, wagering requirements, game restrictions, and withdrawal conditions.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop&auto=format",
    date: "May 11, 2025",
    readTime: 9,
    category: "Tips & Strategy"
  },
  {
    id: 3,
    title: "The Rise of Live Dealer Games in Online Casinos",
    excerpt: "Explore how live dealer games are transforming the online casino experience by bridging the gap between virtual and land-based gambling.",
    image: "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?w=300&h=200&fit=crop&auto=format",
    date: "May 7, 2025",
    readTime: 6,
    category: "Trends"
  }
];

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="blog" ref={sectionRef} className="py-16 md:py-24 px-4 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="section-heading">Casino Guides & Blog</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 group hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                  <span className="bg-casino-accent text-white text-xs font-medium py-1 px-3 m-4 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center text-xs text-slate-500 mb-3">
                  <div className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>
                  
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime} min read
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-casino-primary transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <a href="#" className="inline-flex items-center font-medium text-casino-primary hover:text-casino-secondary">
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="secondary-button">
            Read Our Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
