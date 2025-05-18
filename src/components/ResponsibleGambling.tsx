
import React, { useEffect, useRef } from 'react';

const responsibleGamblingLinks = [
  { name: "BeGambleAware", url: "#" },
  { name: "GamCare", url: "#" },
  { name: "Gambling Therapy", url: "#" },
  { name: "National Problem Gambling Helpline", url: "#" }
];

const ResponsibleGambling = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 border border-slate-100">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-casino-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Responsible Gambling</h2>
              
              <p className="text-slate-600 mb-4">
                At CashinoPartners, we promote responsible gambling and want our users to have a positive and safe experience. Gambling should be entertaining and not a way to make money or escape problems.
              </p>
              
              <p className="text-slate-600 mb-6">
                We encourage all players to set limits, take regular breaks, and never gamble with money they cannot afford to lose. If you or someone you know shows signs of gambling addiction, please seek help from professional organizations.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-medium text-slate-800 mb-2">Helpful Resources:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {responsibleGamblingLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.url} 
                      className="text-casino-primary hover:text-casino-secondary flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleGambling;
