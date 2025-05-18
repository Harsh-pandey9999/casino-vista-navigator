
import React, { useEffect, useRef } from 'react';

const mobileCasinos = [
  {
    id: 1,
    name: "Royal Vegas Mobile",
    features: [
      "Native iOS and Android apps",
      "Touch-optimized interfaces",
      "Full game library available on mobile",
      "Mobile-exclusive bonuses"
    ],
    screenshot: "https://images.unsplash.com/photo-1565200003367-7a921b6a364a?w=300&h=600&fit=crop&auto=format",
    logo: "https://images.unsplash.com/photo-1635048424329-5b66a7f3c98b?w=100&h=50&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Lucky Spin Mobile",
    features: [
      "Progressive web app technology",
      "Fast loading on all devices",
      "Smooth gameplay experience",
      "Mobile-friendly payment methods"
    ],
    screenshot: "https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?w=300&h=600&fit=crop&auto=format",
    logo: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=100&h=50&fit=crop&auto=format",
  },
];

const MobileCasino = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="section-heading">Mobile Casino Spotlight</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {mobileCasinos.map((casino, index) => (
            <div 
              key={casino.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100"
              style={{ animationDelay: `${0.3 * index}s` }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-60 md:h-auto overflow-hidden bg-slate-100 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-900/20"></div>
                  <img 
                    src={casino.screenshot}
                    alt={`${casino.name} mobile screenshot`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 p-1 bg-white rounded-lg shadow-md w-20">
                    <img 
                      src={casino.logo}
                      alt={casino.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{casino.name}</h3>
                    
                    <ul className="space-y-2 mb-6">
                      {casino.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-casino-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center gap-2 bg-casino-primary hover:bg-casino-secondary text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Visit Mobile Casino
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 mt-12">
          <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Why Play at Mobile Casinos?</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-casino-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-casino-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-center font-medium mb-2">Play Anywhere</h4>
              <p className="text-sm text-slate-600 text-center">Enjoy your favorite games on the go, anytime and anywhere</p>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-casino-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-casino-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h4 className="text-center font-medium mb-2">Full Game Selection</h4>
              <p className="text-sm text-slate-600 text-center">Access the complete library of games optimized for mobile devices</p>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-casino-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-casino-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-center font-medium mb-2">Exclusive Bonuses</h4>
              <p className="text-sm text-slate-600 text-center">Special promotions available only for mobile players</p>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-casino-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-casino-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-center font-medium mb-2">Secure Gaming</h4>
              <p className="text-sm text-slate-600 text-center">Advanced security features to protect your data and transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileCasino;
