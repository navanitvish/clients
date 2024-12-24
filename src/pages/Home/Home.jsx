import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Carousel from "../../components/SliderCarousel";
import MissCallSection from './MissCallSection';
import UserRating from './UserRating';
import StepsLayout from './StepsLayout';
import FantasyCricketLanding from './FantasyCricketLanding';
import SportsContent from './SportsContent';
import FAQAccordion from './FAQAccordion';
import TestimonialSlider from './TestimonialSlider';
import { FaArrowDown } from 'react-icons/fa';
import Toprated from './Toprated';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleDownloadAppClick = () => {
    window.open("https://www.transferx.in/trnsfr.YSloVo", "_blank");
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
      if (scrolled) {
        gsap.to('.download-btn', {
          duration: 0.5,
          opacity: 1,
          y: 560,
          ease: 'power2.out',
        });
      } else {
        gsap.to('.download-btn', {
          duration: 0.5,
          opacity: 0,
          y: -100,
          ease: 'power2.out',
        });
      }
    }
  }, [scrolled]);

  return (
    <div>
      <Carousel />
      <MissCallSection />
      <Toprated/>
      <StepsLayout />
      <FantasyCricketLanding />
      <SportsContent />
      <FAQAccordion />

      {/* Download Button for Mobile View */}
      <div className={`lg:hidden fixed top-7 right-4 p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-md rounded-full download-btn overflow-hidden opacity-0 -translate-y-24`}>
        <button 
          onClick={handleDownloadAppClick} 
          className="text-sm font-medium flex items-center justify-center rounded-full"
        >
          <FaArrowDown />
        </button>
      </div>

      {/* Download Button for Desktop View */}
      <div className="lg:fixed bottom-0 right-0 p-4 bg-red-500 shadow-md rounded-t-xl sm hidden lg:block">
        <button onClick={handleDownloadAppClick} className="text-sm font-medium">
          Download WonByBid app
        </button>
      </div>
    </div>
  );
};

export default Home;