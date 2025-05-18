
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedCasinos from '../components/FeaturedCasinos';
import GameTypes from '../components/GameTypes';
import NewestCasinos from '../components/NewestCasinos';
import ExclusiveBonuses from '../components/ExclusiveBonuses';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CasinoComparison from '../components/CasinoComparison';
import LatestNews from '../components/LatestNews';
import ResponsibleGambling from '../components/ResponsibleGambling';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import UserReviews from '../components/UserReviews';
import MobileCasino from '../components/MobileCasino';
import Blog from '../components/Blog';
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
      <ExclusiveBonuses />
      <HowItWorks />
      <Testimonials />
      <CasinoComparison />
      <LatestNews />
      <ResponsibleGambling />
      <FAQ />
      <CTABanner />
      <UserReviews />
      <MobileCasino />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
