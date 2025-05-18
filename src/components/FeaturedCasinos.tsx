
import React, { useEffect, useRef } from 'react';

const casinoData = [
  {
    id: 1,
    name: "Royal Flush Casino",
    logo: "https://images.unsplash.com/photo-1635048424329-5b66a7f3c98b?w=200&h=100&fit=crop&auto=format",
    highlight: "100% Welcome Bonus up to $1000",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Lucky Spin Casino",
    logo: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=200&h=100&fit=crop&auto=format",
    highlight: "200 Free Spins on First Deposit",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Golden Jackpot",
    logo: "https://images.unsplash.com/photo-1596838132731-3c682f135e9a?w=200&h=100&fit=crop&auto=format",
    highlight: "No Deposit Bonus - $25 Free",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Diamond VIP Club",
    logo: "https://images.unsplash.com/photo-1596355063782-62b5a680afba?w=200&h=100&fit=crop&auto=format",
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
    <section id="featured-casinos" ref={sectionRef} className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">Featured Online Casinos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {casinoData.map((casino, index) => (
            <div 
              key={casino.id} 
              className="casino-card bg-white rounded-xl shadow-md overflow-hidden border border-slate-100"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="h-40 bg-slate-100 flex items-center justify-center p-4 overflow-hidden relative">
                <img 
                  src={casino.logo} 
                  alt={`${casino.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100/40 to-transparent"></div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{casino.name}</h3>
                
                <div className="star-rating mb-3">
                  {renderStars(casino.rating)}
                  <span className="text-sm text-slate-600 ml-2">{casino.rating}/5</span>
                </div>
                
                <p className="text-sm text-slate-600 mb-4 h-10">{casino.highlight}</p>
                
                <a href="#" className="block w-full bg-casino-primary hover:bg-casino-secondary text-white font-medium text-center py-2.5 rounded-lg transition-colors duration-300">
                  Visit Casino
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="secondary-button">
            View All Casinos
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCasinos;
