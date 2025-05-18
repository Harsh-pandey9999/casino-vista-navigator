
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 px-4 visible">
      {/* Background with subtle gradient and overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-casino-primary/80 to-casino-accent/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTMwIDMwbDMwLTMwSDMweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPgogIDxwYXRoIGQ9Ik0zMCAzMEwwIDYwaDMweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPgogIDxwYXRoIGQ9Ik0zMCAzMGwzMCAzMFYzMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz4KICA8cGF0aCBkPSJNMzAgMzBMMCA2MFYweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPgo8L3N2Zz4=')]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Unlock a World of Casino Entertainment: Your Journey Starts Here!
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            Discover top-rated online casinos, exclusive bonuses, and expert reviews to enhance your gaming experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <a href="#featured-casinos" className="cta-button w-full sm:w-auto">
              Discover Casinos Now!
              <ArrowRight size={18} />
            </a>
            
            <button 
              onClick={scrollToHowItWorks}
              className="secondary-button bg-white/20 border-white text-white hover:bg-white/30 w-full sm:w-auto"
            >
              Learn How It Works
            </button>
          </div>
          
          <div className="mt-12 hidden md:flex gap-8 justify-center md:justify-start animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polygon points="19 20 9 12 19 4 19 20"></polygon>
                  <line x1="5" y1="19" x2="5" y2="5"></line>
                </svg>
              </div>
              <span className="text-white font-medium">Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                  <path d="M18 12a2 2 0 0 0 0 4h2v-4z"></path>
                </svg>
              </div>
              <span className="text-white font-medium">Exclusive Bonuses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <span className="text-white font-medium">Trusted Reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated arrow indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
