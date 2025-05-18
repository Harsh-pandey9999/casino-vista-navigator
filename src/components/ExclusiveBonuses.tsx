
import React, { useEffect, useRef } from 'react';

const bonusOffers = [
  {
    id: 1,
    casinoName: "Royal Vegas",
    logo: "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=200&h=100&fit=crop&auto=format",
    bonus: "100% Match Bonus up to $500",
    freeSpins: 50,
    exclusive: true,
    code: "CASHINO100"
  },
  {
    id: 2,
    casinoName: "Spin Palace",
    logo: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=200&h=100&fit=crop&auto=format",
    bonus: "200% First Deposit Bonus",
    freeSpins: 100,
    exclusive: true,
    code: "SPINVIP"
  },
  {
    id: 3,
    casinoName: "Lucky Days",
    logo: "https://images.unsplash.com/photo-1596838132731-3c682f135e9a?w=200&h=100&fit=crop&auto=format",
    bonus: "$25 No Deposit Bonus",
    freeSpins: 25,
    exclusive: true,
    code: "LUCKY25"
  },
];

const ExclusiveBonuses = () => {
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
    <section id="bonuses" ref={sectionRef} className="py-16 md:py-24 px-4 bg-gradient-to-br from-casino-primary/10 to-casino-accent/10">
      <div className="container mx-auto">
        <h2 className="section-heading">Exclusive Bonuses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {bonusOffers.map((offer, index) => (
            <div 
              key={offer.id}
              className="casino-card bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 relative group"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {offer.exclusive && (
                <div className="absolute top-4 left-0 bg-casino-accent text-white text-xs font-bold py-1 px-3 rounded-r-full shadow-md">
                  EXCLUSIVE
                </div>
              )}
              
              <div className="h-28 bg-slate-100 flex items-center justify-center p-4 overflow-hidden">
                <img 
                  src={offer.logo}
                  alt={`${offer.casinoName} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{offer.casinoName}</h3>
                
                <div className="bg-slate-100 rounded-lg p-3 mb-4">
                  <div className="text-lg font-bold text-casino-primary">{offer.bonus}</div>
                  {offer.freeSpins > 0 && (
                    <div className="text-sm font-medium text-slate-700 mt-1">+ {offer.freeSpins} Free Spins</div>
                  )}
                </div>
                
                {offer.code && (
                  <div className="flex items-center justify-between mb-4 bg-slate-50 border border-slate-200 rounded p-2">
                    <div className="text-xs text-slate-500">Bonus Code:</div>
                    <div className="font-mono font-bold text-casino-dark">{offer.code}</div>
                  </div>
                )}
                
                <a 
                  href="#" 
                  className="block w-full bg-casino-red hover:bg-red-600 text-white font-medium text-center py-3 rounded-lg transition-colors duration-300 group-hover:animate-pulse-light"
                >
                  Claim Bonus & Visit Casino
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="secondary-button">
            View All Bonuses
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveBonuses;
