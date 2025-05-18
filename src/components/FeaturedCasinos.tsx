
import React, { useEffect, useRef } from 'react';

const casinoData = [
  {
    id: 1,
    name: "Royal Flush Casino",
    logo: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=200&h=100&fit=crop&auto=format",
    highlight: "100% Welcome Bonus up to $1000",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Lucky Spin Casino",
    logo: "https://images.unsplash.com/photo-1596838132731-3c682f135e9a?w=200&h=100&fit=crop&auto=format",
    highlight: "200 Free Spins on First Deposit",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Golden Jackpot",
    logo: "https://images.unsplash.com/photo-1596460658875-09e2e167e4b7?w=200&h=100&fit=crop&auto=format",
    highlight: "No Deposit Bonus - $25 Free",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Diamond VIP Club",
    logo: "https://images.unsplash.com/photo-1596566519250-7692eda24ca9?w=200&h=100&fit=crop&auto=format",
    highlight: "VIP Program with Cashback",
    rating: 4.9,
  }
];

const FeaturedCasinos = () => {
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
    <section id="featured-casinos" ref={sectionRef} className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto">
        <h2 className="section-heading">Featured Online Casinos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {casinoData.map((casino, index) => (
            <div 
              key={casino.id} 
              className="casino-card bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative">
                <img 
                  src={casino.logo} 
                  alt={`${casino.name} logo`}
                  className="max-h-full max-w-full object-contain mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{casino.name}</h3>
                
                <div className="star-rating mb-3">
                  {renderStars(casino.rating)}
                  <span className="text-sm text-slate-600 ml-2">{casino.rating}/5</span>
                </div>
                
                <p className="text-sm text-slate-600 mb-4 h-10">{casino.highlight}</p>
                
                <a href="#" className="block w-full bg-gradient-to-r from-casino-primary to-purple-600 hover:from-casino-secondary hover:to-purple-500 text-white font-medium text-center py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  Visit Casino
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center justify-center gap-2 bg-white text-casino-primary border-2 border-casino-primary font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-sm hover:bg-blue-50 transform hover:scale-[1.02]">
            View All Casinos
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCasinos;
