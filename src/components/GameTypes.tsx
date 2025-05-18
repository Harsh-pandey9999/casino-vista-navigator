
import React, { useEffect, useState, useRef } from 'react';
import { Casino, Cards, Gamepad, Dice1, Video } from 'lucide-react';

const gameTypes = [
  {
    id: 1,
    name: 'Slots',
    icon: <Gamepad className="w-8 h-8" />,
    description: 'Classic & video slots with various themes',
  },
  {
    id: 2,
    name: 'Blackjack',
    icon: <Cards className="w-8 h-8" />,
    description: 'Strategic card game against the dealer',
  },
  {
    id: 3,
    name: 'Roulette',
    icon: <Casino className="w-8 h-8" />,
    description: 'Bet on where the ball will land',
  },
  {
    id: 4,
    name: 'Live Casino',
    icon: <Video className="w-8 h-8" />,
    description: 'Real-time games with live dealers',
  },
  {
    id: 5,
    name: 'Poker',
    icon: <Cards className="w-8 h-8" />,
    description: 'Texas Hold\'em and more variations',
  },
  {
    id: 6,
    name: 'Dice Games',
    icon: <Dice1 className="w-8 h-8" />,
    description: 'Craps and other dice-based games',
  },
];

const GameTypes = () => {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);
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

  const handleGameClick = (id: number) => {
    setSelectedGame(id === selectedGame ? null : id);
  };

  return (
    <section id="game-types" ref={sectionRef} className="py-16 md:py-24 px-4 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="section-heading">Browse by Game Type</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-12">
          {gameTypes.map((game, index) => (
            <div 
              key={game.id}
              className={`
                relative rounded-xl p-6 text-center transition-all duration-300 cursor-pointer
                ${selectedGame === game.id 
                  ? 'bg-casino-primary text-white shadow-lg scale-105' 
                  : 'bg-white text-slate-700 shadow-sm hover:shadow-md hover:scale-105'
                }
              `}
              onClick={() => handleGameClick(game.id)}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`
                w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full
                ${selectedGame === game.id 
                  ? 'bg-white/20' 
                  : 'bg-casino-primary/10'
                }
              `}>
                <div className={selectedGame === game.id ? 'text-white' : 'text-casino-primary'}>
                  {game.icon}
                </div>
              </div>
              
              <h3 className="font-medium text-lg mb-1">{game.name}</h3>
              
              <p className={`text-sm ${selectedGame === game.id ? 'text-white/80' : 'text-slate-500'} mt-2`}>
                {game.description}
              </p>
              
              <div className={`
                absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-casino-accent rounded-t-lg transition-all duration-300
                ${selectedGame === game.id ? 'w-full' : ''}
              `}></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-center max-w-2xl mx-auto mb-8 text-slate-600">
            Find casinos offering your favorite games and start playing today with exclusive bonuses for new players.
          </p>
          
          <button className="secondary-button">
            Find Casinos By Game
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameTypes;
