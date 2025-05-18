
import React, { useEffect, useRef } from 'react';

const userReviews = [
  {
    id: 1,
    name: "Robert D.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    review: "I've been playing at Royal Flush Casino for over 6 months now after finding them through CashinoPartners. The exclusive welcome bonus was much better than advertised elsewhere, and their customer service has been excellent.",
    rating: 5,
    casino: "Royal Flush Casino",
    date: "April 28, 2025"
  },
  {
    id: 2,
    name: "Jennifer L.",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    review: "Lucky Spin Casino has the best selection of slot games I've found. The free spins bonus I got through this site was amazing, and I even won a decent amount that I was able to withdraw without any issues.",
    rating: 4,
    casino: "Lucky Spin Casino",
    date: "May 2, 2025"
  },
  {
    id: 3,
    name: "David M.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    review: "Golden Jackpot has become my go-to casino for table games, especially blackjack. Their live dealer experience is top-notch. Thanks to CashinoPartners for the recommendation and the exclusive bonus code.",
    rating: 5,
    casino: "Golden Jackpot",
    date: "May 8, 2025"
  }
];

const UserReviews = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">User Reviews & Ratings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {userReviews.map((review, index) => (
            <div 
              key={review.id}
              className="bg-white rounded-xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow duration-300 relative"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="font-bold text-slate-800">{review.name}</h3>
                  <p className="text-sm text-slate-500">Review for {review.casino}</p>
                </div>
              </div>
              
              <div className="star-rating mb-3">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-slate-600 italic mb-4">"{review.review}"</p>
              
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>{review.date}</span>
                <span>Verified Player</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-col items-center">
          <p className="text-center text-slate-600 mb-6 max-w-2xl">
            All reviews are from verified players who signed up through CashinoPartners. We value authentic feedback to help you make informed decisions.
          </p>
          
          <a href="#" className="secondary-button">
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
