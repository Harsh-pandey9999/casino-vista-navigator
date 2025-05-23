
import React, { useEffect, useRef } from 'react';

const newCasinos = [
  {
    id: 1,
    name: "Vegas Paradise",
    logo: "https://images.unsplash.com/photo-1601370552761-9852e3b6f7cb?w=200&h=100&fit=crop&auto=format",
    description: "Launched this month with 200+ games and a sleek mobile app. Get a 150% match bonus.",
    rating: 4.7,
    launchedDays: 5,
  },
  {
    id: 2,
    name: "Fortune Wheel",
    logo: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=200&h=100&fit=crop&auto=format",
    description: "Brand new casino featuring exclusive games and weekly tournaments with cash prizes.",
    rating: 4.5,
    launchedDays: 12,
  },
  {
    id: 3,
    name: "Elite Spins",
    logo: "https://images.unsplash.com/photo-1624954784400-d181eb441e47?w=200&h=100&fit=crop&auto=format",
    description: "A premium gaming experience with VIP service from day one and instant withdrawals.",
    rating: 4.8,
    launchedDays: 7,
  },
];

const NewestCasinos = () => {
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

  // Function to render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star">★</span>);
    }
    
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star text-gray-300">★</span>);
    }
    
    return stars;
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto">
        <h2 className="section-heading">Newest Casinos Added</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {newCasinos.map((casino, index) => (
            <div 
              key={casino.id} 
              className="casino-card bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100 relative hover:translate-y-[-8px] transition-all duration-300"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="badge-new">NEW</div>
              
              <div className="h-32 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center p-4 overflow-hidden">
                <img 
                  src={casino.logo} 
                  alt={`${casino.name} logo`}
                  className="max-h-full max-w-full object-contain mix-blend-lighten"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{casino.name}</h3>
                  <span className="text-xs font-medium bg-casino-accent/10 text-casino-accent py-1 px-2 rounded-full">
                    {casino.launchedDays}d ago
                  </span>
                </div>
                
                <div className="star-rating mb-3">
                  {renderStars(casino.rating)}
                  <span className="text-sm text-slate-600 ml-2">{casino.rating}/5</span>
                </div>
                
                <p className="text-sm text-slate-600 mb-4">{casino.description}</p>
                
                <a href="#" className="block w-full bg-gradient-to-r from-casino-accent to-purple-500 hover:from-casino-accent/90 hover:to-purple-600 text-white font-medium text-center py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  Visit Casino
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewestCasinos;
