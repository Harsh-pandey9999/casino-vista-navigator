
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold">
                <span className="text-casino-accent">Cashino</span>Partners
              </a>
            </div>
            
            <p className="text-slate-400 mb-6">
              Your trusted guide to online casinos, bonuses, and responsible gambling. We connect players with the best gaming experiences.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              
              <a href="#" className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              
              <a href="#" className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#featured-casinos" className="text-slate-400 hover:text-white transition-colors duration-200">Featured Casinos</a>
              </li>
              <li>
                <a href="#bonuses" className="text-slate-400 hover:text-white transition-colors duration-200">Casino Bonuses</a>
              </li>
              <li>
                <a href="#game-types" className="text-slate-400 hover:text-white transition-colors duration-200">Casino Games</a>
              </li>
              <li>
                <a href="#blog" className="text-slate-400 hover:text-white transition-colors duration-200">Blog & Guides</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Mobile Casinos</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Responsible Gambling</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Affiliate Disclosure</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-slate-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm text-center md:text-left">
            &copy; {currentYear} CashinoPartners. All rights reserved. 18+ Gamble Responsibly.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <img src="https://images.unsplash.com/photo-1636045438767-0d8087765e54?w=40&h=20&fit=crop&auto=format" alt="18+" className="mr-2 rounded" />
            <img src="https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=40&h=20&fit=crop&auto=format" alt="Gambling Authority" className="mr-2 rounded" />
            <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=40&h=20&fit=crop&auto=format" alt="SSL Secure" className="mr-2 rounded" />
            <img src="https://images.unsplash.com/photo-1639322534667-9ba5121313fc?w=40&h=20&fit=crop&auto=format" alt="Safe Gambling" className="rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
