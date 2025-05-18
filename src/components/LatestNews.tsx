
import React, { useEffect, useRef } from 'react';

const newsItems = [
  {
    id: 1,
    title: "New Major Casino Launch Coming Next Month",
    excerpt: "Industry giant prepares to unveil its newest online platform with over 1,000 games and innovative features.",
    date: "May 10, 2025",
    image: "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?w=300&h=200&fit=crop&auto=format",
    category: "Industry News"
  },
  {
    id: 2,
    title: "Exclusive: Revolutionary Slot Game Preview",
    excerpt: "We got a sneak peek at the upcoming slot release that promises to redefine online gaming with its unique mechanics.",
    date: "May 15, 2025",
    image: "https://images.unsplash.com/photo-1682687982502-1529728f4ce9?w=300&h=200&fit=crop&auto=format",
    category: "Game Preview"
  },
  {
    id: 3,
    title: "Regulatory Changes Impact Casino Bonuses",
    excerpt: "Recent regulatory updates are changing how online casinos can offer and structure their welcome bonuses.",
    date: "May 12, 2025",
    image: "https://images.unsplash.com/photo-1603201126520-91f927554842?w=300&h=200&fit=crop&auto=format",
    category: "Regulations"
  }
];

const LatestNews = () => {
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
    <section id="news" ref={sectionRef} className="py-16 md:py-24 px-4 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="section-heading">Latest Casino News & Updates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {newsItems.map((news, index) => (
            <div 
              key={news.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-casino-primary text-white text-xs font-medium py-1 px-3 rounded-full">
                  {news.category}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center text-xs text-slate-500 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {news.date}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2">{news.title}</h3>
                
                <p className="text-slate-600 mb-4 line-clamp-3">{news.excerpt}</p>
                
                <a href="#" className="inline-flex items-center font-medium text-casino-primary hover:text-casino-secondary">
                  Read Full Story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="secondary-button">
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
