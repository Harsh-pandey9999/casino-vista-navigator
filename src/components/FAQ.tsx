
import React, { useState, useEffect, useRef } from 'react';

const faqItems = [
  {
    id: 1,
    question: "How do I choose the right online casino?",
    answer: "When choosing an online casino, consider factors such as licensing, game selection, payment methods, bonus offers, and customer support. Our reviews cover all these aspects to help you make an informed decision. We recommend only licensed casinos with proven fair gaming practices."
  },
  {
    id: 2,
    question: "Are the casino bonuses really free?",
    answer: "Casino bonuses typically come with terms and conditions like wagering requirements, time limits, and game restrictions. While not entirely 'free,' they do provide extra value and extend your playing time. We always recommend reading the T&Cs before claiming any bonus."
  },
  {
    id: 3,
    question: "How do I know if an online casino is safe?",
    answer: "Safe online casinos are licensed by reputable authorities, use SSL encryption to protect your data, have their games tested for fairness by independent organizations, and implement responsible gambling policies. All casinos we recommend meet these strict safety criteria."
  },
  {
    id: 4,
    question: "Can I play casino games on my mobile device?",
    answer: "Yes, most modern online casinos are fully mobile-compatible, either through responsive websites or dedicated apps. You can play a wide range of games on smartphones and tablets with iOS or Android operating systems, enjoying the same features as on desktop."
  },
  {
    id: 5,
    question: "How do casino affiliate sites like CashinoPartners work?",
    answer: "Casino affiliate sites like ours provide information, reviews, and comparisons of online casinos. When you sign up through our links, we may receive a commission from the casino at no extra cost to you. This allows us to offer our service for free while providing exclusive bonus deals."
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
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

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-4">
              <button
                onClick={() => toggleItem(item.id)}
                className={`
                  flex justify-between items-center w-full px-6 py-4 text-left 
                  font-medium rounded-lg transition-all duration-200
                  ${openItem === item.id 
                    ? 'bg-casino-primary text-white shadow-md' 
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }
                `}
              >
                <span>{item.question}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform duration-200 ${openItem === item.id ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`
                  overflow-hidden transition-all duration-300 rounded-b-lg bg-white border-x border-b border-slate-200
                  ${openItem === item.id ? 'max-h-96 py-4 px-6' : 'max-h-0 py-0 px-6 border-none'}
                `}
              >
                <p className="text-slate-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
