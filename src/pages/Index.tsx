
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedCasinos from '../components/FeaturedCasinos';
import GameTypes from '../components/GameTypes';
import NewestCasinos from '../components/NewestCasinos';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    const setupIntersectionObserver = () => {
      const sections = document.querySelectorAll('section');
      
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
      
      sections.forEach((section) => {
        observer.observe(section);
      });

      // Clean up the observer on component unmount
      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    };

    setupIntersectionObserver();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedCasinos />
      <GameTypes />
      <NewestCasinos />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
