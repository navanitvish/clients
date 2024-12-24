import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WonByBidLanding = () => {
  const handleDownloadAppClick = () => {
    window.open("https://www.transferx.in/trnsfr.YSloVo", "_blank");
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false
    });
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <div className="text-black flex-grow-0">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center max-w-5xl gap-3">
          <h1
            data-aos="fade-down"
            className="text-4xl sm:text-4xl md:text-6xl font-bold lg:text-6xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent text-center p-4 mt-6"
          >
            World's First APP
          </h1>

          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-xl sm:text-xl text-center md:text-2xl text-white font-bold p-6 rounded-xl shadow-lg leading-relaxed transform transition-all hover:scale-105 mt-4"
          >
            World's First Skill-Based App Delivering 20x Faster Results
          </p>

          <p
            data-aos="fade-left"
            data-aos-delay="400"
            className="text-xl sm:text-xl md:text-2xl text-white font-normal p-6 rounded-xl leading-relaxed transform transition-all hover:scale-105"
          >
            Experience outcomes in minutes, not hours. WonByBid brings you the best and most exciting gaming experience.
          </p>

          <p
            data-aos="fade-right"
            data-aos-delay="600"
            className="text-xl sm:text-xl md:text-2xl backdrop-blur-sm font-medium text-white p-6 rounded-xl shadow-lg leading-relaxed transform transition-all hover:scale-105"
          >
            In just 10 days, WonByBid has become the talk of the town, bringing unmatched fun and excitement.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 p-4"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <button
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