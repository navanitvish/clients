import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from 'aos';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger);

const WonByBidLanding = () => {
  const headingRef = useRef(null);
  const textRefs = useRef([]);
  const buttonRef = useRef(null);

  const handleDownloadAppClick = () => {
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        window.open("https://www.transferx.in/trnsfr.YSloVo", "_blank");
      },
    });
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false
      
    });

    // Gradient animation for heading
    gsap.to(headingRef.current, {
      backgroundImage: [
        'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1)',
        'linear-gradient(45deg, #45B7D1, #FF6B6B, #4ECDC4)',
        'linear-gradient(45deg, #4ECDC4, #45B7D1, #FF6B6B)'
      ],
      duration: 3,
      repeat: -1,
      ease: "none",
      backgroundSize: "200% 200%",
      backgroundPosition: ["0% 0%", "100% 100%"],
    });

    // Simple fade in for heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Button pop-in animation
    gsap.fromTo(
      buttonRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay: 1 }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <div className="text-black flex-grow-0">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center max-w-5xl gap-3">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-4xl md:text-6xl font-bold lg:text-6xl bg-clip-text text-transparent text-center p-2"
            style={{
              backgroundImage: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1)',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
            }}
          >
            World's First APP
          </h1>

          <p
            data-aos="fade-up"
          
            className="text-xl sm:text-xl md:text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent font-bold p-6 rounded-xl shadow-lg leading-relaxed transform transition-all hover:scale-105"
          >
            World's First Skill-Based App Delivering 20x Faster Results
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
            className="text-xl sm:text-xl md:text-2xl text-white font-normal p-6 rounded-xl leading-relaxed transform transition-all hover:scale-105"
          >
            Experience outcomes in minutes, not hours. WonByBid brings you the best and most exciting gaming experience.
          </p>

          <p
            data-aos="fade-in"
            data-aos-delay="600"
            data-aos-duration="800"
            className="text-xl sm:text-xl md:text-2xl backdrop-blur-sm font-medium text-white p-6 rounded-xl shadow-lg leading-relaxed transform transition-all hover:scale-105"
          >
            In just 10 days, WonByBid has become the talk of the town, bringing unmatched fun and excitement.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 p-4"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <button
              ref={buttonRef}
              onClick={handleDownloadAppClick}
              className="relative px-8 py-4 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-white rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              <span className="relative z-10">Download App</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WonByBidLanding;