
import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Michael R.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format",
    testimonial: "CashinoPartners helped me find the perfect online casino for blackjack. The exclusive bonus they offered was better than what I found anywhere else. Very satisfied!",
    location: "Las Vegas, NV"
  },
  {
    id: 2,
    name: "Sarah T.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format",
    testimonial: "I was hesitant about online casinos until I used this site. The detailed reviews helped me choose a trustworthy platform, and the bonus code worked perfectly. Great service!",
    location: "Toronto, Canada"
  },
  {
    id: 3,
    name: "James K.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&auto=format",
    testimonial: "As someone who enjoys slots, finding CashinoPartners was a game-changer. They list casinos with the best slot selections and their bonus offers saved me a lot of money.",
    location: "London, UK"
  }
];

const Testimonials = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto">
        <h2 className="section-heading">User Testimonials - Casino Visits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-xl border border-slate-100 relative backdrop-blur-sm bg-white/90 hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="pt-12">
                <svg className="w-12 h-12 text-slate-200 absolute top-14 left-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <p className="text-slate-600 mb-6 relative z-10">{testimonial.testimonial}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                  
                  <div className="star-rating">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
