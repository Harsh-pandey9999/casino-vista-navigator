
import React, { useEffect, useRef } from 'react';

const steps = [
  {
    id: 1,
    title: "Browse",
    description: "Browse through our curated selection of top-rated online casinos",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: 2,
    title: "Learn",
    description: "Read reviews, bonus details, and game selection information",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: "Visit",
    description: "Click through to your chosen casino with our exclusive bonuses",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    )
  },
  {
    id: 4,
    title: "Play",
    description: "Sign up, claim your bonus, and enjoy playing at trusted casinos",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="10 8 16 12 10 16 10 8"></polygon>
      </svg>
    )
  }
];

const HowItWorks = () => {
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
    <section id="how-it-works" ref={sectionRef} className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">How It Works - Visiting Casinos Through Us</h2>
        
        <div className="mt-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-slate-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="relative group"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-slate-100 transition-all duration-300 group-hover:border-casino-primary group-hover:shadow-lg z-10 mb-4">
                    <div className="text-casino-primary">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-casino-primary text-white font-bold mb-3 group-hover:bg-casino-accent transition-colors duration-300">
                    {step.id}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                  
                  <p className="text-center text-slate-600">{step.description}</p>
                </div>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center md:hidden my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-lg text-slate-600 mb-6">
            We partner with reputable casinos to bring you exclusive offers. Our service is completely free to use, and we may receive a commission when you sign up through our links.
          </p>
          
          <a href="#featured-casinos" className="cta-button">
            Start Exploring Casinos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
