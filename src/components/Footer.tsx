
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@cashinopartners.com" className="text-slate-400 hover:text-white transition-colors duration-200">
                  info@cashinopartners.com
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Support Center
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Live Chat
                </a>
              </li>
            </ul>
            
            <div className="mt-6 bg-slate-800 rounded-lg p-4">
              <h4 className="text-sm font-bold mb-2">Subscribe to our newsletter</h4>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-slate-700 text-white text-sm rounded-lg px-3 py-2 w-full focus:ring-casino-primary focus:border-casino-primary border-0"
                />
                <button 
                  type="submit"
                  className="bg-casino-primary hover:bg-casino-secondary text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <hr className="border-slate-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm text-center md:text-left">
            &copy; {currentYear} CashinoPartners. All rights reserved. 18+ Gamble Responsibly.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <img src="https://via.placeholder.com/40x20?text=18+" alt="18+" className="mr-2" />
            <img src="https://via.placeholder.com/40x20?text=GRA" alt="Gambling Authority" className="mr-2" />
            <img src="https://via.placeholder.com/40x20?text=SSL" alt="SSL Secure" className="mr-2" />
            <img src="https://via.placeholder.com/40x20?text=Safe" alt="Safe Gambling" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
