import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WonByBidLanding = () => {
  const headingRef = useRef(null);
  const textRefs = useRef([]);
  const buttonRef = useRef(null);
  const gradientRef = useRef(null);

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

    // Staggered fade in for text paragraphs
    gsap.fromTo(
      textRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      }
    );

    // Button pop-in animation
    gsap.fromTo(
      buttonRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay: 1 }
    );

    // Simple scroll animations
    textRefs.current.forEach((textRef) => {
      ScrollTrigger.create({
        trigger: textRef,
        start: "top bottom-=100",
        onEnter: () => {
          gsap.to(textRef, {
            y: 0,
            opacity: 1,
            duration: 0.5,
          });
        },
        onLeave: () => {
          gsap.to(textRef, {
            y: 30,
            opacity: 0.5,
            duration: 0.5,
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <div className="text-black py-8 flex-grow-0">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center max-w-5xl gap-4">
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
            ref={(el) => (textRefs.current[0] = el)}
            className="text-xl sm:text-xl md:text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent font-bold p-6 rounded-xl shadow-lg leading-relaxed"
          >
            World's First Skill-Based App Delivering 20x Faster Results
          </p>

          <p
            ref={(el) => (textRefs.current[1] = el)}
            className="text-xl sm:text-xl md:text-2xl text-white font-normal p-6 rounded-xl leading-relaxed"
          >
            Experience outcomes in minutes, not hours. WonByBid brings you the best and most exciting gaming experience.
          </p>

          <p
            ref={(el) => (textRefs.current[2] = el)}
            className="text-xl sm:text-xl md:text-2xl backdrop-blur-sm font-medium text-white p-6 rounded-xl shadow-lg leading-relaxed"
          >
            In just 10 days, WonByBid has become the talk of the town, bringing unmatched fun and excitement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 p-4">
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