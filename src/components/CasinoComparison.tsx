
import React, { useState, useEffect, useRef } from 'react';

const casinoOptions = [
  { id: 1, name: "Royal Flush Casino", logo: "https://images.unsplash.com/photo-1635048424329-5b66a7f3c98b?w=100&h=50&fit=crop&auto=format" },
  { id: 2, name: "Lucky Spin Casino", logo: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=100&h=50&fit=crop&auto=format" },
  { id: 3, name: "Golden Jackpot", logo: "https://images.unsplash.com/photo-1596838132731-3c682f135e9a?w=100&h=50&fit=crop&auto=format" },
  { id: 4, name: "Diamond VIP Club", logo: "https://images.unsplash.com/photo-1596355063782-62b5a680afba?w=100&h=50&fit=crop&auto=format" },
  { id: 5, name: "Vegas Paradise", logo: "https://images.unsplash.com/photo-1563202284-51031dcc9714?w=100&h=50&fit=crop&auto=format" },
  { id: 6, name: "Fortune Wheel", logo: "https://images.unsplash.com/photo-1605979257913-1704eb7b6246?w=100&h=50&fit=crop&auto=format" },
];

const casinoData = {
  1: {
    welcomeBonus: "100% up to $1000 + 50 Free Spins",
    gameProviders: ["NetEnt", "Microgaming", "Play'n GO", "Evolution"],
    mobileCompatibility: "Excellent - Native iOS and Android Apps",
    payoutSpeed: "1-3 Business Days"
  },
  2: {
    welcomeBonus: "200% up to $500 + 100 Free Spins",
    gameProviders: ["Pragmatic Play", "Yggdrasil", "Betsoft", "Quickspin"],
    mobileCompatibility: "Good - Mobile Web App",
    payoutSpeed: "24-48 Hours"
  },
  3: {
    welcomeBonus: "$25 No Deposit Bonus + 150% First Deposit",
    gameProviders: ["NetEnt", "Playtech", "Microgaming", "RTG"],
    mobileCompatibility: "Excellent - Native iOS and Android Apps",
    payoutSpeed: "Same Day"
  },
  4: {
    welcomeBonus: "300% up to $2000 + 25 Free Spins",
    gameProviders: ["Evolution", "Big Time Gaming", "Red Tiger", "Thunderkick"],
    mobileCompatibility: "Very Good - Responsive Design",
    payoutSpeed: "3-5 Business Days"
  },
  5: {
    welcomeBonus: "100% up to $300 + 150 Free Spins",
    gameProviders: ["Microgaming", "NetEnt", "Playtech", "iSoftBet"],
    mobileCompatibility: "Excellent - Native iOS and Android Apps",
    payoutSpeed: "1-2 Business Days"
  },
  6: {
    welcomeBonus: "250% up to $1500",
    gameProviders: ["Evolution", "Pragmatic Play", "Habanero", "Booongo"],
    mobileCompatibility: "Good - Mobile Web App",
    payoutSpeed: "2-4 Business Days"
  }
};

const CasinoComparison = () => {
  const [casino1, setCasino1] = useState<number | null>(null);
  const [casino2, setCasino2] = useState<number | null>(null);
  const [comparisonVisible, setComparisonVisible] = useState(false);
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

  const handleCasino1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    setCasino1(selectedId);
    setComparisonVisible(selectedId !== null && casino2 !== null);
  };

  const handleCasino2Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    setCasino2(selectedId);
    setComparisonVisible(casino1 !== null && selectedId !== null);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">Casino Comparison</h2>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="casino1" className="block text-sm font-medium text-slate-700 mb-2">
                Select First Casino
              </label>
              <select
                id="casino1"
                className="block w-full px-4 py-3 rounded-lg border border-slate-300 shadow-sm focus:ring-casino-primary focus:border-casino-primary"
                onChange={handleCasino1Change}
                defaultValue=""
              >
                <option value="" disabled>Select a casino...</option>
                {casinoOptions.map(casino => (
                  <option 
                    key={casino.id} 
                    value={casino.id}
                    disabled={casino.id === casino2}
                  >
                    {casino.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="casino2" className="block text-sm font-medium text-slate-700 mb-2">
                Select Second Casino
              </label>
              <select
                id="casino2"
                className="block w-full px-4 py-3 rounded-lg border border-slate-300 shadow-sm focus:ring-casino-primary focus:border-casino-primary"
                onChange={handleCasino2Change}
                defaultValue=""
              >
                <option value="" disabled>Select a casino...</option>
                {casinoOptions.map(casino => (
                  <option 
                    key={casino.id} 
                    value={casino.id}
                    disabled={casino.id === casino1}
                  >
                    {casino.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {comparisonVisible && casino1 && casino2 && (
            <div className="mt-10 animate-scale-in">
              <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-3 bg-slate-50 p-4 border-b border-slate-200">
                  <div className="col-span-1"></div>
                  <div className="col-span-1 text-center font-medium">
                    <div className="w-20 h-10 mx-auto mb-2">
                      <img
                        src={casinoOptions.find(c => c.id === casino1)?.logo}
                        alt={casinoOptions.find(c => c.id === casino1)?.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span>{casinoOptions.find(c => c.id === casino1)?.name}</span>
                  </div>
                  <div className="col-span-1 text-center font-medium">
                    <div className="w-20 h-10 mx-auto mb-2">
                      <img
                        src={casinoOptions.find(c => c.id === casino2)?.logo}
                        alt={casinoOptions.find(c => c.id === casino2)?.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span>{casinoOptions.find(c => c.id === casino2)?.name}</span>
                  </div>
                </div>
                
                <div className="divide-y divide-slate-200">
                  {/* Welcome Bonus */}
                  <div className="grid grid-cols-3 p-4 hover:bg-slate-50">
                    <div className="col-span-1 font-medium text-slate-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-casino-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
                      </svg>
                      Welcome Bonus
                    </div>
                    <div className="col-span-1 text-center text-sm">
                      {casinoData[casino1 as keyof typeof casinoData].welcomeBonus}
                    </div>
                    <div className="col-span-1 text-center text-sm">
                      {casinoData[casino2 as keyof typeof casinoData].welcomeBonus}
                    </div>
                  </div>
                  
                  {/* Game Providers */}
                  <div className="grid grid-cols-3 p-4 hover:bg-slate-50">
                    <div className="col-span-1 font-medium text-slate-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-casino-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                      Game Providers
                    </div>
                    <div className="col-span-1 text-center text-sm">
                      <ul className="space-y-1">
                        {casinoData[casino1 as keyof typeof casinoData].gameProviders.map((provider, idx) => (
                          <li key={idx}>{provider}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-span-1 text-center text-sm">
                      <ul className="space-y-1">
                        {casinoData[casino2 as keyof typeof casinoData].gameProviders.map((provider, idx) => (
                          <li key={idx}>{provider}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Mobile Compatibility */}
                  <div className="grid grid-cols-3 p-4 hover:bg-slate-50">
                    <div className="col-span-1 font-medium text-slate-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-casino-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      Mobile Compatibility
                    </div>
                    <div className="col-span-1 text-center text-sm">
                      {casinoData[casino1 as keyof typeof casinoData].mobileCompatibility}
                    </div>
                    <div className="col-span-1 text-center text-sm">
                      {casinoData[casino2 as keyof typeof casinoData].mobileCompatibility}
                    </div>
                  </div>
                  
                  {/* Payout Speed */}
                  <div className="grid grid-cols-3 p-4 hover:bg-slate-50">
                    <div className="col-span-1 font-medium text-slate-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Payout Speed
                    </div>
                    <div className="col-span-1 text-center text-sm">
                      {casinoData[casino1 as keyof typeof casinoData].payoutSpeed}
                    </div>
                    <div className="col-span-1 text-center text-sm">
                      {casinoData[casino2 as keyof typeof casinoData].payoutSpeed}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CasinoComparison;
